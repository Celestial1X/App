import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORAGE_ROOT = process.env.RECORDS_DATA_DIR
  ? path.resolve(process.env.RECORDS_DATA_DIR)
  : path.join(__dirname, "data");
const DATA_FILE = process.env.RECORDS_DATA_FILE
  ? path.resolve(process.env.RECORDS_DATA_FILE)
  : path.join(STORAGE_ROOT, "records.json");

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

const ensureDataFile = async () => {
  const dataDir = path.dirname(DATA_FILE);
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify({ records: [] }, null, 2));
  }
};

const readRecords = async () => {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  const parsed = JSON.parse(raw || "{}");
  return Array.isArray(parsed.records) ? parsed.records : [];
};

const writeRecords = async (records) => {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify({ records }, null, 2));
};

app.get("/api/records", async (_req, res) => {
  const records = await readRecords();
  res.json(records);
});

app.get("/api/records/:id", async (req, res) => {
  const records = await readRecords();
  const record = records.find((item) => item.formId === req.params.id);
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
  const index = incomingId ? records.findIndex((item) => item.formId === incomingId) : -1;
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

app.delete("/api/records", async (_req, res) => {
  await writeRecords([]);
  res.json({ status: "ok" });
});

app.delete("/api/records/:id", async (req, res) => {
  const records = await readRecords();
  const nextRecords = records.filter((item) => item.formId !== req.params.id);
  await writeRecords(nextRecords);
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Records storage file: ${DATA_FILE}`);
});
