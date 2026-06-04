"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Bell,
  BookOpen,
  Bot,
  Briefcase,
  GraduationCap,
  HelpCircle,
  Home,
  MapPin,
  Menu,
  Route,
} from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { NavigationItem } from "@/types/design-system";

const APP_NAV: NavigationItem[] = [
  { label: "Inicio", href: "/dashboard", icon: Home },
  { label: "Onboarding", href: "/onboarding", icon: GraduationCap },
  { label: "Mi Ruta", href: "/mi-ruta", icon: Route },
  { label: "Campus", href: "/campus", icon: MapPin },
  { label: "Centro de información", href: "/resources", icon: BookOpen },
  { label: "Servicios", href: "/services", icon: Briefcase },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
  { label: "NezBot", href: "/chatbot", icon: Bot },
];

export function AppNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop sidebar — hover-expand via CSS in Sidebar */}
      <div className="hidden md:block">
        <Sidebar items={APP_NAV} activeHref={pathname} />
      </div>

      {/* Mobile top bar */}
      <header
        aria-label="Barra de navegación superior"
        className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-surface px-4 md:hidden"
      >
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-md text-text-primary hover:bg-muted"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>

        <Image
          src="/logopurple.png"
          alt="Neztep"
          width={100}
          height={28}
          className="h-7 w-auto object-contain"
        />

        <div className="flex items-center gap-1">
          <Button aria-label="Ver notificaciones" size="icon" variant="ghost">
            <Bell aria-hidden="true" className="h-4 w-4" />
          </Button>
          <Avatar name="Estudiante Sede" />
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar
              items={APP_NAV}
              activeHref={pathname}
              onClose={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
