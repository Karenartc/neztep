import type { Metadata } from "next";
import { AdminNav } from "@/components/layout/admin-nav";

export const metadata: Metadata = {
  title: { template: "%s | Admin Neztep", default: "Admin Neztep" },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen gap-4 bg-background p-4">
      <div className="hidden w-56 shrink-0 md:block">
        <AdminNav />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
