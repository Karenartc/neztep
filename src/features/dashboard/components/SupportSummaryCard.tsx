import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { SupportSummary } from "../types";

interface SupportSummaryCardProps {
  summary: SupportSummary;
}

export function SupportSummaryCard({ summary }: SupportSummaryCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent">
            <HelpCircle aria-hidden="true" className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">¿Necesitas ayuda?</p>
            <p className="mt-0.5 text-xs text-text-secondary">
              Genera una solicitud si no encuentras lo que buscas.
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 divide-x divide-border rounded-md border border-border">
          <div className="py-3 text-center">
            <p className="text-2xl font-bold text-text-primary">
              {summary.openRequests}
            </p>
            <p className="text-xs text-text-secondary">Abiertas</p>
          </div>
          <div className="py-3 text-center">
            <p className="text-2xl font-bold text-success">
              {summary.resolvedRequests}
            </p>
            <p className="text-xs text-text-secondary">Resueltas</p>
          </div>
        </div>

        <Button asChild className="mt-4 w-full" size="sm" variant="secondary">
          <Link href="/chatbot">Crear solicitud</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
