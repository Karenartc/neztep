import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepperStep {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: StepperStep[];
  currentStep: number;
  className?: string;
}

/**
 * Displays registration progress with labels, order, and completed states.
 */
export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <ol
      aria-label="Registration progress"
      className={cn("grid gap-3 sm:grid-cols-4", className)}
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isComplete = stepNumber < currentStep;

        return (
          <li className="relative flex gap-3 sm:block" key={step.id}>
            <div className="flex items-center gap-3 sm:flex-col sm:items-start">
              <span
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
                  isActive && "border-primary bg-primary text-primary-foreground",
                  isComplete && "border-primary bg-accent text-primary",
                  !isActive && !isComplete && "border-border bg-muted text-text-secondary",
                )}
              >
                {isComplete ? <Check aria-hidden="true" className="h-4 w-4" /> : stepNumber}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-text-primary">
                  {step.title}
                </span>
                {step.description && (
                  <span className="block text-xs text-text-secondary">
                    {step.description}
                  </span>
                )}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-4 top-8 h-[calc(100%-1rem)] w-px bg-border sm:left-10 sm:top-4 sm:h-px sm:w-[calc(100%-2.5rem)]",
                  isComplete && "bg-primary",
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
