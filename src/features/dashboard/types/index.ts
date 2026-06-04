import type { LucideIcon } from "lucide-react";

export interface RecommendedItem {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
}

export type TaskStatus = "pending" | "in_progress" | "completed";
export type TaskPriority = "high" | "medium" | "low";
export type EventCategory = "event" | "announcement";
export type EventStatus = "upcoming" | "today" | "cancelled";
export type ContentCategory = "event" | "announcement" | "resource" | "guide";
export type CampusPointCategory =
  | "academic"
  | "administrative"
  | "services"
  | "health"
  | "recreation";

export interface OnboardingNextStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  estimatedMinutes: number;
  href: string;
}

export interface StudentDashboardSummary {
  userId: string;
  name: string;
  role: string;
  institutionId: string;
  progressPercent: number;
  completedSteps: number;
  totalSteps: number;
  nextStep?: OnboardingNextStep;
}

export interface QuickAction {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  highlight?: boolean;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: EventCategory;
  eventType: string;
  status: EventStatus;
  href?: string;
}

export interface PendingTask {
  id: string;
  title: string;
  category: string;
  status: TaskStatus;
  priority: TaskPriority;
  href?: string;
}

export interface CampusPoint {
  id: string;
  name: string;
  description: string;
  category: CampusPointCategory;
  building?: string;
  floor?: string;
  hours?: string;
  icon?: LucideIcon;
}

export interface HighlightContent {
  id: string;
  title: string;
  category: ContentCategory;
  description: string;
  href?: string;
}

export interface SupportSummary {
  openRequests: number;
  resolvedRequests: number;
}
