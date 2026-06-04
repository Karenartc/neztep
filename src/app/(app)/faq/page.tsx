import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <Navbar
        title="FAQ"
        subtitle="Consulta respuestas rÃ¡pidas para dudas acadÃ©micas y administrativas frecuentes"
      />
      <EmptyState
        icon={HelpCircle}
        title="Preguntas frecuentes"
        description="AquÃ­ encontrarÃ¡s respuestas breves para resolver dudas comunes durante tu incorporaciÃ³n."
        actionLabel="Abrir NezBot"
      />
    </>
  );
}
