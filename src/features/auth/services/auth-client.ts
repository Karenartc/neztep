import type { AuthSession, RegisterCredentials, SignInCredentials } from "../types";

/**
 * Communicates with /api/auth — never with Firebase SDK directly.
 *
 * Architectural rule:
 *   features/auth  →  /api/auth (BFF)  →  Firebase Auth (server-side)
 *
 * When implementing, replace each throw with a fetch() call to the BFF:
 *   POST /api/auth/signin    exchange credentials → session cookie
 *   POST /api/auth/register  create account → session cookie
 *   POST /api/auth/signout   invalidate session cookie
 *   GET  /api/auth/session   read session from HttpOnly cookie → AuthSession
 */
export const authClient = {
  /** POST /api/auth/signin */
  async signIn(_credentials: SignInCredentials): Promise<AuthSession> {
    void _credentials;
    throw new Error("authClient.signIn: BFF /api/auth not yet implemented");
  },

  /** POST /api/auth/register */
  async register(_credentials: RegisterCredentials): Promise<AuthSession> {
    void _credentials;
    throw new Error("authClient.register: BFF /api/auth not yet implemented");
  },

  /** POST /api/auth/signout */
  async signOut(): Promise<void> {
    throw new Error("authClient.signOut: BFF /api/auth not yet implemented");
  },

  /** GET /api/auth/session — returns null when unauthenticated */
  async getSession(): Promise<AuthSession | null> {
    return null;
  },
};
