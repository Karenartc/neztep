import { ChevronRight, MoreHorizontal } from "lucide-react";
import { mockUsers } from "../data/admin-mock";

export function RecentUsersTable() {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-base font-semibold text-[#0F172A]">
        Últimos usuarios registrados
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E5E7EB]">
              {["Nombre", "Correo", "Carrera", "Fecha de registro", "Rol", "Estado", ""].map(
                (col) => (
                  <th
                    key={col}
                    className="pb-3 pr-6 text-left text-xs font-medium text-[#64748B] last:pr-0"
                    scope="col"
                  >
                    {col}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {mockUsers.map((user) => (
              <tr className="hover:bg-[#FAFAFA]" key={user.id}>
                <td className="py-3 pr-6 font-medium text-[#0F172A]">{user.name}</td>
                <td className="py-3 pr-6 text-[#64748B]">{user.email}</td>
                <td className="py-3 pr-6 text-[#64748B]">{user.career}</td>
                <td className="py-3 pr-6 text-[#64748B]">{user.registeredAt}</td>
                <td className="py-3 pr-6 text-[#64748B]">{user.role}</td>
                <td className="py-3 pr-6">
                  <span className="inline-flex items-center rounded-full bg-[#DCFCE7] px-2.5 py-0.5 text-xs font-medium text-[#16A34A]">
                    Activo
                  </span>
                </td>
                <td className="py-3">
                  <button
                    aria-label={`Opciones para ${user.name}`}
                    className="flex h-7 w-7 items-center justify-center rounded-md text-[#64748B] hover:bg-[#F1F5F9]"
                    type="button"
                  >
                    <MoreHorizontal aria-hidden="true" className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 border-t border-[#F1F5F9] pt-4">
        <button
          className="flex cursor-default items-center gap-1 text-sm font-medium text-[#6D4AFF]"
          type="button"
        >
          Ver todos los usuarios
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
