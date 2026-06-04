import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import type { QuickAction } from "../types";

interface QuickActionsGridProps {
  actions: QuickAction[];
}

export function QuickActionsGrid({ actions }: QuickActionsGridProps) {
  return (
    <section aria-labelledby="quick-actions-heading">
      <h2
        className="mb-3 text-base font-semibold text-text-primary"
        id="quick-actions-heading"
      >
        Accesos rápidos
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.id} href={action.href}>
              <Card
                className={cn(
                  "h-full transition-shadow hover:shadow-soft",
                  action.highlight && "border-primary/30 bg-accent/60",
                )}
              >
                <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
                  <div className="relative">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-lg",
                        action.highlight ? "bg-primary" : "bg-accent",
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        className={cn(
                          "h-5 w-5",
                          action.highlight
                            ? "text-primary-foreground"
                            : "text-primary",
                        )}
                      />
                    </div>
                    {action.badge !== undefined && action.badge > 0 && (
                      <span
                        aria-label={`${action.badge} pendientes`}
                        className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-error text-[10px] font-bold text-white"
                      >
                        {action.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      action.highlight ? "text-primary" : "text-text-primary",
                    )}
                  >
                    {action.label}
                  </p>
                  <p className="text-xs text-text-secondary">{action.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
