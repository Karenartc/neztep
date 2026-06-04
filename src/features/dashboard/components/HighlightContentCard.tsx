import Link from "next/link";
import { BookOpen, CalendarDays, ChevronRight, FileText, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BadgeTone } from "@/types/design-system";
import type { ContentCategory, HighlightContent } from "../types";

const CATEGORY_ICONS: Record<ContentCategory, LucideIcon> = {
  event: CalendarDays,
  announcement: Megaphone,
  resource: BookOpen,
  guide: FileText,
};

const CATEGORY_LABELS: Record<ContentCategory, string> = {
  event: "Eventos",
  announcement: "Avisos",
  resource: "Recursos",
  guide: "Guías",
};

const CATEGORY_TONES: Record<ContentCategory, BadgeTone> = {
  event: "primary",
  announcement: "info",
  resource: "success",
  guide: "neutral",
};

const CATEGORY_ORDER: ContentCategory[] = ["resource", "guide", "announcement", "event"];

interface HighlightContentCardProps {
  items: HighlightContent[];
}

export function HighlightContentCard({ items }: HighlightContentCardProps) {
  const presentCategories = CATEGORY_ORDER.filter((cat) =>
    items.some((item) => item.category === cat),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información destacada</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {presentCategories.map((category, groupIndex) => {
            const SectionIcon = CATEGORY_ICONS[category];
            const groupItems = items.filter((item) => item.category === category);
            return (
              <div key={category}>
                {groupIndex > 0 && <div className="mb-4 border-t border-border" />}
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <SectionIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {CATEGORY_LABELS[category]}
                </p>
                <ul className="space-y-0.5" role="list">
                  {groupItems.map((item) => {
                    const ItemIcon = CATEGORY_ICONS[item.category];
                    return (
                      <li key={item.id}>
                        <Link
                          className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                          href={item.href ?? "#"}
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent">
                            <ItemIcon aria-hidden="true" className="h-4 w-4 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-medium text-text-primary">
                                {item.title}
                              </p>
                              <Badge tone={CATEGORY_TONES[item.category]}>
                                {CATEGORY_LABELS[item.category].replace(/s$/, "")}
                              </Badge>
                            </div>
                            <p className="mt-0.5 text-xs text-text-secondary">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
