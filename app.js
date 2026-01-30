const formType = document.getElementById("formType");
const sections = document.querySelectorAll(".form-section");

const updateSections = () => {
  const selected = formType.value;
  sections.forEach((section) => {
    section.style.display = section.dataset.section === selected ? "block" : "none";
  });
};

formType.addEventListener("change", updateSections);
updateSections();
