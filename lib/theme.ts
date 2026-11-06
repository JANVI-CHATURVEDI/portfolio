export type Theme = "light" | "dark";

export const themeChangeEvent = "portfolio-theme-change";

export function currentTheme(): Theme {
  const stored = document.documentElement.dataset.theme;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function toggleTheme(): Theme {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  window.dispatchEvent(new Event(themeChangeEvent));
  try {
    localStorage.setItem("theme", next);
  } catch {
    return next;
  }
  return next;
}
