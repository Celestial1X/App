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
const workPermitNumber = document.getElementById("workPermitNumber");
const workPermitExpiry = document.getElementById("workPermitExpiry");
const passNumber = document.getElementById("passNumber");
const passIssueDate = document.getElementById("passIssueDate");
const passExpiryDate = document.getElementById("passExpiryDate");
const personalVisaExpiryDate = document.getElementById("personalVisaExpiryDate");
const businessType = document.getElementById("businessType");
const businessTypeCustom = document.getElementById("businessTypeCustom");
const employerName = document.getElementById("employerName");
const employerEmail = document.getElementById("employerEmail");
const employerEmailCode = document.getElementById("employerEmailCode");
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
const employerCheckInput = document.getElementById("employerCheck");
const employerStatus = document.getElementById("employerStatus");
const pageLoader = document.getElementById("pageLoader");
const facePhotoInput = document.getElementById("facePhoto");
const idCardInput = document.getElementById("idCard");
const houseDocInput = document.getElementById("houseDoc");
const attachmentsInput = document.getElementById("attachmentsInput");
const attachmentsCameraInput = document.getElementById("attachmentsCameraInput");
const openCameraButton = document.getElementById("openCameraButton");
const attachmentsPreview = document.getElementById("attachmentsPreview");
const attachmentsFileHint = document.getElementById("attachmentsFileHint");
const workerForm = document.getElementById("workerForm");
const formSaveStatus = document.getElementById("formSaveStatus");
const workPermitExpiryStatus = document.getElementById("workPermitExpiryStatus");
const passExpiryDateStatus = document.getElementById("passExpiryDateStatus");
const personalVisaExpiryDateStatus = document.getElementById("personalVisaExpiryDateStatus");
const LEGACY_ATTACHMENT_KEYS = ["facePhoto", "idCard", "houseDoc", "paymentSlip"];
const recordSearch = document.getElementById("recordSearch");
const recordFilter = document.getElementById("recordFilter");
const recordsSelectAll = document.getElementById("recordsSelectAll");
const recordsStatus = document.getElementById("recordsStatus");
const recordsList = document.getElementById("recordsList");
const exportRecordsButton = document.getElementById("exportRecords");
const backupAllDataButton = document.getElementById("backupAllData");
const restoreAllDataButton = document.getElementById("restoreAllData");
const restoreAllDataInput = document.getElementById("restoreAllDataInput");
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
const indexReport90Summary = document.getElementById("indexReport90Summary");
const indexVisaSummary = document.getElementById("indexVisaSummary");
const indexMouSummary = document.getElementById("indexMouSummary");
const indexExpiryAlert = document.getElementById("indexExpiryAlert");
const todayTaskSpotlight = document.getElementById("todayTaskSpotlight");
const todayTaskSubtitle = document.getElementById("todayTaskSubtitle");
const todayTaskBuckets = document.getElementById("todayTaskBuckets");
const todayTaskQuickAdd = document.getElementById("todayTaskQuickAdd");
const todayTaskQuickTitle = document.getElementById("todayTaskQuickTitle");
const todayTaskQuickOwner = document.getElementById("todayTaskQuickOwner");
const todayTaskQuickDate = document.getElementById("todayTaskQuickDate");
const todayTaskQuickNote = document.getElementById("todayTaskQuickNote");
const todayTaskQuickAddButton = document.getElementById("todayTaskQuickAddButton");
const todayTaskQuickStatus = document.getElementById("todayTaskQuickStatus");
const taskEntryNotice = document.getElementById("taskEntryNotice");
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
const TODAY_TASK_CUSTOM_KEY = "todayTaskCustomItems";
const TODAY_TASK_STATE_KEY = "todayTaskItemState";
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

let currentEditId = null;
let latestRenderedRecords = [];
let selectedRecordExportIds = new Set();
const uploadCache = {};
let genericAttachments = [];
let homeTaskBuckets = [];

const getSelectedFormTypes = () => {
  const selected = Array.from(formTypeInputs || [])
    .filter((input) => input.checked)
    .map((input) => input.value);
  return selected.length ? selected : ["changeEmployer"];
};

const getSelectedFormType = () => getSelectedFormTypes()[0] || "changeEmployer";

const getSelectedCaseStatus = () => {
  const selected = Array.from(caseStatusInputs || []).find((input) => input.checked);
  return selected ? selected.value : "";
};

const updateSections = () => {
  if (!sections.length) {
    return;
  }
  const selected = getSelectedFormTypes();
  sections.forEach((section) => {
    const sectionKey = section.dataset.section;
    const shouldShow = !sectionKey || sectionKey === "all" || selected.includes(sectionKey);
    section.style.display = shouldShow ? "block" : "none";
  });
};

const updateFormTypeOtherVisibility = () => {
  if (!formTypeOtherRow) return;
  const isOther = getSelectedFormTypes().includes("other");
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
    documentSenderLabel: "รับมาจากใคร",
    documentSenderPlaceholder: "กรอกชื่อผู้ส่งเอกสาร",
    documentSentDateLabel: "วันที่ส่งเอกสาร",
    documentReceiverLabel: "ชื่อผู้รับ",
    documentReceiverPlaceholder: "กรอกชื่อผู้รับเอกสาร",
    documentReceivedDateLabel: "วันที่รับ",
    documentReturnDateLabel: "วันที่ส่งเอกสารคืน",
    documentsTitle: "เอกสารที่ได้รับ",
    documentWorkPermit: "ใบอนุญาตการทำงาน",
    documentReceipt: "ใบเสร็จ",
    documentRequestForm: "ใบคำขอ",
    documentNameList: "เนมลิส",
    documentPassPage: "เล่ม Pass (ตัวจริง)",
    documentVisaPage: "เล่ม Visa (ตัวจริง)",
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
    statusReceivedDocuments: "รับเอกสารมา",
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
    recordsTableEmployerEmail: "เมลนายจ้าง",
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
    tabForm: "กรอกแบบฟอร์ม",
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
    documentSenderLabel: "Received from",
    documentSenderPlaceholder: "Enter document sender",
    documentSentDateLabel: "Document sent date",
    documentReceiverLabel: "Receiver",
    documentReceiverPlaceholder: "Enter document receiver",
    documentReceivedDateLabel: "Received date",
    documentReturnDateLabel: "Document return date",
    documentsTitle: "Received documents",
    documentWorkPermit: "Work permit",
    documentReceipt: "Receipt",
    documentRequestForm: "Request form",
    documentNameList: "Name list",
    documentPassPage: "Passport book (original)",
    documentVisaPage: "Visa book (original)",
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
    statusReceivedDocuments: "Received documents",
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
    recordsTableEmployerEmail: "Employer email",
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
    tabForm: "Form entry",
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
let hasShownEntryTaskAlert = false;

const showTaskEntryNotice = (message, tone = "info") => {
  if (!taskEntryNotice) return;
  taskEntryNotice.textContent = message;
  taskEntryNotice.classList.remove("is-hidden", "task-entry-notice--info", "task-entry-notice--success");
  taskEntryNotice.classList.add(tone === "success" ? "task-entry-notice--success" : "task-entry-notice--info");
};

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
  const days = getDaysUntil(dateValue);
  if (days === null) return { state: "none", days: null };
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
  const formatted = formatDateOnlyDMY(dateValue);
  if (state === "ok") {
    return formatted;
  }
  if (state === "warning" || state === "expired") {
    return `${formatted} (${formatExpiryLabel(state, days)})`;
  }
  return formatted;
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
    image.src = file.dataUrl || "";
    const isImage = Boolean(file.dataUrl && String(file.dataUrl).startsWith("data:image"));
    if (!isImage) {
      image.style.display = "none";
    }
    const meta = document.createElement("div");
    meta.className = "preview-meta";
    const sizeKb = file.size ? Math.round(file.size / 1024) : 0;
    meta.textContent = `${file.name}${sizeKb ? ` (${sizeKb} KB)` : ""}`;
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

const fileToAttachment = (file) =>
  new Promise((resolve) => {
    if (!file) {
      resolve(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () =>
      resolve({
        name: file.name,
        type: file.type || "",
        size: file.size || 0,
        dataUrl: typeof reader.result === "string" ? reader.result : "",
      });
    reader.onerror = () => resolve({ name: file.name, type: file.type || "", size: file.size || 0, dataUrl: "" });
    reader.readAsDataURL(file);
  });

const renderGenericAttachments = () => {
  renderPreview(attachmentsPreview, genericAttachments, (indexToRemove) => {
    genericAttachments = genericAttachments.filter((_, idx) => idx !== indexToRemove);
    renderGenericAttachments();
    saveFormDraft();
  });
};

const appendGenericFiles = async (fileList) => {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  const parsed = (await Promise.all(files.map((file) => fileToAttachment(file)))).filter(Boolean);
  genericAttachments.push(...parsed);
  renderGenericAttachments();
  saveFormDraft();
};

const updateAttachmentsFileHint = (selectedCount = 0) => {
  if (!attachmentsFileHint) return;
  if (!selectedCount) {
    attachmentsFileHint.textContent = currentLanguage === "th" ? "ยังไม่ได้เลือกไฟล์" : "No file selected";
    return;
  }
  attachmentsFileHint.textContent =
    currentLanguage === "th" ? `เลือกแล้ว ${selectedCount} ไฟล์` : `${selectedCount} file(s) selected`;
};

const handleGenericAttachmentInputChange = async (input) => {
  if (!input?.files?.length) return;
  const selectedCount = input.files.length;
  await appendGenericFiles(input.files);
  updateAttachmentsFileHint(selectedCount);
  input.value = "";
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

const resolveWorkerNameForDisplay = (record) => {
  const personalInfo = record?.data?.personalInfo || {};
  if (personalInfo.fullName === "") {
    return "-";
  }
  const workers = normalizeWorkers(record?.data);
  return personalInfo.fullName || workers[0]?.fullName || "-";
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
const DAY_MS = 24 * 60 * 60 * 1000;

const normalizeThaiYear = (year) => {
  if (!Number.isFinite(year)) return year;
  // convert Buddhist Era (e.g. 2569) to Gregorian
  return year >= 2400 ? year - 543 : year;
};

const parseDateOnlyLocal = (value) => {
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
    const year = normalizeThaiYear(yearRaw);
    return new Date(year, month - 1, day);
  };

  const dashParts = text.split("-").map((item) => Number.parseInt(item, 10));
  const dashDate = parseWithParts(dashParts);
  if (dashDate) return dashDate;

  const slashParts = text.split("/").map((item) => Number.parseInt(item, 10));
  const slashDate = parseWithParts(slashParts);
  if (slashDate) return slashDate;

  const date = new Date(text);
  if (Number.isNaN(date.getTime())) return null;
  const year = normalizeThaiYear(date.getFullYear());
  return new Date(year, date.getMonth(), date.getDate());
};

const formatDateOnlyDMY = (value) => {
  const date = parseDateOnlyLocal(value);
  if (!date) return value || "-";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = currentLanguage === "th" ? date.getFullYear() + 543 : date.getFullYear();
  return `${day}/${month}/${year}`;
};

const normalizeDisplayDateValue = (value) => {
  if (!value) return "";
  const date = parseDateOnlyLocal(value);
  if (!date) return String(value || "").trim();
  return formatDateOnlyDMY(date);
};

const getDaysUntil = (value) => {
  const target = parseDateOnlyLocal(value);
  if (!target) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.floor((target.getTime() - today.getTime()) / DAY_MS);
  // ignore clearly invalid year-parsing artifacts
  if (Math.abs(days) > 36500) return null;
  return days;
};

const getDaysBetweenDateValues = (startValue, endValue) => {
  const start = parseDateOnlyLocal(startValue);
  const end = parseDateOnlyLocal(endValue);
  if (!start || !end) return null;
  const days = Math.floor((end.getTime() - start.getTime()) / DAY_MS);
  if (days < 0 || Math.abs(days) > 36500) return null;
  return days;
};

const safeParseJSON = (text, fallback) => {
  try {
    const parsed = JSON.parse(String(text ?? ""));
    return parsed ?? fallback;
  } catch (_error) {
    return fallback;
  }
};

const getDeadlineToneClass = (days) => {
  if (days === null) return "deadline-box--none";
  if (days < 30) return "deadline-box--danger";
  if (days <= 90) return "deadline-box--warn";
  return "deadline-box--safe";
};

const getDeadlineToneText = (days) => {
  if (days === null) return "-";
  if (days < 0) return `เกินกำหนด ${Math.abs(days)} วัน`;
  if (days < 30) return `ต่ำกว่า 30 วัน (${days} วัน)`;
  if (days <= 90) return `ไม่เกิน 90 วัน (${days} วัน)`;
  return `มากกว่า 90 วัน (${days} วัน)`;
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
    renderHomeFollowupSummaries();
    return;
  }
  const records = loadRecords();
  if (!records.length) {
    latestRecordTitle.textContent = "-";
    latestRecordMeta.textContent = "ยังไม่มีข้อมูล";
    renderHomeFollowupSummaries();
    return;
  }
  const latest = [...records].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];
  latestRecordTitle.textContent = `${latest.formId} • ${latest.formTypeLabel || "-"}`;
  latestRecordMeta.textContent = `${formatDateTime(latest.updatedAt)} • ${
    latest.data?.personalInfo?.fullName || latest.data?.personalInfo?.employerName || latest.displayName || "-"
  }`;
  renderHomeFollowupSummaries();
};

const renderFollowupSummaryList = (target, records, typeLabel, dateField) => {
  if (!target) return;
  const rows = (records || [])
    .map((record) => {
      const info = record?.data?.personalInfo || {};
      const followup = record?.data?.followup || {};
      const startDate = followup?.startDate || "";
      const dateValue = followup?.[dateField] || "";
      const days = getDaysUntil(dateValue);
      return {
        formId: record?.formId || "-",
        updatedAt: record?.updatedAt,
        name: info.fullName || info.employerName || record?.displayName || "-",
        days,
        startDate,
        dateValue,
        typeLabel,
      };
    })
    .filter((item) => item.days !== null)
    .sort((a, b) => a.days - b.days)
    .slice(0, 5);

  if (!rows.length) {
    target.innerHTML = '<p class="status-text">ยังไม่มีข้อมูล</p>';
    return;
  }

  target.innerHTML = rows
    .map((item) => {
      const toneClass = getDeadlineToneClass(item.days);
      return `<div class="mini-summary-item ${toneClass}"><p>${item.formId} • ${item.typeLabel}</p><p>${formatDateTime(item.updatedAt)} • ${item.name}</p><p>${formatDateOnlyDMY(item.startDate)} → ${formatDateOnlyDMY(item.dateValue)} • ${getDeadlineToneText(item.days)}</p></div>`;
    })
    .join("");
};

const renderHomeFollowupSummaries = () => {
  const all = loadRecords();
  renderTodayTaskSpotlight(all);
  if (!indexReport90Summary && !indexVisaSummary && !indexMouSummary) return;
  const r90 = all.filter((item) => item?.formType === "report90");
  const visa = all.filter((item) => item?.formType === "visarun");
  const mou = all.filter((item) => item?.formType === "mouLaos");

  renderFollowupSummaryList(indexReport90Summary, r90, "รายงานตัว 90 วัน", "nextDate");
  renderFollowupSummaryList(indexVisaSummary, visa, "Visa run", "endDate");
  renderFollowupSummaryList(indexMouSummary, mou, "MOU ลาว", "endDate");

  if (indexExpiryAlert) {
    const nearExpiryCount = all.filter((record) => {
      const followup = record?.data?.followup || {};
      const targetDate = followup.nextDate || followup.endDate || "";
      const days = getDaysUntil(targetDate);
      return days !== null && days >= 0 && days <= 90;
    }).length;
    if (nearExpiryCount > 0) {
      indexExpiryAlert.textContent = `แจ้งเตือน: มี ${nearExpiryCount} รายการที่ใกล้หมดอายุ`;
      indexExpiryAlert.classList.remove("is-hidden");
    } else {
      indexExpiryAlert.classList.add("is-hidden");
    }
  }
};

const buildHomeTaskItems = (records) => {
  const taskDefs = [
    { key: "appointmentDate", label: "นัดหมายดำเนินการ", source: "caseStatus" },
    { key: "nextDate", label: "รายงานตัว 90 วัน", source: "followup" },
    { key: "endDate", label: "ครบกำหนด Visa / MOU", source: "followup" },
    { key: "documentReceivedDate", label: "วันรับเอกสาร", source: "followup" },
    { key: "documentReturnDate", label: "วันคืนเอกสาร", source: "followup" },
    { key: "workPermitExpiry", label: "ใบอนุญาตทำงานใกล้หมดอายุ", source: "personalInfo" },
    { key: "passExpiryDate", label: "พาสปอร์ตใกล้หมดอายุ", source: "personalInfo" },
    { key: "personalVisaExpiryDate", label: "Visa ส่วนบุคคลใกล้หมดอายุ", source: "personalInfo" },
  ];
  const tasks = [];
  (records || []).forEach((record) => {
    const info = record?.data?.personalInfo || {};
    const followup = record?.data?.followup || {};
    const caseStatus = record?.data?.caseStatus || {};
    const assignee = info.fullName || info.employerName || record?.displayName || "-";
    if (record?.formType === "todaytask") {
      const dateValue = followup?.nextDate || record?.data?.startDate || "";
      const days = getDaysUntil(dateValue);
      if (days !== null && days >= 0 && days <= 90) {
        tasks.push({
          days,
          dateValue,
          formId: record?.formId || "-",
          recordId: record?.formId || "-",
          formType: "todaytask",
          assignee: followup?.taskTitle || info.fullName || record?.displayName || "-",
          label: "งานที่เพิ่มเอง",
          note: followup?.note || "",
          owner: record?.data?.recordedBy || "-",
        });
      }
      return;
    }

    taskDefs.forEach(({ key, label, source }) => {
      const sourceData = source === "followup" ? followup : source === "caseStatus" ? caseStatus : info;
      const dateValue = sourceData?.[key];
      const days = getDaysUntil(dateValue);
      if (days === null || days < 0 || days > 90) return;
      tasks.push({
        days,
        dateValue,
        formId: record?.formId || "-",
        recordId: record?.formId || "-",
        formType: record?.formType || "",
        assignee,
        label,
        owner: record?.data?.recordedBy || "-",
      });
    });
  });

  const taskState = loadTodayTaskStateMap();

  const grouped = new Map();
  tasks.forEach((task) => {
    const taskKey = buildTodayTaskKey(task);
    const state = taskState[taskKey] && typeof taskState[taskKey] === "object" ? taskState[taskKey] : {};
    if (state.deleted) return;
    const key = String(task.days);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push({
      ...task,
      taskKey,
      done: Boolean(state.done),
      targetUrl: getTaskTargetUrl(task),
    });
  });

  loadCustomTodayTasks().forEach((task) => {
    const days = getDaysUntil(task.dateValue);
    if (days === null || days < 0 || days > 90) return;
    const taskItem = {
      days,
      dateValue: task.dateValue,
      formId: "เพิ่มเอง",
      assignee: task.title,
      label: "งานเพิ่มเอง",
      note: task.note || "",
      isCustom: true,
      customTaskId: task.id,
      formType: "custom",
      recordId: task.id,
      owner: "-",
    };
    const taskKey = buildTodayTaskKey(taskItem);
    const state = taskState[taskKey] && typeof taskState[taskKey] === "object" ? taskState[taskKey] : {};
    if (state.deleted) return;
    const key = String(days);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push({
      ...taskItem,
      taskKey,
      done: Boolean(task.done || state.done),
      targetUrl: "",
    });
  });

  return Array.from(grouped.entries())
    .map(([dayKey, items]) => ({ days: Number.parseInt(dayKey, 10), items: items.sort((a, b) => String(a.formId).localeCompare(String(b.formId), "th")) }))
    .sort((a, b) => a.days - b.days)
    .slice(0, 12);
};

const loadCustomTodayTasks = () => {
  let raw = "[]";
  try {
    raw = localStorage.getItem(TODAY_TASK_CUSTOM_KEY) || "[]";
  } catch (_error) {
    raw = "[]";
  }
  const parsed = safeParseJSON(raw, []);
  if (!Array.isArray(parsed)) return [];
  return parsed
    .map((item) => ({
      id: String(item?.id || ""),
      title: String(item?.title || "").trim(),
      dateValue: normalizeDisplayDateValue(item?.dateValue || ""),
      note: String(item?.note || "").trim(),
      done: Boolean(item?.done),
    }))
    .filter((item) => item.title && item.dateValue);
};

const saveCustomTodayTasks = (items) => {
  try {
    localStorage.setItem(TODAY_TASK_CUSTOM_KEY, JSON.stringify(items || []));
    return true;
  } catch (_error) {
    return false;
  }
};

const updateCustomTodayTask = (taskId, updater) => {
  const id = String(taskId || "").trim();
  if (!id) return false;
  const items = loadCustomTodayTasks();
  const index = items.findIndex((item) => item.id === id);
  if (index < 0) return false;
  const nextItems = [...items];
  nextItems[index] = updater({ ...nextItems[index] });
  return saveCustomTodayTasks(nextItems.slice(0, 120));
};

const deleteCustomTodayTask = (taskId) => {
  const id = String(taskId || "").trim();
  if (!id) return false;
  const items = loadCustomTodayTasks();
  const nextItems = items.filter((item) => item.id !== id);
  if (nextItems.length === items.length) return false;
  return saveCustomTodayTasks(nextItems.slice(0, 120));
};

const loadTodayTaskStateMap = () => {
  let raw = "{}";
  try {
    raw = localStorage.getItem(TODAY_TASK_STATE_KEY) || "{}";
  } catch (_error) {
    raw = "{}";
  }
  const parsed = safeParseJSON(raw, {});
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
  return parsed;
};

const saveTodayTaskStateMap = (stateMap) => {
  try {
    localStorage.setItem(TODAY_TASK_STATE_KEY, JSON.stringify(stateMap || {}));
    return true;
  } catch (_error) {
    return false;
  }
};

const updateTodayTaskState = (taskKey, patch) => {
  const key = String(taskKey || "").trim();
  if (!key) return false;
  const stateMap = loadTodayTaskStateMap();
  const current = stateMap[key] && typeof stateMap[key] === "object" ? stateMap[key] : {};
  stateMap[key] = { ...current, ...patch };
  return saveTodayTaskStateMap(stateMap);
};

const buildTodayTaskKey = (task) => {
  const formId = String(task?.recordId || task?.customTaskId || task?.formId || "-").trim();
  const label = String(task?.label || "-").trim();
  const dateValue = normalizeDisplayDateValue(task?.dateValue || "");
  const assignee = String(task?.assignee || "-").trim();
  return [formId, label, dateValue, assignee].join("|");
};

const getTaskTargetUrl = (item) => {
  const editId = encodeURIComponent(String(item?.recordId || item?.formId || "").trim());
  const formType = String(item?.formType || "").trim();
  if (!editId || item?.formId === "เพิ่มเอง") return "";
  if (formType === "todaytask") return "";
  if (formType === "report90") return `report90.html?editId=${editId}`;
  if (formType === "visarun") return `visarun.html?editId=${editId}`;
  if (formType === "mouLaos") return `nextform.html?editId=${editId}`;
  return `form.html?editId=${editId}`;
};

const openTaskBucketModal = (bucket) => {
  if (!recordModal || !recordModalTitle || !recordModalBody) return;
  const dayText = bucket.days === 0 ? "วันนี้" : `อีก ${bucket.days} วัน`;
  recordModalTitle.textContent = `งานที่ต้องทำ: ${dayText}`;
  recordModalBody.innerHTML = "";
  const list = document.createElement("ul");
  list.className = "timeline";
  bucket.items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "timeline-item";
    if (item.done) li.classList.add("timeline-item--done");
    const note = item.note ? `<p>${item.note}</p>` : "";
    const doneLabel = item.done ? "↺ ยกเลิกเสร็จแล้ว" : "✓ เสร็จแล้ว";
    const openButton = item.targetUrl
      ? `<button type="button" class="secondary" data-task-open="${item.targetUrl}">เปิดรายการ</button>`
      : "";
    const encodedTaskKey = encodeURIComponent(item.taskKey || "");
    const taskActions = `<div class="table-actions">
        <button type="button" class="secondary" data-task-done="${encodedTaskKey}" data-task-done-value="${item.done ? "0" : "1"}">${doneLabel}</button>
        <button type="button" class="danger" data-task-delete="${encodedTaskKey}" data-task-custom-id="${item.customTaskId || ""}">ลบ</button>
        ${openButton}
      </div>`;
    li.innerHTML = `<span class="timeline-tag">${item.label}</span><h3>${item.formId} • ${item.assignee}</h3><p>ผู้รับผิดชอบ: ${item.owner || "-"}</p><p>${formatDateOnlyDMY(item.dateValue)} • ${dayText}</p>${note}${taskActions}`;
    list.appendChild(li);
  });
  recordModalBody.appendChild(list);
  list.querySelectorAll("[data-task-done]").forEach((button) => {
    button.addEventListener("click", () => {
      const taskKey = decodeURIComponent(button.getAttribute("data-task-done") || "");
      const doneValue = button.getAttribute("data-task-done-value") === "1";
      const updated = updateTodayTaskState(taskKey, { done: doneValue, deleted: false });
      if (!updated) return;
      recordModal.classList.remove("is-open");
      recordModal.setAttribute("aria-hidden", "true");
      renderLatestRecordCard();
    });
  });
  list.querySelectorAll("[data-task-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const taskKey = decodeURIComponent(button.getAttribute("data-task-delete") || "");
      const customId = button.getAttribute("data-task-custom-id") || "";
      let removed = updateTodayTaskState(taskKey, { deleted: true });
      if (customId) {
        removed = deleteCustomTodayTask(customId) && removed;
      }
      if (!removed) return;
      recordModal.classList.remove("is-open");
      recordModal.setAttribute("aria-hidden", "true");
      renderLatestRecordCard();
    });
  });
  list.querySelectorAll("[data-task-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = String(button.getAttribute("data-task-open") || "").trim();
      if (!target) return;
      window.location.href = target;
    });
  });
  recordModal.classList.add("is-open");
  recordModal.setAttribute("aria-hidden", "false");
};

const initTodayTaskQuickAdd = () => {
  if (!todayTaskQuickAdd || !todayTaskQuickTitle || !todayTaskQuickDate || !todayTaskQuickOwner) return;
  const submitTask = async () => {
    const title = String(todayTaskQuickTitle.value || "").trim();
    const owner = String(todayTaskQuickOwner.value || "").trim();
    const fallbackToday = formatDateOnlyDMY(new Date());
    const dateValue = normalizeDisplayDateValue(todayTaskQuickDate.value) || fallbackToday;
    const note = String(todayTaskQuickNote?.value || "").trim();
    if (!title || !owner) {
      if (todayTaskQuickStatus) {
        todayTaskQuickStatus.textContent = "กรุณากรอกชื่องานและผู้รับผิดชอบ";
        todayTaskQuickStatus.classList.add("error");
      }
      return;
    }
    try {
      const records = loadRecords();
      const formId = nextLocalFormId(records);
      const now = new Date().toISOString();
      const taskRecord = {
        formId,
        formType: "todaytask",
        formTypeLabel: "งานที่ต้องทำ",
        displayName: `งานที่ต้องทำ - ${title}`,
        status: "final",
        updatedAt: now,
        data: {
          recordedBy: owner,
          startDate: dateValue,
          personalInfo: {
            fullName: title,
            employerName: "",
          },
          followup: {
            taskTitle: title,
            taskOwner: owner,
            nextDate: dateValue,
            note,
          },
        },
      };

      records.unshift(taskRecord);
      saveRecords(records);
      markRecordDirty(formId);
      const synced = await upsertRecordToServer(taskRecord);
      if (synced && synced.formId) {
        const latest = loadRecords();
        const index = latest.findIndex((item) => String(item.formId || "") === formId);
        if (index >= 0) {
          latest[index] = synced;
          saveRecords(latest);
        }
        clearRecordDirty(formId);
      }

      todayTaskQuickAdd.reset();
      renderLatestRecordCard();
      if (todayTaskQuickStatus) {
        todayTaskQuickStatus.textContent = `เพิ่มงานใหม่เรียบร้อย (${formatDateOnlyDMY(dateValue)}) • ผู้รับผิดชอบ: ${owner}`;
        todayTaskQuickStatus.classList.remove("error");
      }
    } catch (_error) {
      if (todayTaskQuickStatus) {
        todayTaskQuickStatus.textContent = "ไม่สามารถเพิ่มงานได้ กรุณาลองใหม่อีกครั้ง";
        todayTaskQuickStatus.classList.add("error");
      }
    }
  };

  todayTaskQuickAdd.addEventListener("submit", (event) => {
    event.preventDefault();
    submitTask().catch(() => {
      if (todayTaskQuickStatus) {
        todayTaskQuickStatus.textContent = "ไม่สามารถเพิ่มงานได้ กรุณาลองใหม่อีกครั้ง";
        todayTaskQuickStatus.classList.add("error");
      }
    });
  });
  todayTaskQuickAddButton?.addEventListener("click", (event) => {
    event.preventDefault();
    submitTask().catch(() => {
      if (todayTaskQuickStatus) {
        todayTaskQuickStatus.textContent = "ไม่สามารถเพิ่มงานได้ กรุณาลองใหม่อีกครั้ง";
        todayTaskQuickStatus.classList.add("error");
      }
    });
  });
};

const renderTodayTaskSpotlight = (records) => {
  if (!todayTaskSpotlight || !todayTaskBuckets || !todayTaskSubtitle) return;
  homeTaskBuckets = buildHomeTaskItems(records);
  if (!homeTaskBuckets.length) {
    todayTaskSubtitle.textContent = "ยังไม่มีงานที่ต้องติดตามใน 90 วันข้างหน้า";
    todayTaskBuckets.innerHTML = '<p class="status-text">ไม่มีงานค้างกำหนด</p>';
    if (!hasShownEntryTaskAlert) {
      hasShownEntryTaskAlert = true;
      showTaskEntryNotice("วันนี้ยังไม่มีงานค้างกำหนด", "success");
    }
    return;
  }

  const totalTasks = homeTaskBuckets.reduce((sum, bucket) => sum + bucket.items.length, 0);
  const todayTasks = homeTaskBuckets
    .filter((bucket) => bucket.days === 0)
    .reduce((sum, bucket) => sum + bucket.items.length, 0);
  todayTaskSubtitle.textContent = `พบ ${totalTasks} งานในช่วงวันนี้ถึง 90 วันข้างหน้า • กดที่วันเพื่อดูรายละเอียด`;
  todayTaskBuckets.innerHTML = homeTaskBuckets.map((bucket, index) => {
    const dayLabel = bucket.days === 0 ? "วันนี้" : `อีก ${bucket.days} วัน`;
    const firstLabel = bucket.items[0]?.label || "";
    const firstOwner = bucket.items[0]?.owner || "-";
    return `<button type="button" class="today-task-bucket" data-task-bucket="${index}"><strong>${dayLabel}</strong><span>${bucket.items.length} งาน</span><small>${firstLabel} • ${firstOwner}</small></button>`;
  }).join("");

  todayTaskBuckets.querySelectorAll("[data-task-bucket]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number.parseInt(button.getAttribute("data-task-bucket") || "-1", 10);
      const bucket = homeTaskBuckets[index];
      if (!bucket) return;
      openTaskBucketModal(bucket);
    });
  });
  if (!hasShownEntryTaskAlert) {
    hasShownEntryTaskAlert = true;
    if (todayTasks > 0) {
      showTaskEntryNotice(`แจ้งเตือนวันนี้: มี ${todayTasks} งานที่ต้องทำตอนนี้`, "info");
    } else {
      showTaskEntryNotice("วันนี้ไม่มีงานที่ต้องทำทันที", "success");
    }
  }
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
  const selectedTypes = Array.isArray(formData.formTypes) && formData.formTypes.length
    ? formData.formTypes
    : [formData.formType || "changeEmployer"];
  const labels = selectedTypes.map((type) => {
    const baseLabel = getFormTypeLabel(type);
    if (type === "other" && formData.formTypeOtherDetail) {
      return `${baseLabel}: ${formData.formTypeOtherDetail}`;
    }
    return baseLabel;
  });
  return labels.join(", ");
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
    receivedDocuments: translations[currentLanguage].statusReceivedDocuments,
  };
  return map[value] || value || "-";
};

const getCaseStatusDisplay = (caseStatus = {}) => {
  const status = caseStatus.status || "";
  if (status === "appointment") {
    if (caseStatus.appointmentDate) {
      const waitingLabel = currentLanguage === "th" ? "รอวันนัด" : "Awaiting appointment";
      return `${waitingLabel} (${formatDateOnlyDMY(caseStatus.appointmentDate)})`;
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

const bindPersonalExpiryStatuses = () => {
  const mappings = [
    [workPermitExpiry, workPermitExpiryStatus],
    [passExpiryDate, passExpiryDateStatus],
    [personalVisaExpiryDate, personalVisaExpiryDateStatus],
  ];
  mappings.forEach(([input, status]) => {
    if (!input || !status) return;
    if (!input.dataset.expiryBound) {
      const refresh = () => updateExpiryStatusForInput(input, status);
      input.addEventListener("input", refresh);
      input.addEventListener("change", refresh);
      input.dataset.expiryBound = "true";
    }
    updateExpiryStatusForInput(input, status);
  });
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
  return {
    hasCompleted,
    hasPending: hasPendingSchedule || hasExpiryWarning,
    hasAlert: hasExpired,
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
    formTypes: getSelectedFormTypes(),
    formTypeOtherDetail: formTypeOtherDetail?.value?.trim() || "",
    workers,
    company: company?.value?.trim() || "",
    caseType: caseType?.value || "",
    position: position?.value?.trim() || "",
    workSite: workSite?.value?.trim() || "",
    startDate: normalizeDisplayDateValue(startDate?.value),
    employerId: employerId?.value?.trim() || "",
    verification: verification?.value || "",
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
      workPermitNumber: workPermitNumber?.value?.trim() || "",
      workPermitExpiry: normalizeDisplayDateValue(workPermitExpiry?.value),
      passNumber: passNumber?.value?.trim() || "",
      passIssueDate: normalizeDisplayDateValue(passIssueDate?.value),
      passExpiryDate: normalizeDisplayDateValue(passExpiryDate?.value),
      personalVisaExpiryDate: normalizeDisplayDateValue(personalVisaExpiryDate?.value),
      businessType: getBusinessTypeValue(),
      employerName: employerName?.value?.trim() || "",
      employerEmail: employerEmail?.value?.trim() || "",
      employerEmailCode: employerEmailCode?.value?.trim() || "",
      employerAddress: employerAddress?.value?.trim() || "",
      documentSender: documentSender?.value?.trim() || "",
      documentSentDate: normalizeDisplayDateValue(documentSentDate?.value),
      documentReceiver: documentReceiver?.value?.trim() || "",
      documentReceivedDate: normalizeDisplayDateValue(documentReceivedDate?.value),
      documentReturnDate: normalizeDisplayDateValue(documentReturnDate?.value),
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
      appointmentDate: normalizeDisplayDateValue(appointmentDate?.value),
      appointmentNote: appointmentNote?.value?.trim() || "",
    },
    receivedDocs,
    notifications,
    supportingDocs: supportingDocsList,
    requiredRenewalDocs: requiredDocs,
    receivedDocsNote: receivedDocsNote?.value?.trim() || "",
    renewalDocsNote: renewalDocsNote?.value?.trim() || "",
    attachments: genericAttachments.map((item) => ({ ...item })),
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
  genericAttachments = [];
  ensureWorkerCards();
  updateSections();
  renderGenericAttachments();
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
  const availableIds = new Set(records.map((record) => String(record.formId || "")).filter(Boolean));
  selectedRecordExportIds = new Set([...selectedRecordExportIds].filter((id) => availableIds.has(id)));
  const query = recordSearch.value.trim().toLowerCase();
  const filter = recordFilter.value;
  const filtered = records.filter((record) => {
    const selectedTypes = Array.isArray(record.data?.formTypes) && record.data.formTypes.length
      ? record.data.formTypes
      : [record.formType];
    const matchesFilter = filter === "all" || selectedTypes.includes(filter);
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
      personalInfo.employerEmail,
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
    const workerName = resolveWorkerNameForDisplay(record);
    const employerLabel = personalInfo.employerName || record.data.company || record.data.employerId || "-";
    const selectCell = document.createElement("td");
    const selectInput = document.createElement("input");
    selectInput.type = "checkbox";
    selectInput.setAttribute("data-record-export-select", "1");
    selectInput.value = String(record.formId || "");
    selectInput.setAttribute("aria-label", "เลือกรายการ");
    selectInput.checked = selectedRecordExportIds.has(String(record.formId || ""));
    selectInput.addEventListener("change", () => {
      const id = String(record.formId || "");
      if (!id) return;
      if (selectInput.checked) {
        selectedRecordExportIds.add(id);
      } else {
        selectedRecordExportIds.delete(id);
      }
      if (recordsSelectAll) {
        const visibleInputs = Array.from(recordsList.querySelectorAll('input[data-record-export-select]'));
        recordsSelectAll.checked = Boolean(visibleInputs.length) && visibleInputs.every((input) => input.checked);
      }
    });
    selectCell.appendChild(selectInput);
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
    editButton.className = "secondary action-btn action-btn--edit";
    editButton.innerHTML = `<span aria-hidden="true">✏️</span><span>${translations[currentLanguage].editButton}</span>`;
    editButton.addEventListener("click", () => {
      const followupPageMap = {
        report90: "report90.html",
        visarun: "visarun.html",
        mouLaos: "nextform.html",
        mouLaosRenew: "nextform.html",
        receivedocs: "receivedocs.html",
        returndocs: "returndocs.html",
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
    verifyButton.className = "secondary action-btn action-btn--verify";
    verifyButton.innerHTML = `<span aria-hidden="true">🔎</span><span>${translations[currentLanguage].verifyButton}</span>`;
    verifyButton.addEventListener("click", () => openRecordModal(record));
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger action-btn action-btn--delete";
    deleteButton.innerHTML = `<span aria-hidden="true">🗑️</span><span>${translations[currentLanguage].deleteButton}</span>`;
    deleteButton.addEventListener("click", async () => {
      const shouldDelete = await showConfirmDialog({
        message: translations[currentLanguage].confirmDeleteRecord,
      });
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
    row.appendChild(selectCell);
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

  if (recordsSelectAll) {
    const visibleInputs = Array.from(recordsList.querySelectorAll('input[data-record-export-select]'));
    recordsSelectAll.checked = Boolean(visibleInputs.length) && visibleInputs.every((input) => input.checked);
    recordsSelectAll.onchange = () => {
      recordsList.querySelectorAll('input[data-record-export-select]').forEach((input) => {
        input.checked = recordsSelectAll.checked;
        const id = String(input.value || "").trim();
        if (!id) return;
        if (recordsSelectAll.checked) {
          selectedRecordExportIds.add(id);
        } else {
          selectedRecordExportIds.delete(id);
        }
      });
    };
  }
};

const toCsvValue = (value) => {
  const text = String(value ?? "").replace(/\r?\n|\r/g, " ").trim();
  return `"${text.replace(/"/g, '""')}"`;
};

const exportBackupData = async () => {
  const localRecords = loadRecords();
  let serverRecords = [];
  if (canUseServerSync()) {
    try {
      const response = await fetch(RECORDS_API_URL, { method: "GET" });
      if (response.ok) {
        const rows = await response.json();
        if (Array.isArray(rows)) {
          serverRecords = rows;
        }
      }
    } catch (_error) {
      // keep local-only backup when server is unavailable
    }
  }

  const mergedRecords = mergeRecordsPreferLatest(localRecords, serverRecords);
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    records: mergedRecords,
    settings: {
      apiBaseUrl: localStorage.getItem(API_BASE_KEY) || "",
      language: currentLanguage,
    },
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const fileName = `worker-records-backup-${new Date().toISOString().slice(0, 10)}.json`;
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  setStatus(recordsStatus || formSaveStatus, `สำรองข้อมูลสำเร็จ: ${fileName}`, "ok");
};

const importBackupData = async (file) => {
  if (!file) return;
  const text = await file.text();
  const parsed = JSON.parse(text || "{}");
  const incoming = Array.isArray(parsed?.records) ? parsed.records : [];
  if (!incoming.length) {
    throw new Error("ไฟล์สำรองไม่มีข้อมูล records");
  }

  const merged = mergeRecordsPreferLatest(loadRecords(), incoming);
  saveRecords(merged);
  refreshNameSuggestions();
  renderRecords();
  renderLatestRecordCard();

  if (canUseServerSync()) {
    for (const record of merged) {
      // best-effort sync back to server
      await upsertRecordToServer(record);
    }
  }

  setStatus(recordsStatus || formSaveStatus, `นำเข้าข้อมูลสำเร็จ ${merged.length} รายการ`, "ok");
};

const showConfirmDialog = ({
  title = "ยืนยันการลบข้อมูล",
  message = translations[currentLanguage]?.confirmDeleteRecord || "ต้องการลบรายการนี้หรือไม่?",
  confirmText = "ลบข้อมูล",
  cancelText = "ยกเลิก",
} = {}) =>
  new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "confirm-dialog";
    overlay.innerHTML = `
      <div class="confirm-dialog__card" role="dialog" aria-modal="true" aria-label="${title}">
        <p class="confirm-dialog__title">${title}</p>
        <p class="confirm-dialog__message">${message}</p>
        <div class="confirm-dialog__actions">
          <button type="button" class="secondary" data-confirm-action="cancel">${cancelText}</button>
          <button type="button" class="danger" data-confirm-action="ok">${confirmText}</button>
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

const exportRecordsToCsv = () => {
  const rendered = latestRenderedRecords.length ? latestRenderedRecords : loadRecords();
  if (!selectedRecordExportIds.size) {
    setStatus(recordsStatus, "กรุณาเลือกรายการที่ต้องการส่งออก", "warn");
    return;
  }
  const rows = rendered.filter((record) => selectedRecordExportIds.has(String(record.formId || "")));
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
    translations[currentLanguage].recordsTableEmployerEmail,
    "รหัสเมลนายจ้าง",
    "ที่อยู่นายจ้าง",
  ];
  const lines = [headers.map(toCsvValue).join(",")];
  rows.forEach((record) => {
    const data = record.data || {};
    const personalInfo = data.personalInfo || {};
    const workers = normalizeWorkers(data);
    const workerName = resolveWorkerNameForDisplay(record);
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
      formatDateOnlyDMY(followup.startDate),
      formatDateOnlyDMY(followup.nextDate),
      formatDateOnlyDMY(followup.endDate),
      followup.sentImmigration ? "yes" : "no",
      followup.returnBook ? "yes" : "no",
      followup.sentBookCount ?? "-",
      followup.returnBookCount ?? "-",
      followup.overdueFine ? "yes" : "no",
      followup.visaOverdue ? "yes" : "no",
      followup.p60 ? "yes" : "no",
      followup.p30 ? "yes" : "no",
      data.documents?.note || "-",
      personalInfo.employerEmail || "-",
      personalInfo.employerEmailCode || "-",
      personalInfo.employerAddress || "-",
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


const createAttachmentLink = (item) => {
  if (!item?.dataUrl) return null;
  const anchor = document.createElement("a");
  anchor.href = "#";
  anchor.className = "attachment-open-link";
  anchor.textContent = currentLanguage === "th" ? "ดูไฟล์" : "View file";
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    openAttachmentViewer(item);
  });
  return anchor;
};

const getAttachmentViewerModal = () => {
  let modal = document.getElementById("attachmentViewerModal");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.id = "attachmentViewerModal";
  modal.className = "modal attachment-viewer-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="modal-content attachment-viewer-content">
      <div class="modal-header">
        <h4 id="attachmentViewerTitle">ไฟล์แนบ</h4>
        <button type="button" class="modal-close" id="attachmentViewerClose" aria-label="ปิด">✕</button>
      </div>
      <div id="attachmentViewerBody" class="modal-body attachment-viewer-body"></div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeAttachmentViewer();
    }
  });
  modal.querySelector("#attachmentViewerClose")?.addEventListener("click", closeAttachmentViewer);
  return modal;
};

const closeAttachmentViewer = () => {
  const modal = document.getElementById("attachmentViewerModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  const body = modal.querySelector("#attachmentViewerBody");
  if (body) body.innerHTML = "";
};

const openAttachmentViewer = (attachment) => {
  if (!attachment?.dataUrl) return;
  const modal = getAttachmentViewerModal();
  const title = modal.querySelector("#attachmentViewerTitle");
  const body = modal.querySelector("#attachmentViewerBody");
  if (!body || !title) return;
  title.textContent = attachment.value || attachment.name || (currentLanguage === "th" ? "ไฟล์แนบ" : "Attachment");
  body.innerHTML = "";

  const isImage = attachment.dataUrl.startsWith("data:image");
  if (isImage) {
    const image = document.createElement("img");
    image.src = attachment.dataUrl;
    image.alt = title.textContent;
    image.className = "attachment-viewer-image";
    body.appendChild(image);
  } else {
    const frame = document.createElement("iframe");
    frame.src = attachment.dataUrl;
    frame.className = "attachment-viewer-frame";
    frame.title = title.textContent;
    body.appendChild(frame);
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
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
    if (personalInfo.workPermitNumber) {
      addRow("เลขใบอนุญาตการทำงาน", personalInfo.workPermitNumber);
    }
    if (personalInfo.workPermitExpiry) {
      addRow("วันหมดอายุใบทำงาน", formatDateOnlyDMY(personalInfo.workPermitExpiry));
    }
    if (personalInfo.passNumber) {
      addRow("เลข Pass", personalInfo.passNumber);
    }
    if (personalInfo.personalVisaExpiryDate) {
      addRow("วันหมดอายุ Visa", formatDateOnlyDMY(personalInfo.personalVisaExpiryDate));
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
    if (personalInfo.employerEmailCode) {
      addRow("รหัสเมลนายจ้าง", personalInfo.employerEmailCode);
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
      addRow(translations[currentLanguage].documentReceivedDateLabel, formatDateOnlyDMY(personalInfo.documentReceivedDate));
    }
    if (personalInfo.documentReturnDate) {
      addRow(translations[currentLanguage].documentReturnDateLabel, formatDateOnlyDMY(personalInfo.documentReturnDate));
    }
    if (documentParts.length) {
      addRow(translations[currentLanguage].documentsTitle, documentParts.join(", "));
    }
    if (documents.note) {
      addRow(translations[currentLanguage].documentsNoteLabel, documents.note);
    }
    if (caseStatus.status) {
      addRow(translations[currentLanguage].statusTitle, getCaseStatusLabel(caseStatus.status));
    }
    if (caseStatus.appointmentDate) {
      addRow(translations[currentLanguage].statusAppointmentDateLabel, formatDateOnlyDMY(caseStatus.appointmentDate));
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
    const attachments = Array.isArray(record.data.attachments)
      ? record.data.attachments.map((item) => ({
          label: currentLanguage === "th" ? "ไฟล์แนบ" : "Attachment",
          value: item?.name || "attachment",
          dataUrl: item?.dataUrl || "",
        }))
      : [];
    if (!attachments.length) {
      LEGACY_ATTACHMENT_KEYS.forEach((key) => {
        if (record.data[key]) {
          attachments.push({
            label: currentLanguage === "th" ? "ไฟล์แนบ" : "Attachment",
            value: record.data[key],
            dataUrl: record.data[`${key}Data`] || "",
          });
        }
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
          const openLink = createAttachmentLink(item);
          if (openLink) {
            listItem.appendChild(document.createTextNode(" "));
            listItem.appendChild(openLink);
          }
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
    personalInfo.fullName,
    personalInfo.gender,
    personalInfo.nationality,
    personalInfo.email,
    personalInfo.code,
    personalInfo.alienId,
    personalInfo.workPermitNumber,
    personalInfo.workPermitExpiry,
    personalInfo.passNumber,
    personalInfo.passIssueDate,
    personalInfo.passExpiryDate,
    personalInfo.personalVisaExpiryDate,
    personalInfo.businessType,
    personalInfo.employerName,
    personalInfo.employerEmail,
    personalInfo.employerEmailCode,
    personalInfo.employerAddress,
    personalInfo.documentSender,
    personalInfo.documentSentDate,
    personalInfo.documentReceiver,
    personalInfo.documentReceivedDate,
    personalInfo.documentReturnDate,
    caseStatus.status,
    caseStatus.appointmentDate,
    caseStatus.appointmentNote,
    documents.note,
    record.data.followupType,
    record.data.followup?.startDate,
    record.data.followup?.nextDate,
    record.data.followup?.endDate,
    record.data.followup?.documentReceivedDate,
    record.data.followup?.documentReturnDate,
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
      const workerName = resolveWorkerNameForDisplay(record);
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
  const primaryNameCleared = formData.personalInfo?.fullName === "";
  const workerNames = (formData.workers || []).map((worker) => worker.fullName).filter(Boolean);
  const workerCountLabel = workerNames.length
    ? ` (${workerNames.length} ${translations[currentLanguage].workerCountSuffix})`
    : "";
  const displayWorkerName = primaryNameCleared ? "" : formData.personalInfo?.fullName || workerNames[0] || "";
  const displayName =
    formData.personalInfo?.employerName?.trim()
      ? `${formData.personalInfo.employerName}${workerCountLabel}`
      : displayWorkerName || formData.employerId || formId;
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
    const selectedTypes = Array.isArray(record.data?.formTypes) && record.data.formTypes.length
      ? record.data.formTypes
      : [record.formType];
    formTypeInputs.forEach((input) => {
      input.checked = selectedTypes.includes(input.value);
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
  if (workPermitNumber) workPermitNumber.value = record.data.personalInfo?.workPermitNumber || "";
  if (workPermitExpiry) workPermitExpiry.value = normalizeDisplayDateValue(record.data.personalInfo?.workPermitExpiry);
  if (passNumber) passNumber.value = record.data.personalInfo?.passNumber || "";
  if (passIssueDate) passIssueDate.value = normalizeDisplayDateValue(record.data.personalInfo?.passIssueDate);
  if (passExpiryDate) passExpiryDate.value = normalizeDisplayDateValue(record.data.personalInfo?.passExpiryDate);
  if (personalVisaExpiryDate) personalVisaExpiryDate.value = normalizeDisplayDateValue(record.data.personalInfo?.personalVisaExpiryDate);
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
  if (employerEmailCode) employerEmailCode.value = record.data.personalInfo?.employerEmailCode || "";
  if (employerAddress) employerAddress.value = record.data.personalInfo?.employerAddress || "";
  if (documentSender) documentSender.value = record.data.personalInfo?.documentSender || "";
  if (documentSentDate) documentSentDate.value = normalizeDisplayDateValue(record.data.personalInfo?.documentSentDate);
  if (documentReceiver) documentReceiver.value = record.data.personalInfo?.documentReceiver || "";
  if (documentReceivedDate) documentReceivedDate.value = normalizeDisplayDateValue(record.data.personalInfo?.documentReceivedDate);
  if (documentReturnDate) documentReturnDate.value = normalizeDisplayDateValue(record.data.personalInfo?.documentReturnDate);
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
  if (appointmentDate) appointmentDate.value = normalizeDisplayDateValue(record.data.caseStatus?.appointmentDate);
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
  if (startDate) startDate.value = normalizeDisplayDateValue(record.data.startDate);
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
  const legacyAttachments = LEGACY_ATTACHMENT_KEYS.flatMap((key) => {
    const name = record.data?.[key] || "";
    const dataUrl = record.data?.[`${key}Data`] || "";
    return name ? [{ name, dataUrl, type: "", size: 0 }] : [];
  });
  genericAttachments = Array.isArray(record.data.attachments)
    ? record.data.attachments.map((item) => ({ name: item?.name || "ไฟล์แนบ", dataUrl: item?.dataUrl || "", type: item?.type || "", size: item?.size || 0 }))
    : legacyAttachments;
  updateSections();
  renderGenericAttachments();
  updateBusinessTypeCustomVisibility();
  initBrandIdentity();
  bindPersonalExpiryStatuses();
};

const updateFormStepVisibility = () => {
  if (!formSteps?.length) return;
  const isSinglePage = workerForm?.dataset?.singlePage === "true";
  formSteps.forEach((step) => {
    const stepNo = Number(step.dataset.step || 1);
    step.classList.toggle("is-hidden", !isSinglePage && stepNo !== currentFormStep);
  });
};

updateFormStepVisibility();
bindPersonalExpiryStatuses();

if (nextStepLink) {
  nextStepLink.addEventListener("click", (event) => {
    event.preventDefault();
    saveFormDraft();
    currentFormStep = 2;
    updateFormStepVisibility();
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
    if (workerForm?.dataset?.singlePage === "true") {
      return;
    }
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
if (attachmentsInput) {
  updateAttachmentsFileHint();
  attachmentsInput.addEventListener("change", () => handleGenericAttachmentInputChange(attachmentsInput));
}
if (attachmentsCameraInput) {
  attachmentsCameraInput.addEventListener("change", () => handleGenericAttachmentInputChange(attachmentsCameraInput));
}
if (openCameraButton && attachmentsCameraInput) {
  openCameraButton.addEventListener("click", () => attachmentsCameraInput.click());
}
updateSections();
updateFormTypeOtherVisibility();
updateAppointmentVisibility();
updateBusinessTypeCustomVisibility();
ensureWorkerCards();
renderGenericAttachments();
refreshNameSuggestions();
loadFormDraft();
initTodayTaskQuickAdd();
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
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideLoader, 50);
  });
  window.addEventListener("error", () => {
    hideLoader();
  });
  window.addEventListener("unhandledrejection", () => {
    hideLoader();
  });
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
  renderGenericAttachments();
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
if (backupAllDataButton) {
  backupAllDataButton.addEventListener("click", () => {
    exportBackupData().catch(() => setStatus(recordsStatus || formSaveStatus, "ไม่สามารถสำรองข้อมูลได้", "error"));
  });
}
if (restoreAllDataButton && restoreAllDataInput) {
  restoreAllDataButton.addEventListener("click", () => restoreAllDataInput.click());
  restoreAllDataInput.addEventListener("change", async (event) => {
    const file = event?.target?.files?.[0];
    if (!file) return;
    try {
      await importBackupData(file);
    } catch (_error) {
      setStatus(recordsStatus || formSaveStatus, "ไม่สามารถนำเข้าข้อมูลสำรองได้", "error");
    } finally {
      restoreAllDataInput.value = "";
    }
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
initBrandIdentity();

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
