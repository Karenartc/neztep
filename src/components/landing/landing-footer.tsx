import { LANDING_FOOTER_COLUMNS } from "@/components/landing/landing-data";
import { PrivacyPolicyDialog, TermsDialog } from "@/components/legal/legal-dialogs";
import { DivideIcon } from "lucide-react";
import Image from "next/image";

/**
 * Renders the footer links and institutional product statement.
 */
export function LandingFooter() {
  return (
    <footer className="bg-[#0f172a] px-4 pb-7 pt-12 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 grid grid-cols-2 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="w-fit">
              <Image
                src="/logowhite.png"
                alt="Neztep"
                width={1200}
                height={500}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-[13px] leading-[1.6] text-[#64748b] ml-2.5">
              Acompañando a los estudiantes desde el día cero.
            </div>
          </div>

          {LANDING_FOOTER_COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <div className="mb-3.5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#94a3b8]">
                {title}
              </div>
              <div className="flex flex-col gap-2.5">
                {title === "Legal" ? (
                  <>
                    <PrivacyPolicyDialog>
                      <div
                        className="cursor-pointer text-[14px] text-[#64748b] transition-colors hover:text-white"
                      >
                        Privacidad
                      </div>
                    </PrivacyPolicyDialog>

                    <TermsDialog>
                      <div
                        className="cursor-pointer text-[14px] text-[#64748b] transition-colors hover:text-white"
                      >
                        Términos y Condiciones
                      </div>
                    </TermsDialog>
                  </>
                ) : (
                  links.map((link) => {
                    const href = link === "Funcionalidades" ? "#funcionalidades" : link === "Descargar" ? "#descargar" : "#";
                    return (
                      <a
                        key={link}
                        className="text-[14px] text-[#64748b] transition-colors hover:text-white"
                        href={href}
                      >
                        {link}
                      </a>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1e293b] pt-5 text-[12px] text-[#475569]">
          <span>(c) 2026 Neztep. Todos los derechos reservados.</span>
          <span>Hecho en Chile para la educación superior</span>
        </div>
      </div>
    </footer>
  );
}
