// Public API of the auth feature — types only (safe for server + client components).
// Import hooks from   @/features/auth/hooks/use-auth      (client components only)
// Import services from @/features/auth/services/auth-client (client components only)
export type { AuthSession, RegisterCredentials, SignInCredentials, UserRole } from "./types";
