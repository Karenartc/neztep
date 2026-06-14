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
      .collection("careers")
      .where("status", "==", "active")
      .get();

    const careers = snap.docs.map((d) => ({
      id: d.id,
      name: d.data().name as string,
    }));

    return NextResponse.json({ careers });
  } catch (error) {
    console.error("[careers GET]", error);
    return NextResponse.json({ error: "Error al obtener carreras." }, { status: 500 });
  }
}
