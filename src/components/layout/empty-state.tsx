import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
}

/**
 * Presents a designed empty state with optional recovery action.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
}: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center pt-6 text-center md:px-8 md:pb-8 md:pt-8">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">
          {description}
        </p>
        {actionLabel && <Button className="mt-5">{actionLabel}</Button>}
      </CardContent>
    </Card>
  );
}
