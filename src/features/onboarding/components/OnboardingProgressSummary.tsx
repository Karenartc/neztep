import Link from "next/link";
import { Button } from "@/components/ui/button";

interface OnboardingProgressSummaryProps {
  completedCount: number;
  totalModules: number;
}

export function OnboardingProgressSummary({
  completedCount,
  totalModules,
}: OnboardingProgressSummaryProps) {
  const percent = Math.floor((completedCount / totalModules) * 100);

  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          Tu progreso general
        </h1>
        <p className="text-base text-text-secondary leading-relaxed">
          Sigue avanzando en tu recorrido de integración.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-primary">
          <span className="text-2xl font-bold text-primary">{percent}%</span>
        </div>

        <div className="flex-1 space-y-2">
          <p className="text-base font-semibold text-text-primary">
            {completedCount} de {totalModules} módulos completados
          </p>
          <div
            role="progressbar"
            aria-label="Progreso general del recorrido"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2.5 overflow-hidden rounded-full bg-accent"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-accent/50 p-5 space-y-1">
        <p className="text-base font-semibold text-text-primary">¡Vas muy bien!</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          Cada paso que das te acerca más a una mejor experiencia en tu institución.
          ¡Sigue así, lo estás haciendo genial!
        </p>
      </div>

      <Button asChild size="lg" className="w-full sm:w-auto">
        <Link href="/dashboard">Ir a mi ruta</Link>
      </Button>
    </div>
  );
}
