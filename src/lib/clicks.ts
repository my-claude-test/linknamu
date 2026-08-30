import { getDb } from "./mongodb";

interface ClickDoc {
  _id: string;
  count: number;
}

const COLLECTION = "linkClicks";

/** 링크 id별 클릭 수 맵을 반환합니다. DB가 없으면 빈 객체를 반환합니다. */
export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const db = await getDb();
    if (!db) return {};
    const docs = await db.collection<ClickDoc>(COLLECTION).find({}).toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch (err) {
    console.error("[clicks] getClickCounts 실패:", err);
    return {};
  }
}

/** 링크 클릭 수를 1 증가시키고 갱신된 값을 반환합니다. DB가 없으면 null. */
export async function incrementClick(id: string): Promise<number | null> {
  try {
    const db = await getDb();
    if (!db) return null;
    const doc = await db
      .collection<ClickDoc>(COLLECTION)
      .findOneAndUpdate(
        { _id: id },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" },
      );
    return doc?.count ?? null;
  } catch (err) {
    console.error("[clicks] incrementClick 실패:", err);
    return null;
  }
}
