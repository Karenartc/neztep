import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Renders the closing CTA banner for demo conversion.
 */
export function LandingCtaBanner() {
  return (
    <section className="border-b border-t border-[#ddd6fe] bg-accent px-8 py-[60px] text-center">
      <div className="mx-auto max-w-[640px]">
        <h2 className="mb-2.5 text-[36px] font-extrabold tracking-[-0.025em] text-text-primary">
          Lista para transformar la integracion estudiantil?
        </h2>
        <p className="mb-7 text-[16px] leading-[1.65] text-text-secondary">
          Solicita una demo personalizada y descubre como Neztep puede mejorar
          la retencion en tu institucion.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/register">
              <Building2 aria-hidden="true" className="h-[18px] w-[18px]" />
              Solicitar demo institucional
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
