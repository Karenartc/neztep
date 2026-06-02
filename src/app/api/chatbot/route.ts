import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * BFF stub for /api/chatbot.
 *
 * Future flow:
 *   features/chatbot/services/chatbot-client.ts
 *   → GET|POST /api/chatbot  (this file)
 *   → AI provider (e.g. Vertex AI / Gemini) + Firestore session store
 *
 * Planned endpoints:
 *   GET  /api/chatbot         — retrieve message history for current session
 *   POST /api/chatbot         — send a message; returns streamed or buffered reply
 */
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented — pending AI + Firestore integration" },
    { status: 501 },
  );
}

export async function POST(_req: NextRequest) {
  void _req;
  return NextResponse.json(
    { error: "Not implemented — pending AI + Firestore integration" },
    { status: 501 },
  );
}
