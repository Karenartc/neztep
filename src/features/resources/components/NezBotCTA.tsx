import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NezBotCTA() {
  return (
    <section className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
          <Bot aria-hidden="true" className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-base font-semibold text-text-primary">
            ¿No encuentras lo que buscas?
          </p>
          <p className="mt-0.5 text-sm text-text-secondary">
            NezBot puede ayudarte a encontrar información de forma rápida y sencilla.
          </p>
        </div>
      </div>
      <Button size="lg" className="w-full shrink-0 sm:w-auto">
        Preguntar a NezBot →
      </Button>
    </section>
  );
}
