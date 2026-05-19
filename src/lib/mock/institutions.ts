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
    campuses: ["Santiago Centro", "Maipu", "Providencia", "Valparaiso"],
    careers: [
      "Ingenieria en Informatica",
      "Administracion de Empresas",
      "Diseno Grafico Profesional",
      "Tecnico en Enfermeria",
    ],
  },
  {
    id: "duoc-uc",
    institutionId: "duoc-uc",
    name: "DUOC UC",
    type: "professional",
    status: "active",
    campuses: ["San Joaquin", "Alameda", "Plaza Oeste", "Vina del Mar"],
    careers: [
      "Analista Programador",
      "Ingenieria en Conectividad y Redes",
      "Turismo y Hoteleria",
      "Comunicacion Audiovisual",
    ],
  },
  {
    id: "uchile",
    institutionId: "uchile",
    name: "Universidad de Chile",
    type: "university",
    status: "active",
    campuses: ["Beauchef", "Juan Gomez Millas", "Andres Bello", "Campus Sur"],
    careers: [
      "Ingenieria Civil",
      "Derecho",
      "Medicina",
      "Psicologia",
    ],
  },
  {
    id: "uc",
    institutionId: "uc",
    name: "Universidad Catolica",
    type: "university",
    status: "active",
    campuses: ["San Joaquin", "Casa Central", "Lo Contador", "Oriente"],
    careers: [
      "College Ciencias Sociales",
      "Ingenieria",
      "Arquitectura",
      "Enfermeria",
    ],
  },
];
