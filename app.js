const formType = document.getElementById("formType");
const sections = document.querySelectorAll(".form-section");
const passportInput = document.getElementById("passport");
const passportCheckInput = document.getElementById("passportCheck");
const passportStatus = document.getElementById("passportStatus");
const passportInlineStatus = document.getElementById("passportInlineStatus");
const fullName = document.getElementById("fullName");
const passportType = document.getElementById("passportType");
const nationality = document.getElementById("nationality");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const workerId = document.getElementById("workerId");
const cardIssueDate = document.getElementById("cardIssueDate");
const cardExpiryDate = document.getElementById("cardExpiryDate");
const cardExpiryStatus = document.getElementById("cardExpiryStatus");
const company = document.getElementById("company");
const caseType = document.getElementById("caseType");
const position = document.getElementById("position");
const workSite = document.getElementById("workSite");
const startDate = document.getElementById("startDate");
const ciNumber = document.getElementById("ciNumber");
const employerId = document.getElementById("employerId");
const permitType = document.getElementById("permitType");
const permitNo = document.getElementById("permitNo");
const visaNumber = document.getElementById("visaNumber");
const visaIssueDate = document.getElementById("visaIssueDate");
const visaExpiryDate = document.getElementById("visaExpiryDate");
const visaExpiryStatus = document.getElementById("visaExpiryStatus");
const renewalType = document.getElementById("renewalType");
const renewalStatus = document.getElementById("renewalStatus");
const receivedFacePhoto = document.getElementById("receivedFacePhoto");
const receivedIdCard = document.getElementById("receivedIdCard");
const receivedHouseDoc = document.getElementById("receivedHouseDoc");
const receivedPaymentSlip = document.getElementById("receivedPaymentSlip");
const requiredRenewalDocs = document.querySelectorAll(".required-renewal-doc");
const receivedDocsNote = document.getElementById("receivedDocsNote");
const renewalDocsNote = document.getElementById("renewalDocsNote");
const verification = document.getElementById("verification");
const paymentStatus = document.getElementById("paymentStatus");
const paymentDate = document.getElementById("paymentDate");
const paymentNotes = document.getElementById("paymentNotes");
const employerCheckInput = document.getElementById("employerCheck");
const employerStatus = document.getElementById("employerStatus");
const expiryInput = document.getElementById("expiry");
const expiryStatus = document.getElementById("expiryStatus");
const facePhotoInput = document.getElementById("facePhoto");
const idCardInput = document.getElementById("idCard");
const houseDocInput = document.getElementById("houseDoc");
const uploadInputs = document.querySelectorAll("#facePhoto, #idCard, #houseDoc");
const facePhotoCard = document.querySelector('[data-upload="facePhoto"]');
const idCardCard = document.querySelector('[data-upload="idCard"]');
const houseDocCard = document.querySelector('[data-upload="houseDoc"]');
const paymentSlipCard = document.querySelector('[data-upload="paymentSlip"]');
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
const RECORD_SEARCH_KEY = "recordSearchQuery";
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

const updateSections = () => {
  if (!formType || !sections.length) {
    return;
  }
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
    passportTypeLabel: "ประเภทพาสปอร์ต",
    passportTypeCi: "CI",
    passportTypePv: "PV",
    passportTypePj: "PJ",
    passportTypeInternational: "พาสปอร์ตอินเตอร์",
    passportLabel: "เลขหนังสือเดินทาง",
    passportPlaceholder: "เช่น P1234567",
    workerIdLabel: "เลขต่างด้าว",
    workerIdPlaceholder: "เช่น FW-0001",
    ciNumberLabel: "เลข CI",
    ciNumberPlaceholder: "เช่น CI-000123",
    cardIssueDateLabel: "วันทำบัตร",
    cardExpiryDateLabel: "วันหมดอายุบัตร",
    nationalityLabel: "สัญชาติ",
    nationalityPlaceholder: "เมียนมา / ลาว / กัมพูชา",
    dobLabel: "วันเดือนปีเกิด",
    genderLabel: "เพศ",
    genderMale: "ชาย",
    genderFemale: "หญิง",
    genderOther: "อื่น ๆ",
    employmentTitle: "ข้อมูลนายจ้าง",
    companyLabel: "ชื่อนายจ้าง",
    companyPlaceholder: "ระบุชื่อนายจ้าง",
    caseTypeLabel: "ประเภทการแจ้ง",
    caseTypeChangeEmployer: "แจ้งเปลี่ยนนายจ้าง",
    caseTypeRelocation: "แจ้งย้าย",
    caseTypeOther: "อื่น ๆ",
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
    visaNumberLabel: "เลขวีซ่า",
    visaNumberPlaceholder: "ระบุเลขวีซ่า",
    visaIssueDateLabel: "วันทำวีซ่า",
    visaExpiryDateLabel: "วันหมดอายุวีซ่า",
    renewalTypeLabel: "ประเภทการต่ออายุ",
    renewalTypePassport: "บัตร/พาสปอร์ต",
    renewalTypeVisa: "วีซ่า",
    renewalTypePermit: "ใบอนุญาตทำงาน",
    renewalStatusLabel: "สถานะต่ออายุ",
    renewalStatusNone: "ยังไม่ดำเนินการ",
    renewalStatusPending: "กำลังเตรียมเอกสาร",
    renewalStatusSubmitted: "ยื่นแล้ว",
    renewalStatusCompleted: "ต่ออายุแล้ว",
    receivedDocsLabel: "เอกสารที่ได้รับ",
    requiredRenewalDocsLabel: "เอกสารที่ต้องใช้ต่ออายุ",
    renewalDocPassport: "สำเนาพาสปอร์ต",
    renewalDocVisa: "สำเนาวีซ่า",
    renewalDocPermit: "ใบอนุญาตทำงาน",
    renewalDocPhoto: "รูปถ่าย",
    renewalDocEmployerLetter: "หนังสือรับรองนายจ้าง",
    receivedDocsNoteLabel: "หมายเหตุเอกสารที่ได้รับ",
    receivedDocsNotePlaceholder: "ระบุเอกสารที่ได้รับเพิ่มเติม",
    renewalDocsNoteLabel: "หมายเหตุเอกสารที่ต้องใช้ต่อ",
    renewalDocsNotePlaceholder: "ระบุเอกสารเพิ่มเติมที่ต้องใช้ต่ออายุ",
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
    expiryWarning: "ใกล้หมดอายุใน {days} วัน",
    expiryDaysSuffix: "วัน",
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
    passportTypeLabel: "Passport type",
    passportTypeCi: "CI",
    passportTypePv: "PV",
    passportTypePj: "PJ",
    passportTypeInternational: "International passport",
    passportLabel: "Passport number",
    passportPlaceholder: "e.g. P1234567",
    workerIdLabel: "Worker ID",
    workerIdPlaceholder: "e.g. FW-0001",
    ciNumberLabel: "CI number",
    ciNumberPlaceholder: "e.g. CI-000123",
    cardIssueDateLabel: "Card issue date",
    cardExpiryDateLabel: "Card expiry date",
    nationalityLabel: "Nationality",
    nationalityPlaceholder: "Myanmar / Laos / Cambodia",
    dobLabel: "Date of birth",
    genderLabel: "Gender",
    genderMale: "Male",
    genderFemale: "Female",
    genderOther: "Other",
    employmentTitle: "Employer details",
    companyLabel: "Employer name",
    companyPlaceholder: "Employer name",
    caseTypeLabel: "Case type",
    caseTypeChangeEmployer: "Change employer",
    caseTypeRelocation: "Relocation",
    caseTypeOther: "Other",
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
    visaNumberLabel: "Visa number",
    visaNumberPlaceholder: "Enter visa number",
    visaIssueDateLabel: "Visa issue date",
    visaExpiryDateLabel: "Visa expiry date",
    renewalTypeLabel: "Renewal type",
    renewalTypePassport: "Passport/card",
    renewalTypeVisa: "Visa",
    renewalTypePermit: "Work permit",
    renewalStatusLabel: "Renewal status",
    renewalStatusNone: "Not started",
    renewalStatusPending: "Preparing documents",
    renewalStatusSubmitted: "Submitted",
    renewalStatusCompleted: "Renewed",
    receivedDocsLabel: "Received documents",
    requiredRenewalDocsLabel: "Renewal required documents",
    renewalDocPassport: "Passport copy",
    renewalDocVisa: "Visa copy",
    renewalDocPermit: "Work permit",
    renewalDocPhoto: "Photo",
    renewalDocEmployerLetter: "Employer letter",
    receivedDocsNoteLabel: "Received docs note",
    receivedDocsNotePlaceholder: "Additional received documents",
    renewalDocsNoteLabel: "Renewal docs note",
    renewalDocsNotePlaceholder: "Additional renewal requirements",
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
    expiryWarning: "Expires in {days} days",
    expiryDaysSuffix: "days",
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

const getExpiryState = (dateValue) => {
  if (!dateValue) return { state: "none", days: null };
  const selectedDate = new Date(dateValue);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);
  const diffMs = selectedDate - today;
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (days < 0) return { state: "expired", days };
  if (days <= 7) return { state: "warning", days };
  return { state: "ok", days };
};

const formatExpiryLabel = (state, days) => {
  if (state === "expired") {
    const suffix = translations[currentLanguage].expiryDaysSuffix;
    return `${translations[currentLanguage].expiryExpired} (${Math.abs(days)} ${suffix})`;
  }
  if (state === "warning") {
    return translations[currentLanguage].expiryWarning.replace("{days}", days);
  }
  return translations[currentLanguage].expiryValid;
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
    expiryInput.classList.remove("is-expired");
    return;
  }
  const { state, days } = getExpiryState(expiryInput.value);
  expiryInput.classList.toggle("is-expired", state === "expired");
  expiryInput.classList.toggle("is-expiring", state === "warning");
  const statusType = state === "expired" ? "error" : state === "warning" ? "warn" : "ok";
  setStatus(expiryStatus, formatExpiryLabel(state, days), statusType);
};

const updateCardExpiryStatus = () => {
  if (!cardExpiryDate || !cardExpiryStatus) {
    return;
  }
  if (!cardExpiryDate.value) {
    setStatus(cardExpiryStatus, "");
    cardExpiryDate.classList.remove("is-expired", "is-expiring");
    return;
  }
  const { state, days } = getExpiryState(cardExpiryDate.value);
  cardExpiryDate.classList.toggle("is-expired", state === "expired");
  cardExpiryDate.classList.toggle("is-expiring", state === "warning");
  const statusType = state === "expired" ? "error" : state === "warning" ? "warn" : "ok";
  setStatus(cardExpiryStatus, formatExpiryLabel(state, days), statusType);
};

const updateVisaExpiryStatus = () => {
  if (!visaExpiryDate || !visaExpiryStatus) {
    return;
  }
  if (!visaExpiryDate.value) {
    setStatus(visaExpiryStatus, "");
    visaExpiryDate.classList.remove("is-expired", "is-expiring");
    return;
  }
  const { state, days } = getExpiryState(visaExpiryDate.value);
  visaExpiryDate.classList.toggle("is-expired", state === "expired");
  visaExpiryDate.classList.toggle("is-expiring", state === "warning");
  const statusType = state === "expired" ? "error" : state === "warning" ? "warn" : "ok";
  setStatus(visaExpiryStatus, formatExpiryLabel(state, days), statusType);
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

const setUploadCardPreview = (card, preview) => {
  if (!card) return;
  const thumb = card.querySelector(".upload-thumb");
  const filename = card.querySelector(".upload-filename");
  card.classList.remove("has-preview", "has-file");
  if (thumb) {
    thumb.removeAttribute("src");
  }
  if (filename) {
    filename.textContent = "";
  }
  if (!preview) return;
  if (preview.dataUrl && thumb) {
    thumb.src = preview.dataUrl;
    card.classList.add("has-preview");
  } else if (preview.name && filename) {
    filename.textContent = preview.name;
    card.classList.add("has-file");
  }
};

const cacheUploadFromFile = (key, file) => {
  if (!file) {
    uploadCache[key] = { name: "", dataUrl: "" };
    return;
  }
  uploadCache[key] = { name: file.name, dataUrl: "" };
  if (file.type && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      uploadCache[key] = { name: file.name, dataUrl: reader.result };
      const config = [...uploadFieldConfigs, paymentSlipConfig].find((item) => item.key === key);
      if (config) {
        setUploadCardPreview(config.card, uploadCache[key]);
      }
    };
    reader.readAsDataURL(file);
  }
};

const updateUploadPreview = () => {
  if (!uploadPreview || !uploadInputs.length) {
    return;
  }
  const files = [];
  const indexMap = [];
  uploadFieldConfigs.forEach((config) => {
    const file = config.input?.files?.[0];
    if (file) {
      cacheUploadFromFile(config.key, file);
      files.push(file);
      indexMap.push(config);
    }
    const cached = uploadCache[config.key];
    if (!file && cached?.name) {
      setUploadCardPreview(config.card, cached);
    } else if (file) {
      const preview = {
        name: file.name,
        dataUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
      };
      setUploadCardPreview(config.card, preview);
    } else {
      setUploadCardPreview(config.card, null);
    }
  });
  if (receivedFacePhoto) receivedFacePhoto.checked = Boolean(uploadCache.facePhoto.name);
  if (receivedIdCard) receivedIdCard.checked = Boolean(uploadCache.idCard.name);
  if (receivedHouseDoc) receivedHouseDoc.checked = Boolean(uploadCache.houseDoc.name);
  renderPreview(uploadPreview, files, (indexToRemove) => {
    const config = indexMap[indexToRemove];
    if (config?.input) {
      config.input.value = "";
      uploadCache[config.key] = { name: "", dataUrl: "" };
    }
    updateUploadPreview();
  });
};

const updatePaymentSlipPreview = () => {
  if (!paymentSlipInput || !paymentSlipPreview) {
    return;
  }
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

const getCaseTypeLabel = (value) => {
  const map = {
    changeEmployer: translations[currentLanguage].caseTypeChangeEmployer,
    relocation: translations[currentLanguage].caseTypeRelocation,
    other: translations[currentLanguage].caseTypeOther,
  };
  return map[value] || value || "-";
};

const getPassportTypeLabel = (value) => {
  const map = {
    ci: translations[currentLanguage].passportTypeCi,
    pv: translations[currentLanguage].passportTypePv,
    pj: translations[currentLanguage].passportTypePj,
    international: translations[currentLanguage].passportTypeInternational,
  };
  return map[value] || value || "-";
};

const getRenewalTypeLabel = (value) => {
  const map = {
    passport: translations[currentLanguage].renewalTypePassport,
    visa: translations[currentLanguage].renewalTypeVisa,
    permit: translations[currentLanguage].renewalTypePermit,
  };
  return map[value] || value || "-";
};

const getRenewalStatusLabel = (value) => {
  const map = {
    none: translations[currentLanguage].renewalStatusNone,
    pending: translations[currentLanguage].renewalStatusPending,
    submitted: translations[currentLanguage].renewalStatusSubmitted,
    completed: translations[currentLanguage].renewalStatusCompleted,
  };
  return map[value] || value || "-";
};

const collectFormData = () => {
  const receivedDocs = [];
  if (receivedFacePhoto?.checked) receivedDocs.push("facePhoto");
  if (receivedIdCard?.checked) receivedDocs.push("idCard");
  if (receivedHouseDoc?.checked) receivedDocs.push("houseDoc");
  if (receivedPaymentSlip?.checked) receivedDocs.push("paymentSlip");
  const requiredDocs = Array.from(requiredRenewalDocs)
    .filter((item) => item.checked)
    .map((item) => item.value);
  const formData = {
    formType: formType.value,
    fullName: fullName.value.trim(),
    passportType: passportType?.value || "",
    passport: passportInput.value.trim(),
    workerId: workerId?.value?.trim() || "",
    ciNumber: ciNumber?.value?.trim() || "",
    cardIssueDate: cardIssueDate?.value || "",
    cardExpiryDate: cardExpiryDate?.value || "",
    nationality: nationality.value.trim(),
    dob: dob.value,
    gender: gender.value,
    company: company.value.trim(),
    caseType: caseType?.value || "",
    position: position?.value?.trim() || "",
    workSite: workSite?.value?.trim() || "",
    startDate: startDate?.value || "",
    employerId: employerId.value.trim(),
    permitType: permitType.value,
    permitNo: permitNo.value.trim(),
    visaNumber: visaNumber?.value?.trim() || "",
    visaIssueDate: visaIssueDate?.value || "",
    visaExpiryDate: visaExpiryDate?.value || "",
    expiry: expiryInput.value,
    verification: verification.value,
    paymentStatus: paymentStatus.value,
    paymentDate: paymentDate.value,
    paymentNotes: paymentNotes.value.trim(),
    recordedBy: recordedBy ? recordedBy.value.trim() : "",
    renewalType: renewalType?.value || "",
    renewalStatus: renewalStatus?.value || "",
    receivedDocs,
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
    if (key === "formType" || key === "attachments") return false;
    if (Array.isArray(value)) return value.length > 0;
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
    const searchable = `${record.formId} ${record.formTypeLabel} ${record.displayName} ${
      record.data.passport || ""
    } ${record.data.workerId || ""} ${record.data.ciNumber || ""} ${record.data.visaNumber || ""}`.toLowerCase();
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

  const grouped = scoped.reduce((acc, record) => {
    const key = record.data.company || record.data.employerId || translations[currentLanguage].recordEmployerLabel;
    if (!acc[key]) acc[key] = [];
    acc[key].push(record);
    return acc;
  }, {});
  Object.entries(grouped).forEach(([employerName, records]) => {
    const groupTitle = document.createElement("h4");
    groupTitle.className = "record-group-title";
    groupTitle.textContent = employerName;
    recordsList.appendChild(groupTitle);
    records.forEach((record) => {
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
    if (record.data.caseType) {
      const caseChip = document.createElement("span");
      caseChip.className = "record-chip";
      caseChip.textContent = getCaseTypeLabel(record.data.caseType);
      tags.appendChild(caseChip);
    }
    if (record.data.paymentStatus) {
      const paymentChip = document.createElement("span");
      paymentChip.className = "record-chip";
      paymentChip.textContent =
        record.data.paymentStatus === "paid"
          ? translations[currentLanguage].paymentPaid
          : translations[currentLanguage].paymentPending;
      tags.appendChild(paymentChip);
    }
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
      const cardExpiryState = getExpiryState(record.data.cardExpiryDate);
      if (cardExpiryState.state === "expired" || cardExpiryState.state === "warning") {
        const expiryChip = document.createElement("span");
        expiryChip.className = `record-chip ${cardExpiryState.state === "expired" ? "alert" : "warn"}`;
        expiryChip.textContent =
          cardExpiryState.state === "expired"
            ? translations[currentLanguage].expiryExpired
            : translations[currentLanguage].expiryWarning.replace("{days}", cardExpiryState.days);
        tags.appendChild(expiryChip);
      }
      const visaExpiryState = getExpiryState(record.data.visaExpiryDate);
      if (visaExpiryState.state === "expired" || visaExpiryState.state === "warning") {
        const visaChip = document.createElement("span");
        visaChip.className = `record-chip ${visaExpiryState.state === "expired" ? "alert" : "warn"}`;
        visaChip.textContent =
          visaExpiryState.state === "expired"
            ? translations[currentLanguage].expiryExpired
            : translations[currentLanguage].expiryWarning.replace("{days}", visaExpiryState.days);
        tags.appendChild(visaChip);
      }
      recordsList.appendChild(card);
    });
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
    const workerIdItem = document.createElement("li");
    workerIdItem.textContent = `${translations[currentLanguage].workerIdLabel}: ${record.data.workerId || "-"}`;
    const passportTypeItem = document.createElement("li");
    passportTypeItem.textContent = `${translations[currentLanguage].passportTypeLabel}: ${getPassportTypeLabel(
      record.data.passportType
    )}`;
    const ciItem = document.createElement("li");
    ciItem.textContent = `${translations[currentLanguage].ciNumberLabel}: ${record.data.ciNumber || "-"}`;
    const employerItem = document.createElement("li");
    employerItem.textContent = `${translations[currentLanguage].recordEmployerLabel}: ${
      record.data.company || record.data.employerId || "-"
    }`;
    const caseTypeItem = document.createElement("li");
    caseTypeItem.textContent = `${translations[currentLanguage].recordCaseTypeLabel}: ${getCaseTypeLabel(
      record.data.caseType
    )}`;
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
    const cardIssueItem = document.createElement("li");
    cardIssueItem.textContent = `${translations[currentLanguage].cardIssueDateLabel}: ${record.data.cardIssueDate || "-"}`;
    const cardExpiryItem = document.createElement("li");
    const cardExpiryState = getExpiryState(record.data.cardExpiryDate);
    const cardExpiryLabel = record.data.cardExpiryDate ? formatExpiryLabel(cardExpiryState.state, cardExpiryState.days) : "-";
    cardExpiryItem.textContent = `${translations[currentLanguage].cardExpiryDateLabel}: ${cardExpiryLabel}`;
    const visaIssueItem = document.createElement("li");
    visaIssueItem.textContent = `${translations[currentLanguage].visaIssueDateLabel}: ${record.data.visaIssueDate || "-"}`;
    const visaItem = document.createElement("li");
    visaItem.textContent = `${translations[currentLanguage].visaNumberLabel}: ${record.data.visaNumber || "-"}`;
    const visaExpiryItem = document.createElement("li");
    const visaExpiryState = getExpiryState(record.data.visaExpiryDate);
    const visaExpiryLabel = record.data.visaExpiryDate ? formatExpiryLabel(visaExpiryState.state, visaExpiryState.days) : "-";
    visaExpiryItem.textContent = `${translations[currentLanguage].visaExpiryDateLabel}: ${visaExpiryLabel}`;
    const renewalTypeItem = document.createElement("li");
    renewalTypeItem.textContent = `${translations[currentLanguage].renewalTypeLabel}: ${getRenewalTypeLabel(
      record.data.renewalType
    )}`;
    const renewalStatusItem = document.createElement("li");
    renewalStatusItem.textContent = `${translations[currentLanguage].renewalStatusLabel}: ${getRenewalStatusLabel(
      record.data.renewalStatus
    )}`;
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
    list.appendChild(workerIdItem);
    list.appendChild(passportTypeItem);
    list.appendChild(ciItem);
    list.appendChild(employerItem);
    if (record.data.caseType) {
      list.appendChild(caseTypeItem);
    }
    list.appendChild(typeItem);
    list.appendChild(statusItem);
    list.appendChild(cardIssueItem);
    list.appendChild(cardExpiryItem);
    list.appendChild(expiryItem);
    list.appendChild(visaIssueItem);
    list.appendChild(visaItem);
    list.appendChild(visaExpiryItem);
    list.appendChild(paymentItem);
    list.appendChild(paymentDateItem);
    list.appendChild(recordedByItem);
    list.appendChild(renewalTypeItem);
    list.appendChild(renewalStatusItem);
    recordModalBody.appendChild(title);
    recordModalBody.appendChild(list);
    if (record.data.receivedDocs?.length || record.data.requiredRenewalDocs?.length) {
      const docTitle = document.createElement("h5");
      docTitle.textContent = translations[currentLanguage].receivedDocsLabel;
      const docList = document.createElement("ul");
      const receivedLabels = {
        facePhoto: translations[currentLanguage].recordFacePhotoLabel,
        idCard: translations[currentLanguage].recordIdCardLabel,
        houseDoc: translations[currentLanguage].recordHouseDocLabel,
        paymentSlip: translations[currentLanguage].recordPaymentSlipLabel,
      };
      const renewalLabels = {
        passport: translations[currentLanguage].renewalDocPassport,
        visa: translations[currentLanguage].renewalDocVisa,
        permit: translations[currentLanguage].renewalDocPermit,
        photo: translations[currentLanguage].renewalDocPhoto,
        employerLetter: translations[currentLanguage].renewalDocEmployerLetter,
      };
      if (record.data.receivedDocs?.length) {
        const receivedItem = document.createElement("li");
        const receivedText = record.data.receivedDocs.map((item) => receivedLabels[item] || item).join(", ");
        receivedItem.textContent = `${translations[currentLanguage].receivedDocsLabel}: ${receivedText}`;
        docList.appendChild(receivedItem);
      }
      if (record.data.requiredRenewalDocs?.length) {
        const requiredItem = document.createElement("li");
        const requiredText = record.data.requiredRenewalDocs
          .map((item) => renewalLabels[item] || item)
          .join(", ");
        requiredItem.textContent = `${translations[currentLanguage].requiredRenewalDocsLabel}: ${requiredText}`;
        docList.appendChild(requiredItem);
      }
      if (record.data.receivedDocsNote) {
        const noteItem = document.createElement("li");
        noteItem.textContent = `${translations[currentLanguage].receivedDocsNoteLabel}: ${record.data.receivedDocsNote}`;
        docList.appendChild(noteItem);
      }
      if (record.data.renewalDocsNote) {
        const noteItem = document.createElement("li");
        noteItem.textContent = `${translations[currentLanguage].renewalDocsNoteLabel}: ${record.data.renewalDocsNote}`;
        docList.appendChild(noteItem);
      }
      recordModalBody.appendChild(docTitle);
      recordModalBody.appendChild(docList);
    }
    const attachments = [];
    if (record.data.facePhoto) {
      attachments.push({
        label: translations[currentLanguage].recordFacePhotoLabel,
        value: record.data.facePhoto,
        dataUrl: record.data.facePhotoData || "",
      });
    }
    if (record.data.idCard) {
      attachments.push({
        label: translations[currentLanguage].recordIdCardLabel,
        value: record.data.idCard,
        dataUrl: record.data.idCardData || "",
      });
    }
    if (record.data.houseDoc) {
      attachments.push({
        label: translations[currentLanguage].recordHouseDocLabel,
        value: record.data.houseDoc,
        dataUrl: record.data.houseDocData || "",
      });
    }
    if (record.data.paymentSlip) {
      attachments.push({
        label: translations[currentLanguage].recordPaymentSlipLabel,
        value: record.data.paymentSlip,
        dataUrl: record.data.paymentSlipData || "",
      });
    }
    if (!attachments.length && Array.isArray(record.data.attachments)) {
      record.data.attachments.forEach((fileName) => {
        attachments.push({
          label: translations[currentLanguage].recordAttachmentsTitle,
          value: fileName,
        });
      });
    }
    if (attachments.length) {
      const attachmentTitle = document.createElement("h5");
      attachmentTitle.textContent = translations[currentLanguage].recordAttachmentsTitle;
      const attachmentList = document.createElement("ul");
      attachments.forEach((item) => {
        const listItem = document.createElement("li");
        const label = document.createElement("span");
        label.textContent = `${item.label}: `;
        listItem.appendChild(label);
        if (item.dataUrl && item.dataUrl.startsWith("data:image")) {
          const image = document.createElement("img");
          image.src = item.dataUrl;
          image.alt = item.value;
          image.className = "attachment-thumb";
          listItem.appendChild(image);
        } else {
          const value = document.createElement("span");
          value.textContent = item.value;
          listItem.appendChild(value);
        }
        attachmentList.appendChild(listItem);
      });
      recordModalBody.appendChild(attachmentTitle);
      recordModalBody.appendChild(attachmentList);
    }
  }
  recordModal.classList.add("is-open");
  recordModal.setAttribute("aria-hidden", "false");
};

const openEmployerModal = (query) => {
  recordModalTitle.textContent = translations[currentLanguage].recordModalTitle;
  recordModalBody.innerHTML = "";
  const records = loadRecords().filter((record) => {
    const employer = `${record.data.company || ""} ${record.data.employerId || ""}`.toLowerCase();
    return employer.includes(query.toLowerCase());
  });
  if (!records.length) {
    const message = document.createElement("p");
    message.textContent = translations[currentLanguage].recordNotFound;
    recordModalBody.appendChild(message);
  } else {
    const list = document.createElement("ul");
    records.forEach((record) => {
      const item = document.createElement("li");
      const name = record.data.fullName || "-";
      const workerIdValue = record.data.workerId || "-";
      const expiryState = getExpiryState(record.data.cardExpiryDate);
      const expiryLabel = record.data.cardExpiryDate
        ? formatExpiryLabel(expiryState.state, expiryState.days)
        : "-";
      item.textContent = `${name} • ${translations[currentLanguage].workerIdLabel}: ${workerIdValue} • ${translations[currentLanguage].cardExpiryDateLabel}: ${expiryLabel}`;
      const viewButton = document.createElement("button");
      viewButton.type = "button";
      viewButton.className = "secondary";
      viewButton.textContent = translations[currentLanguage].verifyButton;
      viewButton.addEventListener("click", () => openRecordModal(record));
      item.appendChild(document.createElement("br"));
      item.appendChild(viewButton);
      list.appendChild(item);
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
  return (
    records.find((record) => record.formId.toLowerCase() === normalized) ||
    records.find((record) => record.data.passport?.toLowerCase() === normalized) ||
    records.find((record) => record.data.workerId?.toLowerCase() === normalized) ||
    records.find((record) => record.data.ciNumber?.toLowerCase() === normalized) ||
    records.find((record) => record.data.visaNumber?.toLowerCase() === normalized) ||
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
  const cardExpiryState = getExpiryState(cardExpiryDate?.value || "");
  if (cardExpiryState.state === "expired") {
    setStatus(formSaveStatus, translations[currentLanguage].expiryExpired, "error");
  } else if (cardExpiryState.state === "warning") {
    setStatus(formSaveStatus, formatExpiryLabel(cardExpiryState.state, cardExpiryState.days), "warn");
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
  if (workerForm) {
    localStorage.setItem(RECORD_SEARCH_KEY, formId);
    window.location.href = "records.html";
  }
};

const populateForm = (record) => {
  if (!record) return;
  if (formType) formType.value = record.formType;
  if (recordedBy) recordedBy.value = record.data.recordedBy || "";
  if (fullName) {
    fullName.value = record.data.fullName || "";
  }
  if (passportType) passportType.value = record.data.passportType || "ci";
  if (passportInput) passportInput.value = record.data.passport || "";
  if (workerId) workerId.value = record.data.workerId || "";
  if (ciNumber) ciNumber.value = record.data.ciNumber || "";
  if (cardIssueDate) cardIssueDate.value = record.data.cardIssueDate || "";
  if (cardExpiryDate) cardExpiryDate.value = record.data.cardExpiryDate || "";
  if (nationality) nationality.value = record.data.nationality || "";
  if (dob) dob.value = record.data.dob || "";
  if (gender) gender.value = record.data.gender || "";
  if (company) company.value = record.data.company || "";
  if (caseType) caseType.value = record.data.caseType || "changeEmployer";
  if (position) position.value = record.data.position || "";
  if (workSite) workSite.value = record.data.workSite || "";
  if (startDate) startDate.value = record.data.startDate || "";
  if (employerId) employerId.value = record.data.employerId || "";
  if (permitType) permitType.value = record.data.permitType || "";
  if (permitNo) permitNo.value = record.data.permitNo || "";
  if (visaNumber) visaNumber.value = record.data.visaNumber || "";
  if (visaIssueDate) visaIssueDate.value = record.data.visaIssueDate || "";
  if (visaExpiryDate) visaExpiryDate.value = record.data.visaExpiryDate || "";
  if (renewalType) renewalType.value = record.data.renewalType || "passport";
  if (renewalStatus) renewalStatus.value = record.data.renewalStatus || "none";
  if (receivedFacePhoto) receivedFacePhoto.checked = record.data.receivedDocs?.includes("facePhoto") || false;
  if (receivedIdCard) receivedIdCard.checked = record.data.receivedDocs?.includes("idCard") || false;
  if (receivedHouseDoc) receivedHouseDoc.checked = record.data.receivedDocs?.includes("houseDoc") || false;
  if (receivedPaymentSlip) receivedPaymentSlip.checked = record.data.receivedDocs?.includes("paymentSlip") || false;
  if (requiredRenewalDocs?.length) {
    requiredRenewalDocs.forEach((checkbox) => {
      checkbox.checked = record.data.requiredRenewalDocs?.includes(checkbox.value) || false;
    });
  }
  if (receivedDocsNote) receivedDocsNote.value = record.data.receivedDocsNote || "";
  if (renewalDocsNote) renewalDocsNote.value = record.data.renewalDocsNote || "";
  if (expiryInput) expiryInput.value = record.data.expiry || "";
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
  updateExpiryStatus();
  updateCardExpiryStatus();
  updateVisaExpiryStatus();
  updateUploadPreview();
  updatePaymentSlipPreview();
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
if (cardExpiryDate) {
  cardExpiryDate.addEventListener("change", updateCardExpiryStatus);
}
if (visaExpiryDate) {
  visaExpiryDate.addEventListener("change", updateVisaExpiryStatus);
}
uploadInputs.forEach((input) => input.addEventListener("change", updateUploadPreview));
if (paymentSlipInput) {
  paymentSlipInput.addEventListener("change", updatePaymentSlipPreview);
}
updateSections();
updateUploadPreview();
updatePaymentSlipPreview();
renderRecords();
if (recordSearch) {
  const storedQuery = localStorage.getItem(RECORD_SEARCH_KEY);
  if (storedQuery) {
    recordSearch.value = storedQuery;
    localStorage.removeItem(RECORD_SEARCH_KEY);
    renderRecords();
    const matched = findRecordByQuery(storedQuery);
    if (!matched) {
      recordSearch.value = "";
      renderRecords();
    }
  }
}

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
  updateCardExpiryStatus();
  updateVisaExpiryStatus();
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
    const query = employerCheckInput.value;
    if (!query) {
      setStatus(employerStatus, translations[currentLanguage].employerEmpty, "warn");
      return;
    }
    openEmployerModal(query);
  });
}
if (verifyRecordButton) {
  verifyRecordButton.addEventListener("click", () => {
    const query = passportInput?.value || fullName?.value || company?.value;
    if (!query) {
      setStatus(formSaveStatus, translations[currentLanguage].recordNotFound, "warn");
      return;
    }
    localStorage.setItem(RECORD_SEARCH_KEY, query);
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
    const records = loadRecords();
    const record = records.find((item) => item.formId === storedEditId);
    if (record) {
      currentEditId = record.formId;
      populateForm(record);
    }
  }
}
