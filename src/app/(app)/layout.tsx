import type { Metadata } from "next";
import { AppNav } from "@/components/layout/app-nav";

export const metadata: Metadata = {
  title: { template: "%s | Neztep", default: "Neztep" },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <AppNav />
      <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 pt-14 md:pt-4">
        {children}
      </div>
    </div>
  );
}
