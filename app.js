const formType = document.getElementById("formType");
const sections = document.querySelectorAll(".form-section");
const passportInput = document.getElementById("passport");
const passportCheckInput = document.getElementById("passportCheck");
const passportStatus = document.getElementById("passportStatus");
const passportInlineStatus = document.getElementById("passportInlineStatus");
const fullName = document.getElementById("fullName");
const nationality = document.getElementById("nationality");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const company = document.getElementById("company");
const position = document.getElementById("position");
const workSite = document.getElementById("workSite");
const startDate = document.getElementById("startDate");
const employerId = document.getElementById("employerId");
const permitType = document.getElementById("permitType");
const permitNo = document.getElementById("permitNo");
const verification = document.getElementById("verification");
const inspector = document.getElementById("inspector");
const inspectionDate = document.getElementById("inspectionDate");
const notes = document.getElementById("notes");
const employerCheckInput = document.getElementById("employerCheck");
const employerStatus = document.getElementById("employerStatus");
const expiryInput = document.getElementById("expiry");
const expiryStatus = document.getElementById("expiryStatus");
const uploadInputs = document.querySelectorAll("#facePhoto, #idCard, #houseDoc");
const uploadList = document.getElementById("uploadList");
const languageButtons = document.querySelectorAll(".lang-btn");
const workerForm = document.getElementById("workerForm");
const formSaveStatus = document.getElementById("formSaveStatus");
const recordSearch = document.getElementById("recordSearch");
const recordFilter = document.getElementById("recordFilter");
const recordsStatus = document.getElementById("recordsStatus");
const recordsList = document.getElementById("recordsList");
const clearRecordsButton = document.getElementById("clearRecords");

const updateSections = () => {
  const selected = formType.value;
  sections.forEach((section) => {
    section.style.display = section.dataset.section === selected ? "block" : "none";
  });
};

const translations = {
  th: {
    tag: "เว็บต้นแบบสำหรับ PC + มือถือ",
    heroTitle: "ระบบตรวจสอบข้อมูลแรงงานต่างด้าว",
    heroSubtitle: "กรอกแบบฟอร์มแบบเลือกหัวข้อ ลดงานเอกสาร และตรวจสอบข้อมูลก่อนส่งงาน",
    sectionSelectTitle: "เลือกหัวข้อสำหรับกรอกแบบฟอร์ม",
    sectionSelectSubtitle: "เลือกประเภทแบบฟอร์มเพื่อแสดงช่องข้อมูลที่เกี่ยวข้อง",
    passportCheckTitle: "ตรวจเลขพาสปอร์ต",
    passportCheckPlaceholder: "กรอกเลขพาสปอร์ตเพื่อเช็คข้อมูล",
    checkButton: "ตรวจสอบ",
    passportCheckHint: "กรุณากรอกเลขพาสปอร์ต",
    employerSearchTitle: "ค้นหานายจ้าง/แรงงาน",
    employerSearchPlaceholder: "กรอกเลขแรงงาน หรือชื่อนายจ้าง",
    searchButton: "ค้นหา",
    employerSearchHint: "ยังไม่มีคำค้นหา",
    formTypeLabel: "หัวข้อแบบฟอร์ม",
    formTypePersonal: "ข้อมูลส่วนตัวแรงงาน",
    formTypeEmployment: "ข้อมูลนายจ้าง/การจ้างงาน",
    formTypeDocuments: "ข้อมูลเอกสารและใบอนุญาต",
    formTypeReport: "รายงานตรวจสอบภาคสนาม",
    personalTitle: "ข้อมูลส่วนตัวแรงงาน",
    fullNameLabel: "ชื่อ-นามสกุล",
    fullNamePlaceholder: "กรอกชื่อแรงงาน",
    passportLabel: "เลขหนังสือเดินทาง",
    passportPlaceholder: "เช่น P1234567",
    nationalityLabel: "สัญชาติ",
    nationalityPlaceholder: "เมียนมา / ลาว / กัมพูชา",
    dobLabel: "วันเดือนปีเกิด",
    genderLabel: "เพศ",
    genderMale: "ชาย",
    genderFemale: "หญิง",
    genderOther: "อื่น ๆ",
    employmentTitle: "ข้อมูลนายจ้าง/การจ้างงาน",
    companyLabel: "ชื่อบริษัท/สถานประกอบการ",
    companyPlaceholder: "ระบุชื่อบริษัท",
    positionLabel: "ตำแหน่งงาน",
    positionPlaceholder: "เช่น พนักงานผลิต",
    workSiteLabel: "สถานที่ทำงาน",
    workSitePlaceholder: "ที่อยู่สถานที่ทำงาน",
    startDateLabel: "วันเริ่มงาน",
    employerIdLabel: "เลขประจำตัวนายจ้าง",
    employerIdPlaceholder: "เช่น EMP-00123",
    documentsTitle: "ข้อมูลเอกสารและใบอนุญาต",
    permitTypeLabel: "ประเภทใบอนุญาต",
    permitTypePink: "บัตรชมพู",
    permitTypeVisa: "วีซ่าแรงงาน",
    permitTypeMou: "MOU",
    permitNoLabel: "เลขที่ใบอนุญาต",
    permitNoPlaceholder: "ระบุเลขที่",
    expiryLabel: "วันหมดอายุ",
    verificationLabel: "สถานะตรวจสอบ",
    verificationPending: "รอตรวจสอบ",
    verificationPass: "ผ่านการตรวจสอบ",
    verificationFix: "ต้องแก้ไข",
    uploadLabel: "เอกสารประกอบ (อัปโหลดรูป/ไฟล์)",
    uploadFace: "รูปหน้าคน",
    uploadId: "บัตรประชาชน/บัตรชมพู",
    uploadHouse: "ทะเบียนบ้าน",
    reportTitle: "รายงานตรวจสอบภาคสนาม",
    inspectorLabel: "ผู้ตรวจสอบ",
    inspectorPlaceholder: "ชื่อผู้ตรวจสอบ",
    inspectionDateLabel: "วันที่ตรวจสอบ",
    notesLabel: "หมายเหตุ",
    notesPlaceholder: "สรุปผลการตรวจสอบ",
    draftButton: "บันทึกฉบับร่าง",
    submitButton: "ยืนยันตรวจสอบ",
    guideTitle: "แนวทางลดงานเอกสาร",
    guideItem1: "ระบบแสดงช่องข้อมูลเฉพาะที่จำเป็น",
    guideItem2: "ตรวจสอบสถานะใบอนุญาตก่อนส่งงาน",
    guideItem3: "รองรับการใช้งานบนมือถือสำหรับลงพื้นที่",
    statusTitle: "สถานะระบบ",
    statusDescription: "พร้อมใช้งานสำหรับการตรวจสอบเบื้องต้น",
    statusChip: "เว็บต้นแบบ",
    footerText: "ต่อยอดเป็นแอป iOS/Android ได้ในอนาคต",
    passportEmpty: "กรุณากรอกเลขพาสปอร์ต",
    passportValid: "รูปแบบเลขพาสปอร์ตถูกต้อง (ตัวอย่าง)",
    passportInvalid: "รูปแบบไม่ถูกต้อง (ต้องมีตัวอักษร 1 ตัว + ตัวเลข 6-8 ตัว)",
    employerEmpty: "ยังไม่มีคำค้นหา",
    employerChecking: "กำลังตรวจสอบข้อมูล:",
    expiryExpired: "ใบอนุญาตหมดอายุแล้ว",
    expiryValid: "ใบอนุญาตยังไม่หมดอายุ",
    uploadEmpty: "ยังไม่มีไฟล์ที่อัปโหลด",
    recordsTitle: "ค้นหา/บันทึกข้อมูลในระบบ",
    recordsSubtitle: "บันทึกข้อมูลจากแบบฟอร์มและค้นหาด้วยเลขฟอร์มหรือหัวข้อ",
    recordsSearchLabel: "ค้นหาด้วยเลขฟอร์ม/หัวข้อ",
    recordsSearchPlaceholder: "เช่น FORM-2024-0001 หรือ ข้อมูลส่วนตัวแรงงาน",
    recordsFilterLabel: "กรองตามหัวข้อ",
    recordsFilterAll: "ทุกหัวข้อ",
    recordsStatus: "ยังไม่มีข้อมูลที่บันทึก",
    clearButton: "ลบข้อมูลทั้งหมด",
    saveDraftSuccess: "บันทึกข้อมูลเรียบร้อยแล้ว",
    saveDraftEmpty: "กรุณากรอกข้อมูลก่อนบันทึก",
    recordFormId: "เลขฟอร์ม",
    recordFormType: "หัวข้อ",
    recordUpdated: "อัปเดตล่าสุด",
    recordSearchEmpty: "ไม่พบข้อมูลที่ตรงกับคำค้นหา",
    recordsCount: "รายการที่พบ",
  },
  en: {
    tag: "Web prototype for desktop & mobile",
    heroTitle: "Foreign Worker Data Verification",
    heroSubtitle: "Select form sections to reduce paperwork and verify data before submission.",
    sectionSelectTitle: "Choose a form section",
    sectionSelectSubtitle: "Pick a form type to display the relevant fields.",
    passportCheckTitle: "Passport number check",
    passportCheckPlaceholder: "Enter passport number to check",
    checkButton: "Check",
    passportCheckHint: "Please enter a passport number.",
    employerSearchTitle: "Employer/worker search",
    employerSearchPlaceholder: "Enter worker ID or employer name",
    searchButton: "Search",
    employerSearchHint: "No search query yet.",
    formTypeLabel: "Form type",
    formTypePersonal: "Personal details",
    formTypeEmployment: "Employer & employment",
    formTypeDocuments: "Documents & permits",
    formTypeReport: "Field inspection report",
    personalTitle: "Personal details",
    fullNameLabel: "Full name",
    fullNamePlaceholder: "Worker name",
    passportLabel: "Passport number",
    passportPlaceholder: "e.g. P1234567",
    nationalityLabel: "Nationality",
    nationalityPlaceholder: "Myanmar / Laos / Cambodia",
    dobLabel: "Date of birth",
    genderLabel: "Gender",
    genderMale: "Male",
    genderFemale: "Female",
    genderOther: "Other",
    employmentTitle: "Employer & employment",
    companyLabel: "Company / workplace",
    companyPlaceholder: "Company name",
    positionLabel: "Position",
    positionPlaceholder: "e.g. Operator",
    workSiteLabel: "Work site",
    workSitePlaceholder: "Work site address",
    startDateLabel: "Start date",
    employerIdLabel: "Employer ID",
    employerIdPlaceholder: "e.g. EMP-00123",
    documentsTitle: "Documents & permits",
    permitTypeLabel: "Permit type",
    permitTypePink: "Pink card",
    permitTypeVisa: "Work visa",
    permitTypeMou: "MOU",
    permitNoLabel: "Permit number",
    permitNoPlaceholder: "Enter permit number",
    expiryLabel: "Expiry date",
    verificationLabel: "Verification status",
    verificationPending: "Pending",
    verificationPass: "Verified",
    verificationFix: "Needs update",
    uploadLabel: "Supporting documents (upload images/files)",
    uploadFace: "Face photo",
    uploadId: "ID card / pink card",
    uploadHouse: "House registration",
    reportTitle: "Field inspection report",
    inspectorLabel: "Inspector",
    inspectorPlaceholder: "Inspector name",
    inspectionDateLabel: "Inspection date",
    notesLabel: "Notes",
    notesPlaceholder: "Inspection summary",
    draftButton: "Save draft",
    submitButton: "Confirm verification",
    guideTitle: "Paperwork reduction tips",
    guideItem1: "Shows only required fields",
    guideItem2: "Check permit status before submission",
    guideItem3: "Mobile-friendly for on-site use",
    statusTitle: "System status",
    statusDescription: "Ready for preliminary verification",
    statusChip: "Prototype",
    footerText: "Ready to evolve into iOS/Android apps",
    passportEmpty: "Please enter a passport number.",
    passportValid: "Passport format looks valid (sample).",
    passportInvalid: "Invalid format (1 letter + 6-8 digits).",
    employerEmpty: "No search query yet.",
    employerChecking: "Checking record:",
    expiryExpired: "Permit has expired.",
    expiryValid: "Permit is still valid.",
    uploadEmpty: "No files uploaded yet.",
    recordsTitle: "Search and save records",
    recordsSubtitle: "Save form data and search by form ID or section.",
    recordsSearchLabel: "Search by form ID/section",
    recordsSearchPlaceholder: "e.g. FORM-2024-0001 or Personal details",
    recordsFilterLabel: "Filter by section",
    recordsFilterAll: "All sections",
    recordsStatus: "No saved records yet.",
    clearButton: "Clear all records",
    saveDraftSuccess: "Record saved successfully.",
    saveDraftEmpty: "Please fill in the form before saving.",
    recordFormId: "Form ID",
    recordFormType: "Section",
    recordUpdated: "Last updated",
    recordSearchEmpty: "No matching records found.",
    recordsCount: "records found",
  },
};

let currentLanguage = "th";

const setStatus = (element, message, type = "") => {
  if (!element) return;
  element.textContent = message;
  element.classList.remove("ok", "warn", "error");
  if (type) {
    element.classList.add(type);
  }
};

const validatePassport = (value, target) => {
  if (!value) {
    setStatus(target, translations[currentLanguage].passportEmpty);
    return;
  }
  const cleaned = value.trim().toUpperCase();
  const isValid = /^[A-Z][0-9]{6,8}$/.test(cleaned);
  setStatus(
    target,
    isValid ? translations[currentLanguage].passportValid : translations[currentLanguage].passportInvalid,
    isValid ? "ok" : "error"
  );
};

const updateEmployerStatus = () => {
  const value = employerCheckInput.value.trim();
  if (!value) {
    setStatus(employerStatus, translations[currentLanguage].employerEmpty);
    return;
  }
  setStatus(employerStatus, `${translations[currentLanguage].employerChecking} ${value}`, "warn");
};

const updateExpiryStatus = () => {
  if (!expiryInput.value) {
    setStatus(expiryStatus, "");
    return;
  }
  const selectedDate = new Date(expiryInput.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const statusType = selectedDate < today ? "error" : "ok";
  setStatus(
    expiryStatus,
    selectedDate < today ? translations[currentLanguage].expiryExpired : translations[currentLanguage].expiryValid,
    statusType
  );
};

const updateUploadList = () => {
  const files = Array.from(uploadInputs).flatMap((input) => Array.from(input.files));
  uploadList.innerHTML = "";
  if (!files.length) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = translations[currentLanguage].uploadEmpty;
    uploadList.appendChild(emptyItem);
    return;
  }
  files.forEach((file) => {
    const item = document.createElement("li");
    item.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
    uploadList.appendChild(item);
  });
};

const loadRecords = () => {
  const stored = localStorage.getItem("workerRecords");
  return stored ? JSON.parse(stored) : [];
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
    personal: translations[currentLanguage].formTypePersonal,
    employment: translations[currentLanguage].formTypeEmployment,
    documents: translations[currentLanguage].formTypeDocuments,
    report: translations[currentLanguage].formTypeReport,
  };
  return map[value] || value;
};

const collectFormData = () => {
  const formData = {
    formType: formType.value,
    fullName: fullName.value.trim(),
    passport: passportInput.value.trim(),
    nationality: nationality.value.trim(),
    dob: dob.value,
    gender: gender.value,
    company: company.value.trim(),
    position: position.value.trim(),
    workSite: workSite.value.trim(),
    startDate: startDate.value,
    employerId: employerId.value.trim(),
    permitType: permitType.value,
    permitNo: permitNo.value.trim(),
    expiry: expiry.value,
    verification: verification.value,
    inspector: inspector.value.trim(),
    inspectionDate: inspectionDate.value,
    notes: notes.value.trim(),
    attachments: Array.from(uploadInputs).flatMap((input) => Array.from(input.files)).map((file) => file.name),
  };
  const hasAnyValue = Object.entries(formData).some(([key, value]) => {
    if (key === "formType" || key === "attachments") return false;
    return value;
  });
  return { formData, hasAnyValue };
};

const renderRecords = () => {
  const records = loadRecords();
  const query = recordSearch.value.trim().toLowerCase();
  const filter = recordFilter.value;
  const filtered = records.filter((record) => {
    const matchesFilter = filter === "all" || record.formType === filter;
    if (!query) return matchesFilter;
    const searchable = `${record.formId} ${record.formTypeLabel} ${record.displayName}`.toLowerCase();
    return matchesFilter && searchable.includes(query);
  });

  recordsList.innerHTML = "";
  if (!records.length) {
    recordsStatus.textContent = translations[currentLanguage].recordsStatus;
  } else if (!filtered.length) {
    recordsStatus.textContent = translations[currentLanguage].recordSearchEmpty;
  } else {
    recordsStatus.textContent = `${filtered.length} ${translations[currentLanguage].recordsCount}`;
  }

  filtered.forEach((record) => {
    const card = document.createElement("div");
    card.className = "record-card";
    const title = document.createElement("div");
    title.className = "record-title";
    title.textContent = record.displayName || record.formTypeLabel;
    const meta = document.createElement("div");
    meta.className = "record-meta";
    meta.textContent = `${translations[currentLanguage].recordFormId}: ${record.formId} • ${
      translations[currentLanguage].recordFormType
    }: ${record.formTypeLabel} • ${translations[currentLanguage].recordUpdated}: ${formatDateTime(
      record.updatedAt
    )}`;
    const tags = document.createElement("div");
    tags.className = "record-tags";
    const chip = document.createElement("span");
    chip.className = "record-chip";
    chip.textContent = record.formTypeLabel;
    tags.appendChild(chip);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(tags);
    recordsList.appendChild(card);
  });
};

const saveRecord = () => {
  const { formData, hasAnyValue } = collectFormData();
  if (!hasAnyValue) {
    setStatus(formSaveStatus, translations[currentLanguage].saveDraftEmpty, "warn");
    return;
  }
  const records = loadRecords();
  const formId = buildFormId();
  const displayName = formData.fullName || formData.company || formData.passport || formId;
  const record = {
    formId,
    formType: formData.formType,
    formTypeLabel: getFormTypeLabel(formData.formType),
    displayName,
    updatedAt: new Date().toISOString(),
    data: formData,
  };
  records.unshift(record);
  saveRecords(records);
  setStatus(formSaveStatus, `${translations[currentLanguage].saveDraftSuccess}: ${formId}`, "ok");
  renderRecords();
};

formType.addEventListener("change", updateSections);
passportInput.addEventListener("input", () => validatePassport(passportInput.value, passportInlineStatus));
passportCheckInput.addEventListener("input", () =>
  validatePassport(passportCheckInput.value, passportStatus)
);
employerCheckInput.addEventListener("input", updateEmployerStatus);
expiryInput.addEventListener("change", updateExpiryStatus);
uploadInputs.forEach((input) => input.addEventListener("change", updateUploadList));
updateSections();
updateUploadList();
renderRecords();

const applyTranslations = (lang) => {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dict[key]) {
      element.setAttribute("placeholder", dict[key]);
    }
  });
  currentLanguage = lang;
  updateEmployerStatus();
  if (passportCheckInput.value) {
    validatePassport(passportCheckInput.value, passportStatus);
  } else {
    setStatus(passportStatus, dict.passportEmpty);
  }
  if (passportInput.value) {
    validatePassport(passportInput.value, passportInlineStatus);
  }
  updateExpiryStatus();
  updateUploadList();
  renderRecords();
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    languageButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");
    applyTranslations(button.dataset.lang);
  });
});

applyTranslations(currentLanguage);

workerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveRecord();
});

document.querySelector(".form-actions .secondary").addEventListener("click", saveRecord);
recordSearch.addEventListener("input", renderRecords);
recordFilter.addEventListener("change", renderRecords);
clearRecordsButton.addEventListener("click", () => {
  saveRecords([]);
  renderRecords();
  setStatus(formSaveStatus, translations[currentLanguage].recordsStatus);
});
