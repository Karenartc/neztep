import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login | Neztep",
  description: "Institutional sign-in interface.",
};

export default function LoginPage() {
  return (
    <AuthShell>
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-text-primary">
            Bienvenido de vuelta
          </h1>
          <p className="text-sm text-text-secondary">Inicia sesión para continuar</p>
        </div>
        <LoginForm />
      </div>
    </AuthShell>
  );
}
