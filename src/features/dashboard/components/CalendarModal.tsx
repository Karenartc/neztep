"use client";

import { useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { UpcomingEvent } from "../types";

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const MONTH_ABBREVS: Record<string, number> = {
  Ene: 0, Feb: 1, Mar: 2, Abr: 3, May: 4, Jun: 5,
  Jul: 6, Ago: 7, Sep: 8, Oct: 9, Nov: 10, Dic: 11,
};

const DAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

function buildCalendarDays(year: number, month: number): (number | null)[] {
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0=Sun
  const offset = (firstDayOfWeek - 1 + 7) % 7; // Monday-first offset
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function parseEventDate(dateStr: string): { day: number; month: number } | null {
  const [dayStr, monthAbbr] = dateStr.split(" ");
  const day = parseInt(dayStr, 10);
  const month = MONTH_ABBREVS[monthAbbr];
  if (isNaN(day) || month === undefined) return null;
  return { day, month };
}

interface CalendarModalProps {
  events: UpcomingEvent[];
  open: boolean;
  onClose: () => void;
}

export function CalendarModal({ events, open, onClose }: CalendarModalProps) {
  const now = new Date();

  const [currentYear, setCurrentYear] = useState(() => now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (events.length === 0) return now.getMonth();
    return parseEventDate(events[0].date)?.month ?? now.getMonth();
  });
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const calendarDays = buildCalendarDays(currentYear, currentMonth);

  const eventsByDay = new Map<number, UpcomingEvent>();
  events.forEach((event) => {
    const parsed = parseEventDate(event.date);
    if (parsed?.month === currentMonth) eventsByDay.set(parsed.day, event);
  });

  const visibleEvents = events.filter(
    (e) => parseEventDate(e.date)?.month === currentMonth,
  );

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear((y) => y - 1); }
    else setCurrentMonth((m) => m - 1);
    setSelectedEventId(null);
  }

  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear((y) => y + 1); }
    else setCurrentMonth((m) => m + 1);
    setSelectedEventId(null);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) onClose(); }}>
      <DialogContent className="flex max-h-[90vh] max-w-3xl flex-col overflow-hidden p-0">
        <DialogHeader className="shrink-0 border-b border-border px-6 py-4">
          <DialogTitle>Calendario de eventos</DialogTitle>
        </DialogHeader>

        <div className="flex flex-1 flex-col overflow-y-auto sm:flex-row sm:overflow-hidden">
          {/* Calendar */}
          <div className="flex-1 overflow-y-auto border-b border-border p-5 sm:border-b-0 sm:border-r">
            <div className="mb-4 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={prevMonth}
                aria-label="Mes anterior"
                className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-muted hover:text-text-primary"
              >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <span className="text-sm font-semibold text-text-primary">
                {MONTH_NAMES[currentMonth]} {currentYear}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                aria-label="Mes siguiente"
                className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-muted hover:text-text-primary"
              >
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-1 grid grid-cols-7">
              {DAY_LABELS.map((label) => (
                <div
                  key={label}
                  className="py-1 text-center text-xs font-medium text-text-secondary"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {calendarDays.map((day, i) => {
                const event = day !== null ? eventsByDay.get(day) : undefined;
                const isSelected = event ? selectedEventId === event.id : false;
                return (
                  <div key={i} className="flex items-center justify-center py-0.5">
                    {day === null ? null : event ? (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedEventId((prev) =>
                            prev === event.id ? null : event.id,
                          )
                        }
                        aria-label={`${day}: ${event.title}`}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-primary hover:bg-primary hover:text-primary-foreground",
                        )}
                      >
                        {day}
                      </button>
                    ) : (
                      <span className="flex h-9 w-9 items-center justify-center text-sm text-text-primary">
                        {day}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event cards */}
          <div className="w-full overflow-y-auto p-5 sm:w-72">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-secondary">
              {visibleEvents.length > 0
                ? `${visibleEvents.length} evento${visibleEvents.length > 1 ? "s" : ""} este mes`
                : "Sin eventos este mes"}
            </p>

            {visibleEvents.length === 0 ? (
              <p className="text-sm text-text-secondary">
                No hay eventos programados para este mes.
              </p>
            ) : (
              <ul className="space-y-2.5">
                {visibleEvents.map((event) => {
                  const isSelected = selectedEventId === event.id;
                  return (
                    <li key={event.id}>
                      <div
                        className={cn(
                          "rounded-lg border p-3 transition-colors",
                          isSelected
                            ? "border-primary/30 bg-accent"
                            : "border-border bg-surface",
                        )}
                      >
                        <div className="flex gap-2.5">
                          <div
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
                              isSelected ? "bg-primary" : "bg-accent",
                            )}
                          >
                            <CalendarDays
                              aria-hidden="true"
                              className={cn(
                                "h-4 w-4",
                                isSelected ? "text-primary-foreground" : "text-primary",
                              )}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold leading-snug text-text-primary">
                              {event.title}
                            </p>
                            <p className="mt-0.5 text-xs text-text-secondary">
                              {event.eventType} · {event.date}
                            </p>
                            <p className="text-xs text-text-secondary">{event.time}</p>
                            {event.href && (
                              <Link
                                href={event.href}
                                onClick={onClose}
                                className="mt-2 inline-block text-xs font-medium text-primary hover:underline"
                              >
                                Ver detalle →
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
