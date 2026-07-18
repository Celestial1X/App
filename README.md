# BmViSa Center — ระบบตรวจสอบข้อมูลแรงงานต่างด้าว

## เริ่มต้นใช้งานในเครื่อง

```bash
npm install
npm start
```

เซิร์ฟเวอร์จะรันที่ `http://localhost:3000`

| Endpoint | คำอธิบาย |
|---|---|
| `GET  /api/records` | ดึงรายการทั้งหมด |
| `POST /api/records` | เพิ่ม/อัปเดตรายการ |
| `PUT  /api/records/:id` | อัปเดตรายการตาม id |
| `DELETE /api/records/:id` | ลบรายการ |
| `GET  /api/stream` | SSE realtime updates |
| `GET  /api/health` | ตรวจสอบสถานะ server |

ไฟล์ข้อมูล (ค่าเริ่มต้น):
- `data/records.json`
- `data/followups.json`

---

## Deploy ด้วย Docker (ข้อมูลไม่หาย)

```bash
# รันครั้งแรก
docker compose up -d --build

# Deploy เวอร์ชันใหม่ (ข้อมูลคงอยู่)
docker compose up -d --build
```

> **อย่าใช้** `docker compose down -v` — flag `-v` จะลบ volume และข้อมูลถาวรทั้งหมด

ตรวจสอบ log:
```bash
docker compose logs -f app
```

ต้องเห็น:
```
Records storage file: /var/data/records.json
Followups storage file: /var/data/followups.json
```

---

## Backup ข้อมูล

```bash
docker run --rm \
  -v app_data:/data \
  -v "$PWD":/backup \
  alpine tar czf /backup/app_data_backup.tgz -C /data .
```

---

## Variables สิ่งแวดล้อม

| Variable | คำอธิบาย |
|---|---|
| `PORT` | พอร์ต server (ค่าเริ่มต้น: 3000) |
| `RECORDS_DATA_DIR` | โฟลเดอร์เก็บข้อมูล |
| `CORS_ORIGIN` | CORS origin (ค่าเริ่มต้น: `*`) |
| `RENDER_DISK_PATH` | Persistent disk path (Render.com) |
