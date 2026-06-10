import { BookOpen, CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ActivityEntry, ActivityType } from "../types";

export interface TabActividadRecienteProps {
  activity: ActivityEntry[];
}

const ACTIVITY_ICON: Record<ActivityType, React.ReactNode> = {
  onboarding_step: (
    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-success" />
  ),
  content_viewed: (
    <BookOpen aria-hidden="true" className="h-4 w-4 text-info" />
  ),
  campus_visited: (
    <MapPin aria-hidden="true" className="h-4 w-4 text-primary" />
  ),
  query_derived: (
    <MessageCircle aria-hidden="true" className="h-4 w-4 text-warning" />
  ),
};

export function TabActividadReciente({ activity }: TabActividadRecienteProps) {
  if (activity.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-sm text-text-secondary">
          No hay actividad reciente registrada.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <ol className="relative space-y-0" aria-label="Actividad reciente">
          {activity.map((entry, idx) => {
            const date = new Date(entry.createdAt).toLocaleDateString("es-CL", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            const isLast = idx === activity.length - 1;

            return (
              <li key={entry.id} className="flex gap-4">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface shadow-card">
                    {ACTIVITY_ICON[entry.type]}
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-border" aria-hidden="true" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-6 ${isLast ? "pb-0" : ""}`}>
                  <p className="text-sm font-medium text-text-primary">
                    {entry.description}
                    {entry.detail && (
                      <span className="font-semibold"> &ldquo;{entry.detail}&rdquo;</span>
                    )}
                  </p>
                  <p className="mt-0.5 text-xs text-text-secondary">{date}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
