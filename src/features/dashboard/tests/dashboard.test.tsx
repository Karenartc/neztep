import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DashboardHeader } from "../components/DashboardHeader";
import { ProgressSummaryCard } from "../components/ProgressSummaryCard";
import { NextStepCard } from "../components/NextStepCard";
import { QuickActionsGrid } from "../components/QuickActionsGrid";
import { CampusPreviewGrid } from "../components/CampusPreviewGrid";
import { SupportSummaryCard } from "../components/SupportSummaryCard";
import {
  mockCampusPoints,
  mockQuickActions,
  mockStudent,
  mockSupportSummary,
} from "../data/dashboard-mock";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// ─── DashboardHeader ────────────────────────────────────────────────────────

describe("DashboardHeader", () => {
  it("renders the generic student greeting", () => {
    render(<DashboardHeader />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText(/Hola, estudiante/i)).toBeInTheDocument();
    expect(screen.getByText(/Bienvenido a tu ruta de integración/i)).toBeInTheDocument();
  });

  it("renders the avatar with generic initials", () => {
    render(<DashboardHeader />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

// ─── ProgressSummaryCard ─────────────────────────────────────────────────────

describe("ProgressSummaryCard", () => {
  it("renders the progress percentage", () => {
    render(<ProgressSummaryCard student={mockStudent} />);
    expect(screen.getByText("72%")).toBeInTheDocument();
  });

  it("renders the step completion text", () => {
    render(<ProgressSummaryCard student={mockStudent} />);
    expect(screen.getByText(/Paso 4 de 6 completado/i)).toBeInTheDocument();
  });

  it("renders the progress bar with correct value", () => {
    render(<ProgressSummaryCard student={mockStudent} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "72");
  });

  it("renders the CTA link to onboarding", () => {
    render(<ProgressSummaryCard student={mockStudent} />);
    const link = screen.getByRole("link", { name: /Ver mi ruta/i });
    expect(link).toHaveAttribute("href", "/onboarding");
  });
});

// ─── NextStepCard ────────────────────────────────────────────────────────────

describe("NextStepCard", () => {
  const step = mockStudent.nextStep!;

  it("renders the próximo paso recomendado label", () => {
    render(<NextStepCard step={step} totalSteps={mockStudent.totalSteps} />);
    expect(screen.getByText(/Próximo paso recomendado/i)).toBeInTheDocument();
  });

  it("renders the step title and description", () => {
    render(<NextStepCard step={step} totalSteps={mockStudent.totalSteps} />);
    expect(screen.getByText(step.title)).toBeInTheDocument();
    expect(screen.getByText(step.description)).toBeInTheDocument();
  });

  it("renders estimated time", () => {
    render(<NextStepCard step={step} totalSteps={mockStudent.totalSteps} />);
    expect(screen.getByText(/5 min/i)).toBeInTheDocument();
  });

  it("renders the Continuar CTA link", () => {
    render(<NextStepCard step={step} totalSteps={mockStudent.totalSteps} />);
    const link = screen.getByRole("link", { name: /Continuar/i });
    expect(link).toHaveAttribute("href", "/services");
  });
});

// ─── QuickActionsGrid ────────────────────────────────────────────────────────

describe("QuickActionsGrid", () => {
  it("renders all quick action cards", () => {
    render(<QuickActionsGrid actions={mockQuickActions} />);
    expect(screen.getByText("Mis tareas")).toBeInTheDocument();
    expect(screen.getByText("Onboarding")).toBeInTheDocument();
    expect(screen.getByText("NezBot")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<QuickActionsGrid actions={mockQuickActions} />);
    expect(
      screen.getByRole("region", { name: /Accesos rápidos/i }),
    ).toBeInTheDocument();
  });

  it("renders action descriptions", () => {
    render(<QuickActionsGrid actions={mockQuickActions} />);
    expect(screen.getByText("Pregúntale algo")).toBeInTheDocument();
    expect(screen.getByText("Respuestas rápidas")).toBeInTheDocument();
  });

  it("renders the badge count for highlighted actions", () => {
    render(<QuickActionsGrid actions={mockQuickActions} />);
    expect(screen.getByLabelText(/3 pendientes/i)).toBeInTheDocument();
  });
});

// ─── CampusPreviewGrid ───────────────────────────────────────────────────────

describe("CampusPreviewGrid", () => {
  it("renders all campus points", () => {
    render(<CampusPreviewGrid points={mockCampusPoints} />);
    expect(screen.getByText("Edificio Central")).toBeInTheDocument();
    expect(screen.getByText("Biblioteca")).toBeInTheDocument();
    expect(screen.getByText("Bienestar")).toBeInTheDocument();
    expect(screen.getByText("Laboratorios")).toBeInTheDocument();
  });

  it("renders description text for each point", () => {
    render(<CampusPreviewGrid points={mockCampusPoints} />);
    expect(screen.getByText(/Secretaría · Piso 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Psicología · Piso 1/i)).toBeInTheDocument();
  });

  it("renders the Ver mapa completo card", () => {
    render(<CampusPreviewGrid points={mockCampusPoints} />);
    expect(screen.getByText("Ver mapa completo")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<CampusPreviewGrid points={mockCampusPoints} />);
    expect(
      screen.getByRole("region", { name: /Navega tu sede/i }),
    ).toBeInTheDocument();
  });
});

// ─── SupportSummaryCard ──────────────────────────────────────────────────────

describe("SupportSummaryCard", () => {
  it("renders the help section title", () => {
    render(<SupportSummaryCard summary={mockSupportSummary} />);
    expect(screen.getByText(/¿Necesitas ayuda?/i)).toBeInTheDocument();
  });

  it("renders open and resolved request counts", () => {
    render(<SupportSummaryCard summary={mockSupportSummary} />);
    expect(screen.getByText(/abiertas/i)).toBeInTheDocument();
    expect(screen.getByText(/resueltas/i)).toBeInTheDocument();
  });

  it("renders the CTA link", () => {
    render(<SupportSummaryCard summary={mockSupportSummary} />);
    const link = screen.getByRole("link", { name: /Crear solicitud/i });
    expect(link).toHaveAttribute("href", "/chatbot");
  });
});
