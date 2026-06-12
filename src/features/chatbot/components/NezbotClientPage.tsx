"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { SUGGESTED_QUESTIONS, getMockResponse } from "../data/nezbot-mock";

// ─── UI-layer types ────────────────────────────────────────────────────────────

interface UiMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  listItems?: string[];
  action?: { label: string; href: string };
  noResult?: boolean;
  isWelcome?: boolean;
}

// Welcome message is pre-populated so the UI always starts as a conversation,
// never as an empty page.
const WELCOME_MESSAGE: UiMessage = {
  id: "nezbot-welcome",
  role: "assistant",
  isWelcome: true,
  content:
    "Hola 👋\n\nSoy NezBot. Puedo ayudarte a encontrar información sobre tu institución.\n\nSelecciona una pregunta sugerida o escribe tu consulta.",
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function BotAvatar() {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary"
    >
      <Bot className="h-4 w-4" />
    </span>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[78%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
        {content}
      </p>
    </div>
  );
}

function BotBubble({ message }: { message: UiMessage }) {
  // Split multi-paragraph content (welcome message uses \n\n)
  const paragraphs = message.content.split("\n\n").filter(Boolean);

  if (message.noResult) {
    return (
      <div className="flex gap-2.5">
        <BotAvatar />
        <div className="flex max-w-[78%] flex-col gap-3 rounded-2xl rounded-tl-sm border border-border bg-muted px-4 py-3">
          <p className="text-sm text-text-secondary">{message.content}</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/resources"
              className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:bg-accent hover:text-primary"
            >
              Ver Centro de Información
            </Link>
            <Link
              href="/campus"
              className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:bg-accent hover:text-primary"
            >
              Explorar Campus
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2.5">
      <BotAvatar />
      <div className="flex max-w-[78%] flex-col gap-2 rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-3">
        <div className="flex flex-col gap-1.5">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={cn(
                "text-sm text-text-primary",
                message.isWelcome && i === 0 && "font-semibold",
              )}
            >
              {para}
            </p>
          ))}
        </div>
        {message.listItems && message.listItems.length > 0 && (
          <ul className="flex flex-col gap-1 pl-0.5">
            {message.listItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        )}
        {message.action && (
          <Link
            href={message.action.href}
            className="mt-0.5 inline-flex w-fit items-center rounded-lg border border-primary/30 bg-accent px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {message.action.label}
          </Link>
        )}
      </div>
    </div>
  );
}

// Compact chips rendered inline in the chat, below the welcome message.
// Disappear once the user sends the first message.
function SuggestionChips({ onSelect }: { onSelect: (q: string) => void }) {
  return (
    <div
      role="group"
      aria-label="Preguntas frecuentes sugeridas"
      className="ml-9 flex flex-wrap gap-1.5"
    >
      {SUGGESTED_QUESTIONS.map((q) => (
        <button
          key={q}
          type="button"
          onClick={() => onSelect(q)}
          className="rounded-xl border border-border bg-muted px-3 py-1.5 text-xs text-text-secondary transition-colors hover:bg-accent hover:text-primary"
        >
          {q}
        </button>
      ))}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function NezbotClientPage() {
  const [messages, setMessages] = useState<UiMessage[]>([WELCOME_MESSAGE]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setShowSuggestions(false);

    const ts = Date.now();
    const userMsg: UiMessage = { id: `${ts}-user`, role: "user", content: trimmed };
    const found = getMockResponse(trimmed);
    const botMsg: UiMessage = found
      ? { id: `${ts}-bot`, role: "assistant", ...found }
      : {
          id: `${ts}-bot`,
          role: "assistant",
          content: "No encontré una respuesta exacta para tu pregunta.",
          noResult: true,
        };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend(inputValue);
    }
  }

  return (
    <main className="flex flex-col gap-4">
      {/* Page header */}
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            NezBot
          </h1>
          <p className="mt-1 text-sm text-text-secondary md:text-base">
            Tu asistente de orientación institucional.
          </p>
        </div>
      </header>

      {/* Chat container */}
      <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
        {/* Messages — scroll within this box; content always starts from the top */}
        <div
          className="min-h-[420px] max-h-[58vh] overflow-y-auto"
          aria-label="Conversación con NezBot"
          aria-live="polite"
        >
          <div className="flex flex-col gap-3 p-4">
            {messages.map((msg) =>
              msg.role === "user" ? (
                <UserBubble key={msg.id} content={msg.content} />
              ) : (
                <BotBubble key={msg.id} message={msg} />
              ),
            )}
            {showSuggestions && <SuggestionChips onSelect={handleSend} />}
            <div ref={messagesEndRef} aria-hidden="true" />
          </div>
        </div>

        {/* Input bar — always visible */}
        <div className="shrink-0 border-t border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Escribe tu pregunta..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Escribe tu pregunta"
              className="min-h-12 flex-1 rounded-xl text-base"
            />
            <button
              type="button"
              onClick={() => handleSend(inputValue)}
              aria-label="Enviar mensaje"
              disabled={!inputValue.trim()}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <Send aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
