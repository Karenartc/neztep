"use client";

import type { AuthSession, SignInCredentials } from "../types";

// TODO: implement using authClient once BFF /api/auth is ready.
// This hook will wrap authClient, manage session state, and handle
// redirect logic after sign-in / sign-out.
export function useAuth(): {
  session: AuthSession | null;
  isLoading: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
} {
  return {
    session: null,
    isLoading: false,
    signIn: async () => {},
    signOut: async () => {},
  };
}
