export type BuildingCategory =
  | "academic"
  | "administrative"
  | "services"
  | "recreation"
  | "health";

export type PointCategory =
  | "services"
  | "classrooms"
  | "food"
  | "health"
  | "printing"
  | "parking";

export type ActiveFilter = "all" | PointCategory;

export interface CampusBuilding {
  id: string;
  name: string;
  description: string;
  category: BuildingCategory;
  address: string;
  institutionId: string;
}

/** Maps to the pointsOfInterest BFF collection. */
export interface PointOfInterest {
  pointId: string;
  institutionId: string;
  name: string;
  description: string;
  category: BuildingCategory;
  building: string;
  floor: number;
  latitude: number;
  longitude: number;
  isActive: boolean;
}

export interface CampusService {
  label: string;
}

export interface BuildingDetail {
  pointId: string;
  letter: string;
  name: string;
  category: string;
  description: string;
  scheduleLabel: string;
  scheduleHours: string;
  services: CampusService[];
}

export interface FilterChip {
  id: string;
  label: string;
  category: PointCategory;
}
