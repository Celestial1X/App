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

## ทำให้ข้อมูล “บันทึกถาวร” หลัง Deploy (สำคัญ)

ถ้าต้องการให้ข้อมูลทั้งเว็บไม่หายหลัง deploy/restart ต้องทำ 2 อย่างนี้:

1) **ใช้ backend API ตลอด** (ห้ามพึ่ง localStorage อย่างเดียว)
2) **ผูก Persistent Disk** แล้วชี้ path เก็บข้อมูลไปที่ disk นั้น

โค้ดนี้รองรับแล้ว โดยอ่าน env:
- `RECORDS_DATA_DIR` (โฟลเดอร์เก็บไฟล์)
- หรือ `RECORDS_DATA_FILE` / `FOLLOWUPS_DATA_FILE` (ระบุไฟล์ตรงๆ)
- `RENDER_DISK_PATH` (ใช้บน Render)

---

## ตัวอย่างการตั้งค่า Render (แนะนำ)

### 1) Add Persistent Disk
- สร้าง disk และ mount เช่น `/var/data`

### 2) ตั้ง Environment Variables
- `RECORDS_DATA_DIR=/var/data`
- (ถ้าต้องการ) `FOLLOWUPS_DATA_FILE=/var/data/followups.json`
- (ถ้าต้องการ) `RECORDS_DATA_FILE=/var/data/records.json`

### 3) Deploy ใหม่
หลัง deploy ให้เช็ก log startup ว่าขึ้น path ใน disk จริง เช่น:
- `Records storage file: /var/data/records.json`
- `Followups storage file: /var/data/followups.json`

ถ้ายังขึ้น path ในโฟลเดอร์ source/code แปลว่ายังไม่ได้เก็บลง persistent disk

---

## พฤติกรรมที่แก้แล้ว

- หน้า `records.html` และฟอร์มต่างๆ จะบันทึกผ่านเซิร์ฟเวอร์
- ถ้าเซิร์ฟเวอร์บันทึกไม่สำเร็จ จะขึ้น error และ **ไม่แสดงผลบันทึกหลอกในเครื่อง**
- ข้อมูลจะคงอยู่จนกว่าจะลบ (DELETE) เอง

---

## Emergency checklist (ด่วน)

- [ ] มี Persistent Disk
- [ ] ตั้ง `RECORDS_DATA_DIR` ชี้เข้า Disk
- [ ] Log startup ชี้ไป path ใน Disk
- [ ] ทดสอบบันทึก 1 รายการ แล้ว deploy ใหม่ -> รายการต้องยังอยู่
