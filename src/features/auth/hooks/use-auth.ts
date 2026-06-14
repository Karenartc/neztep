"use client";

import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut, type User } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";

interface AuthUser {
  uid: string;
  email: string | null;
  fullName: string | null;
  institutionId: string | null;
  career: string | null;
  campus: string | null;
  role: string | null;
  status: string | null;
}

interface UseAuthReturn {
  user: AuthUser | null;
  firebaseUser: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser: User | null) => {
      setFirebaseUser(fbUser);

      if (fbUser) {
        try {
          const res = await fetch("/api/user/me", { credentials: "include" });
          if (res.ok) {
            const data = await res.json();
            setUser({
              uid: data.uid,
              email: data.email,
              fullName: data.fullName,
              institutionId: data.institutionId,
              career: data.career,
              campus: data.campus,
              role: data.role,
              status: data.status,
            });
          } else {
            setUser(null);
          }
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = useCallback(async () => {
    try {
      await fetch("/api/auth/session", { method: "DELETE", credentials: "include" });
      await firebaseSignOut(auth);
      setUser(null);
      setFirebaseUser(null);
      window.location.href = "/login";
    } catch (error) {
      console.error("[useAuth] signOut error:", error);
    }
  }, []);

  return { user, firebaseUser, isLoading, signOut };
}
