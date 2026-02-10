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
const fmtCheck = (value) => (value ? "✓" : "-");

const renderWarning = (days, nearText, overText) => {
  if (days === null) return { text: "-", alert: false };
  if (days < 0) return { text: `${overText} (${Math.abs(days)} วัน)`, alert: true };
  if (days <= WARNING_DAYS) return { text: `${nearText} (${days} วัน)`, alert: true };
  return { text: `ปกติ (${days} วัน)`, alert: false };
};

const setupModal = () => {
  const modal = document.getElementById("followupModal");
  const closeButton = document.getElementById("followupModalClose");
  const closeButtonBottom = document.getElementById("followupModalCloseButton");

  const close = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  closeButton?.addEventListener("click", close);
  closeButtonBottom?.addEventListener("click", close);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });

  const open = (title, rows) => {
    if (!modal) return;
    const titleElement = document.getElementById("followupModalTitle");
    const bodyElement = document.getElementById("followupModalBody");
    if (titleElement) titleElement.textContent = title;
    if (bodyElement) {
      bodyElement.innerHTML = "";
      const table = document.createElement("table");
      table.className = "result-grid-table";
      const body = document.createElement("tbody");
      rows.forEach(([label, value]) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<th>${label}</th><td>${value}</td>`;
        body.appendChild(tr);
      });
      table.appendChild(body);
      bodyElement.appendChild(table);
    }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  return { open };
};

const runReport90Page = () => {
  const KEY = "report90Records";
  const form = document.getElementById("report90Form");
  const startDate = document.getElementById("r90StartDate");
  const nextDate = document.getElementById("r90NextDate");
  const status = document.getElementById("report90Status");
  const list = document.getElementById("report90List");
  const alert = document.getElementById("report90Alert");
  const modal = setupModal();
  let editIndex = null;

  const load = () => JSON.parse(localStorage.getItem(KEY) || "[]");
  const save = (rows) => localStorage.setItem(KEY, JSON.stringify(rows));

  const resetForm = () => {
    form.reset();
    editIndex = null;
  };

  const fillForEdit = (item, index) => {
    document.getElementById("r90WorkerName").value = item.workerName || "";
    document.getElementById("r90Nationality").value = item.nationality || "";
    document.getElementById("r90Employer").value = item.employerName || "";
    startDate.value = item.startDate || "";
    nextDate.value = item.nextDate || "";
    document.getElementById("r90Overdue").checked = !!item.overdueFine;
    document.getElementById("r90SentImm").checked = !!item.sentImmigration;
    document.getElementById("r90ReturnBook").checked = !!item.returnBook;
    editIndex = index;
    status.textContent = "กำลังแก้ไขข้อมูลรายการเดิม";
  };

  const showDetail = (item) => {
    modal.open("ตรวจสอบข้อมูล รายงานตัว 90 วัน", [
      ["ชื่อต่างด้าว", item.workerName || "-"],
      ["สัญชาติ", item.nationality || "-"],
      ["ชื่อนายจ้าง", item.employerName || "-"],
      ["วันที่เริ่มรายงานตัว", fmtDate(item.startDate)],
      ["90 วันถัดไป", fmtDate(item.nextDate)],
      ["ปรับ 90 เกิน", fmtCheck(item.overdueFine)],
      ["ส่งเล่มไป ตม.", fmtCheck(item.sentImmigration)],
      ["ส่งเล่มคืน", fmtCheck(item.returnBook)],
    ]);
  };

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

    rows.forEach((item, index) => {
      const w = renderWarning(diffDays(item.nextDate), "ใกล้ถึง 90 วันถัดไป", "เกินกำหนด 90 วัน");
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.workerName}</td><td>${item.nationality}</td><td>${item.employerName}</td><td>${fmtDate(item.startDate)}</td><td>${fmtDate(item.nextDate)}</td><td class="${w.alert ? "text-alert" : ""}">${w.text}</td>`;
      const actionCell = document.createElement("td");
      const actionWrap = document.createElement("div");
      actionWrap.className = "table-actions";

      const verifyButton = document.createElement("button");
      verifyButton.type = "button";
      verifyButton.className = "secondary";
      verifyButton.textContent = "ตรวจสอบ";
      verifyButton.addEventListener("click", () => showDetail(item));

      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "secondary";
      editButton.textContent = "แก้ไข";
      editButton.addEventListener("click", () => fillForEdit(item, index));

      actionWrap.appendChild(verifyButton);
      actionWrap.appendChild(editButton);
      actionCell.appendChild(actionWrap);
      tr.appendChild(actionCell);
      list.appendChild(tr);
    });
  };

  startDate?.addEventListener("change", () => {
    nextDate.value = addDays(startDate.value, 90);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const rows = load();
    const payload = {
      workerName: document.getElementById("r90WorkerName").value.trim(),
      nationality: document.getElementById("r90Nationality").value,
      employerName: document.getElementById("r90Employer").value.trim(),
      startDate: startDate.value,
      nextDate: nextDate.value,
      overdueFine: document.getElementById("r90Overdue").checked,
      sentImmigration: document.getElementById("r90SentImm").checked,
      returnBook: document.getElementById("r90ReturnBook").checked,
      savedAt: new Date().toISOString(),
    };

    if (editIndex !== null && rows[editIndex]) {
      rows[editIndex] = payload;
      status.textContent = "แก้ไขข้อมูลเรียบร้อย";
    } else {
      rows.unshift(payload);
      status.textContent = "บันทึกข้อมูลเรียบร้อย";
    }

    save(rows);
    resetForm();
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
  const modal = setupModal();
  let editIndex = null;

  const load = () => JSON.parse(localStorage.getItem(KEY) || "[]");
  const save = (rows) => localStorage.setItem(KEY, JSON.stringify(rows));

  const resetForm = () => {
    form.reset();
    editIndex = null;
  };

  const fillForEdit = (item, index) => {
    document.getElementById("visaWorkerName").value = item.workerName || "";
    document.getElementById("visaNationality").value = item.nationality || "";
    document.getElementById("visaEmployer").value = item.employerName || "";
    startDate.value = item.startDate || "";
    endDate.value = item.endDate || "";
    document.getElementById("visaOverdue").checked = !!item.visaOverdue;
    document.getElementById("visaSentImm").checked = !!item.sentImmigration;
    document.getElementById("visaReturnBook").checked = !!item.returnBook;
    document.getElementById("visaP60").checked = !!item.p60;
    document.getElementById("visaP30").checked = !!item.p30;
    editIndex = index;
    status.textContent = "กำลังแก้ไขข้อมูลรายการเดิม";
  };

  const showDetail = (item) => {
    modal.open("ตรวจสอบข้อมูล Visa run", [
      ["ชื่อต่างด้าว", item.workerName || "-"],
      ["สัญชาติ", item.nationality || "-"],
      ["ชื่อนายจ้าง", item.employerName || "-"],
      ["วันเริ่ม Visa", fmtDate(item.startDate)],
      ["วันหมด Visa", fmtDate(item.endDate)],
      ["Visa เกิน", fmtCheck(item.visaOverdue)],
      ["ส่งเล่มไป ตม.", fmtCheck(item.sentImmigration)],
      ["ส่งเล่มคืน", fmtCheck(item.returnBook)],
      ["ผ.60", fmtCheck(item.p60)],
      ["ผ.30", fmtCheck(item.p30)],
    ]);
  };

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

    rows.forEach((item, index) => {
      const w = renderWarning(diffDays(item.endDate), "Visa ใกล้หมดอายุ", "Visa หมดอายุแล้ว");
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.workerName}</td><td>${item.nationality}</td><td>${item.employerName}</td><td>${fmtDate(item.startDate)}</td><td>${fmtDate(item.endDate)}</td><td class="${w.alert ? "text-alert" : ""}">${w.text}</td>`;
      const actionCell = document.createElement("td");
      const actionWrap = document.createElement("div");
      actionWrap.className = "table-actions";

      const verifyButton = document.createElement("button");
      verifyButton.type = "button";
      verifyButton.className = "secondary";
      verifyButton.textContent = "ตรวจสอบ";
      verifyButton.addEventListener("click", () => showDetail(item));

      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "secondary";
      editButton.textContent = "แก้ไข";
      editButton.addEventListener("click", () => fillForEdit(item, index));

      actionWrap.appendChild(verifyButton);
      actionWrap.appendChild(editButton);
      actionCell.appendChild(actionWrap);
      tr.appendChild(actionCell);
      list.appendChild(tr);
    });
  };

  startDate?.addEventListener("change", () => {
    endDate.value = addDays(startDate.value, 90);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const rows = load();
    const payload = {
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
    };

    if (editIndex !== null && rows[editIndex]) {
      rows[editIndex] = payload;
      status.textContent = "แก้ไขข้อมูลเรียบร้อย";
    } else {
      rows.unshift(payload);
      status.textContent = "บันทึกข้อมูลเรียบร้อย";
    }

    save(rows);
    resetForm();
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
