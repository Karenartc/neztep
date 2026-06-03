"use client";

// TODO: implement using AuthSession once BFF /api/auth is ready.
// This hook will expose the current institution context derived from the session,
// so any component can access institutionId without prop-drilling.
export function useInstitution(): {
  institutionId: string | null;
  isLoading: boolean;
} {
  return { institutionId: null, isLoading: false };
}
