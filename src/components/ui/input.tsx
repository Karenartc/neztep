import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

/**
 * Renders a typed text input with accessible focus, disabled, and error states.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, ...props }, ref) => (
    <input
      aria-invalid={error || undefined}
      className={cn(
        "min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-text-primary shadow-sm transition-colors placeholder:text-muted-foreground",
        "focus-visible:border-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring",
        "disabled:cursor-not-allowed disabled:bg-muted disabled:text-text-secondary",
        error && "border-error bg-error-muted",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Input.displayName = "Input";
