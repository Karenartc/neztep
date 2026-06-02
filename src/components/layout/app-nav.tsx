"use client";

import { usePathname } from "next/navigation";
import {
  Bot,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  BookOpen,
  UserRound,
} from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import type { NavigationItem } from "@/types/design-system";

const APP_NAV: NavigationItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Onboarding", href: "/onboarding", icon: GraduationCap },
  { label: "Campus", href: "/campus", icon: MapPin },
  { label: "Recursos", href: "/resources", icon: BookOpen },
  { label: "Chatbot IA", href: "/chatbot", icon: Bot },
  { label: "Perfil", href: "/profile", icon: UserRound },
];

export function AppNav() {
  const pathname = usePathname();
  return <Sidebar items={APP_NAV} activeHref={pathname} />;
}
