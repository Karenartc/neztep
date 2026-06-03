import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Perfil" };

export default function ProfilePage() {
  return (
    <>
      <Navbar
        title="Mi perfil"
        subtitle="Gestiona tu información personal e institucional"
      />
      <EmptyState
        icon={UserRound}
        title="Perfil del estudiante"
        description="Actualiza tus datos personales, preferencias y configuración de cuenta."
        actionLabel="Editar perfil"
      />
    </>
  );
}
