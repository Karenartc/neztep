import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Renders the sticky navigation bar for the public landing page.
 */
export function LandingNav() {
  return (
    <nav
      className="sticky top-0 z-40 border-b border-border backdrop-blur-md"
      style={{ background: "rgba(248,250,252,0.88)" }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] flex-wrap items-center gap-4 px-4 sm:gap-10 sm:px-8">
        <Link className="flex items-center gap-3 no-underline" href="/">
          <Image
            src="/logopurple.png"
            alt="Neztep"
            width={900}
            height={300}
            className="h-8 w-auto"
          />
        </Link>

        <div className="ml-auto flex items-center gap-2.5">
          <Button asChild size="sm" variant="ghost">
            <Link href="/register">Registrarse</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/login">Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
