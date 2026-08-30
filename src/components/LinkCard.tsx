"use client";

import { useState } from "react";
import type { LinkItem } from "@/lib/data";

export default function LinkCard({
  link,
  initialCount,
}: {
  link: LinkItem;
  initialCount?: number;
}) {
  const [count, setCount] = useState<number | undefined>(initialCount);

  // 새 탭으로 열리므로 현재 페이지는 유지된다. 클릭 집계는 fire-and-forget.
  function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: link.id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group flex w-full items-center gap-3 rounded-2xl border border-white/50 bg-white/50 px-5 py-4 text-neutral-800 shadow-[0_6px_22px_-10px_rgba(140,90,50,0.28)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_12px_30px_-12px_rgba(140,90,50,0.38)] dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-100 dark:hover:bg-white/[0.1]"
    >
      <span className="text-xl" aria-hidden>
        {link.icon}
      </span>
      <span className="flex-1 text-center font-medium">{link.label}</span>
      <span className="min-w-[2ch] text-right text-xs text-neutral-500/70 dark:text-neutral-400/60">
        {typeof count === "number" ? count.toLocaleString() : ""}
      </span>
    </a>
  );
}
