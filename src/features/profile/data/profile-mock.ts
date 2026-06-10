import type {
  ActivityEntry,
  ConsultaDerivada,
  OnboardingStep,
  ProfileStats,
  StudentProfile,
} from "../types";

export const mockProfile: StudentProfile = {
  userId: "user-001",
  fullName: "Anaís Riquelme",
  email: "anais@est.institucion.cl",
  role: "Estudiante",
  career: "Ingeniería en Informática",
  campus: "Sede Central",
  entryYear: 2026,
  firstLogin: "2026-04-15T10:00:00.000Z",
  institutionId: "inst-001",
};

export const mockProfileStats: ProfileStats = {
  progressPercent: 72,
  completedSteps: 4,
  totalSteps: 6,
  derivedQueries: 2,
  upcomingEvents: 2,
};

export const mockOnboardingSteps: OnboardingStep[] = [
  {
    id: "step-1",
    title: "Bienvenida institucional",
    description: "Conoce los valores y misión de tu institución.",
    status: "completed",
    order: 1,
  },
  {
    id: "step-2",
    title: "Conoce tu institución",
    description: "Explora los edificios, servicios y recursos disponibles.",
    status: "completed",
    order: 2,
  },
  {
    id: "step-3",
    title: "Plataformas académicas",
    description: "Accede al portal estudiantil y herramientas digitales.",
    status: "completed",
    order: 3,
  },
  {
    id: "step-4",
    title: "Servicios de apoyo",
    description: "Descubre los servicios de bienestar y acompañamiento.",
    status: "in_progress",
    order: 4,
  },
  {
    id: "step-5",
    title: "Espacios importantes",
    description: "Ubica los espacios clave dentro de tu sede.",
    status: "pending",
    order: 5,
  },
  {
    id: "step-6",
    title: "Primeros pasos",
    description: "Completa tu integración inicial con éxito.",
    status: "pending",
    order: 6,
  },
];

export const mockConsultas: ConsultaDerivada[] = [
  {
    id: "consulta-001",
    question: "No encontré información sobre becas internas",
    status: "in_review",
    channel: "correo",
    createdAt: "2026-04-15T10:00:00.000Z",
  },
  {
    id: "consulta-002",
    question: "¿Cómo solicito un certificado de alumno regular?",
    status: "resolved",
    channel: "chat",
    createdAt: "2026-04-10T14:30:00.000Z",
  },
];

export const mockActivity: ActivityEntry[] = [
  {
    id: "act-001",
    type: "onboarding_step",
    description: "Completaste",
    detail: "Conoce tu institución",
    createdAt: "2026-04-20T09:15:00.000Z",
  },
  {
    id: "act-002",
    type: "content_viewed",
    description: "Consultaste",
    detail: "Becas y beneficios",
    createdAt: "2026-04-18T11:00:00.000Z",
  },
  {
    id: "act-003",
    type: "campus_visited",
    description: "Revisaste",
    detail: "Biblioteca en Campus",
    createdAt: "2026-04-17T16:30:00.000Z",
  },
  {
    id: "act-004",
    type: "query_derived",
    description: "NezBot derivó una consulta",
    createdAt: "2026-04-15T10:00:00.000Z",
  },
];
