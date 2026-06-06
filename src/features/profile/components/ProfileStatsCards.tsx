import Link from "next/link";
import { CalendarDays, CheckCircle2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ProfileStats } from "../types";

export interface ProfileStatsCardsProps {
  stats: ProfileStats;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  linkLabel: string;
  href: string;
}

function StatCard({ icon, value, label, linkLabel, href }: StatCardProps) {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex flex-1 flex-col items-center gap-2 p-4 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
          {icon}
        </div>
        <p className="text-2xl font-bold text-text-primary">{value}</p>
        <p className="text-sm text-text-secondary">{label}</p>
        <Link
          href={href}
          className="mt-auto text-xs font-medium text-primary hover:underline"
        >
          {linkLabel}
        </Link>
      </CardContent>
    </Card>
  );
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10 -rotate-90"
      viewBox="0 0 48 48"
    >
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="5"
      />
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="5"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProfileStatsCards({ stats }: ProfileStatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {/* Progress */}
      <Card className="flex flex-col">
        <CardContent className="flex flex-1 flex-col items-center gap-2 p-4 text-center">
          <ProgressRing percent={stats.progressPercent} />
          <p className="text-2xl font-bold text-text-primary">
            {stats.progressPercent}%
          </p>
          <p className="text-sm text-text-secondary">Progreso de integración</p>
          <Link
            href="/onboarding"
            className="mt-auto text-xs font-medium text-primary hover:underline"
          >
            Ver detalles
          </Link>
        </CardContent>
      </Card>

      {/* Completed steps */}
      <StatCard
        icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
        value={`${stats.completedSteps} / ${stats.totalSteps}`}
        label="Pasos completados"
        linkLabel="Ver pasos"
        href="/onboarding"
      />

      {/* Derived queries */}
      <StatCard
        icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
        value={String(stats.derivedQueries)}
        label="Consultas derivadas"
        linkLabel="Ver consultas"
        href="#consultas"
      />

      {/* Upcoming events */}
      <StatCard
        icon={<CalendarDays className="h-5 w-5" aria-hidden="true" />}
        value={String(stats.upcomingEvents)}
        label="Eventos próximos"
        linkLabel="Ver calendario"
        href="/campus"
      />
    </div>
  );
}
