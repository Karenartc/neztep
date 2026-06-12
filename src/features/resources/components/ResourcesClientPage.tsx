"use client";

import { useState } from "react";
import { Bell, HelpCircle, Search } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FeaturedBanner } from "./FeaturedBanner";
import { RecommendedCard } from "./RecommendedCard";
import { ResourceCard } from "./ResourceCard";
import { NezBotCTA } from "./NezBotCTA";
import {
  ALL_RESOURCES,
  FILTER_CATEGORIES,
  QUICK_LINKS,
  RECOMMENDED_RESOURCES,
} from "../data/resources-mock";
import type { FilterCategory } from "../types";

export function ResourcesClientPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredResources = ALL_RESOURCES.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex flex-col gap-6">
      {/* Page header */}
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            Centro de información
          </h1>
          <p className="mt-1 text-sm text-text-secondary md:text-base">
            Encuentra recursos, trámites y servicios importantes para tu vida universitaria.
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

      {/* Featured banner */}
      <FeaturedBanner quickLinks={QUICK_LINKS} />

      {/* Search */}
      <div className="relative">
        <Search
          aria-hidden="true"
          className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
        />
        <Input
          type="search"
          placeholder="Buscar recursos, trámites o servicios..."
          className="min-h-12 rounded-xl pl-10 text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar recursos"
        />
      </div>

      {/* Category filter chips */}
      <div
        role="group"
        aria-label="Filtrar por categoría"
        className="flex gap-2 overflow-x-auto pb-1"
      >
        {FILTER_CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setActiveCategory(value)}
            aria-pressed={activeCategory === value}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-text-secondary hover:bg-accent hover:text-primary",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recommended section — always shown, not filtered */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-semibold text-text-primary">
            Recomendado para ti
          </h2>
          <p className="mt-0.5 text-sm text-text-secondary">
            Basado en tu etapa de integración y lo que otros estudiantes consultan.
          </p>
        </div>
        <ul
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          role="list"
          aria-label="Recursos recomendados"
        >
          {RECOMMENDED_RESOURCES.map((item) => (
            <li key={item.id}>
              <RecommendedCard item={item} />
            </li>
          ))}
        </ul>
      </section>

      {/* Resources grid */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-semibold text-text-primary">
            Recursos institucionales
          </h2>
          <p className="mt-0.5 text-sm text-text-secondary">
            Explora toda la información organizada por categorías.
          </p>
        </div>

        {filteredResources.length > 0 ? (
          <ul
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Recursos institucionales"
          >
            {filteredResources.map((item) => (
              <li key={item.id}>
                <ResourceCard item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface py-12 text-center">
            <p className="text-sm font-medium text-text-primary">Sin resultados</p>
            <p className="text-xs text-text-secondary">
              No encontramos recursos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </section>

      {/* NezBot CTA */}
      <NezBotCTA />
    </main>
  );
}
