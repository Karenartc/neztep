import type { Metadata } from "next";
import { Bot } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Asistente IA" };

export default function ChatbotPage() {
  return (
    <>
      <Navbar
        title="Asistente IA"
        subtitle="Resuelve tus dudas con nuestro chatbot institucional"
      />
      <EmptyState
        icon={Bot}
        title="Chatbot en construcción"
        description="Pronto podrás consultar al asistente IA para resolver dudas académicas y administrativas."
      />
    </>
  );
}
