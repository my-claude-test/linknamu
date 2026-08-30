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

// ⚠️ 링크 목록은 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.

export const profile: ProfileData = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "https://placehold.co/150x150/orange/white",
};

export const links: LinkItem[] = [
  { id: "github", label: "깃허브", url: "https://github.com/firezenh", icon: "🐙" },
  {
    id: "blog",
    label: "블로그",
    url: "https://m.blog.naver.com/PostList.naver?blogId=ranto28&tab=1",
    icon: "✍️",
  },
  { id: "email", label: "이메일", url: "mailto:test@test.com", icon: "✉️" },
];
