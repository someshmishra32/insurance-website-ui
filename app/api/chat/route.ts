import { NextRequest, NextResponse } from "next/server"
import { aiService } from "@/lib/ai-service"

interface ChatRequest {
  messages: Array<{ role: "user" | "assistant"; content: string }>
  userMessage: string
}

/**
 * POST /api/chat
 * Handles chat messages and returns AI responses
 * Body: { messages: ChatMessage[], userMessage: string }
 * Response: { message: string, success: boolean }
 */
export async function POST(request: NextRequest) {
  try {
    console.log("[API Chat] Received POST request")
    const body = (await request.json()) as ChatRequest
    console.log("[API Chat] Request body parsed successfully")

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array required" },
        { status: 400 }
      )
    }

    if (!body.userMessage || typeof body.userMessage !== "string") {
      return NextResponse.json(
        { error: "Invalid request: userMessage string required" },
        { status: 400 }
      )
    }

    // Sanitize input to prevent prompt injection
    const sanitizedMessages = body.messages.map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: String(msg.content).substring(0, 2000), // Limit message length
    }))

    // Limit conversation history to last 10 messages for token efficiency
    const recentMessages = sanitizedMessages.slice(-10)
    console.log("[API Chat] Calling AI service with", recentMessages.length, "messages")

    // Get AI response
    const response = await aiService.chat(recentMessages)
    console.log("[API Chat] Got response from AI service")

    return NextResponse.json(
      {
        success: true,
        message: response,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[AI Chat API] Full Error:", error)

    let errorMessage = "Failed to process chat request"
    let userMessage = "I apologize, but I encountered an error processing your request. Please try again or contact support if the problem persists."

    if (error instanceof Error) {
      errorMessage = error.message
      
      // Provide more specific error messages to user
      if (error.message.includes("Invalid API key")) {
        userMessage = "⚠️ API key configuration issue. Please ensure OPENAI_API_KEY is correctly set in .env.local and restart the server."
      } else if (error.message.includes("Rate limit")) {
        userMessage = "I'm getting too many requests right now. Please wait a moment and try again."
      } else if (error.message.includes("unavailable")) {
        userMessage = "OpenAI service is temporarily unavailable. Please try again in a moment."
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

/**
 * GET /api/chat
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "AI Chat API",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  )
}
