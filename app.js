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
const personalVisaExpiryDate = document.getElementById("personalVisaExpiryDate");
const businessType = document.getElementById("businessType");
const businessTypeCustom = document.getElementById("businessTypeCustom");
const employerName = document.getElementById("employerName");
const employerEmail = document.getElementById("employerEmail");
const employerAddress = document.getElementById("employerAddress");
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
const docPassCopy = document.getElementById("docPassCopy");
const docVisaCopy = document.getElementById("docVisaCopy");
const docWorkPermitCopy = document.getElementById("docWorkPermitCopy");
const documentJobType = document.getElementById("documentJobType");
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
const exportRecordsButton = document.getElementById("exportRecords");
const summaryTodayCount = document.getElementById("summaryTodayCount");
const summaryYesterdayCount = document.getElementById("summaryYesterdayCount");
const summaryMonthCount = document.getElementById("summaryMonthCount");
const clearRecordsButton = document.getElementById("clearRecords");
const passportCheckButton = document.getElementById("passportCheckButton");
const employerCheckButton = document.getElementById("employerCheckButton");
const generalSearchInput = document.getElementById("generalSearch");
const generalSearchButton = document.getElementById("generalSearchButton");
const generalSearchStatus = document.getElementById("generalSearchStatus");
const latestRecordTitle = document.getElementById("latestRecordTitle");
const latestRecordMeta = document.getElementById("latestRecordMeta");
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
const nextStepLink = document.getElementById("nextStepLink");
const prevStepButton = document.getElementById("prevStepButton");
const EDIT_KEY = "editRecordId";
const RECORD_SEARCH_KEY = "recordSearchQuery";
const FORM_DRAFT_KEY = "workerFormDraft";
const API_BASE_KEY = "recordsApiBaseUrl";
const DIRTY_RECORD_IDS_KEY = "dirtyRecordIds";
const DIRTY_RECORD_TTL_MS = 10 * 60 * 1000;

const normalizeApiBaseUrl = (value) => String(value || "").trim().replace(/\/+$/, "");

const resolveApiBaseUrl = () => {
  const params = new URLSearchParams(window.location.search || "");
  const queryBase = normalizeApiBaseUrl(params.get("apiBase"));
  if (queryBase) {
    localStorage.setItem(API_BASE_KEY, queryBase);
    return queryBase;
  }

  const storedBase = normalizeApiBaseUrl(localStorage.getItem(API_BASE_KEY));
  if (storedBase) {
    return storedBase;
  }

  return normalizeApiBaseUrl(window.RECORDS_API_BASE_URL);
};

const API_BASE_URL = resolveApiBaseUrl();
const RECORDS_API_URL = API_BASE_URL ? `${API_BASE_URL}/api/records` : "/api/records";

const getEditIdFromQuery = () => {
  const params = new URLSearchParams(window.location.search || "");
  return String(params.get("editId") || "").trim();
};

let currentEditId = null;
let latestRenderedRecords = [];
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
  return selected ? selected.value : "";
};

const updateSections = () => {
  if (!sections.length) {
    return;
  }
  const selected = getSelectedFormType();
  sections.forEach((section) => {
    const sectionKey = section.dataset.section;
    const shouldShow = !sectionKey || sectionKey === "all" || sectionKey === selected;
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

const updateBusinessTypeCustomVisibility = () => {
  if (!businessType || !businessTypeCustom) return;
  const isCustom = businessType.value === "other";
  businessTypeCustom.classList.toggle("is-hidden", !isCustom);
  if (!isCustom) {
    businessTypeCustom.value = "";
  }
};

const getBusinessTypeValue = () => {
  if (!businessType) return "";
  if (businessType.value === "other") {
    return businessTypeCustom?.value?.trim() || "";
  }
  return businessType.value?.trim() || "";
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
    formTypeCiReport: "ทำเล่ม CI",
    formTypeWorkPermitRenewal: "ต่ออนุญาตทำงานแรงงานต่างด้าว",
    formTypeMouLaos: "MOU ลาว",
    formTypeMouLaosRenew: "MOU ลาว 2 ปีหลัง",
    formTypeNoDocsRegister: "ขึ้นทะเบียนคนไม่มีเอกสาร",
    formTypeExit: "แจ้งออก",
    formTypeOther: "อื่น ๆ",
    formTypeOtherDetailLabel: "ระบุรายละเอียดอื่น ๆ",
    formTypeOtherDetailPlaceholder: "ระบุประเภทงานอื่น ๆ",
    personalInfoTitle: "แบบฟอร์มข้อมูลส่วนตัวของต่างด้าว",
    workerFullNameLabel: "ชื่อต่างด้าว",
    workerFullNamePlaceholder: "กรอกชื่อต่างด้าว",
    workerGenderLabel: "เพศ",
    workerGenderPlaceholder: "เลือกเพศ",
    workerGenderMale: "Male",
    workerGenderFemale: "Female",
    workerGenderOther: "Other",
    workerNationalityLabel: "สัญชาติ",
    workerNationalityPlaceholder: "กรอกสัญชาติ",
    businessTypeLabel: "ประเภทกิจการ",
    businessTypePlaceholder: "เช่น ก่อสร้าง เกษตรกร",
    employerNameLabel: "ชื่อนายจ้าง",
    employerNamePlaceholder: "กรอกชื่อนายจ้าง",
    documentSenderLabel: "ชื่อผู้ส่งเอกสาร",
    documentSenderPlaceholder: "กรอกชื่อผู้ส่งเอกสาร",
    documentSentDateLabel: "วันที่ส่งเอกสาร",
    documentReceiverLabel: "ชื่อผู้รับเอกสาร",
    documentReceiverPlaceholder: "กรอกชื่อผู้รับเอกสาร",
    documentReceivedDateLabel: "วันที่รับเอกสาร",
    documentReturnDateLabel: "วันที่ส่งคืนเอกสาร",
    documentsTitle: "เอกสารที่ได้รับ",
    documentWorkPermit: "ใบอนุญาตการทำงาน",
    documentReceipt: "ใบเสร็จ",
    documentRequestForm: "ใบคำขอ",
    documentNameList: "เนมลิส",
    documentPassPage: "หน้า Pass (ตัวจริง)",
    documentVisaPage: "หน้า Visa (ตัวจริง)",
    documentHealthCard: "บัตรสุขภาพ",
    documentExitNotice: "ใบแจ้งออก",
    documentHouseReg: "ทะเบียนบ้านนายจ้าง",
    documentEmployerIdCard: "บัตรประชาชนหน้าหลัง",
    documentCompanyCert: "หนังสือรับรองบริษัท",
    documentsNoteLabel: "หมายเหตุเอกสาร",
    documentsNotePlaceholder: "บันทึกเอกสารที่ขาด หรือเอกสารมีปัญหา",
    statusTitle: "สถานะ",
    statusRegistered: "ลงระบบ",
    statusPending: "รออนุมัติ",
    statusAppointment: "นัดหมาย",
    statusAppointmentDateLabel: "วันที่นัดหมาย",
    workerListHelper: "เพิ่มรายชื่อแรงงานหลายคนต่อ 1 นายจ้าง โดยแต่ละคนมีชุดข้อมูลของตัวเอง",
    addWorkerButton: "เพิ่มรายชื่อ",
    workerCardTitle: "แรงงานคนที่",
    removeWorkerButton: "ลบรายชื่อ",
    workerDetailsTitle: "รายชื่อแรงงาน",
    loadingText: "กำลังโหลด...",
    fullNameLabel: "ชื่อ-นามสกุล",
    fullNamePlaceholder: "กรอกชื่อแรงงาน",
    passportTypeLabel: "ประเภทพาสปอร์ต",
    passportTypeCi: "CI",
    passportTypePv: "PV",
    passportTypePj: "PJ",
    passportTypeInternational: "RDPLAO",
    passportLabel: "เลขหนังสือเดินทาง",
    passportPlaceholder: "เช่น P1234567",
    workerIdLabel: "เลขต่างด้าว",
    workerIdPlaceholder: "เช่น FW-0001",
    scheduleStatusLabel: "กำหนดการ/สถานะติดตาม",
    scheduleStatusPendingAppointment: "รอการนัด",
    scheduleStatusScheduled: "นัดแล้ว",
    scheduleStatusPendingReview: "รอการตรวจสอบ",
    scheduleStatusCompleted: "สำเร็จแล้ว",
    scheduleLocationLabel: "สถานที่นัดหมาย",
    scheduleLocationPlaceholder: "เช่น สำนักงานจัดหางาน",
    healthSectionTitle: "การตรวจสุขภาพ",
    healthRegisteredLabel: "ลงระบบแล้ว",
    healthCheckedLabel: "ตรวจสุขภาพ",
    healthIdentityLabel: "อัตลักษณ์",
    healthPendingLabel: "รอตรวจสุขภาพ",
    healthCheckDateLabel: "วันที่ตรวจ",
    healthPendingDateLabel: "วันที่รอตรวจ",
    healthStatusYes: "มี",
    healthStatusNo: "ไม่มี",
    ciNumberLabel: "เลข CI",
    ciNumberPlaceholder: "เช่น CI-000123",
    cardIssueDateLabel: "วันทำบัตร (CI/PV/PJ)",
    cardExpiryDateLabel: "วันหมดอายุบัตร (CI/PV/PJ)",
    nationalityLabel: "สัญชาติ",
    nationalityPlaceholder: "เมียนมา / ลาว / กัมพูชา",
    dobLabel: "วันเดือนปีเกิด",
    genderLabel: "เพศ",
    genderMale: "Male",
    genderFemale: "Female",
    genderOther: "Other",
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
    notificationTitle: "รายการแจ้ง/สถานะเพิ่มเติม",
    notificationResidence: "การแจ้งที่พัก",
    notificationExit: "แจ้งออก",
    notificationEmployerOverdue: "นายจ้างเกิน 90 วัน",
    notificationLaosMouVisaRun: "ลาว MOU ใส่ Visa/Visa run",
    notificationLaosMouTwoYears: "ลาว MOU 2 ปี หลัง",
    notificationRenew90Days: "ต่อ 90 วัน",
    notificationRenewOneYearCabinet: "ต่ออายุ 1 ปี มติครม",
    notificationRenewTwoYearCabinetLaos: "ต่ออายุ 2 ปี มติครมเปลี่ยนเล่มลาว",
    supportingDocsTitle: "เอกสารประกอบเพิ่มเติม",
    supportingDocEmployerCard: "นายจ้าง บัตร",
    supportingDocCard50: "บัตร 50",
    supportingDocReceipt: "ใบเสร็จ",
    requiredRenewalDocsLabel: "เอกสารที่ต้องใช้ต่ออายุ",
    renewalDocPassport: "พาสปอร์ต",
    renewalDocVisa: "วีซ่า",
    renewalDocPermit: "ใบอนุญาตทำงาน",
    renewalDocPhoto: "รูปถ่าย",
    renewalDocEmployerLetter: "หนังสือรับรองนายจ้าง",
    receivedDocsNoteLabel: "หมายเหตุเอกสารที่ได้รับ",
    receivedDocsNotePlaceholder: "ระบุเอกสารที่ได้รับเพิ่มเติม",
    renewalDocsNoteLabel: "หมายเหตุเอกสารที่ต้องใช้ต่อ",
    renewalDocsNotePlaceholder: "ระบุเอกสารเพิ่มเติมที่ต้องใช้ต่ออายุ",
    expiryLabel: "วันหมดอายุใบอนุญาตอื่น ๆ",
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
    clearFormButton: "ล้างข้อมูลแบบฟอร์ม",
    confirmClearFormDraft: "ยืนยันการล้างข้อมูลแบบฟอร์มทั้งหมดหรือไม่?",
    formDraftCleared: "ล้างข้อมูลแบบฟอร์มแล้ว",
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
    recordsFilterLabel: "กรองตามประเภทงาน",
    recordsFilterAll: "ทั้งหมด",
    filterRenewalPassport: "ต่ออายุบัตร/พาสปอร์ต",
    filterRenewalVisa: "ต่ออายุวีซ่า",
    filterRenewalPermit: "ต่ออายุใบอนุญาตทำงาน",
    filterNationalityMmr: "สัญชาติ MMR",
    filterNationalityLao: "สัญชาติ LAO",
    filterNationalityKhm: "สัญชาติ KHM",
    filterNationalityVnm: "สัญชาติ VNM",
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
    deleteButton: "ลบ",
    verifyButton: "ตรวจสอบข้อมูล",
    recordsTableFormId: "เลขที่แบบฟอร์ม",
    recordsTableFormType: "ประเภทงาน",
    recordsTableEmployer: "นายจ้าง",
    recordsTableWorker: "ชื่อต่างด้าว",
    recordsTableRecordedBy: "ผู้บันทึกข้อมูล",
    recordsTableUpdated: "อัปเดตล่าสุด",
    recordsTableStatus: "สถานะ",
    recordsTableActions: "การจัดการ",
    statusChipCompleted: "สำเร็จแล้ว",
    statusChipPending: "รอการนัด/เอกสาร/ชำระเงิน/ใบอนุญาตใกล้หมดอายุ",
    statusChipAlert: "ใบอนุญาตหมดอายุ/ไม่จ่ายตามกำหนด",
    workerDocStatusLabel: "สถานะเอกสาร",
    workerDocStatusOk: "สำเร็จแล้ว",
    workerDocStatusWarning: "ใกล้หมดอายุ",
    workerDocStatusExpired: "หมดอายุแล้ว",
    workerDocStatusPending: "กำลังดำเนินการ",
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
    formTypeVisaStamp: "Visa stamp",
    formTypeCiReport: "CI book report",
    formTypeWorkPermitRenewal: "Foreign worker work permit renewal",
    formTypeMouLaos: "MOU Laos",
    formTypeMouLaosRenew: "MOU Laos (2-year renewal)",
    formTypeNoDocsRegister: "Undocumented worker registration",
    formTypeExit: "Exit notification",
    formTypeOther: "Other",
    formTypeOtherDetailLabel: "Specify other details",
    formTypeOtherDetailPlaceholder: "Specify other work category",
    personalInfoTitle: "Foreign worker personal information",
    workerFullNameLabel: "Worker name",
    workerFullNamePlaceholder: "Enter worker name",
    workerGenderLabel: "Gender",
    workerGenderPlaceholder: "Select gender",
    workerGenderMale: "Male",
    workerGenderFemale: "Female",
    workerGenderOther: "Other",
    workerNationalityLabel: "Nationality",
    workerNationalityPlaceholder: "Enter nationality",
    businessTypeLabel: "Business type",
    businessTypePlaceholder: "e.g. Construction, agriculture",
    employerNameLabel: "Employer name",
    employerNamePlaceholder: "Enter employer name",
    documentSenderLabel: "Document sender",
    documentSenderPlaceholder: "Enter document sender",
    documentSentDateLabel: "Document sent date",
    documentReceiverLabel: "Document receiver",
    documentReceiverPlaceholder: "Enter document receiver",
    documentReceivedDateLabel: "Document received date",
    documentReturnDateLabel: "Document return date",
    documentsTitle: "Received documents",
    documentWorkPermit: "Work permit",
    documentReceipt: "Receipt",
    documentRequestForm: "Request form",
    documentNameList: "Name list",
    documentPassPage: "Passport page (original)",
    documentVisaPage: "Visa page (original)",
    documentHealthCard: "Health card",
    documentExitNotice: "Exit notice",
    documentHouseReg: "Employer house registration",
    documentEmployerIdCard: "Employer ID card (front/back)",
    documentCompanyCert: "Company certificate",
    documentsNoteLabel: "Document notes",
    documentsNotePlaceholder: "Record missing or problematic documents",
    statusTitle: "Status",
    statusRegistered: "Registered",
    statusPending: "Pending approval",
    statusAppointment: "Appointment",
    statusAppointmentDateLabel: "Appointment date",
    workerListHelper: "Add multiple workers per employer. Each person has their own details.",
    addWorkerButton: "Add worker",
    workerCardTitle: "Worker",
    removeWorkerButton: "Remove",
    workerDetailsTitle: "Worker details",
    loadingText: "Loading...",
    fullNameLabel: "Full name",
    fullNamePlaceholder: "Worker name",
    passportTypeLabel: "Passport type",
    passportTypeCi: "CI",
    passportTypePv: "PV",
    passportTypePj: "PJ",
    passportTypeInternational: "RDPLAO",
    passportLabel: "Passport number",
    passportPlaceholder: "e.g. P1234567",
    workerIdLabel: "Worker ID",
    workerIdPlaceholder: "e.g. FW-0001",
    scheduleStatusLabel: "Schedule status",
    scheduleStatusPendingAppointment: "Awaiting appointment",
    scheduleStatusScheduled: "Appointment set",
    scheduleStatusPendingReview: "Pending review",
    scheduleStatusCompleted: "Completed",
    scheduleLocationLabel: "Appointment location",
    scheduleLocationPlaceholder: "e.g. Labor office",
    healthSectionTitle: "Health check",
    healthRegisteredLabel: "Registered in system",
    healthCheckedLabel: "Health check",
    healthIdentityLabel: "Identity check",
    healthPendingLabel: "Waiting for health check",
    healthCheckDateLabel: "Check date",
    healthPendingDateLabel: "Waiting date",
    healthStatusYes: "Yes",
    healthStatusNo: "No",
    ciNumberLabel: "CI number",
    ciNumberPlaceholder: "e.g. CI-000123",
    cardIssueDateLabel: "Card issue date (CI/PV/PJ)",
    cardExpiryDateLabel: "Card expiry date (CI/PV/PJ)",
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
    notificationTitle: "Notifications & statuses",
    notificationResidence: "Residence notification",
    notificationExit: "Exit notification",
    notificationEmployerOverdue: "Employer over 90 days",
    notificationLaosMouVisaRun: "Laos MOU with visa/visa run",
    notificationLaosMouTwoYears: "Laos MOU 2-year follow-up",
    notificationRenew90Days: "90-day renewal",
    notificationRenewOneYearCabinet: "1-year renewal (Cabinet resolution)",
    notificationRenewTwoYearCabinetLaos: "2-year renewal (Cabinet resolution, Laos book change)",
    supportingDocsTitle: "Additional supporting documents",
    supportingDocEmployerCard: "Employer card",
    supportingDocCard50: "Card 50",
    supportingDocReceipt: "Receipt",
    requiredRenewalDocsLabel: "Renewal required documents",
    renewalDocPassport: "Passport",
    renewalDocVisa: "Visa",
    renewalDocPermit: "Work permit",
    renewalDocPhoto: "Photo",
    renewalDocEmployerLetter: "Employer letter",
    receivedDocsNoteLabel: "Received docs note",
    receivedDocsNotePlaceholder: "Additional received documents",
    renewalDocsNoteLabel: "Renewal docs note",
    renewalDocsNotePlaceholder: "Additional renewal requirements",
    expiryLabel: "Other permit expiry date",
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
    clearFormButton: "Clear form",
    confirmClearFormDraft: "Clear all form entries?",
    formDraftCleared: "Form cleared",
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
    recordsFilterLabel: "Filter by work category",
    recordsFilterAll: "All",
    filterRenewalPassport: "Renew passport/card",
    filterRenewalVisa: "Renew visa",
    filterRenewalPermit: "Renew work permit",
    filterNationalityMmr: "Nationality MMR",
    filterNationalityLao: "Nationality LAO",
    filterNationalityKhm: "Nationality KHM",
    filterNationalityVnm: "Nationality VNM",
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
    deleteButton: "Delete",
    verifyButton: "Verify record",
    recordsTableFormId: "Form ID",
    recordsTableFormType: "Work category",
    recordsTableEmployer: "Employer",
    recordsTableWorker: "Worker name",
    recordsTableRecordedBy: "Recorded by",
    recordsTableUpdated: "Last updated",
    recordsTableStatus: "Status",
    recordsTableActions: "Actions",
    statusChipCompleted: "Completed",
    statusChipPending: "Pending appointment/docs/payment/permit expiring",
    statusChipAlert: "Permit expired/unpaid",
    workerDocStatusLabel: "Document status",
    workerDocStatusOk: "Completed",
    workerDocStatusWarning: "Expiring soon",
    workerDocStatusExpired: "Expired",
    workerDocStatusPending: "In progress",
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
const isNextFormPage = window.location.pathname.endsWith("/nextform.html") || window.location.pathname.endsWith("nextform.html");
let currentFormStep = isNextFormPage ? 2 : 1;

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
  if (!dateValue) return { state: "none", days: null };
  const selectedDate = new Date(dateValue);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);
  const diffMs = selectedDate - today;
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (days < 0) return { state: "expired", days };
  if (days <= EXPIRY_WARNING_DAYS) return { state: "warning", days };
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

const formatExpiryDisplay = (dateValue) => {
  if (!dateValue) return "-";
  const { state, days } = getExpiryState(dateValue);
  if (state === "ok") {
    return dateValue;
  }
  if (state === "warning" || state === "expired") {
    return `${dateValue} (${formatExpiryLabel(state, days)})`;
  }
  return dateValue;
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

const refreshWorkerStatuses = () => {
  getWorkerCards().forEach((card) => {
    const passportInput = card.querySelector('[data-field="passport"]');
    const passportStatus = card.querySelector('[data-field-status="passport"]');
    if (passportInput && passportStatus && passportInput.value) {
      validatePassport(passportInput.value, passportStatus);
    }
    const cardExpiryInput = card.querySelector('[data-field="cardExpiryDate"]');
    const cardExpiryStatus = card.querySelector('[data-field-status="cardExpiry"]');
    if (cardExpiryInput && cardExpiryStatus) {
      updateExpiryStatusForInput(cardExpiryInput, cardExpiryStatus);
    }
    const visaExpiryInput = card.querySelector('[data-field="visaExpiryDate"]');
    const visaExpiryStatus = card.querySelector('[data-field-status="visaExpiry"]');
    if (visaExpiryInput && visaExpiryStatus) {
      updateExpiryStatusForInput(visaExpiryInput, visaExpiryStatus);
    }
    const expiryInput = card.querySelector('[data-field="expiry"]');
    const expiryStatus = card.querySelector('[data-field-status="expiry"]');
    if (expiryInput && expiryStatus) {
      updateExpiryStatusForInput(expiryInput, expiryStatus);
    }
  });
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
  saveFormDraft();
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
  const normalized = records
    .filter((record) => record && typeof record === "object")
    .map((record) => ({
      ...record,
      data: record.data && typeof record.data === "object" ? record.data : {},
    }));

  const used = new Set();
  let nextId = 1;
  const withSequentialIds = normalized.map((record) => {
    const parsed = Number.parseInt(String(record.formId || ""), 10);
    let formId = Number.isNaN(parsed) || parsed <= 0 ? "" : String(parsed);
    if (!formId || used.has(formId)) {
      while (used.has(String(nextId))) {
        nextId += 1;
      }
      formId = String(nextId);
    }
    used.add(formId);
    return { ...record, formId };
  });

  if (JSON.stringify(withSequentialIds) !== JSON.stringify(normalized)) {
    saveRecords(withSequentialIds);
  }

  return withSequentialIds;
};

const nextLocalFormId = (records) => {
  const maxId = (records || []).reduce((max, item) => {
    const value = Number.parseInt(String(item?.formId || ""), 10);
    return Number.isNaN(value) ? max : Math.max(max, value);
  }, 0);
  return String(maxId + 1);
};

const readDirtyRecordMap = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(DIRTY_RECORD_IDS_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    return {};
  }
};

const writeDirtyRecordMap = (map) => {
  localStorage.setItem(DIRTY_RECORD_IDS_KEY, JSON.stringify(map || {}));
};

const markRecordDirty = (formId) => {
  const id = String(formId || "").trim();
  if (!id) return;
  const map = readDirtyRecordMap();
  map[id] = Date.now();
  writeDirtyRecordMap(map);
};

const isRecordDirty = (formId) => {
  const id = String(formId || "").trim();
  if (!id) return false;
  const map = readDirtyRecordMap();
  const markedAt = Number(map[id] || 0);
  const isFresh = markedAt > 0 && Date.now() - markedAt < DIRTY_RECORD_TTL_MS;
  if (!isFresh && map[id]) {
    delete map[id];
    writeDirtyRecordMap(map);
  }
  return isFresh;
};

const clearRecordDirty = (formId) => {
  const id = String(formId || "").trim();
  if (!id) return;
  const map = readDirtyRecordMap();
  if (id in map) {
    delete map[id];
    writeDirtyRecordMap(map);
  }
};

const updateInputDatalist = (input, datalistId, values) => {
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
  const records = loadRecords();
  const workerNames = [];
  const employerNames = [];
  records.forEach((record) => {
    const info = record?.data?.personalInfo || {};
    if (info.fullName) workerNames.push(info.fullName);
    if (info.employerName) employerNames.push(info.employerName);
    const workers = normalizeWorkers(record?.data || {});
    workers.forEach((worker) => {
      if (worker.fullName) workerNames.push(worker.fullName);
    });
  });
  updateInputDatalist(workerFullName, "workerNameSuggestions", workerNames);
  updateInputDatalist(employerName, "employerNameSuggestions", employerNames);
};

const saveRecords = (records) => {
  localStorage.setItem("workerRecords", JSON.stringify(records));
};

const canUseServerSync = () => Boolean(API_BASE_URL) || window.location.protocol.startsWith("http");

const toTimestamp = (value) => {
  const time = Date.parse(String(value || ""));
  return Number.isNaN(time) ? 0 : time;
};

const mergeRecordsPreferLatest = (localRows, serverRows) => {
  const merged = new Map();

  (localRows || []).forEach((row) => {
    const id = String(row?.formId || "").trim();
    if (!id) return;
    merged.set(id, row);
  });

  (serverRows || []).forEach((row) => {
    const id = String(row?.formId || "").trim();
    if (!id) return;

    const existing = merged.get(id);
    const existingTs = toTimestamp(existing?.updatedAt);
    const incomingTs = toTimestamp(row?.updatedAt);

    if (existing && isRecordDirty(id)) {
      if (incomingTs <= existingTs) {
        return;
      }
      clearRecordDirty(id);
    }

    if (!existing || incomingTs > existingTs) {
      merged.set(id, row);
    }
  });

  return Array.from(merged.values()).sort((a, b) => toTimestamp(b.updatedAt) - toTimestamp(a.updatedAt));
};


const syncRecordsFromServer = async () => {
  if (!canUseServerSync()) {
    return;
  }
  try {
    const response = await fetch(RECORDS_API_URL, { method: "GET" });
    if (!response.ok) {
      return;
    }
    const records = await response.json();
    if (Array.isArray(records)) {
      const localRows = loadRecords();
      const merged = mergeRecordsPreferLatest(localRows, records);
      saveRecords(merged);
      refreshNameSuggestions();
      renderRecords();
      renderLatestRecordCard();
    }
  } catch (_error) {
    // fallback to localStorage-only mode when API is unavailable
  }
};

const upsertRecordToServer = async (record) => {
  if (!canUseServerSync()) {
    return null;
  }
  const incomingId = String(record?.formId || "").trim();
  try {
    const send = async (url, method) =>
      fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });

    let response = await send(
      incomingId ? `${RECORDS_API_URL}/${encodeURIComponent(incomingId)}` : RECORDS_API_URL,
      incomingId ? "PUT" : "POST"
    );

    if (!response.ok && incomingId && [404, 405, 501].includes(response.status)) {
      // backward compatibility: some deployments still expose upsert via POST only
      response = await send(RECORDS_API_URL, "POST");
    }

    if (!response.ok) return null;
    const savedRecord = await response.json();
    return savedRecord && typeof savedRecord === "object" ? savedRecord : null;
  } catch (_error) {
    return null;
  }
};

const fetchRecordByIdFromServer = async (formId) => {
  if (!formId || !canUseServerSync()) {
    return null;
  }
  try {
    const response = await fetch(`${RECORDS_API_URL}/${encodeURIComponent(formId)}`, { method: "GET" });
    if (!response.ok) {
      return null;
    }
    const record = await response.json();
    return record && typeof record === "object" ? { ...record, formId: String(record.formId || "") } : null;
  } catch (_error) {
    return null;
  }
};

const deleteRecordFromServer = async (formId) => {
  if (!canUseServerSync()) {
    return false;
  }
  try {
    const response = await fetch(`${RECORDS_API_URL}/${encodeURIComponent(formId)}`, { method: "DELETE" });
    return response.ok;
  } catch (_error) {
    return false;
  }
};

const clearRecordsFromServer = async () => {
  if (!canUseServerSync()) {
    return false;
  }
  try {
    const response = await fetch(RECORDS_API_URL, { method: "DELETE" });
    return response.ok;
  } catch (_error) {
    return false;
  }
};

const startServerSyncPolling = () => {
  if (!canUseServerSync()) {
    return;
  }
  setInterval(() => {
    syncRecordsFromServer();
  }, 15000);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      syncRecordsFromServer();
    }
  });
};


const buildFormId = () => {
  const records = loadRecords();
  const maxId = records.reduce((max, record) => {
    const value = Number.parseInt(String(record.formId || ""), 10);
    if (Number.isNaN(value)) {
      return max;
    }
    return Math.max(max, value);
  }, 0);
  return String(maxId + 1);
};

const formatDateTime = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString(currentLanguage === "th" ? "th-TH" : "en-US");
};

const toDateOnlyKey = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  date.setHours(0, 0, 0, 0);
  return date.toISOString().slice(0, 10);
};

const renderRecordsSummary = (records) => {
  if (!summaryTodayCount || !summaryYesterdayCount || !summaryMonthCount) {
    return;
  }
  const now = new Date();
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const month = today.getMonth();
  const year = today.getFullYear();

  const todayKey = toDateOnlyKey(today);
  const yesterdayKey = toDateOnlyKey(yesterday);

  let todayCount = 0;
  let yesterdayCount = 0;
  let monthCount = 0;

  records.forEach((record) => {
    const recordDate = new Date(record.updatedAt);
    if (Number.isNaN(recordDate.getTime())) {
      return;
    }
    const key = toDateOnlyKey(recordDate);
    if (key === todayKey) {
      todayCount += 1;
    }
    if (key === yesterdayKey) {
      yesterdayCount += 1;
    }
    if (recordDate.getFullYear() === year && recordDate.getMonth() === month) {
      monthCount += 1;
    }
  });

  summaryTodayCount.textContent = String(todayCount);
  summaryYesterdayCount.textContent = String(yesterdayCount);
  summaryMonthCount.textContent = String(monthCount);
};

const renderLatestRecordCard = () => {
  if (!latestRecordTitle || !latestRecordMeta) {
    return;
  }
  const records = loadRecords();
  if (!records.length) {
    latestRecordTitle.textContent = "-";
    latestRecordMeta.textContent = "ยังไม่มีข้อมูล";
    return;
  }
  const latest = [...records].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];
  latestRecordTitle.textContent = `${latest.formId} • ${latest.formTypeLabel || "-"}`;
  latestRecordMeta.textContent = `${formatDateTime(latest.updatedAt)} • ${
    latest.data?.personalInfo?.fullName || latest.data?.personalInfo?.employerName || latest.displayName || "-"
  }`;
};

const getFormTypeLabel = (value) => {
  const map = {
    changeEmployer: translations[currentLanguage].formTypeChangeEmployer,
    residence37_38: translations[currentLanguage].formTypeResidence,
    visaStamp: translations[currentLanguage].formTypeVisaStamp,
    ciReport: translations[currentLanguage].formTypeCiReport,
    workPermitRenewal: translations[currentLanguage].formTypeWorkPermitRenewal,
    mouLaos: translations[currentLanguage].formTypeMouLaos,
    mouLaosRenew: translations[currentLanguage].formTypeMouLaosRenew,
    noDocsRegister: translations[currentLanguage].formTypeNoDocsRegister,
    exitNotice: translations[currentLanguage].formTypeExit,
    other: translations[currentLanguage].formTypeOther,
  };
  return map[value] || value;
};

const buildFormTypeLabel = (formData) => {
  const baseLabel = getFormTypeLabel(formData.formType);
  if (formData.formType === "other" && formData.formTypeOtherDetail) {
    return `${baseLabel}: ${formData.formTypeOtherDetail}`;
  }
  return baseLabel;
};

const getCaseTypeLabel = (value) => {
  const map = {
    changeEmployer: translations[currentLanguage].caseTypeChangeEmployer,
    relocation: translations[currentLanguage].caseTypeRelocation,
    other: translations[currentLanguage].caseTypeOther,
  };
  return map[value] || value || "-";
};

const getCaseStatusLabel = (value) => {
  const map = {
    registered: translations[currentLanguage].statusRegistered,
    pending: translations[currentLanguage].statusPending,
    appointment: translations[currentLanguage].statusAppointment,
  };
  return map[value] || value || "-";
};

const getCaseStatusDisplay = (caseStatus = {}) => {
  const status = caseStatus.status || "";
  if (status === "appointment") {
    if (caseStatus.appointmentDate) {
      const waitingLabel = currentLanguage === "th" ? "รอวันนัด" : "Awaiting appointment";
      return `${waitingLabel} (${caseStatus.appointmentDate})`;
    }
    return getCaseStatusLabel(status);
  }
  return getCaseStatusLabel(status);
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

const getScheduleStatusLabel = (value) => {
  const map = {
    pendingAppointment: translations[currentLanguage].scheduleStatusPendingAppointment,
    scheduled: translations[currentLanguage].scheduleStatusScheduled,
    pendingReview: translations[currentLanguage].scheduleStatusPendingReview,
    completed: translations[currentLanguage].scheduleStatusCompleted,
  };
  return map[value] || value || "-";
};

const updateExpiryStatusForInput = (input, statusElement) => {
  if (!input || !statusElement) {
    return;
  }
  if (!input.value) {
    setStatus(statusElement, "");
    input.classList.remove("is-expired", "is-expiring");
    return;
  }
  const { state, days } = getExpiryState(input.value);
  input.classList.toggle("is-expired", state === "expired");
  input.classList.toggle("is-expiring", state === "warning");
  const statusType = state === "expired" ? "error" : state === "warning" ? "warn" : "ok";
  setStatus(statusElement, formatExpiryLabel(state, days), statusType);
};

const updateWorkerCardTitle = (card, index) => {
  const title = card.querySelector(".worker-card__title");
  if (!title) return;
  title.textContent = `${translations[currentLanguage].workerCardTitle} ${index + 1}`;
};

const getWorkerCards = () => (workerList ? Array.from(workerList.querySelectorAll(".worker-card")) : []);

const normalizeNationality = (value = "") => {
  const trimmed = value.trim().toLowerCase();
  const map = {
    "เมียนมา": "MMR",
    "พม่า": "MMR",
    "myanmar": "MMR",
    "mm": "MMR",
    "mmr": "MMR",
    "ลาว": "LAO",
    "lao": "LAO",
    "la": "LAO",
    "กัมพูชา": "KHM",
    "เขมร": "KHM",
    "cambodia": "KHM",
    "kh": "KHM",
    "khm": "KHM",
    "เวียดนาม": "VNM",
    "vietnam": "VNM",
    "vn": "VNM",
    "vnm": "VNM",
  };
  if (!trimmed) return "";
  return map[trimmed] || value.toUpperCase();
};

const hasWorkerValue = (worker) =>
  Object.values(worker).some((value) => (Array.isArray(value) ? value.length > 0 : value));

const extractWorkerData = (card) => {
  const getValue = (field) => {
    const input = card.querySelector(`[data-field="${field}"]`);
    if (!input) return "";
    return input.value?.trim?.() || input.value || "";
  };
  const getChecked = (field) => {
    const input = card.querySelector(`[data-field="${field}"]`);
    return Boolean(input?.checked);
  };
  return {
    fullName: getValue("fullName"),
    passportType: getValue("passportType") || "ci",
    passport: getValue("passport"),
    workerId: getValue("workerId"),
    scheduleStatus: getValue("scheduleStatus") || "pendingAppointment",
    scheduleLocation: getValue("scheduleLocation"),
    healthRegistered: getChecked("healthRegistered"),
    healthChecked: getChecked("healthChecked"),
    healthIdentity: getChecked("healthIdentity"),
    healthPending: getChecked("healthPending"),
    healthCheckDate: getValue("healthCheckDate"),
    healthPendingDate: getValue("healthPendingDate"),
    ciNumber: getValue("ciNumber"),
    permitType: getValue("permitType") || "pink",
    permitNo: getValue("permitNo"),
    nationality: normalizeNationality(getValue("nationality")),
    cardIssueDate: getValue("cardIssueDate"),
    cardExpiryDate: getValue("cardExpiryDate"),
    dob: getValue("dob"),
    gender: getValue("gender") || translations[currentLanguage].genderMale,
    visaNumber: getValue("visaNumber"),
    visaIssueDate: getValue("visaIssueDate"),
    visaExpiryDate: getValue("visaExpiryDate"),
    expiry: getValue("expiry"),
  };
};

const normalizeWorkers = (data) => {
  if (Array.isArray(data.workers) && data.workers.length) {
    return data.workers;
  }
  const legacyWorker = {
    fullName: data.fullName || "",
    passportType: data.passportType || "ci",
    passport: data.passport || "",
    workerId: data.workerId || "",
    scheduleStatus: data.scheduleStatus || "pendingAppointment",
    scheduleLocation: data.scheduleLocation || "",
    healthRegistered: Boolean(data.healthRegistered),
    healthChecked: Boolean(data.healthChecked),
    healthIdentity: Boolean(data.healthIdentity),
    healthPending: Boolean(data.healthPending),
    healthCheckDate: data.healthCheckDate || "",
    healthPendingDate: data.healthPendingDate || "",
    ciNumber: data.ciNumber || "",
    permitType: data.permitType || "pink",
    permitNo: data.permitNo || "",
    nationality: normalizeNationality(data.nationality || ""),
    cardIssueDate: data.cardIssueDate || "",
    cardExpiryDate: data.cardExpiryDate || "",
    dob: data.dob || "",
    gender: data.gender || "",
    visaNumber: data.visaNumber || "",
    visaIssueDate: data.visaIssueDate || "",
    visaExpiryDate: data.visaExpiryDate || "",
    expiry: data.expiry || "",
  };
  return hasWorkerValue(legacyWorker) ? [legacyWorker] : [];
};

const createWorkerCard = (data = {}) => {
  if (!workerTemplate) return null;
  const fragment = workerTemplate.content.firstElementChild.cloneNode(true);
  const setValue = (field, value) => {
    const input = fragment.querySelector(`[data-field="${field}"]`);
    if (!input) return;
    if (input.tagName === "SELECT") {
      input.value = value || input.value;
    } else {
      input.value = value || "";
    }
  };
  const setChecked = (field, value) => {
    const input = fragment.querySelector(`[data-field="${field}"]`);
    if (input) {
      input.checked = Boolean(value);
    }
  };
  setValue("fullName", data.fullName);
  setValue("passportType", data.passportType);
  setValue("passport", data.passport);
  setValue("workerId", data.workerId);
  setValue("scheduleStatus", data.scheduleStatus);
  setValue("scheduleLocation", data.scheduleLocation);
  setChecked("healthRegistered", data.healthRegistered);
  setChecked("healthChecked", data.healthChecked);
  setChecked("healthIdentity", data.healthIdentity);
  setChecked("healthPending", data.healthPending);
  setValue("healthCheckDate", data.healthCheckDate);
  setValue("healthPendingDate", data.healthPendingDate);
  setValue("ciNumber", data.ciNumber);
  setValue("permitType", data.permitType);
  setValue("permitNo", data.permitNo);
  setValue("nationality", data.nationality);
  setValue("cardIssueDate", data.cardIssueDate);
  setValue("cardExpiryDate", data.cardExpiryDate);
  setValue("dob", data.dob);
  setValue("gender", data.gender);
  setValue("visaNumber", data.visaNumber);
  setValue("visaIssueDate", data.visaIssueDate);
  setValue("visaExpiryDate", data.visaExpiryDate);
  setValue("expiry", data.expiry);
  const removeButton = fragment.querySelector(".remove-worker");
  if (removeButton) {
    removeButton.addEventListener("click", () => {
      fragment.remove();
      ensureWorkerCards();
      getWorkerCards().forEach(updateWorkerCardTitle);
      refreshWorkerStatuses();
      saveFormDraft();
    });
  }
  const passportInput = fragment.querySelector('[data-field="passport"]');
  const passportStatus = fragment.querySelector('[data-field-status="passport"]');
  if (passportInput && passportStatus) {
    passportInput.addEventListener("input", () => validatePassport(passportInput.value, passportStatus));
  }
  const cardExpiryInput = fragment.querySelector('[data-field="cardExpiryDate"]');
  const cardExpiryStatus = fragment.querySelector('[data-field-status="cardExpiry"]');
  if (cardExpiryInput && cardExpiryStatus) {
    cardExpiryInput.addEventListener("change", () => updateExpiryStatusForInput(cardExpiryInput, cardExpiryStatus));
    updateExpiryStatusForInput(cardExpiryInput, cardExpiryStatus);
  }
  const visaExpiryInput = fragment.querySelector('[data-field="visaExpiryDate"]');
  const visaExpiryStatus = fragment.querySelector('[data-field-status="visaExpiry"]');
  if (visaExpiryInput && visaExpiryStatus) {
    visaExpiryInput.addEventListener("change", () => updateExpiryStatusForInput(visaExpiryInput, visaExpiryStatus));
    updateExpiryStatusForInput(visaExpiryInput, visaExpiryStatus);
  }
  const expiryInput = fragment.querySelector('[data-field="expiry"]');
  const expiryStatus = fragment.querySelector('[data-field-status="expiry"]');
  if (expiryInput && expiryStatus) {
    expiryInput.addEventListener("change", () => updateExpiryStatusForInput(expiryInput, expiryStatus));
    updateExpiryStatusForInput(expiryInput, expiryStatus);
  }
  return fragment;
};

const ensureWorkerCards = () => {
  if (!workerList || !workerTemplate) return;
  if (getWorkerCards().length === 0) {
    const card = createWorkerCard();
    if (card) {
      workerList.appendChild(card);
    }
  }
  getWorkerCards().forEach(updateWorkerCardTitle);
};

const getWorkerSearchText = (workers) =>
  workers
    .map((worker) =>
      [
        worker.fullName,
        worker.passport,
        worker.workerId,
        worker.ciNumber,
        worker.visaNumber,
        worker.permitNo,
        worker.nationality,
      ]
        .filter(Boolean)
        .join(" ")
    )
    .join(" ");

const getAggregatedExpiryState = (workers, field) => {
  let warningDays = null;
  for (const worker of workers) {
    const value = worker[field];
    if (!value) continue;
    const { state, days } = getExpiryState(value);
    if (state === "expired") {
      return { state: "expired", days };
    }
    if (state === "warning") {
      warningDays = warningDays === null ? days : Math.min(warningDays, days);
    }
  }
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
  const clearedPrimaryWorkerName = (workerFullName?.value || "").trim() === "";
  if (clearedPrimaryWorkerName && workers.length) {
    workers[0] = { ...workers[0], fullName: "" };
  }
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
      personalVisaExpiryDate: personalVisaExpiryDate?.value || "",
      businessType: getBusinessTypeValue(),
      employerName: employerName?.value?.trim() || "",
      employerEmail: employerEmail?.value?.trim() || "",
      employerAddress: employerAddress?.value?.trim() || "",
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
      passCopy: docPassCopy?.checked || false,
      visaCopy: docVisaCopy?.checked || false,
      workPermitCopy: docWorkPermitCopy?.checked || false,
      documentJobType: documentJobType?.value?.trim() || "",
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
  const hasPendingEdit = Boolean(getEditIdFromQuery() || String(localStorage.getItem(EDIT_KEY) || "").trim());
  if (hasPendingEdit) return;
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

const initTheme = () => {
  document.body.classList.remove("theme-dark");
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
    const workers = normalizeWorkers(record.data);
    const personalInfo = record.data.personalInfo || {};
    const searchable = [
      record.formId,
      record.formTypeLabel,
      record.displayName,
      record.data.company,
      record.data.employerId,
      personalInfo.fullName,
      personalInfo.employerName,
      personalInfo.documentSender,
      personalInfo.documentReceiver,
      personalInfo.documentReturnDate,
      record.data.recordedBy,
      record.data.formTypeOtherDetail,
      getWorkerSearchText(workers),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return matchesFilter && searchable.includes(query);
  });
  const scoped = filtered;
  latestRenderedRecords = scoped;
  renderRecordsSummary(scoped);

  recordsList.innerHTML = "";
  if (!records.length) {
    recordsStatus.textContent = translations[currentLanguage].recordsStatus;
  } else if (!scoped.length) {
    recordsStatus.textContent = translations[currentLanguage].recordSearchEmpty;
  } else {
    recordsStatus.textContent = `${scoped.length} ${translations[currentLanguage].recordsCount}`;
  }

  scoped.forEach((record) => {
    const row = document.createElement("tr");
    const personalInfo = record.data.personalInfo || {};
    const workers = normalizeWorkers(record.data);
    const workerName = personalInfo.fullName || workers[0]?.fullName || "-";
    const employerLabel = personalInfo.employerName || record.data.company || record.data.employerId || "-";
    const formIdCell = document.createElement("td");
    formIdCell.textContent = record.formId;
    const formTypeCell = document.createElement("td");
    formTypeCell.textContent = record.formTypeLabel;
    const employerCell = document.createElement("td");
    employerCell.textContent = employerLabel;
    const workerCell = document.createElement("td");
    workerCell.textContent = workerName;
    const recordedByCell = document.createElement("td");
    recordedByCell.textContent = record.data.recordedBy || "-";
    const updatedCell = document.createElement("td");
    updatedCell.textContent = formatDateTime(record.updatedAt);
    const statusCell = document.createElement("td");
    statusCell.textContent = getCaseStatusDisplay(record.data.caseStatus || {});
    const actionsCell = document.createElement("td");
    const actionsWrapper = document.createElement("div");
    actionsWrapper.className = "table-actions";
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "secondary";
    editButton.textContent = translations[currentLanguage].editButton;
    editButton.addEventListener("click", () => {
      const followupPageMap = {
        report90: "report90.html",
        visarun: "visarun.html",
      };
      const targetPage = followupPageMap[record.formType] || "form.html";
      if (targetPage === "form.html") {
        localStorage.setItem(EDIT_KEY, String(record.formId || ""));
      }
      showLoader();
      if (targetPage === "form.html") {
        window.location.href = `${targetPage}?editId=${encodeURIComponent(String(record.formId || ""))}`;
      } else {
        window.location.href = `${targetPage}?editId=${encodeURIComponent(record.formId || "")}`;
      }
    });
    const verifyButton = document.createElement("button");
    verifyButton.type = "button";
    verifyButton.className = "secondary";
    verifyButton.textContent = translations[currentLanguage].verifyButton;
    verifyButton.addEventListener("click", () => openRecordModal(record));
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger";
    deleteButton.textContent = translations[currentLanguage].deleteButton;
    deleteButton.addEventListener("click", async () => {
      const shouldDelete = window.confirm(translations[currentLanguage].confirmDeleteRecord);
      if (!shouldDelete) return;
      const deleted = await deleteRecordFromServer(record.formId);
      if (!deleted) {
        setStatus(recordsStatus, "ไม่สามารถลบข้อมูลจากเซิร์ฟเวอร์ได้", "error");
        return;
      }
      const records = loadRecords();
      const nextRecords = records.filter((item) => item.formId !== record.formId);
      saveRecords(nextRecords);
      renderRecords();
      renderLatestRecordCard();
    });
    actionsWrapper.appendChild(editButton);
    actionsWrapper.appendChild(verifyButton);
    actionsWrapper.appendChild(deleteButton);
    actionsCell.appendChild(actionsWrapper);
    row.appendChild(formIdCell);
    row.appendChild(formTypeCell);
    row.appendChild(employerCell);
    row.appendChild(workerCell);
    row.appendChild(recordedByCell);
    row.appendChild(updatedCell);
    row.appendChild(statusCell);
    row.appendChild(actionsCell);
    recordsList.appendChild(row);
  });
};

const toCsvValue = (value) => {
  const text = String(value ?? "").replace(/\r?\n|\r/g, " ").trim();
  return `"${text.replace(/"/g, '""')}"`;
};

const exportRecordsToCsv = () => {
  const rows = latestRenderedRecords.length ? latestRenderedRecords : loadRecords();
  if (!rows.length) {
    setStatus(recordsStatus, translations[currentLanguage].recordsStatus, "warn");
    return;
  }
  const headers = [
    translations[currentLanguage].recordsTableFormId,
    translations[currentLanguage].recordsTableFormType,
    translations[currentLanguage].recordsTableEmployer,
    translations[currentLanguage].recordsTableWorker,
    translations[currentLanguage].workerNationalityLabel,
    "Gender",
    "Personal Visa Expiry",
    translations[currentLanguage].recordsTableRecordedBy,
    translations[currentLanguage].recordsTableUpdated,
    translations[currentLanguage].recordsTableStatus,
    "Followup Type",
    "Followup Start Date",
    "Followup Next Date",
    "Followup End Date",
    "ส่งเล่มไป ตม. (ติ๊ก)",
    "ส่งเล่มคืน (ติ๊ก)",
    "ส่งเล่มไป ตม. (เล่ม)",
    "ส่งเล่มคืน (เล่ม)",
    "ปรับ 90 เกิน",
    "Visa เกิน",
    "ผ.60",
    "ผ.30",
    "หมายเหตุเอกสาร",
    "ประเภทงาน",
    "เมลนายจ้าง",
    "ที่อยู่นายจ้าง",
    "Payment Status",
  ];
  const lines = [headers.map(toCsvValue).join(",")];
  rows.forEach((record) => {
    const data = record.data || {};
    const personalInfo = data.personalInfo || {};
    const workers = normalizeWorkers(data);
    const workerName = personalInfo.fullName || workers[0]?.fullName || "-";
    const employerLabel = personalInfo.employerName || data.company || data.employerId || "-";
    const followup = data.followup || {};
    const cols = [
      record.formId,
      record.formTypeLabel,
      employerLabel,
      workerName,
      personalInfo.nationality || "-",
      personalInfo.gender || "-",
      personalInfo.personalVisaExpiryDate || "-",
      data.recordedBy || "-",
      formatDateTime(record.updatedAt),
      getCaseStatusDisplay(data.caseStatus || {}),
      data.followupType || "-",
      followup.startDate || "-",
      followup.nextDate || "-",
      followup.endDate || "-",
      followup.sentImmigration ? "yes" : "no",
      followup.returnBook ? "yes" : "no",
      followup.sentBookCount ?? "-",
      followup.returnBookCount ?? "-",
      followup.overdueFine ? "yes" : "no",
      followup.visaOverdue ? "yes" : "no",
      followup.p60 ? "yes" : "no",
      followup.p30 ? "yes" : "no",
      data.documents?.note || "-",
      data.documents?.documentJobType || "-",
      personalInfo.employerEmail || "-",
      personalInfo.employerAddress || "-",
      data.paymentStatus || "-",
    ];
    lines.push(cols.map(toCsvValue).join(","));
  });
  const csv = `\uFEFF${lines.join("\n")}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  const stamp = new Date().toISOString().slice(0, 10);
  anchor.download = `records-detailed-${stamp}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
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
    const table = document.createElement("table");
    table.className = "result-grid-table";
    const body = document.createElement("tbody");
    const addRow = (label, value) => {
      const row = document.createElement("tr");
      const th = document.createElement("th");
      const td = document.createElement("td");
      th.textContent = label;
      td.textContent = value || "-";
      row.appendChild(th);
      row.appendChild(td);
      body.appendChild(row);
    };
    const personalInfo = record.data.personalInfo || {};
    const documents = record.data.documents || {};
    const caseStatus = record.data.caseStatus || {};
    const documentParts = [];
    if (documents.workPermit) documentParts.push(translations[currentLanguage].documentWorkPermit);
    if (documents.receipt) documentParts.push(translations[currentLanguage].documentReceipt);
    if (documents.requestForm) documentParts.push(translations[currentLanguage].documentRequestForm);
    if (documents.nameList) documentParts.push(translations[currentLanguage].documentNameList);
    if (documents.passPage) documentParts.push(translations[currentLanguage].documentPassPage);
    if (documents.visaPage) documentParts.push(translations[currentLanguage].documentVisaPage);
    if (documents.passCopy) documentParts.push("หน้า Pass (สำเนา)");
    if (documents.visaCopy) documentParts.push("หน้า Visa (สำเนา)");
    if (documents.workPermitCopy) documentParts.push("ใบอนุญาตทำงาน (สำเนา)");
    if (documents.healthCard) documentParts.push(translations[currentLanguage].documentHealthCard);
    if (documents.exitNotice) documentParts.push(translations[currentLanguage].documentExitNotice);
    if (documents.houseReg) documentParts.push(translations[currentLanguage].documentHouseReg);
    if (documents.employerIdCard) documentParts.push(translations[currentLanguage].documentEmployerIdCard);
    if (documents.companyCert) documentParts.push(translations[currentLanguage].documentCompanyCert);
    addRow(translations[currentLanguage].recordFormId, record.formId);
    addRow(translations[currentLanguage].recordFormTypeLabel, record.formTypeLabel);
    addRow(
      translations[currentLanguage].recordEmployerLabel,
      record.data.personalInfo?.employerName || record.data.company || record.data.employerId || "-"
    );
    addRow(translations[currentLanguage].statusTitle, getCaseStatusDisplay(record.data.caseStatus || {}));
    addRow(
      translations[currentLanguage].paymentStatusLabel,
      record.data.paymentStatus === "paid" ? translations[currentLanguage].paymentPaid : translations[currentLanguage].paymentPending
    );
    addRow(translations[currentLanguage].paymentDateLabel, record.data.paymentDate || "-");
    addRow(translations[currentLanguage].recordedByLabel, record.data.recordedBy || "-");
    addRow(translations[currentLanguage].renewalTypeLabel, getRenewalTypeLabel(record.data.renewalType));
    addRow(translations[currentLanguage].renewalStatusLabel, getRenewalStatusLabel(record.data.renewalStatus));
    if (record.data.caseType) {
      addRow(translations[currentLanguage].recordCaseTypeLabel, getCaseTypeLabel(record.data.caseType));
    }
    if (personalInfo.fullName) {
      addRow(translations[currentLanguage].workerFullNameLabel, personalInfo.fullName);
    }
    if (personalInfo.gender) {
      const genderMap = {
        male: translations[currentLanguage].workerGenderMale,
        female: translations[currentLanguage].workerGenderFemale,
        other: translations[currentLanguage].workerGenderOther,
      };
      addRow(translations[currentLanguage].workerGenderLabel, genderMap[personalInfo.gender] || personalInfo.gender);
    }
    if (personalInfo.nationality) {
      addRow(translations[currentLanguage].workerNationalityLabel, personalInfo.nationality);
    }
    if (personalInfo.email) {
      addRow("Email", personalInfo.email);
    }
    if (personalInfo.alienId) {
      addRow("เลขประจำตัวต่างด้าว", personalInfo.alienId);
    }
    if (personalInfo.passNumber) {
      addRow("เลข Pass", personalInfo.passNumber);
    }
    if (personalInfo.personalVisaExpiryDate) {
      addRow("วันหมดอายุ Visa", personalInfo.personalVisaExpiryDate);
    }
    if (personalInfo.businessType) {
      addRow(translations[currentLanguage].businessTypeLabel, personalInfo.businessType);
    }
    if (personalInfo.employerName) {
      addRow(translations[currentLanguage].employerNameLabel, personalInfo.employerName);
    }
    if (personalInfo.employerEmail) {
      addRow("เมลนายจ้าง", personalInfo.employerEmail);
    }
    if (personalInfo.employerAddress) {
      addRow("ที่อยู่นายจ้าง", personalInfo.employerAddress);
    }
    if (personalInfo.documentSender) {
      addRow(translations[currentLanguage].documentSenderLabel, personalInfo.documentSender);
    }
    if (personalInfo.documentSentDate) {
      addRow(translations[currentLanguage].documentSentDateLabel, personalInfo.documentSentDate);
    }
    if (personalInfo.documentReceiver) {
      addRow(translations[currentLanguage].documentReceiverLabel, personalInfo.documentReceiver);
    }
    if (personalInfo.documentReceivedDate) {
      addRow(translations[currentLanguage].documentReceivedDateLabel, personalInfo.documentReceivedDate);
    }
    if (personalInfo.documentReturnDate) {
      addRow(translations[currentLanguage].documentReturnDateLabel, personalInfo.documentReturnDate);
    }
    if (documentParts.length) {
      addRow(translations[currentLanguage].documentsTitle, documentParts.join(", "));
    }
    if (documents.note) {
      addRow(translations[currentLanguage].documentsNoteLabel, documents.note);
    }
    if (documents.documentJobType) {
      addRow("ประเภทงาน", documents.documentJobType);
    }
    if (caseStatus.status) {
      addRow(translations[currentLanguage].statusTitle, getCaseStatusLabel(caseStatus.status));
    }
    if (caseStatus.appointmentDate) {
      addRow(translations[currentLanguage].statusAppointmentDateLabel, caseStatus.appointmentDate);
    }
    table.appendChild(body);
    recordModalBody.appendChild(title);
    recordModalBody.appendChild(table);
    if (record.data.notifications?.length || record.data.supportingDocs?.length || record.data.receivedDocs?.length || record.data.requiredRenewalDocs?.length) {
      const docTitle = document.createElement("h5");
      docTitle.textContent = translations[currentLanguage].receivedDocsLabel;
      const docList = document.createElement("ul");
      const notificationLabels = {
        residence: translations[currentLanguage].notificationResidence,
        exit: translations[currentLanguage].notificationExit,
        employerOverdue: translations[currentLanguage].notificationEmployerOverdue,
        laosMouVisaRun: translations[currentLanguage].notificationLaosMouVisaRun,
        laosMouTwoYears: translations[currentLanguage].notificationLaosMouTwoYears,
        renew90Days: translations[currentLanguage].notificationRenew90Days,
        renewOneYearCabinet: translations[currentLanguage].notificationRenewOneYearCabinet,
        renewTwoYearCabinetLaos: translations[currentLanguage].notificationRenewTwoYearCabinetLaos,
      };
      const supportingLabels = {
        employerCard: translations[currentLanguage].supportingDocEmployerCard,
        card50: translations[currentLanguage].supportingDocCard50,
        receipt: translations[currentLanguage].supportingDocReceipt,
      };
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
      if (record.data.notifications?.length) {
        const notificationItem = document.createElement("li");
        const notificationText = record.data.notifications
          .map((item) => notificationLabels[item] || item)
          .join(", ");
        notificationItem.textContent = `${translations[currentLanguage].notificationTitle}: ${notificationText}`;
        docList.appendChild(notificationItem);
      }
      if (record.data.supportingDocs?.length) {
        const supportingItem = document.createElement("li");
        const supportingText = record.data.supportingDocs
          .map((item) => supportingLabels[item] || item)
          .join(", ");
        supportingItem.textContent = `${translations[currentLanguage].supportingDocsTitle}: ${supportingText}`;
        docList.appendChild(supportingItem);
      }
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
  const normalizedQuery = query.toLowerCase().trim();
  const records = loadRecords().filter((record) => {
    const employer = `${record.data.company || ""} ${record.data.employerId || ""} ${record.data.personalInfo?.employerName || ""}`
      .toLowerCase()
      .trim();
    return employer.includes(normalizedQuery);
  });
  if (!records.length) {
    const message = document.createElement("p");
    message.textContent = translations[currentLanguage].recordNotFound;
    recordModalBody.appendChild(message);
  } else {
    const list = document.createElement("ul");
    records.forEach((record) => {
      const workers = normalizeWorkers(record.data);
      workers.forEach((worker) => {
        const item = document.createElement("li");
        const name = worker.fullName || "-";
        const workerIdValue = worker.workerId || "-";
        const expiryLabel = formatExpiryDisplay(worker.cardExpiryDate);
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

const buildRecordSearchText = (record) => {
  const personalInfo = record.data.personalInfo || {};
  const documents = record.data.documents || {};
  const caseStatus = record.data.caseStatus || {};
  const workers = normalizeWorkers(record.data);
  const workerText = workers
    .map((worker) =>
      [
        worker.fullName,
        worker.passport,
        worker.workerId,
        worker.ciNumber,
        worker.visaNumber,
        worker.permitNo,
        worker.scheduleStatus,
        worker.scheduleLocation,
      ]
        .filter(Boolean)
        .join(" ")
    )
    .join(" ");

  return [
    record.formId,
    record.formType,
    record.formTypeLabel,
    record.displayName,
    record.updatedAt,
    record.data.company,
    record.data.caseType,
    record.data.position,
    record.data.workSite,
    record.data.startDate,
    record.data.employerId,
    record.data.recordedBy,
    record.data.formTypeOtherDetail,
    record.data.renewalType,
    record.data.renewalStatus,
    record.data.paymentStatus,
    record.data.paymentDate,
    record.data.paymentNotes,
    personalInfo.fullName,
    personalInfo.gender,
    personalInfo.nationality,
    personalInfo.email,
    personalInfo.code,
    personalInfo.alienId,
    personalInfo.workPermitExpiry,
    personalInfo.passNumber,
    personalInfo.passIssueDate,
    personalInfo.passExpiryDate,
    personalInfo.personalVisaExpiryDate,
    personalInfo.businessType,
    personalInfo.employerName,
    personalInfo.employerEmail,
    personalInfo.employerAddress,
    personalInfo.documentSender,
    personalInfo.documentSentDate,
    personalInfo.documentReceiver,
    personalInfo.documentReceivedDate,
    personalInfo.documentReturnDate,
    caseStatus.status,
    caseStatus.appointmentDate,
    caseStatus.appointmentNote,
    documents.documentJobType,
    documents.note,
    workerText,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
};

const findRecordsByQuery = (query) => {
  if (!query) return [];
  const records = loadRecords();
  const normalized = query.trim().toLowerCase();
  return records.filter((record) => buildRecordSearchText(record).includes(normalized));
};

const findRecordByQuery = (query) => {
  if (!query) return null;
  return findRecordsByQuery(query)[0] || null;
};

const openGeneralSearchResultsModal = (records, query) => {
  recordModalTitle.textContent = `${translations[currentLanguage].recordModalTitle} (${records.length})`;
  recordModalBody.innerHTML = "";
  if (!records.length) {
    const message = document.createElement("p");
    message.textContent = translations[currentLanguage].recordNotFound;
    recordModalBody.appendChild(message);
  } else {
    const wrapper = document.createElement("div");
    wrapper.className = "records-table-wrapper";
    const table = document.createElement("table");
    table.className = "records-table";
    const thead = document.createElement("thead");
    thead.innerHTML = `<tr>
      <th>${translations[currentLanguage].recordsTableFormId}</th>
      <th>${translations[currentLanguage].recordsTableFormType}</th>
      <th>${translations[currentLanguage].recordsTableEmployer}</th>
      <th>${translations[currentLanguage].recordsTableWorker}</th>
      <th>${translations[currentLanguage].recordsTableStatus}</th>
      <th>${translations[currentLanguage].recordsTableActions}</th>
    </tr>`;
    const tbody = document.createElement("tbody");
    records.forEach((record) => {
      const personalInfo = record.data.personalInfo || {};
      const workers = normalizeWorkers(record.data);
      const tr = document.createElement("tr");
      const employer = personalInfo.employerName || record.data.company || record.data.employerId || "-";
      const workerName = personalInfo.fullName || workers[0]?.fullName || "-";
      tr.innerHTML = `<td>${record.formId || "-"}</td>
        <td>${record.formTypeLabel || "-"}</td>
        <td>${employer}</td>
        <td>${workerName}</td>
        <td>${getCaseStatusDisplay(record.data.caseStatus || {})}</td>`;
      const actionTd = document.createElement("td");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "secondary";
      button.textContent = translations[currentLanguage].verifyButton;
      button.addEventListener("click", () => openRecordModal(record));
      actionTd.appendChild(button);
      tr.appendChild(actionTd);
      tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    wrapper.appendChild(table);
    recordModalBody.appendChild(wrapper);
  }
  setStatus(generalSearchStatus, `${translations[currentLanguage].recordsCount}: ${records.length} (${query})`, "ok");
  recordModal.classList.add("is-open");
  recordModal.setAttribute("aria-hidden", "false");
};

const saveRecord = async (status = "draft") => {
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
  const submittingEditId = String(currentEditId || getEditIdFromQuery() || localStorage.getItem(EDIT_KEY) || "").trim();
  if (submittingEditId) {
    currentEditId = submittingEditId;
  }
  const formId = submittingEditId;
  const workerNames = (formData.workers || []).map((worker) => worker.fullName).filter(Boolean);
  const workerCountLabel = workerNames.length
    ? ` (${workerNames.length} ${translations[currentLanguage].workerCountSuffix})`
    : "";
  const displayName =
    formData.personalInfo?.employerName?.trim()
      ? `${formData.personalInfo.employerName}${workerCountLabel}`
      : formData.personalInfo?.fullName || workerNames[0] || formData.employerId || formId;
  const recordPayload = {
    ...(formId ? { formId } : {}),
    formType: formData.formType,
    formTypeLabel: buildFormTypeLabel(formData),
    displayName,
    updatedAt: new Date().toISOString(),
    status,
    data: formData,
  };

  const savedServerRecord = await upsertRecordToServer(recordPayload);
  if (!savedServerRecord) {
    const fallbackId = formId || nextLocalFormId(records);
    const fallbackRecord = {
      ...recordPayload,
      formId: fallbackId,
      updatedAt: new Date().toISOString(),
    };
    const existingIndex = records.findIndex((record) => String(record.formId || "") === String(fallbackId));
    if (existingIndex >= 0) {
      records.splice(existingIndex, 1, fallbackRecord);
    } else {
      records.unshift(fallbackRecord);
    }
    saveRecords(records);
    markRecordDirty(fallbackId);
    refreshNameSuggestions();
    localStorage.removeItem(FORM_DRAFT_KEY);
    currentEditId = fallbackId;
    localStorage.removeItem(EDIT_KEY);
    renderRecords();
    renderLatestRecordCard();
    hideLoader();
    setStatus(formSaveStatus, `บันทึกแบบออฟไลน์สำเร็จ: ${fallbackId} (เซิร์ฟเวอร์ไม่พร้อมใช้งาน)`, "warn");
    if (workerForm) {
      localStorage.setItem(RECORD_SEARCH_KEY, fallbackId);
      window.location.href = "records.html";
    }
    return;
  }

  const finalRecord = {
    ...savedServerRecord,
    ...recordPayload,
    formId: String(savedServerRecord.formId || formId || ""),
  };

  if (formId && String(finalRecord.formId || "") !== String(formId)) {
    // Some legacy POST-upsert deployments may return a new id while user is editing an existing row.
    // Force local cache to keep the edited record id so records.html always shows updated content on that row.
    finalRecord.formId = String(formId);
  }

  const existingIndex = records.findIndex((record) => String(record.formId || "") === String(finalRecord.formId || ""));
  if (existingIndex >= 0) {
    records.splice(existingIndex, 1, finalRecord);
  } else {
    records.unshift(finalRecord);
  }

  saveRecords(records);
  markRecordDirty(finalRecord.formId);
  refreshNameSuggestions();
  localStorage.removeItem(FORM_DRAFT_KEY);
  setStatus(formSaveStatus, `${translations[currentLanguage].saveDraftSuccess}: ${finalRecord.formId}`, "ok");
  currentEditId = finalRecord.formId;
  localStorage.removeItem(EDIT_KEY);
  renderRecords();
  renderLatestRecordCard();
if (workerForm) {
    localStorage.setItem(RECORD_SEARCH_KEY, finalRecord.formId);
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
  if (personalVisaExpiryDate) personalVisaExpiryDate.value = record.data.personalInfo?.personalVisaExpiryDate || "";
  if (businessType) {
    const savedBusinessType = record.data.personalInfo?.businessType || "";
    const hasOption = Array.from(businessType.options || []).some((option) => option.value === savedBusinessType);
    businessType.value = hasOption ? savedBusinessType : savedBusinessType ? "other" : "";
    if (businessTypeCustom) {
      businessTypeCustom.value = hasOption ? "" : savedBusinessType;
    }
  }
  if (employerName) employerName.value = record.data.personalInfo?.employerName || "";
  if (employerEmail) employerEmail.value = record.data.personalInfo?.employerEmail || "";
  if (employerAddress) employerAddress.value = record.data.personalInfo?.employerAddress || "";
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
  if (docPassCopy) docPassCopy.checked = record.data.documents?.passCopy || false;
  if (docVisaCopy) docVisaCopy.checked = record.data.documents?.visaCopy || false;
  if (docWorkPermitCopy) docWorkPermitCopy.checked = record.data.documents?.workPermitCopy || false;
  if (documentJobType) documentJobType.value = record.data.documents?.documentJobType || "";
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
  if (receivedPaymentSlip) receivedPaymentSlip.checked = record.data.receivedDocs?.includes("paymentSlip") || false;
  if (notificationItems?.length) {
    notificationItems.forEach((checkbox) => {
      checkbox.checked = record.data.notifications?.includes(checkbox.value) || false;
    });
  }
  if (supportingDocs?.length) {
    supportingDocs.forEach((checkbox) => {
      checkbox.checked = record.data.supportingDocs?.includes(checkbox.value) || false;
    });
  }
  if (requiredRenewalDocs?.length) {
    requiredRenewalDocs.forEach((checkbox) => {
      checkbox.checked = record.data.requiredRenewalDocs?.includes(checkbox.value) || false;
    });
  }
  if (receivedDocsNote) receivedDocsNote.value = record.data.receivedDocsNote || "";
  if (renewalDocsNote) renewalDocsNote.value = record.data.renewalDocsNote || "";
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
  updateBusinessTypeCustomVisibility();
};

const updateFormStepVisibility = () => {
  if (!formSteps?.length) return;
  formSteps.forEach((step) => {
    const stepNo = Number(step.dataset.step || 1);
    step.classList.toggle("is-hidden", stepNo !== currentFormStep);
  });
};

updateFormStepVisibility();

if (nextStepLink) {
  nextStepLink.addEventListener("click", () => {
    saveFormDraft();
    showLoader();
  });
} else if (nextStepButton) {
  nextStepButton.addEventListener("click", () => {
    saveFormDraft();
    if (!isNextFormPage && workerForm) {
      showLoader();
      setTimeout(() => {
        window.location.href = "nextform.html";
      }, 0);
      return;
    }
    currentFormStep = 2;
    updateFormStepVisibility();
  });
}
if (prevStepButton) {
  prevStepButton.addEventListener("click", () => {
    if (isNextFormPage) {
      saveFormDraft();
      showLoader();
      window.location.href = "form.html";
      return;
    }
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
if (businessType) {
  businessType.addEventListener("change", updateBusinessTypeCustomVisibility);
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
      refreshWorkerStatuses();
      applyTranslations(currentLanguage);
      saveFormDraft();
    }
  });
}
uploadInputs.forEach((input) => input.addEventListener("change", updateUploadPreview));
if (paymentSlipInput) {
  paymentSlipInput.addEventListener("change", updatePaymentSlipPreview);
}
updateSections();
updateFormTypeOtherVisibility();
updateAppointmentVisibility();
updateBusinessTypeCustomVisibility();
ensureWorkerCards();
updateUploadPreview();
updatePaymentSlipPreview();
refreshNameSuggestions();
loadFormDraft();
initTheme();
renderRecords();
renderLatestRecordCard();
syncRecordsFromServer();
startServerSyncPolling();
document.querySelectorAll("a.tab-btn").forEach((link) => {
  link.addEventListener("click", () => {
    showLoader();
  });
});
if (pageLoader) {
  showLoader();
  window.addEventListener("load", () => {
    setTimeout(hideLoader, 350);
  });
  setTimeout(hideLoader, 4000);
}
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
  getWorkerCards().forEach(updateWorkerCardTitle);
  updateEmployerStatus();
  if (passportCheckInput && passportStatus) {
    if (passportCheckInput.value) {
      validatePassport(passportCheckInput.value, passportStatus);
    } else {
      setStatus(passportStatus, dict.passportEmpty);
    }
  }
  refreshWorkerStatuses();
  updateUploadPreview();
  updatePaymentSlipPreview();
  renderRecords();
};

applyTranslations(currentLanguage);

if (workerForm) {
  workerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveRecord("final");
  });
  workerForm.addEventListener("input", saveFormDraft);
  workerForm.addEventListener("change", saveFormDraft);
}

if (draftButton) {
  draftButton.addEventListener("click", async () => {
    await saveRecord("draft");
  });
}
if (clearFormDraftButton) {
  clearFormDraftButton.addEventListener("click", clearFormDraft);
}
if (recordSearch) {
  recordSearch.addEventListener("input", renderRecords);
}
if (recordFilter) {
  recordFilter.addEventListener("change", renderRecords);
}
if (clearRecordsButton) {
  clearRecordsButton.addEventListener("click", async () => {
    const shouldClear = window.confirm(translations[currentLanguage].confirmClearRecords);
    if (!shouldClear) {
      return;
    }
    const cleared = await clearRecordsFromServer();
    if (!cleared) {
      setStatus(recordsStatus, "ไม่สามารถลบข้อมูลจากเซิร์ฟเวอร์ได้", "error");
      return;
    }
    saveRecords([]);
    renderRecords();
    renderLatestRecordCard();
    setStatus(formSaveStatus, translations[currentLanguage].recordsStatus);
  });
}
if (exportRecordsButton) {
  exportRecordsButton.addEventListener("click", exportRecordsToCsv);
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
if (generalSearchButton) {
  generalSearchButton.addEventListener("click", () => {
    const query = generalSearchInput?.value?.trim() || "";
    if (!query) {
      setStatus(generalSearchStatus, translations[currentLanguage].generalSearchHint, "warn");
      return;
    }
    const records = findRecordsByQuery(query);
    if (!records.length) {
      setStatus(generalSearchStatus, translations[currentLanguage].generalSearchNotFound, "warn");
      return;
    }
    openGeneralSearchResultsModal(records, query);
  });
}
if (generalSearchInput) {
  generalSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      generalSearchButton?.click();
    }
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
  const queryEditId = getEditIdFromQuery();
  const storedEditId = String(localStorage.getItem(EDIT_KEY) || "").trim();
  const requestedEditId = queryEditId || storedEditId;

  if (requestedEditId) {
    currentEditId = requestedEditId;
    const records = loadRecords();
    const record = records.find((item) => String(item.formId || "") === requestedEditId);
    if (record) {
      currentEditId = String(record.formId || "");
      populateForm(record);
    } else {
      fetchRecordByIdFromServer(requestedEditId).then((serverRecord) => {
        if (!serverRecord) return;
        currentEditId = String(serverRecord.formId || requestedEditId);
        const all = loadRecords();
        const index = all.findIndex((item) => String(item.formId || "") === currentEditId);
        if (index >= 0) {
          all[index] = serverRecord;
        } else {
          all.unshift(serverRecord);
        }
        saveRecords(all);
        populateForm(serverRecord);
      });
    }
  }
}
