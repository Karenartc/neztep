import { NextResponse } from "next/server";

/**
 * BFF stub for /api/resources.
 *
 * Future flow:
 *   features/resources/services/resources-client.ts
 *   → GET /api/resources  (this file)
 *   → Firebase Admin SDK → Firestore (collection: resources)
 *
 * Planned endpoints:
 *   GET /api/resources          — list resources for current institution
 *   GET /api/resources?id=:id   — get a single resource
 */
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented — pending Firestore integration" },
    { status: 501 },
  );
}
