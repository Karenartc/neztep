import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin'; 

export async function GET() {
  try {
    const docRef = await db.collection('system_tests').add({
      message: '¡Hola desde el Backend de NexStep!',
      timestamp: new Date().toISOString(),
      status: 'Conectado exitosamente'
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Conexión a Firestore exitosa.',
        documentId: docRef.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error conectando a Firebase:", error);
    return NextResponse.json(
      { success: false, error: 'Falló la conexión a Firebase Admin' },
      { status: 500 }
    );
  }
}