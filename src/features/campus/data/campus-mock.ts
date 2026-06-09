import type {
  BuildingDetail,
  FilterChip,
  PointCategory,
  PointOfInterest,
} from "../types";

/** Category filter chips — integrated into the map, not a separate module. */
export const FILTER_CHIPS: FilterChip[] = [
  { id: "fc-1", label: "Servicios", category: "services" },
  { id: "fc-2", label: "Aulas", category: "classrooms" },
  { id: "fc-3", label: "Comida", category: "food" },
  { id: "fc-4", label: "Salud", category: "health" },
  { id: "fc-5", label: "Impresión", category: "printing" },
  { id: "fc-6", label: "Estacionamientos", category: "parking" },
];

/**
 * View-layer mapping from pointId → filter categories.
 * Keeps the domain model (PointOfInterest) unchanged while enabling UI filtering.
 */
export const POINT_FILTER_CATEGORIES: Record<string, PointCategory[]> = {
  "poi-edcentral": ["services", "printing"],
  "poi-biblioteca": ["classrooms"],
  "poi-laboratorios": ["classrooms"],
  "poi-patio": ["food"],
  "poi-bienestar": ["health"],
};

export const MOCK_POINTS_OF_INTEREST: PointOfInterest[] = [
  {
    pointId: "poi-edcentral",
    institutionId: "inst-001",
    name: "Edificio Central",
    description: "Secretaría, oficinas administrativas y servicios académicos.",
    category: "administrative",
    building: "A",
    floor: 1,
    latitude: -33.4569,
    longitude: -70.6483,
    isActive: true,
  },
  {
    pointId: "poi-biblioteca",
    institutionId: "inst-001",
    name: "Biblioteca",
    description: "Colección bibliográfica, salas de estudio y recursos digitales.",
    category: "academic",
    building: "B",
    floor: 1,
    latitude: -33.4571,
    longitude: -70.6490,
    isActive: true,
  },
  {
    pointId: "poi-laboratorios",
    institutionId: "inst-001",
    name: "Laboratorios",
    description: "Laboratorios de computación y electrónica.",
    category: "academic",
    building: "C",
    floor: 2,
    latitude: -33.4565,
    longitude: -70.6479,
    isActive: true,
  },
  {
    pointId: "poi-patio",
    institutionId: "inst-001",
    name: "Patio Central",
    description: "Espacio de descanso y reunión para estudiantes.",
    category: "recreation",
    building: "D",
    floor: 0,
    latitude: -33.4567,
    longitude: -70.6485,
    isActive: true,
  },
  {
    pointId: "poi-bienestar",
    institutionId: "inst-001",
    name: "Bienestar",
    description: "Atención psicológica, deportiva y servicios de apoyo estudiantil.",
    category: "health",
    building: "E",
    floor: 1,
    latitude: -33.4573,
    longitude: -70.6481,
    isActive: true,
  },
];

export const MOCK_BUILDING_DETAILS: BuildingDetail[] = [
  {
    pointId: "poi-edcentral",
    letter: "A",
    name: "Edificio Central",
    category: "Académico",
    description:
      "Aquí encontrarás atención académica, oficinas administrativas y servicios para estudiantes.",
    scheduleLabel: "Lunes a viernes",
    scheduleHours: "08:00 - 19:00",
    services: [
      { label: "Secretaría Académica" },
      { label: "Dirección de carrera" },
      { label: "Certificados" },
      { label: "Impresiones" },
      { label: "Sala de estudio" },
    ],
  },
  {
    pointId: "poi-biblioteca",
    letter: "B",
    name: "Biblioteca",
    category: "Académico",
    description:
      "Accede a material bibliográfico, bases de datos y espacios de estudio individual o grupal.",
    scheduleLabel: "Lunes a viernes",
    scheduleHours: "08:00 - 21:00",
    services: [
      { label: "Préstamo de libros" },
      { label: "Salas de estudio" },
      { label: "Recursos digitales" },
      { label: "Computadores de uso libre" },
    ],
  },
  {
    pointId: "poi-laboratorios",
    letter: "C",
    name: "Laboratorios",
    category: "Académico",
    description:
      "Laboratorios equipados para práctica de computación, electrónica y disciplinas técnicas.",
    scheduleLabel: "Lunes a viernes",
    scheduleHours: "08:00 - 18:00",
    services: [
      { label: "Computadores PC" },
      { label: "Software especializado" },
      { label: "Laboratorio de electrónica" },
    ],
  },
  {
    pointId: "poi-patio",
    letter: "D",
    name: "Patio Central",
    category: "Recreación",
    description:
      "Espacio abierto ideal para descanso, actividades grupales y reuniones informales.",
    scheduleLabel: "Todos los días",
    scheduleHours: "07:00 - 22:00",
    services: [
      { label: "Área de descanso" },
      { label: "Cafetería cercana" },
      { label: "Wi-Fi exterior" },
    ],
  },
  {
    pointId: "poi-bienestar",
    letter: "E",
    name: "Bienestar",
    category: "Salud",
    description:
      "Servicios de acompañamiento integral: psicología, deporte y apoyo social para estudiantes.",
    scheduleLabel: "Lunes a viernes",
    scheduleHours: "09:00 - 18:00",
    services: [
      { label: "Atención psicológica" },
      { label: "Programa deportivo" },
      { label: "Apoyo socioeconómico" },
      { label: "Orientación vocacional" },
    ],
  },
];
