import { cn } from "@/lib/utils";
import type { PointOfInterest } from "../types";

const MARKER_POSITIONS: Record<string, { top: string; left: string }> = {
  A: { top: "38%", left: "42%" },
  B: { top: "55%", left: "60%" },
  C: { top: "28%", left: "65%" },
  D: { top: "50%", left: "45%" },
  E: { top: "65%", left: "35%" },
};

interface CampusMapPlaceholderProps {
  points: PointOfInterest[];
  selectedPointId: string;
  onSelectPoint: (pointId: string) => void;
  /** When provided, non-included markers are dimmed to show filter context. */
  visiblePointIds?: Set<string>;
}

export function CampusMapPlaceholder({
  points,
  selectedPointId,
  onSelectPoint,
  visiblePointIds,
}: CampusMapPlaceholderProps) {
  const hasFilter = visiblePointIds !== undefined && visiblePointIds.size < points.length;

  return (
    <div
      role="region"
      aria-label="Mapa referencial del campus"
      className="relative h-full min-h-[320px] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
    >
      {/* Grid pattern */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
        <defs>
          <pattern
            id="campus-grid"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#0d9488"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#campus-grid)" />
      </svg>

      {/* Decorative building blocks */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-15"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="120" y="80" width="80" height="60" rx="4" fill="#0d9488" />
        <rect x="220" y="110" width="60" height="80" rx="4" fill="#0f766e" />
        <rect x="240" y="60" width="50" height="40" rx="4" fill="#14b8a6" />
        <rect x="100" y="160" width="70" height="50" rx="4" fill="#0d9488" />
        <rect x="150" y="175" width="55" height="40" rx="4" fill="#5eead4" />
        <line x1="0" y1="140" x2="400" y2="140" stroke="#6b7280" strokeWidth="6" opacity="0.5" />
        <line x1="200" y1="0" x2="200" y2="320" stroke="#6b7280" strokeWidth="6" opacity="0.5" />
        <line x1="120" y1="140" x2="160" y2="80" stroke="#9ca3af" strokeWidth="3" opacity="0.4" />
      </svg>

      {/* Markers */}
      {points.map((point) => {
        const pos = MARKER_POSITIONS[point.building] ?? { top: "50%", left: "50%" };
        const isSelected = point.pointId === selectedPointId;
        const isDimmed = hasFilter && !visiblePointIds?.has(point.pointId);

        return (
          <button
            key={point.pointId}
            type="button"
            aria-label={`Marcar ${point.name}`}
            aria-pressed={isSelected}
            onClick={() => onSelectPoint(point.pointId)}
            style={{ top: pos.top, left: pos.left }}
            className={cn(
              "absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 text-xs font-bold shadow-md transition-all",
              isDimmed
                ? "border-border bg-muted text-text-secondary opacity-30"
                : isSelected
                  ? "z-10 scale-125 border-white bg-primary text-primary-foreground shadow-lg"
                  : "border-white bg-surface text-primary hover:scale-110 hover:bg-accent",
            )}
          >
            {point.building}
          </button>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 rounded-lg border border-border bg-surface/90 px-3 py-2 backdrop-blur-sm">
        <p className="text-[10px] font-medium uppercase tracking-wide text-text-secondary">
          Mapa referencial
        </p>
      </div>
    </div>
  );
}
