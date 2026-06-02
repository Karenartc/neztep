import * as React from "react";
import { cn } from "@/lib/utils";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Displays a muted loading placeholder for content that is not ready yet.
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}
