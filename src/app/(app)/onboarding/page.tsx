import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Onboarding" };

export default function OnboardingPage() {
  return (
    <>
      <Navbar
        title="Onboarding"
        subtitle="Completa tu proceso de incorporación universitaria"
      />
      <EmptyState
        icon={GraduationCap}
        title="Proceso de onboarding"
        description="Sigue los pasos para completar tu incorporación a la institución."
        actionLabel="Comenzar"
      />
    </>
  );
}
