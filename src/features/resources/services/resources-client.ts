import type { Resource, ResourceCategory } from "../types";

/**
 * Communicates with /api/resources — never with Firestore directly.
 *
 * When implementing:
 *   GET /api/resources             → list resources for session's institution
 *   GET /api/resources?id=:id      → fetch a single resource
 *   GET /api/resources?cat=:cat    → filter by category
 */
export const resourcesClient = {
  /** GET /api/resources */
  async getResources(_category?: ResourceCategory): Promise<Resource[]> {
    void _category;
    return [];
  },

  /** GET /api/resources?id=:id */
  async getResource(_id: string): Promise<Resource | null> {
    void _id;
    return null;
  },
};
