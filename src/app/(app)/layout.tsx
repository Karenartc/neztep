import type { Metadata } from "next";
import { AppNav } from "@/components/layout/app-nav";

export const metadata: Metadata = {
  title: { template: "%s | Neztep", default: "Neztep" },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen gap-4 bg-background p-4">
      <div className="hidden w-56 shrink-0 md:block">
        <AppNav />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
