import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * BFF stub for /api/onboarding.
 *
 * Future flow:
 *   features/onboarding/services/onboarding-client.ts
 *   → GET|PATCH /api/onboarding  (this file)
 *   → Firebase Admin SDK → Firestore (collection: onboarding_progress)
 *
 * Planned endpoints:
 *   GET   /api/onboarding          — fetch user progress (scoped to session)
 *   PATCH /api/onboarding          — update a step status
 */
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented — pending Firestore integration" },
    { status: 501 },
  );
}

export async function PATCH(_req: NextRequest) {
  void _req;
  return NextResponse.json(
    { error: "Not implemented — pending Firestore integration" },
    { status: 501 },
  );
}
