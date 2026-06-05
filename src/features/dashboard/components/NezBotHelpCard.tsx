import Link from "next/link";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HELP_TOPICS = ["Trámites", "Ubicaciones", "Beneficios", "Información académica"];

export function NezBotHelpCard() {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent">
            <Bot aria-hidden="true" className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm font-semibold text-text-primary">¿Necesitas ayuda?</p>
        </div>

        <p className="mb-2 text-xs text-text-secondary">NezBot puede ayudarte a encontrar:</p>

        <ul className="mb-4 space-y-1.5">
          {HELP_TOPICS.map((topic) => (
            <li key={topic} className="flex items-center gap-2 text-xs text-text-secondary">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {topic}
            </li>
          ))}
        </ul>

        <Button asChild className="w-full" size="sm" variant="primary">
          <Link href="/chatbot">Preguntar a NezBot</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
