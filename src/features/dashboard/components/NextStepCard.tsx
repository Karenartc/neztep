import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OnboardingNextStep } from "../types";

interface NextStepCardProps {
  step: OnboardingNextStep;
  totalSteps: number;
}

export function NextStepCard({ step, totalSteps }: NextStepCardProps) {
  return (
    <div className="rounded-lg border border-primary/20 bg-accent px-5 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
            <ArrowRight aria-hidden="true" className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold text-primary">
                Próximo paso recomendado
              </p>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Paso {step.stepNumber} de {totalSteps}
              </span>
            </div>
            <p className="mt-1 text-base font-semibold text-text-primary">{step.title}</p>
            <p className="mt-0.5 text-sm text-text-secondary">{step.description}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-text-secondary">
            <Clock aria-hidden="true" className="h-3.5 w-3.5" />
            ~{step.estimatedMinutes} min
          </div>
          <Button asChild size="sm" variant="primary">
            <Link href={step.href}>Continuar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
