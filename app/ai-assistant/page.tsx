"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

const faqDatabase = {
  "what is term insurance":
    "Term insurance is pure life cover without savings. It pays your nominees if you pass away during the policy term. It's the most affordable life insurance option, ideal for income replacement and debt protection.",
  "difference between term and ulip":
    "Term insurance offers pure death cover at low cost. ULIP combines insurance + investment, with higher premiums. For pure protection, term is better. ULIPs are suitable only if you want both insurance and market-linked returns.",
  "how much health insurance":
    "For metro cities: ₹10-15L minimum. Tier 1 cities: ₹7-10L. Tier 2/3: ₹5-7L. Consider family size, age, and medical history. Add super top-up for high coverage at lower cost.",
  "claim process":
    "Life insurance: Notify insurer → Submit death certificate, policy docs, claim form → Investigation (if needed) → Settlement in 30-90 days. Health: Cashless at network hospitals or reimbursement at any hospital.",
  "what is co-pay":
    "Co-pay means you pay a percentage of every claim. E.g., 20% co-pay on ₹1L claim means you pay ₹20K, insurer pays ₹80K. Policies without co-pay are better but may cost slightly more.",
  "room rent limit":
    "Many policies limit room rent to 1-2% of sum insured. This can trigger proportionate deductions on entire bill if you choose expensive room. Look for policies with no room rent capping.",
  "pre-existing disease":
    "PED (Pre-Existing Disease) waiting period is 2-4 years in most health policies. Conditions you had before buying policy aren't covered initially. Some insurers offer lower waiting periods.",
  rider:
    "A rider is an add-on benefit to base policy. Common riders: Critical illness, accidental death, waiver of premium, hospital cash. Riders enhance coverage at additional cost.",
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Array<{ role: string; text: string }>>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    // Find best match from FAQ database
    for (const [key, answer] of Object.entries(faqDatabase)) {
      if (lowerQuery.includes(key) || key.includes(lowerQuery)) {
        return answer
      }
    }

    // Default response
    return "I apologize, but I don't have specific information about that. For detailed guidance, I recommend scheduling a consultation with our insurance expert who can provide personalized advice for your situation."
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { role: "user", text: userMessage }])
    setInput("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(userMessage)
      setMessages((prev) => [...prev, { role: "assistant", text: answer }])
      setIsTyping(false)
    }, 1000)
  }

  const quickQuestions = [
    "What is term insurance?",
    "Difference between term and ULIP",
    "How much health insurance do I need?",
    "What is co-pay?",
    "Explain room rent limit",
    "What is a rider?",
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6 shadow-sm">
                <Bot className="h-10 w-10 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
                Insurance <span className="text-primary">FAQ Assistant | Life Cover Now</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed max-w-xl">
                Get instant, accurate answers to your most pressing insurance questions. Our AI helps you demystify complex terms and hidden clauses.
              </p>
              <div className="mb-10 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 font-medium">Term Insurance</Badge>
                <Badge variant="secondary" className="px-3 py-1 font-medium">Health Insurance</Badge>
                <Badge variant="secondary" className="px-3 py-1 font-medium">Claims Process</Badge>
                <Badge variant="secondary" className="px-3 py-1 font-medium">Policy Comparison</Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Ask a Question
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/faq">Browse All FAQs</a>
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/ai_assistant_hero.png"
                  alt="AI Insurance Assistant"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section id="chat-section" className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Ask Insurance Questions</CardTitle>
                <CardDescription>Get answers to common insurance questions instantly</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Disclaimer */}
                <div className="mb-4 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm">
                  <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-amber-800">
                    <strong>Important:</strong> This assistant provides educational information only. Always consult a
                    licensed advisor before purchasing insurance.
                  </p>
                </div>

                {/* Messages */}
                <div className="mb-4 h-[400px] space-y-4 overflow-y-auto rounded-lg border p-4">
                  {messages.length === 0 && (
                    <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                      <Bot className="mb-4 h-12 w-12 opacity-50" />
                      <p className="mb-2 font-semibold">Start a conversation</p>
                      <p className="text-sm">Try asking:</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• "What's the difference between term and ULIP?"</li>
                        <li>• "How much health insurance do I need?"</li>
                        <li>• "Explain co-pay and room rent limits"</li>
                      </ul>
                    </div>
                  )}

                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "assistant" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Bot className="h-4 w-4" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                      >
                        <p className="whitespace-pre-wrap text-sm">{message.text}</p>
                      </div>
                      {message.role === "user" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                          <span className="text-xs font-semibold">You</span>
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                        <div className="flex gap-1">
                          <div
                            className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question about insurance..."
                    className="flex-1"
                  />
                  <Button type="submit" disabled={!input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>

                {/* Sample Questions */}
                <div className="mt-4">
                  <p className="mb-2 text-sm font-semibold">Quick Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((q) => (
                      <Button
                        key={q}
                        variant="outline"
                        size="sm"
                        type="button"
                        onClick={() => {
                          setInput(q)
                          setMessages((prev) => [...prev, { role: "user", text: q }])
                          setIsTyping(true)
                          setTimeout(() => {
                            setMessages((prev) => [...prev, { role: "assistant", text: findAnswer(q) }])
                            setIsTyping(false)
                          }, 1000)
                        }}
                      >
                        {q}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
