import type { Metadata } from "next";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { ProgressSummaryCard } from "@/features/dashboard/components/ProgressSummaryCard";
import { UpcomingEventsCard } from "@/features/dashboard/components/UpcomingEventsCard";
import { QuickActionsGrid } from "@/features/dashboard/components/QuickActionsGrid";
import { CampusPreviewGrid } from "@/features/dashboard/components/CampusPreviewGrid";
import { RecommendedSection } from "@/features/dashboard/components/RecommendedSection";
import {
  mockCampusPoints,
  mockQuickActions,
  mockRecommendedItems,
  mockStudent,
  mockUpcomingEvents,
} from "@/features/dashboard/data/dashboard-mock";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <main className="flex flex-col gap-4">
      <DashboardHeader />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProgressSummaryCard student={mockStudent} />
        </div>
        <UpcomingEventsCard events={mockUpcomingEvents.slice(0, 2)} />
      </div>

      <QuickActionsGrid actions={mockQuickActions} />

      <CampusPreviewGrid points={mockCampusPoints} />

      <RecommendedSection items={mockRecommendedItems} />
    </main>
  );
}
