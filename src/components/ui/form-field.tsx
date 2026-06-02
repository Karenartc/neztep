import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
  helperText?: string;
  error?: string;
}

/**
 * Wraps form controls with visible labels, helper copy, and error messaging.
 */
export function FormField({
  id,
  label,
  children,
  className,
  helperText,
  error,
}: FormFieldProps) {
  const descriptionId = error ? `${id}-error` : `${id}-helper`;

  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium text-text-primary" htmlFor={id}>
        {label}
      </label>
      {children}
      {(helperText || error) && (
        <p
          className={cn("text-sm", error ? "text-error" : "text-text-secondary")}
          id={descriptionId}
          role={error ? "alert" : undefined}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
}
