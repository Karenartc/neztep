import { LANDING_STEPS } from "@/components/landing/landing-data";

/**
 * Renders the three-step onboarding overview for institutions.
 */
export function LandingHowItWorks() {
  return (
    <section
      className="px-4 py-20 sm:px-8"
      style={{
        background:
          "linear-gradient(160deg,#7b5be0 0%,#5b3cc4 55%,#47279e 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-2 text-center text-[30px] font-extrabold tracking-[-0.025em] text-white sm:text-[38px]">
          ¿Cómo funciona?
        </h2>
        <p className="mb-12 text-center text-[17px] text-white/75">
          Tres pasos para transformar la experiencia de integración de tus
          estudiantes.
        </p>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {LANDING_STEPS.map(({ number, title, description }) => (
            <div
              key={number}
              className="rounded-xl border border-white/20 bg-white/10 p-8"
            >
              <div className="mb-4 text-[48px] font-extrabold leading-none tracking-[-0.04em] text-white/20">
                {number}
              </div>
              <div className="mb-2 text-[18px] font-bold text-white">{title}</div>
              <div className="text-[14px] leading-[1.65] text-white/75">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
