import * as admin from 'firebase-admin';

// Validamos que Firebase no se haya inicializado ya (evita errores en Next.js al recargar la página)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Reemplazamos los caracteres '\n' literales por saltos de línea reales para que el certificado funcione
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

// Exportamos la base de datos (Firestore) y Auth para usarlas en las rutas API
export const db = admin.firestore();
export const auth = admin.auth();