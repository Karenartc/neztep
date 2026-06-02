import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { RegisterForm } from "./register-form";

describe("RegisterForm", () => {
  it(
    "renders registration fields and keeps submit disabled until required fields are valid",
    { timeout: 10000 },
    async () => {
      const user = userEvent.setup();
      render(<RegisterForm />);

      const submitButton = screen.getByRole("button", { name: /Crear cuenta/i });
      expect(submitButton).toBeDisabled();

      await user.type(screen.getByLabelText(/Nombre completo/i, { selector: "input" }), "Ana Pérez");
      await user.type(screen.getByLabelText(/Correo institucional/i, { selector: "input" }), "ana@institucion.cl");
      await user.type(screen.getByLabelText(/^Contraseña$/i, { selector: "input" }), "StrongPass1!");
      await user.type(screen.getByLabelText(/Confirmar contraseña/i, { selector: "input" }), "StrongPass1!");
      await user.selectOptions(screen.getByLabelText(/Institución/i, { selector: "select" }), ["inacap"]);
      await user.selectOptions(screen.getByLabelText(/Carrera/i, { selector: "select" }), ["Ingenieria en Informática"]);
      await user.selectOptions(screen.getByLabelText(/Sede \/ Campus/i, { selector: "select" }), ["Santiago Centro"]);
      await user.click(screen.getByRole("checkbox", { name: /He leído y acepto/i }));

      expect(submitButton).toBeEnabled();
    },
  );

  it(
    "shows validation errors after touching invalid fields",
    { timeout: 10000 },
    async () => {
      const user = userEvent.setup();
      render(<RegisterForm />);

      const fullName = screen.getByLabelText(/Nombre completo/i, { selector: "input" });
      await user.click(fullName);
      await user.tab();

      const email = screen.getByLabelText(/Correo institucional/i, { selector: "input" });
      await user.click(email);
      await user.tab();

      expect(await screen.findByText(/El nombre es obligatorio/i)).toBeVisible();
      expect(screen.getByText(/El correo es obligatorio/i)).toBeVisible();
    },
  );
});
