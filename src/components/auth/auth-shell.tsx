import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Map, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AuthShellProps {
  children: ReactNode;
  className?: string;
  visualTitle?: string;
  visualSubtitle?: string;
}

const highlights = [
  {
    label: "Explora tu campus",
    description: "Conoce edificios, servicios y puntos de interés",
    icon: Map,
  },
  {
    label: "Eventos y actividades",
    description: "Participa en talleres, charlas y actividades institucionales",
    icon: CalendarDays,
  },
  {
    label: "Tu progreso",
    description: "Sigue tus avances y desbloquea nuevos logros",
    icon: TrendingUp,
  },
];

export function AuthShell({
  children,
  className,
  visualTitle = "La mejor experiencia de integración para tus estudios",
  visualSubtitle = "Toda la información que necesitas, en un solo lugar.",
}: AuthShellProps) {
  return (
    <main className={cn("flex min-h-screen", className)}>
      {/* Left purple panel — desktop only */}
      <aside className="hidden w-[44%] shrink-0 flex-col justify-between bg-primary p-10 text-primary-foreground lg:flex">
        <div className="space-y-12">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Volver al inicio"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Image
              src="/logowhite.png"
              alt="Neztep"
              width={130}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="max-w-sm space-y-2">
            <h1 className="text-3xl font-semibold leading-tight">{visualTitle}</h1>
            <p className="text-sm leading-6 text-primary-foreground/85">{visualSubtitle}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="grid gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex items-start gap-4" key={item.label}>
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary-foreground/15">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs leading-5 text-primary-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-primary-foreground/40">
            © 2026 Neztep. Todos los derechos reservados.
          </p>
        </div>
      </aside>

      {/* Right panel */}
      <div className="flex flex-1 flex-col bg-background">
        {/* Mobile back button with purple logo */}
        <div className="px-6 pt-5 lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              aria-label="Volver al inicio"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-muted hover:text-text-primary"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Image
              src="/logopurple.png"
              alt="Neztep"
              width={104}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Centered form area */}
        <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
          {children}
        </div>
      </div>
    </main>
  );
}
