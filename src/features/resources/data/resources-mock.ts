import {
  BookMarked,
  Calendar,
  ClipboardList,
  CreditCard,
  DollarSign,
  GraduationCap,
  Heart,
  Mail,
  Scale,
  Users,
} from "lucide-react";
import type { FilterCategory, QuickLink, ResourceItem } from "../types";

export const FILTER_CATEGORIES: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "academic", label: "Académicos" },
  { value: "admin", label: "Administrativos" },
  { value: "wellbeing", label: "Bienestar" },
  { value: "financial", label: "Financieros" },
];

export const QUICK_LINKS: QuickLink[] = [
  {
    id: "ql-1",
    title: "Calendario académico",
    description: "Fechas clave del semestre, evaluaciones y actividades.",
    Icon: Calendar,
    href: "#",
  },
  {
    id: "ql-2",
    title: "Trámites en línea",
    description: "Certificados, solicitudes y servicios en un solo lugar.",
    Icon: ClipboardList,
    href: "#",
  },
  {
    id: "ql-3",
    title: "Becas y beneficios",
    description: "Apoyos económicos y beneficios disponibles.",
    Icon: DollarSign,
    href: "#",
  },
];

export const RECOMMENDED_RESOURCES: ResourceItem[] = [
  {
    id: "rec-1",
    title: "Inscripción de asignaturas",
    description: "Aprende cómo inscribir tus asignaturas y entender tu malla curricular.",
    Icon: GraduationCap,
    category: "academic",
    badge: "recommended",
    href: "#",
  },
  {
    id: "rec-2",
    title: "Carnet digital",
    description: "Accede a tu carnet digital y conoce sus beneficios.",
    Icon: CreditCard,
    category: "admin",
    badge: "new",
    href: "#",
  },
  {
    id: "rec-3",
    title: "Calendario académico",
    description: "Revisa las fechas importantes del semestre y planifica tu tiempo.",
    Icon: Calendar,
    category: "academic",
    badge: "important",
    href: "#",
  },
];

export const ALL_RESOURCES: ResourceItem[] = [
  {
    id: "r-1",
    title: "Becas y beneficios",
    description: "Información sobre becas y apoyos económicos disponibles.",
    Icon: DollarSign,
    category: "financial",
    href: "#",
  },
  {
    id: "r-2",
    title: "Reglamentos",
    description: "Normativas y reglamentos institucionales vigentes.",
    Icon: Scale,
    category: "admin",
    href: "#",
  },
  {
    id: "r-3",
    title: "Calendario académico",
    description: "Fechas importantes del semestre.",
    Icon: Calendar,
    category: "academic",
    href: "#",
  },
  {
    id: "r-4",
    title: "Salud mental",
    description: "Apoyo psicológico y bienestar estudiantil.",
    Icon: Heart,
    category: "wellbeing",
    href: "#",
  },
  {
    id: "r-5",
    title: "Biblioteca digital",
    description: "Acceso a libros y recursos académicos en línea.",
    Icon: BookMarked,
    category: "academic",
    href: "#",
  },
  {
    id: "r-6",
    title: "Trámites en línea",
    description: "Certificados, constancias y solicitudes institucionales.",
    Icon: ClipboardList,
    category: "admin",
    href: "#",
  },
  {
    id: "r-7",
    title: "Correo institucional",
    description: "Configura y usa tu correo electrónico institucional.",
    Icon: Mail,
    category: "admin",
    href: "#",
  },
  {
    id: "r-8",
    title: "Directorio universitario",
    description: "Encuentra contactos de unidades académicas y administrativas.",
    Icon: Users,
    category: "academic",
    href: "#",
  },
];
