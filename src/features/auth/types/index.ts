export interface SignInCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  password: string;
  institutionId: string;
  careerId: string;
  campusId: string;
}

export type UserRole = "student" | "admin";

export interface AuthSession {
  userId: string;
  email: string;
  fullName: string;
  institutionId: string;
  role: UserRole;
}
