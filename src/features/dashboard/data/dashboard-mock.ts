import {
  Bot,
  Building2,
  GraduationCap,
  Heart,
  Library,
  ListTodo,
  Monitor,
  UserRound,
} from "lucide-react";
import type {
  CampusPoint,
  PendingTask,
  QuickAction,
  RecommendedItem,
  StudentDashboardSummary,
  SupportSummary,
  UpcomingEvent,
} from "../types";

export const mockStudent: StudentDashboardSummary = {
  userId: "user-001",
  name: "Estudiante",
  role: "Estudiante",
  institutionId: "inst-001",
  progressPercent: 72,
  completedSteps: 4,
  totalSteps: 6,
  nextStep: {
    id: "step-5",
    stepNumber: 5,
    title: "Explora el Centro de información",
    description:
      "Conoce los recursos de apoyo académico, psicológico y deportivo disponibles para ti.",
    estimatedMinutes: 5,
    href: "/resources",
  },
};

export const mockQuickActions: QuickAction[] = [
  {
    id: "qa-1",
    label: "Mis tareas",
    description: "3 pendientes",
    href: "/onboarding",
    icon: ListTodo,
    badge: 3,
    highlight: true,
  },
  {
    id: "qa-2",
    label: "Onboarding",
    description: "Paso 4 de 6",
    href: "/onboarding",
    icon: GraduationCap,
  },
  {
    id: "qa-3",
    label: "NezBot",
    description: "Pregúntale algo",
    href: "/chatbot",
    icon: Bot,
  },
  {
    id: "qa-4",
    label: "Centro de info",
    description: "Recursos y trámites",
    href: "/resources",
    icon: Library,
  },
];

export const mockUpcomingEvents: UpcomingEvent[] = [
  {
    id: "ev-1",
    title: "Semana de Inducción",
    date: "23 Abr",
    time: "10:00 - 12:00",
    category: "event",
    eventType: "Ceremonia",
    status: "upcoming",
    href: "/campus",
  },
  {
    id: "ev-2",
    title: "Feria de Servicios",
    date: "25 Abr",
    time: "09:00 - 15:00",
    category: "event",
    eventType: "Feria",
    status: "upcoming",
    href: "/campus",
  },
  {
    id: "ev-3",
    title: "Taller de Plataformas Institucionales",
    date: "28 Abr",
    time: "14:00 - 16:00",
    category: "announcement",
    eventType: "Taller",
    status: "upcoming",
    href: "/resources",
  },
];

export const mockCampusPoints: CampusPoint[] = [
  {
    id: "cp-1",
    name: "Edificio Central",
    description: "Secretaría · Piso 1",
    category: "administrative",
    building: "A",
    icon: Building2,
  },
  {
    id: "cp-2",
    name: "Biblioteca",
    description: "Lun–Vie · 08:00–21:00",
    category: "academic",
    building: "B",
    icon: Library,
  },
  {
    id: "cp-3",
    name: "Bienestar",
    description: "Psicología · Piso 1",
    category: "health",
    building: "E",
    icon: Heart,
  },
  {
    id: "cp-4",
    name: "Laboratorios",
    description: "PC · Electrónica",
    category: "academic",
    building: "C",
    icon: Monitor,
  },
];

export const mockPendingTasks: PendingTask[] = [
  {
    id: "task-1",
    title: "Completar formulario de matrícula",
    category: "Académico",
    priority: "high",
    status: "in_progress",
    href: "/onboarding",
  },
  {
    id: "task-2",
    title: "Activar correo institucional",
    category: "Administrativo",
    priority: "high",
    status: "pending",
    href: "/onboarding",
  },
  {
    id: "task-3",
    title: "Revisar reglamento estudiantil",
    category: "Onboarding",
    priority: "medium",
    status: "pending",
    href: "/resources",
  },
];

export const mockSupportSummary: SupportSummary = {
  openRequests: 0,
  resolvedRequests: 1,
};

export const mockRecommendedItems: RecommendedItem[] = [
  {
    id: "rec-1",
    title: "Completa tu perfil",
    description: "Añade tus intereses y mejora las recomendaciones.",
    ctaLabel: "Ir ahora",
    href: "/profile",
    icon: UserRound,
  },
  {
    id: "rec-2",
    title: "Conoce tu carrera",
    description: "Módulo recomendado para nuevos estudiantes.",
    ctaLabel: "Continuar",
    href: "/resources",
    icon: GraduationCap,
  },
  {
    id: "rec-3",
    title: "Servicios de apoyo",
    description: "Descubre servicios de bienestar y acompañamiento.",
    ctaLabel: "Ver más",
    href: "/resources",
    icon: Heart,
  },
];
