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

const BMVISA_LOGO_HTML = '<img src="bmvisa-logo.svg" alt="BmViSa Center" loading="eager" />';

const initBrandIdentity = () => {
  const top = document.querySelector('.hero__top');
  if (!top || top.querySelector('.brand-mark')) return;
  const brand = document.createElement('div');
  brand.className = 'brand-mark';
  const logoWrap = document.createElement('div');
  logoWrap.className = 'brand-mark__logo';
  logoWrap.innerHTML = BMVISA_LOGO_HTML;
  const text = document.createElement('div');
  text.className = 'brand-mark__text';
  text.innerHTML = '<strong>BmViSa Center</strong><span>บริการแรงงานต่างด้าวครบวงจร</span>';
  brand.append(logoWrap, text);
  top.prepend(brand);
};
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
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  return `${d}/${m}/${date.getFullYear() + 543}`;
};

const addDays = (value, days) => {
  const dt = toDateOnly(value);
  if (!dt) return "";
  dt.setDate(dt.getDate() + days);
  return formatDateInputValue(dt);
};
const addYears = (value, years) => {
  const dt = toDateOnly(value);
  if (!dt) return "";
  dt.setFullYear(dt.getFullYear() + years);
  return formatDateInputValue(dt);
};
const normalizeDateInputValue = (value) => {
  const dt = toDateOnly(value);
  if (!dt) return "";
  return formatDateInputValue(dt);
};

const computeFollowupDateFromStart = (startDateValue) => {
  const normalized = normalizeDateInputValue(startDateValue);
  if (!normalized) return "";
  return addDays(normalized, 90);
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
const diffDaysBetween = (startValue, endValue) => {
  const start = toDateOnly(startValue);
  const end = toDateOnly(endValue);
  if (!start || !end) return null;
  const days = Math.floor((end.getTime() - start.getTime()) / DAY_MS);
  if (days < 0 || Math.abs(days) > 36500) return null;
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

const formatRemainingYMD = (targetValue) => {
  const target = toDateOnly(targetValue);
  if (!target) return "-";
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const sign = target.getTime() >= today.getTime() ? 1 : -1;
  const from = sign >= 0 ? today : target;
  const to = sign >= 0 ? target : today;

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthLastDay = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const text = `${years} ปี ${months} เดือน ${days} วัน`;
  return sign >= 0 ? `เหลือ ${text}` : `เกิน ${text}`;
};

const renderWarning = (days, nearText, overText) => {
  if (days === null) return { text: "-", alert: false, tone: "deadline-box--none" };
  if (days < 0) return { text: `${overText} (${Math.abs(days)} วัน)`, alert: true, tone: "deadline-box--danger" };
  if (days < 30) return { text: `ต่ำกว่า 30 วัน (${days} วัน)`, alert: true, tone: "deadline-box--danger" };
  if (days < 90) return { text: `ต่ำกว่า 90 วัน (${days} วัน)`, alert: true, tone: "deadline-box--warn" };
  return { text: `มากกว่า 90 วัน (${days} วัน)`, alert: false, tone: "deadline-box--safe" };
};
const getDeadlineToneByRemainingDays = (days) => {
  if (days === null) return "deadline-box--none";
  if (days < 30) return "deadline-box--danger";
  if (days <= 90) return "deadline-box--warn";
  return "deadline-box--safe";
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
  const unique = new Set();
  related.forEach((row) => {
    const books = getBookTypes(row, type);
    books.forEach((b) => unique.add(b));
  });
  const latest = getBookTypes(item, type);
  return {
    latestText: latest.length ? latest.join(", ") : "-",
    allTypesText: unique.size ? Array.from(unique).join(", ") : "-",
  };
};


const toCsvValue = (value) => {
  const raw = String(value ?? "");
  const escaped = raw.replace(/"/g, '""');
  return `"${escaped}"`;
};

const exportTableToCsv = ({ listElement, filePrefix, statusElement }) => {
  if (!listElement) return;
  const table = listElement.closest("table");
  if (!table) return;
  const title = table.closest(".panel")?.querySelector(".records-toolbar h3")?.textContent?.trim() || "รายงานข้อมูล";
  const headers = Array.from(table.querySelectorAll("thead th")).map((th) => String(th.textContent || "").trim());
  const exportableIndexes = headers
    .map((header, index) => ({ header, index }))
    .filter(({ header }) => header && header !== "การจัดการ");

  const dataRows = [];
  const rows = Array.from(listElement.querySelectorAll("tr"));
  const selectableRows = rows.filter((tr) => tr.querySelector("input[data-export-select]"));
  const rowsToExport = selectableRows.length
    ? selectableRows.filter((tr) => tr.querySelector("input[data-export-select]")?.checked)
    : rows;

  if (selectableRows.length && !rowsToExport.length) {
    if (statusElement) {
      statusElement.textContent = "กรุณาเลือกรายการที่ต้องการส่งออก";
      statusElement.classList.add("error");
    }
    return;
  }

  rowsToExport.forEach((tr) => {
    const cells = Array.from(tr.querySelectorAll("td"));
    if (!cells.length) return;
    if (cells.length === 1 && String(cells[0].textContent || "").includes("ยังไม่มีข้อมูล")) return;
    const values = exportableIndexes.map(({ index }) => {
      const cell = cells[index];
      if (!cell) return "";
      return String(cell.innerText || cell.textContent || "").replace(/\s+/g, " ").trim();
    });
    dataRows.push(values);
  });

  if (!dataRows.length) {
    if (statusElement) {
      statusElement.textContent = "ยังไม่มีข้อมูลสำหรับส่งออก";
      statusElement.classList.add("error");
    }
    return;
  }

  const reportDate = new Date().toLocaleString("th-TH");
  const csvLines = [
    toCsvValue(title),
    toCsvValue(`วันที่ออกรายงาน: ${reportDate}`),
    [],
    exportableIndexes.map(({ header }) => toCsvValue(header)).join(","),
    ...dataRows.map((cols) => cols.map((col) => toCsvValue(col || "-")).join(",")),
  ];
  const blob = new Blob([`\uFEFF${csvLines.join("\n")}`], { type: "text/csv;charset=utf-8;" });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(blob);
  anchor.download = `${filePrefix}-${stamp}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(anchor.href), 500);

  if (statusElement) {
    statusElement.textContent = "ส่งออกไฟล์ CSV เรียบร้อย";
    statusElement.classList.remove("error");
  }
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

const showConfirmDialog = ({ title = "ยืนยันการลบข้อมูล", message = "ต้องการลบรายการนี้หรือไม่?" } = {}) =>
  new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "confirm-dialog";
    overlay.innerHTML = `
      <div class="confirm-dialog__card" role="dialog" aria-modal="true" aria-label="${title}">
        <p class="confirm-dialog__title">${title}</p>
        <p class="confirm-dialog__message">${message}</p>
        <div class="confirm-dialog__actions">
          <button type="button" class="secondary" data-confirm-action="cancel">ยกเลิก</button>
          <button type="button" class="danger" data-confirm-action="ok">ลบข้อมูล</button>
        </div>
      </div>
    `;

    const close = (result) => {
      overlay.remove();
      resolve(result);
    };

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close(false);
    });
    overlay.querySelector('[data-confirm-action="cancel"]')?.addEventListener("click", () => close(false));
    overlay.querySelector('[data-confirm-action="ok"]')?.addEventListener("click", () => close(true));
    document.body.appendChild(overlay);
  });

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
  updateInputDatalist("mouWorkerName", "workerNameSuggestions", workers);
  updateInputDatalist("receiveWorkerName", "workerNameSuggestions", workers);
  updateInputDatalist("returnWorkerName", "workerNameSuggestions", workers);
  updateInputDatalist("r90Employer", "employerNameSuggestions", employers);
  updateInputDatalist("visaEmployer", "employerNameSuggestions", employers);
  updateInputDatalist("receiveEmployerName", "employerNameSuggestions", employers);
  updateInputDatalist("returnEmployerName", "employerNameSuggestions", employers);
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

  let response = null;
  try {
    response = await send(
      incomingId ? `${RECORDS_API_URL}/${encodeURIComponent(incomingId)}` : RECORDS_API_URL,
      incomingId ? "PUT" : "POST"
    );

    if (!response.ok && incomingId && [404, 405, 501].includes(response.status)) {
      // backward compatibility: some deployments still expose upsert via POST only
      response = await send(RECORDS_API_URL, "POST");
    }
  } catch (_error) {
    response = null;
  }

  if (!response || !response.ok) {
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


const deleteRecordById = async (id) => {
  const targetId = String(id || "").trim();
  if (!targetId) return;
  try {
    const response = await fetch(`${RECORDS_API_URL}/${encodeURIComponent(targetId)}`, { method: "DELETE" });
    if (!response.ok && response.status !== 404) {
      throw new Error("Delete failed");
    }
  } catch (_error) {
    // fallback to local-only delete
  }

  const localRows = readLocalRecords().filter((item) => String(item?.formId || "") !== targetId);
  writeLocalRecords(localRows);
  refreshNameSuggestions();
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
    startDate: normalizeDateInputValue(values.startDate),
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
      startDate: normalizeDateInputValue(values.startDate),
      nextDate: normalizeDateInputValue(values.nextDate) || computeFollowupDateFromStart(values.startDate),
      documentReceivedDate: normalizeDateInputValue(values.documentReceivedDate),
      documentReturnDate: normalizeDateInputValue(values.documentReturnDate),
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
    startDate: normalizeDateInputValue(values.startDate),
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
      startDate: normalizeDateInputValue(values.startDate),
      endDate: normalizeDateInputValue(values.endDate) || computeFollowupDateFromStart(values.startDate),
      documentReceivedDate: normalizeDateInputValue(values.documentReceivedDate),
      documentReturnDate: normalizeDateInputValue(values.documentReturnDate),
      visaOverdue: values.visaOverdue,
      sentImmigration: values.sentImmigration,
      returnBook: values.returnBook,
      p60: values.p60,
      p30: values.p30,
    },
  },
});


const toMouLaosPayload = (values, formId = "") => ({
  formId,
  formType: "mouLaos",
  formTypeLabel: "MOU ลาว",
  displayName: `MOU ลาว - ${values.workerName || "-"}${values.employerName ? ` (${values.employerName})` : ""}`,
  status: "final",
  updatedAt: new Date().toISOString(),
  data: {
    recordedBy: values.recordedBy || "",
    company: "",
    startDate: normalizeDateInputValue(values.startDate),
    personalInfo: {
      fullName: values.workerName,
      alienId: values.alienId,
      employerName: values.employerName || "",
      workPermitNumber: values.workPermitNumber || "",
    },
    caseStatus: {
      status: "registered",
      appointmentDate: "",
      appointmentNote: "",
    },
    followupType: "moulaos",
    followup: {
      startDate: normalizeDateInputValue(values.startDate),
      endDate: normalizeDateInputValue(values.endDate) || addYears(values.startDate, 2),
      documentReceivedDate: normalizeDateInputValue(values.documentReceivedDate),
      documentReturnDate: normalizeDateInputValue(values.documentReturnDate),
    },
  },
});

const toReceiveDocsPayload = (values, formId = "") => ({
  formId,
  formType: "receivedocs",
  formTypeLabel: "รับเอกสาร",
  displayName: `รับเอกสาร - ${values.workerName || "-"}`,
  status: "final",
  updatedAt: new Date().toISOString(),
  data: {
    recordedBy: values.receiverName || "",
    company: "",
    startDate: normalizeDateInputValue(values.receiveDate),
    personalInfo: {
      fullName: values.workerName,
      employerName: values.employerName,
    },
    caseStatus: { status: "registered", appointmentDate: "", appointmentNote: "" },
    followupType: "receivedocs",
    followup: {
      taskType: values.taskType || "",
      documentReceivedDate: normalizeDateInputValue(values.receiveDate),
      receiverName: values.receiverName || "",
    },
  },
});

const toReturnDocsPayload = (values, formId = "") => ({
  formId,
  formType: "returndocs",
  formTypeLabel: "ส่งคืนเอกสาร",
  displayName: `ส่งคืนเอกสาร - ${values.workerName || "-"}`,
  status: "final",
  updatedAt: new Date().toISOString(),
  data: {
    recordedBy: values.returnSenderName || "",
    company: "",
    startDate: normalizeDateInputValue(values.returnDate),
    personalInfo: {
      fullName: values.workerName,
      employerName: values.employerName,
    },
    caseStatus: { status: "registered", appointmentDate: "", appointmentNote: "" },
    followupType: "returndocs",
    followup: {
      taskType: values.taskType || "",
      documentReturnDate: normalizeDateInputValue(values.returnDate),
      returnSenderName: values.returnSenderName || "",
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
  const exportButton = document.getElementById("exportReport90");
  const searchInput = document.getElementById("report90Search");
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
    const startDateValue = followup.startDate || "";
    const nextDateValue = normalizeDateInputValue(followup.nextDate) || computeFollowupDateFromStart(startDateValue);
    return {
      id: record.formId,
      workerName: info.fullName || "",
      gender: info.gender || info.nationality || "",
      employerName: info.employerName || "",
      recordedBy: record?.data?.recordedBy || "",
      startDate: startDateValue,
      nextDate: nextDateValue,
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
    startDate.value = normalizeDateInputValue(item.startDate);
    nextDate.value = normalizeDateInputValue(item.nextDate);
    document.getElementById("r90DocReceiveDate").value = normalizeDateInputValue(item.documentReceivedDate);
    document.getElementById("r90DocReturnDate").value = normalizeDateInputValue(item.documentReturnDate);
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
      ["ส่งเล่มคืน", fmtCheck(item.returnBook)],
    ]);
  };

  const renderRows = () => {
    list.innerHTML = "";
    const alerts = rows.filter((item) => {
      const days = diffDaysBetween(item.startDate, item.nextDate);
      return days !== null && days >= 0 && days <= 90;
    });
    if (alerts.length) {
      alert.textContent = `แจ้งเตือน: มี ${alerts.length} รายการที่ใกล้จะหมดอายุ 90 วัน`;
      alert.classList.remove("is-hidden");
    } else {
      alert.classList.add("is-hidden");
    }

    const keyword = String(searchInput?.value || "").trim().toLowerCase();
    const filteredRows = keyword ? rows.filter((item) => String(item.workerName || "").toLowerCase().includes(keyword)) : rows;

    filteredRows.forEach((item) => {
      const cycleDays = diffDaysBetween(item.startDate, item.nextDate);
      const cycleText =
        cycleDays === null
          ? "-"
          : `${cycleDays} วัน (เริ่ม ${fmtDate(item.startDate)} ถึง ${fmtDate(item.nextDate)})`;
      const cycleTone = getDeadlineToneByRemainingDays(cycleDays);
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><input type="checkbox" data-export-select aria-label="เลือกรายการ" /></td><td>${item.workerName || "-"}</td><td>${item.employerName || "-"}</td><td>${item.recordedBy || "-"}</td><td>${getAggregateBookStats(rows, item, "report90").latestText}</td><td>${fmtDate(item.nextDate)}</td><td><span class="deadline-box ${cycleTone}">${cycleText}</span></td>`;
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

    if (!filteredRows.length) {
      const tr = document.createElement("tr");
      tr.innerHTML = '<td colspan="8">ยังไม่มีข้อมูล</td>';
      list.appendChild(tr);
    }

    const checkAll = list.closest("table")?.querySelector("thead [data-export-check-all]");
    if (checkAll) {
      checkAll.checked = false;
      checkAll.onchange = () => {
        list.querySelectorAll("input[data-export-select]").forEach((cb) => {
          cb.checked = checkAll.checked;
        });
      };
    }
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

  exportButton?.addEventListener("click", () => {
    exportTableToCsv({ listElement: list, filePrefix: "report90-records", statusElement: status });
  });
  searchInput?.addEventListener("input", renderRows);

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = {
      workerName: document.getElementById("r90WorkerName").value.trim(),
      gender: document.getElementById("r90Gender").value,
      employerName: document.getElementById("r90Employer").value.trim(),
      recordedBy: document.getElementById("r90RecordedBy").value.trim(),
      startDate: startDate.value,
      nextDate: nextDate.value,
      documentReceivedDate: document.getElementById("r90DocReceiveDate").value,
      documentReturnDate: document.getElementById("r90DocReturnDate").value,
      overdueFine: document.getElementById("r90Overdue").checked,
      sentImmigration: document.getElementById("r90SentImm").checked,
      returnBook: document.getElementById("r90ReturnBook").checked,
    };

    values.startDate = normalizeDateInputValue(values.startDate);
    if (!values.startDate) {
      status.textContent = "กรุณาใส่วันที่เริ่มรายงานตัวก่อนบันทึก";
      status.classList.add("error");
      return;
    }
    values.nextDate = normalizeDateInputValue(values.nextDate) || computeFollowupDateFromStart(values.startDate);

    try {
      const submittingEditId = editFormId || requestedEditId || "";
      startDate.value = normalizeDateInputValue(values.startDate);
      nextDate.value = normalizeDateInputValue(values.nextDate);
      await saveRecord(toReport90Payload(values, submittingEditId));
      const wasEdit = Boolean(submittingEditId);
      resetForm();
      await refreshRows();
      const latest = rows.find((row) => row.workerName === values.workerName && row.employerName === values.employerName);
      const stats = latest ? getAggregateBookStats(rows, latest, "report90") : { latestText: "-" };
      status.textContent = `${wasEdit ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย"} • ล่าสุด: ${stats.latestText}`;
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
  const exportButton = document.getElementById("exportVisaRun");
  const searchInput = document.getElementById("visaRunSearch");
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
    const startDateValue = followup.startDate || "";
    const endDateValue = normalizeDateInputValue(followup.endDate) || computeFollowupDateFromStart(startDateValue);
    return {
      id: record.formId,
      workerName: info.fullName || "",
      gender: info.gender || info.nationality || "",
      employerName: info.employerName || "",
      recordedBy: record?.data?.recordedBy || "",
      startDate: startDateValue,
      endDate: endDateValue,
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
    startDate.value = normalizeDateInputValue(item.startDate);
    endDate.value = normalizeDateInputValue(item.endDate);
    document.getElementById("visaDocReceiveDate").value = normalizeDateInputValue(item.documentReceivedDate);
    document.getElementById("visaDocReturnDate").value = normalizeDateInputValue(item.documentReturnDate);
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
      ["ส่งเล่มคืน", fmtCheck(item.returnBook)],
      ["ผ.60", fmtCheck(item.p60)],
      ["ผ.30", fmtCheck(item.p30)],
    ]);
  };

  const renderRows = () => {
    list.innerHTML = "";
    const alerts = rows.filter((item) => {
      const days = diffDaysBetween(item.startDate, item.endDate);
      return days !== null && days >= 0 && days <= 90;
    });
    if (alerts.length) {
      alert.textContent = `แจ้งเตือน: มี ${alerts.length} รายการที่ใกล้จะหมดอายุ 90 วัน`;
      alert.classList.remove("is-hidden");
    } else {
      alert.classList.add("is-hidden");
    }

    const keyword = String(searchInput?.value || "").trim().toLowerCase();
    const filteredRows = keyword ? rows.filter((item) => String(item.workerName || "").toLowerCase().includes(keyword)) : rows;

    filteredRows.forEach((item) => {
      const cycleDays = diffDaysBetween(item.startDate, item.endDate);
      const cycleText = cycleDays === null ? "-" : `${fmtDate(item.endDate)} (${cycleDays} วัน)`;
      const cycleTone = getDeadlineToneByRemainingDays(cycleDays);
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><input type="checkbox" data-export-select aria-label="เลือกรายการ" /></td><td>${item.workerName || "-"}</td><td>${item.employerName || "-"}</td><td>${item.recordedBy || "-"}</td><td>${getAggregateBookStats(rows, item, "visarun").latestText}</td><td>${fmtDate(item.endDate)}</td><td><span class="deadline-box ${cycleTone}">${cycleText}</span></td>`;
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

    if (!filteredRows.length) {
      const tr = document.createElement("tr");
      tr.innerHTML = '<td colspan="8">ยังไม่มีข้อมูล</td>';
      list.appendChild(tr);
    }

    const checkAll = list.closest("table")?.querySelector("thead [data-export-check-all]");
    if (checkAll) {
      checkAll.checked = false;
      checkAll.onchange = () => {
        list.querySelectorAll("input[data-export-select]").forEach((cb) => {
          cb.checked = checkAll.checked;
        });
      };
    }
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
    if (!endDate.value) {
      endDate.value = addDays(startDate.value, 90);
    }
  };
  startDate?.addEventListener("change", updateVisaEndDate);
  startDate?.addEventListener("input", updateVisaEndDate);

  exportButton?.addEventListener("click", () => {
    exportTableToCsv({ listElement: list, filePrefix: "visarun-records", statusElement: status });
  });
  searchInput?.addEventListener("input", renderRows);

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = {
      workerName: document.getElementById("visaWorkerName").value.trim(),
      gender: document.getElementById("visaGender").value,
      employerName: document.getElementById("visaEmployer").value.trim(),
      recordedBy: document.getElementById("visaRecordedBy").value.trim(),
      startDate: startDate.value,
      endDate: endDate.value,
      documentReceivedDate: document.getElementById("visaDocReceiveDate").value,
      documentReturnDate: document.getElementById("visaDocReturnDate").value,
      visaOverdue: document.getElementById("visaOverdue").checked,
      sentImmigration: document.getElementById("visaSentImm").checked,
      returnBook: document.getElementById("visaReturnBook").checked,
      p60: document.getElementById("visaP60").checked,
      p30: document.getElementById("visaP30").checked,
    };

    values.startDate = normalizeDateInputValue(values.startDate);
    if (!values.startDate) {
      status.textContent = "กรุณาใส่วันเริ่ม Visa ก่อนบันทึก";
      status.classList.add("error");
      return;
    }

    try {
      const submittingEditId = editFormId || requestedEditId || "";
      startDate.value = normalizeDateInputValue(values.startDate);
      endDate.value = normalizeDateInputValue(values.endDate);
      await saveRecord(toVisaRunPayload(values, submittingEditId));
      const wasEdit = Boolean(submittingEditId);
      resetForm();
      await refreshRows();
      const latest = rows.find((row) => row.workerName === values.workerName && row.employerName === values.employerName);
      const stats = latest ? getAggregateBookStats(rows, latest, "visarun") : { latestText: "-" };
      status.textContent = `${wasEdit ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย"} • ล่าสุด: ${stats.latestText}`;
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


const runMouLaosPage = () => {
  const form = document.getElementById("mouLaosForm");
  const startDate = document.getElementById("mouStartDate");
  const endDate = document.getElementById("mouEndDate");
  const status = document.getElementById("mouStatus");
  const list = document.getElementById("mouList");
  const exportButton = document.getElementById("exportMouLaos");
  const searchInput = document.getElementById("mouSearch");
  const alert = document.getElementById("mouAlert");
  const modal = setupModal();
  let rows = [];
  let editFormId = "";
  const requestedEditId = getEditIdFromQuery();
  if (requestedEditId) editFormId = requestedEditId;

  const resetForm = () => {
    form.reset();
    editFormId = "";
  };

  const mapRecord = (record) => {
    const info = record?.data?.personalInfo || {};
    const followup = record?.data?.followup || {};
    const startDateValue = followup.startDate || "";
    const endDateValue = normalizeDateInputValue(followup.endDate) || addYears(startDateValue, 2);
    return {
      id: record.formId,
      workerName: info.fullName || "",
      alienId: info.alienId || "",
      employerName: info.employerName || "",
      workPermitNumber: info.workPermitNumber || "",
      recordedBy: record?.data?.recordedBy || "",
      startDate: startDateValue,
      endDate: endDateValue,
      documentReceivedDate: followup.documentReceivedDate || "",
      documentReturnDate: followup.documentReturnDate || "",
    };
  };

  const fillForEdit = (item) => {
    document.getElementById("mouWorkerName").value = item.workerName || "";
    document.getElementById("mouAlienId").value = item.alienId || "";
    document.getElementById("mouEmployerName").value = item.employerName || "";
    document.getElementById("mouWorkPermitNumber").value = item.workPermitNumber || "";
    document.getElementById("mouRecordedBy").value = item.recordedBy || "";
    startDate.value = normalizeDateInputValue(item.startDate);
    endDate.value = normalizeDateInputValue(item.endDate);
    document.getElementById("mouDocReceiveDate").value = normalizeDateInputValue(item.documentReceivedDate);
    document.getElementById("mouDocReturnDate").value = normalizeDateInputValue(item.documentReturnDate);
    editFormId = item.id;
  };

  const showDetail = (item) => {
    modal.open("ตรวจสอบข้อมูล MOU ลาว", [
      ["เลขฟอร์ม", item.id || "-"],
      ["ชื่อต่างด้าว", item.workerName || "-"],
      ["เลขประจำตัว", item.alienId || "-"],
      ["ชื่อนายจ้าง", item.employerName || "-"],
      ["เลขใบอนุญาตทำงาน", item.workPermitNumber || "-"],
      ["วันเริ่ม Visa", fmtDate(item.startDate)],
      ["วันหมด Visa", fmtDate(item.endDate)],
      ["วันรับเอกสาร", fmtDate(item.documentReceivedDate)],
      ["วันคืนเอกสาร", fmtDate(item.documentReturnDate)],
      ["ผู้บันทึกข้อมูล", item.recordedBy || "-"],
      ["คงเหลือ", formatRemainingYMD(item.endDate)],
    ]);
  };

  const refreshRows = async () => {
    const records = await fetchRecordsByType("mouLaos");
    rows = records.map(mapRecord).sort((a, b) => (b.id || "").localeCompare(a.id || "", "th"));
    renderRows();
    if (requestedEditId && !editFormId) {
      const target = rows.find((item) => String(item.id) === requestedEditId);
      if (target) fillForEdit(target);
    }
  };

  const renderRows = () => {
    list.innerHTML = "";
    const alerts = rows.filter((item) => {
      const days = diffDaysBetween(item.startDate, item.endDate);
      return days !== null && days >= 0 && days <= 90;
    });
    if (alert) {
      if (alerts.length) {
        alert.textContent = `แจ้งเตือน: มี ${alerts.length} รายการที่ใกล้หมดอายุ`;
        alert.classList.remove("is-hidden");
      } else {
        alert.classList.add("is-hidden");
      }
    }

    const keyword = String(searchInput?.value || "").trim().toLowerCase();
    const filteredRows = keyword
      ? rows.filter((item) => [item.workerName, item.employerName, item.alienId, item.workPermitNumber].some((value) => String(value || "").toLowerCase().includes(keyword)))
      : rows;

    filteredRows.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><input type="checkbox" data-export-select aria-label="เลือกรายการ" /></td><td>${item.workerName || "-"}</td><td>${item.alienId || "-"}</td><td>${item.employerName || "-"}</td><td>${item.workPermitNumber || "-"}</td><td>${fmtDate(item.startDate)}</td><td>${fmtDate(item.endDate)}</td><td>${fmtDate(item.documentReceivedDate)}</td><td>${fmtDate(item.documentReturnDate)}</td><td>${item.recordedBy || "-"}</td><td><span class="deadline-box">${formatRemainingYMD(item.endDate)}</span></td>`;
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

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "danger";
      deleteButton.textContent = "ลบ";
      deleteButton.addEventListener("click", async () => {
        const shouldDelete = await showConfirmDialog({
          message: `ยืนยันการลบข้อมูล MOU ลาว ของ ${item.workerName || "-"} ?`,
        });
        if (!shouldDelete) return;
        await deleteRecordById(item.id);
        await refreshRows();
      });

      actionWrap.append(verifyButton, editButton, deleteButton);
      actionCell.appendChild(actionWrap);
      tr.appendChild(actionCell);
      list.appendChild(tr);
    });

    if (!filteredRows.length) {
      const tr = document.createElement("tr");
      tr.innerHTML = '<td colspan="12">ยังไม่มีข้อมูล</td>';
      list.appendChild(tr);
    }

    const checkAll = list.closest("table")?.querySelector("thead [data-export-check-all]");
    if (checkAll) {
      checkAll.checked = false;
      checkAll.onchange = () => {
        list.querySelectorAll("input[data-export-select]").forEach((cb) => {
          cb.checked = checkAll.checked;
        });
      };
    }
  };

  const updateMouEndDate = () => {
    if (!endDate.value) {
      endDate.value = addYears(startDate.value, 2);
    }
  };
  startDate?.addEventListener("change", updateMouEndDate);
  startDate?.addEventListener("input", updateMouEndDate);

  exportButton?.addEventListener("click", () => {
    exportTableToCsv({ listElement: list, filePrefix: "moulaos-records", statusElement: status });
  });
  searchInput?.addEventListener("input", renderRows);

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = {
      workerName: document.getElementById("mouWorkerName").value.trim(),
      alienId: document.getElementById("mouAlienId").value.trim(),
      employerName: document.getElementById("mouEmployerName").value.trim(),
      workPermitNumber: document.getElementById("mouWorkPermitNumber").value.trim(),
      recordedBy: document.getElementById("mouRecordedBy").value.trim(),
      startDate: startDate.value,
      endDate: endDate.value,
      documentReceivedDate: document.getElementById("mouDocReceiveDate").value,
      documentReturnDate: document.getElementById("mouDocReturnDate").value,
    };

    values.startDate = normalizeDateInputValue(values.startDate);
    values.endDate = normalizeDateInputValue(values.endDate);

    try {
      const submittingEditId = editFormId || requestedEditId || "";
      startDate.value = normalizeDateInputValue(values.startDate);
      endDate.value = normalizeDateInputValue(values.endDate);
      await saveRecord(toMouLaosPayload(values, submittingEditId));
      const wasEdit = Boolean(submittingEditId);
      resetForm();
      await refreshRows();
      status.textContent = wasEdit ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย";
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


const runReceiveDocsPage = () => {
  const type = "receivedocs";
  const form = document.getElementById("receiveDocsForm");
  const status = document.getElementById("receiveDocsStatus");
  const list = document.getElementById("receiveDocsList");
  const exportButton = document.getElementById("exportReceiveDocs");
  const searchInput = document.getElementById("receiveDocsSearch");
  const modal = setupModal();
  let rows = [];
  let editFormId = "";
  const requestedEditId = getEditIdFromQuery();
  if (requestedEditId) editFormId = requestedEditId;

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
      employerName: info.employerName || "",
      taskType: followup.taskType || "",
      receiveDate: followup.documentReceivedDate || "",
      receiverName: followup.receiverName || record?.data?.recordedBy || "",
    };
  };

  const fillForEdit = (item) => {
    document.getElementById("receiveWorkerName").value = item.workerName || "";
    document.getElementById("receiveEmployerName").value = item.employerName || "";
    document.getElementById("receiveTaskType").value = item.taskType || "";
    document.getElementById("receiveDate").value = normalizeDateInputValue(item.receiveDate);
    document.getElementById("receiveBy").value = item.receiverName || "";
    editFormId = String(item.id || "");
  };

  const showDetail = (item) => {
    modal.open("ตรวจสอบข้อมูล รับเอกสาร", [
      ["ชื่อต่างด้าว", item.workerName || "-"],
      ["ชื่อนายจ้าง", item.employerName || "-"],
      ["รายการที่ทำ", item.taskType || "-"],
      ["วันที่รับเอกสาร", fmtDate(item.receiveDate)],
      ["ผู้รับเอกสาร", item.receiverName || "-"],
    ]);
  };

  const renderRows = () => {
    list.innerHTML = "";
    const keyword = String(searchInput?.value || "").trim().toLowerCase();
    const filteredRows = keyword ? rows.filter((item) => String(item.workerName || "").toLowerCase().includes(keyword)) : rows;

    filteredRows.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><input type="checkbox" data-export-select aria-label="เลือกรายการ" /></td><td>${item.workerName || "-"}</td><td>${item.employerName || "-"}</td><td>${item.taskType || "-"}</td><td>${fmtDate(item.receiveDate)}</td><td>${item.receiverName || "-"}</td>`;
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
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "danger";
      deleteButton.textContent = "ลบ";
      deleteButton.addEventListener("click", async () => {
        const shouldDelete = await showConfirmDialog({
          message: `ยืนยันการลบข้อมูลรับเอกสาร ของ ${item.workerName || "-"} ?`,
        });
        if (!shouldDelete) return;
        await deleteRecordById(item.id);
        await refreshRows();
      });
      actionWrap.append(verifyButton, editButton, deleteButton);
      actionCell.appendChild(actionWrap);
      tr.appendChild(actionCell);
      list.appendChild(tr);
    });
    if (!filteredRows.length) {
      const tr = document.createElement("tr");
      tr.innerHTML = '<td colspan="7">ยังไม่มีข้อมูล</td>';
      list.appendChild(tr);
    }

    const checkAll = list.closest("table")?.querySelector("thead [data-export-check-all]");
    if (checkAll) {
      checkAll.checked = false;
      checkAll.onchange = () => {
        list.querySelectorAll("input[data-export-select]").forEach((cb) => {
          cb.checked = checkAll.checked;
        });
      };
    }
  };

  const refreshRows = async () => {
    const records = await fetchRecordsByType(type);
    rows = records.map(mapRecord).sort((a, b) => (b.id || "").localeCompare(a.id || "", "th"));
    renderRows();
    if (requestedEditId && !editFormId) {
      const target = rows.find((item) => String(item.id) === requestedEditId);
      if (target) fillForEdit(target);
    }
  };

  exportButton?.addEventListener("click", () => {
    exportTableToCsv({ listElement: list, filePrefix: "receivedocs-records", statusElement: status });
  });
  searchInput?.addEventListener("input", renderRows);

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = {
      workerName: document.getElementById("receiveWorkerName").value.trim(),
      employerName: document.getElementById("receiveEmployerName").value.trim(),
      taskType: document.getElementById("receiveTaskType").value.trim(),
      receiveDate: document.getElementById("receiveDate").value,
      receiverName: document.getElementById("receiveBy").value.trim(),
    };
    values.receiveDate = normalizeDateInputValue(values.receiveDate);
    if (!values.receiveDate) {
      status.textContent = "กรุณาใส่วันที่รับเอกสารก่อนบันทึก";
      status.classList.add("error");
      return;
    }
    try {
      const submittingEditId = editFormId || requestedEditId || "";
      await saveRecord(toReceiveDocsPayload(values, submittingEditId));
      const wasEdit = Boolean(submittingEditId);
      resetForm();
      await refreshRows();
      status.textContent = wasEdit ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย";
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

const runReturnDocsPage = () => {
  const type = "returndocs";
  const form = document.getElementById("returnDocsForm");
  const status = document.getElementById("returnDocsStatus");
  const list = document.getElementById("returnDocsList");
  const exportButton = document.getElementById("exportReturnDocs");
  const modal = setupModal();
  let rows = [];
  let editFormId = "";
  const requestedEditId = getEditIdFromQuery();
  if (requestedEditId) editFormId = requestedEditId;

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
      employerName: info.employerName || "",
      taskType: followup.taskType || "",
      returnDate: followup.documentReturnDate || "",
      returnSenderName: followup.returnSenderName || record?.data?.recordedBy || "",
    };
  };

  const fillForEdit = (item) => {
    document.getElementById("returnWorkerName").value = item.workerName || "";
    document.getElementById("returnEmployerName").value = item.employerName || "";
    document.getElementById("returnTaskType").value = item.taskType || "";
    document.getElementById("returnDate").value = normalizeDateInputValue(item.returnDate);
    document.getElementById("returnBy").value = item.returnSenderName || "";
    editFormId = String(item.id || "");
  };

  const showDetail = (item) => {
    modal.open("ตรวจสอบข้อมูล ส่งคืนเอกสาร", [
      ["ชื่อต่างด้าว", item.workerName || "-"],
      ["ชื่อนายจ้าง", item.employerName || "-"],
      ["รายการที่ทำ", item.taskType || "-"],
      ["วันที่ส่งคืนเอกสาร", fmtDate(item.returnDate)],
      ["ผู้ส่งคืนเอกสาร", item.returnSenderName || "-"],
    ]);
  };

  const renderRows = () => {
    list.innerHTML = "";
    rows.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><input type="checkbox" data-export-select aria-label="เลือกรายการ" /></td><td>${item.workerName || "-"}</td><td>${item.employerName || "-"}</td><td>${item.taskType || "-"}</td><td>${fmtDate(item.returnDate)}</td><td>${item.returnSenderName || "-"}</td>`;
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
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "danger";
      deleteButton.textContent = "ลบ";
      deleteButton.addEventListener("click", async () => {
        const shouldDelete = await showConfirmDialog({
          message: `ยืนยันการลบข้อมูลส่งคืนเอกสาร ของ ${item.workerName || "-"} ?`,
        });
        if (!shouldDelete) return;
        await deleteRecordById(item.id);
        await refreshRows();
      });
      actionWrap.append(verifyButton, editButton, deleteButton);
      actionCell.appendChild(actionWrap);
      tr.appendChild(actionCell);
      list.appendChild(tr);
    });
    if (!rows.length) {
      const tr = document.createElement("tr");
      tr.innerHTML = '<td colspan="7">ยังไม่มีข้อมูล</td>';
      list.appendChild(tr);
    }

    const checkAll = list.closest("table")?.querySelector("thead [data-export-check-all]");
    if (checkAll) {
      checkAll.checked = false;
      checkAll.onchange = () => {
        list.querySelectorAll("input[data-export-select]").forEach((cb) => {
          cb.checked = checkAll.checked;
        });
      };
    }
  };

  const refreshRows = async () => {
    const records = await fetchRecordsByType(type);
    rows = records.map(mapRecord).sort((a, b) => (b.id || "").localeCompare(a.id || "", "th"));
    renderRows();
    if (requestedEditId && !editFormId) {
      const target = rows.find((item) => String(item.id) === requestedEditId);
      if (target) fillForEdit(target);
    }
  };

  exportButton?.addEventListener("click", () => {
    exportTableToCsv({ listElement: list, filePrefix: "returndocs-records", statusElement: status });
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = {
      workerName: document.getElementById("returnWorkerName").value.trim(),
      employerName: document.getElementById("returnEmployerName").value.trim(),
      taskType: document.getElementById("returnTaskType").value.trim(),
      returnDate: document.getElementById("returnDate").value,
      returnSenderName: document.getElementById("returnBy").value.trim(),
    };
    values.returnDate = normalizeDateInputValue(values.returnDate);
    if (!values.returnDate) {
      status.textContent = "กรุณาใส่วันที่ส่งคืนเอกสารก่อนบันทึก";
      status.classList.add("error");
      return;
    }
    try {
      const submittingEditId = editFormId || requestedEditId || "";
      await saveRecord(toReturnDocsPayload(values, submittingEditId));
      const wasEdit = Boolean(submittingEditId);
      resetForm();
      await refreshRows();
      status.textContent = wasEdit ? "แก้ไขข้อมูลเรียบร้อย" : "บันทึกข้อมูลเรียบร้อย";
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

initBrandIdentity();

if (document.body.dataset.page === "report90") {
  runReport90Page();
}
if (document.body.dataset.page === "visarun") {
  runVisaPage();
}
if (document.body.dataset.page === "moulaos") {
  runMouLaosPage();
}
if (document.body.dataset.page === "receivedocs") {
  runReceiveDocsPage();
}
if (document.body.dataset.page === "returndocs") {
  runReturnDocsPage();
}
