export interface InstitutionMetrics {
  institutionId: string;
  totalStudents: number;
  onboardingCompletionRate: number;
  activeUsersLast30Days: number;
  period: string;
}

export type ContentStatus = "draft" | "published" | "archived";

export interface ContentItem {
  id: string;
  title: string;
  body: string;
  status: ContentStatus;
  institutionId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContentPayload {
  title: string;
  body: string;
  status: ContentStatus;
}
