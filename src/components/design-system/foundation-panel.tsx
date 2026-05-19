import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { designColors } from "@/lib/mock/design-system";

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground shadow-card">
        N
      </span>
      <div>
        <p className="text-2xl font-semibold text-text-primary">Neztep</p>
        <p className="text-sm text-text-secondary">Digital Student Integration OS</p>
      </div>
    </div>
  );
}

function ColorGrid({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "dark" : undefined}>
      <div className="grid grid-cols-2 gap-3 rounded-lg bg-background p-4">
        {designColors.map((color) => (
          <div key={`${color.token}-${dark ? "dark" : "light"}`}>
            <div
              className="mb-2 h-14 rounded-md border border-border"
              style={{ backgroundColor: `var(--${color.token})` }}
            />
            <p className="text-xs font-medium text-text-primary">{color.name}</p>
            <p className="font-mono text-[11px] text-text-secondary">
              {dark ? color.darkValue : color.lightValue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Displays Neztep brand identity and light/dark token swatches.
 */
export function FoundationPanel() {
  return (
    <Card>
      <CardContent className="space-y-6 pt-6">
        <BrandMark />
        <Separator />
        <div>
          <h2 className="mb-3 text-sm font-semibold text-text-primary">Light Tokens</h2>
          <ColorGrid />
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-text-primary">Dark Tokens</h2>
          <ColorGrid dark />
        </div>
      </CardContent>
    </Card>
  );
}
