import { Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingWelcomeProps {
  onStart: () => void;
}

export function OnboardingWelcome({ onStart }: OnboardingWelcomeProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
        <Sparkles aria-hidden="true" className="h-7 w-7 text-primary" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          Bienvenido a Neztep
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          Nos alegra acompañarte en tus primeras semanas.
        </p>
        <p className="text-base text-text-secondary leading-relaxed max-w-lg">
          Sabemos que comenzar la educación superior puede ser desafiante. Por eso creamos
          esta experiencia para ayudarte a conocer tu institución, descubrir servicios
          importantes y aprender dónde encontrar ayuda cuando la necesites.
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
        <span>Duración aproximada: 10 minutos</span>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4 space-y-2 max-w-lg">
        <p className="text-sm font-medium text-text-primary">En este recorrido:</p>
        <ul className="space-y-1.5 text-sm text-text-secondary">
          {[
            "Conocerás tu institución y sus valores",
            "Descubrirás las plataformas que usarás",
            "Aprenderás dónde pedir ayuda",
            "Explorarás los espacios del campus",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button size="lg" onClick={onStart}>
          Comenzar recorrido →
        </Button>
      </div>
    </div>
  );
}
