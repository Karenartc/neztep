import { NextResponse } from "next/server";

/**
 * BFF stub for /api/campus.
 *
 * Future flow:
 *   features/campus/services/campus-client.ts
 *   → GET /api/campus  (this file)
 *   → Firebase Admin SDK → Firestore (collection: campus_buildings)
 *
 * Planned endpoints:
 *   GET /api/campus   — list campus buildings filtered by institutionId (from session)
 */
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented — pending Firestore integration" },
    { status: 501 },
  );
}
