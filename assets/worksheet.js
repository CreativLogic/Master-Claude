// Tiny worksheet engine: localStorage save/load, checklist persistence,
// markdown export, reset. No framework.

(function () {
  const KEY_PREFIX = "claude-course.worksheet.";

  function storageKey() {
    const dayId = document.body.dataset.day || "unknown";
    return KEY_PREFIX + dayId;
  }

  function collectState() {
    const state = { savedAt: new Date().toISOString(), fields: {}, checks: {} };
    document.querySelectorAll("[data-field]").forEach((el) => {
      state.fields[el.dataset.field] = el.value || "";
    });
    document.querySelectorAll(".checklist input[type='checkbox']").forEach((el) => {
      state.checks[el.dataset.item] = el.checked;
    });
    return state;
  }

  function applyState(state) {
    if (!state) return;
    Object.entries(state.fields || {}).forEach(([k, v]) => {
      const el = document.querySelector(`[data-field="${k}"]`);
      if (el) el.value = v;
    });
    Object.entries(state.checks || {}).forEach(([k, v]) => {
      const el = document.querySelector(`.checklist input[data-item="${k}"]`);
      if (el) {
        el.checked = !!v;
        el.closest("li")?.classList.toggle("done", !!v);
      }
    });
    updateProgress();
  }

  function updateProgress() {
    const checks = document.querySelectorAll(".checklist input[type='checkbox']");
    if (!checks.length) return;
    const done = Array.from(checks).filter((c) => c.checked).length;
    const pct = Math.round((done / checks.length) * 100);
    const fill = document.querySelector(".progress-bar .fill");
    if (fill) fill.style.width = pct + "%";
    const label = document.querySelector("[data-progress-label]");
    if (label) label.textContent = `${done} of ${checks.length} done (${pct}%)`;
  }

  function save() {
    const state = collectState();
    try {
      localStorage.setItem(storageKey(), JSON.stringify(state));
      setStatus("Saved ✓", "ok");
    } catch (e) {
      setStatus("Could not save: " + e.message, "err");
    }
  }

  function load() {
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) return;
      applyState(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to load state", e);
    }
  }

  function reset() {
    if (!confirm("Clear everything on this worksheet? Can't be undone.")) return;
    localStorage.removeItem(storageKey());
    document.querySelectorAll("[data-field]").forEach((el) => (el.value = ""));
    document.querySelectorAll(".checklist input[type='checkbox']").forEach((el) => {
      el.checked = false;
      el.closest("li")?.classList.remove("done");
    });
    updateProgress();
    setStatus("Reset.", "");
  }

  function setStatus(msg, cls) {
    const el = document.querySelector(".status");
    if (!el) return;
    el.textContent = msg;
    el.className = "status " + (cls || "");
    if (msg) setTimeout(() => {
      if (el.textContent === msg) { el.textContent = ""; el.className = "status"; }
    }, 2500);
  }

  function exportMarkdown() {
    const dayTitle = document.querySelector("h1")?.textContent?.trim() || "Day";
    const state = collectState();
    const lines = [`# ${dayTitle} — My Worksheet`, "", `_Saved: ${state.savedAt}_`, ""];

    const checks = document.querySelectorAll(".checklist li");
    if (checks.length) {
      lines.push("## Checklist");
      lines.push("");
      checks.forEach((li) => {
        const box = li.querySelector("input[type='checkbox']");
        const label = li.querySelector("label")?.textContent?.trim() || "";
        lines.push(`- [${box?.checked ? "x" : " "}] ${label}`);
      });
      lines.push("");
    }

    const fills = document.querySelectorAll("[data-field]");
    if (fills.length) {
      lines.push("## My responses");
      lines.push("");
      fills.forEach((el) => {
        const label =
          document.querySelector(`label[for="${el.id}"]`)?.textContent?.trim() ||
          el.dataset.field;
        lines.push(`### ${label}`);
        lines.push("");
        lines.push(el.value?.trim() || "_(blank)_");
        lines.push("");
      });
    }

    const md = lines.join("\n");
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (document.body.dataset.day || "day") + "-worksheet.md";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setStatus("Exported ↓", "ok");
  }

  document.addEventListener("DOMContentLoaded", () => {
    load();

    document.querySelectorAll(".checklist li").forEach((li) => {
      const box = li.querySelector("input[type='checkbox']");
      if (!box) return;
      li.addEventListener("click", (e) => {
        if (e.target.tagName === "INPUT") return; // default handling
        box.checked = !box.checked;
        box.dispatchEvent(new Event("change"));
      });
      box.addEventListener("change", () => {
        li.classList.toggle("done", box.checked);
        updateProgress();
        save(); // auto-save on every check
      });
    });

    document.querySelectorAll("[data-field]").forEach((el) => {
      let t;
      el.addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(save, 600); // auto-save after user pauses typing
      });
    });

    document.querySelector("[data-action='save']")?.addEventListener("click", save);
    document.querySelector("[data-action='export']")?.addEventListener("click", exportMarkdown);
    document.querySelector("[data-action='reset']")?.addEventListener("click", reset);

    updateProgress();
  });
})();
