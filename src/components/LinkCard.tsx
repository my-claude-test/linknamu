"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/lib/data";

export default function LinkCard({
  link,
  count,
}: {
  link: LinkItem;
  /** LinkList가 서버에서 받아온 현재 클릭 수. 받기 전에는 0. */
  count: number;
}) {
  const [displayCount, setDisplayCount] = useState(count);

  // LinkList의 fetch가 끝나 실제 값이 내려오면 화면을 갱신합니다.
  useEffect(() => {
    setDisplayCount(count);
  }, [count]);

  // 새 탭으로 열리므로 현재 페이지는 유지된다. 클릭 집계는 fire-and-forget.
  function handleClick() {
    setDisplayCount((c) => c + 1); // 낙관적 갱신
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: link.id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.count === "number") setDisplayCount(data.count);
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
      <span className="min-w-[3ch] whitespace-nowrap text-right text-xs text-neutral-500/70 dark:text-neutral-400/60">
        {displayCount.toLocaleString()}회
      </span>
    </a>
  );
}
