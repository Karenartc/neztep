import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { spacingSamples, typographyRows } from "@/lib/mock/design-system";

/**
 * Shows typography scale and spacing rhythm examples.
 */
export function TypographyAndSpacing() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardContent className="divide-y divide-border p-0">
          {typographyRows.map((row) => (
            <div className="grid gap-3 p-6 md:grid-cols-[120px_1fr]" key={row.name}>
              <p className="text-sm font-medium text-text-secondary">{row.name}</p>
              <p className={row.className}>{row.sample}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Spacing</CardTitle>
          <CardDescription>8px rhythm for compact SaaS surfaces.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {spacingSamples.map((sample) => (
            <div className="flex items-center gap-4" key={sample.name}>
              <span className={`${sample.className} rounded bg-primary`} />
              <span className="text-sm font-medium text-text-primary">{sample.name}</span>
              <span className="text-sm text-text-secondary">{sample.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
