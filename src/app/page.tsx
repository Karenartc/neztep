import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Presents a minimal entry point into the internal design-system route.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium text-primary">Neztep</p>
        <h1 className="text-4xl font-semibold tracking-tight text-text-primary">
          Institutional onboarding, designed as a serious SaaS platform.
        </h1>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Review the initial tokens, components, and dashboard patterns in the
          internal design-system page.
        </p>
        <Button asChild className="mt-8">
          <Link href="/design-system">
            View design system
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
