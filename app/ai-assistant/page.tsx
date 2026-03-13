"use client"

import { useRef } from "react"
import { AIChatAssistant, type AIChatAssistantHandle } from "@/components/ai-chat-assistant"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Shield } from "lucide-react"

const POPULAR_QUESTIONS = [
  "What is the difference between term and whole life insurance?",
  "How much health insurance coverage do I need?",
  "What is a critical illness rider?",
  "How do I file an insurance claim?",
  "What does co-payment mean?",
  "What is the claim settlement process timeline?",
]

export default function AIAssistantPage() {
  const chatRef = useRef<AIChatAssistantHandle>(null)

  const handleQuestionClick = async (question: string) => {
    // Scroll to chat component
    const chatElement = document.querySelector('[data-chat-assistant]')
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    // Send the question to the AI Assistant
    if (chatRef.current) {
      try {
        await chatRef.current.sendMessage(question)
      } catch (error) {
        console.error("Failed to send question:", error)
      }
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 dark:from-slate-900 to-background pt-8 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
            <Zap className="w-3 h-3 mr-1" />
            AI-Powered Guidance
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Insurance AI Assistant
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant answers about insurance products, coverage, costs, and claims. Our AI
            advisor provides personalized recommendations based on your needs.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border border-primary/20 bg-primary/5 dark:bg-primary/10">
            <CardContent className="pt-6">
              <CheckCircle className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold text-sm">Instant Answers</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Get responses in seconds, 24/7 availability
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/20 bg-primary/5 dark:bg-primary/10">
            <CardContent className="pt-6">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold text-sm">Expert Knowledge</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Trained on IRDAI guidelines and best practices
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/20 bg-primary/5 dark:bg-primary/10">
            <CardContent className="pt-6">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold text-sm">Download Chat</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Save conversations for future reference
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chat Component */}
        <div data-chat-assistant>
          <AIChatAssistant ref={chatRef} />
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POPULAR_QUESTIONS.map((question, i) => (
              <Card
                key={i}
                onClick={() => handleQuestionClick(question)}
                className="cursor-pointer hover:shadow-md hover:border-primary/50 transition-all duration-200 dark:hover:bg-slate-800 active:scale-95"
              >
                <CardContent className="pt-6">
                  <p className="text-sm text-foreground hover:text-primary transition-colors">
                    {question}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-900">
          <CardContent className="pt-8">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Need Expert Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              While our AI assistant provides helpful information, for personalized recommendations
              and policy-specific details, we recommend consulting with our insurance experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Schedule Expert Consultation
              </button>
              <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium">
                WhatsApp Support
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
