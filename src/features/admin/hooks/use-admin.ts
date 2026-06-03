"use client";

import type { ContentItem, InstitutionMetrics } from "../types";

// TODO: implement using adminClient once BFF /api/admin is ready.
export function useAdmin(): {
  metrics: InstitutionMetrics | null;
  contentItems: ContentItem[];
  isLoading: boolean;
} {
  return { metrics: null, contentItems: [], isLoading: false };
}
