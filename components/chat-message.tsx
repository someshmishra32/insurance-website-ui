"use client"

import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatMessageProps {
  message: ChatMessage
  isLoading?: boolean
}

export function ChatMessageComponent({ message, isLoading }: ChatMessageProps) {
  const [copied, setCopied] = useState(false)
  const isUser = message.role === "user"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`flex gap-3 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 ${
            isUser
              ? "bg-blue-600"
              : "bg-gradient-to-r from-purple-600 to-pink-600"
          }`}
        >
          {isUser ? "You" : "AI"}
        </div>

        {/* Message Bubble */}
        <div className="flex flex-col gap-2">
          <div
            className={`rounded-lg px-4 py-3 ${
              isUser
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-slate-200 dark:bg-slate-700 text-foreground rounded-bl-none"
            } ${isLoading ? "opacity-70" : ""}`}
          >
            {isLoading ? (
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200" />
              </div>
            ) : (
              <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                {message.content}
              </p>
            )}
          </div>

          {/* Actions */}
          {!isLoading && (
            <div className="flex gap-2 px-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={copyToClipboard}
                className="h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
              <span className="text-xs text-muted-foreground self-center">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
