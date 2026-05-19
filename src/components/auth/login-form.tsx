"use client";

import Link from "next/link";
import { Building2, Chrome, Mail } from "lucide-react";
import { PasswordInput } from "@/components/auth/password-input";
import { SocialButton } from "@/components/auth/social-button";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

/**
 * Renders the UI-only institutional login form.
 */
export function LoginForm() {
  return (
    <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-3">
        <SocialButton icon={<Chrome aria-hidden="true" className="h-4 w-4" />}>
          Continuar con Google
        </SocialButton>
        <SocialButton icon={<Building2 aria-hidden="true" className="h-4 w-4" />}>
          Continuar con Microsoft
        </SocialButton>
      </div>
      <div className="flex items-center gap-4">
        <Separator />
        <span className="text-sm font-medium text-text-secondary">or</span>
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
      <FormField id="loginPassword" label="Contrasena">
        <PasswordInput id="loginPassword" placeholder="Ingresa tu contrasena" />
      </FormField>
      <div className="flex justify-end">
        <Link className="text-sm font-medium text-primary hover:underline" href="#">
          Olvidaste tu contrasena?
        </Link>
      </div>
      <Button className="w-full" type="button">
        Iniciar sesion
      </Button>
      <p className="text-center text-sm text-text-secondary">
        No tienes cuenta?{" "}
        <Link className="font-semibold text-primary hover:underline" href="/register">
          Registrate
        </Link>
      </p>
    </form>
  );
}
