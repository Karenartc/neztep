import { cn } from "@/lib/utils";

export interface NeztepLogoProps {
  className?: string;
  markClassName?: string;
}

/**
 * Renders the Neztep wordmark used across authentication screens.
 */
export function NeztepLogo({ className, markClassName }: NeztepLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid h-10 w-10 place-items-center rounded-lg bg-primary text-lg font-bold text-primary-foreground shadow-card",
          markClassName,
        )}
      >
        N
      </span>
      <span>
        <span className="block text-lg font-semibold leading-5 text-text-primary">
          Neztep
        </span>
        <span className="block text-xs text-text-secondary">
          Digital Student Integration OS
        </span>
      </span>
    </div>
  );
}
