import type { Metadata } from "next";
import { LayoutDashboard } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Panel admin" };

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar
        title="Panel de administración"
        subtitle="Gestión institucional de Neztep"
      />
      <EmptyState
        icon={LayoutDashboard}
        title="Panel administrativo"
        description="Desde aquí podrás gestionar contenidos, usuarios y configuraciones institucionales."
      />
    </>
  );
}
