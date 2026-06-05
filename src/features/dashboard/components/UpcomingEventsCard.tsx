"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarModal } from "./CalendarModal";
import type { UpcomingEvent } from "../types";

interface UpcomingEventsCardProps {
  events: UpcomingEvent[];
}

export function UpcomingEventsCard({ events }: UpcomingEventsCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
                      {event.eventType} · {event.date} · {event.time}
                    </p>
                  </div>
                  <ChevronRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-text-secondary"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="mt-3 text-sm font-medium text-primary hover:underline"
          >
            Ver calendario
          </button>
        </CardContent>
      </Card>

      <CalendarModal
        events={events}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
