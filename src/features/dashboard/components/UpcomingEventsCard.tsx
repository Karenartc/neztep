import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UpcomingEvent } from "../types";

interface UpcomingEventsCardProps {
  events: UpcomingEvent[];
  calendarHref?: string;
}

export function UpcomingEventsCard({
  events,
  calendarHref = "/campus",
}: UpcomingEventsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximos eventos</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1" role="list">
          {events.map((event) => (
            <li key={event.id}>
              <Link
                className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                href={event.href ?? "#"}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent">
                  <CalendarDays aria-hidden="true" className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-text-primary">
                    {event.title}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {event.date} · {event.time}
                  </p>
                </div>
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="mt-3 block text-sm font-medium text-primary hover:underline"
          href={calendarHref}
        >
          Ver calendario
        </Link>
      </CardContent>
    </Card>
  );
}
