import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/**
 * Renders a compact user avatar with image and accessible fallback initials.
 */
export function Avatar({ className, name, src, ...props }: AvatarProps) {
  return (
    <div
      aria-label={name}
      className={cn(
        "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-accent text-sm font-semibold text-primary",
        className,
      )}
      role="img"
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt="" className="h-full w-full object-cover" src={src} />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
}
