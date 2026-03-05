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
const RECORDS_API_URL = API_BASE_URL ? `${API_BASE_URL}/api/records` : "/api/records";

const getEditIdFromQuery = () => {
  const params = new URLSearchParams(window.location.search || "");
  return String(params.get("editId") || "").trim();
};


const normalizeThaiYear = (year) => {
  if (!Number.isFinite(year)) return year;
  return year >= 2400 ? year - 543 : year;
};

const toDateOnly = (value) => {
  if (!value) return null;
  const text = String(value).trim();

  const parseWithParts = (parts) => {
    if (parts.length !== 3 || parts.some((item) => Number.isNaN(item))) return null;
    const [a, b, c] = parts;
    const isYearFirst = a > 31;
    const isYearLast = c > 31;
    const yearRaw = isYearFirst ? a : c;
    const month = b;
    const day = isYearFirst ? c : a;
    if (!isYearFirst && !isYearLast) return null;
    if (month < 1 || month > 12 || day < 1 || day > 31) return null;
    return new Date(normalizeThaiYear(yearRaw), month - 1, day);
  };

  const dashParts = text.split("-").map((item) => Number.parseInt(item, 10));
  const dashDate = parseWithParts(dashParts);
  if (dashDate) return dashDate;

  const slashParts = text.split("/").map((item) => Number.parseInt(item, 10));
  const slashDate = parseWithParts(slashParts);
  if (slashDate) return slashDate;

  const date = new Date(text);
  if (Number.isNaN(date.getTime())) return null;
  return new Date(normalizeThaiYear(date.getFullYear()), date.getMonth(), date.getDate());
};

const formatDateInputValue = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const addDays = (value, days) => {
  const dt = toDateOnly(value);
  if (!dt) return "";
  dt.setDate(dt.getDate() + days);
  return formatDateInputValue(dt);
};

const diffDays = (value) => {
  const dt = toDateOnly(value);
  if (!dt) return null;
  const today = new Date();
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const days = Math.floor((dt.getTime() - now.getTime()) / DAY_MS);
  if (Math.abs(days) > 36500) return null;
  return days;
};
const fmtDate = (value) => {
  const dt = toDateOnly(value);
  if (!dt) return value || "-";
  const day = String(dt.getDate()).padStart(2, "0");
  const month = String(dt.getMonth() + 1).padStart(2, "0");
  const year = dt.getFullYear() + 543;
  return `${day}/${month}/${year}`;
};
const fmtCheck = (value) => (value ? "✓" : "-");

const renderWarning = (days, nearText, overText) => {
  if (days === null) return { text: "-", alert: false, tone: "deadline-box--none" };
  if (days < 0) return { text: `${overText} (${Math.abs(days)} วัน)`, alert: true, tone: "deadline-box--danger" };
  if (days < 30) return { text: `ต่ำกว่า 30 วัน (${days} วัน)`, alert: true, tone: "deadline-box--danger" };
  if (days < 60) return { text: `ต่ำกว่า 60 วัน (${days} วัน)`, alert: true, tone: "deadline-box--warn" };
  return { text: `มากกว่า 60 วัน (${days} วัน)`, alert: false, tone: "deadline-box--safe" };
};


const getBookTypes = (item, type) => {
  const books = [];
  if (item.sentImmigration) books.push("ส่งเล่มไป ตม.");
  if (item.returnBook) books.push("ส่งเล่มคืน");
  if (type === "visarun" && item.p60) books.push("ผ.60");
  if (type === "visarun" && item.p30) books.push("ผ.30");
  return books;
};

const getAggregateBookStats = (rows, item, type) => {
  const key = `${item.workerName || ""}|${item.employerName || ""}`;
  const related = rows.filter((row) => `${row.workerName || ""}|${row.employerName || ""}` === key);
  let total = 0;
  const unique = new Set();
  related.forEach((row) => {
    const books = getBookTypes(row, type);
    total += books.length;
    books.forEach((b) => unique.add(b));
  });
  const latest = getBookTypes(item, type);
  return {
    total,
    latestText: latest.length ? latest.join(", ") : "-",
    allTypesText: unique.size ? Array.from(unique).join(", ") : "-",
  };
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

const readLocalRecords = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem("workerRecords") || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
};

const writeLocalRecords = (rows) => {
  localStorage.setItem("workerRecords", JSON.stringify(Array.isArray(rows) ? rows : []));
};

const nextLocalId = (rows) => {
  const maxId = (rows || []).reduce((max, item) => {
    const value = Number.parseInt(String(item?.formId || ""), 10);
    return Number.isNaN(value) ? max : Math.max(max, value);
  }, 0);
  return String(maxId + 1);
};

const updateInputDatalist = (inputId, datalistId, values) => {
  const input = document.getElementById(inputId);
  if (!input) return;
  let datalist = document.getElementById(datalistId);
  if (!datalist) {
    datalist = document.createElement("datalist");
    datalist.id = datalistId;
    document.body.appendChild(datalist);
  }
  const unique = [...new Set((values || []).map((v) => String(v || "").trim()).filter(Boolean))].slice(0, 200);
  datalist.innerHTML = unique.map((value) => `<option value="${value.replace(/"/g, "&quot;")}"></option>`).join("");
  input.setAttribute("list", datalistId);
};

const refreshNameSuggestions = () => {
  const rows = readLocalRecords();
  const workers = [];
  const employers = [];
  rows.forEach((record) => {
    const info = record?.data?.personalInfo || {};
    if (info.fullName) workers.push(info.fullName);
    if (info.employerName) employers.push(info.employerName);
  });
  updateInputDatalist("r90WorkerName", "workerNameSuggestions", workers);
  updateInputDatalist("visaWorkerName", "workerNameSuggestions", workers);
  updateInputDatalist("r90Employer", "employerNameSuggestions", employers);
  updateInputDatalist("visaEmployer", "employerNameSuggestions", employers);
};

const toTimestamp = (value) => {
  const time = Date.parse(String(value || ""));
  return Number.isNaN(time) ? 0 : time;
};

const mergeRecordsPreferLatest = (localRows, serverRows) => {
  const merged = new Map();
  [...(localRows || []), ...(serverRows || [])].forEach((row) => {
    const id = String(row?.formId || "").trim();
    if (!id) return;
    const existing = merged.get(id);
    if (!existing || toTimestamp(row.updatedAt) > toTimestamp(existing.updatedAt)) {
      merged.set(id, row);
    }
  });
  return Array.from(merged.values()).sort((a, b) => toTimestamp(b.updatedAt) - toTimestamp(a.updatedAt));
};

const fetchRecordsByType = async (type) => {
  try {
    const response = await fetch(RECORDS_API_URL);
    if (!response.ok) throw new Error("Cannot load records");
    const rows = await response.json();
    if (!Array.isArray(rows)) return [];
    const localRows = readLocalRecords();
    const merged = mergeRecordsPreferLatest(localRows, rows);
    writeLocalRecords(merged);
    refreshNameSuggestions();
    return merged.filter((record) => record.formType === type);
  } catch (_error) {
    refreshNameSuggestions();
    return readLocalRecords().filter((record) => record?.formType === type);
  }
};

const saveRecord = async (payload) => {
  const incomingId = String(payload?.formId || "").trim();
  const send = (url, method) =>
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

  let response = await send(
    incomingId ? `${RECORDS_API_URL}/${encodeURIComponent(incomingId)}` : RECORDS_API_URL,
    incomingId ? "PUT" : "POST"
  );

  if (!response.ok && incomingId && [404, 405, 501].includes(response.status)) {
    // backward compatibility: some deployments still expose upsert via POST only
    response = await send(RECORDS_API_URL, "POST");
  }

  if (!response.ok) {
    const localRows = readLocalRecords();
    const fallbackId = incomingId || nextLocalId(localRows);
    const normalizedPayload = {
      ...payload,
      formId: fallbackId,
      updatedAt: new Date().toISOString(),
    };
    const index = localRows.findIndex((item) => String(item?.formId || "") === fallbackId);
    if (index >= 0) {
      localRows[index] = normalizedPayload;
    } else {
      localRows.unshift(normalizedPayload);
    }
    writeLocalRecords(localRows);
    refreshNameSuggestions();
    return normalizedPayload;
  }
  const saved = await response.json();
  const normalizedSaved = {
    ...(saved && typeof saved === "object" ? saved : {}),
    ...payload,
    formId: String(saved?.formId || incomingId || "").trim(),
    updatedAt: payload.updatedAt || new Date().toISOString(),
  };
  if (incomingId && String(normalizedSaved?.formId || "").trim() && String(normalizedSaved.formId).trim() !== incomingId) {
    // Legacy POST-upsert may create new id even for edit; keep edited row id in local cache.
    normalizedSaved.formId = incomingId;
  }
  const localRows = readLocalRecords();
  const savedId = String(normalizedSaved?.formId || incomingId || "").trim();
  if (savedId) {
    const index = localRows.findIndex((item) => String(item?.formId || "") === savedId);
    if (index >= 0) {
      localRows[index] = normalizedSaved;
    } else {
      localRows.unshift(normalizedSaved);
    }
    writeLocalRecords(localRows);
  }
  refreshNameSuggestions();
  return normalizedSaved;
};

const toReport90Payload = (values, formId = "") => ({
  formId,
  formType: "report90",
  formTypeLabel: "รายงานตัว 90 วัน",
  displayName: `รายงานตัว 90 วัน - ${values.workerName || "-"}`,
  status: "final",
  updatedAt: new Date().toISOString(),
  data: {
    recordedBy: values.recordedBy || "",
    company: "",
    personalInfo: {
      fullName: values.workerName,
      gender: values.gender,
      employerName: values.employerName,
    },
    caseStatus: {
      status: "registered",
      appointmentDate: "",
      appointmentNote: "",
    },
    followupType: "report90",
    followup: {
      startDate: values.startDate,
      nextDate: values.nextDate,
      documentReceivedDate: values.documentReceivedDate,
      documentReturnDate: values.documentReturnDate,
      overdueFine: values.overdueFine,
      sentImmigration: values.sentImmigration,
      returnBook: values.returnBook,
    },
  },
});

const toVisaRunPayload = (values, formId = "") => ({
  formId,
  formType: "visarun",
  formTypeLabel: "Visa run",
  displayName: `Visa run - ${values.workerName || "-"}`,
  status: "final",
  updatedAt: new Date().toISOString(),
  data: {
    recordedBy: values.recordedBy || "",
    company: "",
    personalInfo: {
      fullName: values.workerName,
      gender: values.gender,
      employerName: values.employerName,
    },
    caseStatus: {
      status: "registered",
      appointmentDate: "",
      appointmentNote: "",
    },
    followupType: "visarun",
    followup: {
      startDate: values.startDate,
      endDate: values.endDate,
      documentReceivedDate: values.documentReceivedDate,
      documentReturnDate: values.documentReturnDate,
      visaOverdue: values.visaOverdue,
      sentImmigration: values.sentImmigration,
      returnBook: values.returnBook,
      p60: values.p60,
      p30: values.p30,
    },
  },
});

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
  let editFormId = "";
  const requestedEditId = getEditIdFromQuery();
  if (requestedEditId) {
    editFormId = requestedEditId;
  }

  const resetForm = () => {
    form.reset();
    editFormId = "";
  };

  const mapRecord = (record) => {
    const info = record?.data?.personalInfo || {};
    const followup = record?.data?.followup || {};
    return {
      id: record.formId,
      workerName: info.fullName || "",
      gender: info.gender || info.nationality || "",
      employerName: info.employerName || "",
      recordedBy: record?.data?.recordedBy || "",
      startDate: followup.startDate || "",
      nextDate: followup.nextDate || "",
      documentReceivedDate: followup.documentReceivedDate || "",
      documentReturnDate: followup.documentReturnDate || "",
      overdueFine: !!followup.overdueFine,
      sentImmigration: !!followup.sentImmigration,
      returnBook: !!followup.returnBook,
    };
  };

  const fillForEdit = (item) => {
    document.getElementById("r90WorkerName").value = item.workerName || "";
    document.getElementById("r90Gender").value = item.gender || "";
    document.getElementById("r90Employer").value = item.employerName || "";
    document.getElementById("r90RecordedBy").value = item.recordedBy || "";
    startDate.value = item.startDate || "";
    nextDate.value = item.nextDate || "";
    document.getElementById("r90DocReceiveDate").value = item.documentReceivedDate || "";
    document.getElementById("r90DocReturnDate").value = item.documentReturnDate || "";
    document.getElementById("r90Overdue").checked = !!item.overdueFine;
    document.getElementById("r90SentImm").checked = !!item.sentImmigration;
    document.getElementById("r90ReturnBook").checked = !!item.returnBook;
    editFormId = String(item.id || "");
    status.textContent = "กำลังแก้ไขข้อมูลรายการเดิม";
  };

  const showDetail = (item) => {
    modal.open("ตรวจสอบข้อมูล รายงานตัว 90 วัน", [
      ["ชื่อต่างด้าว", item.workerName || "-"],
      ["เพศ", item.gender || "-"],
      ["ชื่อนายจ้าง", item.employerName || "-"],
      ["ผู้บันทึกข้อมูล", item.recordedBy || "-"],
      ["วันที่เริ่มรายงานตัว", fmtDate(item.startDate)],
      ["90 วันถัดไป", fmtDate(item.nextDate)],
      ["วันรับเอกสาร", fmtDate(item.documentReceivedDate)],
      ["วันคืนเอกสาร", fmtDate(item.documentReturnDate)],
      ["ปรับ 90 เกิน", fmtCheck(item.overdueFine)],
      ["ส่งเล่มไป ตม.", fmtCheck(item.sentImmigration)],
      ["เล่มที่บันทึกล่าสุด", getBookTypes(item, "report90").join(", ") || "-"],
      ["ประเภทเล่มที่เคยบันทึก", getAggregateBookStats(rows, item, "report90").allTypesText],
      ["จำนวนเล่มที่บันทึกสะสม", String(getAggregateBookStats(rows, item, "report90").total)],
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
      tr.innerHTML = `<td>${item.workerName || "-"}</td><td>${item.employerName || "-"}</td><td>${item.recordedBy || "-"}</td><td>${getAggregateBookStats(rows, item, "report90").total}</td><td>${getAggregateBookStats(rows, item, "report90").latestText}</td><td>${fmtDate(item.nextDate)}</td><td><span class="deadline-box ${w.tone}">${w.text}</span></td>`;
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
    const serverRows = await fetchRecordsByType(type);
    rows = serverRows.map(mapRecord);
    renderRows();
    if (requestedEditId) {
      const matched = rows.find((item) => String(item.id) === requestedEditId);
      if (matched) {
        fillForEdit(matched);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const updateReport90NextDate = () => {
    nextDate.value = addDays(startDate.value, 90);
  };
  startDate?.addEventListener("change", updateReport90NextDate);
  startDate?.addEventListener("input", updateReport90NextDate);

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = {
      workerName: document.getElementById("r90WorkerName").value.trim(),
      gender: document.getElementById("r90Gender").value,
      employerName: document.getElementById("r90Employer").value.trim(),
      recordedBy: document.getElementById("r90RecordedBy").value.trim(),
      startDate: startDate.value,
      nextDate: addDays(startDate.value, 90),
      documentReceivedDate: document.getElementById("r90DocReceiveDate").value,
      documentReturnDate: document.getElementById("r90DocReturnDate").value,
      overdueFine: document.getElementById("r90Overdue").checked,
      sentImmigration: document.getElementById("r90SentImm").checked,
      returnBook: document.getElementById("r90ReturnBook").checked,
    };

    try {
      const submittingEditId = editFormId || requestedEditId || "";
      await saveRecord(toReport90Payload(values, submittingEditId));
      const wasEdit = Boolean(submittingEditId);
      resetForm();
      await refreshRows();
      const latest = rows.find((row) => row.workerName === values.workerName && row.employerName === values.employerName);
      const stats = latest ? getAggregateBookStats(rows, latest, "report90") : { total: 0, latestText: "-" };
      status.textContent = `${wasEdit ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย"} • รวม ${stats.total} เล่ม • ล่าสุด: ${stats.latestText}`;
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
  let editFormId = "";
  const requestedEditId = getEditIdFromQuery();
  if (requestedEditId) {
    editFormId = requestedEditId;
  }

  const resetForm = () => {
    form.reset();
    editFormId = "";
  };

  const mapRecord = (record) => {
    const info = record?.data?.personalInfo || {};
    const followup = record?.data?.followup || {};
    return {
      id: record.formId,
      workerName: info.fullName || "",
      gender: info.gender || info.nationality || "",
      employerName: info.employerName || "",
      recordedBy: record?.data?.recordedBy || "",
      startDate: followup.startDate || "",
      endDate: followup.endDate || "",
      documentReceivedDate: followup.documentReceivedDate || "",
      documentReturnDate: followup.documentReturnDate || "",
      visaOverdue: !!followup.visaOverdue,
      sentImmigration: !!followup.sentImmigration,
      returnBook: !!followup.returnBook,
      p60: !!followup.p60,
      p30: !!followup.p30,
    };
  };

  const fillForEdit = (item) => {
    document.getElementById("visaWorkerName").value = item.workerName || "";
    document.getElementById("visaGender").value = item.gender || "";
    document.getElementById("visaEmployer").value = item.employerName || "";
    document.getElementById("visaRecordedBy").value = item.recordedBy || "";
    startDate.value = item.startDate || "";
    endDate.value = item.endDate || "";
    document.getElementById("visaDocReceiveDate").value = item.documentReceivedDate || "";
    document.getElementById("visaDocReturnDate").value = item.documentReturnDate || "";
    document.getElementById("visaOverdue").checked = !!item.visaOverdue;
    document.getElementById("visaSentImm").checked = !!item.sentImmigration;
    document.getElementById("visaReturnBook").checked = !!item.returnBook;
    document.getElementById("visaP60").checked = !!item.p60;
    document.getElementById("visaP30").checked = !!item.p30;
    editFormId = String(item.id || "");
    status.textContent = "กำลังแก้ไขข้อมูลรายการเดิม";
  };

  const showDetail = (item) => {
    modal.open("ตรวจสอบข้อมูล Visa run", [
      ["ชื่อต่างด้าว", item.workerName || "-"],
      ["เพศ", item.gender || "-"],
      ["ชื่อนายจ้าง", item.employerName || "-"],
      ["ผู้บันทึกข้อมูล", item.recordedBy || "-"],
      ["วันเริ่ม Visa", fmtDate(item.startDate)],
      ["วันหมด Visa", fmtDate(item.endDate)],
      ["วันรับเอกสาร", fmtDate(item.documentReceivedDate)],
      ["วันคืนเอกสาร", fmtDate(item.documentReturnDate)],
      ["Visa เกิน", fmtCheck(item.visaOverdue)],
      ["ส่งเล่มไป ตม.", fmtCheck(item.sentImmigration)],
      ["เล่มที่บันทึกล่าสุด", getBookTypes(item, "visarun").join(", ") || "-"],
      ["ประเภทเล่มที่เคยบันทึก", getAggregateBookStats(rows, item, "visarun").allTypesText],
      ["จำนวนเล่มที่บันทึกสะสม", String(getAggregateBookStats(rows, item, "visarun").total)],
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
      tr.innerHTML = `<td>${item.workerName || "-"}</td><td>${item.employerName || "-"}</td><td>${item.recordedBy || "-"}</td><td>${getAggregateBookStats(rows, item, "visarun").total}</td><td>${getAggregateBookStats(rows, item, "visarun").latestText}</td><td>${fmtDate(item.endDate)}</td><td><span class="deadline-box ${w.tone}">${w.text}</span></td>`;
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
    const serverRows = await fetchRecordsByType(type);
    rows = serverRows.map(mapRecord);
    renderRows();
    if (requestedEditId) {
      const matched = rows.find((item) => String(item.id) === requestedEditId);
      if (matched) {
        fillForEdit(matched);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const updateVisaEndDate = () => {
    endDate.value = addDays(startDate.value, 90);
  };
  startDate?.addEventListener("change", updateVisaEndDate);
  startDate?.addEventListener("input", updateVisaEndDate);

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = {
      workerName: document.getElementById("visaWorkerName").value.trim(),
      gender: document.getElementById("visaGender").value,
      employerName: document.getElementById("visaEmployer").value.trim(),
      recordedBy: document.getElementById("visaRecordedBy").value.trim(),
      startDate: startDate.value,
      endDate: addDays(startDate.value, 90),
      documentReceivedDate: document.getElementById("visaDocReceiveDate").value,
      documentReturnDate: document.getElementById("visaDocReturnDate").value,
      visaOverdue: document.getElementById("visaOverdue").checked,
      sentImmigration: document.getElementById("visaSentImm").checked,
      returnBook: document.getElementById("visaReturnBook").checked,
      p60: document.getElementById("visaP60").checked,
      p30: document.getElementById("visaP30").checked,
    };

    try {
      const submittingEditId = editFormId || requestedEditId || "";
      await saveRecord(toVisaRunPayload(values, submittingEditId));
      const wasEdit = Boolean(submittingEditId);
      resetForm();
      await refreshRows();
      const latest = rows.find((row) => row.workerName === values.workerName && row.employerName === values.employerName);
      const stats = latest ? getAggregateBookStats(rows, latest, "visarun") : { total: 0, latestText: "-" };
      status.textContent = `${wasEdit ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย"} • รวม ${stats.total} เล่ม • ล่าสุด: ${stats.latestText}`;
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
