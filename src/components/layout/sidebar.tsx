import Link from "next/link";
import { LogOut } from "lucide-react";
import type { NavigationItem } from "@/types/design-system";
import { cn } from "@/lib/utils";

export interface SidebarProps {
  items: NavigationItem[];
  activeHref?: string;
  className?: string;
}

/**
 * Renders the institutional left navigation used by student and admin shells.
 */
export function Sidebar({ items, activeHref = "/app", className }: SidebarProps) {
  return (
    <aside
      aria-label="Primary navigation"
      className={cn("w-full rounded-lg border border-border bg-surface p-3 shadow-card", className)}
    >
      <div className="mb-5 flex items-center gap-2 px-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent font-bold text-primary">
          N
        </span>
        <span className="text-sm font-semibold text-text-primary">Neztep</span>
      </div>
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === activeHref;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-primary"
                  : "text-text-secondary hover:bg-muted hover:text-text-primary",
              )}
              href={item.href}
              key={item.href}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button
        className="mt-6 flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-medium text-text-secondary hover:bg-muted"
        type="button"
      >
        <LogOut aria-hidden="true" className="h-4 w-4" />
        Cerrar sesión
      </button>
    </aside>
  );
}
