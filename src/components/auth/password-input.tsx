import * as React from "react";
import { EyeOff, LockKeyhole } from "lucide-react";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface PasswordInputProps extends InputProps {
  wrapperClassName?: string;
}

/**
 * Renders a password field with a quiet visual affordance and no auth logic.
 */
export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, wrapperClassName, ...props }, ref) => (
    <div className={cn("relative", wrapperClassName)}>
      <LockKeyhole
        aria-hidden="true"
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input className={cn("px-9", className)} ref={ref} type="password" {...props} />
      <EyeOff
        aria-hidden="true"
        className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  ),
);

PasswordInput.displayName = "PasswordInput";
