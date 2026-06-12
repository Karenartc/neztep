import { LogOut } from "lucide-react";
import { NeztepLogo } from "@/components/auth/neztep-logo";

export function AdminSidebar() {
  return (
    <aside className="flex w-[280px] shrink-0 flex-col border-r border-[#E5E7EB] bg-white px-6 py-6">
      <NeztepLogo />
      <div className="mt-auto">
        <button
          className="flex items-center gap-2 text-sm text-[#EF4444] hover:opacity-80"
          type="button"
        >
          <LogOut aria-hidden="true" className="h-4 w-4" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
