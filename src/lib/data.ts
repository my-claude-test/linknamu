export interface ProfileData {
  name: string;
  bio: string;
  /** 비어 있으면 이름의 첫 글자로 대체 아바타를 표시합니다. */
  avatarUrl: string;
}

export interface LinkItem {
  /** 클릭 수 집계 키. 고유해야 합니다. */
  id: string;
  label: string;
  url: string;
  /** 카드 왼쪽에 표시할 이모지 아이콘 */
  icon: string;
}

// ⚠️ 아래는 전부 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.

/** 네트워크 없이도 렌더되는 자체 포함 더미 아바타 (회색 실루엣) */
const DUMMY_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ccircle cx='80' cy='60' r='28' fill='%239ca3af'/%3E%3Cellipse cx='80' cy='140' rx='50' ry='34' fill='%239ca3af'/%3E%3C/svg%3E";

export const profile: ProfileData = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: DUMMY_AVATAR,
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com", icon: "🐙" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
  { id: "blog", label: "Blog", url: "https://example.com", icon: "✍️" },
];
