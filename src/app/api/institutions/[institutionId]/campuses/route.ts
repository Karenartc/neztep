import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ institutionId: string }> }
) {
  try {
    const { institutionId } = await params;

    const snap = await db
      .collection("institutions").doc(institutionId)
      .collection("campuses")
      .where("status", "==", "active")
      .get();

    const campuses = snap.docs.map((d) => ({
      id: d.id,
      name: d.data().name as string,
    }));

    return NextResponse.json({ campuses });
  } catch (error) {
    console.error("[campuses GET]", error);
    return NextResponse.json({ error: "Error al obtener sedes." }, { status: 500 });
  }
}
