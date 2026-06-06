"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type {
  ActivityEntry,
  ConsultaDerivada,
  OnboardingStep,
  ProfileStats,
  StudentProfile,
} from "../types";
import { TabActividadReciente } from "./TabActividadReciente";
import { TabConsultasDerivadas } from "./TabConsultasDerivadas";
import { TabMiInformacion } from "./TabMiInformacion";
import { TabMiIntegracion } from "./TabMiIntegracion";

export interface ProfileTabsProps {
  profile: StudentProfile;
  stats: ProfileStats;
  steps: OnboardingStep[];
  consultas: ConsultaDerivada[];
  activity: ActivityEntry[];
}

type TabValue = "informacion" | "integracion" | "consultas" | "actividad";

const TABS: { value: TabValue; label: string }[] = [
  { value: "informacion", label: "Mi información" },
  { value: "integracion", label: "Mi integración" },
  { value: "consultas", label: "Consultas derivadas" },
  { value: "actividad", label: "Actividad reciente" },
];

export function ProfileTabs({
  profile,
  stats,
  steps,
  consultas,
  activity,
}: ProfileTabsProps) {
  const baseId = useId();
  const [active, setActive] = useState<TabValue>("informacion");

  return (
    <div className="space-y-4">
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Secciones del perfil"
        className="flex flex-wrap gap-1 border-b border-border"
      >
        {TABS.map((tab) => (
          <button
            key={tab.value}
            id={`${baseId}-${tab.value}-tab`}
            role="tab"
            type="button"
            aria-selected={tab.value === active}
            aria-controls={`${baseId}-${tab.value}-panel`}
            onClick={() => setActive(tab.value)}
            className={cn(
              "inline-flex items-center gap-1.5 border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              "-mb-px", // overlap border
              tab.value === active
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-text-primary",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      <div
        id={`${baseId}-${active}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-${active}-tab`}
      >
        {active === "informacion" && <TabMiInformacion profile={profile} />}
        {active === "integracion" && (
          <TabMiIntegracion stats={stats} steps={steps} />
        )}
        {active === "consultas" && (
          <TabConsultasDerivadas consultas={consultas} />
        )}
        {active === "actividad" && <TabActividadReciente activity={activity} />}
      </div>
    </div>
  );
}
