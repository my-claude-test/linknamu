import { incrementClick } from "@/lib/clicks";

export const runtime = "nodejs";

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
