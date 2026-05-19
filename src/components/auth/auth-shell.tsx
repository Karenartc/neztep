import type { ReactNode } from "react";
import { BookOpen, CalendarDays, Map, TrendingUp } from "lucide-react";
import { NeztepLogo } from "@/components/auth/neztep-logo";
import { cn } from "@/lib/utils";

export interface AuthShellProps {
  children: ReactNode;
  className?: string;
  visualTitle?: string;
  visualSubtitle?: string;
}

const highlights = [
  { label: "Explora tu campus", icon: Map },
  { label: "Organiza actividades", icon: CalendarDays },
  { label: "Encuentra recursos", icon: BookOpen },
  { label: "Sigue tu progreso", icon: TrendingUp },
];

/**
 * Builds the responsive public auth layout with an institutional visual panel.
 */
export function AuthShell({
  children,
  className,
  visualTitle = "La mejor experiencia de integracion para tus estudios",
  visualSubtitle = "Toda la informacion institucional que necesitas, en un solo lugar.",
}: AuthShellProps) {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <section
        className={cn(
          "mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-xl border border-border bg-surface shadow-soft lg:grid-cols-[0.9fr_1.1fr]",
          className,
        )}
      >
        <aside className="hidden bg-primary p-10 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
          <div className="space-y-12">
            <NeztepLogo
              className="[&_*]:text-primary-foreground"
              markClassName="bg-primary-foreground text-primary"
            />
            <div className="max-w-sm space-y-5">
              <h1 className="text-3xl font-semibold leading-tight">
                {visualTitle}
              </h1>
              <p className="text-sm leading-6 text-primary-foreground/85">
                {visualSubtitle}
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="flex items-center gap-4" key={item.label}>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary-foreground/15">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </aside>
        <div className="flex items-center justify-center p-6 sm:p-10">
          {children}
        </div>
      </section>
    </main>
  );
}
