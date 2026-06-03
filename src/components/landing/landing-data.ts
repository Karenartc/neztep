import type { LucideIcon } from "lucide-react";
import {
  Folder,
  Home,
  Map,
  MapPin,
  MessageCircle,
  Route,
} from "lucide-react";

export interface LandingFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LandingStep {
  number: string;
  title: string;
  description: string;
}

export interface LandingFooterColumn {
  title: string;
  links: string[];
}

export interface LandingSidebarItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export interface LandingSnapshotCard {
  title: string;
  subtitle: string;
}

export const LANDING_FEATURES: LandingFeature[] = [
  {
    icon: Route,
    title: "Onboarding inteligente",
    description:
      "Rutas para cada estudiante desde el primer día. Cada paso, en su momento.",
  },
  {
    icon: MapPin,
    title: "Explora tu campus",
    description:
      "Mapa y puntos clave para orientar a los estudiantes dentro de la sede.",
  },
  {
    icon: MessageCircle,
    title: "Acompañamiento 24/7",
    description:
      "NezBot responde tus dudas cuando lo necesitas, con derivación a tutores.",
  },
];

export const LANDING_STEPS: LandingStep[] = [
  {
    number: "01",
    title: "Tu institución configura el tenant",
    description:
      "Carga tu marca, sede, carrera y contenido. Neztep adapta la experiencia a tu institución en minutos.",
  },
  {
    number: "02",
    title: "El estudiante se registra y sigue su ruta",
    description:
      "Onboarding guiado, mapa del campus, información centralizada y asistente virtual desde el primer día.",
  },
  {
    number: "03",
    title: "La institución mide y mejora",
    description:
      "Dashboard de métricas en tiempo real: progreso, retención y consultas más frecuentes.",
  },
];

export const LANDING_FOOTER_COLUMNS: LandingFooterColumn[] = [
  {
    title: "Producto",
    links: ["Funcionalidades", "Descargar"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos y Condiciones"],
  },
];

export const LANDING_SIDEBAR_ITEMS: LandingSidebarItem[] = [
  { icon: Home, label: "Inicio", active: true },
  { icon: Route, label: "Mi Ruta" },
  { icon: Map, label: "Campus" },
  { icon: Folder, label: "Recursos" },
  { icon: MessageCircle, label: "NezBot" },
];

export const LANDING_SNAPSHOT_CARDS: LandingSnapshotCard[] = [
  { title: "Mis tareas", subtitle: "3 pendientes" },
  { title: "Campus", subtitle: "Mapa interactivo" },
  { title: "NezBot", subtitle: "Preguntale algo" },
];
