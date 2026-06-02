import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  error?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

/**
 * Renders a token-aligned native select for accessible form pickers.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error = false, options, placeholder, ...props }, ref) => (
    <div className="relative">
      <select
        aria-invalid={error || undefined}
        className={cn(
          "min-h-11 w-full appearance-none rounded-md border border-border bg-surface px-3 pe-10 text-sm text-text-primary shadow-sm transition-colors",
          "focus-visible:border-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:cursor-not-allowed disabled:bg-muted disabled:text-text-secondary",
          error && "border-error bg-error-muted",
          className,
        )}
        ref={ref}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  ),
);

Select.displayName = "Select";
