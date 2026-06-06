import {
  Building2,
  Calendar,
  ChevronRight,
  FileText,
  GraduationCap,
  UserPlus,
} from "lucide-react";
import type { ActivityItem, ActivityType } from "../data/admin-mock";
import { mockActivity } from "../data/admin-mock";

const ICON_MAP: Record<ActivityType, React.ReactNode> = {
  career: <GraduationCap className="h-4 w-4" aria-hidden="true" />,
  faculty: <Building2 className="h-4 w-4" aria-hidden="true" />,
  student: <UserPlus className="h-4 w-4" aria-hidden="true" />,
  resource: <FileText className="h-4 w-4" aria-hidden="true" />,
  event: <Calendar className="h-4 w-4" aria-hidden="true" />,
};

function ActivityRow({ item }: { item: ActivityItem }) {
  return (
    <li className="flex items-start gap-3 py-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEE8FF] text-[#6D4AFF]">
        {ICON_MAP[item.type]}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-[#0F172A]">{item.title}</p>
        <p className="text-sm font-medium text-[#6D4AFF]">{item.highlight}</p>
      </div>
      <span className="shrink-0 text-xs text-[#64748B]">{item.time}</span>
    </li>
  );
}

export function RecentActivity() {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <h2 className="mb-1 text-base font-semibold text-[#0F172A]">
        Actividad reciente
      </h2>

      <ul className="divide-y divide-[#F1F5F9]">
        {mockActivity.map((item) => (
          <ActivityRow key={item.id} item={item} />
        ))}
      </ul>

      <div className="mt-3 border-t border-[#F1F5F9] pt-3">
        <button
          className="flex cursor-default items-center gap-1 text-sm font-medium text-[#6D4AFF]"
          type="button"
        >
          Ver toda la actividad
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
