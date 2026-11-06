"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import {
  currentTheme,
  themeChangeEvent,
  toggleTheme,
  type Theme,
} from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const sync = () => setTheme(currentTheme());
    const media = window.matchMedia("(prefers-color-scheme: light)");

    sync();
    window.addEventListener(themeChangeEvent, sync);
    window.addEventListener("storage", sync);
    media.addEventListener("change", sync);

    return () => {
      window.removeEventListener(themeChangeEvent, sync);
      window.removeEventListener("storage", sync);
      media.removeEventListener("change", sync);
    };
  }, []);

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      className="icon-btn"
      aria-label={label}
      title={label}
      onClick={() => setTheme(toggleTheme())}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
