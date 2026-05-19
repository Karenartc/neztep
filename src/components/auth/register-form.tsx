"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { NeztepLogo } from "@/components/auth/neztep-logo";
import {
  AccountStep,
  ConfirmationStep,
  InstitutionStep,
  ProfileStep,
  type RegistrationDraft,
} from "@/components/auth/register-step-fields";
import { Button } from "@/components/ui/button";
import { Stepper, type StepperStep } from "@/components/ui/stepper";
import { institutions } from "@/lib/mock/institutions";

const steps: StepperStep[] = [
  { id: "account", title: "Cuenta", description: "Datos de acceso" },
  { id: "institution", title: "Institucion", description: "Campus y carrera" },
  { id: "profile", title: "Perfil", description: "Objetivo inicial" },
  { id: "confirmation", title: "Confirmacion", description: "Revision final" },
];

const initialDraft: RegistrationDraft = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  institutionId: "",
  campus: "",
  career: "",
  academicLevel: "",
  entryYear: "",
  onboardingGoal: "",
  receiveUpdates: true,
  acceptTerms: false,
};

/**
 * Renders the UI-only multistep registration form for institutional users.
 */
export function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [draft, setDraft] = useState<RegistrationDraft>(initialDraft);
  const selectedInstitution = institutions.find(
    (institution) => institution.institutionId === draft.institutionId,
  );
  const campusOptions = toOptions(selectedInstitution?.campuses ?? []);
  const careerOptions = toOptions(selectedInstitution?.careers ?? []);
  const institutionOptions = institutions.map((institution) => ({
    value: institution.institutionId,
    label: institution.name,
  }));

  function updateField<Key extends keyof RegistrationDraft>(
    field: Key,
    value: RegistrationDraft[Key],
  ) {
    setDraft((current) => resetDependentFields({ ...current, [field]: value }, field));
  }

  return (
    <section className="w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <div className="grid lg:grid-cols-[18rem_1fr]">
        <RegisterSidebar />
        <form
          className="space-y-8 p-6 sm:p-8 lg:p-10"
          onSubmit={(event) => event.preventDefault()}
        >
          <Stepper currentStep={currentStep} steps={steps} />
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary">
              Paso {currentStep} de {steps.length}
            </p>
            <h1 className="text-2xl font-semibold text-text-primary">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-sm text-text-secondary">
              Completa la informacion institucional para preparar tu cuenta.
            </p>
          </div>
          <StepContent
            campusOptions={campusOptions}
            careerOptions={careerOptions}
            currentStep={currentStep}
            draft={draft}
            institutionName={selectedInstitution?.name ?? ""}
            institutionOptions={institutionOptions}
            onChange={updateField}
          />
          <RegisterActions
            canComplete={draft.acceptTerms}
            currentStep={currentStep}
            onBack={() => setCurrentStep((step) => Math.max(1, step - 1))}
            onNext={() => setCurrentStep((step) => Math.min(steps.length, step + 1))}
          />
        </form>
      </div>
    </section>
  );
}

interface StepContentProps {
  campusOptions: { value: string; label: string }[];
  careerOptions: { value: string; label: string }[];
  currentStep: number;
  draft: RegistrationDraft;
  institutionName: string;
  institutionOptions: { value: string; label: string }[];
  onChange: <Key extends keyof RegistrationDraft>(
    field: Key,
    value: RegistrationDraft[Key],
  ) => void;
}

function StepContent({
  campusOptions,
  careerOptions,
  currentStep,
  draft,
  institutionName,
  institutionOptions,
  onChange,
}: StepContentProps) {
  if (currentStep === 1) {
    return <AccountStep draft={draft} onChange={onChange} />;
  }

  if (currentStep === 2) {
    return (
      <InstitutionStep
        campusOptions={campusOptions}
        careerOptions={careerOptions}
        draft={draft}
        institutionOptions={institutionOptions}
        onChange={onChange}
      />
    );
  }

  if (currentStep === 3) {
    return <ProfileStep draft={draft} onChange={onChange} />;
  }

  return <ConfirmationStep draft={draft} institutionName={institutionName} />;
}

interface RegisterActionsProps {
  canComplete: boolean;
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
}

function RegisterActions({
  canComplete,
  currentStep,
  onBack,
  onNext,
}: RegisterActionsProps) {
  const isFinalStep = currentStep === steps.length;

  return (
    <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
      {currentStep > 1 && (
        <Button onClick={onBack} type="button" variant="secondary">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Volver
        </Button>
      )}
      <Button disabled={isFinalStep && !canComplete} onClick={onNext} type="button">
        {isFinalStep ? "Completar registro" : "Continuar"}
        {isFinalStep ? (
          <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
        ) : (
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

function RegisterSidebar() {
  return (
    <aside className="hidden border-r border-border bg-muted p-8 lg:flex lg:flex-col lg:justify-between">
      <div className="space-y-10">
        <NeztepLogo />
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-text-primary">Crea tu cuenta</h2>
          <p className="text-sm leading-6 text-text-secondary">
            Vincula tu perfil de estudiante con una institucion, campus y programa.
          </p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-surface p-4 text-sm text-text-secondary">
        La cuenta queda preparada para guardarse como usuario tenant-scoped cuando
        Firebase se implemente.
      </div>
    </aside>
  );
}

function resetDependentFields<Key extends keyof RegistrationDraft>(
  draft: RegistrationDraft,
  field: Key,
) {
  if (field !== "institutionId") {
    return draft;
  }

  return { ...draft, campus: "", career: "" };
}

function toOptions(values: string[]) {
  return values.map((value) => ({ value, label: value }));
}
