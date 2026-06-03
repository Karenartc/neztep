import type { OnboardingProgress, UpdateStepPayload } from "../types";

/**
 * Communicates with /api/onboarding — never with Firestore directly.
 *
 * Architectural rule:
 *   features/onboarding  →  /api/onboarding (BFF)  →  Firestore
 *
 * When implementing:
 *   GET   /api/onboarding              → fetch progress for authenticated user
 *   PATCH /api/onboarding              → update a step status
 */
export const onboardingClient = {
  /** GET /api/onboarding */
  async getProgress(): Promise<OnboardingProgress | null> {
    return null;
  },

  /** PATCH /api/onboarding */
  async updateStep(_payload: UpdateStepPayload): Promise<void> {
    void _payload;
    throw new Error("onboardingClient.updateStep: BFF /api/onboarding not yet implemented");
  },
};
