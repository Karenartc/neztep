import type { ReactNode } from "react";

export interface ShowcaseSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

/**
 * Provides consistent section rhythm for the internal design-system page.
 */
export function ShowcaseSection({
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-text-secondary">{description}</p>
      </div>
      {children}
    </section>
  );
}
