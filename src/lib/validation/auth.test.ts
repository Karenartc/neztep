import { describe, expect, it } from "vitest";
import {
  validateCampus,
  validateCareer,
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validateInstitution,
  validateLoginPassword,
  validateRegisterPassword,
} from "./auth";

describe("auth validation", () => {
  it("returns an error for invalid or empty email", () => {
    expect(validateEmail("")).toBe("El correo es obligatorio.");
    expect(validateEmail("bad-email")).toBe("Ingresa un correo válido.");
    expect(validateEmail("student@universidad.cl")).toBeUndefined();
  });

  it("requires a login password", () => {
    expect(validateLoginPassword("")).toBe("La contraseña es obligatoria.");
    expect(validateLoginPassword("abc123")).toBeUndefined();
  });

  it("validates full name constraints", () => {
    expect(validateFullName("")).toBe("El nombre es obligatorio.");
    expect(validateFullName("A")).toBe("El nombre debe tener al menos 2 caracteres.");
    expect(validateFullName("A#"))
      .toBe("Solo se permiten letras, espacios, guiones y apóstrofes.");
    expect(validateFullName("Ana Pérez")).toBeUndefined();
  });

  it("validates strong registration password rules", () => {
    expect(validateRegisterPassword("")).toBe("La contraseña es obligatoria.");
    expect(validateRegisterPassword("short1A!")).toBeUndefined();
    expect(validateRegisterPassword("weakpass")).toBe("Incluye al menos una letra mayúscula.");
  });

  it("validates password confirmation matching", () => {
    expect(validateConfirmPassword("Password1!", "")).toBe("Confirma tu contraseña.");
    expect(validateConfirmPassword("Password1!", "Other1!")).toBe("Las contraseñas deben coincidir.");
    expect(validateConfirmPassword("Password1!", "Password1!")).toBeUndefined();
  });

  it("requires institution and selected program fields when institution is chosen", () => {
    expect(validateInstitution("")).toBe("Selecciona tu institución.");
    expect(validateInstitution("inacap")).toBeUndefined();
    expect(validateCareer("", true)).toBe("Selecciona tu carrera.");
    expect(validateCareer("Ingeniería", true)).toBeUndefined();
    expect(validateCampus("", true)).toBe("Selecciona tu sede.");
    expect(validateCampus("Santiago Centro", true)).toBeUndefined();
  });
});
