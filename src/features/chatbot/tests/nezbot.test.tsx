import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { NezbotClientPage } from "../components/NezbotClientPage";
import { SUGGESTED_QUESTIONS, getMockResponse } from "../data/nezbot-mock";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// jsdom does not implement scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// ─── Estado inicial — la burbuja de bienvenida siempre está presente ──────────

describe("NezbotClientPage — estado inicial", () => {
  it("renderiza el título NezBot en el header", () => {
    render(<NezbotClientPage />);
    expect(screen.getByRole("heading", { name: /nezbot/i })).toBeInTheDocument();
  });

  it("renderiza el subtítulo de orientación institucional", () => {
    render(<NezbotClientPage />);
    expect(screen.getByText(/asistente de orientación/i)).toBeInTheDocument();
  });

  it("renderiza la burbuja de bienvenida con 'Hola 👋'", () => {
    render(<NezbotClientPage />);
    expect(screen.getByText("Hola 👋")).toBeInTheDocument();
  });

  it("renderiza 'Soy NezBot' en la burbuja de bienvenida", () => {
    render(<NezbotClientPage />);
    expect(screen.getByText(/soy nezbot/i)).toBeInTheDocument();
  });

  it("renderiza el texto de instrucción en la burbuja de bienvenida", () => {
    render(<NezbotClientPage />);
    expect(screen.getByText(/selecciona una pregunta sugerida/i)).toBeInTheDocument();
  });

  it("renderiza las 6 preguntas sugeridas como chips en el chat", () => {
    render(<NezbotClientPage />);
    SUGGESTED_QUESTIONS.forEach((q) => {
      expect(screen.getByRole("button", { name: q })).toBeInTheDocument();
    });
  });

  it("renderiza el grupo de sugerencias con aria-label correcto", () => {
    render(<NezbotClientPage />);
    expect(
      screen.getByRole("group", { name: /preguntas frecuentes sugeridas/i }),
    ).toBeInTheDocument();
  });

  it("renderiza el input de texto", () => {
    render(<NezbotClientPage />);
    expect(
      screen.getByRole("textbox", { name: /escribe tu pregunta/i }),
    ).toBeInTheDocument();
  });

  it("renderiza el botón enviar deshabilitado cuando el input está vacío", () => {
    render(<NezbotClientPage />);
    expect(screen.getByRole("button", { name: /enviar mensaje/i })).toBeDisabled();
  });

  // ── Exclusiones ─────────────────────────────────────────────────────────────

  it("no renderiza la lista de temas (Ubicaciones, Trámites, etc.) como contenido centrado", () => {
    render(<NezbotClientPage />);
    // These were the old topic bullet points in the centered hero
    expect(screen.queryByText("Procesos académicos")).not.toBeInTheDocument();
  });

  it("no renderiza quick chips inferiores (Horarios, Beneficios) en la barra de input", () => {
    render(<NezbotClientPage />);
    expect(screen.queryByRole("button", { name: /^horarios$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /^beneficios$/i })).not.toBeInTheDocument();
  });

  it("no renderiza cards grandes de áreas de ayuda", () => {
    render(<NezbotClientPage />);
    expect(
      screen.queryByText(/certificados, carnet estudiantil y procesos académicos/i),
    ).not.toBeInTheDocument();
  });

  it("no renderiza 'ChatGPT' ni referencias a IA avanzada", () => {
    render(<NezbotClientPage />);
    expect(screen.queryByText(/chatgpt/i)).not.toBeInTheDocument();
  });

  it("no renderiza 'Vista admin'", () => {
    render(<NezbotClientPage />);
    expect(screen.queryByText(/vista admin/i)).not.toBeInTheDocument();
  });

  it("no renderiza chip 'Precios'", () => {
    render(<NezbotClientPage />);
    expect(screen.queryByRole("button", { name: /^precios$/i })).not.toBeInTheDocument();
  });
});

// ─── Conversación ─────────────────────────────────────────────────────────────

describe("NezbotClientPage — conversación", () => {
  it("muestra el mensaje del usuario al enviar", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "¿Dónde puedo imprimir?");
    await user.keyboard("{Enter}");
    expect(screen.getByText("¿Dónde puedo imprimir?")).toBeInTheDocument();
  });

  it("oculta las sugerencias al enviar el primer mensaje", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    expect(
      screen.getByRole("group", { name: /preguntas frecuentes sugeridas/i }),
    ).toBeInTheDocument();
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "imprimir");
    await user.keyboard("{Enter}");
    expect(
      screen.queryByRole("group", { name: /preguntas frecuentes sugeridas/i }),
    ).not.toBeInTheDocument();
  });

  it("muestra respuesta del bot con lista y acción para 'imprimir'", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "imprimir");
    await user.keyboard("{Enter}");
    expect(screen.getByText(/puedes imprimir en/i)).toBeInTheDocument();
    expect(screen.getByText("Biblioteca")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver en campus/i })).toBeInTheDocument();
  });

  it("muestra respuesta con acción contextual para 'carnet'", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "carnet");
    await user.keyboard("{Enter}");
    expect(screen.getByText(/secretaría académica/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /abrir centro de información/i }),
    ).toBeInTheDocument();
  });

  it("muestra estado sin resultados con CTAs de navegación", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "xyzpreguntasinrespuesta");
    await user.keyboard("{Enter}");
    expect(screen.getByText(/no encontré una respuesta exacta/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ver centro de información/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explorar campus/i })).toBeInTheDocument();
  });

  it("limpia el input después de enviar", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "imprimir");
    await user.keyboard("{Enter}");
    expect(input).toHaveValue("");
  });

  it("envía al hacer clic en el botón enviar", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "bienestar");
    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));
    expect(screen.getByText(/bienestar estudiantil/i)).toBeInTheDocument();
  });

  it("no envía con input vacío — sugerencias siguen visibles", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    await user.keyboard("{Enter}");
    expect(
      screen.getByRole("group", { name: /preguntas frecuentes sugeridas/i }),
    ).toBeInTheDocument();
  });

  it("envía al hacer clic en una pregunta sugerida", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    await user.click(screen.getByRole("button", { name: "¿Dónde puedo imprimir?" }));
    expect(screen.getByText("¿Dónde puedo imprimir?")).toBeInTheDocument();
    expect(screen.getByText(/puedes imprimir en/i)).toBeInTheDocument();
  });

  it("mantiene la burbuja de bienvenida visible durante la conversación", async () => {
    const user = userEvent.setup();
    render(<NezbotClientPage />);
    const input = screen.getByRole("textbox", { name: /escribe tu pregunta/i });
    await user.type(input, "imprimir");
    await user.keyboard("{Enter}");
    expect(screen.getByText("Hola 👋")).toBeInTheDocument();
  });
});

// ─── getMockResponse ──────────────────────────────────────────────────────────

describe("getMockResponse", () => {
  it("retorna respuesta para 'imprimir' con lista y acción a campus", () => {
    const res = getMockResponse("¿Dónde puedo imprimir?");
    expect(res).not.toBeNull();
    expect(res?.listItems).toContain("Biblioteca");
    expect(res?.action?.href).toBe("/campus");
  });

  it("retorna respuesta para 'carnet' con acción a resources", () => {
    const res = getMockResponse("¿Cómo obtengo mi carnet?");
    expect(res).not.toBeNull();
    expect(res?.action?.href).toBe("/resources");
  });

  it("retorna respuesta para 'integración' (con acento)", () => {
    const res = getMockResponse("¿Cómo continúo mi integración?");
    expect(res).not.toBeNull();
    expect(res?.action?.href).toBe("/onboarding");
  });

  it("retorna respuesta para 'bienestar'", () => {
    const res = getMockResponse("¿Dónde está bienestar?");
    expect(res).not.toBeNull();
    expect(res?.action?.label).toBe("Ver en Campus");
  });

  it("retorna null cuando no hay coincidencia", () => {
    expect(getMockResponse("xyzpreguntasinrespuesta123")).toBeNull();
  });

  it("es case-insensitive y normaliza acentos", () => {
    expect(getMockResponse("IMPRIMIR")).not.toBeNull();
    expect(getMockResponse("Integración")).not.toBeNull();
    expect(getMockResponse("BIENESTAR")).not.toBeNull();
  });
});

// ─── SUGGESTED_QUESTIONS ─────────────────────────────────────────────────────

describe("SUGGESTED_QUESTIONS", () => {
  it("contiene las 6 preguntas requeridas", () => {
    expect(SUGGESTED_QUESTIONS).toContain("¿Dónde puedo imprimir?");
    expect(SUGGESTED_QUESTIONS).toContain("¿Cómo obtengo mi carnet?");
    expect(SUGGESTED_QUESTIONS).toContain("¿Dónde está bienestar?");
    expect(SUGGESTED_QUESTIONS).toContain("¿Cómo realizo una solicitud?");
    expect(SUGGESTED_QUESTIONS).toContain("¿Cuándo comienza la inscripción?");
    expect(SUGGESTED_QUESTIONS).toContain("¿Dónde encuentro ayuda académica?");
  });
});
