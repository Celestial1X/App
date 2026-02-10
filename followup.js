const DAY_MS = 24 * 60 * 60 * 1000;
const WARNING_DAYS = 7;

const toDateOnly = (value) => (value ? new Date(`${value}T00:00:00`) : null);
const addDays = (value, days) => {
  const dt = toDateOnly(value);
  if (!dt) return "";
  dt.setDate(dt.getDate() + days);
  return dt.toISOString().slice(0, 10);
};
const diffDays = (value) => {
  const dt = toDateOnly(value);
  if (!dt) return null;
  const today = new Date();
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.ceil((dt - now) / DAY_MS);
};
const fmtDate = (value) => value || "-";

const renderWarning = (days, nearText, overText) => {
  if (days === null) return { text: "-", alert: false };
  if (days < 0) return { text: `${overText} (${Math.abs(days)} วัน)`, alert: true };
  if (days <= WARNING_DAYS) return { text: `${nearText} (${days} วัน)`, alert: true };
  return { text: `ปกติ (${days} วัน)`, alert: false };
};

const runReport90Page = () => {
  const KEY = "report90Records";
  const form = document.getElementById("report90Form");
  const startDate = document.getElementById("r90StartDate");
  const nextDate = document.getElementById("r90NextDate");
  const status = document.getElementById("report90Status");
  const list = document.getElementById("report90List");
  const alert = document.getElementById("report90Alert");

  const load = () => JSON.parse(localStorage.getItem(KEY) || "[]");
  const save = (rows) => localStorage.setItem(KEY, JSON.stringify(rows));
  const show = () => {
    const rows = load();
    list.innerHTML = "";
    const alerts = rows.filter((item) => renderWarning(diffDays(item.nextDate), "ใกล้ถึง 90 วันถัดไป", "เกินกำหนด 90 วัน").alert);
    if (alerts.length) {
      alert.textContent = `แจ้งเตือน: มี ${alerts.length} รายการที่ใกล้ถึง 90 วันถัดไป/เกินกำหนด`;
      alert.classList.remove("is-hidden");
    } else {
      alert.classList.add("is-hidden");
    }

    rows.forEach((item) => {
      const w = renderWarning(diffDays(item.nextDate), "ใกล้ถึง 90 วันถัดไป", "เกินกำหนด 90 วัน");
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.workerName}</td><td>${item.nationality}</td><td>${item.employerName}</td><td>${fmtDate(item.startDate)}</td><td>${fmtDate(item.nextDate)}</td><td class="${w.alert ? "text-alert" : ""}">${w.text}</td>`;
      list.appendChild(tr);
    });
  };

  startDate?.addEventListener("change", () => {
    nextDate.value = addDays(startDate.value, 90);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const rows = load();
    rows.unshift({
      workerName: document.getElementById("r90WorkerName").value.trim(),
      nationality: document.getElementById("r90Nationality").value,
      employerName: document.getElementById("r90Employer").value.trim(),
      startDate: startDate.value,
      nextDate: nextDate.value,
      overdueFine: document.getElementById("r90Overdue").checked,
      sentImmigration: document.getElementById("r90SentImm").checked,
      returnBook: document.getElementById("r90ReturnBook").checked,
      savedAt: new Date().toISOString(),
    });
    save(rows);
    form.reset();
    status.textContent = "บันทึกข้อมูลเรียบร้อย";
    show();
  });

  show();
};

const runVisaPage = () => {
  const KEY = "visaRunRecords";
  const form = document.getElementById("visaRunForm");
  const startDate = document.getElementById("visaStartDate");
  const endDate = document.getElementById("visaEndDate");
  const status = document.getElementById("visaStatus");
  const list = document.getElementById("visaList");
  const alert = document.getElementById("visaAlert");

  const load = () => JSON.parse(localStorage.getItem(KEY) || "[]");
  const save = (rows) => localStorage.setItem(KEY, JSON.stringify(rows));
  const show = () => {
    const rows = load();
    list.innerHTML = "";
    const alerts = rows.filter((item) => renderWarning(diffDays(item.endDate), "Visa ใกล้หมดอายุ", "Visa หมดอายุแล้ว").alert);
    if (alerts.length) {
      alert.textContent = `แจ้งเตือน: มี ${alerts.length} รายการที่ Visa ใกล้หมดอายุ/หมดอายุ`;
      alert.classList.remove("is-hidden");
    } else {
      alert.classList.add("is-hidden");
    }

    rows.forEach((item) => {
      const w = renderWarning(diffDays(item.endDate), "Visa ใกล้หมดอายุ", "Visa หมดอายุแล้ว");
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.workerName}</td><td>${item.nationality}</td><td>${item.employerName}</td><td>${fmtDate(item.startDate)}</td><td>${fmtDate(item.endDate)}</td><td class="${w.alert ? "text-alert" : ""}">${w.text}</td>`;
      list.appendChild(tr);
    });
  };

  startDate?.addEventListener("change", () => {
    endDate.value = addDays(startDate.value, 90);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const rows = load();
    rows.unshift({
      workerName: document.getElementById("visaWorkerName").value.trim(),
      nationality: document.getElementById("visaNationality").value,
      employerName: document.getElementById("visaEmployer").value.trim(),
      startDate: startDate.value,
      endDate: endDate.value,
      visaOverdue: document.getElementById("visaOverdue").checked,
      sentImmigration: document.getElementById("visaSentImm").checked,
      returnBook: document.getElementById("visaReturnBook").checked,
      p60: document.getElementById("visaP60").checked,
      p30: document.getElementById("visaP30").checked,
      savedAt: new Date().toISOString(),
    });
    save(rows);
    form.reset();
    status.textContent = "บันทึกข้อมูลเรียบร้อย";
    show();
  });

  show();
};

if (document.body.dataset.page === "report90") {
  runReport90Page();
}
if (document.body.dataset.page === "visarun") {
  runVisaPage();
}
