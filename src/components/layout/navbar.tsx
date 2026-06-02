import Link from "next/link";
import { Bell, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface NavbarProps {
  title: string;
  subtitle?: string;
}

/**
 * Renders a quiet dashboard navbar with search and account actions.
 */
export function Navbar({ title, subtitle }: NavbarProps) {
  return (
    <header className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-4 shadow-card md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-primary">Neztep</p>
        <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
        {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <Link
          className="hidden min-h-11 items-center gap-2 rounded-md border border-border px-3 text-sm text-text-secondary hover:bg-muted md:flex"
          href="/design-system"
        >
          <Search aria-hidden="true" className="h-4 w-4" />
          Buscar recursos
        </Link>
        <Button aria-label="View notifications" size="icon" variant="ghost">
          <Bell aria-hidden="true" className="h-4 w-4" />
        </Button>
        <Button aria-label="Open profile menu" size="icon" variant="secondary">
          <UserRound aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
