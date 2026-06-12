// src/app/api/auth/register/route.ts

import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/lib/firebaseAdmin"; // Importamos Firebase Admin que ya configuramos

// Tipado de los datos que llegan del formulario
interface RegisterBody {
  name: string;
  email: string;
  password: string;
  institution: string;
  career: string;
  campus: string;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Parseamos el cuerpo de la solicitud
    const body: RegisterBody = await req.json();
    const { name, email, password, institution, career, campus } = body;

    // 2. Validaciones básicas del lado servidor
    //    (Nunca confiar solo en las validaciones del frontend)
    if (!name || !email || !password || !institution || !career || !campus) {
      return NextResponse.json(
        { success: false, message: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "La contraseña debe tener al menos 6 caracteres." },
        { status: 400 }
      );
    }

    // 3. Creamos el usuario en Firebase Authentication
    //    Esto genera un UID único para el usuario
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name,
    });

    // 4. Guardamos los datos adicionales en Firestore
    //    Firebase Auth solo guarda email, nombre y contraseña.
    //    El resto (institución, carrera, sede) va en Firestore.
    await db.collection("users").doc(userRecord.uid).set({
      uid: userRecord.uid,
      name,
      email,
      institution,
      career,
      campus,
      role: "student",           // Rol por defecto
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // 5. Respondemos con éxito
    return NextResponse.json(
      {
        success: true,
        message: "Cuenta creada correctamente.",
        uid: userRecord.uid,
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    // 6. Manejo de errores específicos de Firebase
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error
    ) {
      const firebaseError = error as { code: string; message: string };

      // Email ya registrado
      if (firebaseError.code === "auth/email-already-exists") {
        return NextResponse.json(
          { success: false, message: "Este correo ya está registrado." },
          { status: 409 }
        );
      }

      // Email con formato inválido
      if (firebaseError.code === "auth/invalid-email") {
        return NextResponse.json(
          { success: false, message: "El correo ingresado no es válido." },
          { status: 400 }
        );
      }
    }

    // Error genérico
    // En el catch de tu route.ts, reemplaza el console.error por esto:
    console.error("[register] código de error:", (error as any).code);
    console.error("[register] mensaje:", (error as any).message);