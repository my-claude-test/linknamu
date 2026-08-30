import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "linknamu";

// 개발 모드의 HMR로 커넥션이 계속 늘어나는 것을 막기 위해 전역에 캐시합니다.
const globalForMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = globalForMongo._mongoClientPromise;
}

/**
 * MongoDB 데이터베이스 핸들을 반환합니다.
 * MONGODB_URI가 설정돼 있지 않으면 null을 반환하므로,
 * 클릭 수 집계 없이도 앱이 정상 동작합니다.
 */
export async function getDb(): Promise<Db | null> {
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(dbName);
}
