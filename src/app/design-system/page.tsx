import { ActionsAndForms } from "@/components/design-system/actions-and-forms";
import { BaseComponentsShowcase } from "@/components/design-system/base-components-showcase";
import { DashboardPatterns } from "@/components/design-system/dashboard-patterns";
import { FoundationPanel } from "@/components/design-system/foundation-panel";
import { ShowcaseSection } from "@/components/design-system/showcase-section";
import { ThemePreview } from "@/components/design-system/theme-preview";
import { TypographyAndSpacing } from "@/components/design-system/typography-and-spacing";
import { Alert } from "@/components/ui/alert";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { adminNavigation, studentNavigation } from "@/lib/mock/design-system";

/**
 * Displays the PR-ready Neztep design-system inventory and theme foundation.
 */
export default function DesignSystemPage() {
  return (
    <main className="min-h-screen px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-[1520px] gap-6 xl:grid-cols-[320px_1fr]">
        <aside className="space-y-6">
          <FoundationPanel />
          <Sidebar items={studentNavigation} />
          <Sidebar activeHref="/admin" items={adminNavigation} />
        </aside>
        <div className="space-y-6">
          <Navbar
            subtitle="PR-ready visual foundation and reusable components."
            title="Design System"
          />
          <ShowcaseSection
            description="Local light and dark preview with tenant-ready variables."
            title="Theme Foundation"
          >
            <ThemePreview />
          </ShowcaseSection>
          <ShowcaseSection
            description="CSS variables, type, and spacing define the Neztep baseline."
            title="Tokens"
          >
            <TypographyAndSpacing />
          </ShowcaseSection>
          <ShowcaseSection
            description="Core form controls and status elements."
            title="Controls"
          >
            <ActionsAndForms />
          </ShowcaseSection>
          <ShowcaseSection
            description="Cards, navigation, progress, tabs, and empty states."
            title="Dashboard Patterns"
          >
            <DashboardPatterns />
          </ShowcaseSection>
          <ShowcaseSection
            description="Modal, dropdown, skeleton, avatar, alerts, separators, and table."
            title="Base Components"
          >
            <BaseComponentsShowcase />
          </ShowcaseSection>
          <Alert title="Future tenant theming" tone="success">
            Neztep uses CSS variables for the default theme. Institution palettes will
            connect later through tenant configuration, not this branch.
          </Alert>
        </div>
      </div>
    </main>
  );
}
