"use client";

import { useEffect, useState } from "react";
import { Bell, HelpCircle, Search } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  FILTER_CHIPS,
  MOCK_POINTS_OF_INTEREST,
  POINT_FILTER_CATEGORIES,
} from "../data/campus-mock";
import { useCampus } from "../hooks/use-campus";
import type { ActiveFilter } from "../types";
import { BuildingDetail } from "./BuildingDetail";
import { BuildingsList } from "./BuildingsList";
import { CampusMapPlaceholder } from "./CampusMapPlaceholder";

const ALL_FILTER = { id: "fc-all", label: "Todos", value: "all" as ActiveFilter };

const FILTER_OPTIONS = [
  ALL_FILTER,
  ...FILTER_CHIPS.map((c) => ({ id: c.id, label: c.label, value: c.category as ActiveFilter })),
];

export function CampusClientPage() {
  const { points, selectedPointId, selectPoint, selectedDetail } = useCampus();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");

  const afterSearch =
    search.trim() === ""
      ? points
      : points.filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase()),
        );

  const visiblePoints =
    activeFilter === "all"
      ? afterSearch
      : afterSearch.filter(
          (p) =>
            POINT_FILTER_CATEGORIES[p.pointId]?.includes(activeFilter) ?? false,
        );

  const visiblePointIds = new Set(visiblePoints.map((p) => p.pointId));

  // When filter or search changes, auto-select the first visible point
  // if the current selection is no longer visible.
  useEffect(() => {
    if (visiblePoints.length > 0 && !visiblePointIds.has(selectedPointId)) {
      selectPoint(visiblePoints[0].pointId);
    }
    // intentionally watching only the triggering values
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, search]);

  return (
    <main className="flex flex-col gap-6">
      {/* Header */}
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            Campus
          </h1>
          <p className="mt-1 text-sm text-text-secondary md:text-base">
            Encuentra oficinas, servicios y espacios importantes de tu institución.
          </p>
        </div>
        <div className="hidden shrink-0 items-center gap-1 md:flex">
          <Button size="icon" variant="ghost" aria-label="Notificaciones">
            <Bell aria-hidden="true" className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" aria-label="Ayuda">
            <HelpCircle aria-hidden="true" className="h-4 w-4" />
          </Button>
          <Avatar name="Estudiante Sede" className="ml-1" />
        </div>
      </header>

      {/* Search */}
      <div className="relative">
        <Search
          aria-hidden="true"
          className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
        />
        <Input
          type="search"
          placeholder="Buscar biblioteca, bienestar, impresión, laboratorios..."
          className="min-h-12 rounded-xl pl-10 text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar en el campus"
        />
      </div>

      {/* Category filter chips */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-text-secondary">
          Explorar por categoría
        </p>
        <div
          role="group"
          aria-label="Filtrar por categoría"
          className="flex gap-2 overflow-x-auto pb-1"
        >
          {FILTER_OPTIONS.map(({ id, label, value }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveFilter(value)}
              aria-pressed={activeFilter === value}
              className={cn(
                "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                activeFilter === value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-text-secondary hover:bg-accent hover:text-primary",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Three-column layout */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr_260px]">
        {/* Left: Buildings list */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <BuildingsList
            points={visiblePoints.length > 0 ? visiblePoints : MOCK_POINTS_OF_INTEREST}
            selectedPointId={selectedPointId}
            onSelectPoint={selectPoint}
          />
        </div>

        {/* Center: Map */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <h2 className="mb-3 text-sm font-semibold text-text-primary">
            Mapa referencial
          </h2>
          <CampusMapPlaceholder
            points={MOCK_POINTS_OF_INTEREST}
            selectedPointId={selectedPointId}
            onSelectPoint={selectPoint}
            visiblePointIds={visiblePointIds}
          />
        </div>

        {/* Right: Detail */}
        <div className="rounded-xl border border-border bg-surface p-4">
          {selectedDetail ? (
            <BuildingDetail detail={selectedDetail} />
          ) : (
            <p className="text-sm text-text-secondary">
              Selecciona un espacio para ver el detalle.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
