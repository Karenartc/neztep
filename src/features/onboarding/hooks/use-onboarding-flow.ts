"use client";

import { useCallback, useState } from "react";
import { ONBOARDING_MODULES } from "../data/onboarding-mock";
import type {
  OnboardingFlowState,
  OnboardingModule,
} from "../types/onboarding-flow";

function deepCopyModules(modules: OnboardingModule[]): OnboardingModule[] {
  return modules.map((m) => ({
    ...m,
    items: m.items.map((i) => ({ ...i })),
  }));
}

export function useOnboardingFlow() {
  const [state, setState] = useState<OnboardingFlowState>({
    modules: deepCopyModules(ONBOARDING_MODULES),
    currentModuleIndex: 0,
    view: "welcome",
  });

  const currentModule = state.modules[state.currentModuleIndex];
  const completedCount = state.modules.filter((m) => m.status === "completed").length;
  const totalModules = state.modules.length;
  const exploredCount = currentModule?.items.filter((i) => i.seen).length ?? 0;
  const allExplored = exploredCount === (currentModule?.items.length ?? 0) && exploredCount > 0;

  const startJourney = useCallback(() => {
    setState((prev) => ({ ...prev, view: "intro" }));
  }, []);

  const startModule = useCallback(() => {
    setState((prev) => ({ ...prev, view: "exploration" }));
  }, []);

  const markSeen = useCallback((itemId: string) => {
    setState((prev) => {
      const modules = deepCopyModules(prev.modules);
      const mod = modules[prev.currentModuleIndex];
      const item = mod.items.find((i) => i.id === itemId);
      if (item && !item.seen) item.seen = true;
      return { ...prev, modules };
    });
  }, []);

  const completeModule = useCallback(() => {
    setState((prev) => {
      const modules = deepCopyModules(prev.modules);
      modules[prev.currentModuleIndex].status = "completed";
      const nextIndex = prev.currentModuleIndex + 1;
      if (nextIndex < modules.length) {
        modules[nextIndex].status = "available";
      }
      return { ...prev, modules, view: "completion" };
    });
  }, []);

  const continueToNext = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.currentModuleIndex + 1;
      if (nextIndex >= prev.modules.length) {
        return { ...prev, view: "summary" };
      }
      return { ...prev, view: "next-module" };
    });
  }, []);

  const startNextModule = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.currentModuleIndex + 1;
      if (nextIndex >= prev.modules.length) {
        return { ...prev, view: "summary" };
      }
      return { ...prev, currentModuleIndex: nextIndex, view: "intro" };
    });
  }, []);

  const goBackToIntro = useCallback(() => {
    setState((prev) => ({ ...prev, view: "intro" }));
  }, []);

  const nextModule =
    state.currentModuleIndex + 1 < totalModules
      ? state.modules[state.currentModuleIndex + 1]
      : null;

  return {
    state,
    currentModule,
    nextModule,
    completedCount,
    totalModules,
    exploredCount,
    allExplored,
    startJourney,
    startModule,
    markSeen,
    completeModule,
    continueToNext,
    startNextModule,
    goBackToIntro,
  };
}
