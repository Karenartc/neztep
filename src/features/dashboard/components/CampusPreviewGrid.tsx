import Link from "next/link";
import { BookOpen, Building2, FileText, Heart, Map, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CampusPoint, CampusPointCategory } from "../types";

const CATEGORY_ICONS: Record<CampusPointCategory, LucideIcon> = {
  academic: BookOpen,
  administrative: Building2,
  services: FileText,
  health: Heart,
  recreation: Monitor,
};

interface CampusPreviewGridProps {
  points: CampusPoint[];
  mapHref?: string;
}

export function CampusPreviewGrid({
  points,
  mapHref = "/campus",
}: CampusPreviewGridProps) {
  return (
    <section aria-labelledby="campus-heading">
      <h2
        className="mb-3 text-base font-semibold text-text-primary"
        id="campus-heading"
      >
        Navega tu sede
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {points.map((point) => {
          const Icon = point.icon ?? CATEGORY_ICONS[point.category];
          return (
            <Link key={point.id} href="/campus">
              <Card className="group h-full transition-shadow hover:shadow-soft">
                <CardContent className="relative p-4">
                  {point.building && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                      {point.building}
                    </span>
                  )}
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-accent">
                    <Icon aria-hidden="true" className="h-4 w-4 text-primary" />
                  </div>
                  <p className="pr-6 text-sm font-medium text-text-primary">
                    {point.name}
                  </p>
                  <p className="mt-0.5 text-xs text-text-secondary">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}

        <Link href={mapHref}>
          <Card className="group h-full transition-shadow hover:shadow-soft">
            <CardContent className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Map aria-hidden="true" className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-text-primary">Ver mapa completo</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  );
}
