function openMenu() {
  document.getElementById("fullMenu").classList.add("active");
}

function closeMenu() {
  document.getElementById("fullMenu").classList.remove("active");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

document.getElementById("fullMenu")?.addEventListener("click", (e) => {
  if (e.target.id === "fullMenu") {
    closeMenu();
  }
});

const THEME_KEY = "alinur-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) {
    const icon = btn.querySelector(".theme-icon");
    if (icon) {
      icon.textContent =
        theme === "light"
          ? icon.getAttribute("data-light")
          : icon.getAttribute("data-dark");
    }
    btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    btn.title =
      theme === "light" ? "Переключить на тёмную" : "Сменить на светлую";
  }
}

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") || "dark";
}

function getStoredTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}

  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

function initTheme() {
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme);

  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => {
      try {
        const saved = localStorage.getItem(THEME_KEY);
        if (!saved) {
          applyTheme(e.matches ? "light" : "dark");
        }
      } catch (err) {}
    });

  window.addEventListener("storage", (e) => {
    if (
      e.key === THEME_KEY &&
      (e.newValue === "light" || e.newValue === "dark")
    ) {
      applyTheme(e.newValue);
    }
  });

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = getCurrentTheme();
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {}
    });
  }
}

document.addEventListener("DOMContentLoaded", initTheme);
