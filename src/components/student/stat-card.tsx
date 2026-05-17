import type { LucideIcon } from "lucide-react";
import type { BadgeTone } from "@/types/design-system";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  tone: BadgeTone;
  icon: LucideIcon;
}

/**
 * Displays a compact institutional dashboard metric with icon and trend text.
 */
export function StatCard({ label, value, trend, tone, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <Badge tone={tone}>{trend}</Badge>
        </div>
        <p className="text-sm font-medium text-text-secondary">{label}</p>
        <p className="mt-1 text-3xl font-semibold text-text-primary">{value}</p>
      </CardContent>
    </Card>
  );
}
