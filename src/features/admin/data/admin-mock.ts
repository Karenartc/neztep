export type ActivityType = "career" | "faculty" | "student" | "resource" | "event";

export interface KpiItem {
  id: string;
  iconName: "users" | "user-check" | "graduation-cap" | "landmark";
  title: string;
  value: string;
  description: string;
  trend: string;
}

export interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  highlight: string;
  time: string;
}

export interface UserRow {
  id: string;
  name: string;
  email: string;
  career: string;
  registeredAt: string;
  role: string;
  status: "active";
}

export const mockKpis: KpiItem[] = [
  {
    id: "kpi-1",
    iconName: "users",
    title: "Usuarios totales",
    value: "1.248",
    description: "Registrados en la plataforma",
    trend: "12% vs. mes anterior",
  },
  {
    id: "kpi-2",
    iconName: "user-check",
    title: "Estudiantes activos",
    value: "987",
    description: "Han iniciado sesión",
    trend: "15% vs. mes anterior",
  },
  {
    id: "kpi-3",
    iconName: "graduation-cap",
    title: "Carreras registradas",
    value: "14",
    description: "Programas académicos",
    trend: "2 vs. mes anterior",
  },
  {
    id: "kpi-4",
    iconName: "landmark",
    title: "Facultades registradas",
    value: "5",
    description: "Unidades académicas",
    trend: "0 vs. mes anterior",
  },
];

export const mockActivity: ActivityItem[] = [
  {
    id: "act-1",
    type: "career",
    title: "Karen Rodríguez creó la carrera",
    highlight: "Ingeniería en Inteligencia Artificial",
    time: "Hace 5 min",
  },
  {
    id: "act-2",
    type: "faculty",
    title: "Carlos Díaz registró la facultad",
    highlight: "Facultad de Ingeniería y Tecnología",
    time: "Hace 20 min",
  },
  {
    id: "act-3",
    type: "student",
    title: "Nuevo estudiante agregado",
    highlight: "María José López",
    time: "Hace 1 hora",
  },
  {
    id: "act-4",
    type: "resource",
    title: "Actualización de recursos institucionales",
    highlight: "Guía de Becas 2025",
    time: "Hace 2 horas",
  },
  {
    id: "act-5",
    type: "event",
    title: "Evento publicado",
    highlight: "Feria de Servicios Estudiantiles",
    time: "Hace 3 horas",
  },
];

export const mockUsers: UserRow[] = [
  {
    id: "usr-1",
    name: "Juan Pablo Soto",
    email: "juan.soto@est.institucion.cl",
    career: "Ingeniería en Informática",
    registeredAt: "04 jun 2025, 11:24",
    role: "Estudiante",
    status: "active",
  },
  {
    id: "usr-2",
    name: "María Fernanda Pérez",
    email: "maria.perez@est.institucion.cl",
    career: "Ingeniería Industrial",
    registeredAt: "04 jun 2025, 10:18",
    role: "Estudiante",
    status: "active",
  },
  {
    id: "usr-3",
    name: "Pedro Andrés Ruiz",
    email: "pedro.ruiz@est.institucion.cl",
    career: "Ingeniería en Analítica",
    registeredAt: "03 jun 2025, 16:42",
    role: "Estudiante",
    status: "active",
  },
  {
    id: "usr-4",
    name: "Valentina Torres",
    email: "valentina.torres@est.institucion.cl",
    career: "Ingeniería Comercial",
    registeredAt: "03 jun 2025, 14:09",
    role: "Estudiante",
    status: "active",
  },
  {
    id: "usr-5",
    name: "Lucas Benavides",
    email: "lucas.benavides@est.institucion.cl",
    career: "Diseño y Comunicación",
    registeredAt: "02 jun 2025, 09:33",
    role: "Estudiante",
    status: "active",
  },
];
