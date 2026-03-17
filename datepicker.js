(() => {
  const MONTHS_TH = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const WEEKDAYS_SHORT = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

  const pad = (n) => String(n).padStart(2, "0");
  const normalizeThaiYear = (year) => (year >= 2400 ? year - 543 : year);
  const toDateValue = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const toDisplayValue = (date) => `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear() + 543}`;
  const buildSafeDate = (year, month, day) => {
    const y = normalizeThaiYear(year);
    const dt = new Date(y, month - 1, day);
    if (dt.getFullYear() !== y || dt.getMonth() !== month - 1 || dt.getDate() !== day) return null;
    return dt;
  };
  const parseDateValue = (value) => {
    const text = String(value || "").trim();
    if (!text) return null;

    const slash = text.split("/").map((x) => Number.parseInt(x, 10));
    if (slash.length === 3 && !slash.some(Number.isNaN)) {
      const [d, m, y] = slash;
      const slashDate = buildSafeDate(y, m, d);
      if (slashDate) return slashDate;
    }

    const dash = text.split("-").map((x) => Number.parseInt(x, 10));
    if (dash.length === 3 && !dash.some(Number.isNaN)) {
      const [a, b, c] = dash;
      if (a > 31) {
        const ymdDate = buildSafeDate(a, b, c);
        if (ymdDate) return ymdDate;
      }
      const dmyDate = buildSafeDate(c, b, a);
      if (dmyDate) return dmyDate;
    }

    const fallback = new Date(text);
    if (Number.isNaN(fallback.getTime())) return null;
    return new Date(fallback.getFullYear(), fallback.getMonth(), fallback.getDate());
  };

  const state = {
    activeInput: null,
    cursor: new Date(),
    selected: null,
  };

  const wrap = document.createElement("div");
  wrap.className = "date-picker-popover is-hidden";
  wrap.innerHTML = `
    <div class="date-picker" role="dialog" aria-modal="false" aria-label="เลือกวันที่">
      <div class="date-picker__header">
        <button type="button" class="date-picker__nav" data-nav="prev" aria-label="เดือนก่อนหน้า">←</button>
        <button type="button" class="date-picker__title" data-title></button>
        <button type="button" class="date-picker__nav" data-nav="next" aria-label="เดือนถัดไป">→</button>
      </div>
      <div class="date-picker__weekdays" data-weekdays></div>
      <div class="date-picker__grid" data-grid></div>
      <div class="date-picker__footer">
        <button type="button" class="date-picker__action" data-action="clear">ล้าง</button>
        <button type="button" class="date-picker__action date-picker__action--today" data-action="today">วันนี้</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  const titleEl = wrap.querySelector("[data-title]");
  const gridEl = wrap.querySelector("[data-grid]");
  const weekdaysEl = wrap.querySelector("[data-weekdays]");

  WEEKDAYS_SHORT.forEach((day) => {
    const el = document.createElement("span");
    el.textContent = day;
    weekdaysEl.appendChild(el);
  });

  const positionPopover = (input) => {
    const rect = input.getBoundingClientRect();
    const top = rect.bottom + window.scrollY + 8;
    const left = Math.min(rect.left + window.scrollX, window.scrollX + window.innerWidth - 300);
    wrap.style.top = `${top}px`;
    wrap.style.left = `${Math.max(window.scrollX + 8, left)}px`;
  };

  const closePicker = () => {
    state.activeInput = null;
    wrap.classList.add("is-hidden");
  };

  const render = () => {
    const y = state.cursor.getFullYear();
    const m = state.cursor.getMonth();
    titleEl.textContent = `${MONTHS_TH[m]} ${y + 543}`;
    gridEl.innerHTML = "";

    const first = new Date(y, m, 1);
    const startDay = first.getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const daysInPrev = new Date(y, m, 0).getDate();
    const today = new Date();
    const todayValue = toDateValue(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
    const selectedValue = state.selected ? toDateValue(state.selected) : "";

    for (let i = 0; i < 42; i += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "date-picker__day";
      let date;
      if (i < startDay) {
        date = new Date(y, m - 1, daysInPrev - startDay + i + 1);
        cell.classList.add("is-outside");
      } else if (i >= startDay + daysInMonth) {
        date = new Date(y, m + 1, i - (startDay + daysInMonth) + 1);
        cell.classList.add("is-outside");
      } else {
        date = new Date(y, m, i - startDay + 1);
      }
      const value = toDateValue(date);
      cell.dataset.value = value;
      cell.textContent = String(date.getDate());
      if (value === todayValue) cell.classList.add("is-today");
      if (value === selectedValue) cell.classList.add("is-selected");
      gridEl.appendChild(cell);
    }
  };

  const openPicker = (input) => {
    state.activeInput = input;
    const selected = parseDateValue(input.value);
    state.selected = selected;
    state.cursor = selected || new Date();
    render();
    positionPopover(input);
    wrap.classList.remove("is-hidden");
  };

  wrap.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-nav]");
    if (nav) {
      const dir = nav.dataset.nav === "prev" ? -1 : 1;
      state.cursor = new Date(state.cursor.getFullYear(), state.cursor.getMonth() + dir, 1);
      render();
      return;
    }
    const action = event.target.closest("[data-action]");
    if (action) {
      if (!state.activeInput) return;
      if (action.dataset.action === "clear") {
        state.activeInput.value = "";
      } else {
        const today = new Date();
        state.activeInput.value = toDisplayValue(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
      }
      state.activeInput.dispatchEvent(new Event("input", { bubbles: true }));
      state.activeInput.dispatchEvent(new Event("change", { bubbles: true }));
      closePicker();
      return;
    }

    const day = event.target.closest(".date-picker__day");
    if (day && state.activeInput) {
      const selectedDate = parseDateValue(day.dataset.value || "");
      state.activeInput.value = selectedDate ? toDisplayValue(selectedDate) : "";
      state.activeInput.dispatchEvent(new Event("input", { bubbles: true }));
      state.activeInput.dispatchEvent(new Event("change", { bubbles: true }));
      closePicker();
    }
  });

  const enhanceInput = (input) => {
    if (!input || input.getAttribute("data-enhanced-date") === "1") return;
    if (input.type === "date") {
      input.type = "text";
    }
    input.setAttribute("data-enhanced-date", "1");
    input.setAttribute("placeholder", "ว/ด/ป");
    input.setAttribute("inputmode", "numeric");
    input.autocomplete = "off";

    input.addEventListener("focus", () => openPicker(input));
    input.addEventListener("blur", () => {
      const parsed = parseDateValue(input.value);
      if (!parsed) return;
      input.value = toDisplayValue(parsed);
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
  };

  document.querySelectorAll('input[type="date"]').forEach((input) => enhanceInput(input));

  document.addEventListener("click", (event) => {
    const input = event.target.closest('input[type="date"], input[data-enhanced-date="1"]');
    if (input) {
      enhanceInput(input);
      openPicker(input);
      return;
    }
    if (!event.target.closest(".date-picker-popover")) {
      closePicker();
    }
  });

  window.addEventListener("scroll", () => {
    if (state.activeInput && !wrap.classList.contains("is-hidden")) {
      positionPopover(state.activeInput);
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (state.activeInput && !wrap.classList.contains("is-hidden")) {
      positionPopover(state.activeInput);
    }
  });
})();
