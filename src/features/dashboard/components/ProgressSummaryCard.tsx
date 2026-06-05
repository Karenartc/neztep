import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { StudentDashboardSummary } from "../types";

interface ProgressSummaryCardProps {
  student: StudentDashboardSummary;
}

export function ProgressSummaryCard({ student }: ProgressSummaryCardProps) {
  const { progressPercent, completedSteps, totalSteps } = student;

  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-gradient-to-br from-primary to-secondary p-6 text-primary-foreground shadow-card">
      <p className="text-sm font-medium opacity-90">Tu progreso de integración</p>

      <div className="mt-3 flex items-end justify-between gap-4">
        <p
          className="text-5xl font-bold leading-none"
          aria-label={`${progressPercent} por ciento completado`}
        >
          {progressPercent}%
        </p>
        <div className="flex items-center gap-1.5 pb-1" aria-hidden="true">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i < completedSteps ? "w-5 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div
          aria-label={`Progreso de integración: ${progressPercent}%`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progressPercent}
          className="h-2.5 overflow-hidden rounded-full bg-white/25"
          role="progressbar"
        >
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-sm opacity-80">
          Paso {completedSteps} de {totalSteps} completado
        </p>
      </div>

      <Button
        asChild
        className="mt-4 border-white/30 bg-white/15 text-white hover:bg-white/25"
        size="sm"
        variant="secondary"
      >
        <Link href="/onboarding">Ver mi ruta</Link>
      </Button>

      <div aria-hidden="true" className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
      <div aria-hidden="true" className="absolute -bottom-10 right-4 h-28 w-28 rounded-full bg-white/5" />
    </div>
  );
}
