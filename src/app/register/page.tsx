import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Registro",
  description: "Crea tu cuenta institucional.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      visualTitle="Crea tu cuenta"
      visualSubtitle="Comienza tu camino digital como estudiante en tu institución."
    >
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-text-primary">Únete a Neztep</h1>
          <p className="text-sm text-text-secondary">Ingresa tus datos para comenzar</p>
        </div>
        <RegisterForm />
      </div>
    </AuthShell>
  );
}
