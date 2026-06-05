import Link from "next/link";
import { CheckCircle2, ChevronRight, Circle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PendingTask, TaskStatus } from "../types";

interface PendingTasksCardProps {
  tasks: PendingTask[];
}

const STATUS_ICON_STYLES: Record<TaskStatus, { bg: string; color: string }> = {
  pending: { bg: "bg-muted", color: "text-text-secondary" },
  in_progress: { bg: "bg-warning-muted", color: "text-warning" },
  completed: { bg: "bg-success-muted", color: "text-success" },
};

function TaskIcon({ status }: { status: TaskStatus }) {
  const { bg, color } = STATUS_ICON_STYLES[status];
  const Icon =
    status === "completed" ? CheckCircle2 : status === "in_progress" ? Clock : Circle;
  return (
    <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-md", bg)}>
      <Icon aria-hidden="true" className={cn("h-4 w-4", color)} />
    </div>
  );
}

export function PendingTasksCard({ tasks }: PendingTasksCardProps) {
  const pendingCount = tasks.filter((t) => t.status !== "completed").length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Pendientes prioritarios</CardTitle>
          {pendingCount > 0 && (
            <Badge tone="warning">{pendingCount} pendientes</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1" role="list">
          {tasks.map((task) => (
            <li key={task.id}>
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-muted"
                href={task.href ?? "#"}
              >
                <TaskIcon status={task.status} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p
                      className={cn(
                        "truncate text-sm font-medium",
                        task.status === "completed"
                          ? "text-text-secondary line-through"
                          : "text-text-primary",
                      )}
                    >
                      {task.title}
                    </p>
                    {task.priority === "high" && task.status !== "completed" && (
                      <Badge tone="error">Urgente</Badge>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary">{task.category}</p>
                </div>
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-text-secondary"
                />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
