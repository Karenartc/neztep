import { Bell } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function ProfileHeader() {
  return (
    <header className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-4 shadow-card md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">Perfil</h1>
        <p className="text-sm text-text-secondary">
          Consulta tu información institucional.
        </p>
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <Button aria-label="Ver notificaciones" size="icon" variant="ghost">
          <Bell aria-hidden="true" className="h-4 w-4" />
        </Button>
        <Avatar name="Estudiante Sede" />
      </div>
    </header>
  );
}
