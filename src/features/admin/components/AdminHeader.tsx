import { Bell, ChevronDown } from "lucide-react";

export function AdminHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Dashboard{" "}
          <span className="text-lg font-normal text-[#64748B]">Administrador</span>
        </h1>
        <p className="text-sm text-[#64748B]">Resumen general de tu institución</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          aria-label="Ver notificaciones"
          className="flex h-9 w-9 items-center justify-center text-[#64748B]"
          type="button"
        >
          <Bell aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6D4AFF] text-xs font-semibold text-white">
            AR
          </div>
          <span className="text-sm font-medium text-[#0F172A]">Administrador</span>
          <ChevronDown aria-hidden="true" className="h-4 w-4 text-[#64748B]" />
        </div>
      </div>
    </div>
  );
}
