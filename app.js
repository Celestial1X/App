const formType = document.getElementById("formType");
const sections = document.querySelectorAll(".form-section");
const passportInput = document.getElementById("passport");
const passportCheckInput = document.getElementById("passportCheck");
const passportStatus = document.getElementById("passportStatus");
const passportInlineStatus = document.getElementById("passportInlineStatus");
const employerCheckInput = document.getElementById("employerCheck");
const employerStatus = document.getElementById("employerStatus");
const expiryInput = document.getElementById("expiry");
const expiryStatus = document.getElementById("expiryStatus");
const uploadInputs = document.querySelectorAll("#facePhoto, #idCard, #houseDoc");
const uploadList = document.getElementById("uploadList");

const updateSections = () => {
  const selected = formType.value;
  sections.forEach((section) => {
    section.style.display = section.dataset.section === selected ? "block" : "none";
  });
};

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
    setStatus(target, "กรุณากรอกเลขพาสปอร์ต");
    return;
  }
  const cleaned = value.trim().toUpperCase();
  const isValid = /^[A-Z][0-9]{6,8}$/.test(cleaned);
  setStatus(
    target,
    isValid ? "รูปแบบเลขพาสปอร์ตถูกต้อง (ตัวอย่าง)" : "รูปแบบไม่ถูกต้อง (ต้องมีตัวอักษร 1 ตัว + ตัวเลข 6-8 ตัว)",
    isValid ? "ok" : "error"
  );
};

const updateEmployerStatus = () => {
  const value = employerCheckInput.value.trim();
  if (!value) {
    setStatus(employerStatus, "ยังไม่มีคำค้นหา");
    return;
  }
  setStatus(employerStatus, `กำลังตรวจสอบข้อมูล: ${value}`, "warn");
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
    selectedDate < today ? "ใบอนุญาตหมดอายุแล้ว" : "ใบอนุญาตยังไม่หมดอายุ",
    statusType
  );
};

const updateUploadList = () => {
  const files = Array.from(uploadInputs).flatMap((input) => Array.from(input.files));
  uploadList.innerHTML = "";
  if (!files.length) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "ยังไม่มีไฟล์ที่อัปโหลด";
    uploadList.appendChild(emptyItem);
    return;
  }
  files.forEach((file) => {
    const item = document.createElement("li");
    item.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
    uploadList.appendChild(item);
  });
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
