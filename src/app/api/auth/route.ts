import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * BFF stub for /api/auth.
 *
 * Future flow:
 *   features/auth/services/auth-client.ts
 *   → POST /api/auth  (this file)
 *   → Firebase Auth (server-side via Admin SDK)
 *
 * Sub-routes to add when implementing:
 *   /api/auth/signin   POST  — exchange credentials for a session cookie
 *   /api/auth/signout  POST  — invalidate session
 *   /api/auth/session  GET   — return current session from cookie
 */
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented — pending Firebase Auth integration" },
    { status: 501 },
  );
}

export async function POST(_req: NextRequest) {
  void _req;
  return NextResponse.json(
    { error: "Not implemented — pending Firebase Auth integration" },
    { status: 501 },
  );
}
