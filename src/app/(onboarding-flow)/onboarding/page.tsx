"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useOnboardingFlow } from "@/features/onboarding/hooks/use-onboarding-flow";
import { OnboardingNav } from "@/features/onboarding/components/OnboardingNav";
import { OnboardingWelcome } from "@/features/onboarding/components/OnboardingWelcome";
import { OnboardingModuleIntro } from "@/features/onboarding/components/OnboardingModuleIntro";
import { OnboardingExploration } from "@/features/onboarding/components/OnboardingExploration";
import { OnboardingCompletion } from "@/features/onboarding/components/OnboardingCompletion";
import { NextModuleUnlocked } from "@/features/onboarding/components/NextModuleUnlocked";
import { OnboardingProgressSummary } from "@/features/onboarding/components/OnboardingProgressSummary";

export default function OnboardingPage() {
  const {
    state,
    currentModule,
    nextModule,
    completedCount,
    totalModules,
    exploredCount,
    startJourney,
    startModule,
    markSeen,
    completeModule,
    continueToNext,
    startNextModule,
    goBackToIntro,
  } = useOnboardingFlow();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { view, modules } = state;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop: onboarding-specific sidebar */}
      <OnboardingNav
        modules={modules}
        completedCount={completedCount}
        currentModuleIndex={state.currentModuleIndex}
      />

      {/* Mobile: slide-in nav overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
          <div className="relative">
            <OnboardingNav
              modules={modules}
              completedCount={completedCount}
              currentModuleIndex={state.currentModuleIndex}
              mobile
              onClose={() => setMobileNavOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Mobile: minimal top bar */}
      <header
        aria-label="Barra de onboarding"
        className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-surface px-4 md:hidden"
      >
        <button
          onClick={() => setMobileNavOpen(true)}
          aria-label="Ver progreso del recorrido"
          className="flex h-10 w-10 items-center justify-center rounded-md text-text-secondary hover:bg-muted"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
        <Image
          src="/logopurple.png"
          alt="Neztep"
          width={100}
          height={28}
          className="h-7 w-auto object-contain"
        />
        {view !== "welcome" && currentModule ? (
          <span className="flex h-10 w-10 items-center justify-center text-xs font-medium text-text-secondary">
            {currentModule.order}/{totalModules}
          </span>
        ) : (
          <span className="w-10" />
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="mx-auto max-w-2xl px-4 py-6 pt-20 sm:px-6 sm:py-8 md:pt-10">
          {view === "welcome" && (
            <OnboardingWelcome onStart={startJourney} />
          )}

          {view === "intro" && currentModule && (
            <OnboardingModuleIntro
              module={currentModule}
              totalModules={totalModules}
              onStart={startModule}
            />
          )}

          {view === "exploration" && currentModule && (
            <OnboardingExploration
              module={currentModule}
              totalModules={totalModules}
              exploredCount={exploredCount}
              onSeen={markSeen}
              onComplete={completeModule}
              onBack={goBackToIntro}
            />
          )}

          {view === "completion" && currentModule && (
            <OnboardingCompletion
              moduleName={currentModule.title}
              closingMessage={currentModule.closingMessage}
              completedCount={completedCount}
              totalModules={totalModules}
              onContinue={continueToNext}
            />
          )}

          {view === "next-module" && nextModule && (
            <NextModuleUnlocked
              module={nextModule}
              totalModules={totalModules}
              onStart={startNextModule}
            />
          )}

          {view === "summary" && (
            <OnboardingProgressSummary
              completedCount={completedCount}
              totalModules={totalModules}
            />
          )}
        </div>
      </main>
    </div>
  );
}
