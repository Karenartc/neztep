import {
  BookOpen,
  Bot,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Home,
  Mail,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { DesignColor, NavigationItem, StatItem } from "@/types/design-system";

export const designColors: DesignColor[] = [
  { name: "Primary", token: "primary", lightValue: "#5B3CC4", darkValue: "#A78BFA" },
  { name: "Secondary", token: "secondary", lightValue: "#8B5CF6", darkValue: "#8B5CF6" },
  { name: "Accent", token: "accent", lightValue: "#EDE9FE", darkValue: "#312E81" },
  { name: "Background", token: "background", lightValue: "#F8FAFC", darkValue: "#0B1120" },
  { name: "Surface", token: "surface", lightValue: "#FFFFFF", darkValue: "#111827" },
  { name: "Text Primary", token: "text-primary", lightValue: "#0F172A", darkValue: "#F8FAFC" },
  { name: "Text Secondary", token: "text-secondary", lightValue: "#475569", darkValue: "#CBD5E1" },
  { name: "Border", token: "border", lightValue: "#E2E8F0", darkValue: "#334155" },
  { name: "Success", token: "success", lightValue: "#16A34A", darkValue: "#4ADE80" },
  { name: "Warning", token: "warning", lightValue: "#D97706", darkValue: "#FBBF24" },
  { name: "Error", token: "error", lightValue: "#DC2626", darkValue: "#F87171" },
  { name: "Info", token: "info", lightValue: "#2563EB", darkValue: "#60A5FA" },
];

export const studentNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/app", icon: Home },
  { label: "Mi Ruta", href: "/app/onboarding", icon: Route },
  { label: "Campus", href: "/app/campus", icon: MapPin },
  { label: "Recursos", href: "/app/resources", icon: BookOpen },
  { label: "NezBot", href: "/app/chatbot", icon: Bot },
];

export const adminNavigation: NavigationItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Instituciones", href: "/admin/institutions", icon: GraduationCap },
  { label: "Usuarios", href: "/admin/users", icon: Users },
  { label: "Solicitudes", href: "/admin/support-requests", icon: MessageSquare },
  { label: "Seguridad", href: "/admin/security", icon: ShieldCheck },
];

export const dashboardStats: StatItem[] = [
  { label: "Estudiantes activos", value: "4.285", trend: "+12% vs. mes anterior", tone: "success", icon: Users },
  { label: "Rutas completadas", value: "68%", trend: "+6% vs. mes anterior", tone: "info", icon: Route },
  { label: "Eventos realizados", value: "24", trend: "+5 esta semana", tone: "primary", icon: CalendarDays },
];

export const onboardingTabs = [
  { value: "student", label: "Estudiante", content: "Vista enfocada en orientación, progreso y recursos institucionales." },
  { value: "admin", label: "Administración", content: "Vista para gestionar contenido, FAQ, campus y solicitudes de apoyo." },
  { value: "support", label: "Soporte", content: "Vista para revisar escalaciones y responder casos pendientes." },
];

export const typographyRows = [
  { name: "H1", className: "text-4xl font-semibold", sample: "Institutional dashboard" },
  { name: "H2", className: "text-2xl font-semibold", sample: "Guided onboarding" },
  { name: "Body", className: "text-base", sample: "Students can locate resources and follow their route." },
  { name: "Small", className: "text-sm", sample: "Campus Central · First-year orientation" },
];

export const quickAccessItems = [
  { icon: ClipboardList, label: "Mis tareas", text: "3 pendientes" },
  { icon: MapPin, label: "Explora el campus", text: "Mapa interactivo" },
  { icon: Mail, label: "Soporte", text: "Enviar solicitud" },
  { icon: BookOpen, label: "Biblioteca", text: "Recursos academicos" },
];

export const spacingSamples = [
  { name: "Compact", className: "h-4 w-4", value: "16px" },
  { name: "Default", className: "h-6 w-6", value: "24px" },
  { name: "Section", className: "h-8 w-8", value: "32px" },
];

export const resourceRows = [
  { resource: "Becas y beneficios", category: "Bienestar", status: "Publicado", owner: "Asuntos Estudiantiles" },
  { resource: "Calendario academico", category: "Academico", status: "Revision", owner: "Secretaria Academica" },
  { resource: "Mapa de servicios", category: "Campus", status: "Borrador", owner: "Soporte Institucional" },
];

export const showcaseTabs = [
  { value: "student", label: "Student", content: "Orientation, progress, and resources for first-year students." },
  { value: "admin", label: "Admin", content: "Content, FAQ, campus, and support request management patterns." },
  { value: "support", label: "Support", content: "Escalated cases and institutional response workflows." },
];
