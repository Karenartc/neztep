import Link from "next/link";
import { LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Presents a minimal public entry point for authentication routes.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <section className="w-full max-w-md rounded-xl border border-border bg-surface p-8 text-center shadow-soft">
        <p className="text-sm font-medium text-primary">Neztep</p>
        <h1 className="mt-3 text-3xl font-semibold text-text-primary">
          Institutional onboarding
        </h1>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Start with a public access route while the product foundation grows.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Button asChild>
            <Link href="/login">
              <LogIn aria-hidden="true" className="h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/register">
              <UserPlus aria-hidden="true" className="h-4 w-4" />
              Register
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
