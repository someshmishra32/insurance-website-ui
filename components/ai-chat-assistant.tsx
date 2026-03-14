"use client"

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatMessageComponent, type ChatMessage } from "@/components/chat-message"
import { ChatInput } from "@/components/chat-input"
import { Button } from "@/components/ui/button"
import { RotateCcw, Download } from "lucide-react"

export interface AIChatAssistantHandle {
  sendMessage: (message: string) => Promise<void>
}

export const AIChatAssistant = forwardRef<AIChatAssistantHandle>(function AIChatAssistant(_, ref) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: `Hello! I'm your Insurance AI Assistant. I can help you with:

• Insurance product recommendations
• Policy coverage explanations
• Cost estimates and comparisons
• Claims process guidance
• Policy feature Q&A
• General insurance advice

What would you like to know about insurance today?`,
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (userMessage: string) => {
    // Validate input
    if (!userMessage || typeof userMessage !== "string") {
      console.warn("Invalid message input")
      return
    }

    // Generate unique IDs
    const userMsgId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const aiMsgId = `ai-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Add user message
    const userMsg: ChatMessage = {
      id: userMsgId,
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    }
    
    // Create new messages array with user message (avoid stale closure)
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      // Send to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          userMessage,
        }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      // Validate response
      if (!data || typeof data.message !== "string") {
        throw new Error("Invalid response from API")
      }

      // Add AI response
      const aiMsg: ChatMessage = {
        id: aiMsgId,
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMsg])
    } catch (error) {
      console.error("Chat error:", error)
      
      // Create error message
      const errorMsg: ChatMessage = {
        id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        role: "assistant",
        content: `❌ Error: ${error instanceof Error ? error.message : "Failed to get response"}. Please try again or contact support if the problem persists.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: `Hello! I'm your Insurance AI Assistant. I can help you with:

• Insurance product recommendations
• Policy coverage explanations
• Cost estimates and comparisons
• Claims process guidance
• Policy feature Q&A
• General insurance advice

What would you like to know about insurance today?`,
        timestamp: new Date(),
      },
    ])
  }

  const handleDownload = () => {
    try {
      // Create formatted conversation text
      const conversation = messages
        .map((msg) => `${msg.role === "user" ? "You" : "AI Assistant"}: ${msg.content}`)
        .join("\n\n")

      if (!conversation.trim()) {
        console.warn("No conversation to download")
        return
      }

      // Create blob from text
      const blob = new Blob([conversation], { type: "text/plain;charset=utf-8" })
      
      // Create download link
      const element = document.createElement("a")
      const url = URL.createObjectURL(blob)
      
      element.setAttribute("href", url)
      element.setAttribute("download", `insurance-chat-${Date.now()}.txt`)
      element.style.display = "none"
      
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
      
      // Cleanup blob URL after download
      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 100)
    } catch (error) {
      console.error("Download error:", error)
      // Could add toast notification here in future
    }
  }

  // Expose sendMessage method to parent component
  useImperativeHandle(ref, () => ({
    sendMessage: handleSendMessage,
  }))

  return (
    <Card className="w-full h-[600px] md:h-[700px] flex flex-col bg-background dark:bg-slate-900 shadow-lg">
      <CardHeader className="border-b border-border dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl md:text-2xl">
              Insurance AI Assistant
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Ask anything about insurance
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleDownload}
              className="h-9 w-9 p-0"
              title="Download conversation"
            >
              <Download className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleReset}
              className="h-9 w-9 p-0"
              title="Start new conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessageComponent
            key={message.id}
            message={message}
            isLoading={isLoading && message.id === messages[messages.length - 1]?.id}
          />
        ))}
        <div ref={messagesEndRef} />
      </CardContent>

      <ChatInput
        onSubmit={handleSendMessage}
        disabled={isLoading}
      />
    </Card>
  )
})
