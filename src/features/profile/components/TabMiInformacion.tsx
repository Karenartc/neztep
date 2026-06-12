import {
  Building2,
  Calendar,
  GraduationCap,
  Info,
  Mail,
  UserRound,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { StudentProfile } from "../types";

export interface TabMiInformacionProps {
  profile: StudentProfile;
}

interface InfoFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoField({ icon, label, value }: InfoFieldProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-text-secondary">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-text-primary">{value}</p>
      </div>
    </div>
  );
}

export function TabMiInformacion({ profile }: TabMiInformacionProps) {
  const firstLoginDate = new Date(profile.firstLogin).toLocaleDateString(
    "es-CL",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <Card>
      <CardContent className="p-6">
        {/* Institutional notice */}
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-border bg-muted p-4">
          <Info
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-text-secondary"
          />
          <p className="text-sm text-text-secondary">
            La información de esta sección es administrada por tu institución.
          </p>
        </div>

        {/* Fields grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InfoField
            icon={<UserRound aria-hidden="true" className="h-4 w-4" />}
            label="Nombre completo"
            value={profile.fullName}
          />
          <InfoField
            icon={<Mail aria-hidden="true" className="h-4 w-4" />}
            label="Correo institucional"
            value={profile.email}
          />
          <InfoField
            icon={<GraduationCap aria-hidden="true" className="h-4 w-4" />}
            label="Carrera"
            value={profile.career}
          />
          <InfoField
            icon={<Building2 aria-hidden="true" className="h-4 w-4" />}
            label="Sede"
            value={profile.campus}
          />
          <InfoField
            icon={<UserRound aria-hidden="true" className="h-4 w-4" />}
            label="Rol"
            value={profile.role}
          />
          <InfoField
            icon={<Calendar aria-hidden="true" className="h-4 w-4" />}
            label="Año de ingreso"
            value={String(profile.entryYear)}
          />
          <InfoField
            icon={<Calendar aria-hidden="true" className="h-4 w-4" />}
            label="Primer ingreso"
            value={firstLoginDate}
          />
        </div>
      </CardContent>
    </Card>
  );
}
