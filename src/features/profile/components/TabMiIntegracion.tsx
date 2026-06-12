import Link from "next/link";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import type { OnboardingStep, OnboardingStepStatus, ProfileStats } from "../types";

export interface TabMiIntegracionProps {
  stats: ProfileStats;
  steps: OnboardingStep[];
}

const STATUS_CONFIG: Record<
  OnboardingStepStatus,
  { icon: React.ReactNode; label: string; className: string }
> = {
  completed: {
    icon: <CheckCircle2 aria-hidden="true" className="h-5 w-5" />,
    label: "Completado",
    className: "text-success",
  },
  in_progress: {
    icon: <Clock aria-hidden="true" className="h-5 w-5" />,
    label: "En progreso",
    className: "text-warning",
  },
  pending: {
    icon: <Circle aria-hidden="true" className="h-5 w-5" />,
    label: "Pendiente",
    className: "text-text-secondary",
  },
};

export function TabMiIntegracion({ stats, steps }: TabMiIntegracionProps) {
  return (
    <Card>
      <CardContent className="space-y-6 p-6">
        {/* Progress summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-text-primary">
              Progreso general
            </h3>
            <span className="text-sm text-text-secondary">
              {stats.completedSteps} de {stats.totalSteps} pasos
            </span>
          </div>
          <ProgressBar
            value={stats.progressPercent}
            label="Integración universitaria"
          />
        </div>

        {/* Step list */}
        <ol className="space-y-3" aria-label="Pasos de onboarding">
          {steps.map((step) => {
            const config = STATUS_CONFIG[step.status];
            return (
              <li
                key={step.id}
                className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
              >
                <span className={config.className}>{config.icon}</span>
                <div className="flex-1 space-y-0.5">
                  <p className="text-sm font-medium text-text-primary">
                    {step.title}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {step.description}
                  </p>
                </div>
                <span className={`text-xs font-medium ${config.className}`}>
                  {config.label}
                </span>
              </li>
            );
          })}
        </ol>

        {/* CTA */}
        <div className="flex justify-end">
          <Button asChild size="md" variant="primary">
            <Link href="/onboarding">Continuar onboarding</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
