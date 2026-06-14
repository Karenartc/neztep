import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, password, institutionId, career, campus } = body;

    if (!fullName?.trim() || !email?.trim() || !password || !institutionId?.trim()) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben completarse." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El correo no tiene un formato válido." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres." },
        { status: 400 }
      );
    }

    const institutionDoc = await db.collection("institutions").doc(institutionId).get();
    if (!institutionDoc.exists) {
      return NextResponse.json(
        { error: "La institución indicada no existe." },
        { status: 400 }
      );
    }

    const userRecord = await auth.createUser({
      email: email.trim().toLowerCase(),
      password,
      displayName: fullName.trim(),
    });

    await db
      .collection("institutions").doc(institutionId)
      .collection("users").doc(userRecord.uid)
      .set({
        userId: userRecord.uid,
        institutionId: institutionId.trim(),
        email: email.trim().toLowerCase(),
        fullName: fullName.trim(),
        role: "student",
        career: career?.trim() || null,
        campus: campus?.trim() || null,
        firstLogin: true,
        status: "active",
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });

    await auth.setCustomUserClaims(userRecord.uid, {
      institutionId: institutionId.trim(),
      role: "student",
    });

    return NextResponse.json({ uid: userRecord.uid }, { status: 201 });

  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };
    console.error("[register] error:", err?.code, err?.message);

    const firebaseErrors: Record<string, string> = {
      "auth/email-already-exists": "El correo ya está registrado.",
      "auth/invalid-email": "El correo no tiene un formato válido.",
      "auth/weak-password": "La contraseña es demasiado débil.",
    };

    if (err?.code && firebaseErrors[err.code]) {
      return NextResponse.json({ error: firebaseErrors[err.code] }, { status: 409 });
    }

    return NextResponse.json(
      { error: "Error interno al registrar usuario." },
      { status: 500 }
    );
  }
}
