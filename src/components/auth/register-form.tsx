"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { PasswordInput } from "@/components/auth/password-input";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { institutions } from "@/lib/mock/institutions";
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

const initialDraft: RegistrationDraft = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  institutionId: "",
  career: "",
  campus: "",
  acceptTerms: false,
};

export function RegisterForm() {
  const [draft, setDraft] = useState<RegistrationDraft>(initialDraft);

  const selectedInstitution = institutions.find(
    (inst) => inst.institutionId === draft.institutionId,
  );
  const campusOptions = toOptions(selectedInstitution?.campuses ?? []);
  const careerOptions = toOptions(selectedInstitution?.careers ?? []);
  const institutionOptions = institutions.map((inst) => ({
    value: inst.institutionId,
    label: inst.name,
  }));

  const passwordError =
    draft.confirmPassword && draft.password !== draft.confirmPassword
      ? "Las contraseñas deben coincidir."
      : undefined;

  const canSubmit =
    draft.acceptTerms &&
    !passwordError &&
    draft.fullName.length > 0 &&
    draft.email.length > 0 &&
    draft.password.length > 0;

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

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <FormField id="fullName" label="Nombre completo">
        <Input
          id="fullName"
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="Ingresa tu nombre completo"
          value={draft.fullName}
        />
      </FormField>

      <FormField id="email" label="Correo institucional">
        <div className="relative">
          <Input
            className="pe-9"
            id="email"
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
        <FormField id="password" label="Contraseña">
          <PasswordInput
            id="password"
            onChange={(e) => updateField("password", e.target.value)}
            placeholder="contraseña"
            value={draft.password}
          />
        </FormField>
        <FormField error={passwordError} id="confirmPassword" label="Confirmar contraseña">
          <PasswordInput
            error={Boolean(passwordError)}
            id="confirmPassword"
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            placeholder="contraseña"
            value={draft.confirmPassword}
          />
        </FormField>
      </div>

      <FormField id="institutionId" label="Institución">
        <Select
          id="institutionId"
          onChange={(e) => updateField("institutionId", e.target.value)}
          options={institutionOptions}
          placeholder="Selecciona tu institución"
          value={draft.institutionId}
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="career" label="Carrera">
          <Select
            disabled={!draft.institutionId}
            id="career"
            onChange={(e) => updateField("career", e.target.value)}
            options={careerOptions}
            placeholder="Selecciona tu carrera"
            value={draft.career}
          />
        </FormField>
        <FormField id="campus" label="Sede / Campus">
          <Select
            disabled={!draft.institutionId}
            id="campus"
            onChange={(e) => updateField("campus", e.target.value)}
            options={campusOptions}
            placeholder="Selecciona tu sede"
            value={draft.campus}
          />
        </FormField>
      </div>

      <label
        className={cn(
          "flex min-h-11 cursor-pointer items-start gap-3 rounded-md border border-border bg-surface p-3 text-sm text-text-primary",
          "focus-within:outline focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-ring",
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
          <Link className="font-medium text-primary hover:underline" href="#">
            Términos y Condiciones
          </Link>{" "}
          y la{" "}
          <Link className="font-medium text-primary hover:underline" href="#">
            Política de Privacidad
          </Link>
          .
        </span>
      </label>

      <Button className="w-full" disabled={!canSubmit} type="button">
        Crear cuenta
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
