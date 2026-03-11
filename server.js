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
  : path.join(MOUNT_PATH, "server.log");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

app.use(express.json({ limit: "2mb" }));
app.use(express.static(__dirname));

const appendServerLog = async (message) => {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}\n`;
  const logDir = path.dirname(SERVER_LOG_FILE);
  await fs.mkdir(logDir, { recursive: true });
  await fs.appendFile(SERVER_LOG_FILE, line, "utf-8");
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
  try {
    await appendServerLog(`Storage context: ${report}`);
  } catch (error) {
    console.error(`Unable to write server log: ${error.message}`);
  }
};


const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const migrateLegacyStorageIfNeeded = async () => {
  const usingLegacyRoot = path.resolve(STORAGE_ROOT) === path.resolve(LEGACY_STORAGE_ROOT);
  if (usingLegacyRoot) {
    return;
  }

  const legacyRecordsFile = path.join(LEGACY_STORAGE_ROOT, "records.json");
  const legacyFollowupsFile = path.join(LEGACY_STORAGE_ROOT, "followups.json");

  const targetRecordsExists = await fileExists(DATA_FILE);
  const targetFollowupsExists = await fileExists(FOLLOWUPS_DATA_FILE);

  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.mkdir(path.dirname(FOLLOWUPS_DATA_FILE), { recursive: true });

  if (!targetRecordsExists && (await fileExists(legacyRecordsFile))) {
    await fs.copyFile(legacyRecordsFile, DATA_FILE);
    console.log(`Migrated records data to persistent path: ${DATA_FILE}`);
  }

  if (!targetFollowupsExists && (await fileExists(legacyFollowupsFile))) {
    await fs.copyFile(legacyFollowupsFile, FOLLOWUPS_DATA_FILE);
    console.log(`Migrated followups data to persistent path: ${FOLLOWUPS_DATA_FILE}`);
  }
};

const ensureJsonFile = async (filePath, initialPayload) => {
  const dataDir = path.dirname(filePath);
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, JSON.stringify(initialPayload, null, 2));
  }
};

const readJsonFile = async (filePath, fallbackPayload) => {
  await ensureJsonFile(filePath, fallbackPayload);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw || "{}");
};

const writeJsonFile = async (filePath, payload) => {
  await ensureJsonFile(filePath, payload);
  await fs.writeFile(filePath, JSON.stringify(payload, null, 2));
};

const readRecords = async () => {
  const parsed = await readJsonFile(DATA_FILE, { records: [] });
  const rows = Array.isArray(parsed.records) ? parsed.records : [];
  return rows
    .filter((item) => item && typeof item === "object")
    .map((item) => ({ ...item, formId: String(item.formId || "").trim() }));
};

const writeRecords = async (records) => {
  await writeJsonFile(DATA_FILE, { records });
};

const FOLLOWUP_TYPES = new Set(["report90", "visarun"]);

const readFollowups = async () => {
  const parsed = await readJsonFile(FOLLOWUPS_DATA_FILE, { report90: [], visarun: [] });
  return {
    report90: Array.isArray(parsed.report90) ? parsed.report90 : [],
    visarun: Array.isArray(parsed.visarun) ? parsed.visarun : [],
  };
};

const writeFollowups = async (followups) => {
  await writeJsonFile(FOLLOWUPS_DATA_FILE, {
    report90: Array.isArray(followups.report90) ? followups.report90 : [],
    visarun: Array.isArray(followups.visarun) ? followups.visarun : [],
  });
};

app.get("/api/records", async (_req, res) => {
  const records = await readRecords();
  res.json(records);
});

app.get("/api/records/:id", async (req, res) => {
  const records = await readRecords();
  const requestedId = String(req.params.id || "").trim();
  const record = records.find((item) => String(item.formId || "") === requestedId);
  if (!record) {
    res.status(404).json({ message: "Record not found" });
    return;
  }
  res.json(record);
});

app.post("/api/records", async (req, res) => {
  const payload = req.body || {};
  const records = await readRecords();
  const incomingId = String(payload.formId || "").trim();
  const index = incomingId ? records.findIndex((item) => String(item.formId || "") === incomingId) : -1;
  if (index >= 0) {
    records[index] = { ...payload, formId: incomingId };
    await writeRecords(records);
    res.json(records[index]);
    return;
  }

  const maxId = records.reduce((max, item) => {
    const value = Number.parseInt(String(item.formId || ""), 10);
    return Number.isNaN(value) ? max : Math.max(max, value);
  }, 0);
  const nextId = String(maxId + 1);
  const nextRecord = { ...payload, formId: nextId };
  records.unshift(nextRecord);
  await writeRecords(records);
  res.json(nextRecord);
});

app.put("/api/records/:id", async (req, res) => {
  const requestedId = String(req.params.id || "").trim();
  if (!requestedId) {
    res.status(400).json({ message: "Invalid record id" });
    return;
  }
  const payload = req.body || {};
  const records = await readRecords();
  const index = records.findIndex((item) => String(item.formId || "") === requestedId);
  if (index < 0) {
    res.status(404).json({ message: "Record not found" });
    return;
  }
  records[index] = { ...payload, formId: requestedId };
  await writeRecords(records);
  res.json(records[index]);
});

app.delete("/api/records", async (_req, res) => {
  await writeRecords([]);
  res.json({ status: "ok" });
});

app.delete("/api/records/:id", async (req, res) => {
  const records = await readRecords();
  const requestedId = String(req.params.id || "").trim();
  const nextRecords = records.filter((item) => String(item.formId || "") !== requestedId);
  await writeRecords(nextRecords);
  res.json({ status: "ok" });
});

app.get("/api/followups/:type", async (req, res) => {
  const { type } = req.params;
  if (!FOLLOWUP_TYPES.has(type)) {
    res.status(400).json({ message: "Invalid followup type" });
    return;
  }
  const followups = await readFollowups();
  res.json(followups[type]);
});

app.post("/api/followups/:type", async (req, res) => {
  const { type } = req.params;
  if (!FOLLOWUP_TYPES.has(type)) {
    res.status(400).json({ message: "Invalid followup type" });
    return;
  }
  const payload = req.body || {};
  const followups = await readFollowups();
  const rows = followups[type];
  const incomingId = String(payload.id || "").trim();
  const now = new Date().toISOString();

  if (incomingId) {
    const index = rows.findIndex((item) => String(item.id) === incomingId);
    if (index >= 0) {
      const updated = { ...rows[index], ...payload, id: incomingId, updatedAt: now };
      rows[index] = updated;
      followups[type] = rows;
      await writeFollowups(followups);
      res.json(updated);
      return;
    }
  }

  const nextId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const created = { ...payload, id: nextId, createdAt: now, updatedAt: now };
  rows.unshift(created);
  followups[type] = rows;
  await writeFollowups(followups);
  res.json(created);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await migrateLegacyStorageIfNeeded();
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Records storage file: ${DATA_FILE}`);
  console.log(`Followups storage file: ${FOLLOWUPS_DATA_FILE}`);
  await logStorageContext();
});
