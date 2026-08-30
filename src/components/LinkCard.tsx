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
      className="group flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
      <span className="text-xl" aria-hidden>
        {link.icon}
      </span>
      <span className="flex-1 text-center font-medium">{link.label}</span>
      <span className="min-w-[2ch] text-right text-xs text-neutral-400">
        {typeof count === "number" ? count.toLocaleString() : ""}
      </span>
    </a>
  );
}
