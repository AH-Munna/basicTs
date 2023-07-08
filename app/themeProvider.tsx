"use client";
import { useEffect, useState } from "react";

const ThemeProvider = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    localStorage.theme = theme;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      className="mx-4 px-4 py-2 rounded-md border-2 border-red-950 dark:border-red-300 text-red-950 dark:text-red-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      change theme
    </button>
  );
};

export default ThemeProvider;
