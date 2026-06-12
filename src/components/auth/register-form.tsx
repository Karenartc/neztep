"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail } from "lucide-react";
import { PasswordInput } from "@/components/auth/password-input";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { PrivacyPolicyDialog, TermsDialog } from "@/components/legal/legal-dialogs";
import { institutions } from "@/lib/mock/institutions";
import {
  validateEmail,
  validateFullName,
  validateRegisterPassword,
  validateConfirmPassword,
  validateInstitution,
  validateCareer,
  validateCampus,
} from "@/lib/validation/auth";
import { cn } from "@/lib/utils";

interface RegistrationDraft {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  institutionId: string;
  career: string;
  campus: string;
  acceptTerms: boolean;
}

type TouchedFields = Record<
  "fullName" | "email" | "password" | "confirmPassword" | "institutionId" | "career" | "campus",
  boolean
>;

const INITIAL_DRAFT: RegistrationDraft = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  institutionId: "",
  career: "",
  campus: "",
  acceptTerms: false,
};

const INITIAL_TOUCHED: TouchedFields = {
  fullName: false,
  email: false,
  password: false,
  confirmPassword: false,
  institutionId: false,
  career: false,
  campus: false,
};

const ALL_TOUCHED: TouchedFields = {
  fullName: true,
  email: true,
  password: true,
  confirmPassword: true,
  institutionId: true,
  career: true,
  campus: true,
};

export function RegisterForm() {
  const router = useRouter();
  const [draft, setDraft] = useState<RegistrationDraft>(INITIAL_DRAFT);
  const [touched, setTouched] = useState<TouchedFields>(INITIAL_TOUCHED);
  
  const selectedInstitution = institutions.find(
    (inst) => inst.institutionId === draft.institutionId,
  );
  const campusOptions = toOptions(selectedInstitution?.campuses ?? []);
  const careerOptions = toOptions(selectedInstitution?.careers ?? []);
  const institutionOptions = institutions.map((inst) => ({
    value: inst.institutionId,
    label: inst.name,
  }));

  const hasInstitution = Boolean(draft.institutionId);

  const errors = {
    fullName: touched.fullName ? validateFullName(draft.fullName) : undefined,
    email: touched.email ? validateEmail(draft.email) : undefined,
    password: touched.password ? validateRegisterPassword(draft.password) : undefined,
    confirmPassword: touched.confirmPassword
      ? validateConfirmPassword(draft.password, draft.confirmPassword)
      : undefined,
    institutionId: touched.institutionId ? validateInstitution(draft.institutionId) : undefined,
    career: touched.career ? validateCareer(draft.career, hasInstitution) : undefined,
    campus: touched.campus ? validateCampus(draft.campus, hasInstitution) : undefined,
  };

  const formIsValid =
    !validateFullName(draft.fullName) &&
    !validateEmail(draft.email) &&
    !validateRegisterPassword(draft.password) &&
    !validateConfirmPassword(draft.password, draft.confirmPassword) &&
    !validateInstitution(draft.institutionId) &&
    !validateCareer(draft.career, hasInstitution) &&
    !validateCampus(draft.campus, hasInstitution);

  const canSubmit = draft.acceptTerms && formIsValid;

  function touch(field: keyof TouchedFields) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function updateField<K extends keyof RegistrationDraft>(
    field: K,
    value: RegistrationDraft[K],
  ) {
    setDraft((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "institutionId") {
        next.career = "";
        next.campus = "";
      }
      return next;
    });
  }

// DESPUÉS — agrega estos dos estados arriba de la función handleSubmit:
const [isLoading, setIsLoading] = useState(false);
const [serverError, setServerError] = useState<string | null>(null);

// Y reemplaza handleSubmit completo:
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setTouched(ALL_TOUCHED);
  if (!canSubmit) return;

  setIsLoading(true);
  setServerError(null);

  try {
    // Llamamos al backend que creamos en el Archivo 1
    // Usamos los mismos nombres de campo que ya tiene tu formulario
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: draft.fullName,
        email: draft.email,
        password: draft.password,
        institutionId: draft.institutionId,
        career: draft.career,
        campus: draft.campus,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // El servidor rechazó el registro (ej: email ya existe)
      setServerError(data.message);
      return;
    }

    // Todo salió bien: redirigimos al login
    // Importa useRouter de next/navigation al inicio del archivo
    router.push("/login?registered=true");

  } catch {
    setServerError("Error de conexión. Intenta nuevamente.");
  } finally {
    setIsLoading(false);
  }
}

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormField error={errors.fullName} id="fullName" label="Nombre completo">
        <Input
          error={Boolean(errors.fullName)}
          id="fullName"
          onBlur={() => touch("fullName")}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="Ingresa tu nombre completo"
          value={draft.fullName}
        />
      </FormField>

      <FormField error={errors.email} id="email" label="Correo institucional">
        <div className="relative">
          <Input
            className="pe-9"
            error={Boolean(errors.email)}
            id="email"
            onBlur={() => touch("email")}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="tucorreo@institucion.cl"
            type="email"
            value={draft.email}
          />
          <Mail
            aria-hidden="true"
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField error={errors.password} id="password" label="Contraseña">
          <PasswordInput
            error={Boolean(errors.password)}
            id="password"
            onBlur={() => touch("password")}
            onChange={(e) => updateField("password", e.target.value)}
            placeholder="contraseña"
            value={draft.password}
          />
        </FormField>
        <FormField error={errors.confirmPassword} id="confirmPassword" label="Confirmar contraseña">
          <PasswordInput
            error={Boolean(errors.confirmPassword)}
            id="confirmPassword"
            onBlur={() => touch("confirmPassword")}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            placeholder="contraseña"
            value={draft.confirmPassword}
          />
        </FormField>
      </div>

      <FormField error={errors.institutionId} id="institutionId" label="Institución">
        <Select
          error={Boolean(errors.institutionId)}
          id="institutionId"
          onBlur={() => touch("institutionId")}
          onChange={(e) => updateField("institutionId", e.target.value)}
          options={institutionOptions}
          placeholder="Selecciona tu institución"
          value={draft.institutionId}
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField error={errors.career} id="career" label="Carrera">
          <Select
            disabled={!draft.institutionId}
            error={Boolean(errors.career)}
            id="career"
            onBlur={() => touch("career")}
            onChange={(e) => updateField("career", e.target.value)}
            options={careerOptions}
            placeholder="Selecciona tu carrera"
            value={draft.career}
          />
        </FormField>
        <FormField error={errors.campus} id="campus" label="Sede / Campus">
          <Select
            disabled={!draft.institutionId}
            error={Boolean(errors.campus)}
            id="campus"
            onBlur={() => touch("campus")}
            onChange={(e) => updateField("campus", e.target.value)}
            options={campusOptions}
            placeholder="Selecciona tu sede"
            value={draft.campus}
          />
        </FormField>
      </div>

      <label
        className={cn(
          "flex min-h-11 cursor-pointer items-start gap-3 p-3 text-sm text-text-primary"
        )}
        htmlFor="acceptTerms"
      >
        <input
          checked={draft.acceptTerms}
          className="mt-0.5 h-4 w-4 accent-primary"
          id="acceptTerms"
          onChange={(e) => updateField("acceptTerms", e.target.checked)}
          required
          type="checkbox"
        />
        <span>
          He leído y acepto los{" "}
          <TermsDialog>
            <button
              className="font-medium text-primary hover:underline"
              type="button"
            >
              Términos y Condiciones
            </button>
          </TermsDialog>{" "}
          y la{" "}
          <PrivacyPolicyDialog>
            <button
              className="font-medium text-primary hover:underline"
              type="button"
            >
              Política de Privacidad
            </button>
          </PrivacyPolicyDialog>
          .
        </span>
      </label>

      {serverError && (
        <p className="text-sm text-destructive">{serverError}</p>
      )}
      <Button className="w-full" disabled={!canSubmit || isLoading} type="submit">
      {isLoading ? "Creando cuenta..." : "Crear cuenta"}
      </Button>

      <p className="text-center text-sm text-text-secondary">
        ¿Ya tienes cuenta?{" "}
        <Link className="font-semibold text-primary hover:underline" href="/login">
          Inicia sesión
        </Link>
      </p>
    </form>
  );
}

function toOptions(values: string[]) {
  return values.map((v) => ({ value: v, label: v }));
}