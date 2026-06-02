"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { PasswordInput } from "@/components/auth/password-input";
import { SocialButton } from "@/components/auth/social-button";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 23 23" className="h-4 w-4" aria-hidden="true">
      <path fill="#f25022" d="M1 1h10v10H1z" />
      <path fill="#00a4ef" d="M12 1h10v10H12z" />
      <path fill="#7fba00" d="M1 12h10v10H1z" />
      <path fill="#ffb900" d="M12 12h10v10H12z" />
    </svg>
  );
}

export function LoginForm() {
  return (
    <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-3">
        <SocialButton icon={<GoogleIcon />}>Continuar con Google</SocialButton>
        <SocialButton icon={<MicrosoftIcon />}>Continuar con Microsoft</SocialButton>
      </div>
      <div className="flex items-center gap-4">
        <Separator />
        <span className="text-sm font-medium text-text-secondary">o</span>
        <Separator />
      </div>
      <FormField id="loginEmail" label="Correo institucional">
        <div className="relative">
          <Input
            className="pe-9"
            id="loginEmail"
            placeholder="tucorreo@institucion.cl"
            type="email"
          />
          <Mail
            aria-hidden="true"
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </FormField>
      <FormField id="loginPassword" label="Contraseña">
        <PasswordInput id="loginPassword" placeholder="Ingresa tu contraseña" />
      </FormField>
      <div className="flex justify-end">
        <Link className="text-sm font-medium text-primary hover:underline" href="#">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <Button className="w-full" type="button">
        Iniciar sesión
      </Button>
      <p className="text-center text-sm text-text-secondary">
        ¿No tienes cuenta?{" "}
        <Link className="font-semibold text-primary hover:underline" href="/register">
          Regístrate
        </Link>
      </p>
    </form>
  );
}
