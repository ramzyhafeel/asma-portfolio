import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "theme"; // "light" | "dark"

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light") return saved;

  // Default to light warm ivory palette
  return "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const api = useMemo(() => {
    return {
      theme,
      isDark: theme === "dark",
      setTheme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    };
  }, [theme]);

  return api;
}