const DAY_MS = 24 * 60 * 60 * 1000;
const WARNING_DAYS = 7;
const API_BASE_KEY = "recordsApiBaseUrl";

const normalizeApiBaseUrl = (value) => String(value || "").trim().replace(/\/+$/, "");
const resolveApiBaseUrl = () => {
  const params = new URLSearchParams(window.location.search || "");
  const queryBase = normalizeApiBaseUrl(params.get("apiBase"));
  if (queryBase) {
    localStorage.setItem(API_BASE_KEY, queryBase);
    return queryBase;
  }
  const storedBase = normalizeApiBaseUrl(localStorage.getItem(API_BASE_KEY));
  return storedBase || "";
};

const API_BASE_URL = resolveApiBaseUrl();
const FOLLOWUP_API_URL = API_BASE_URL ? `${API_BASE_URL}/api/followups` : "/api/followups";

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

const fetchFollowups = async (type) => {
  const response = await fetch(`${FOLLOWUP_API_URL}/${type}`);
  if (!response.ok) {
    throw new Error(`Cannot load ${type}`);
  }
  const rows = await response.json();
  return Array.isArray(rows) ? rows : [];
};

const saveFollowup = async (type, payload) => {
  const response = await fetch(`${FOLLOWUP_API_URL}/${type}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Cannot save ${type}`);
  }
  return response.json();
};

const runReport90Page = () => {
  const type = "report90";
  const form = document.getElementById("report90Form");
  const startDate = document.getElementById("r90StartDate");
  const nextDate = document.getElementById("r90NextDate");
  const status = document.getElementById("report90Status");
  const list = document.getElementById("report90List");
  const alert = document.getElementById("report90Alert");
  const modal = setupModal();
  let rows = [];
  let editId = "";

  const resetForm = () => {
    form.reset();
    editId = "";
  };

  const fillForEdit = (item) => {
    document.getElementById("r90WorkerName").value = item.workerName || "";
    document.getElementById("r90Nationality").value = item.nationality || "";
    document.getElementById("r90Employer").value = item.employerName || "";
    startDate.value = item.startDate || "";
    nextDate.value = item.nextDate || "";
    document.getElementById("r90Overdue").checked = !!item.overdueFine;
    document.getElementById("r90SentImm").checked = !!item.sentImmigration;
    document.getElementById("r90ReturnBook").checked = !!item.returnBook;
    editId = String(item.id || "");
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

  const renderRows = () => {
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
      tr.innerHTML = `<td>${item.workerName || "-"}</td><td>${item.nationality || "-"}</td><td>${item.employerName || "-"}</td><td>${fmtDate(item.startDate)}</td><td>${fmtDate(item.nextDate)}</td><td class="${w.alert ? "text-alert" : ""}">${w.text}</td>`;
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
      editButton.addEventListener("click", () => fillForEdit(item));

      actionWrap.appendChild(verifyButton);
      actionWrap.appendChild(editButton);
      actionCell.appendChild(actionWrap);
      tr.appendChild(actionCell);
      list.appendChild(tr);
    });
  };

  const refreshRows = async () => {
    rows = await fetchFollowups(type);
    renderRows();
  };

  startDate?.addEventListener("change", () => {
    nextDate.value = addDays(startDate.value, 90);
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const payload = {
      id: editId,
      workerName: document.getElementById("r90WorkerName").value.trim(),
      nationality: document.getElementById("r90Nationality").value,
      employerName: document.getElementById("r90Employer").value.trim(),
      startDate: startDate.value,
      nextDate: nextDate.value,
      overdueFine: document.getElementById("r90Overdue").checked,
      sentImmigration: document.getElementById("r90SentImm").checked,
      returnBook: document.getElementById("r90ReturnBook").checked,
    };

    try {
      await saveFollowup(type, payload);
      status.textContent = editId ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย";
      resetForm();
      await refreshRows();
    } catch {
      status.textContent = "ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบเซิร์ฟเวอร์";
      status.classList.add("error");
    }
  });

  refreshRows().catch(() => {
    status.textContent = "ไม่สามารถโหลดข้อมูลกลางได้ กรุณาตรวจสอบการเชื่อมต่อเซิร์ฟเวอร์";
    status.classList.add("error");
  });
};

const runVisaPage = () => {
  const type = "visarun";
  const form = document.getElementById("visaRunForm");
  const startDate = document.getElementById("visaStartDate");
  const endDate = document.getElementById("visaEndDate");
  const status = document.getElementById("visaStatus");
  const list = document.getElementById("visaList");
  const alert = document.getElementById("visaAlert");
  const modal = setupModal();
  let rows = [];
  let editId = "";

  const resetForm = () => {
    form.reset();
    editId = "";
  };

  const fillForEdit = (item) => {
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
    editId = String(item.id || "");
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

  const renderRows = () => {
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
      tr.innerHTML = `<td>${item.workerName || "-"}</td><td>${item.nationality || "-"}</td><td>${item.employerName || "-"}</td><td>${fmtDate(item.startDate)}</td><td>${fmtDate(item.endDate)}</td><td class="${w.alert ? "text-alert" : ""}">${w.text}</td>`;
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
      editButton.addEventListener("click", () => fillForEdit(item));

      actionWrap.appendChild(verifyButton);
      actionWrap.appendChild(editButton);
      actionCell.appendChild(actionWrap);
      tr.appendChild(actionCell);
      list.appendChild(tr);
    });
  };

  const refreshRows = async () => {
    rows = await fetchFollowups(type);
    renderRows();
  };

  startDate?.addEventListener("change", () => {
    endDate.value = addDays(startDate.value, 90);
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const payload = {
      id: editId,
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
    };

    try {
      await saveFollowup(type, payload);
      status.textContent = editId ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย";
      resetForm();
      await refreshRows();
    } catch {
      status.textContent = "ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบเซิร์ฟเวอร์";
      status.classList.add("error");
    }
  });

  refreshRows().catch(() => {
    status.textContent = "ไม่สามารถโหลดข้อมูลกลางได้ กรุณาตรวจสอบการเชื่อมต่อเซิร์ฟเวอร์";
    status.classList.add("error");
  });
};

if (document.body.dataset.page === "report90") {
  runReport90Page();
}
if (document.body.dataset.page === "visarun") {
  runVisaPage();
}
