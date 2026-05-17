import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value: number;
  label: string;
  className?: string;
}

/**
 * Displays progress with text and ARIA metadata, not color alone.
 */
export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-text-primary">{label}</span>
        <span className="text-text-secondary">{normalizedValue}%</span>
      </div>
      <div
        aria-label={label}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={normalizedValue}
        className="h-2.5 overflow-hidden rounded-full bg-accent"
        role="progressbar"
      >
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${normalizedValue}%` }}
        />
      </div>
    </div>
  );
}
