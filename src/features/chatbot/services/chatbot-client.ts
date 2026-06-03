import type { ChatMessage, ChatSession, SendMessagePayload } from "../types";

/**
 * Communicates with /api/chatbot — never with the AI provider directly.
 *
 * When implementing:
 *   GET  /api/chatbot          → load message history for current session
 *   POST /api/chatbot          → send a message; BFF calls AI provider + stores in Firestore
 */
export const chatbotClient = {
  /** GET /api/chatbot */
  async getSession(): Promise<ChatSession | null> {
    return null;
  },

  /** POST /api/chatbot */
  async sendMessage(_payload: SendMessagePayload): Promise<ChatMessage> {
    void _payload;
    throw new Error("chatbotClient.sendMessage: BFF /api/chatbot not yet implemented");
  },
};
