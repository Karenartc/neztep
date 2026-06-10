import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export interface KpiCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
  trend: string;
}

export function KpiCard({ icon, title, value, description, trend }: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEE8FF] text-[#6D4AFF]">
        {icon}
      </div>
      <p className="text-sm text-[#64748B]">{title}</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-[#0F172A]">
        {value}
      </p>
      <p className="mt-1 text-xs text-[#64748B]">{description}</p>
      <p className="mt-4 flex items-center gap-1 text-xs font-medium text-[#16A34A]">
        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        {trend}
      </p>
    </div>
  );
}
