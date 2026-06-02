import * as React from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface PasswordInputProps extends InputProps {
  wrapperClassName?: string;
}

/**
 * Renders a password field with a quiet visual affordance and no auth logic.
 */
export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, wrapperClassName, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
      <div className={cn("relative", wrapperClassName)}>
        <LockKeyhole
          aria-hidden="true"
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          className={cn("pr-9 pl-9", className)}
          ref={ref}
          type={isVisible ? "text" : "password"}
          {...props}
        />
        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-muted-foreground transition hover:text-foreground"
        >
          {isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
