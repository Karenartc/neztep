import { ArrowRight, Inbox, MoreHorizontal} from "lucide-react";
import { ThemePreview } from "@/components/design-system/theme-preview";
import { ShowcaseSection } from "@/components/design-system/showcase-section";
import { Alert } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import { EmptyState } from "@/components/layout/empty-state";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { StatCard } from "@/components/student/stat-card";
import {
  adminNavigation,
  dashboardStats,
  designColors,
  resourceRows,
  showcaseTabs,
  spacingSamples,
  studentNavigation,
  typographyRows,
} from "@/lib/mock/design-system";

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

function FoundationPanel() {
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

function TypographyAndSpacing() {
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

function ActionsAndForms() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Actions and Status</CardTitle>
          <CardDescription>Hover, focus, disabled, and semantic feedback.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Solicitar demo</Button>
          <Button variant="secondary">Soy estudiante</Button>
          <Button variant="ghost">Texto</Button>
          <Button variant="destructive">Resolver alerta</Button>
          <Button disabled>Deshabilitado</Button>
          <Badge tone="success">Active</Badge>
          <Badge tone="warning">Review</Badge>
          <Badge tone="error">Blocked</Badge>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Accessible Inputs</CardTitle>
          <CardDescription>Visible labels, helper text, disabled, and error states.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <FormField helperText="Use the institutional account." id="email" label="Institutional email">
            <Input id="email" readOnly value="ana.r@institucion.cl" />
          </FormField>
          <FormField error="This field is required." id="campus" label="Campus">
            <Input error id="campus" readOnly value="" />
          </FormField>
          <FormField id="disabled" label="Program">
            <Input disabled id="disabled" value="Computer Science" />
          </FormField>
        </CardContent>
      </Card>
    </div>
  );
}

function DashboardPatterns() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-3">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Tu progreso de integracion</CardTitle>
            <CardDescription>Ruta personalizada para estudiantes de primer ano.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <ProgressBar label="Onboarding completado" value={72} />
            <ProgressBar label="Recursos revisados" value={48} />
            <Button variant="secondary">
              Ver mi ruta
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <EmptyState
          actionLabel="Crear contenido"
          description="Aun no hay recursos publicados para esta categoria institucional."
          icon={Inbox}
          title="Sin recursos pendientes"
        />
      </div>
    </div>
  );
}

function NewComponents() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Dialog, Dropdown, Avatar</CardTitle>
          <CardDescription>Accessible primitives for dashboard workflows.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Escalate support request</DialogTitle>
                <DialogDescription>
                  This is a visual-only modal pattern. No backend action is wired.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-label="Open actions" size="icon" variant="secondary">
                <MoreHorizontal aria-hidden="true" className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Preview resource</DropdownMenuItem>
              <DropdownMenuItem>Assign owner</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>Delete disabled</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar name="Ana Riquelme" />
          <Avatar className="h-12 w-12" name="Neztep Admin" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Skeleton and Alerts</CardTitle>
          <CardDescription>Loading and feedback states use semantic tokens.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-32" />
          </div>
          <Alert title="Theme architecture ready" tone="info">
            CSS variables can be overridden later by tenant configuration.
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

function TableShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Table</CardTitle>
        <CardDescription>Base data table for institutional content lists.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Resource</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resourceRows.map((row) => (
              <TableRow key={row.resource}>
                <TableCell>{row.resource}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell><Badge>{row.status}</Badge></TableCell>
                <TableCell>{row.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

/**
 * Displays the PR-ready Neztep design-system inventory and theme foundation.
 */
export default function DesignSystemPage() {
  return (
    <main className="min-h-screen px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-[1520px] gap-6 xl:grid-cols-[320px_1fr]">
        <aside className="space-y-6">
          <FoundationPanel />
          <Sidebar items={studentNavigation} />
          <Sidebar activeHref="/admin" items={adminNavigation} />
        </aside>
        <div className="space-y-6">
          <Navbar subtitle="PR-ready visual foundation and reusable components." title="Design System" />
          <ShowcaseSection description="Local light and dark preview with tenant-ready variables." title="Theme Foundation">
            <ThemePreview />
          </ShowcaseSection>
          <ShowcaseSection description="CSS variables, type, and spacing define the Neztep baseline." title="Tokens">
            <TypographyAndSpacing />
          </ShowcaseSection>
          <ShowcaseSection description="Core form controls and status elements." title="Controls">
            <ActionsAndForms />
          </ShowcaseSection>
          <ShowcaseSection description="Cards, navigation, progress, tabs, and empty states." title="Dashboard Patterns">
            <DashboardPatterns />
            <Card className="mt-4">
              <CardContent className="pt-6"><Tabs items={showcaseTabs} /></CardContent>
            </Card>
          </ShowcaseSection>
          <ShowcaseSection description="Modal, dropdown, skeleton, avatar, alerts, separators, and table." title="Base Components">
            <NewComponents />
            <div className="mt-4"><TableShowcase /></div>
          </ShowcaseSection>
          <Alert title="Future tenant theming" tone="success">
            Neztep uses CSS variables for the default theme. Institution palettes will connect later through tenant configuration, not this branch.
          </Alert>
        </div>
      </div>
    </main>
  );
}
