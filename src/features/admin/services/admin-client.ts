import type {
  ContentItem,
  CreateContentPayload,
  InstitutionMetrics,
} from "../types";

/**
 * Communicates with /api/admin — never with Firestore directly.
 *
 * Architectural rule: the BFF verifies the "admin" role from the session token
 * before exposing any data. The features layer never performs role checks.
 *
 * When implementing:
 *   GET  /api/admin/analytics        → institution usage metrics
 *   GET  /api/admin/content          → list content items
 *   POST /api/admin/content          → create a content item
 */
export const adminClient = {
  /** GET /api/admin/analytics */
  async getMetrics(): Promise<InstitutionMetrics | null> {
    return null;
  },

  /** GET /api/admin/content */
  async getContentItems(): Promise<ContentItem[]> {
    return [];
  },

  /** POST /api/admin/content */
  async createContentItem(_payload: CreateContentPayload): Promise<ContentItem> {
    void _payload;
    throw new Error("adminClient.createContentItem: BFF /api/admin not yet implemented");
  },
};
