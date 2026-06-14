import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function GET() {
  try {
    const snap = await db.collection("institutions")
      .where("status", "==", "active")
      .get();

    const institutions = snap.docs.map((d) => ({
      id: d.id,
      name: d.data().name as string,
      type: d.data().type as string | undefined,
    }));

    return NextResponse.json({ institutions });
  } catch (error) {
    console.error("[institutions GET]", error);
    return NextResponse.json({ error: "Error al obtener instituciones." }, { status: 500 });
  }
}
