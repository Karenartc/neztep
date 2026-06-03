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
