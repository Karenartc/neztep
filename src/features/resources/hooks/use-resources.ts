"use client";

import type { Resource, ResourceCategory } from "../types";

// TODO: implement using resourcesClient once BFF /api/resources is ready.
export function useResources(_category?: ResourceCategory): {
  resources: Resource[];
  isLoading: boolean;
} {
  void _category;
  return { resources: [], isLoading: false };
}
