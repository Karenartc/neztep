import { CheckCircle2, Clock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OnboardingModule } from "../types/onboarding-flow";

interface NextModuleUnlockedProps {
  module: OnboardingModule;
  totalModules: number;
  onStart: () => void;
}

export function NextModuleUnlocked({
  module,
  totalModules,
  onStart,
}: NextModuleUnlockedProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <Unlock aria-hidden="true" className="h-5 w-5 text-success" />
        <span className="text-sm font-semibold uppercase tracking-wide text-success">
          Nuevo módulo disponible
        </span>
      </div>

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

      <div className="flex items-center gap-3 text-base text-text-secondary">
        <Clock aria-hidden="true" className="h-5 w-5 shrink-0" />
        <span>Duración estimada: {module.duration}</span>
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
          Comenzar módulo →
        </Button>
      </div>
    </div>
  );
}
