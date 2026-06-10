import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProfileView } from "../components/ProfileView";
import { mockProfile } from "../data/profile-mock";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("ProfileView", () => {
  it("renders the student full name", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(screen.getAllByText("Anaís Riquelme").length).toBeGreaterThan(0);
  });

  it("renders career and email in the identity card", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(
      screen.getAllByText("Ingeniería en Informática").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("anais@est.institucion.cl").length,
    ).toBeGreaterThan(0);
  });

  it("renders the institutional info section heading", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(
      screen.getByRole("region", { name: /Información institucional/i }),
    ).toBeInTheDocument();
  });

  it("renders career, campus and entry year rows", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(screen.getByText("Carrera")).toBeInTheDocument();
    expect(screen.getByText("Sede")).toBeInTheDocument();
    expect(screen.getByText("Año de ingreso")).toBeInTheDocument();
    expect(screen.getAllByText("Sede Central").length).toBeGreaterThan(0);
    expect(screen.getByText("2026")).toBeInTheDocument();
  });

  it("does not render integration progress", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(screen.queryByText(/Progreso de integración/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Pasos completados/i)).not.toBeInTheDocument();
  });

  it("does not render stats cards or metrics", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(screen.queryByText(/Consultas derivadas/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Eventos próximos/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/72%/)).not.toBeInTheDocument();
  });

  it("does not render any tabs", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(screen.queryByRole("tab")).not.toBeInTheDocument();
    expect(screen.queryByText(/Mi integración/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Actividad reciente/i)).not.toBeInTheDocument();
  });

  it("does not render edit or save controls", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(screen.queryByRole("button", { name: /Editar perfil/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/Guardar cambios/i)).not.toBeInTheDocument();
  });

  it("does not render 'Solicitudes realizadas'", () => {
    render(<ProfileView profile={mockProfile} />);
    expect(screen.queryByText(/Solicitudes realizadas/i)).not.toBeInTheDocument();
  });
});
