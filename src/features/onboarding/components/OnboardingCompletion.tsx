import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingCompletionProps {
  moduleName: string;
  closingMessage: string;
  completedCount?: number;
  totalModules?: number;
  onContinue: () => void;
}

export function OnboardingCompletion({
  moduleName,
  closingMessage,
  completedCount,
  totalModules,
  onContinue,
}: OnboardingCompletionProps) {
  const showProgress =
    completedCount !== undefined && totalModules !== undefined && totalModules > 0;
  const percent = showProgress
    ? Math.floor((completedCount! / totalModules!) * 100)
    : 0;

  return (
    <div className="flex flex-col items-center gap-8 py-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
        <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-success" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          ¡Excelente!
        </h1>
        <p className="text-base font-medium text-primary">
          Has completado el módulo{" "}
          <span className="font-semibold">{moduleName}</span>
        </p>
        <p className="mx-auto max-w-sm text-base text-text-secondary leading-relaxed">
          {closingMessage}
        </p>
      </div>

      {showProgress && (
        <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-5 text-left space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-text-primary">Tu progreso general</p>
            <span className="text-sm font-bold text-primary">{percent}%</span>
          </div>
          <div
            role="progressbar"
            aria-label="Progreso general"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 overflow-hidden rounded-full bg-accent"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="text-xs text-text-secondary">
            {completedCount} de {totalModules} módulos completados — ¡vas muy bien!
          </p>
        </div>
      )}

      <Button size="lg" className="w-full sm:w-auto" onClick={onContinue}>
        Continuar recorrido →
      </Button>
    </div>
  );
}
