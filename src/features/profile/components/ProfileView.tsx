import {
  Building2,
  CalendarDays,
  GraduationCap,
  Info,
  Mail,
  UserRound,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { StudentProfile } from "../types";

interface InfoFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoField({ icon, label, value }: InfoFieldProps) {
  return (
    <div className="flex items-start gap-3">
      <span aria-hidden="true" className="mt-0.5 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-text-secondary">{label}</p>
        <p className="text-sm font-medium text-text-primary">{value}</p>
      </div>
    </div>
  );
}

export interface ProfileViewProps {
  profile: StudentProfile;
}

export function ProfileView({ profile }: ProfileViewProps) {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card>
        <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Avatar
              name={profile.fullName}
              className="h-20 w-20 shrink-0 text-2xl font-bold"
            />
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold text-text-primary">
                {profile.fullName}
              </h2>
              <p className="text-sm text-text-secondary">{profile.career}</p>
              <p className="text-sm text-text-secondary">{profile.email}</p>
              <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-primary">
                {profile.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-muted px-5 py-4 sm:min-w-44">
            <Building2
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-primary"
            />
            <div>
              <p className="text-sm font-medium text-text-primary">
                {profile.campus}
              </p>
              <p className="text-xs text-text-secondary">Campus</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información institucional */}
      <section aria-label="Información institucional">
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-5 text-base font-semibold text-text-primary">
              Información institucional
            </h3>

            <div className="mb-7 flex items-start gap-2.5 rounded-lg border border-border bg-muted px-4 py-3">
              <Info
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-text-secondary"
              />
              <p className="text-xs leading-relaxed text-text-secondary">
                La información de esta sección es administrada por tu institución.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <InfoField
                icon={<UserRound className="h-4 w-4" />}
                label="Nombre completo"
                value={profile.fullName}
              />
              <InfoField
                icon={<Mail className="h-4 w-4" />}
                label="Correo institucional"
                value={profile.email}
              />
              <InfoField
                icon={<GraduationCap className="h-4 w-4" />}
                label="Carrera"
                value={profile.career}
              />
              <InfoField
                icon={<Building2 className="h-4 w-4" />}
                label="Sede"
                value={profile.campus}
              />
              <InfoField
                icon={<UserRound className="h-4 w-4" />}
                label="Rol"
                value={profile.role}
              />
              <InfoField
                icon={<CalendarDays className="h-4 w-4" />}
                label="Año de ingreso"
                value={String(profile.entryYear)}
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
