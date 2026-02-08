const openRecordModal = (record) => {
  recordModalTitle.textContent = translations[currentLanguage].recordModalTitle;
  recordModalBody.innerHTML = "";

  if (!record) {
    const message = document.createElement("p");
    message.textContent = translations[currentLanguage].recordNotFound;
    recordModalBody.appendChild(message);

    recordModal.classList.add("is-open");
    recordModal.setAttribute("aria-hidden", "false");
    return;
  }

  const title = document.createElement("h4");
  title.textContent = translations[currentLanguage].recordDetailsTitle;

  const list = document.createElement("ul");

  const employerItem = document.createElement("li");
  employerItem.textContent = `${translations[currentLanguage].recordEmployerLabel}: ${
    record.data.personalInfo?.employerName || record.data.company || record.data.employerId || "-"
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
  paymentDateItem.textContent = `${translations[currentLanguage].paymentDateLabel}: ${record.data.paymentDate || "-"}`;

  const recordedByItem = document.createElement("li");
  recordedByItem.textContent = `${translations[currentLanguage].recordedByLabel}: ${record.data.recordedBy || "-"}`;

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
  if (documents.healthCard) documentParts.push(translations[currentLanguage].documentHealthCard);
  if (documents.exitNotice) documentParts.push(translations[currentLanguage].documentExitNotice);
  if (documents.houseReg) documentParts.push(translations[currentLanguage].documentHouseReg);
  if (documents.employerIdCard) documentParts.push(translations[currentLanguage].documentEmployerIdCard);
  if (documents.companyCert) documentParts.push(translations[currentLanguage].documentCompanyCert);

  list.appendChild(employerItem);
  if (record.data.caseType) list.appendChild(caseTypeItem);
  list.appendChild(typeItem);
  list.appendChild(statusItem);
  list.appendChild(paymentItem);
  list.appendChild(paymentDateItem);
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

  if (personalInfo.documentReceivedDate) {
    const receivedItem = document.createElement("li");
    receivedItem.textContent = `${translations[currentLanguage].documentReceivedDateLabel}: ${personalInfo.documentReceivedDate}`;
    list.appendChild(receivedItem);
  }

  if (personalInfo.documentReturnDate) {
    const returnItem = document.createElement("li");
    returnItem.textContent = `${translations[currentLanguage].documentReturnDateLabel}: ${personalInfo.documentReturnDate}`;
    list.appendChild(returnItem);
  }

  if (documentParts.length) {
    const documentsItem = document.createElement("li");
    documentsItem.textContent = `${translations[currentLanguage].documentsTitle}: ${documentParts.join(", ")}`;
    list.appendChild(documentsItem);
  }

  if (documents.note) {
    const noteItem = document.createElement("li");
    noteItem.textContent = `${translations[currentLanguage].documentsNoteLabel}: ${documents.note}`;
    list.appendChild(noteItem);
  }

  if (caseStatus.status) {
    const caseStatusItem = document.createElement("li");
    caseStatusItem.textContent = `${translations[currentLanguage].statusTitle}: ${getCaseStatusLabel(caseStatus.status)}`;
    list.appendChild(caseStatusItem);
  }

  if (caseStatus.appointmentDate) {
    const appointmentItem = document.createElement("li");
    appointmentItem.textContent = `${translations[currentLanguage].statusAppointmentDateLabel}: ${caseStatus.appointmentDate}`;
    list.appendChild(appointmentItem);
  }

  recordModalBody.appendChild(title);
  recordModalBody.appendChild(list);

  // ✅ สำคัญ: “ไม่ render รายละเอียดแรงงานแบบกรอบใหญ่” (ส่วนที่คุณกากบาทไว้)
  // เลยตัด block workers.forEach(...) ออกทั้งหมด

  // (ส่วนเอกสาร/แจ้งเตือน + แนบไฟล์ ยังแสดงเหมือนเดิมตามโค้ดคุณ)
  // ดังนั้นหลังจากนี้ให้ใช้โค้ดเดิมของคุณต่อได้เลย
  // ถ้าคุณต้องการ ผมสามารถรวมส่วนท้ายให้เต็มไฟล์ได้เมื่อคุณส่ง app.js เป็นไฟล์หรือวางต่อท้ายให้ครบ

  recordModal.classList.add("is-open");
  recordModal.setAttribute("aria-hidden", "false");
};
