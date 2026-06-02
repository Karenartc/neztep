"use client";

import type { OnboardingProgress } from "../types";

// TODO: implement using onboardingClient once BFF /api/onboarding is ready.
export function useOnboarding(): {
  progress: OnboardingProgress | null;
  isLoading: boolean;
} {
  return { progress: null, isLoading: false };
}
