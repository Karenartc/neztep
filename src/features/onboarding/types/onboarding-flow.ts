export type ModuleStatus = "locked" | "available" | "completed";
export type FlowView = "welcome" | "intro" | "exploration" | "completion" | "next-module" | "summary";
export type ItemType = "document" | "video" | "info" | "map";

export interface ExplorationItem {
  id: string;
  title: string;
  description: string;
  type: ItemType;
  seen: boolean;
}

export interface OnboardingModule {
  id: string;
  order: number;
  title: string;
  description: string;
  closingMessage: string;
  duration: string;
  preview: string[];
  items: ExplorationItem[];
  status: ModuleStatus;
}

export interface OnboardingFlowState {
  modules: OnboardingModule[];
  currentModuleIndex: number;
  view: FlowView;
}
