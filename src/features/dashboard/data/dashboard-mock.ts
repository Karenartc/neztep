import {
  Bot,
  Building2,
  GraduationCap,
  Heart,
  HelpCircle,
  Library,
  ListTodo,
  Monitor,
  UserRound,
} from "lucide-react";
import type {
  CampusPoint,
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
    title: "Completar servicios estudiantiles",
    description:
      "Conoce los servicios de apoyo académico, psicológico y deportivo disponibles para ti.",
    estimatedMinutes: 5,
    href: "/services",
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
    label: "FAQ",
    description: "Respuestas rápidas",
    href: "/faq",
    icon: HelpCircle,
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
    href: "/services",
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
