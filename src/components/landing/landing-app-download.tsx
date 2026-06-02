import { Download } from "lucide-react";
import Image from "next/image";

/**
 * Renders the mobile app teaser section with download call to action.
 */
export function LandingAppDownload() {
  return (
    <section id="descargar" className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-8 py-20 lg:grid-cols-2">
      <div>
        <h2 className="mb-3.5 text-[40px] font-extrabold tracking-[-0.025em] text-text-primary">
          Lleva Neztep en <span className="text-primary">tu bolsillo</span>
        </h2>
        <p className="mb-8 text-[17px] leading-[1.65] text-text-secondary">
          Descarga la app y accede a toda la informacion de tu institucion desde
          cualquier lugar, en cualquier momento.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            className="flex items-center gap-3 rounded-xl bg-text-primary px-5 py-3 text-white transition-colors hover:bg-[#1e293b]"
            href="#"
          >
            <Download aria-hidden="true" className="h-5 w-5" />
            <div className="text-[16px] font-bold">Descargar</div>
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <div className="w-40 rounded-[28px] bg-[#0f172a] p-2 shadow-[0_24px_48px_rgba(15,23,42,.2)]">
          <div className="flex aspect-[9/19] flex-col items-center justify-center gap-2 rounded-[22px] bg-gradient-to-b from-[#7b5be0] to-primary p-6">
            <Image
            src="/logowhite.png"
            alt="Neztep"
            width={1200}
            height={500}
            className="h-8 w-auto"
          />
          </div>
        </div>
        <div className="mt-7 w-40 rounded-[28px] bg-[#0f172a] p-2 shadow-[0_24px_48px_rgba(15,23,42,.2)]">
          <div className="flex aspect-[9/19] flex-col gap-1.5 rounded-[22px] bg-surface p-4">
            <div className="h-1.5 w-4/5 rounded bg-accent" />
            <div className="h-2.5 w-[55%] rounded bg-primary opacity-70" />
            <div className="my-1 h-10 rounded-lg bg-gradient-to-br from-[#7b5be0] to-primary" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-8 rounded-md bg-accent" />
              <div className="h-8 rounded-md bg-accent" />
            </div>
            <div className="h-1.5 w-[70%] rounded bg-border" />
            <div className="h-1.5 w-[90%] rounded bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
