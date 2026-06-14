import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebaseAdmin";

const SESSION_DURATION_MS = 60 * 60 * 24 * 5 * 1000; // 5 días

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { idToken } = body;

    if (!idToken || typeof idToken !== "string") {
      return NextResponse.json({ error: "Token requerido." }, { status: 400 });
    }

    const decoded = await auth.verifyIdToken(idToken);
    if (!decoded.uid) {
      return NextResponse.json({ error: "Token inválido." }, { status: 401 });
    }

    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: SESSION_DURATION_MS,
    });

    const response = NextResponse.json({ status: "ok" }, { status: 200 });

    response.cookies.set("__session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_DURATION_MS / 1000,
      path: "/",
    });

    return response;

  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };
    console.error("[session POST] error:", err?.code, err?.message);
    return NextResponse.json({ error: "No se pudo crear la sesión." }, { status: 401 });
  }
}

export async function DELETE() {
  try {
    const response = NextResponse.json({ status: "ok" }, { status: 200 });
    response.cookies.set("__session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });
    return response;
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("[session DELETE] error:", err?.message);
    return NextResponse.json({ error: "Error al cerrar sesión." }, { status: 500 });
  }
}
