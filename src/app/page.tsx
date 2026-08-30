import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { getClickCounts } from "@/lib/clicks";
import { links, profile } from "@/lib/data";

// 클릭 수를 매 요청마다 최신으로 보여주기 위해 정적 캐시를 끕니다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[26rem] flex-col items-center px-7 py-14 sm:px-8">
      {/* 다크모드 토글 (와이어프레임에는 없지만 핵심 기능이라 우상단에 배치) */}
      <div className="mb-10 flex w-full justify-end">
        <ThemeToggle />
      </div>

      {/* 상단: 원형 프로필 사진 · 이름 · 한 줄 소개 */}
      <Profile profile={profile} />

      {/* 하단: 링크 카드 세로 목록 (GitHub · LinkedIn · Blog) */}
      <div className="mt-11 w-full">
        <LinkList links={links} counts={counts} />
      </div>

      <footer className="mt-auto pt-16 text-center text-xs text-neutral-500/70 dark:text-neutral-400/60">
        © {new Date().getFullYear()} 링크나무
      </footer>
    </main>
  );
}
