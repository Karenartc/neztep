export type BuildingCategory =
  | "academic"
  | "administrative"
  | "services"
  | "recreation"
  | "health";

export interface CampusBuilding {
  id: string;
  name: string;
  description: string;
  category: BuildingCategory;
  address: string;
  institutionId: string;
}
