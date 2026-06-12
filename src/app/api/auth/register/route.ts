import { NextResponse } from 'next/server';
import { auth, db } from '@/lib/firebaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Recibimos los nombres EXACTOS que envía tu frontend
    const { email, password, fullName, institutionId, career, campus } = body;

    if (!email || !password || !fullName) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos obligatorios' }, 
        { status: 400 }
      );
    }

    // 2. Creamos la credencial de inicio de sesión en Firebase
    const userRecord = await auth.createUser({
      email: email,
      password: password,
      displayName: fullName,
    });

    // 3. Guardamos todo el perfil universitario en la base de datos Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email: userRecord.email,
      nombre: userRecord.displayName,
      institucion: institutionId || null,
      carrera: career || null,
      sede: campus || null,
      rol: 'estudiante',
      fechaCreacion: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Cuenta creada exitosamente', uid: userRecord.uid },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Error al crear cuenta:", error);
    
    if (error.code === 'auth/email-already-exists') {
      return NextResponse.json(
        { success: false, message: 'Este correo institucional ya está registrado' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Error interno del servidor. Revisa la consola.' },
      { status: 500 }
    );
  }
}