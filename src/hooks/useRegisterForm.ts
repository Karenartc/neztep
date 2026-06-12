// src/hooks/useRegisterForm.ts

import { useState } from "react";
import { useRouter } from "next/navigation";

// Tipado del estado del formulario
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  institution: string;
  career: string;
  campus: string;
  acceptTerms: boolean;
}

// Tipado de los errores de validación por campo
interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  institution?: string;
  career?: string;
  campus?: string;
  acceptTerms?: string;
  general?: string;
}

export function useRegisterForm() {
  const router = useRouter();

  // Estado del formulario con valores vacíos iniciales
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    institution: "",
    career: "",
    campus: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // Actualiza un campo del formulario individualmente
  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpiamos el error del campo cuando el usuario empieza a corregirlo
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Validaciones del lado cliente ANTES de enviar al servidor
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre completo es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo institucional es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido.";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    if (!formData.institution) {
      newErrors.institution = "Selecciona tu institución.";
    }

    if (!formData.career) {
      newErrors.career = "Selecciona tu carrera.";
    }

    if (!formData.campus) {
      newErrors.campus = "Selecciona tu sede.";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Debes aceptar los términos y condiciones.";
    }

    setErrors(newErrors);
    // Si no hay errores el objeto estará vacío
    return Object.keys(newErrors).length === 0;
  };

  // Envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Si la validación del cliente falla, detenemos aquí
    if (!validate()) return;

    setIsLoading(true);

    try {
      // Llamamos a la API route que creamos en el Paso 1
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          institution: formData.institution,
          career: formData.career,
          campus: formData.campus,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // El servidor respondió con un error (email duplicado, etc.)
        setErrors({ general: data.message });
        return;
      }

      // Registro exitoso: redirigimos al login
      router.push("/login?registered=true");

    } catch {
      setErrors({ general: "Error de conexión. Intenta nuevamente." });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
}