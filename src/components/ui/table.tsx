import * as React from "react";
import { cn } from "@/lib/utils";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;
export type TableSectionProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;
export type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;

/**
 * Wraps tabular data in a responsive institutional table surface.
 */
export function Table({ className, ...props }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  );
}

/**
 * Renders the accessible table header section.
 */
export function TableHeader({ className, ...props }: TableSectionProps) {
  return <thead className={cn("border-b border-border", className)} {...props} />;
}

/**
 * Renders the accessible table body section.
 */
export function TableBody({ className, ...props }: TableSectionProps) {
  return <tbody className={cn("divide-y divide-border", className)} {...props} />;
}

/**
 * Renders one table row with subtle hover affordance.
 */
export function TableRow({ className, ...props }: TableRowProps) {
  return <tr className={cn("hover:bg-muted", className)} {...props} />;
}

/**
 * Renders a table column header.
 */
export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn("h-11 px-4 text-left font-medium text-text-secondary", className)}
      scope="col"
      {...props}
    />
  );
}

/**
 * Renders a table data cell.
 */
export function TableCell({ className, ...props }: TableCellProps) {
  return <td className={cn("px-4 py-3 text-text-primary", className)} {...props} />;
}
