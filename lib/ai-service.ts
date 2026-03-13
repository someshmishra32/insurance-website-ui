import { GoogleGenerativeAI } from "@google/generative-ai"
import { INSURANCE_KNOWLEDGE_BASE, getRelevantKnowledge } from "./insurance-knowledge-base"

/**
 * AI Service Layer
 * Handles communication with Gemini (preferred) or OpenAI API
 * Used for: Chat responses, recommendations, policy analysis
 * Enhanced with comprehensive insurance knowledge base for instant accurate answers
 */

const BASE_SYSTEM_PROMPT = `You are an expert Insurance Advisor AI for an Indian insurance company specializing in Term Life, Health, Critical Illness, and Pension plans. You provide helpful, accurate, and honest guidance.

YOUR EXPERTISE:
- Term Life Insurance: Pure protection plans, affordable, 10-40 year terms
- Health Insurance: Individual, family floater, senior citizen plans
- Critical Illness Insurance: Lump sum on diagnosis of serious illnesses
- Pension & Investment Plans: NPS, ULIP, endowment, whole life insurance
- Claims Process: Cashless to reimbursement, documentation, timelines
- Policy Comparisons: Term vs Whole Life, Health vs Critical, ULIP vs Endowment, NPS vs LIC
- Cost Considerations: Premium factors, payment modes, affordability
- Coverage Planning: How much insurance is needed, for whom, when

RESPONSE GUIDELINES:
1. Provide accurate, detailed information from knowledge base (your responses are researched and verified)
2. Use bullet points, short summaries, and clear formatting
3. Include specific cost examples when discussing premiums
4. Always mention relevant waiting periods, exclusions, limitations
5. Provide coverage recommendations based on user situation
6. Explain "why" behind recommendations, not just "what"
7. Use simple Hindi-English blend for clarity
8. For complex queries: summarize key points, then explain details
9. Always comply with IRDAI regulations and guidelines
10. If unsure about specifics: clearly state "This needs expert verification" and suggest consultation

RESPONSE FORMAT (2-3 paragraphs for simple questions, structured for complex ones):
- Question summary (restate to confirm understanding)
- Direct answer with key points
- Examples with numbers/costs if applicable
- Next steps or related resources`

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

class AIService {
  private apiKey: string
  private model: string
  private geminiApiKey: string
  private geminiModel: string

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || ""
    this.model = process.env.OPENAI_MODEL || "gpt-4o-mini"
    this.geminiApiKey = process.env.GEMINI_API_KEY || ""
    this.geminiModel = (process.env.GEMINI_MODEL || "gemini-1.5-flash").split('#')[0].trim()

    console.log("[AI Service] Initialized:", {
      openaiModel: this.model,
      openaiApiKeyPresent: !!this.apiKey,
      geminiModel: this.geminiModel,
      geminiApiKeyPresent: !!this.geminiApiKey,
    })
  }

  async chat(messages: ChatMessage[]): Promise<string> {
    // DEMO MODE: Using demo responses instead of real API
    const USE_DEMO_MODE = false

    if (USE_DEMO_MODE) {
      // Always use local demo responses
      return this.getDemoResponse(messages[messages.length - 1]?.content || "")
    }

    // Prefer Gemini if configured
    if (this.geminiApiKey) {
      try {
        return await this.callGemini(messages)
      } catch (error) {
        console.error("[AI Service] Gemini call failed, falling back to OpenAI or demo:", error)
      }
    }

    // Fallback to OpenAI if configured
    if (!this.apiKey) {
      // No real API configured at all; use demo responses
      return this.getDemoResponse(messages[messages.length - 1]?.content || "")
    }

    try {
      console.log("[AI Service] Calling OpenAI API with model:", this.model)

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: "system", content: BASE_SYSTEM_PROMPT },
            ...messages,
          ],
          temperature: 0.7,
          max_tokens: 500,
          top_p: 0.9,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        console.error("[AI Service] OpenAI API Error:", {
          status: response.status,
          statusText: response.statusText,
          error: error,
        })

        // If quota, rate limits, or temporary issues occur, gracefully fall back
        // to the local demo responses so the chat keeps working.
        if (response.status === 401) {
          console.warn("[AI Service] Invalid API key. Falling back to demo responses.")
          return this.getDemoResponse(messages[messages.length - 1]?.content || "")
        }
        if (response.status === 429) {
          console.warn("[AI Service] Rate limit or quota exceeded. Falling back to demo responses.")
          return this.getDemoResponse(messages[messages.length - 1]?.content || "")
        }
        if (response.status === 500) {
          console.warn("[AI Service] OpenAI API unavailable. Falling back to demo responses.")
          return this.getDemoResponse(messages[messages.length - 1]?.content || "")
        }

        // For other errors, still throw so the API route can surface details.
        throw new Error(error.error?.message || `OpenAI API error: ${response.statusText}`)
      }

      const data = await response.json()
      console.log("[AI Service] Got response from OpenAI")
      return data.choices[0]?.message?.content || "Sorry, I couldn't generate a response."
    } catch (error) {
      console.error("[AI Service] Error:", error)
      throw error
    }
  }

  private async callGemini(messages: ChatMessage[]): Promise<string> {
    const genAI = new GoogleGenerativeAI(this.geminiApiKey)
    const model = genAI.getGenerativeModel({ model: this.geminiModel })

    const conversationText =
      BASE_SYSTEM_PROMPT +
      "\n\n" +
      messages
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n")

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: conversationText }],
        },
      ],
    })

    const text = result.response.text?.()
    return text && text.trim().length > 0
      ? text
      : "Sorry, I couldn't generate a response right now."
  }

  private getDemoResponse(userMessage: string): string {
    // Demo responses using insurance knowledge base for quick and accurate answers
    const message = userMessage.toLowerCase()

    // IMPORTANT: Check specific topics FIRST, then quick answers
    // This ensures detailed responses for specific questions

    // Critical Illness Insurance - Check FIRST (before general health/illness checks)
    if (message.includes("critical illness") || message.includes("critical illness rider") || message.includes("critical illness insurance")) {
      const kb = INSURANCE_KNOWLEDGE_BASE.criticalIllness
      return `**Critical Illness Insurance** pays a lump sum when diagnosed with serious illnesses like cancer, heart attack, or stroke. Unlike health insurance, you get money as per diagnosis, not just for treatment costs.

**Covers Illnesses:**
${kb.coveredIllnesses.slice(0, 6).map(i => `• ${i}`).join("\n")}

**Key Benefits:**
${kb.benefits.slice(0, 3).map(b => `• ${b}`).join("\n")}

**Coverage Amount:** ${kb.coverageAmount}
**Cost Range:** ${kb.costRange}
**Claim Timeline:** 15-30 days from diagnosis

**Tip:** Buy as a rider (add-on) to health insurance for ₹40-80/month. Complements health insurance perfectly - health covers bills, critical illness covers income loss.

Want to know how critical illness compares to health insurance, or need help with coverage planning?`
    }

    // Pension & Investment Plans - Check FIRST (before general pension checks)
    if (message.includes("pension plan") || message.includes("retirement plan") || message.includes("nps") || message.includes("ulip") || message.includes("endowment")) {
      const kb = INSURANCE_KNOWLEDGE_BASE.pensionInvestmentPlans
      const comparison = INSURANCE_KNOWLEDGE_BASE.policyComparisons
      return `**Pension & Investment Plans** - Building wealth for retirement:

**Plan Types:**
• **NPS (National Pension System):** Market-linked, lowest charges (0.3-0.5%), max tax benefits
• **ULIP:** Insurance + Market investment, higher growth potential
• **Endowment:** Guaranteed returns (4-5%), fixed term
• **LIC Plans:** Government insurer, guaranteed, traditional

**Key Benefits:**
${kb.benefits.slice(0, 4).map(b => `• ${b}`).join("\n")}

**Tax Benefits:**
${kb.taxBenefits.slice(0, 3).map(t => `• ${t}`).join("\n")}

**Recommended Approach:**
• **Core:** NPS with ₹2L/month = ~₹1cr corpus in 35 years
• **Supplement:** ULIP/Endowment for additional growth
• **Goal:** 25x annual expenses as target corpus

**Example:** ₹50,000/month expenses → Need ₹1.5 cr corpus for 30-year retirement

Ready to start retirement planning? I can estimate how much you need based on your age and retirement timeline!`
    }

    // Term Life Insurance - Comprehensive
    if (message.includes("term") && message.includes("life")) {
      const kb = INSURANCE_KNOWLEDGE_BASE.termLife
      return `**Term Life Insurance** is a pure protection plan that provides death benefits for a fixed period (10-40 years). It's the most affordable life insurance option.

**Key Features:**
${kb.keyFeatures.slice(0, 3).map(f => `• ${f}`).join("\n")}

**Cost:** ${kb.costRange}
**Coverage Needed:** ${kb.coverageNeeded}
**Best For:** ${kb.whoBest}

**Premium depends on:**
${kb.premiumFactors.slice(0, 4).map(f => `• ${f}`).join("\n")}

**Tax Benefit:** Premiums are NOT deductible, but claim amount is TAX-FREE for nominees.

Would you like to know more about coverage calculation, comparing plans, or specific features?`
    }

    // Health Insurance - Comprehensive
    if (message.includes("health") && message.includes("insurance")) {
      const kb = INSURANCE_KNOWLEDGE_BASE.healthInsurance
      return `**Health Insurance** protects you from medical emergencies and covers hospitalization, treatments, and diagnostics.

**Types Available:**
${Object.entries(kb.types).slice(0, 3).map(([k, v]) => `• **${k.charAt(0).toUpperCase() + k.slice(1)}**: ${v}`).join("\n")}

**Key Coverage:**
${Object.entries(kb.coverage).slice(0, 4).map(([k, v]) => `• **${k}**: ${v}`).join("\n")}

**Recommended Coverage:** ${kb.sumInsuredNeeded}
**Cost Range:** ${kb.costRange}
**Waiting Periods:** Accidents = 0 days, Pre-existing = 1-4 years

**Claim Timeline:** 7-10 days for paperless, 15-20 days for regular claims.

Need help choosing a plan or understanding a specific feature?`
    }

    // Cost / Premium questions
    if (message.includes("cost") || message.includes("premium") || message.includes("price")) {
      const kb = INSURANCE_KNOWLEDGE_BASE.costConsiderations
      return `**Insurance Premium Factors** - What affects how much you pay:

**PRIMARY FACTORS:**
${Object.entries(kb.premiumFactors).slice(0, 4).map(([k, v]) => `• **${k}**: ${v}`).join("\n")}

**Payment Options:**
${Object.entries(kb.paymentModes).slice(0, 3).map(([k, v]) => `• **${k}**: ${v}`).join("\n")}

**Cost Reduction Tips:**
${kb.cost.slice(0, 3).map((d: string) => `• ${d}`).join("\n")}

**Budget Combination:** For ₹1000/month you can get: Term insurance (₹500/month) + Health insurance (₹300/month) + Critical illness rider (₹150/month) + Reserve (₹50/month)

Remember: Insurance is an investment in peace of mind. Better to buy more coverage than regret later.

What type of insurance are you looking to buy? I can give exact cost estimates.`
    }

    // Claims Process
    if (message.includes("claim")) {
      const kb = INSURANCE_KNOWLEDGE_BASE.claimsProcess
      return `**Insurance Claims Process** - How to claim and get faster settlements:

**General Steps:**
${kb.generalSteps.slice(0, 4).map(s => `${kb.generalSteps.indexOf(s) + 1}. ${s}`).join("\n")}

**Health Insurance Claims:**
• **Cashless:** Notify insurer before admission → Hospital handles rest → Pay only co-pay
• **Reimbursement:** Discharge → Collect bills → Submit to insurer → Get money within 7-15 days

**Required Documents:**
${kb.healthInsuranceClaim.requiredDocs.slice(0, 4).map(d => `• ${d}`).join("\n")}

**Timeline:** 7-10 days for paperless, 20-30 days for paper claims

**Pro Tips:**
• Notify insurer BEFORE major expenses when possible
• Use cashless at network hospitals to avoid payment hassle
• Keep all bills organized right from admission
• Submit documents within 30 days for faster processing

Which type of claim are you making - health or life insurance?`
    }

    // Comparisons
    if (message.includes("compare") || message.includes("difference") || message.includes("vs")) {
      const kb = INSURANCE_KNOWLEDGE_BASE.policyComparisons
      return `**Insurance Plan Comparisons** - Choosing what's best for you:

**Common Comparisons:**

**TERM vs WHOLE LIFE:**
• Term: ${kb.termVsWholeLlife.term.cost} for ${kb.termVsWholeLlife.term.protection} coverage
• Whole Life: ${kb.termVsWholeLlife.wholeLlife.cost} for ${kb.termVsWholeLlife.wholeLlife.protection} coverage
• **Verdict:** ${kb.termVsWholeLlife.verdict}

**HEALTH vs CRITICAL ILLNESS:**
• Health insurance: Covers actual hospital bills
• Critical illness: Lump sum for specified illnesses
• **Verdict:** ${kb.healthVsCritical.verdict}

**ULIP vs ENDOWMENT:**
• ULIP: Market-linked (8-12% possible), ${kb.ulipVsEndowment.ulip.charges} charges
• Endowment: Guaranteed (4-5%), higher premium
• **Verdict:** ${kb.ulipVsEndowment.verdict}

**FAMILY FLOATER vs INDIVIDUAL:**
• Family: ₹200-300/month for entire family (cost-effective)
• Individual: More flexible, higher cost per person
• **Verdict:** ${kb.familyFloaterVsIndividual.verdict}

**Ideal Insurance Combination:**
${INSURANCE_KNOWLEDGE_BASE.generalTips.slice(5, 8).join("\n")}

What comparison would help you most with your decision?`
    }

    // Default helpful response
    return `Thank you for your question! I'm your **Insurance AI Assistant** trained on comprehensive insurance knowledge. I can help with:

📚 **Knowledge Areas:**
• **Term Life Insurance** - Affordable protection plans, coverage planning, cost estimation
• **Health Insurance** - Individual, family, senior citizen plans, coverage selection
• **Critical Illness Insurance** - Serious illness coverage, lump sum benefits
• **Pension & Investments** - NPS, ULIP, endowment plans, retirement planning
• **Cost Considerations** - Premium factors, affordability, discounts
• **Claims Process** - How to file claims, required documents, timelines
• **Policy Comparisons** - Choosing the right plan for your needs

**Quick Examples I Can Answer:**
1. "What is term insurance and how much should I buy?"
2. "How much health insurance coverage do I need?"
3. "What's the difference between ULIP and endowment?"
4. "How do I file a health insurance claim?"
5. "Is critical illness insurance worth buying?"

**What would you like to know about insurance?**`
  }
}

export const aiService = new AIService()
