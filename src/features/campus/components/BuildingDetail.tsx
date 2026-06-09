import { Check, Clock } from "lucide-react";
import type { BuildingDetail as BuildingDetailType } from "../types";

interface BuildingDetailProps {
  detail: BuildingDetailType;
}

export function BuildingDetail({ detail }: BuildingDetailProps) {
  return (
    <section aria-label={`Detalle: ${detail.name}`} className="flex flex-col gap-4">
      {/* Identity */}
      <div>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {detail.letter}
          </span>
          <div>
            <h2 className="text-base font-semibold text-text-primary">
              {detail.name}
            </h2>
            <p className="text-xs text-text-secondary">{detail.category}</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {detail.description}
        </p>
      </div>

      {/* Horario */}
      <div className="rounded-xl border border-border bg-surface p-3">
        <div className="mb-1.5 flex items-center gap-1.5 text-xs text-text-secondary">
          <Clock aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          <span className="font-medium">Horario</span>
        </div>
        <p className="text-sm font-medium text-text-primary">{detail.scheduleLabel}</p>
        <p className="text-sm text-text-secondary">{detail.scheduleHours}</p>
      </div>

      {/* Servicios disponibles — pills visuales */}
      <div>
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-text-secondary">
          Servicios disponibles
        </p>
        <ul className="flex flex-wrap gap-2" role="list">
          {detail.services.map((svc) => (
            <li key={svc.label}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                <Check aria-hidden="true" className="h-3 w-3 shrink-0" />
                {svc.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
