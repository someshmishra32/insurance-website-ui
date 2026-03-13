import { NextRequest, NextResponse } from "next/server"
import { aiService, type ChatMessage } from "@/lib/ai-service"

export const maxDuration = 30

interface AIAssistantRequest {
  // Primary documented field in README
  message?: string
  // Optional extended history support
  messages?: Array<{ role: "user" | "assistant"; content: string }>
}

/**
 * POST /api/ai-assistant
 *
 * Public AI assistant endpoint documented in the README.
 * Accepts either:
 *   - { "message": "..." }                        // simple usage (README)
 *   - { "message": "...", "messages": [...] }    // with limited history
 *
 * Returns: { success: boolean, message: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AIAssistantRequest

    const singleMessage = body.message
    const history = Array.isArray(body.messages) ? body.messages : []

    if (!singleMessage || typeof singleMessage !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid request: 'message' string is required" },
        { status: 400 }
      )
    }

    // Sanitize and limit history to last 10 messages
    const sanitizedHistory: ChatMessage[] = history
      .map((msg) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: String(msg.content).substring(0, 2000),
      }))
      .slice(-10)

    const conversation: ChatMessage[] = [
      ...sanitizedHistory,
      {
        role: "user",
        content: singleMessage.substring(0, 2000),
      },
    ]

    const response = await aiService.chat(conversation)

    return NextResponse.json(
      {
        success: true,
        message: response,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[AI Assistant API] Error:", error)

    let errorMessage = "Failed to process AI assistant request"
    let userMessage =
      "I apologize, but I encountered an error processing your request. Please try again or contact support if the problem persists."

    if (error instanceof Error) {
      errorMessage = error.message
      if (error.message.includes("Invalid API key")) {
        userMessage =
          "⚠️ There's an issue with the AI API key configuration. Please ensure OPENAI_API_KEY is correctly set in .env.local and the server has been restarted."
      } else if (error.message.includes("Rate limit")) {
        userMessage = "I'm receiving too many requests right now. Please wait a moment and try again."
      } else if (error.message.includes("unavailable")) {
        userMessage = "The AI service is temporarily unavailable. Please try again in a moment."
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        message: userMessage,
      },
      { status: 500 }
    )
  }
}

