import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ConsultaChannel, ConsultaDerivada, ConsultaStatus } from "../types";

export interface TabConsultasDerivadasProps {
  consultas: ConsultaDerivada[];
}

const STATUS_CONFIG: Record<
  ConsultaStatus,
  { label: string; tone: "warning" | "info" | "success" }
> = {
  pending: { label: "Pendiente", tone: "warning" },
  in_review: { label: "En revisión", tone: "info" },
  resolved: { label: "Resuelta", tone: "success" },
};

const CHANNEL_LABEL: Record<ConsultaChannel, string> = {
  correo: "Correo institucional",
  chat: "Chat NezBot",
  presencial: "Atención presencial",
};

export function TabConsultasDerivadas({ consultas }: TabConsultasDerivadasProps) {
  if (consultas.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 p-12 text-center">
          <MessageCircle
            aria-hidden="true"
            className="h-10 w-10 text-text-secondary opacity-40"
          />
          <p className="text-sm font-medium text-text-primary">
            Sin consultas derivadas
          </p>
          <p className="max-w-xs text-xs text-text-secondary">
            Cuando NezBot no pueda resolver una duda, la derivará aquí para
            seguimiento institucional.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="space-y-3 p-6">
        {consultas.map((consulta) => {
          const statusConfig = STATUS_CONFIG[consulta.status];
          const date = new Date(consulta.createdAt).toLocaleDateString("es-CL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <div
              key={consulta.id}
              className="rounded-lg border border-border bg-background p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <p className="text-sm font-medium text-text-primary">
                  {consulta.question}
                </p>
                <Badge tone={statusConfig.tone} className="shrink-0 self-start">
                  {statusConfig.label}
                </Badge>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
                <span>Canal: {CHANNEL_LABEL[consulta.channel]}</span>
                <span>Fecha: {date}</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
