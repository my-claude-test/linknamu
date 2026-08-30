"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/50 text-base shadow-[0_4px_16px_-8px_rgba(140,90,50,0.3)] backdrop-blur-md transition duration-200 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      {/* 서버-클라이언트 마크업 불일치를 피하려고 마운트 전에는 빈 상태로 둡니다. */}
      {mounted ? (theme === "dark" ? "🌙" : "☀️") : ""}
    </button>
  );
}
