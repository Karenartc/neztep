import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface AuthCardProps {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
}

/**
 * Provides the focused white card surface for public authentication forms.
 */
export function AuthCard({ children, className, header }: AuthCardProps) {
  return (
    <Card className={cn("w-full max-w-md", className)}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent className="space-y-6">{children}</CardContent>
    </Card>
  );
}
