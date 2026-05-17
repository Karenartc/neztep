import type { LucideIcon } from "lucide-react";

export type BadgeTone =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";

export interface DesignColor {
  name: string;
  token: string;
  lightValue: string;
  darkValue: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  trend: string;
  tone: BadgeTone;
  icon: LucideIcon;
}

export interface TypographySample {
  name: string;
  className: string;
  sample: string;
}

export interface QuickAccessItem {
  label: string;
  text: string;
  icon: LucideIcon;
}

export interface SpacingSample {
  name: string;
  className: string;
  value: string;
}

export interface ResourceRow {
  resource: string;
  category: string;
  status: string;
  owner: string;
}
