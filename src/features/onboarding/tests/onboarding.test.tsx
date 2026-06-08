import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { OnboardingWelcome } from "../components/OnboardingWelcome";
import { OnboardingModuleIntro } from "../components/OnboardingModuleIntro";
import { OnboardingExploration } from "../components/OnboardingExploration";
import { OnboardingCompletion } from "../components/OnboardingCompletion";
import { NextModuleUnlocked } from "../components/NextModuleUnlocked";
import { OnboardingProgressSummary } from "../components/OnboardingProgressSummary";
import { OnboardingNav } from "../components/OnboardingNav";
import { ONBOARDING_MODULES } from "../data/onboarding-mock";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const mockModule = ONBOARDING_MODULES[0];
const mockModuleAllSeen = {
  ...mockModule,
  items: mockModule.items.map((i) => ({ ...i, seen: true })),
};

// ─── OnboardingNav ───────────────────────────────────────────────────────────

describe("OnboardingNav", () => {
  it("renders all module titles on hover-expand structure", () => {
    render(
      <OnboardingNav
        modules={ONBOARDING_MODULES}
        completedCount={0}
        currentModuleIndex={0}
      />,
    );
    expect(screen.getByText("Conoce tu institución")).toBeInTheDocument();
    expect(screen.getByText("¡Ya estás listo!")).toBeInTheDocument();
  });

  it("shows completed count in progress footer", () => {
    render(
      <OnboardingNav
        modules={ONBOARDING_MODULES}
        completedCount={1}
        currentModuleIndex={1}
      />,
    );
    expect(screen.getByText("1 de 6 completados")).toBeInTheDocument();
  });

  it("renders the progress bar", () => {
    render(
      <OnboardingNav
        modules={ONBOARDING_MODULES}
        completedCount={0}
        currentModuleIndex={0}
      />,
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders link back to dashboard", () => {
    render(
      <OnboardingNav
        modules={ONBOARDING_MODULES}
        completedCount={0}
        currentModuleIndex={0}
      />,
    );
    expect(screen.getByRole("link", { name: /Volver al inicio/i })).toBeInTheDocument();
  });
});

// ─── OnboardingWelcome ───────────────────────────────────────────────────────

describe("OnboardingWelcome", () => {
  it("renders the welcome message", () => {
    render(<OnboardingWelcome onStart={vi.fn()} />);
    expect(screen.getByText(/Bienvenido a Neztep/i)).toBeInTheDocument();
    expect(screen.getByText(/Nos alegra acompañarte/i)).toBeInTheDocument();
  });

  it("renders duration information", () => {
    render(<OnboardingWelcome onStart={vi.fn()} />);
    expect(screen.getByText(/10 minutos/i)).toBeInTheDocument();
  });

  it("calls onStart when CTA is clicked", async () => {
    const onStart = vi.fn();
    render(<OnboardingWelcome onStart={onStart} />);
    await userEvent.click(screen.getByRole("button", { name: /Comenzar recorrido/i }));
    expect(onStart).toHaveBeenCalledOnce();
  });
});

// ─── OnboardingModuleIntro ───────────────────────────────────────────────────

describe("OnboardingModuleIntro", () => {
  it("renderiza el módulo actual", () => {
    render(
      <OnboardingModuleIntro module={mockModule} totalModules={6} onStart={vi.fn()} />,
    );
    expect(screen.getByText("Conoce tu institución")).toBeInTheDocument();
    expect(screen.getByText(/Antes de comenzar tus clases/i)).toBeInTheDocument();
  });

  it("muestra el badge de paso", () => {
    render(
      <OnboardingModuleIntro module={mockModule} totalModules={6} onStart={vi.fn()} />,
    );
    expect(screen.getByText("Paso 1 de 6")).toBeInTheDocument();
  });

  it("muestra duración estimada", () => {
    render(
      <OnboardingModuleIntro module={mockModule} totalModules={6} onStart={vi.fn()} />,
    );
    expect(screen.getByText("3 minutos")).toBeInTheDocument();
  });

  it("muestra los bullets de preview", () => {
    render(
      <OnboardingModuleIntro module={mockModule} totalModules={6} onStart={vi.fn()} />,
    );
    expect(
      screen.getByText("Misión institucional y valores"),
    ).toBeInTheDocument();
  });

  it("llama onStart al hacer clic en Continuar", async () => {
    const onStart = vi.fn();
    render(<OnboardingModuleIntro module={mockModule} totalModules={6} onStart={onStart} />);
    await userEvent.click(screen.getByRole("button", { name: /Continuar/i }));
    expect(onStart).toHaveBeenCalledOnce();
  });
});

// ─── OnboardingExploration ───────────────────────────────────────────────────

describe("OnboardingExploration", () => {
  it("renderiza los contenidos del módulo", () => {
    render(
      <OnboardingExploration
        module={mockModule}
        totalModules={6}
        exploredCount={0}
        onSeen={vi.fn()}
        onComplete={vi.fn()}
        onBack={vi.fn()}
      />,
    );
    expect(
      screen.getByText("Carta de bienvenida del rector"),
    ).toBeInTheDocument();
    expect(screen.getByText("Misión y valores institucionales")).toBeInTheDocument();
    expect(screen.getByText("Carnet digital estudiantil")).toBeInTheDocument();
  });

  it("muestra la barra de progreso de exploración", () => {
    render(
      <OnboardingExploration
        module={mockModule}
        totalModules={6}
        exploredCount={0}
        onSeen={vi.fn()}
        onComplete={vi.fn()}
        onBack={vi.fn()}
      />,
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("permite marcar contenidos como explorados", async () => {
    const onSeen = vi.fn();
    render(
      <OnboardingExploration
        module={mockModule}
        totalModules={6}
        exploredCount={0}
        onSeen={onSeen}
        onComplete={vi.fn()}
        onBack={vi.fn()}
      />,
    );
    await userEvent.click(
      screen.getByRole("button", { name: /Carta de bienvenida del rector/i }),
    );
    expect(onSeen).toHaveBeenCalledWith("i1-1");
  });

  it("deshabilita Finalizar módulo cuando no todo está explorado", () => {
    render(
      <OnboardingExploration
        module={mockModule}
        totalModules={6}
        exploredCount={0}
        onSeen={vi.fn()}
        onComplete={vi.fn()}
        onBack={vi.fn()}
      />,
    );
    expect(screen.getByRole("button", { name: /Continuar/i })).toBeDisabled();
  });

  it("habilita Finalizar módulo cuando todo está explorado", () => {
    render(
      <OnboardingExploration
        module={mockModuleAllSeen}
        totalModules={6}
        exploredCount={3}
        onSeen={vi.fn()}
        onComplete={vi.fn()}
        onBack={vi.fn()}
      />,
    );
    expect(
      screen.getByRole("button", { name: /Finalizar módulo/i }),
    ).not.toBeDisabled();
  });

  it("llama onComplete al finalizar", async () => {
    const onComplete = vi.fn();
    render(
      <OnboardingExploration
        module={mockModuleAllSeen}
        totalModules={6}
        exploredCount={3}
        onSeen={vi.fn()}
        onComplete={onComplete}
        onBack={vi.fn()}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: /Finalizar módulo/i }));
    expect(onComplete).toHaveBeenCalledOnce();
  });
});

// ─── OnboardingCompletion ────────────────────────────────────────────────────

describe("OnboardingCompletion", () => {
  it("muestra mensaje de celebración al completar el módulo", () => {
    render(
      <OnboardingCompletion
        moduleName="Conoce tu institución"
        closingMessage={mockModule.closingMessage}
        onContinue={vi.fn()}
      />,
    );
    expect(screen.getByText("¡Excelente!")).toBeInTheDocument();
    expect(screen.getByText(/Has completado el módulo/i)).toBeInTheDocument();
    expect(screen.getByText("Conoce tu institución")).toBeInTheDocument();
  });

  it("muestra el mensaje de cierre del módulo", () => {
    render(
      <OnboardingCompletion
        moduleName="Conoce tu institución"
        closingMessage={mockModule.closingMessage}
        onContinue={vi.fn()}
      />,
    );
    expect(screen.getByText(mockModule.closingMessage)).toBeInTheDocument();
  });

  it("llama onContinue al hacer clic en continuar", async () => {
    const onContinue = vi.fn();
    render(
      <OnboardingCompletion
        moduleName="Conoce tu institución"
        closingMessage={mockModule.closingMessage}
        onContinue={onContinue}
      />,
    );
    await userEvent.click(
      screen.getByRole("button", { name: /Continuar recorrido/i }),
    );
    expect(onContinue).toHaveBeenCalledOnce();
  });
});

// ─── NextModuleUnlocked ──────────────────────────────────────────────────────

describe("NextModuleUnlocked", () => {
  const nextModule = ONBOARDING_MODULES[1];

  it("muestra el siguiente módulo desbloqueado", () => {
    render(
      <NextModuleUnlocked module={nextModule} totalModules={6} onStart={vi.fn()} />,
    );
    expect(screen.getByText("Descubre tus plataformas")).toBeInTheDocument();
    expect(screen.getByText(/Nuevo módulo disponible/i)).toBeInTheDocument();
  });

  it("llama onStart al comenzar el módulo siguiente", async () => {
    const onStart = vi.fn();
    render(<NextModuleUnlocked module={nextModule} totalModules={6} onStart={onStart} />);
    await userEvent.click(screen.getByRole("button", { name: /Comenzar módulo/i }));
    expect(onStart).toHaveBeenCalledOnce();
  });
});

// ─── OnboardingProgressSummary ───────────────────────────────────────────────

describe("OnboardingProgressSummary", () => {
  it("muestra progreso general", () => {
    render(<OnboardingProgressSummary completedCount={1} totalModules={6} />);
    expect(screen.getByText("Tu progreso general")).toBeInTheDocument();
    expect(screen.getByText("1 de 6 módulos completados")).toBeInTheDocument();
    expect(screen.getByText("16%")).toBeInTheDocument();
  });

  it("muestra mensaje positivo", () => {
    render(<OnboardingProgressSummary completedCount={1} totalModules={6} />);
    expect(screen.getByText(/¡Vas muy bien!/i)).toBeInTheDocument();
  });

  it("muestra la barra de progreso", () => {
    render(<OnboardingProgressSummary completedCount={1} totalModules={6} />);
    expect(
      screen.getByRole("progressbar", { name: /Progreso general/i }),
    ).toBeInTheDocument();
  });

  it("renders link to dashboard", () => {
    render(<OnboardingProgressSummary completedCount={1} totalModules={6} />);
    expect(screen.getByRole("link", { name: /Ir a mi ruta/i })).toBeInTheDocument();
  });
});
