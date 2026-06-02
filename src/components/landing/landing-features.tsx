import { Sparkles } from "lucide-react";
import { LANDING_FEATURES } from "@/components/landing/landing-data";

/**
 * Renders the institutional feature grid for the landing page.
 */
export function LandingFeatures() {
  return (
    <section id="funcionalidades" className="mx-auto max-w-[1200px] px-8 py-20">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-primary">
          <Sparkles aria-hidden="true" className="h-3 w-3" />
          Funcionalidades
        </div>
        <h2 className="mb-3 text-[38px] font-extrabold tracking-[-0.025em] text-text-primary">
          Todo lo que tu institución necesita
        </h2>
        <p className="mx-auto max-w-[540px] text-[17px] leading-[1.65] text-text-secondary">
          Una plataforma completa para orientar, informar y retener a tus
          estudiantes desde el primer día.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 inline-flex items-center">
        {LANDING_FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-3.5 rounded-xl border border-border bg-surface p-7 transition-[border-color,box-shadow] hover:border-[#c4b5fd] hover:shadow-[0_8px_24px_rgba(91,60,196,.15)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
              <Icon aria-hidden="true" className="h-[22px] w-[22px]" />
            </div>
            <div className="text-[16px] font-bold text-text-primary">{title}</div>
            <div className="text-[14px] leading-[1.6] text-text-secondary">
              {description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
