import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { RecommendedItem } from "../types";

interface RecommendedSectionProps {
  items: RecommendedItem[];
}

export function RecommendedSection({ items }: RecommendedSectionProps) {
  return (
    <section aria-labelledby="recommended-heading">
      <h2
        className="mb-3 text-base font-semibold text-text-primary"
        id="recommended-heading"
      >
        Recomendado para ti
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="h-full">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                <p className="mt-1 text-xs text-text-secondary">{item.description}</p>
                <Link
                  className="mt-3 block text-sm font-medium text-primary hover:underline"
                  href={item.href}
                >
                  {item.ctaLabel}
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
