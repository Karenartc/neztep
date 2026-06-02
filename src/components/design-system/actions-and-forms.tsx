import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";

/**
 * Displays core action, status, and accessible form states.
 */
export function ActionsAndForms() {
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
