import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LEGACY_STORAGE_ROOT = path.join(__dirname, "data");
const MOUNT_PATH = process.env.RENDER_DISK_PATH
  ? path.resolve(process.env.RENDER_DISK_PATH)
  : "";
const STORAGE_ROOT = process.env.RECORDS_DATA_DIR
  ? path.resolve(process.env.RECORDS_DATA_DIR)
  : MOUNT_PATH || LEGACY_STORAGE_ROOT;
const DATA_FILE = process.env.RECORDS_DATA_FILE
  ? path.resolve(process.env.RECORDS_DATA_FILE)
  : path.join(STORAGE_ROOT, "records.json");
const FOLLOWUPS_DATA_FILE = process.env.FOLLOWUPS_DATA_FILE
  ? path.resolve(process.env.FOLLOWUPS_DATA_FILE)
  : path.join(STORAGE_ROOT, "followups.json");
const SERVER_LOG_FILE = process.env.SERVER_LOG_FILE
  ? path.resolve(process.env.SERVER_LOG_FILE)
  : path.join(MOUNT_PATH || STORAGE_ROOT, "server.log");

const app = express();
const sseClients = new Set();
const ipRateLimitMap = new Map();

// ── Broadcast SSE ──────────────────────────────────────────────
const broadcastRealtimeEvent = (event, payload = {}) => {
  const data = `event: ${event}\ndata: ${JSON.stringify({ ...payload, at: new Date().toISOString() })}\n\n`;
  sseClients.forEach((client) => {
    try { client.write(data); } catch { sseClients.delete(client); }
  });
};

// ── Security headers ───────────────────────────────────────────
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "DENY");
  res.header("Referrer-Policy", "strict-origin-when-cross-origin");
  res.header("Permissions-Policy", "geolocation=(), microphone=(self), camera=()");
  if (req.method === "OPTIONS") { res.sendStatus(204); return; }
  next();
});

// ── Rate limiting ──────────────────────────────────────────────
app.use("/api", (req, res, next) => {
  const ip = String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown").split(",")[0].trim();
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 300;
  const bucket = ipRateLimitMap.get(ip) || { count: 0, startAt: now };
  if (now - bucket.startAt > windowMs) { bucket.count = 0; bucket.startAt = now; }
  bucket.count += 1;
  ipRateLimitMap.set(ip, bucket);
  if (bucket.count > maxRequests) {
    res.status(429).json({ message: "Too many requests. Please try again later." });
    return;
  }
  next();
});

// Clean up rate-limit map every 5 minutes to prevent memory leak
setInterval(() => {
  const cutoff = Date.now() - 120_000;
  for (const [ip, bucket] of ipRateLimitMap) {
    if (bucket.startAt < cutoff) ipRateLimitMap.delete(ip);
  }
}, 300_000);

app.use(express.json({ limit: "2mb" }));
app.use(express.static(__dirname));

// ── SSE stream ────────────────────────────────────────────────
app.get("/api/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();
  res.write(`event: hello\ndata: ${JSON.stringify({ status: "connected", at: new Date().toISOString() })}\n\n`);
  sseClients.add(res);
  req.on("close", () => { sseClients.delete(res); res.end(); });
});

// ── Logging ───────────────────────────────────────────────────
const appendServerLog = async (message) => {
  try {
    const logDir = path.dirname(SERVER_LOG_FILE);
    await fs.mkdir(logDir, { recursive: true });
    await fs.appendFile(SERVER_LOG_FILE, `[${new Date().toISOString()}] ${message}\n`, "utf-8");
  } catch { /* best-effort */ }
};

const logStorageContext = async () => {
  const report = [
    `mountPath=${MOUNT_PATH}`,
    `storageRoot=${STORAGE_ROOT}`,
    `recordsFile=${DATA_FILE}`,
    `followupsFile=${FOLLOWUPS_DATA_FILE}`,
    `logFile=${SERVER_LOG_FILE}`,
    `renderService=${process.env.RENDER_SERVICE_NAME || ""}`,
  ].join(" | ");
  console.log(`Storage context: ${report}`);
  await appendServerLog(`Storage context: ${report}`);
};

// ── File helpers ──────────────────────────────────────────────
const fileExists = async (p) => { try { await fs.access(p); return true; } catch { return false; } };

const migrateLegacyStorageIfNeeded = async () => {
  if (path.resolve(STORAGE_ROOT) === path.resolve(LEGACY_STORAGE_ROOT)) return;
  const legacy = { records: path.join(LEGACY_STORAGE_ROOT, "records.json"), followups: path.join(LEGACY_STORAGE_ROOT, "followups.json") };
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.mkdir(path.dirname(FOLLOWUPS_DATA_FILE), { recursive: true });
  if (!(await fileExists(DATA_FILE)) && (await fileExists(legacy.records))) {
    await fs.copyFile(legacy.records, DATA_FILE);
    console.log(`Migrated records → ${DATA_FILE}`);
  }
  if (!(await fileExists(FOLLOWUPS_DATA_FILE)) && (await fileExists(legacy.followups))) {
    await fs.copyFile(legacy.followups, FOLLOWUPS_DATA_FILE);
    console.log(`Migrated followups → ${FOLLOWUPS_DATA_FILE}`);
  }
};

const ensureJsonFile = async (filePath, initial) => {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  try { await fs.access(filePath); } catch { await fs.writeFile(filePath, JSON.stringify(initial, null, 2)); }
};

const readJsonFile = async (filePath, fallback) => {
  await ensureJsonFile(filePath, fallback);
  const raw = await fs.readFile(filePath, "utf-8");
  try { return JSON.parse(raw || "{}"); } catch { return fallback; }
};

const writeJsonFile = async (filePath, payload) => {
  await ensureJsonFile(filePath, payload);
  await fs.writeFile(filePath, JSON.stringify(payload, null, 2));
};

const readRecords = async () => {
  const parsed = await readJsonFile(DATA_FILE, { records: [] });
  return (Array.isArray(parsed.records) ? parsed.records : [])
    .filter((item) => item && typeof item === "object")
    .map((item) => ({ ...item, formId: String(item.formId || "").trim() }));
};

const writeRecords = async (records) => writeJsonFile(DATA_FILE, { records });

const FOLLOWUP_TYPES = new Set(["report90", "visarun"]);

const readFollowups = async () => {
  const parsed = await readJsonFile(FOLLOWUPS_DATA_FILE, { report90: [], visarun: [] });
  return {
    report90: Array.isArray(parsed.report90) ? parsed.report90 : [],
    visarun: Array.isArray(parsed.visarun) ? parsed.visarun : [],
  };
};

const writeFollowups = async (followups) =>
  writeJsonFile(FOLLOWUPS_DATA_FILE, {
    report90: Array.isArray(followups.report90) ? followups.report90 : [],
    visarun: Array.isArray(followups.visarun) ? followups.visarun : [],
  });

// ── Route wrapper (catches async errors) ──────────────────────
const wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// ── Records API ───────────────────────────────────────────────
app.get("/api/records", wrap(async (_req, res) => {
  res.json(await readRecords());
}));

app.get("/api/records/:id", wrap(async (req, res) => {
  const id = String(req.params.id || "").trim();
  const record = (await readRecords()).find((r) => r.formId === id);
  if (!record) { res.status(404).json({ message: "Record not found" }); return; }
  res.json(record);
}));

app.post("/api/records", wrap(async (req, res) => {
  const payload = req.body || {};
  const records = await readRecords();
  const incomingId = String(payload.formId || "").trim();
  const idx = incomingId ? records.findIndex((r) => r.formId === incomingId) : -1;
  if (idx >= 0) {
    records[idx] = { ...payload, formId: incomingId };
    await writeRecords(records);
    broadcastRealtimeEvent("record-change", { action: "update", formId: incomingId });
    res.json(records[idx]);
    return;
  }
  const maxId = records.reduce((m, r) => { const v = parseInt(r.formId, 10); return isNaN(v) ? m : Math.max(m, v); }, 0);
  const nextId = String(maxId + 1);
  const next = { ...payload, formId: nextId };
  records.unshift(next);
  await writeRecords(records);
  broadcastRealtimeEvent("record-change", { action: "create", formId: nextId });
  res.json(next);
}));

app.put("/api/records/:id", wrap(async (req, res) => {
  const id = String(req.params.id || "").trim();
  if (!id) { res.status(400).json({ message: "Invalid record id" }); return; }
  const records = await readRecords();
  const idx = records.findIndex((r) => r.formId === id);
  if (idx < 0) { res.status(404).json({ message: "Record not found" }); return; }
  records[idx] = { ...req.body, formId: id };
  await writeRecords(records);
  broadcastRealtimeEvent("record-change", { action: "update", formId: id });
  res.json(records[idx]);
}));

app.delete("/api/records", wrap(async (_req, res) => {
  await writeRecords([]);
  broadcastRealtimeEvent("record-change", { action: "clear" });
  res.json({ status: "ok" });
}));

app.delete("/api/records/:id", wrap(async (req, res) => {
  const id = String(req.params.id || "").trim();
  const records = (await readRecords()).filter((r) => r.formId !== id);
  await writeRecords(records);
  broadcastRealtimeEvent("record-change", { action: "delete", formId: id });
  res.json({ status: "ok" });
}));

// ── Followups API ─────────────────────────────────────────────
app.get("/api/followups/:type", wrap(async (req, res) => {
  const { type } = req.params;
  if (!FOLLOWUP_TYPES.has(type)) { res.status(400).json({ message: "Invalid followup type" }); return; }
  res.json((await readFollowups())[type]);
}));

app.post("/api/followups/:type", wrap(async (req, res) => {
  const { type } = req.params;
  if (!FOLLOWUP_TYPES.has(type)) { res.status(400).json({ message: "Invalid followup type" }); return; }
  const payload = req.body || {};
  const followups = await readFollowups();
  const rows = followups[type];
  const incomingId = String(payload.id || "").trim();
  const now = new Date().toISOString();
  if (incomingId) {
    const idx = rows.findIndex((r) => String(r.id) === incomingId);
    if (idx >= 0) {
      const updated = { ...rows[idx], ...payload, id: incomingId, updatedAt: now };
      rows[idx] = updated;
      followups[type] = rows;
      await writeFollowups(followups);
      broadcastRealtimeEvent("followup-change", { action: "update", type, id: incomingId });
      res.json(updated);
      return;
    }
  }
  const nextId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const created = { ...payload, id: nextId, createdAt: now, updatedAt: now };
  rows.unshift(created);
  followups[type] = rows;
  await writeFollowups(followups);
  broadcastRealtimeEvent("followup-change", { action: "create", type, id: nextId });
  res.json(created);
}));

// ── Health check ──────────────────────────────────────────────
app.get("/api/health", (_req, res) => res.json({ status: "ok", at: new Date().toISOString() }));

// ── Global error handler ──────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error(`[ERROR] ${req.method} ${req.path}:`, err.message);
  appendServerLog(`ERROR ${req.method} ${req.path}: ${err.message}`);
  if (res.headersSent) return;
  res.status(500).json({ message: "Internal server error" });
});

// ── Start ─────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await migrateLegacyStorageIfNeeded();
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Records: ${DATA_FILE}`);
  console.log(`Followups: ${FOLLOWUPS_DATA_FILE}`);
  await logStorageContext();
});
