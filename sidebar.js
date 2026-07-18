// Sidebar / navigation rail toggle — shared across all pages.
// Keeps the mobile drawer behaviour identical everywhere and isolated
// from page-specific logic so it can never be broken by a page bug.
(() => {
  const toggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("appSidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  if (!toggle || !sidebar || !backdrop) return;

  const openSidebar = () => {
    sidebar.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };
  const closeSidebar = () => {
    sidebar.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const isOpen = () => sidebar.classList.contains("is-open");

  toggle.addEventListener("click", () => (isOpen() ? closeSidebar() : openSidebar()));
  backdrop.addEventListener("click", closeSidebar);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) closeSidebar();
  });
  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeSidebar();
  });
})();

// ── Connection status pill — shown when the browser goes offline ──
(() => {
  const renderStatus = () => {
    let el = document.getElementById("connectionStatus");
    if (!navigator.onLine) {
      if (!el) {
        el = document.createElement("div");
        el.id = "connectionStatus";
        el.className = "connection-status";
        document.body.appendChild(el);
      }
      el.textContent = "ออฟไลน์ — การเปลี่ยนแปลงจะบันทึกไว้ในเครื่องนี้ก่อน";
      el.classList.add("is-visible");
    } else if (el) {
      el.classList.remove("is-visible");
      setTimeout(() => el && el.remove(), 300);
    }
  };
  window.addEventListener("online", renderStatus);
  window.addEventListener("offline", renderStatus);
  renderStatus();
})();
