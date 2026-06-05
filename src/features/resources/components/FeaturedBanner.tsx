import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { QuickLink } from "../types";

interface FeaturedBannerProps {
  quickLinks: QuickLink[];
}

export function FeaturedBanner({ quickLinks }: FeaturedBannerProps) {
  return (
    <section className="rounded-2xl border border-primary/10 bg-accent/30 p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warning-muted">
          <Star aria-hidden="true" className="h-5 w-5 text-warning" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-text-primary">
            Información importante para comenzar
          </h2>
          <p className="mt-0.5 text-sm text-text-secondary">
            Recursos esenciales que todo estudiante nuevo debería conocer.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {quickLinks.map(({ id, title, description, Icon, href }) => (
          <Link
            key={id}
            href={href}
            className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/30 hover:shadow-soft"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent transition-colors group-hover:bg-primary/10">
              <Icon aria-hidden="true" className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-text-primary">{title}</p>
              <p className="mt-0.5 text-xs text-text-secondary leading-relaxed">
                {description}
              </p>
            </div>
            <ArrowRight
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-text-secondary opacity-0 transition-opacity group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
