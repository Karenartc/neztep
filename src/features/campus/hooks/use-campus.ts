"use client";

import type { CampusBuilding } from "../types";

// TODO: implement using campusClient once BFF /api/campus is ready.
export function useCampus(): {
  buildings: CampusBuilding[];
  isLoading: boolean;
} {
  return { buildings: [], isLoading: false };
}
