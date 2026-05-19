import { MoreHorizontal } from "lucide-react";
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
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { resourceRows } from "@/lib/mock/design-system";

function PrimitiveExamples() {
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
                <TableCell>
                  <Badge>{row.status}</Badge>
                </TableCell>
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
 * Shows modal, dropdown, skeleton, avatar, alert, separator, and table patterns.
 */
export function BaseComponentsShowcase() {
  return (
    <>
      <PrimitiveExamples />
      <div className="mt-4">
        <TableShowcase />
      </div>
    </>
  );
}
