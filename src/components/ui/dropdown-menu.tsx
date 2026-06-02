"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * Renders an accessible dropdown menu surface.
 */
export function DropdownMenuContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align="end"
        className={cn(
          "z-50 min-w-48 rounded-lg border border-border bg-surface p-1 text-sm text-text-primary shadow-soft",
          className,
        )}
        sideOffset={8}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

/**
 * Renders a selectable dropdown menu item.
 */
export function DropdownMenuItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "flex min-h-10 cursor-default select-none items-center rounded-md px-3 text-text-secondary outline-none hover:bg-muted hover:text-text-primary focus:bg-muted focus:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a visual divider inside dropdown menus.
 */
export function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("my-1 h-px bg-border", className)}
      {...props}
    />
  );
}
