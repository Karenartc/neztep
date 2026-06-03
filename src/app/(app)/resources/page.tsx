import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Recursos" };

export default function ResourcesPage() {
  return (
    <>
      <Navbar
        title="Recursos"
        subtitle="Accede a materiales, guías y herramientas institucionales"
      />
      <EmptyState
        icon={BookOpen}
        title="Centro de recursos"
        description="Aquí encontrarás documentos, guías de estudio y recursos institucionales."
        actionLabel="Explorar recursos"
      />
    </>
  );
}
