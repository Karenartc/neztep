export type OnboardingStepStatus = "pending" | "in_progress" | "completed";

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  status: OnboardingStepStatus;
  order: number;
}

export interface OnboardingProgress {
  userId: string;
  institutionId: string;
  steps: OnboardingStep[];
  completedAt: string | null;
}

export interface UpdateStepPayload {
  stepId: string;
  status: OnboardingStepStatus;
}
