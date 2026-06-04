import type { Metadata } from "next";
import { Route } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Mi Ruta" };

export default function MyRoutePage() {
  return (
    <>
      <Navbar
        title="Mi Ruta"
        subtitle="Visualiza tu progreso y los pasos clave de tu integraciÃ³n institucional"
      />
      <EmptyState
        icon={Route}
        title="Ruta de integraciÃ³n"
        description="AquÃ­ podrÃ¡s revisar tus hitos, avances y prÃ³ximos pasos dentro del onboarding."
        actionLabel="Revisar onboarding"
      />
    </>
  );
}
