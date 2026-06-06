import type { Metadata } from "next";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { ProgressSummaryCard } from "@/features/dashboard/components/ProgressSummaryCard";
import { UpcomingEventsCard } from "@/features/dashboard/components/UpcomingEventsCard";
import { PendingTasksCard } from "@/features/dashboard/components/PendingTasksCard";
import { NezBotHelpCard } from "@/features/dashboard/components/NezBotHelpCard";
import { CampusPreviewGrid } from "@/features/dashboard/components/CampusPreviewGrid";
import { RecommendedSection } from "@/features/dashboard/components/RecommendedSection";
import {
  mockCampusPoints,
  mockPendingTasks,
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
        <UpcomingEventsCard events={mockUpcomingEvents} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PendingTasksCard tasks={mockPendingTasks} />
        </div>
        <NezBotHelpCard />
      </div>

      <CampusPreviewGrid points={mockCampusPoints} />

      <RecommendedSection items={mockRecommendedItems} />
    </main>
  );
}
