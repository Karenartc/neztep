const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FULL_NAME_RE = /^[\p{L}\s'\-]{2,100}$/u;

export function validateEmail(value: string): string | undefined {
  const t = value.trim();
  if (!t) return "El correo es obligatorio.";
  if (!EMAIL_RE.test(t)) return "Ingresa un correo válido.";
}

export function validateLoginPassword(value: string): string | undefined {
  if (!value) return "La contraseña es obligatoria.";
}

export function validateFullName(value: string): string | undefined {
  const t = value.trim();
  if (!t) return "El nombre es obligatorio.";
  if (t.length < 2) return "El nombre debe tener al menos 2 caracteres.";
  if (t.length > 100) return "El nombre no puede superar los 100 caracteres.";
  if (!FULL_NAME_RE.test(t)) return "Solo se permiten letras, espacios, guiones y apóstrofes.";
}

export function validateRegisterPassword(value: string): string | undefined {
  if (!value) return "La contraseña es obligatoria.";
  if (value.length < 8) return "Mínimo 8 caracteres.";
  if (!/[A-Z]/.test(value)) return "Incluye al menos una letra mayúscula.";
  if (!/[a-z]/.test(value)) return "Incluye al menos una letra minúscula.";
  if (!/\d/.test(value)) return "Incluye al menos un número.";
  if (!/[^A-Za-z\d]/.test(value)) return "Incluye al menos un carácter especial.";
}

export function validateConfirmPassword(password: string, confirm: string): string | undefined {
  if (!confirm) return "Confirma tu contraseña.";
  if (password !== confirm) return "Las contraseñas deben coincidir.";
}

export function validateInstitution(value: string): string | undefined {
  if (!value) return "Selecciona tu institución.";
}

export function validateCareer(value: string, hasInstitution: boolean): string | undefined {
  if (hasInstitution && !value) return "Selecciona tu carrera.";
}

export function validateCampus(value: string, hasInstitution: boolean): string | undefined {
  if (hasInstitution && !value) return "Selecciona tu sede.";
}
