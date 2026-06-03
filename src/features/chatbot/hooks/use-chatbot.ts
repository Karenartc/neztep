"use client";

import type { ChatMessage, SendMessagePayload } from "../types";

// TODO: implement using chatbotClient once BFF /api/chatbot is ready.
// This hook will manage the message list and the sending state.
export function useChatbot(): {
  messages: ChatMessage[];
  isLoading: boolean;
  sendMessage: (payload: SendMessagePayload) => Promise<void>;
} {
  return {
    messages: [],
    isLoading: false,
    sendMessage: async () => {},
  };
}
