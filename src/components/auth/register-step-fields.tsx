import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Select, type SelectOption } from "@/components/ui/select";
import { PasswordInput } from "@/components/auth/password-input";
import { cn } from "@/lib/utils";

export interface RegistrationDraft {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  institutionId: string;
  campus: string;
  career: string;
  academicLevel: string;
  entryYear: string;
  onboardingGoal: string;
  receiveUpdates: boolean;
  acceptTerms: boolean;
}

export interface RegistrationFieldProps {
  draft: RegistrationDraft;
  onChange: <Key extends keyof RegistrationDraft>(
    field: Key,
    value: RegistrationDraft[Key],
  ) => void;
}

export interface InstitutionStepProps extends RegistrationFieldProps {
  campusOptions: SelectOption[];
  careerOptions: SelectOption[];
  institutionOptions: SelectOption[];
}

export interface ConfirmationStepProps {
  draft: RegistrationDraft;
  institutionName: string;
}

const academicLevelOptions = [
  { value: "first-year", label: "Primer ano" },
  { value: "second-year", label: "Segundo ano" },
  { value: "third-year", label: "Tercer ano" },
  { value: "advanced", label: "Curso avanzado" },
];

const entryYearOptions = ["2026", "2025", "2024", "2023"].map((year) => ({
  value: year,
  label: year,
}));

const onboardingGoalOptions = [
  { value: "orientation", label: "Conocer procesos institucionales" },
  { value: "campus", label: "Ubicar salas y servicios del campus" },
  { value: "support", label: "Encontrar apoyo academico y administrativo" },
  { value: "planning", label: "Organizar mi inicio de semestre" },
];

/**
 * Renders the personal account fields used by the user document.
 */
export function AccountStep({ draft, onChange }: RegistrationFieldProps) {
  const passwordError =
    draft.confirmPassword && draft.password !== draft.confirmPassword
      ? "Las contrasenas deben coincidir."
      : undefined;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <FormField id="fullName" label="Nombre completo">
        <Input
          id="fullName"
          onChange={(event) => onChange("fullName", event.target.value)}
          placeholder="Ingresa tu nombre completo"
          value={draft.fullName}
        />
      </FormField>
      <FormField id="email" label="Correo institucional">
        <div className="relative">
          <Input
            className="pe-9"
            id="email"
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="tu.correo@institucion.cl"
            type="email"
            value={draft.email}
          />
          <Mail
            aria-hidden="true"
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </FormField>
      <FormField id="password" label="Contrasena">
        <PasswordInput
          id="password"
          onChange={(event) => onChange("password", event.target.value)}
          placeholder="Crea una contrasena"
          value={draft.password}
        />
      </FormField>
      <FormField error={passwordError} id="confirmPassword" label="Confirmar contrasena">
        <PasswordInput
          error={Boolean(passwordError)}
          id="confirmPassword"
          onChange={(event) => onChange("confirmPassword", event.target.value)}
          placeholder="Repite tu contrasena"
          value={draft.confirmPassword}
        />
      </FormField>
    </div>
  );
}

/**
 * Renders institution, campus, and academic program selectors.
 */
export function InstitutionStep({
  campusOptions,
  careerOptions,
  draft,
  institutionOptions,
  onChange,
}: InstitutionStepProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <FormField id="institutionId" label="Institucion">
        <Select
          id="institutionId"
          onChange={(event) => onChange("institutionId", event.target.value)}
          options={institutionOptions}
          placeholder="Selecciona tu institucion"
          value={draft.institutionId}
        />
      </FormField>
      <FormField id="campus" label="Campus">
        <Select
          disabled={!draft.institutionId}
          id="campus"
          onChange={(event) => onChange("campus", event.target.value)}
          options={campusOptions}
          placeholder="Selecciona tu campus"
          value={draft.campus}
        />
      </FormField>
      <FormField className="md:col-span-2" id="career" label="Carrera o programa">
        <Select
          disabled={!draft.institutionId}
          id="career"
          onChange={(event) => onChange("career", event.target.value)}
          options={careerOptions}
          placeholder="Selecciona tu carrera"
          value={draft.career}
        />
      </FormField>
    </div>
  );
}

/**
 * Renders profile preferences connected to onboarding progress setup.
 */
export function ProfileStep({ draft, onChange }: RegistrationFieldProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <FormField id="academicLevel" label="Nivel academico">
        <Select
          id="academicLevel"
          onChange={(event) => onChange("academicLevel", event.target.value)}
          options={academicLevelOptions}
          placeholder="Selecciona tu nivel"
          value={draft.academicLevel}
        />
      </FormField>
      <FormField id="entryYear" label="Ano de ingreso">
        <Select
          id="entryYear"
          onChange={(event) => onChange("entryYear", event.target.value)}
          options={entryYearOptions}
          placeholder="Selecciona el ano"
          value={draft.entryYear}
        />
      </FormField>
      <FormField className="md:col-span-2" id="onboardingGoal" label="Objetivo principal">
        <Select
          id="onboardingGoal"
          onChange={(event) => onChange("onboardingGoal", event.target.value)}
          options={onboardingGoalOptions}
          placeholder="Selecciona tu objetivo de onboarding"
          value={draft.onboardingGoal}
        />
      </FormField>
      <div className="grid gap-3 md:col-span-2">
        <CheckboxControl
          checked={draft.receiveUpdates}
          id="receiveUpdates"
          label="Recibir actualizaciones institucionales relevantes"
          onChange={(checked) => onChange("receiveUpdates", checked)}
        />
        <CheckboxControl
          checked={draft.acceptTerms}
          id="acceptTerms"
          label="Acepto los terminos y la politica de privacidad"
          onChange={(checked) => onChange("acceptTerms", checked)}
          required
        />
      </div>
    </div>
  );
}

/**
 * Renders the final registration summary before the UI-only completion CTA.
 */
export function ConfirmationStep({ draft, institutionName }: ConfirmationStepProps) {
  const rows = [
    ["Nombre", draft.fullName || "Pendiente"],
    ["Correo", draft.email || "Pendiente"],
    ["Institucion", institutionName || "Pendiente"],
    ["Campus", draft.campus || "Pendiente"],
    ["Carrera", draft.career || "Pendiente"],
    ["Rol inicial", "student"],
    ["Primer ingreso", "true"],
  ];

  return (
    <Card elevated={false}>
      <CardHeader>
        <CardTitle>Resumen de registro</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {rows.map(([label, value]) => (
          <div
            className="flex flex-col gap-1 rounded-md border border-border bg-muted p-3 sm:flex-row sm:items-center sm:justify-between"
            key={label}
          >
            <span className="text-sm text-text-secondary">{label}</span>
            <span className="text-sm font-medium text-text-primary">{value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

interface CheckboxControlProps {
  checked: boolean;
  id: string;
  label: string;
  onChange: (checked: boolean) => void;
  required?: boolean;
}

function CheckboxControl({
  checked,
  id,
  label,
  onChange,
  required = false,
}: CheckboxControlProps) {
  return (
    <label
      className={cn(
        "flex min-h-11 cursor-pointer items-start gap-3 rounded-md border border-border bg-surface p-3 text-sm text-text-primary",
        "focus-within:outline focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-ring",
      )}
      htmlFor={id}
    >
      <input
        checked={checked}
        className="mt-0.5 h-4 w-4 accent-primary"
        id={id}
        onChange={(event) => onChange(event.target.checked)}
        required={required}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
}
