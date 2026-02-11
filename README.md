# App

## Run locally

```bash
npm install
npm start
```

Server provides:
- Static site at `http://localhost:3000`
- API at `/api/records` (GET/POST/DELETE) and `/api/records/:id` (GET/DELETE)

Data files (default):
- `data/records.json`
- `data/followups.json`

---

## วิธีที่ชัวร์สุดให้ข้อมูล “ไม่หาย” หลัง Deploy

ใช้ Docker + Persistent Volume (ใน repo นี้เตรียมไว้แล้ว):
- `Dockerfile`
- `docker-compose.yml`
- volume ชื่อ `app_data` ผูกเข้ากับ `/var/data`

แอปจะเขียนข้อมูลไปที่:
- `/var/data/records.json`
- `/var/data/followups.json`
- `/var/data/server.log`

### รันครั้งแรก

```bash
docker compose up -d --build
```

### อัปเดตเวอร์ชันใหม่ (deploy ใหม่) โดยข้อมูลยังอยู่

```bash
docker compose up -d --build
```

เพราะใช้ volume เดิม `app_data` ข้อมูลจะไม่หายจนกว่าจะลบ volume เอง

### ห้ามทำ ถ้าไม่อยากให้ข้อมูลหาย

```bash
docker compose down -v
```

`-v` จะลบ volume และลบข้อมูลถาวรทั้งหมด

---

## ตรวจสอบว่าเขียนลง disk ถาวรจริง

```bash
docker compose logs -f app
```

ต้องเห็น startup log ชี้ไปที่ `/var/data/...` เช่น:
- `Records storage file: /var/data/records.json`
- `Followups storage file: /var/data/followups.json`

---

## backup ข้อมูล (แนะนำ)

```bash
docker run --rm -v app_data:/data -v "$PWD":/backup alpine tar czf /backup/app_data_backup.tgz -C /data .
```

---

## ถ้า deploy บน Cloud (Render/Railway/Fly)

หลักการเดียวกัน:
1) ต้องมี Persistent Disk/Volume
2) ตั้ง env ให้ path ชี้ไป mount path นั้น (`RECORDS_DATA_DIR` หรือไฟล์เฉพาะ)
3) เช็ก log หลัง deploy ว่าขึ้น path ใน disk ถาวร

ถ้าขาดข้อใดข้อหนึ่ง ข้อมูลมีโอกาสหายหลัง deploy/restart

### หมายเหตุสำหรับ Render (เคสที่เจอบ่อย)

ถ้า log ขึ้นแบบนี้:
- `mountPath=/var/data`
- แต่ `recordsFile=/opt/render/project/src/data/records.json`

แปลว่าแอปยังเขียนไป path ไม่ถาวร

เวอร์ชันนี้แก้ให้แล้ว โดยจะใช้ `RENDER_DISK_PATH` เป็น storage root อัตโนมัติเมื่อไม่ได้ตั้ง `RECORDS_DATA_DIR` เพิ่ม
และมี migration ย้ายข้อมูลเดิมจาก `./data` ไปยัง disk ใหม่ให้อัตโนมัติ (ถ้าปลายทางยังไม่มีไฟล์)
