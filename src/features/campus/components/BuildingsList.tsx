import { cn } from "@/lib/utils";
import type { PointOfInterest } from "../types";

interface BuildingsListProps {
  points: PointOfInterest[];
  selectedPointId: string;
  onSelectPoint: (pointId: string) => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  academic: "Académico",
  administrative: "Administrativo",
  services: "Servicios",
  recreation: "Recreación",
  health: "Salud",
};

export function BuildingsList({
  points,
  selectedPointId,
  onSelectPoint,
}: BuildingsListProps) {
  return (
    <section aria-label="Edificios y espacios">
      <h2 className="mb-3 text-sm font-semibold text-text-primary">
        Edificios y espacios
      </h2>
      <ul className="flex flex-col gap-2" role="list">
        {points.map((point) => {
          const isSelected = point.pointId === selectedPointId;
          return (
            <li key={point.pointId}>
              <button
                type="button"
                onClick={() => onSelectPoint(point.pointId)}
                aria-pressed={isSelected}
                className={cn(
                  "w-full rounded-xl border p-3 text-left transition-all",
                  isSelected
                    ? "border-primary bg-accent shadow-sm"
                    : "border-border bg-surface hover:border-primary/40 hover:bg-muted",
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-text-secondary",
                    )}
                  >
                    {point.building}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-text-primary">
                      {point.name}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-text-secondary">
                      {CATEGORY_LABELS[point.category] ?? point.category} · Piso{" "}
                      {point.floor === 0 ? "PB" : point.floor}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
