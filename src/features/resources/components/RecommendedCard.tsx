import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ResourceItem } from "../types";

const BADGE_CONFIG = {
  recommended: { tone: "success" as const, label: "Recomendado" },
  new: { tone: "primary" as const, label: "Nuevo" },
  important: { tone: "warning" as const, label: "Importante" },
};

interface RecommendedCardProps {
  item: ResourceItem;
}

export function RecommendedCard({ item }: RecommendedCardProps) {
  const badge = item.badge ? BADGE_CONFIG[item.badge] : null;

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5",
        "transition-all hover:border-primary/30 hover:shadow-soft",
      )}
    >
      {badge ? (
        <Badge tone={badge.tone}>{badge.label}</Badge>
      ) : (
        <span className="h-7" aria-hidden="true" />
      )}

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
        <item.Icon aria-hidden="true" className="h-7 w-7 text-primary" />
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-text-primary">{item.title}</p>
        <p className="mt-1 text-xs text-text-secondary leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 self-end text-text-secondary opacity-0 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
}
