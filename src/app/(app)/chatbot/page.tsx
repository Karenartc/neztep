import type { Metadata } from "next";
import { NezbotClientPage } from "@/features/chatbot/components/NezbotClientPage";

export const metadata: Metadata = { title: "NezBot" };

export default function ChatbotPage() {
  return <NezbotClientPage />;
}
