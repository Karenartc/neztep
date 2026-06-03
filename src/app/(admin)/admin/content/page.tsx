import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Contenido" };

export default function AdminContentPage() {
  return (
    <>
      <Navbar
        title="Gestión de contenido"
        subtitle="Administra recursos y materiales institucionales"
      />
      <EmptyState
        icon={FileText}
        title="Editor de contenido"
        description="Crea, edita y publica recursos académicos para los estudiantes de la institución."
        actionLabel="Nuevo contenido"
      />
    </>
  );
}
