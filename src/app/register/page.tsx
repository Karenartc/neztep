import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register | Neztep",
  description: "Institutional registration interface for Neztep.",
};

/**
 * Renders the public multistep registration route without backend logic.
 */
export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">
        <RegisterForm />
      </div>
    </main>
  );
}
