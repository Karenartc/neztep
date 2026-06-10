export type OnboardingStepStatus = "completed" | "in_progress" | "pending";
export type ConsultaStatus = "pending" | "in_review" | "resolved";
export type ConsultaChannel = "correo" | "chat" | "presencial";
export type ActivityType =
  | "onboarding_step"
  | "content_viewed"
  | "query_derived"
  | "campus_visited";

export interface StudentProfile {
  userId: string;
  fullName: string;
  email: string;
  role: string;
  career: string;
  campus: string;
  entryYear: number;
  firstLogin: string;
  institutionId: string;
}

export interface ProfileStats {
  progressPercent: number;
  completedSteps: number;
  totalSteps: number;
  derivedQueries: number;
  upcomingEvents: number;
}

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  status: OnboardingStepStatus;
  order: number;
}

export interface ConsultaDerivada {
  id: string;
  question: string;
  status: ConsultaStatus;
  channel: ConsultaChannel;
  createdAt: string;
}

export interface ActivityEntry {
  id: string;
  type: ActivityType;
  description: string;
  detail?: string;
  createdAt: string;
}
