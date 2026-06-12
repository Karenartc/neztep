import { CheckCircle2, Clock, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OnboardingModule } from "../types/onboarding-flow";

interface OnboardingModuleIntroProps {
  module: OnboardingModule;
  totalModules: number;
  onStart: () => void;
}

export function OnboardingModuleIntro({
  module,
  totalModules,
  onStart,
}: OnboardingModuleIntroProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-primary">
          Paso {module.order} de {totalModules}
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          {module.title}
        </h1>
        <p className="text-base text-text-secondary leading-relaxed">
          {module.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
            <Compass aria-hidden="true" className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">En este módulo</p>
            <p className="mt-0.5 text-sm text-text-secondary">
              Explorarás {module.items.length} contenidos
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
            <Clock aria-hidden="true" className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">Duración estimada</p>
            <p className="mt-0.5 text-sm text-text-secondary">{module.duration}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-text-primary">En este módulo descubrirás:</p>
        <ul className="space-y-2.5">
          {module.preview.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-text-secondary">
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-success"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button size="lg" className="w-full sm:w-auto" onClick={onStart}>
          Continuar →
        </Button>
      </div>
    </div>
  );
}
