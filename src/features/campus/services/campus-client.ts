import type { CampusBuilding } from "../types";

/**
 * Communicates with /api/campus — never with Firestore directly.
 *
 * When implementing:
 *   GET /api/campus   → list buildings scoped to session's institutionId
 */
export const campusClient = {
  /** GET /api/campus */
  async getBuildings(): Promise<CampusBuilding[]> {
    return [];
  },
};
