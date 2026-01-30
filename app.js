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
const paymentStatus = document.getElementById("paymentStatus");
const paymentDate = document.getElementById("paymentDate");
const paymentNotes = document.getElementById("paymentNotes");
const employerCheckInput = document.getElementById("employerCheck");
const employerStatus = document.getElementById("employerStatus");
const expiryInput = document.getElementById("expiry");
const expiryStatus = document.getElementById("expiryStatus");
const uploadInputs = document.querySelectorAll("#facePhoto, #idCard, #houseDoc");
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
const verifyRecordButton = document.getElementById("verifyRecord");
const recordModal = document.getElementById("recordModal");
const recordModalTitle = document.getElementById("recordModalTitle");
const recordModalBody = document.getElementById("recordModalBody");
const recordModalClose = document.getElementById("recordModalClose");
const recordModalCloseButton = document.getElementById("recordModalCloseButton");
const draftButton = document.getElementById("draftButton");
const recordedBy = document.getElementById("recordedBy");
const EDIT_KEY = "editRecordId";
let currentEditId = null;

const updateSections = () => {
  const selected = formType.value;
  sections.forEach((section) => {
    section.style.display = section.dataset.section === selected ? "block" : "none";
  });
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
    formTypeLabel: "หัวข้อแบบฟอร์ม",
    formTypePersonal: "ข้อมูลส่วนตัวแรงงาน",
    formTypeEmployment: "ข้อมูลนายจ้าง/การจ้างงาน",
    formTypeDocuments: "ข้อมูลเอกสารและใบอนุญาต",
    formTypeReport: "ยืนยันการชำระเงิน",
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
    reportTitle: "ยืนยันการชำระเงิน",
    draftButton: "บันทึกฉบับร่าง",
    submitButton: "บันทึกข้อมูล",
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
    recordStatusDraft: "ฉบับร่าง",
    recordStatusFinal: "สำเร็จแล้ว",
    editButton: "แก้ไข",
    verifyButton: "ตรวจสอบข้อมูล",
    recordModalTitle: "ผลการค้นหา",
    closeButton: "ปิดหน้าต่าง",
    recordNotFound: "ไม่พบข้อมูลที่ตรงกัน",
    recordDetailsTitle: "ข้อมูลที่พบ",
    recordFormTypeLabel: "หัวข้อแบบฟอร์ม",
    recordNameLabel: "ชื่อ",
    recordPassportLabel: "พาสปอร์ต",
    recordEmployerLabel: "นายจ้าง",
    paymentTitle: "ยืนยันการชำระเงิน",
    paymentStatusLabel: "สถานะการชำระเงิน",
    paymentPending: "ยังไม่ชำระ",
    paymentPaid: "ชำระแล้ว",
    paymentDateLabel: "วันที่ชำระเงิน",
    paymentSlipLabel: "แนบสลิปการชำระเงิน",
    paymentSlipUpload: "อัปโหลดสลิป",
    paymentNotesLabel: "หมายเหตุ",
    paymentNotesPlaceholder: "รายละเอียดเพิ่มเติม",
    tabLookup: "ค้นหาข้อมูล",
    tabRecords: "ข้อมูลบันทึก",
    tabForm: "กรอกแบบฟอร์ม",
    recordedByLabel: "ชื่อผู้บันทึก",
    recordedByPlaceholder: "กรอกชื่อผู้บันทึก",
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
    formTypeLabel: "Form type",
    formTypePersonal: "Personal details",
    formTypeEmployment: "Employer & employment",
    formTypeDocuments: "Documents & permits",
    formTypeReport: "Payment confirmation",
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
    reportTitle: "Payment confirmation",
    draftButton: "Save draft",
    submitButton: "Save record",
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
    recordStatusDraft: "Draft",
    recordStatusFinal: "Completed",
    editButton: "Edit",
    verifyButton: "Verify record",
    recordModalTitle: "Search results",
    closeButton: "Close",
    recordNotFound: "No matching records found.",
    recordDetailsTitle: "Matched record",
    recordFormTypeLabel: "Section",
    recordNameLabel: "Name",
    recordPassportLabel: "Passport",
    recordEmployerLabel: "Employer",
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
    tabForm: "Form",
    recordedByLabel: "Recorded by",
    recordedByPlaceholder: "Enter recorder name",
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
  if (!employerCheckInput || !employerStatus) {
    return;
  }
  const value = employerCheckInput.value.trim();
  if (!value) {
    setStatus(employerStatus, translations[currentLanguage].employerEmpty);
    return;
  }
  setStatus(employerStatus, `${translations[currentLanguage].employerChecking} ${value}`, "warn");
};

const updateExpiryStatus = () => {
  if (!expiryInput || !expiryStatus) {
    return;
  }
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

const renderPreview = (container, files, onRemove) => {
  if (!container) {
    return;
  }
  container.innerHTML = "";
  if (!files.length) {
    const emptyText = document.createElement("p");
    emptyText.className = "status-text";
    emptyText.textContent = translations[currentLanguage].uploadEmpty;
    container.appendChild(emptyText);
    return;
  }
  files.forEach((file, index) => {
    const card = document.createElement("div");
    card.className = "preview-card";
    const image = document.createElement("img");
    image.alt = file.name;
    image.src = URL.createObjectURL(file);
    const meta = document.createElement("div");
    meta.className = "preview-meta";
    meta.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "preview-remove";
    remove.textContent = currentLanguage === "th" ? "ลบ" : "Remove";
    remove.addEventListener("click", () => onRemove(index));
    card.appendChild(image);
    card.appendChild(meta);
    card.appendChild(remove);
    container.appendChild(card);
  });
};

const updateUploadPreview = () => {
  if (!uploadPreview || !uploadInputs.length) {
    return;
  }
  const files = Array.from(uploadInputs).flatMap((input) => Array.from(input.files));
  renderPreview(uploadPreview, files, (indexToRemove) => {
    uploadInputs.forEach((input) => {
      const filesArray = Array.from(input.files);
      if (filesArray[indexToRemove]) {
        filesArray.splice(indexToRemove, 1);
        const dataTransfer = new DataTransfer();
        filesArray.forEach((file) => dataTransfer.items.add(file));
        input.files = dataTransfer.files;
      }
    });
    updateUploadPreview();
  });
};

const updatePaymentSlipPreview = () => {
  if (!paymentSlipInput || !paymentSlipPreview) {
    return;
  }
  const files = paymentSlipInput.files ? Array.from(paymentSlipInput.files) : [];
  renderPreview(paymentSlipPreview, files, () => {
    paymentSlipInput.value = "";
    updatePaymentSlipPreview();
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
    expiry: expiryInput.value,
    verification: verification.value,
    paymentStatus: paymentStatus.value,
    paymentDate: paymentDate.value,
    paymentNotes: paymentNotes.value.trim(),
    recordedBy: recordedBy ? recordedBy.value.trim() : "",
    attachments: Array.from(uploadInputs).flatMap((input) => Array.from(input.files)).map((file) => file.name),
    paymentSlip: paymentSlipInput?.files?.[0]?.name || "",
  };
  const hasAnyValue = Object.entries(formData).some(([key, value]) => {
    if (key === "formType" || key === "attachments") return false;
    return value;
  });
  return { formData, hasAnyValue };
};

const renderRecords = () => {
  if (!recordsList || !recordsStatus || !recordSearch || !recordFilter) {
    return;
  }
  const records = loadRecords();
  const query = recordSearch.value.trim().toLowerCase();
  const filter = recordFilter.value;
  const filtered = records.filter((record) => {
    const matchesFilter = filter === "all" || record.formType === filter;
    if (!query) return matchesFilter;
    const searchable = `${record.formId} ${record.formTypeLabel} ${record.displayName}`.toLowerCase();
    return matchesFilter && searchable.includes(query);
  });
  const scoped = filtered;

  recordsList.innerHTML = "";
  if (!records.length) {
    recordsStatus.textContent = translations[currentLanguage].recordsStatus;
  } else if (!scoped.length) {
    recordsStatus.textContent = translations[currentLanguage].recordSearchEmpty;
  } else {
    recordsStatus.textContent = `${scoped.length} ${translations[currentLanguage].recordsCount}`;
  }

  scoped.forEach((record) => {
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
    const statusChip = document.createElement("span");
    statusChip.className = "record-chip";
    statusChip.textContent =
      record.status === "final"
        ? translations[currentLanguage].recordStatusFinal
        : translations[currentLanguage].recordStatusDraft;
    tags.appendChild(statusChip);
    const verifyButton = document.createElement("button");
    verifyButton.type = "button";
    verifyButton.className = "secondary";
    verifyButton.textContent = translations[currentLanguage].verifyButton;
    verifyButton.addEventListener("click", () => openRecordModal(record));
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "secondary";
    editButton.textContent = translations[currentLanguage].editButton;
    editButton.addEventListener("click", () => {
      localStorage.setItem(EDIT_KEY, record.formId);
      window.location.href = "form.html";
    });
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(tags);
    card.appendChild(verifyButton);
    card.appendChild(editButton);
    recordsList.appendChild(card);
  });
};

const openRecordModal = (record) => {
  recordModalTitle.textContent = translations[currentLanguage].recordModalTitle;
  recordModalBody.innerHTML = "";
  if (!record) {
    const message = document.createElement("p");
    message.textContent = translations[currentLanguage].recordNotFound;
    recordModalBody.appendChild(message);
  } else {
    const title = document.createElement("h4");
    title.textContent = translations[currentLanguage].recordDetailsTitle;
    const list = document.createElement("ul");
    const nameItem = document.createElement("li");
    nameItem.textContent = `${translations[currentLanguage].recordNameLabel}: ${record.data.fullName || "-"}`;
    const passportItem = document.createElement("li");
    passportItem.textContent = `${translations[currentLanguage].recordPassportLabel}: ${
      record.data.passport || "-"
    }`;
    const employerItem = document.createElement("li");
    employerItem.textContent = `${translations[currentLanguage].recordEmployerLabel}: ${
      record.data.company || record.data.employerId || "-"
    }`;
    const typeItem = document.createElement("li");
    typeItem.textContent = `${translations[currentLanguage].recordFormTypeLabel}: ${record.formTypeLabel}`;
    const statusItem = document.createElement("li");
    statusItem.textContent = `${translations[currentLanguage].verificationLabel}: ${
      record.status === "final"
        ? translations[currentLanguage].recordStatusFinal
        : translations[currentLanguage].recordStatusDraft
    }`;
    const expiryItem = document.createElement("li");
    expiryItem.textContent = `${translations[currentLanguage].expiryLabel}: ${record.data.expiry || "-"}`;
    const paymentItem = document.createElement("li");
    paymentItem.textContent = `${translations[currentLanguage].paymentStatusLabel}: ${
      record.data.paymentStatus === "paid"
        ? translations[currentLanguage].paymentPaid
        : translations[currentLanguage].paymentPending
    }`;
    const paymentDateItem = document.createElement("li");
    paymentDateItem.textContent = `${translations[currentLanguage].paymentDateLabel}: ${
      record.data.paymentDate || "-"
    }`;
    const recordedByItem = document.createElement("li");
    recordedByItem.textContent = `${translations[currentLanguage].recordedByLabel}: ${
      record.data.recordedBy || "-"
    }`;
    list.appendChild(nameItem);
    list.appendChild(passportItem);
    list.appendChild(employerItem);
    list.appendChild(typeItem);
    list.appendChild(statusItem);
    list.appendChild(expiryItem);
    list.appendChild(paymentItem);
    list.appendChild(paymentDateItem);
    list.appendChild(recordedByItem);
    recordModalBody.appendChild(title);
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
  return (
    records.find((record) => record.formId.toLowerCase() === normalized) ||
    records.find((record) => record.data.passport?.toLowerCase() === normalized) ||
    records.find((record) => record.data.company?.toLowerCase().includes(normalized)) ||
    records.find((record) => record.data.employerId?.toLowerCase().includes(normalized)) ||
    records.find((record) => record.data.fullName?.toLowerCase().includes(normalized))
  );
};

const saveRecord = (status = "draft") => {
  const { formData, hasAnyValue } = collectFormData();
  if (!hasAnyValue) {
    setStatus(formSaveStatus, translations[currentLanguage].saveDraftEmpty, "warn");
    return;
  }
  const records = loadRecords();
  const formId = currentEditId || buildFormId();
  const displayName = formData.fullName || formData.company || formData.passport || formId;
  const existingIndex = records.findIndex((record) => record.formId === formId);
  const record = {
    formId,
    formType: formData.formType,
    formTypeLabel: getFormTypeLabel(formData.formType),
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
  setStatus(formSaveStatus, `${translations[currentLanguage].saveDraftSuccess}: ${formId}`, "ok");
  currentEditId = null;
  localStorage.removeItem(EDIT_KEY);
  renderRecords();
};

const populateForm = (record) => {
  if (!record) return;
  if (formType) formType.value = record.formType;
  if (recordedBy) recordedBy.value = record.data.recordedBy || "";
  if (fullName) fullName.value = record.data.fullName || "";
  if (passportInput) passportInput.value = record.data.passport || "";
  if (nationality) nationality.value = record.data.nationality || "";
  if (dob) dob.value = record.data.dob || "";
  if (gender) gender.value = record.data.gender || "";
  if (company) company.value = record.data.company || "";
  if (position) position.value = record.data.position || "";
  if (workSite) workSite.value = record.data.workSite || "";
  if (startDate) startDate.value = record.data.startDate || "";
  if (employerId) employerId.value = record.data.employerId || "";
  if (permitType) permitType.value = record.data.permitType || "";
  if (permitNo) permitNo.value = record.data.permitNo || "";
  if (expiryInput) expiryInput.value = record.data.expiry || "";
  if (verification) verification.value = record.data.verification || "";
  if (paymentStatus) paymentStatus.value = record.data.paymentStatus || "pending";
  if (paymentDate) paymentDate.value = record.data.paymentDate || "";
  if (paymentNotes) paymentNotes.value = record.data.paymentNotes || "";
  updateSections();
  updateExpiryStatus();
};

if (formType) {
  formType.addEventListener("change", updateSections);
}
if (passportInput && passportInlineStatus) {
  passportInput.addEventListener("input", () => validatePassport(passportInput.value, passportInlineStatus));
}
if (passportCheckInput && passportStatus) {
  passportCheckInput.addEventListener("input", () => validatePassport(passportCheckInput.value, passportStatus));
}
if (employerCheckInput) {
  employerCheckInput.addEventListener("input", updateEmployerStatus);
}
if (expiryInput) {
  expiryInput.addEventListener("change", updateExpiryStatus);
}
uploadInputs.forEach((input) => input.addEventListener("change", updateUploadPreview));
if (paymentSlipInput) {
  paymentSlipInput.addEventListener("change", updatePaymentSlipPreview);
}
updateSections();
updateUploadPreview();
updatePaymentSlipPreview();
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
  if (passportCheckInput && passportStatus) {
    if (passportCheckInput.value) {
      validatePassport(passportCheckInput.value, passportStatus);
    } else {
      setStatus(passportStatus, dict.passportEmpty);
    }
  }
  if (passportInput && passportInlineStatus && passportInput.value) {
    validatePassport(passportInput.value, passportInlineStatus);
  }
  updateExpiryStatus();
  updateUploadPreview();
  updatePaymentSlipPreview();
  renderRecords();
};

applyTranslations(currentLanguage);

if (workerForm) {
  workerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveRecord("final");
  });
}

if (draftButton) {
  draftButton.addEventListener("click", () => saveRecord("draft"));
}
if (recordSearch) {
  recordSearch.addEventListener("input", renderRecords);
}
if (recordFilter) {
  recordFilter.addEventListener("change", renderRecords);
}
if (clearRecordsButton) {
  clearRecordsButton.addEventListener("click", () => {
    saveRecords([]);
    renderRecords();
    setStatus(formSaveStatus, translations[currentLanguage].recordsStatus);
  });
}
if (passportCheckButton) {
  passportCheckButton.addEventListener("click", () => {
    const record = findRecordByQuery(passportCheckInput.value);
    openRecordModal(record);
  });
}
if (employerCheckButton) {
  employerCheckButton.addEventListener("click", () => {
    const record = findRecordByQuery(employerCheckInput.value);
    openRecordModal(record);
  });
}
if (verifyRecordButton) {
  verifyRecordButton.addEventListener("click", () => {
    const record = findRecordByQuery(passportInput?.value || fullName?.value || company?.value);
    openRecordModal(record);
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
    const records = loadRecords();
    const record = records.find((item) => item.formId === storedEditId);
    if (record) {
      currentEditId = record.formId;
      populateForm(record);
    }
  }
}
