import type { Metadata } from "next";
import { LayoutDashboard } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <>
      <Navbar title="Dashboard" subtitle="Resumen de tu actividad universitaria" />
      <EmptyState
        icon={LayoutDashboard}
        title="Tu dashboard"
        description="Aquí verás un resumen de tu progreso, notificaciones y accesos rápidos."
      />
    </>
  );
}
