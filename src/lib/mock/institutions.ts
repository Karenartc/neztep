export type InstitutionStatus = "active" | "pending" | "inactive";

export type InstitutionType = "technical" | "professional" | "university";

export interface MockInstitution {
  id: string;
  institutionId: string;
  name: string;
  type: InstitutionType;
  status: InstitutionStatus;
  campuses: string[];
  careers: string[];
}

/**
 * Provides tenant-scoped mock institutions for public registration UI only.
 */
export const institutions: MockInstitution[] = [
  {
    id: "inacap",
    institutionId: "inacap",
    name: "INACAP",
    type: "professional",
    status: "active",
    campuses: ["Santiago Centro", "Maipú", "Providencia", "Valparaiso"],
    careers: [
      "Ingenieria en Informática",
      "Administración de Empresas",
      "Diseño Gráfico Profesional",
      "Técnico en Enfermeria",
    ],
  },
];
