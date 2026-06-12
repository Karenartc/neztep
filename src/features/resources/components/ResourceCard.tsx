import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ResourceItem } from "../types";

interface ResourceCardProps {
  item: ResourceItem;
}

export function ResourceCard({ item }: ResourceCardProps) {
  return (
    <Link
      href={item.href}
      className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/30 hover:shadow-soft"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent transition-colors group-hover:bg-primary/10">
        <item.Icon aria-hidden="true" className="h-5 w-5 text-primary" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-text-primary">{item.title}</p>
        <p className="mt-0.5 text-xs text-text-secondary leading-relaxed">
          {item.description}
        </p>
      </div>

      <ArrowRight
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 self-start text-text-secondary opacity-0 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
}
