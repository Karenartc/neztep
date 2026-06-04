import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Servicios" };

export default function ServicesPage() {
  return (
    <>
      <Navbar
        title="Servicios"
        subtitle="Explora apoyos acadÃ©micos, bienestar y acompaÃ±amiento estudiantil"
      />
      <EmptyState
        icon={Briefcase}
        title="Servicios estudiantiles"
        description="Pronto verÃ¡s los servicios institucionales disponibles para tu sede y etapa de onboarding."
        actionLabel="Ver recursos relacionados"
      />
    </>
  );
}
