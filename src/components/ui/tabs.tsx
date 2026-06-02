"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  value: string;
  label: string;
  content: string;
}

export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
}

/**
 * Renders a keyboard-friendly tab group for compact dashboard sections.
 */
export function Tabs({ items, defaultValue, className }: TabsProps) {
  const baseId = useId();
  const [activeValue, setActiveValue] = useState(defaultValue ?? items[0]?.value);
  const activeItem = items.find((item) => item.value === activeValue) ?? items[0];

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Design system tabs">
        {items.map((item) => (
          <button
            aria-controls={`${baseId}-${item.value}-panel`}
            aria-selected={item.value === activeItem.value}
            className={cn(
              "min-h-11 rounded-md px-4 text-sm font-medium transition-colors",
              "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring",
              item.value === activeItem.value
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-text-secondary hover:bg-accent hover:text-primary",
            )}
            id={`${baseId}-${item.value}-tab`}
            key={item.value}
            onClick={() => setActiveValue(item.value)}
            role="tab"
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        aria-labelledby={`${baseId}-${activeItem.value}-tab`}
        className="rounded-lg border border-border bg-surface p-4 text-sm text-text-secondary shadow-card"
        id={`${baseId}-${activeItem.value}-panel`}
        role="tabpanel"
      >
        {activeItem.content}
      </div>
    </div>
  );
}
