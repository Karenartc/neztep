import Image from "next/image";
import Link from "next/link";
import { Building2, TrendingUp, Zap } from "lucide-react";
import {
  LANDING_SIDEBAR_ITEMS,
  LANDING_SNAPSHOT_CARDS,
} from "@/components/landing/landing-data";
import { Button } from "@/components/ui/button";

/**
 * Renders the landing hero and product snapshot preview.
 */
export function LandingHero() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-8 pb-16 pt-[72px] lg:grid-cols-[1fr_1.05fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-primary">
            <Zap aria-hidden="true" className="h-3.5 w-3.5" />
            Plataforma SaaS para Educación Superior
          </div>

          <h1 className="mb-5 text-[42px] font-extrabold leading-[1.1] tracking-[-0.03em] text-text-primary lg:text-[52px]">
            La mejor experiencia de{" "}
            <span className="bg-gradient-to-br from-[#7c5cdb] to-[#a78bfa] bg-clip-text text-transparent">
              integración
            </span>{" "}
            para tus estudiantes
          </h1>

          <p className="mb-8 max-w-[480px] text-[18px] leading-[1.65] text-text-secondary">
            Neztep acompaña a los estudiantes desde el día cero, centralizando
            información, procesos y recursos en una sola plataforma.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/register">
                <Building2 aria-hidden="true" className="h-[18px] w-[18px]" />
                Solicitar demo institucional
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative pb-6 pr-6">
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_64px_rgba(15,23,42,.14),0_4px_12px_rgba(15,23,42,.08)]">
            <div className="flex h-10 items-center gap-2 border-b border-border bg-[#f8fafc] px-3.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#fc5f56]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#fdbc2d]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#29c940]" />
              </div>
              <div className="mx-3 flex flex-1 items-center rounded-full bg-border px-2.5 text-[11px] text-muted-foreground">
                app.neztep.com
              </div>
            </div>

            <div className="grid min-h-[340px] grid-cols-[180px_1fr] bg-background">
              <div className="flex flex-col gap-0.5 border-r border-border bg-surface p-3.5">
                <div className="pb-3.5 pl-1.5 text-[15px] font-extrabold italic text-primary">
                  N
                </div>
                {LANDING_SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 rounded-[6px] px-2 py-[7px] text-[11px] ${
                      active
                        ? "bg-accent font-semibold text-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-[13px] w-[13px]" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="p-3.5">
                <div className="mb-0.5 text-[16px] font-bold text-text-primary">
                  Hola, Estudiante
                </div>
                <div className="mb-3 text-[11px] text-text-secondary">
                  Bienvenida a tu ruta de integración
                </div>

                <div className="mb-2.5 rounded-[10px] bg-gradient-to-br from-[#7b5be0] to-primary p-4 text-white">
                  <div className="text-[10px] font-medium opacity-90">
                    Tu progreso de integración
                  </div>
                  <div className="my-1.5 text-[28px] font-extrabold leading-none">
                    72%
                  </div>
                  <div className="h-[5px] rounded-full bg-white/25">
                    <div className="h-full w-[72%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {LANDING_SNAPSHOT_CARDS.map(({ title, subtitle }) => (
                    <div
                      key={title}
                      className="rounded-lg border border-border bg-surface p-2.5 text-[10px] text-text-secondary"
                    >
                          <div className="mb-1.5 h-6 w-6 overflow-hidden rounded-[6px] bg-accent">
                      </div>
                      <div className="mb-0.5 font-semibold text-text-primary">
                        {title}
                      </div>
                      {subtitle}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
