import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * BFF stub for /api/admin.
 *
 * Future flow:
 *   features/admin/services/admin-client.ts
 *   → GET|POST /api/admin  (this file)
 *   → Firebase Admin SDK → Firestore (admin role verified server-side)
 *
 * Sub-routes to add when implementing:
 *   /api/admin/analytics  GET   — institution usage metrics
 *   /api/admin/content    GET   — list content items
 *   /api/admin/content    POST  — create a content item
 *   /api/admin/content    PATCH — update a content item
 *
 * Note: all admin routes must verify the "admin" role from the session token
 * before touching Firestore — this validation lives in this BFF layer, not
 * in the features layer.
 */
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented — pending Firebase Admin + Firestore integration" },
    { status: 501 },
  );
}

export async function POST(_req: NextRequest) {
  void _req;
  return NextResponse.json(
    { error: "Not implemented — pending Firebase Admin + Firestore integration" },
    { status: 501 },
  );
}
