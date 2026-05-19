import { ArrowRight, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Tabs } from "@/components/ui/tabs";
import { EmptyState } from "@/components/layout/empty-state";
import { StatCard } from "@/components/student/stat-card";
import { dashboardStats, showcaseTabs } from "@/lib/mock/design-system";

/**
 * Shows dashboard cards, metrics, progress, tabs, and empty states.
 */
export function DashboardPatterns() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-3">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Tu progreso de integracion</CardTitle>
            <CardDescription>Ruta personalizada para estudiantes de primer ano.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <ProgressBar label="Onboarding completado" value={72} />
            <ProgressBar label="Recursos revisados" value={48} />
            <Button variant="secondary">
              Ver mi ruta
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <EmptyState
          actionLabel="Crear contenido"
          description="Aun no hay recursos publicados para esta categoria institucional."
          icon={Inbox}
          title="Sin recursos pendientes"
        />
      </div>
      <Card className="mt-4">
        <CardContent className="pt-6">
          <Tabs items={showcaseTabs} />
        </CardContent>
      </Card>
    </div>
  );
}
