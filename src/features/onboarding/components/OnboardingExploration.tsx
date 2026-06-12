import {
  ChevronRight,
  CheckCircle2,
  FileText,
  Info,
  Map,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ExplorationItem, ItemType, OnboardingModule } from "../types/onboarding-flow";

function ItemIcon({ type, seen }: { type: ItemType; seen: boolean }) {
  const cls = cn("h-5 w-5", seen ? "text-success" : "text-primary");
  if (type === "document") return <FileText aria-hidden="true" className={cls} />;
  if (type === "video") return <PlayCircle aria-hidden="true" className={cls} />;
  if (type === "map") return <Map aria-hidden="true" className={cls} />;
  return <Info aria-hidden="true" className={cls} />;
}

interface ExplorationCardProps {
  item: ExplorationItem;
  onSeen: (id: string) => void;
}

function ExplorationCard({ item, onSeen }: ExplorationCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSeen(item.id)}
      aria-pressed={item.seen}
      className={cn(
        "flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-200",
        item.seen
          ? "border-success/20 bg-success/5 cursor-default"
          : "border-border bg-surface hover:border-primary/30 hover:shadow-sm cursor-pointer",
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
          item.seen ? "bg-success/10" : "bg-accent",
        )}
      >
        <ItemIcon type={item.type} seen={item.seen} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={cn(
              "text-sm font-medium sm:text-base",
              item.seen ? "text-text-secondary" : "text-text-primary",
            )}
          >
            {item.title}
          </span>
          {item.seen && (
            <span className="text-xs font-medium text-success">Explorado</span>
          )}
        </div>
        <p className="mt-1 text-sm text-text-secondary leading-relaxed">
          {item.description}
        </p>
      </div>

      {item.seen ? (
        <CheckCircle2
          aria-hidden="true"
          className="h-5 w-5 shrink-0 self-center text-success"
        />
      ) : (
        <ChevronRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 self-center text-text-secondary"
        />
      )}
    </button>
  );
}

interface OnboardingExplorationProps {
  module: OnboardingModule;
  totalModules: number;
  exploredCount: number;
  onSeen: (id: string) => void;
  onComplete: () => void;
  onBack: () => void;
}

export function OnboardingExploration({
  module,
  totalModules,
  exploredCount,
  onSeen,
  onComplete,
  onBack,
}: OnboardingExplorationProps) {
  const totalItems = module.items.length;
  const allExplored = exploredCount === totalItems && totalItems > 0;
  const oneLeft = exploredCount === totalItems - 1 && !allExplored;

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-primary">
          Paso {module.order} de {totalModules}
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          {module.title}
        </h1>
        {allExplored ? (
          <p className="text-base font-medium text-success">
            ¡Estás a un paso de completar este módulo!
          </p>
        ) : oneLeft ? (
          <p className="text-base text-text-secondary">
            ¡Solo queda un contenido! Estás muy cerca de terminar.
          </p>
        ) : (
          <p className="text-base text-text-secondary">
            Explora los siguientes contenidos para avanzar.
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span>Progreso del módulo</span>
          <span>
            {exploredCount} de {totalItems}
          </span>
        </div>
        <div
          role="progressbar"
          aria-label={`Progreso de exploración: ${module.title}`}
          aria-valuenow={Math.round((exploredCount / totalItems) * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 overflow-hidden rounded-full bg-accent"
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{
              width: `${Math.round((exploredCount / totalItems) * 100)}%`,
            }}
          />
        </div>
      </div>

      <ul className="space-y-3" role="list">
        {module.items.map((item) => (
          <li key={item.id}>
            <ExplorationCard item={item} onSeen={onSeen} />
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="secondary" className="w-full sm:w-auto" onClick={onBack}>
          ← Anterior
        </Button>
        <Button
          className="w-full sm:w-auto"
          onClick={allExplored ? onComplete : undefined}
          disabled={!allExplored}
        >
          {allExplored ? "Finalizar módulo" : "Continuar"}
        </Button>
      </div>
    </div>
  );
}
