# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 기능

- **프로필**: 이름, 한 줄 소개, 프로필 사진(없으면 이름 첫 글자 아바타)
- **링크 카드**: SNS·블로그 링크를 카드로 나열, 새 탭으로 열림
- **다크모드**: 토글 버튼으로 전환, `localStorage`에 저장, 새로고침 깜빡임 없음
- **클릭 수 집계**: 링크별 클릭 횟수를 MongoDB에 기록·표시 (선택)

## 기술 스택

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- 배포: Vercel

## 실행

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

## 환경 변수

클릭 수 집계를 쓰려면 `.env.local` 에 MongoDB 연결 정보를 넣습니다
(`.env.local.example` 참고). 설정하지 않아도 나머지 기능은 정상 동작합니다.

| 변수 | 설명 |
| --- | --- |
| `MONGODB_URI` | MongoDB Atlas 연결 문자열 |
| `MONGODB_DB` | 사용할 DB 이름 (기본값 `linknamu`) |

## 콘텐츠 수정

- 프로필·링크 목록: `src/lib/data.ts`
- 컴포넌트: `src/components/`
- 클릭 집계 로직: `src/lib/clicks.ts`, API는 `src/app/api/click/route.ts`

## 배포 (Vercel)

1. GitHub 저장소를 Vercel에 연결
2. 프로젝트 설정 > Environment Variables 에 `MONGODB_URI`, `MONGODB_DB` 추가
3. MongoDB Atlas의 Network Access 에 `0.0.0.0/0` 허용 (또는 Vercel IP)
