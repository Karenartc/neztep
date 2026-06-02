import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LoginForm } from "./login-form";

describe("LoginForm", () => {
  it("renders login fields and shows validation when submission is invalid", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    expect(screen.getByLabelText(/Correo institucional/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ingresa tu contraseña/i)).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /Iniciar sesión/i });
    await user.click(submitButton);

    expect(await screen.findByText(/El correo es obligatorio/i)).toBeVisible();
    expect(screen.getByText(/La contraseña es obligatoria/i)).toBeVisible();
  });

  it("accepts valid form values without rendering field errors", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByLabelText(/Correo institucional/i), "estudiante@institucion.cl");
    await user.type(screen.getByLabelText(/Contraseña/i, { selector: "input" }), "Password1!");

    const submitButton = screen.getByRole("button", { name: /Iniciar sesión/i });
    await user.click(submitButton);

    expect(screen.queryByText(/El correo es obligatorio/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/La contraseña es obligatoria/i)).not.toBeInTheDocument();
  });
});
