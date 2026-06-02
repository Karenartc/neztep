import * as React from "react";
import { cn } from "@/lib/utils";

type CardDensity = "default" | "compact";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: CardDensity;
}

function getHeaderSpacing(density: CardDensity): string {
  return density === "compact" ? "space-y-2 p-4 pb-3" : "space-y-2 p-6 pb-4";
}

function getContentSpacing(density: CardDensity): string {
  return density === "compact" ? "px-4 pb-4" : "px-6 pb-6";
}

function getFooterSpacing(density: CardDensity): string {
  return density === "compact" ? "px-4 py-3" : "px-6 py-4";
}

/**
 * Provides the primary white surface container for Neztep dashboards.
 */
export function Card({ className, elevated = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface text-text-primary",
        elevated && "shadow-card",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Groups card titles and descriptions with consistent spacing.
 */
export function CardHeader({
  className,
  density = "default",
  ...props
}: CardSectionProps) {
  return <div className={cn(getHeaderSpacing(density), className)} {...props} />;
}

/**
 * Renders the primary title inside a card.
 */
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-base font-semibold text-text-primary", props.className)}
      {...props}
    />
  );
}

/**
 * Renders secondary card copy with accessible contrast.
 */
export function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm leading-6 text-text-secondary", props.className)}
      {...props}
    />
  );
}

/**
 * Wraps the main content area of a card.
 */
export function CardContent({
  className,
  density = "default",
  ...props
}: CardSectionProps) {
  return <div className={cn(getContentSpacing(density), className)} {...props} />;
}

/**
 * Provides a consistent footer area for card actions.
 */
export function CardFooter({
  className,
  density = "default",
  ...props
}: CardSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 border-t border-border",
        getFooterSpacing(density),
        className,
      )}
      {...props}
    />
  );
}
