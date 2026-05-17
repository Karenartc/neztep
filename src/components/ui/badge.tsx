import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex min-h-7 items-center rounded-full px-2.5 text-xs font-medium",
  {
    variants: {
      tone: {
        neutral: "bg-muted text-text-secondary",
        primary: "bg-accent text-primary",
        success: "bg-success-muted text-success",
        warning: "bg-warning-muted text-warning",
        error: "bg-error-muted text-error",
        info: "bg-info-muted text-info",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Renders a non-color-only status label for compact institutional metadata.
 */
export function Badge({ className, tone, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone }), className)} {...props} />
  );
}
