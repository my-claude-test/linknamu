"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/lib/data";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 빈 맵 → 각 카드가 0회로 표시됩니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열리면 모든 링크의 현재 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    let alive = true;
    fetch("/api/click")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (alive && data && data.counts) setCounts(data.counts);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="flex w-full flex-col gap-3.5">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} count={counts[link.id] ?? 0} />
      ))}
    </div>
  );
}
