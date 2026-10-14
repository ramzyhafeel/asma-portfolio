import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "theme";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    if (document.body) {
      document.body.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, "light");
  }, []);

  const api = useMemo(() => {
    return {
      theme: "light",
      isDark: false,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }, []);

  return api;
}