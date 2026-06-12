// Public API of the onboarding feature

// Legacy types (BFF-oriented, for API route)
export type {
  OnboardingProgress,
  OnboardingStep,
  OnboardingStepStatus,
  UpdateStepPayload,
} from "./types";

// Flow types (local state / MVP)
export type {
  ExplorationItem,
  FlowView,
  ItemType,
  ModuleStatus,
  OnboardingFlowState,
  OnboardingModule,
} from "./types/onboarding-flow";
