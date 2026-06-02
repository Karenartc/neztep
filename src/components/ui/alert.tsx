import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const alertVariants = cva(
  "rounded-lg border p-4 text-sm leading-6 shadow-sm",
  {
    variants: {
      tone: {
        info: "border-info/30 bg-info-muted text-text-primary",
        success: "border-success/30 bg-success-muted text-text-primary",
        warning: "border-warning/30 bg-warning-muted text-text-primary",
        error: "border-error/30 bg-error-muted text-text-primary",
      },
    },
    defaultVariants: {
      tone: "info",
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
}

/**
 * Shows a status message with text and color-coded institutional feedback.
 */
export function Alert({ children, className, title, tone, ...props }: AlertProps) {
  return (
    <div className={cn(alertVariants({ tone }), className)} role="status" {...props}>
      <p className="font-semibold text-text-primary">{title}</p>
      {children && <div className="mt-1 text-text-secondary">{children}</div>}
    </div>
  );
}
