import type { LinkItem } from "@/lib/data";
import LinkCard from "./LinkCard";

export default function LinkList({
  links,
  counts,
}: {
  links: LinkItem[];
  counts: Record<string, number>;
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} initialCount={counts[link.id]} />
      ))}
    </div>
  );
}
