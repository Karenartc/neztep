import type { Metadata } from "next";
import { AdminSidebar } from "@/features/admin/components/AdminSidebar";

export const metadata: Metadata = {
  title: { template: "%s | Neztep Admin", default: "Neztep Admin" },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
