import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-55",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-card hover:bg-primary-hover",
        secondary: "border border-border bg-surface text-primary hover:bg-accent",
        ghost: "text-text-secondary hover:bg-accent hover:text-primary",
        destructive: "bg-error text-white hover:bg-error-hover",
      },
      size: {
        sm: "min-h-10 px-3",
        md: "min-h-11 px-4",
        lg: "min-h-12 px-5 text-base",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Renders an accessible Neztep action button with institutional variants.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
