import type { Metadata } from "next";
import { BarChart3 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Analíticas" };

export default function AdminAnalyticsPage() {
  return (
    <>
      <Navbar
        title="Analíticas"
        subtitle="Métricas de uso y adopción por institución"
      />
      <EmptyState
        icon={BarChart3}
        title="Panel de métricas"
        description="Visualiza estadísticas de onboarding, engagement y progreso de los estudiantes."
      />
    </>
  );
}
