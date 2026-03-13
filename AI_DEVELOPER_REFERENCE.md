# Insurance AI Assistant - Developer Reference Guide

**Quick Reference for Development & Maintenance**

---

## File Structure

```
lib/
├── ai-service.ts                    Main AI service (updated with knowledge base)
├── insurance-knowledge-base.ts      ← NEW: Comprehensive knowledge base
└── [other services...]

components/
├── ai-chat-assistant.tsx            ← FIXED: Bug fixes implemented
├── chat-message.tsx
├── chat-input.tsx
└── [other components...]
```

---

## How to Use the Knowledge Base

### **1. Import the Knowledge Base**

```typescript
import { INSURANCE_KNOWLEDGE_BASE, getRelevantKnowledge } from "@/lib/insurance-knowledge-base"
```

### **2. Access Knowledge Areas**

```typescript
// Term Life Insurance
const termLife = INSURANCE_KNOWLEDGE_BASE.termLife
console.log(termLife.overview)           // String description
console.log(termLife.keyFeatures)        // Array of features
console.log(termLife.costRange)          // "₹500-1500/month..."

// Health Insurance
const health = INSURANCE_KNOWLEDGE_BASE.healthInsurance
console.log(health.types)                // Object with plan types
console.log(health.benefits)             // Array of benefits
console.log(health.claims.process)       // Array of claim steps

// Get all quick answers
const answers = INSURANCE_KNOWLEDGE_BASE.quickAnswers
console.log(answers["what is term insurance"])  // Instant answer string
```

### **3. Get Relevant Knowledge for a Topic**

```typescript
// Automatically extract relevant knowledge for a user question
const topic = "term insurance premium"
const knowledge = getRelevantKnowledge(topic)
// Returns stringified knowledge base for that topic
```

### **4. Structure of Knowledge Areas**

```typescript
// Each knowledge area typically has:
{
  overview: string,                    // What is it?
  keyFeatures: string[],              // Main features
  benefits: string[],                 // Why buy it?
  whoBest: string,                    // Recommended for
  coverageNeeded: string,             // How much to buy
  premiumFactors: string[],           // What affects cost
  costRange: string,                  // Price estimate
  claims: {                           // Claim process
    process: string[],
    documents: string[],
    timeline: string
  },
  commonQuestions: {                  // FAQs
    [question]: answer
  }
}
```

---

## How to Add New Content

### **Add a New Insurance Product**

```typescript
// In insurance-knowledge-base.ts, add to INSURANCE_KNOWLEDGE_BASE object:

newProduct: {
  overview: `Description of the product...`,
  
  keyFeatures: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
  
  benefits: [
    "Benefit 1",
    "Benefit 2",
  ],
  
  whoBest: "Target audience",
  coverageNeeded: "₹X lakh to ₹Y lakh",
  premiumFactors: [
    "Factor 1",
    "Factor 2",
  ],
  
  costRange: "₹X to ₹Y per month",
  
  claims: {
    process: ["Step 1", "Step 2"],
    documents: ["Doc 1", "Doc 2"],
    timeline: "X days typically",
  },
  
  commonQuestions: {
    "Is this worth it?": "Yes because...",
    "Who should buy?": "Anyone who...",
  },
}
```

### **Add a New Comparison**

```typescript
// In policyComparisons object:

yourComparison: {
  product1: {
    cost: "₹X/month",
    feature: "Description",
    bestFor: "Target audience",
  },
  product2: {
    cost: "₹Y/month",
    feature: "Description",
    bestFor: "Target audience",
  },
  verdict: "Product1 is better because..."
}
```

### **Add New Quick Answers**

```typescript
// In quickAnswers object:

quickAnswers: {
  "existing answer": "...",
  
  // Add new one:
  "what is your new product": "Quick answer to this question explaining the product in 1-2 sentences."
}
```

---

## How to Improve AI Responses

### **1. Enhance System Prompt**

```typescript
// In ai-service.ts, modify BASE_SYSTEM_PROMPT:
const BASE_SYSTEM_PROMPT = `
You are an expert Insurance Advisor...
YOUR EXPERTISE:
- Your products
- What you offer

RESPONSE GUIDELINES:
1. Be specific
2. Include examples
3. List benefits
4. Format clearly
`
```

### **2. Update Demo Response Logic**

```typescript
// In getDemoResponse() function:
if (message.includes("your-topic")) {
  const kb = INSURANCE_KNOWLEDGE_BASE.yourTopic  // or policyComparisons
  return `**Your Topic Title**

YOUR CONTENT

${kb.yourField.slice(0, 3).map(f => `• ${f}`).join("\n")}

Next step or call to action.`
}
```

### **3. Add Topic Detection**

```typescript
// In getDemoResponse at the top:
// Check quick answers lookup first
for (const [key, answer] of Object.entries(INSURANCE_KNOWLEDGE_BASE.quickAnswers)) {
  if (message.includes(key.toLowerCase().split(" ")[0])) {
    return answer  // Instant match!
  }
}
```

---

## Testing Knowledge Base Changes

### **Manual Testing Steps**

1. **Make changes to `insurance-knowledge-base.ts`**

2. **Run TypeScript check:**
   ```bash
   npx tsc --noEmit
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```

4. **Test in browser:**
   - Go to `/ai-assistant`
   - Ask a question about your changes
   - Verify response includes your new content

5. **Check console:**
   - Any errors?
   - Response time acceptable?

### **Automated Testing**

```bash
# Check syntax
npm run lint

# Check TypeScript
npm run build

# Test specific file
npx tsc lib/insurance-knowledge-base.ts --noEmit
```

---

## Common Patterns

### **Cost Example Pattern**

```typescript
costRange: "₹500-1500/month for ₹1cr coverage (age 30, 20-year term)"
// Format: ₹LOW-HIGH/PERIOD for COVERAGE (ASSUMPTIONS)
```

### **Premium Factor Pattern**

```typescript
premiumFactors: [
  "Age (younger = lower premium)",
  "Health status (no diseases = lower premium)",
  "Coverage amount (higher = higher premium)",
  "Term period (longer = higher premium)",
]
```

### **Timeline Pattern**

```typescript
timelines: {
  acknowledgment: "2-3 days after submission",
  processing: "7-15 days for paperless, 20-30 days for paper",
  approval: "Another 2-5 days after processing",
  payment: "1-3 days after approval via bank transfer",
  total: "Usually 30-45 days end-to-end",
}
```

### **Comparison Pattern**

```typescript
termVsWholeLlife: {
  term: {
    cost: "₹X/month",
    protection: "10-40 years",
    benefit: "Death benefit only",
    bestFor: "Affordable protection",
  },
  wholeLlife: {
    cost: "₹Y/month",
    protection: "Lifetime until death",
    benefit: "Maturity amount + death benefit",
    bestFor: "Legacy building",
  },
  verdict: "Most people need term. Whole life only if income allows."
}
```

---

## Response Quality Checklist

When adding or updating content, ensure:

- ✅ **Accurate:** Information matches IRDAI regulations
- ✅ **Current:** Costs and tax benefits are up-to-date (2024-2025)
- ✅ **Clear:** Use simple language, avoid jargon
- ✅ **Actionable:** Include specific numbers and examples
- ✅ **Honest:** Mention limitations and exclusions
- ✅ **Accessible:** Works on mobile devices

---

## Debugging AI Responses

### **If responses are generic:**
1. Check if knowledge base is imported correctly
2. Verify topic detection in `getDemoResponse()`
3. Ensure knowledge base data is formatted as object/array
4. Test with exact question keywords

### **If responses are too long:**
1. Use `.slice(0, 3)` to limit array items
2. Keep explanations to 2-3 paragraphs
3. Let user ask follow-up questions

### **If responses seem incomplete:**
1. Check if all required fields are populated
2. Verify formatting with markdown
3. Test on actual chat interface (not just code)
4. Check browser console for errors

---

## Performance Considerations

### **Knowledge Base Size:**
- Current: ~3000 lines
- Acceptable: Up to 10,000 lines
- If exceeding: Split into multiple files and lazy-load

### **Response Time:**
- Demo mode: <100ms (local data)
- API mode: 1-3 seconds (network dependent)
- Acceptable threshold: <5 seconds

### **Memory Usage:**
- Knowledge base: <1MB
- Loaded in memory: Always (bundle included)
- Cache headers: Set by Next.js automatically

---

## Common Tasks

### **Task: Add a New Insurance Plan**

```typescript
// 1. Add to knowledge base
const newPlan = {
  overview: "...",
  keyFeatures: [...],
  costs: "...",
  ...
}

// 2. Update quickAnswers if needed
quickAnswers: {
  "what is [new plan]": "Quick description..."
}

// 3. Update demo response handling
if (message.includes("[keyword]")) {
  const kb = INSURANCE_KNOWLEDGE_BASE.newPlan
  return `...${kb.overview}...`
}

// 4. Test with npm run dev
```

### **Task: Improve a Specific Response**

```typescript
// 1. Find the section in getDemoResponse()
if (message.includes("health")) {
  // Current response here
}

// 2. Enhance with more knowledge base data
{
  const kb = INSURANCE_KNOWLEDGE_BASE.healthInsurance
  return `...${kb.benefits}...${kb.commonQuestions}...`
}

// 3. Test and verify better response
```

### **Task: Add New Comparison**

```typescript
// 1. Add to policyComparisons object
yourComparison: {
  option1: { ... },
  option2: { ... },
  verdict: "..."
}

// 2. Add topic detection
if (message.includes("compare")) {
  const kb = INSURANCE_KNOWLEDGE_BASE.policyComparisons
  return `...${JSON.stringify(kb.yourComparison)}...`
}

// 3. Test "Compare X vs Y?" questions
```

---

## File Modification Checklist

Before committing changes:

```
□ Ran lint: npm run lint
□ No TypeScript errors: npm run build
□ Tested locally: npm run dev
□ Verified in browser: /ai-assistant page
□ Checked on mobile
□ Response is under 5 seconds
□ No console errors
□ Formatting looks good
□ All links work (if any)
□ Documentation updated
```

---

## Quick Reference Commands

```bash
# Check syntax and style
npm run lint

# Check types and build
npm run build

# Run development server
npm run dev

# Test specific file
npx tsc lib/insurance-knowledge-base.ts --noEmit
```

---

## Support

**For issues or questions:**
1. Check error messages in browser console
2. Verify data structure matches patterns
3. Test with minimal example
4. Check if similar feature exists (reuse pattern)
5. Review existing documentation

**For new features:**
1. Update both knowledge base AND demo responses
2. Test thoroughly
3. Update documentation
4. Get code review

---

**Keep this file updated as schema or patterns change!**

