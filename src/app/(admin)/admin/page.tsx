import type { Metadata } from "next";
import { GraduationCap, Landmark, UserCheck, Users } from "lucide-react";
import { AdminHeader } from "@/features/admin/components/AdminHeader";
import { KpiCard } from "@/features/admin/components/KpiCard";
import { RegistrationChart } from "@/features/admin/components/RegistrationChart";
import { RecentActivity } from "@/features/admin/components/RecentActivity";
import { RecentUsersTable } from "@/features/admin/components/RecentUsersTable";
import { mockKpis } from "@/features/admin/data/admin-mock";

export const metadata: Metadata = { title: "Dashboard" };

const KPI_ICONS: Record<string, React.ReactNode> = {
  "users": <Users className="h-5 w-5" aria-hidden="true" />,
  "user-check": <UserCheck className="h-5 w-5" aria-hidden="true" />,
  "graduation-cap": <GraduationCap className="h-5 w-5" aria-hidden="true" />,
  "landmark": <Landmark className="h-5 w-5" aria-hidden="true" />,
};

export default function AdminDashboardPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <AdminHeader />

      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mockKpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            description={kpi.description}
            icon={KPI_ICONS[kpi.iconName]}
            title={kpi.title}
            trend={kpi.trend}
            value={kpi.value}
          />
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr,1fr]">
        <RegistrationChart />
        <RecentActivity />
      </div>

      {/* Users table */}
      <RecentUsersTable />
    </main>
  );
}
