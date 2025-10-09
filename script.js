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

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

function initTheme() {
  applyTheme(getPreferredTheme());
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => {
      const saved = localStorage.getItem(THEME_KEY);
      if (!saved) {
        applyTheme(e.matches ? "light" : "dark");
      }
    });

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
}

document.addEventListener("DOMContentLoaded", initTheme);
