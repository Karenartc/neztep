export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
}

export interface ChatSession {
  id: string;
  userId: string;
  institutionId: string;
  messages: ChatMessage[];
  createdAt: string;
}

export interface SendMessagePayload {
  content: string;
  sessionId?: string;
}
