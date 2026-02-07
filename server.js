import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "records.json");

const app = express();
app.use(express.json({ limit: "2mb" }));
app.use(express.static(__dirname));

const ensureDataFile = async () => {
  await fs.mkdir(DATA_DIR, { recursive: true });
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
  const payload = req.body;
  if (!payload?.formId) {
    res.status(400).json({ message: "formId is required" });
    return;
  }
  const records = await readRecords();
  const index = records.findIndex((item) => item.formId === payload.formId);
  if (index >= 0) {
    records[index] = payload;
  } else {
    records.unshift(payload);
  }
  await writeRecords(records);
  res.json({ status: "ok" });
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
});
