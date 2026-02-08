const formTypeInputs = document.querySelectorAll('input[name="formType"]');
const formTypeOtherRow = document.getElementById("formTypeOtherRow");
const formTypeOtherDetail = document.getElementById("formTypeOtherDetail");
const caseStatusInputs = document.querySelectorAll('input[name="caseStatus"]');
const appointmentDateRow = document.getElementById("appointmentDateRow");
const appointmentDate = document.getElementById("appointmentDate");
const appointmentNote = document.getElementById("appointmentNote");
const sections = document.querySelectorAll(".form-section");
const passportCheckInput = document.getElementById("passportCheck");
const passportStatus = document.getElementById("passportStatus");
const workerList = document.getElementById("workerList");
const addWorkerButton = document.getElementById("addWorker");
const workerTemplate = document.getElementById("workerTemplate");
const company = document.getElementById("company");
const caseType = document.getElementById("caseType");
const position = document.getElementById("position");
const workSite = document.getElementById("workSite");
const startDate = document.getElementById("startDate");
const employerId = document.getElementById("employerId");
const renewalType = document.getElementById("renewalType");
const renewalStatus = document.getElementById("renewalStatus");
const receivedFacePhoto = document.getElementById("receivedFacePhoto");
const receivedIdCard = document.getElementById("receivedIdCard");
const receivedHouseDoc = document.getElementById("receivedHouseDoc");
const receivedPaymentSlip = document.getElementById("receivedPaymentSlip");
const requiredRenewalDocs = document.querySelectorAll(".required-renewal-doc");
const receivedDocsNote = document.getElementById("receivedDocsNote");
const renewalDocsNote = document.getElementById("renewalDocsNote");
const notificationItems = document.querySelectorAll(".notification-item");
const supportingDocs = document.querySelectorAll(".supporting-doc");
const verification = document.getElementById("verification");
const workerFullName = document.getElementById("workerFullName");
const workerGender = document.getElementById("workerGender");
const workerNationality = document.getElementById("workerNationality");
const workerEmail = document.getElementById("workerEmail");
const workerCode = document.getElementById("workerCode");
const workerAlienId = document.getElementById("workerAlienId");
const workPermitExpiry = document.getElementById("workPermitExpiry");
const passNumber = document.getElementById("passNumber");
const passIssueDate = document.getElementById("passIssueDate");
const passExpiryDate = document.getElementById("passExpiryDate");
const businessType = document.getElementById("businessType");
const employerName = document.getElementById("employerName");
const documentSender = document.getElementById("documentSender");
const documentSentDate = document.getElementById("documentSentDate");
const documentReceiver = document.getElementById("documentReceiver");
const documentReceivedDate = document.getElementById("documentReceivedDate");
const documentReturnDate = document.getElementById("documentReturnDate");
const docWorkPermit = document.getElementById("docWorkPermit");
const docReceipt = document.getElementById("docReceipt");
const docRequestForm = document.getElementById("docRequestForm");
const docNameList = document.getElementById("docNameList");
const docPassPage = document.getElementById("docPassPage");
const docVisaPage = document.getElementById("docVisaPage");
const docHealthCard = document.getElementById("docHealthCard");
const docExitNotice = document.getElementById("docExitNotice");
const docHouseReg = document.getElementById("docHouseReg");
const docEmployerIdCard = document.getElementById("docEmployerIdCard");
const docCompanyCert = document.getElementById("docCompanyCert");
const documentsNote = document.getElementById("documentsNote");
const paymentStatus = document.getElementById("paymentStatus");
const paymentDate = document.getElementById("paymentDate");
const paymentNotes = document.getElementById("paymentNotes");
const employerCheckInput = document.getElementById("employerCheck");
const employerStatus = document.getElementById("employerStatus");
const pageLoader = document.getElementById("pageLoader");
@@ -67,50 +75,53 @@ const paymentSlipCard = document.querySelector('[data-upload="paymentSlip"]');
const uploadPreview = document.getElementById("uploadPreview");
const paymentSlipInput = document.getElementById("paymentSlip");
const paymentSlipPreview = document.getElementById("paymentSlipPreview");
const workerForm = document.getElementById("workerForm");
const formSaveStatus = document.getElementById("formSaveStatus");
const recordSearch = document.getElementById("recordSearch");
const recordFilter = document.getElementById("recordFilter");
const recordsStatus = document.getElementById("recordsStatus");
const recordsList = document.getElementById("recordsList");
const clearRecordsButton = document.getElementById("clearRecords");
const passportCheckButton = document.getElementById("passportCheckButton");
const employerCheckButton = document.getElementById("employerCheckButton");
const generalSearchInput = document.getElementById("generalSearch");
const generalSearchButton = document.getElementById("generalSearchButton");
const generalSearchStatus = document.getElementById("generalSearchStatus");
const verifyRecordButton = document.getElementById("verifyRecord");
const recordModal = document.getElementById("recordModal");
const recordModalTitle = document.getElementById("recordModalTitle");
const recordModalBody = document.getElementById("recordModalBody");
const recordModalClose = document.getElementById("recordModalClose");
const recordModalCloseButton = document.getElementById("recordModalCloseButton");
const draftButton = document.getElementById("draftButton");
const clearFormDraftButton = document.getElementById("clearFormDraft");
const themeToggle = document.getElementById("themeToggle");
const recordedBy = document.getElementById("recordedBy");
const formSteps = document.querySelectorAll(".form-step");
const nextStepButton = document.getElementById("nextStepButton");
const prevStepButton = document.getElementById("prevStepButton");
const EDIT_KEY = "editRecordId";
const RECORD_SEARCH_KEY = "recordSearchQuery";
const FORM_DRAFT_KEY = "workerFormDraft";
const THEME_KEY = "uiTheme";
let currentEditId = null;
const uploadCache = {
  facePhoto: { name: "", dataUrl: "" },
  idCard: { name: "", dataUrl: "" },
  houseDoc: { name: "", dataUrl: "" },
  paymentSlip: { name: "", dataUrl: "" },
};
const uploadFieldConfigs = [
  { key: "facePhoto", input: facePhotoInput, card: facePhotoCard },
  { key: "idCard", input: idCardInput, card: idCardCard },
  { key: "houseDoc", input: houseDocInput, card: houseDocCard },
];
const paymentSlipConfig = { key: "paymentSlip", input: paymentSlipInput, card: paymentSlipCard };

const getSelectedFormType = () => {
  const selected = Array.from(formTypeInputs || []).find((input) => input.checked);
  return selected ? selected.value : "";
};

const getSelectedCaseStatus = () => {
  const selected = Array.from(caseStatusInputs || []).find((input) => input.checked);
@@ -123,50 +134,53 @@ const updateSections = () => {
  }
  const selected = getSelectedFormType();
  sections.forEach((section) => {
    const sectionKey = section.dataset.section;
    const shouldShow = sectionKey === "all" || sectionKey === selected;
    section.style.display = shouldShow ? "block" : "none";
  });
};

const updateFormTypeOtherVisibility = () => {
  if (!formTypeOtherRow) return;
  const isOther = getSelectedFormType() === "other";
  formTypeOtherRow.classList.toggle("is-hidden", !isOther);
  if (!isOther && formTypeOtherDetail) {
    formTypeOtherDetail.value = "";
  }
};

const updateAppointmentVisibility = () => {
  if (!appointmentDateRow) return;
  const isAppointment = getSelectedCaseStatus() === "appointment";
  appointmentDateRow.classList.toggle("is-hidden", !isAppointment);
  if (!isAppointment && appointmentDate) {
    appointmentDate.value = "";
  }
  if (!isAppointment && appointmentNote) {
    appointmentNote.value = "";
  }
};

const translations = {
  th: {
    heroTitle: "ระบบตรวจสอบข้อมูลแรงงานต่างด้าว",
    sectionSelectTitle: "ค้นหาข้อมูลพื้นฐาน",
    passportCheckTitle: "ตรวจเลขพาสปอร์ต",
    passportCheckPlaceholder: "กรอกเลขพาสปอร์ตเพื่อเช็คข้อมูล",
    checkButton: "ตรวจสอบ",
    passportCheckHint: "กรุณากรอกเลขพาสปอร์ต",
    employerSearchTitle: "ค้นหานายจ้าง/แรงงาน",
    employerSearchPlaceholder: "กรอกเลขแรงงาน หรือชื่อนายจ้าง",
    searchButton: "ค้นหา",
    employerSearchHint: "ยังไม่มีคำค้นหา",
    generalSearchTitle: "ค้นหาข้อมูล",
    generalSearchPlaceholder: "เช่น เลขฟอร์ม / ชื่อแรงงาน / เลขต่างด้าว / นายจ้าง",
    generalSearchHint: "พิมพ์คำค้นหาเพื่อค้นหาข้อมูล",
    generalSearchNotFound: "ไม่พบข้อมูลที่ตรงกัน",
    themeToggleLabel: "โหมดมืด",
    formTypeLabel: "ประเภทงาน",
    formTypeChangeEmployer: "เปลี่ยนนายจ้าง",
    formTypeResidence: "แจ้งที่พัก 37,38",
    formTypeVisaStamp: "ลงตรา Visa",
    formTypeCiReport: "รายงานทำเล่ม CI",
    formTypeWorkPermitRenewal: "ต่ออนุญาตทำงานแรงงานต่างด้าว",
@@ -390,51 +404,51 @@ const translations = {
    recordModalTitle: "ผลการค้นหา",
    closeButton: "ปิดหน้าต่าง",
    recordNotFound: "ไม่พบข้อมูลที่ตรงกัน",
    recordDetailsTitle: "ข้อมูลที่พบ",
    recordFormTypeLabel: "ประเภทงาน",
    recordNameLabel: "ชื่อ",
    recordPassportLabel: "พาสปอร์ต",
    recordEmployerLabel: "นายจ้าง",
    recordCaseTypeLabel: "ประเภทการแจ้ง",
    recordAttachmentsTitle: "เอกสารแนบ",
    recordFacePhotoLabel: "รูปหน้า",
    recordIdCardLabel: "บัตรประชาชน/บัตรชมพู",
    recordHouseDocLabel: "ทะเบียนบ้าน",
    recordPaymentSlipLabel: "สลิปการโอนเงิน",
    paymentTitle: "ยืนยันการชำระเงิน",
    paymentStatusLabel: "สถานะการชำระเงิน",
    paymentPending: "ยังไม่ชำระ",
    paymentPaid: "ชำระแล้ว",
    paymentDateLabel: "วันที่ชำระเงิน",
    paymentSlipLabel: "แนบสลิปการชำระเงิน",
    paymentSlipUpload: "อัปโหลดสลิป",
    paymentNotesLabel: "หมายเหตุ",
    paymentNotesPlaceholder: "รายละเอียดเพิ่มเติม",
    tabLookup: "การค้นหาข้อมูล",
    tabRecords: "รายการบันทึก",
    tabForm: "หน้าทำรายการต่างๆ",
    recordedByLabel: "ผู้บันทึกข้อมูล",
    recordedByPlaceholder: "กรอกชื่อผู้บันทึกข้อมูล",
    workerCountSuffix: "คน",
    confirmClearRecords: "ยืนยันลบข้อมูลทั้งหมดหรือไม่?",
    confirmDeleteRecord: "ต้องการลบรายการนี้หรือไม่?",
  },
  en: {
    heroTitle: "Foreign Worker Data Verification",
    sectionSelectTitle: "Quick lookup",
    passportCheckTitle: "Passport number check",
    passportCheckPlaceholder: "Enter passport number to check",
    checkButton: "Check",
    passportCheckHint: "Please enter a passport number.",
    employerSearchTitle: "Employer/worker search",
    employerSearchPlaceholder: "Enter worker ID or employer name",
    searchButton: "Search",
    employerSearchHint: "No search query yet.",
    generalSearchTitle: "Search records",
    generalSearchPlaceholder: "e.g. form ID / worker name / worker ID / employer",
    generalSearchHint: "Enter a query to search records.",
    generalSearchNotFound: "No matching records found.",
    themeToggleLabel: "Dark mode",
    formTypeLabel: "Work category",
    formTypeChangeEmployer: "Change employer",
    formTypeResidence: "Residence notice 37/38",
@@ -661,60 +675,61 @@ const translations = {
    recordModalTitle: "Search results",
    closeButton: "Close",
    recordNotFound: "No matching records found.",
    recordDetailsTitle: "Matched record",
    recordFormTypeLabel: "Work category",
    recordNameLabel: "Name",
    recordPassportLabel: "Passport",
    recordEmployerLabel: "Employer",
    recordCaseTypeLabel: "Case type",
    recordAttachmentsTitle: "Attachments",
    recordFacePhotoLabel: "Face photo",
    recordIdCardLabel: "ID/pink card",
    recordHouseDocLabel: "House registration",
    recordPaymentSlipLabel: "Payment slip",
    paymentTitle: "Payment confirmation",
    paymentStatusLabel: "Payment status",
    paymentPending: "Not paid",
    paymentPaid: "Paid",
    paymentDateLabel: "Payment date",
    paymentSlipLabel: "Attach payment slip",
    paymentSlipUpload: "Upload slip",
    paymentNotesLabel: "Notes",
    paymentNotesPlaceholder: "Additional details",
    tabLookup: "Lookup",
    tabRecords: "Records",
    tabForm: "Task page",
    recordedByLabel: "Recorded by",
    recordedByPlaceholder: "Enter recorder name",
    workerCountSuffix: "workers",
    confirmClearRecords: "Are you sure you want to clear all records?",
    confirmDeleteRecord: "Delete this record?",
  },
};

let currentLanguage = "th";
let currentFormStep = 1;

const setStatus = (element, message, type = "") => {
  if (!element) return;
  element.textContent = message;
  element.classList.remove("ok", "warn", "error");
  if (type) {
    element.classList.add(type);
  }
};

const showLoader = () => {
  if (!pageLoader) return;
  pageLoader.classList.add("is-active");
  pageLoader.setAttribute("aria-hidden", "false");
};

const hideLoader = () => {
  if (!pageLoader) return;
  pageLoader.classList.remove("is-active");
  pageLoader.setAttribute("aria-hidden", "true");
};

const EXPIRY_WARNING_DAYS = 30;

const getExpiryState = (dateValue) => {
@@ -924,53 +939,74 @@ const updatePaymentSlipPreview = () => {
  const file = paymentSlipInput.files?.[0];
  if (file) {
    cacheUploadFromFile("paymentSlip", file);
  }
  if (file) {
    const preview = {
      name: file.name,
      dataUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
    };
    setUploadCardPreview(paymentSlipCard, preview);
  } else if (uploadCache.paymentSlip?.name) {
    setUploadCardPreview(paymentSlipCard, uploadCache.paymentSlip);
  } else {
    setUploadCardPreview(paymentSlipCard, null);
  }
  const files = file ? [file] : [];
  if (receivedPaymentSlip) receivedPaymentSlip.checked = Boolean(uploadCache.paymentSlip.name);
  renderPreview(paymentSlipPreview, files, () => {
    paymentSlipInput.value = "";
    uploadCache.paymentSlip = { name: "", dataUrl: "" };
    updatePaymentSlipPreview();
  });
  saveFormDraft();
};

const readJsonStorage = (key, fallback) => {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch (_error) {
    localStorage.removeItem(key);
    return fallback;
  }
};

const loadRecords = () => {
  const records = readJsonStorage("workerRecords", []);
  if (!Array.isArray(records)) {
    localStorage.removeItem("workerRecords");
    return [];
  }
  return records
    .filter((record) => record && typeof record === "object")
    .map((record) => ({
      ...record,
      data: record.data && typeof record.data === "object" ? record.data : {},
    }));
};

const saveRecords = (records) => {
  localStorage.setItem("workerRecords", JSON.stringify(records));
};


const buildFormId = () => {
  const date = new Date();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const year = date.getFullYear();
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `FORM-${year}${month}${day}-${random}`;
};

const formatDateTime = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString(currentLanguage === "th" ? "th-TH" : "en-US");
};

const getFormTypeLabel = (value) => {
  const map = {
    changeEmployer: translations[currentLanguage].formTypeChangeEmployer,
@@ -1297,173 +1333,200 @@ const getAggregatedExpiryState = (workers, field) => {
  if (warningDays !== null) {
    return { state: "warning", days: warningDays };
  }
  return { state: "ok", days: null };
};

const getRecordStatusSummary = (record) => {
  const workers = normalizeWorkers(record.data);
  const hasCompleted = workers.some((worker) => worker.scheduleStatus === "completed");
  const hasPendingSchedule = workers.some((worker) => worker.scheduleStatus !== "completed");
  const hasExpiryWarning =
    getAggregatedExpiryState(workers, "cardExpiryDate").state === "warning" ||
    getAggregatedExpiryState(workers, "visaExpiryDate").state === "warning" ||
    getAggregatedExpiryState(workers, "expiry").state === "warning";
  const hasExpired =
    getAggregatedExpiryState(workers, "cardExpiryDate").state === "expired" ||
    getAggregatedExpiryState(workers, "visaExpiryDate").state === "expired" ||
    getAggregatedExpiryState(workers, "expiry").state === "expired";
  const hasPaymentPending = record.data.paymentStatus === "pending";
  return {
    hasCompleted,
    hasPending: hasPendingSchedule || hasExpiryWarning,
    hasAlert: hasExpired || hasPaymentPending,
  };
};

const hasMeaningfulValue = (value) => {
  if (Array.isArray(value)) {
    return value.some((item) => hasMeaningfulValue(item));
  }
  if (value && typeof value === "object") {
    return Object.values(value).some((item) => hasMeaningfulValue(item));
  }
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  return Boolean(value);
};

const collectFormData = () => {
  const receivedDocs = [];
  if (receivedFacePhoto?.checked) receivedDocs.push("facePhoto");
  if (receivedIdCard?.checked) receivedDocs.push("idCard");
  if (receivedHouseDoc?.checked) receivedDocs.push("houseDoc");
  if (receivedPaymentSlip?.checked) receivedDocs.push("paymentSlip");
  const notifications = Array.from(notificationItems)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const supportingDocsList = Array.from(supportingDocs)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const requiredDocs = Array.from(requiredRenewalDocs)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const workers = getWorkerCards().map(extractWorkerData).filter(hasWorkerValue);
  const formData = {
    formType: getSelectedFormType(),
    formTypeOtherDetail: formTypeOtherDetail?.value?.trim() || "",
    workers,
    company: company?.value?.trim() || "",
    caseType: caseType?.value || "",
    position: position?.value?.trim() || "",
    workSite: workSite?.value?.trim() || "",
    startDate: startDate?.value || "",
    employerId: employerId?.value?.trim() || "",
    verification: verification?.value || "",
    paymentStatus: paymentStatus?.value || "",
    paymentDate: paymentDate?.value || "",
    paymentNotes: paymentNotes?.value?.trim() || "",
    recordedBy: recordedBy ? recordedBy.value.trim() : "",
    renewalType: renewalType?.value || "",
    renewalStatus: renewalStatus?.value || "",
    personalInfo: {
      fullName: workerFullName?.value?.trim() || "",
      gender: workerGender?.value || "",
      nationality: workerNationality?.value?.trim() || "",
      email: workerEmail?.value?.trim() || "",
      code: workerCode?.value?.trim() || "",
      alienId: workerAlienId?.value?.trim() || "",
      workPermitExpiry: workPermitExpiry?.value || "",
      passNumber: passNumber?.value?.trim() || "",
      passIssueDate: passIssueDate?.value || "",
      passExpiryDate: passExpiryDate?.value || "",
      businessType: businessType?.value?.trim() || "",
      employerName: employerName?.value?.trim() || "",
      documentSender: documentSender?.value?.trim() || "",
      documentSentDate: documentSentDate?.value || "",
      documentReceiver: documentReceiver?.value?.trim() || "",
      documentReceivedDate: documentReceivedDate?.value || "",
      documentReturnDate: documentReturnDate?.value || "",
    },
    documents: {
      workPermit: docWorkPermit?.checked || false,
      receipt: docReceipt?.checked || false,
      requestForm: docRequestForm?.checked || false,
      nameList: docNameList?.checked || false,
      passPage: docPassPage?.checked || false,
      visaPage: docVisaPage?.checked || false,
      healthCard: docHealthCard?.checked || false,
      exitNotice: docExitNotice?.checked || false,
      houseReg: docHouseReg?.checked || false,
      employerIdCard: docEmployerIdCard?.checked || false,
      companyCert: docCompanyCert?.checked || false,
      note: documentsNote?.value?.trim() || "",
    },
    caseStatus: {
      status: getSelectedCaseStatus(),
      appointmentDate: appointmentDate?.value || "",
      appointmentNote: appointmentNote?.value?.trim() || "",
    },
    receivedDocs,
    notifications,
    supportingDocs: supportingDocsList,
    requiredRenewalDocs: requiredDocs,
    receivedDocsNote: receivedDocsNote?.value?.trim() || "",
    renewalDocsNote: renewalDocsNote?.value?.trim() || "",
    facePhoto: facePhotoInput?.files?.[0]?.name || uploadCache.facePhoto.name || "",
    facePhotoData: uploadCache.facePhoto.dataUrl || "",
    idCard: idCardInput?.files?.[0]?.name || uploadCache.idCard.name || "",
    idCardData: uploadCache.idCard.dataUrl || "",
    houseDoc: houseDocInput?.files?.[0]?.name || uploadCache.houseDoc.name || "",
    houseDocData: uploadCache.houseDoc.dataUrl || "",
    attachments: Array.from(uploadInputs).flatMap((input) => Array.from(input.files)).map((file) => file.name),
    paymentSlip: paymentSlipInput?.files?.[0]?.name || uploadCache.paymentSlip.name || "",
    paymentSlipData: uploadCache.paymentSlip.dataUrl || "",
  };
  const hasAnyValue = Object.entries(formData).some(([key, value]) => {
    if (key === "formType" || key === "attachments") {
      return false;
    }
    return hasMeaningfulValue(value);
  });
  return { formData, hasAnyValue };
};

function saveFormDraft() {
  if (!workerForm) return;
  const { formData, hasAnyValue } = collectFormData();
  if (!hasAnyValue) {
    localStorage.removeItem(FORM_DRAFT_KEY);
    return;
  }
  localStorage.setItem(FORM_DRAFT_KEY, JSON.stringify(formData));
}

function loadFormDraft() {
  if (!workerForm || currentEditId) return;
  const formData = readJsonStorage(FORM_DRAFT_KEY, null);
  if (!formData || typeof formData !== "object") {
    localStorage.removeItem(FORM_DRAFT_KEY);
    return;
  }
  populateForm({ formType: formData.formType || "changeEmployer", data: formData });
}

function clearFormDraft() {
  if (!workerForm) return;
  const shouldClear = window.confirm(translations[currentLanguage].confirmClearFormDraft);
  if (!shouldClear) return;
  localStorage.removeItem(FORM_DRAFT_KEY);
  workerForm.reset();
  if (workerList) {
    workerList.innerHTML = "";
  }
  uploadCache.facePhoto = { name: "", dataUrl: "" };
  uploadCache.idCard = { name: "", dataUrl: "" };
  uploadCache.houseDoc = { name: "", dataUrl: "" };
  uploadCache.paymentSlip = { name: "", dataUrl: "" };
  ensureWorkerCards();
  updateSections();
  updateUploadPreview();
  updatePaymentSlipPreview();
  refreshWorkerStatuses();
  currentFormStep = 1;
  updateFormStepVisibility();
  setStatus(formSaveStatus, translations[currentLanguage].formDraftCleared, "ok");
}

const applyTheme = (theme, { persist = true } = {}) => {
  document.body.classList.toggle("theme-dark", theme === "dark");
  if (persist) {
    localStorage.setItem(THEME_KEY, theme);
  }
};

const initTheme = () => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    applyTheme(storedTheme);
    return;
  }
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  applyTheme(mediaQuery.matches ? "dark" : "light", { persist: false });
  mediaQuery.addEventListener("change", (event) => {
    if (localStorage.getItem(THEME_KEY)) {
      return;
    }
    applyTheme(event.matches ? "dark" : "light", { persist: false });
  });
};
@@ -1654,50 +1717,65 @@ const openRecordModal = (record) => {
    list.appendChild(recordedByItem);
    list.appendChild(renewalTypeItem);
    list.appendChild(renewalStatusItem);
    if (personalInfo.fullName) {
      const workerNameItem = document.createElement("li");
      workerNameItem.textContent = `${translations[currentLanguage].workerFullNameLabel}: ${personalInfo.fullName}`;
      list.appendChild(workerNameItem);
    }
    if (personalInfo.gender) {
      const genderMap = {
        male: translations[currentLanguage].workerGenderMale,
        female: translations[currentLanguage].workerGenderFemale,
        other: translations[currentLanguage].workerGenderOther,
      };
      const genderItem = document.createElement("li");
      genderItem.textContent = `${translations[currentLanguage].workerGenderLabel}: ${
        genderMap[personalInfo.gender] || personalInfo.gender
      }`;
      list.appendChild(genderItem);
    }
    if (personalInfo.nationality) {
      const nationalityItem = document.createElement("li");
      nationalityItem.textContent = `${translations[currentLanguage].workerNationalityLabel}: ${personalInfo.nationality}`;
      list.appendChild(nationalityItem);
    }
    if (personalInfo.email) {
      const emailItem = document.createElement("li");
      emailItem.textContent = `Email: ${personalInfo.email}`;
      list.appendChild(emailItem);
    }
    if (personalInfo.alienId) {
      const alienIdItem = document.createElement("li");
      alienIdItem.textContent = `เลขประจำตัวต่างด้าว: ${personalInfo.alienId}`;
      list.appendChild(alienIdItem);
    }
    if (personalInfo.passNumber) {
      const passItem = document.createElement("li");
      passItem.textContent = `เลข Pass: ${personalInfo.passNumber}`;
      list.appendChild(passItem);
    }
    if (personalInfo.businessType) {
      const businessItem = document.createElement("li");
      businessItem.textContent = `${translations[currentLanguage].businessTypeLabel}: ${personalInfo.businessType}`;
      list.appendChild(businessItem);
    }
    if (personalInfo.employerName) {
      const employerNameItem = document.createElement("li");
      employerNameItem.textContent = `${translations[currentLanguage].employerNameLabel}: ${personalInfo.employerName}`;
      list.appendChild(employerNameItem);
    }
    if (personalInfo.documentSender) {
      const senderItem = document.createElement("li");
      senderItem.textContent = `${translations[currentLanguage].documentSenderLabel}: ${personalInfo.documentSender}`;
      list.appendChild(senderItem);
    }
    if (personalInfo.documentSentDate) {
      const sentItem = document.createElement("li");
      sentItem.textContent = `${translations[currentLanguage].documentSentDateLabel}: ${personalInfo.documentSentDate}`;
      list.appendChild(sentItem);
    }
    if (personalInfo.documentReceiver) {
      const receiverItem = document.createElement("li");
      receiverItem.textContent = `${translations[currentLanguage].documentReceiverLabel}: ${personalInfo.documentReceiver}`;
      list.appendChild(receiverItem);
    }
@@ -2026,157 +2104,168 @@ const openEmployerModal = (query) => {
        const viewButton = document.createElement("button");
        viewButton.type = "button";
        viewButton.className = "secondary";
        viewButton.textContent = translations[currentLanguage].verifyButton;
        viewButton.addEventListener("click", () => openRecordModal(record));
        item.appendChild(document.createElement("br"));
        item.appendChild(viewButton);
        list.appendChild(item);
      });
    });
    recordModalBody.appendChild(list);
  }
  recordModal.classList.add("is-open");
  recordModal.setAttribute("aria-hidden", "false");
};

const closeRecordModal = () => {
  recordModal.classList.remove("is-open");
  recordModal.setAttribute("aria-hidden", "true");
};

const findRecordByQuery = (query) => {
  if (!query) return null;
  const records = loadRecords();
  const normalized = query.trim().toLowerCase();
  const containsQuery = (value) => String(value || "").toLowerCase().includes(normalized);
  return (
    records.find((record) => String(record.formId || "").toLowerCase() === normalized) ||
    records.find((record) => containsQuery(record.data.company)) ||
    records.find((record) => containsQuery(record.data.employerId)) ||
    records.find((record) => containsQuery(record.data.personalInfo?.alienId)) ||
    records.find((record) => containsQuery(record.data.personalInfo?.passNumber)) ||
    records.find((record) =>
      normalizeWorkers(record.data).some((worker) =>
        [
          worker.passport,
          worker.workerId,
          worker.ciNumber,
          worker.visaNumber,
          worker.fullName,
        ]
          .filter(Boolean)
          .some((value) => containsQuery(value))
      )
    )
  );
};

const saveRecord = (status = "draft") => {
  const { formData, hasAnyValue } = collectFormData();
  if (!hasAnyValue) {
    setStatus(formSaveStatus, translations[currentLanguage].saveDraftEmpty, "warn");
    return;
  }
  showLoader();
  const cardExpiryState = getAggregatedExpiryState(formData.workers || [], "cardExpiryDate");
  if (cardExpiryState.state === "expired") {
    setStatus(formSaveStatus, translations[currentLanguage].expiryExpired, "error");
  } else if (cardExpiryState.state === "warning") {
    setStatus(formSaveStatus, formatExpiryLabel(cardExpiryState.state, cardExpiryState.days), "warn");
  }
  const records = loadRecords();
  const formId = currentEditId || buildFormId();
  const workerNames = (formData.workers || []).map((worker) => worker.fullName).filter(Boolean);
  const workerCountLabel = workerNames.length
    ? ` (${workerNames.length} ${translations[currentLanguage].workerCountSuffix})`
    : "";
  const displayName =
    formData.personalInfo?.employerName?.trim()
      ? `${formData.personalInfo.employerName}${workerCountLabel}`
      : formData.personalInfo?.fullName || workerNames[0] || formData.employerId || formId;
  const existingIndex = records.findIndex((record) => record.formId === formId);
  const record = {
    formId,
    formType: formData.formType,
    formTypeLabel: buildFormTypeLabel(formData),
    displayName,
    updatedAt: new Date().toISOString(),
    status,
    data: formData,
  };
  if (existingIndex >= 0) {
    records.splice(existingIndex, 1, record);
  } else {
    records.unshift(record);
  }
  saveRecords(records);
  localStorage.removeItem(FORM_DRAFT_KEY);
  setStatus(formSaveStatus, `${translations[currentLanguage].saveDraftSuccess}: ${formId}`, "ok");
  currentEditId = null;
  localStorage.removeItem(EDIT_KEY);
  renderRecords();
if (workerForm) {
    localStorage.setItem(RECORD_SEARCH_KEY, formId);
    window.location.href = "records.html";
  }
};

const populateForm = (record) => {
  if (!record) return;
if (formTypeInputs?.length) {
    formTypeInputs.forEach((input) => {
      input.checked = input.value === record.formType;
    });
  }
  if (formTypeOtherDetail) formTypeOtherDetail.value = record.data.formTypeOtherDetail || "";
  if (recordedBy) recordedBy.value = record.data.recordedBy || "";
  if (workerFullName) workerFullName.value = record.data.personalInfo?.fullName || "";
  if (workerGender) workerGender.value = record.data.personalInfo?.gender || "";
  if (workerNationality) workerNationality.value = record.data.personalInfo?.nationality || "";
  if (workerEmail) workerEmail.value = record.data.personalInfo?.email || "";
  if (workerCode) workerCode.value = record.data.personalInfo?.code || "";
  if (workerAlienId) workerAlienId.value = record.data.personalInfo?.alienId || "";
  if (workPermitExpiry) workPermitExpiry.value = record.data.personalInfo?.workPermitExpiry || "";
  if (passNumber) passNumber.value = record.data.personalInfo?.passNumber || "";
  if (passIssueDate) passIssueDate.value = record.data.personalInfo?.passIssueDate || "";
  if (passExpiryDate) passExpiryDate.value = record.data.personalInfo?.passExpiryDate || "";
  if (businessType) businessType.value = record.data.personalInfo?.businessType || "";
  if (employerName) employerName.value = record.data.personalInfo?.employerName || "";
  if (documentSender) documentSender.value = record.data.personalInfo?.documentSender || "";
  if (documentSentDate) documentSentDate.value = record.data.personalInfo?.documentSentDate || "";
  if (documentReceiver) documentReceiver.value = record.data.personalInfo?.documentReceiver || "";
  if (documentReceivedDate) documentReceivedDate.value = record.data.personalInfo?.documentReceivedDate || "";
  if (documentReturnDate) documentReturnDate.value = record.data.personalInfo?.documentReturnDate || "";
  if (docWorkPermit) docWorkPermit.checked = record.data.documents?.workPermit || false;
  if (docReceipt) docReceipt.checked = record.data.documents?.receipt || false;
  if (docRequestForm) docRequestForm.checked = record.data.documents?.requestForm || false;
  if (docNameList) docNameList.checked = record.data.documents?.nameList || false;
  if (docPassPage) docPassPage.checked = record.data.documents?.passPage || false;
  if (docVisaPage) docVisaPage.checked = record.data.documents?.visaPage || false;
  if (docHealthCard) docHealthCard.checked = record.data.documents?.healthCard || false;
  if (docExitNotice) docExitNotice.checked = record.data.documents?.exitNotice || false;
  if (docHouseReg) docHouseReg.checked = record.data.documents?.houseReg || false;
  if (docEmployerIdCard) docEmployerIdCard.checked = record.data.documents?.employerIdCard || false;
  if (docCompanyCert) docCompanyCert.checked = record.data.documents?.companyCert || false;
  if (documentsNote) documentsNote.value = record.data.documents?.note || "";
  if (caseStatusInputs?.length) {
    caseStatusInputs.forEach((input) => {
      input.checked = input.value === record.data.caseStatus?.status;
    });
  }
  if (appointmentDate) appointmentDate.value = record.data.caseStatus?.appointmentDate || "";
  if (appointmentNote) appointmentNote.value = record.data.caseStatus?.appointmentNote || "";
  updateFormTypeOtherVisibility();
  updateAppointmentVisibility();
  if (workerList) {
    workerList.innerHTML = "";
    const workers = normalizeWorkers(record.data);
    if (workers.length) {
      workers.forEach((worker) => {
        const card = createWorkerCard(worker);
        if (card) workerList.appendChild(card);
      });
    }
    ensureWorkerCards();
    refreshWorkerStatuses();
  }
  if (company) company.value = record.data.company || "";
  if (caseType) caseType.value = record.data.caseType || "changeEmployer";
  if (position) position.value = record.data.position || "";
  if (workSite) workSite.value = record.data.workSite || "";
  if (startDate) startDate.value = record.data.startDate || "";
  if (employerId) employerId.value = record.data.employerId || "";
  if (renewalType) renewalType.value = record.data.renewalType || "passport";
  if (renewalStatus) renewalStatus.value = record.data.renewalStatus || "none";
  if (receivedFacePhoto) receivedFacePhoto.checked = record.data.receivedDocs?.includes("facePhoto") || false;
  if (receivedIdCard) receivedIdCard.checked = record.data.receivedDocs?.includes("idCard") || false;
  if (receivedHouseDoc) receivedHouseDoc.checked = record.data.receivedDocs?.includes("houseDoc") || false;
@@ -2201,50 +2290,74 @@ const populateForm = (record) => {
  if (verification) verification.value = record.data.verification || "";
  if (paymentStatus) paymentStatus.value = record.data.paymentStatus || "pending";
  if (paymentDate) paymentDate.value = record.data.paymentDate || "";
  if (paymentNotes) paymentNotes.value = record.data.paymentNotes || "";
  uploadCache.facePhoto = {
    name: record.data.facePhoto || "",
    dataUrl: record.data.facePhotoData || "",
  };
  uploadCache.idCard = {
    name: record.data.idCard || "",
    dataUrl: record.data.idCardData || "",
  };
  uploadCache.houseDoc = {
    name: record.data.houseDoc || "",
    dataUrl: record.data.houseDocData || "",
  };
  uploadCache.paymentSlip = {
    name: record.data.paymentSlip || "",
    dataUrl: record.data.paymentSlipData || "",
  };
  updateSections();
  updateUploadPreview();
  updatePaymentSlipPreview();
};

const updateFormStepVisibility = () => {
  if (!formSteps?.length) return;
  formSteps.forEach((step) => {
    const stepNo = Number(step.dataset.step || 1);
    step.classList.toggle("is-hidden", stepNo !== currentFormStep);
  });
};

updateFormStepVisibility();

if (nextStepButton) {
  nextStepButton.addEventListener("click", () => {
    currentFormStep = 2;
    updateFormStepVisibility();
    saveFormDraft();
  });
}
if (prevStepButton) {
  prevStepButton.addEventListener("click", () => {
    currentFormStep = 1;
    updateFormStepVisibility();
  });
}

if (formTypeInputs?.length) {
  formTypeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      updateSections();
      updateFormTypeOtherVisibility();
    });
  });
}
if (caseStatusInputs?.length) {
  caseStatusInputs.forEach((input) => {
    input.addEventListener("change", updateAppointmentVisibility);
  });
}
if (passportCheckInput && passportStatus) {
  passportCheckInput.addEventListener("input", () => validatePassport(passportCheckInput.value, passportStatus));
}
if (employerCheckInput) {
  employerCheckInput.addEventListener("input", updateEmployerStatus);
}
if (addWorkerButton) {
  addWorkerButton.addEventListener("click", () => {
    const card = createWorkerCard();
    if (card && workerList) {
      workerList.appendChild(card);
      getWorkerCards().forEach(updateWorkerCardTitle);
@@ -2378,51 +2491,51 @@ if (employerCheckButton) {
    }
    openEmployerModal(query);
  });
}
if (generalSearchButton) {
  generalSearchButton.addEventListener("click", () => {
    const query = generalSearchInput?.value?.trim() || "";
    if (!query) {
      setStatus(generalSearchStatus, translations[currentLanguage].generalSearchHint, "warn");
      return;
    }
    const record = findRecordByQuery(query);
    if (!record) {
      setStatus(generalSearchStatus, translations[currentLanguage].generalSearchNotFound, "warn");
      return;
    }
    setStatus(generalSearchStatus, `${translations[currentLanguage].employerChecking} ${query}`, "ok");
    openRecordModal(record);
  });
}
if (verifyRecordButton) {
  verifyRecordButton.addEventListener("click", () => {
    const firstWorker = getWorkerCards()[0];
    const workerPassport = firstWorker?.querySelector('[data-field="passport"]')?.value || "";
    const workerName = firstWorker?.querySelector('[data-field="fullName"]')?.value || "";
    const query = workerPassport || workerName || passNumber?.value || workerFullName?.value || employerName?.value || company?.value || "";
    if (!query) {
      setStatus(formSaveStatus, translations[currentLanguage].recordNotFound, "warn");
      return;
    }
    localStorage.setItem(RECORD_SEARCH_KEY, query);
    showLoader();
    window.location.href = "records.html";
  });
}
if (recordModalClose) {
  recordModalClose.addEventListener("click", closeRecordModal);
}
if (recordModalCloseButton) {
  recordModalCloseButton.addEventListener("click", closeRecordModal);
}
if (recordModal) {
  recordModal.addEventListener("click", (event) => {
    if (event.target === recordModal) {
      closeRecordModal();
    }
  });
}
if (workerForm) {
  const storedEditId = localStorage.getItem(EDIT_KEY);
  if (storedEditId) {
