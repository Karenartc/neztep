"use client";

import { usePathname } from "next/navigation";
import { BarChart3, FileText, LayoutDashboard } from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import type { NavigationItem } from "@/types/design-system";

const ADMIN_NAV: NavigationItem[] = [
  { label: "Panel admin", href: "/admin", icon: LayoutDashboard },
  { label: "Contenido", href: "/admin/content", icon: FileText },
  { label: "Analíticas", href: "/admin/analytics", icon: BarChart3 },
];

export function AdminNav() {
  const pathname = usePathname();
  return <Sidebar items={ADMIN_NAV} activeHref={pathname} />;
}
