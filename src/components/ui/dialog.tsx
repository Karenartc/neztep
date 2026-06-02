"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

/**
 * Renders the modal overlay for Neztep dialogs.
 */
export function DialogOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-text-primary/45", className)}
      {...props}
    />
  );
}

/**
 * Renders accessible modal content with focus management from Radix Dialog.
 */
export function DialogContent({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-surface p-6 text-text-primary shadow-soft",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-md p-1 text-text-secondary hover:bg-muted hover:text-text-primary">
          <X aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only">Close dialog</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

/**
 * Groups dialog heading and supporting copy.
 */
export function DialogHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", props.className)} {...props} />;
}

/**
 * Renders the dialog title.
 */
export function DialogTitle(props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("text-lg font-semibold text-text-primary", props.className)}
      {...props}
    />
  );
}

/**
 * Renders the dialog description.
 */
export function DialogDescription(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>,
) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm leading-6 text-text-secondary", props.className)}
      {...props}
    />
  );
}
