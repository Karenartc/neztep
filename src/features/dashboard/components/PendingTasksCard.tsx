import Link from "next/link";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { BadgeTone } from "@/types/design-system";
import type { PendingTask, TaskPriority, TaskStatus } from "../types";

interface PendingTasksCardProps {
  tasks: PendingTask[];
}

function TaskStatusIcon({ status }: { status: TaskStatus }) {
  if (status === "completed")
    return <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-success" />;
  if (status === "in_progress")
    return <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-warning" />;
  return <Circle aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground" />;
}

const STATUS_LABELS: Record<TaskStatus, string> = {
  pending: "Pendiente",
  in_progress: "En progreso",
  completed: "Completado",
};

const STATUS_TONES: Record<TaskStatus, BadgeTone> = {
  pending: "neutral",
  in_progress: "warning",
  completed: "success",
};

const PRIORITY_BORDER: Record<TaskPriority, string> = {
  high: "border-l-2 border-l-error",
  medium: "border-l-2 border-l-warning",
  low: "",
};

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
        <ul className="space-y-1.5" role="list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={cn("overflow-hidden rounded-md", PRIORITY_BORDER[task.priority])}
            >
              <Link
                className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-muted"
                href={task.href ?? "#"}
              >
                <TaskStatusIcon status={task.status} />
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      task.status === "completed"
                        ? "text-muted-foreground line-through"
                        : "text-text-primary",
                    )}
                  >
                    {task.title}
                  </p>
                  <p className="text-xs text-text-secondary">{task.category}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  {task.priority === "high" && task.status !== "completed" && (
                    <Badge tone="error">Urgente</Badge>
                  )}
                  <Badge tone={STATUS_TONES[task.status]}>
                    {STATUS_LABELS[task.status]}
                  </Badge>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
