"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader } from "lucide-react"

interface ChatInputProps {
  onSubmit: (message: string) => Promise<void>
  disabled?: boolean
}

export function ChatInput({ onSubmit, disabled }: ChatInputProps) {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading || disabled) return

    const message = input.trim()
    setInput("")
    setIsLoading(true)

    try {
      await onSubmit(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 border-t border-border dark:border-slate-700"
    >
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about insurance, policies, coverage..."
        disabled={isLoading || disabled}
        className="flex-1 min-h-[44px]"
      />
      <Button
        type="submit"
        disabled={!input.trim() || isLoading || disabled}
        size="lg"
        className="min-h-[44px]"
      >
        {isLoading ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
      </Button>
    </form>
  )
}
