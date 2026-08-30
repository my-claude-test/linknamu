import { getClickCounts, incrementClick } from "@/lib/clicks";

export const runtime = "nodejs";

// 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 내려줍니다.
export async function GET() {
  const counts = await getClickCounts();
  return Response.json({ counts });
}

export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청 본문입니다." }, { status: 400 });
  }

  if (typeof id !== "string" || id.length === 0 || id.length > 64) {
    return Response.json({ error: "id가 유효하지 않습니다." }, { status: 400 });
  }

  const count = await incrementClick(id);
  return Response.json({ id, count });
}
