import type { AuthSession } from "@/features/auth/types";
import type { OnboardingProgress } from "@/features/onboarding/types";

export const mockStudentSession: AuthSession = {
  userId: "user-student-001",
  email: "estudiante@universidad.edu",
  fullName: "Ana García",
  institutionId: "inst-001",
  role: "student",
};

export const mockAdminSession: AuthSession = {
  userId: "user-admin-001",
  email: "admin@universidad.edu",
  fullName: "Carlos Mendoza",
  institutionId: "inst-001",
  role: "admin",
};

export const mockOnboardingProgress: OnboardingProgress = {
  userId: "user-student-001",
  institutionId: "inst-001",
  completedAt: null,
  steps: [
    { id: "step-1", title: "Datos personales", description: "Completa tu perfil", status: "completed", order: 1 },
    { id: "step-2", title: "Documentos", description: "Sube tus documentos", status: "in_progress", order: 2 },
    { id: "step-3", title: "Activación", description: "Activa tu cuenta institucional", status: "pending", order: 3 },
  ],
};
