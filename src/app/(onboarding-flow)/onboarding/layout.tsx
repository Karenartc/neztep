import type { Metadata } from "next";

export const metadata: Metadata = { title: "Onboarding" };

export default function OnboardingFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
