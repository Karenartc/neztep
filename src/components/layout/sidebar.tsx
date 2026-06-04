import Link from "next/link";
import Image from "next/image";
import { LogOut, UserRound, X } from "lucide-react";
import type { NavigationItem } from "@/types/design-system";
import { cn } from "@/lib/utils";

export interface SidebarProps {
  items: NavigationItem[];
  activeHref?: string;
  className?: string;
  onClose?: () => void;
}

export function Sidebar({
  items,
  activeHref = "/app",
  className,
  onClose,
}: SidebarProps) {
  // Mobile overlay passes onClose → always expanded; desktop uses CSS hover
  const isMobile = !!onClose;

  return (
    <aside
      aria-label="Primary navigation"
      className={cn(
        "group flex h-screen flex-col border-r border-border bg-surface transition-[width] duration-200",
        isMobile ? "w-56" : "w-16 hover:w-56",
        className,
      )}
    >
      {/* Logo */}
      <div className="flex h-14 shrink-0 items-center gap-2 overflow-hidden border-b border-border px-3">
        <Image
          src="/Npurple.png"
          alt="Neztep"
          width={32}
          height={32}
          aria-hidden="true"
          className="h-8 w-8 shrink-0 object-contain"
        />
        <span
          aria-hidden="true"
          className={cn(
            "overflow-hidden whitespace-nowrap text-sm font-semibold text-text-primary transition-opacity duration-150",
            isMobile ? "opacity-100" : "opacity-0 delay-75 group-hover:opacity-100",
          )}
        >
          Neztep
        </span>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-text-secondary hover:bg-muted"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-hidden p-2">
        <ul className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === activeHref;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  title={!isMobile ? item.label : undefined}
                  className={cn(
                    "flex h-9 items-center gap-3 rounded-md px-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-primary"
                      : "text-text-secondary hover:bg-muted hover:text-text-primary",
                  )}
                >
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                  <span
                    className={cn(
                      "overflow-hidden whitespace-nowrap transition-opacity duration-150",
                      isMobile ? "opacity-100" : "opacity-0 delay-75 group-hover:opacity-100",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom: Profile + Logout */}
      <div className="shrink-0 border-t border-border p-2 space-y-1">
        <Link
          href="/profile"
          aria-current={activeHref === "/profile" ? "page" : undefined}
          title={!isMobile ? "Perfil" : undefined}
          className={cn(
            "flex h-9 items-center gap-3 rounded-md px-2 text-sm font-medium transition-colors",
            activeHref === "/profile"
              ? "bg-accent text-primary"
              : "text-text-secondary hover:bg-muted hover:text-text-primary",
          )}
        >
          <UserRound aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span
            className={cn(
              "overflow-hidden whitespace-nowrap transition-opacity duration-150",
              isMobile ? "opacity-100" : "opacity-0 delay-75 group-hover:opacity-100",
            )}
          >
            Perfil
          </span>
        </Link>
        <button
          type="button"
          title={!isMobile ? "Cerrar sesión" : undefined}
          className="flex h-9 w-full items-center gap-3 rounded-md px-2 text-sm font-medium text-text-secondary transition-colors hover:bg-muted hover:text-text-primary"
        >
          <LogOut aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span
            className={cn(
              "overflow-hidden whitespace-nowrap transition-opacity duration-150",
              isMobile ? "opacity-100" : "opacity-0 delay-75 group-hover:opacity-100",
            )}
          >
            Cerrar sesión
          </span>
        </button>
      </div>
    </aside>
  );
}
