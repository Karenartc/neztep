import { expect, test } from "@playwright/test";

test.describe("Public landing and auth pages", () => {
  test("landing page loads and shows hero call to action", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("heading", { name: /La mejor experiencia de integración/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Solicitar demo institucional/i })).toBeVisible();
  });

  test("login page renders accessible login form", async ({ page }) => {
    await page.goto("/login");
    await expect(page).toHaveTitle(/Login/i);
    await expect(page.getByRole("heading", { name: /Bienvenido de vuelta/i })).toBeVisible();
    await expect(page.getByLabel("Correo institucional")).toBeVisible();
    await expect(page.getByLabel("Contraseña")).toBeVisible();
    await expect(page.getByRole("button", { name: /Iniciar sesión/i })).toBeVisible();
  });

  test("register page renders accessible registration form", async ({ page }) => {
    await page.goto("/register");
    await expect(page).toHaveTitle(/Registro/i);
    await expect(page.getByRole("heading", { name: /Únete a Neztep/i })).toBeVisible();
    await expect(page.getByLabel("Nombre completo")).toBeVisible();
    await expect(page.getByLabel("Correo institucional")).toBeVisible();
    await expect(page.getByLabel("Contraseña")).toBeVisible();
    await expect(page.getByLabel("Confirmar contraseña")).toBeVisible();
    await expect(page.getByLabel("Institución")).toBeVisible();
  });
});
