import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CampusClientPage } from "../components/CampusClientPage";
import { BuildingDetail } from "../components/BuildingDetail";
import { BuildingsList } from "../components/BuildingsList";
import { CampusMapPlaceholder } from "../components/CampusMapPlaceholder";
import {
  FILTER_CHIPS,
  MOCK_BUILDING_DETAILS,
  MOCK_POINTS_OF_INTEREST,
} from "../data/campus-mock";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// ─── CampusClientPage ────────────────────────────────────────────────────────

describe("CampusClientPage", () => {
  it("renderiza el título Campus", () => {
    render(<CampusClientPage />);
    expect(screen.getByRole("heading", { name: /campus/i })).toBeInTheDocument();
  });

  it("renderiza el buscador", () => {
    render(<CampusClientPage />);
    expect(
      screen.getByRole("searchbox", { name: /buscar en el campus/i }),
    ).toBeInTheDocument();
  });

  it("renderiza el label 'Explorar por categoría' sobre los filtros", () => {
    render(<CampusClientPage />);
    expect(screen.getByText(/explorar por categoría/i)).toBeInTheDocument();
  });

  it("renderiza filtros de categoría con chip Todos activo por defecto", () => {
    render(<CampusClientPage />);
    const group = screen.getByRole("group", { name: /filtrar por categoría/i });
    expect(group).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^todos$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^servicios$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^aulas$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^salud$/i })).toBeInTheDocument();
  });

  it("renderiza lista de edificios en la columna izquierda", () => {
    render(<CampusClientPage />);
    expect(
      screen.getByRole("region", { name: /edificios y espacios/i }),
    ).toBeInTheDocument();
  });

  it("renderiza el mapa referencial en la columna central", () => {
    render(<CampusClientPage />);
    expect(
      screen.getByRole("region", { name: /mapa referencial del campus/i }),
    ).toBeInTheDocument();
  });

  it("renderiza el detalle del edificio seleccionado por defecto", () => {
    render(<CampusClientPage />);
    // "Edificio Central" appears in both the list and the detail panel
    expect(screen.getAllByText("Edificio Central").length).toBeGreaterThanOrEqual(2);
  });

  // ── Exclusiones MVP ──────────────────────────────────────────────────────

  it("no renderiza botón Vista admin", () => {
    render(<CampusClientPage />);
    expect(screen.queryByText(/vista admin/i)).not.toBeInTheDocument();
  });

  it("no renderiza Lugares más utilizados", () => {
    render(<CampusClientPage />);
    expect(screen.queryByText(/lugares más utilizados/i)).not.toBeInTheDocument();
  });

  it("no renderiza QR", () => {
    render(<CampusClientPage />);
    expect(screen.queryByText(/\bqr\b/i)).not.toBeInTheDocument();
  });

  it("no renderiza tiempo caminando", () => {
    render(<CampusClientPage />);
    expect(screen.queryByText(/caminando/i)).not.toBeInTheDocument();
  });

  it("no renderiza Ver ubicación", () => {
    render(<CampusClientPage />);
    expect(screen.queryByRole("button", { name: /ver ubicación/i })).not.toBeInTheDocument();
  });

  it("no renderiza Cómo llegar", () => {
    render(<CampusClientPage />);
    expect(screen.queryByText(/cómo llegar/i)).not.toBeInTheDocument();
  });
});

// ─── BuildingsList ────────────────────────────────────────────────────────────

describe("BuildingsList", () => {
  it("renderiza lista de edificios", () => {
    render(
      <BuildingsList
        points={MOCK_POINTS_OF_INTEREST}
        selectedPointId={MOCK_POINTS_OF_INTEREST[0].pointId}
        onSelectPoint={() => undefined}
      />,
    );
    expect(screen.getByRole("region", { name: /edificios y espacios/i })).toBeInTheDocument();
    expect(screen.getByText("Edificio Central")).toBeInTheDocument();
    expect(screen.getByText("Biblioteca")).toBeInTheDocument();
    expect(screen.getByText("Laboratorios")).toBeInTheDocument();
    expect(screen.getByText("Patio Central")).toBeInTheDocument();
    expect(screen.getByText("Bienestar")).toBeInTheDocument();
  });

  it("renderiza letras identificadoras A–E", () => {
    render(
      <BuildingsList
        points={MOCK_POINTS_OF_INTEREST}
        selectedPointId={MOCK_POINTS_OF_INTEREST[0].pointId}
        onSelectPoint={() => undefined}
      />,
    );
    ["A", "B", "C", "D", "E"].forEach((letter) => {
      expect(screen.getAllByText(letter).length).toBeGreaterThan(0);
    });
  });
});

// ─── CampusMapPlaceholder ─────────────────────────────────────────────────────

describe("CampusMapPlaceholder", () => {
  it("renderiza mapa referencial", () => {
    render(
      <CampusMapPlaceholder
        points={MOCK_POINTS_OF_INTEREST}
        selectedPointId={MOCK_POINTS_OF_INTEREST[0].pointId}
        onSelectPoint={() => undefined}
      />,
    );
    expect(
      screen.getByRole("region", { name: /mapa referencial del campus/i }),
    ).toBeInTheDocument();
  });

  it("renderiza marcadores A–E en el mapa", () => {
    render(
      <CampusMapPlaceholder
        points={MOCK_POINTS_OF_INTEREST}
        selectedPointId={MOCK_POINTS_OF_INTEREST[0].pointId}
        onSelectPoint={() => undefined}
      />,
    );
    expect(
      screen.getByRole("button", { name: /marcar edificio central/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /marcar biblioteca/i }),
    ).toBeInTheDocument();
  });

  it("dimea marcadores fuera del filtro cuando visiblePointIds está activo", () => {
    const visibleSet = new Set(["poi-edcentral"]);
    render(
      <CampusMapPlaceholder
        points={MOCK_POINTS_OF_INTEREST}
        selectedPointId="poi-edcentral"
        onSelectPoint={() => undefined}
        visiblePointIds={visibleSet}
      />,
    );
    // Edificio Central (visible) no debe tener clase de dimming
    const visible = screen.getByRole("button", { name: /marcar edificio central/i });
    expect(visible.className).not.toMatch(/opacity-30/);
    // Biblioteca (no visible) debe tener clase de dimming
    const dimmed = screen.getByRole("button", { name: /marcar biblioteca/i });
    expect(dimmed.className).toMatch(/opacity-30/);
  });
});

// ─── BuildingDetail ───────────────────────────────────────────────────────────

describe("BuildingDetail", () => {
  const detail = MOCK_BUILDING_DETAILS[0]; // Edificio Central

  it("renderiza detalle del edificio seleccionado", () => {
    render(<BuildingDetail detail={detail} />);
    expect(
      screen.getByRole("region", { name: /detalle: edificio central/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Edificio Central")).toBeInTheDocument();
    expect(screen.getByText("Académico")).toBeInTheDocument();
  });

  it("renderiza descripción del edificio", () => {
    render(<BuildingDetail detail={detail} />);
    expect(
      screen.getByText(/atención académica, oficinas administrativas/i),
    ).toBeInTheDocument();
  });

  it("renderiza horario", () => {
    render(<BuildingDetail detail={detail} />);
    expect(screen.getByText("Lunes a viernes")).toBeInTheDocument();
    expect(screen.getByText("08:00 - 19:00")).toBeInTheDocument();
  });

  it("renderiza servicios disponibles como pills visuales", () => {
    render(<BuildingDetail detail={detail} />);
    expect(screen.getByText("Secretaría Académica")).toBeInTheDocument();
    expect(screen.getByText("Impresiones")).toBeInTheDocument();
    // Los servicios deben estar dentro de <li> como pills (inline-flex)
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThanOrEqual(detail.services.length);
  });

  // ── Elementos eliminados del MVP ─────────────────────────────────────────

  it("no renderiza tiempo estimado caminando", () => {
    render(<BuildingDetail detail={detail} />);
    expect(screen.queryByText(/caminando/i)).not.toBeInTheDocument();
  });

  it("no renderiza CTA Ver ubicación", () => {
    render(<BuildingDetail detail={detail} />);
    expect(
      screen.queryByRole("button", { name: /ver ubicación/i }),
    ).not.toBeInTheDocument();
  });
});

// ─── FILTER_CHIPS (datos mock) ────────────────────────────────────────────────

describe("FILTER_CHIPS", () => {
  it("contiene las 6 categorías requeridas", () => {
    const labels = FILTER_CHIPS.map((c) => c.label);
    expect(labels).toContain("Servicios");
    expect(labels).toContain("Aulas");
    expect(labels).toContain("Comida");
    expect(labels).toContain("Salud");
    expect(labels).toContain("Impresión");
    expect(labels).toContain("Estacionamientos");
  });
});
