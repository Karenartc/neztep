import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Lock, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OnboardingModule } from "../types/onboarding-flow";

interface OnboardingNavProps {
  modules: OnboardingModule[];
  completedCount: number;
  currentModuleIndex: number;
  mobile?: boolean;
  onClose?: () => void;
}

export function OnboardingNav({
  modules,
  completedCount,
  currentModuleIndex,
  mobile = false,
  onClose,
}: OnboardingNavProps) {
  const totalModules = modules.length;
  const progressPercent = Math.floor((completedCount / totalModules) * 100);

  return (
    <aside
      aria-label="Recorrido de onboarding"
      className={cn(
        "flex h-screen shrink-0 flex-col border-r border-border bg-surface",
        mobile
          ? "w-64"
          : "group hidden w-16 transition-[width] duration-200 hover:w-56 md:flex",
      )}
    >
      {/* Logo header */}
      <div className="flex h-14 shrink-0 items-center justify-between overflow-hidden border-b border-border px-3">
        <div className="flex items-center gap-2">
          <Image
            src="/Npurple.png"
            alt="Neztep"
            width={32}
            height={32}
            aria-hidden="true"
            className="h-8 w-8 shrink-0 object-contain"
          />
          <span
            aria-hidden="true"
            className={cn(
              "text-sm font-semibold text-text-primary",
              !mobile &&
                "opacity-0 transition-opacity delay-75 duration-150 group-hover:opacity-100",
            )}
          >
            Neztep
          </span>
        </div>
        {mobile && onClose && (
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary hover:bg-muted"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Back to dashboard */}
      <div className="px-2 pt-2">
        <Link
          href="/dashboard"
          title="Volver al inicio"
          className="flex h-9 items-center gap-3 rounded-md px-2 text-sm font-medium text-text-secondary transition-colors hover:bg-muted hover:text-text-primary"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span
            className={cn(
              "overflow-hidden whitespace-nowrap",
              !mobile &&
                "opacity-0 transition-opacity delay-75 duration-150 group-hover:opacity-100",
            )}
          >
            Volver al inicio
          </span>
        </Link>
      </div>

      {/* Module list */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 pb-2 pt-1">
        <p
          className={cn(
            "mb-1 px-2 text-[10px] font-semibold uppercase tracking-widest text-text-secondary",
            !mobile &&
              "opacity-0 transition-opacity delay-75 duration-150 group-hover:opacity-100",
          )}
        >
          Tu recorrido
        </p>
        <ul className="space-y-0.5" role="list">
          {modules.map((mod, index) => {
            const isCompleted = mod.status === "completed";
            const isCurrent =
              index === currentModuleIndex && mod.status !== "completed";
            const isLocked = mod.status === "locked";

            return (
              <li key={mod.id}>
                <div
                  className={cn(
                    "flex h-9 items-center gap-3 rounded-md px-2 text-sm transition-colors",
                    isCurrent && "bg-accent",
                    !isCurrent && !isCompleted && "opacity-60",
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-success"
                    />
                  ) : isLocked ? (
                    <Lock
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
                    >
                      {mod.order}
                    </span>
                  )}
                  <span
                    className={cn(
                      "overflow-hidden whitespace-nowrap leading-tight",
                      !mobile &&
                        "opacity-0 transition-opacity delay-75 duration-150 group-hover:opacity-100",
                      isCurrent
                        ? "font-medium text-text-primary"
                        : "text-text-secondary",
                    )}
                  >
                    {mod.title}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Progress footer */}
      <div className="shrink-0 overflow-hidden border-t border-border p-3 space-y-2">
        <p
          className={cn(
            "whitespace-nowrap text-xs text-text-secondary",
            !mobile &&
              "opacity-0 transition-opacity delay-75 duration-150 group-hover:opacity-100",
          )}
        >
          {completedCount} de {totalModules} completados
        </p>
        <div
          role="progressbar"
          aria-label="Progreso del recorrido"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-1 overflow-hidden rounded-full bg-accent"
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
