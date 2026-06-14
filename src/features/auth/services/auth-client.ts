interface RegisterCredentials {
  fullName: string;
  email: string;
  password: string;
  institutionId: string;
  career?: string;
  campus?: string;
}

interface AuthResponse {
  ok: boolean;
  error?: string;
  uid?: string;
}

export const authClient = {
  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (!res.ok) {
        return { ok: false, error: data.error || "Error al registrar usuario." };
      }

      return { ok: true, uid: data.uid };
    } catch {
      return { ok: false, error: "Error de conexión. Intenta nuevamente." };
    }
  },

  async createSession(idToken: string): Promise<AuthResponse> {
    try {
      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { ok: false, error: data.error || "Error al crear sesión." };
      }

      return { ok: true };
    } catch {
      return { ok: false, error: "Error de conexión al crear sesión." };
    }
  },

  async signOut(): Promise<void> {
    await fetch("/api/auth/session", {
      method: "DELETE",
      credentials: "include",
    });
  },
};
