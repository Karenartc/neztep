import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/lib/firebaseAdmin";

export async function GET(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get("__session")?.value;

    if (!sessionCookie) {
      return NextResponse.json({ error: "No autenticado." }, { status: 401 });
    }

    const decoded = await auth.verifySessionCookie(sessionCookie, true);

    const institutionId = decoded.institutionId as string | undefined;

    if (!institutionId) {
      return NextResponse.json({ error: "Token sin institución." }, { status: 401 });
    }

    const userDoc = await db
      .collection("institutions").doc(institutionId)
      .collection("users").doc(decoded.uid)
      .get();

    if (!userDoc.exists) {
      return NextResponse.json({ error: "Usuario no encontrado." }, { status: 404 });
    }

    const data = userDoc.data()!;

    return NextResponse.json({
      uid: decoded.uid,
      fullName: data.fullName,
      email: data.email,
      institutionId: data.institutionId,
      career: data.career,
      campus: data.campus,
      role: data.role,
      status: data.status,
    });

  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };
    console.error("[user/me] error:", err?.code, err?.message);

    if (
      err?.code === "auth/session-cookie-expired" ||
      err?.code === "auth/session-cookie-revoked"
    ) {
      const response = NextResponse.json({ error: "Sesión expirada." }, { status: 401 });
      response.cookies.set("__session", "", { maxAge: 0, path: "/" });
      return response;
    }

    return NextResponse.json({ error: "No autenticado." }, { status: 401 });
  }
}
