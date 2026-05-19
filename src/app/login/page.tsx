import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { NeztepLogo } from "@/components/auth/neztep-logo";

export const metadata: Metadata = {
  title: "Login | Neztep",
  description: "Institutional sign-in interface for Neztep.",
};

/**
 * Renders the public login route with UI-only authentication controls.
 */
export default function LoginPage() {
  return (
    <AuthShell>
      <AuthCard
        header={
          <div className="space-y-8">
            <NeztepLogo className="justify-center" />
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold text-text-primary">
                Bienvenido de vuelta
              </h1>
              <p className="text-sm text-text-secondary">
                Inicia sesion para continuar
              </p>
            </div>
          </div>
        }
      >
        <LoginForm />
      </AuthCard>
    </AuthShell>
  );
}
