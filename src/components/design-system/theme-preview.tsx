"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";

/**
 * Shows local light and dark mode rendering without app-wide persistence.
 */
export function ThemePreview() {
  const [dark, setDark] = useState(false);

  return (
    <div className={cn(dark && "dark")}>
      <Card className="bg-background">
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <CardTitle>Theme Preview</CardTitle>
              <CardDescription>
                Local preview for token behavior. Tenant palettes connect later.
              </CardDescription>
            </div>
            <Button onClick={() => setDark((value) => !value)} variant="secondary">
              {dark ? (
                <Sun aria-hidden="true" className="h-4 w-4" />
              ) : (
                <Moon aria-hidden="true" className="h-4 w-4" />
              )}
              {dark ? "Light" : "Dark"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-4 shadow-card">
            <Badge tone="primary">Default Neztep theme</Badge>
            <h3 className="mt-4 text-lg font-semibold text-text-primary">
              Institutional surface
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Cards, text, borders, and status colors read from CSS variables.
            </p>
            <ProgressBar className="mt-5" label="Theme readiness" value={82} />
          </div>
          <div className="space-y-3 rounded-lg border border-border bg-surface p-4">
            <Input readOnly value="ana.r@institucion.cl" />
            <div className="flex flex-wrap gap-2">
              <Badge tone="success">Active</Badge>
              <Badge tone="warning">Needs review</Badge>
              <Badge tone="error">Blocked</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
