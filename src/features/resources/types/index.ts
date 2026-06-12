import type { LucideIcon } from "lucide-react";

// Legacy BFF types
export type ResourceCategory =
  | "academic"
  | "administrative"
  | "health"
  | "financial"
  | "welfare"
  | "other";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  url?: string;
  institutionId: string;
  publishedAt: string;
}

// UI types for Centro de información
export type FilterCategory = "all" | "academic" | "admin" | "wellbeing" | "financial";

export type BadgeTone = "recommended" | "new" | "important";

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  category: Exclude<FilterCategory, "all">;
  badge?: BadgeTone;
  href: string;
}
