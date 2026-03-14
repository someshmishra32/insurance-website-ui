/**
 * Insurance Knowledge Base
 * Comprehensive information about insurance products for quick AI responses
 * Used by AI Assistant to provide accurate, immediate answers
 */

export const INSURANCE_KNOWLEDGE_BASE = {
  // ============================================
  // TERM LIFE INSURANCE
  // ============================================
  termLife: {
    overview: `Term Life Insurance is a pure protection plan that provides coverage for a fixed period (typically 10-30 years). It's the most affordable and straightforward life insurance option available.`,
    
    keyFeatures: [
      "Pure protection - pays death benefit only if policyholder dies during term",
      "Affordable premiums - lowest cost among all life insurance options",
      "High coverage - typically 50 lakhs to 2 crores or more",
      "No cash value if you survive the term - benefit is pure protection",
      "Simple claims process - benefits paid to nominees",
      "Level or increasing coverage options available",
    ],
    
    benefits: [
      "Financial security for family in case of unexpected death",
      "Covers outstanding debts (home loan, personal loan, etc.)",
      "Ensures children's education fund",
      "Maintains spouse's lifestyle and expenses",
      "Career protection for dependent family members",
      "Peace of mind at affordable cost",
    ],
    
    whoBest: "Earning members with financial dependents, young families, breadwinners with loans",
    
    coverageNeeded: "10-15 times your annual income + outstanding loans and liabilities",
    
    premiumFactors: [
      "Age (younger age = lower premium)",
      "Health status and medical history",
      "Coverage amount (higher coverage = higher premium)",
      "Term period (longer term = higher premium)",
      "Lifestyle factors (smoking, occupation, hobbies)",
      "Family history of serious diseases",
    ],
    
    costRange: "₹20-50/day for ₹1 crore coverage (age 30, 20-year term)",
    
    tax: "Premiums are not tax-deductible. Claim amount is TAX-FREE for nominees under Section 10(10D).",
    
    commonQuestions: {
      "Is term insurance worth it?": "Yes. It's the most cost-effective way to provide financial security to your family. At ₹500-1000/month, you can get ₹1 crore coverage.",
      "What happens if I don't die during the term?": "No refund. This is the tradeoff for affordable premiums. Consider Return of Premium (ROP) term plans if you want premiums back.",
      "When should I buy term insurance?": "As early as possible. Premiums are lowest in your 20s-30s and increase with age. Lock in rates now.",
      "Can I increase coverage later?": "Yes, most plans allow increasing coverage without re-medical underwriting (within limits).",
      "Do I need medicals for term insurance?": "Depends on coverage amount. Below 40 lakhs: usually no medicals. Above: medical tests may be required.",
    },
  },

  // ============================================
  // HEALTH INSURANCE
  // ============================================
  healthInsurance: {
    overview: `Health Insurance covers medical expenses during hospitalization, outpatient treatment, and preventive care. It protects your savings from unexpected health emergencies.`,
    
    types: {
      individual: "Coverage for one person only. Best if you're single or want separate policies.",
      familyFloater: "Covers entire family (spouse, children, parents) under one policy. Most cost-effective and popular option.",
      seniorCitizen: "Specialized plans for 60+ years with pre-existing disease coverage and no waiting periods.",
      groupHealth: "Employer-sponsored plans. Usually covers entire family at no/minimal cost to employee.",
      critical: "Covers specific critical illnesses (cancer, heart attack, stroke, etc.). Not treatment cost but lump sum payment.",
    },
    
    keyFeatures: [
      "Covers hospitalization expenses - room rent, doctor fees, medicines, surgery",
      "Covers diagnostics - pathology, radiology, imaging tests",
      "Covers pre/post hospitalization - 15 days pre and 30-60 days post admission",
      "Covers OPD (outpatient) - some plans cover doctor visits, prescriptions",
      "Covers maternity - pregnancy, delivery, childbirth complications",
      "Covers preventive care - annual health checkups, vaccinations",
      "No-claim bonus - increased sum insured if no claims made",
    ],
    
    coverage: {
      sumInsured: "Amount covered per year. Options: ₹3L, ₹5L, ₹10L, ₹15L, ₹25L+",
      roomRent: "Daily room rent limit. No capping = best, 5% = limited. Check this carefully!",
      prePost: "Days covered before and after hospitalization. 30/60 days is standard.",
      opd: "Outpatient treatment - doctor visits, diagnostic tests done outside hospital.",
      coverage: "Covers nearly all diseases. Some waiting periods apply.",
      exclusions: "Cosmetic surgery, dental, obesity treatment usually excluded.",
    },
    
    benefits: [
      "Protection from high medical bills (hospitals cost ₹1-5 lakhs per stay)",
      "Cashless treatment at network hospitals",
      "No waiting period for accidents",
      "Family coverage under one policy (cost-effective)",
      "Prevent savings depletion due to medical emergencies",
      "Annual renewal with no-claim bonus increases",
      "Covers children's vaccines, delivery, preventive checkups",
    ],
    
    whoBest: "All individuals and families with income. Essential for families with kids, elderly parents.",
    
    sumInsuredNeeded: "₹5-10L for individuals, ₹10-15L for families, ₹25L+ for high-income families",
    
    premiumFactors: [
      "Age of members (increases with age)",
      "Sum insured selected",
      "Plan type (family floater less expensive than individual)",
      "Pre-existing disease coverage",
      "No-claim bonus impact",
      "Geographic location",
    ],
    
    costRange: "₹150-300/month per person for ₹5L family floater",
    
    waitingPeriods: {
      accident: "0 days (immediate coverage for accidents)",
      priorConditions: "1-4 years (varies by insurer)",
      maternity: "9 months for coverage, 2 years for delivery",
      specific: "30 days for most other conditions",
    },
    
    claims: {
      process: [
        "Intimate insurance company before admission",
        "Provide policy number and ID at network hospital",
        "Hospital handles paperwork (cashless)",
        "Settlement done directly with hospital",
        "Or claim reimbursement within 7-10 days after discharge",
      ],
      documents: ["Policy document", "Hospital discharge summary", "Itemized bills", "Prescriptions", "Medical reports"],
      timeline: "7-10 days for paperless claims, 15-20 days for paper claims",
    },

    commonQuestions: {
      "Is family floater or individual better?": "Family floater costs less per person but can't be split. Individual plans offer more flexibility.",
      "What room rent cap should I choose?": "Avoid capped room rent. Choose unlimited or 5% of sum insured. Room rent at good hospitals is ₹5000-15000/day.",
      "Do I need health insurance if employer provides?": "Yes! Employer coverage ends if you change jobs. Personal policy provides continuity and additional safety.",
      "Can I buy additional health insurance?": "Yes! Multiple policies from different insurers all pay their coverage amounts (not duplicated).",
      "What happens to no-claim bonus?": "Accumulated bonuses increase your sum insured every year. ₹5L becomes ₹6L, ₹7L, ₹10L+ over time.",
    },
  },

  // ============================================
  // CRITICAL ILLNESS INSURANCE
  // ============================================
  criticalIllness: {
    overview: `Critical Illness Insurance pays a lump sum if you're diagnosed with specified serious illnesses like cancer, heart attack, stroke, organ failure, etc. Covers income loss during recovery.`,
    
    keyFeatures: [
      "Lump sum payment - not reimbursement, but fixed amount on diagnosis",
      "Covers serious illnesses - cancer, heart attack, stroke, kidney failure, etc.",
      "Supplements health insurance - covers costs beyond hospital bills",
      "Covers income loss - helps pay rent, bills while recovering",
      "Covers treatment not covered by health insurance - advanced therapies, rehabilitation",
      "Affordable as standalone or rider - rider is cheapest option",
    ],
    
    coveredIllnesses: [
      "Cancer (early and advanced stages)",
      "Heart attack (major)",
      "Stroke with permanent disability",
      "Organ failure (kidney, liver, pancreas requiring transplant)",
      "Coronary artery bypass surgery",
      "Open heart surgery",
      "Benign brain tumor",
      "Coma (for 30+ days)",
      "Aorta graft surgery",
      "Multiple sclerosis",
    ],
    
    benefits: [
      "Lump sum received immediately upon diagnosis - no waiting",
      "Use money for any purpose - treatments, bills, lost income",
      "Early stage coverage - pays for some illnesses at early stage (better prognosis)",
      "Supplement to health insurance - covers treatment costs beyond hospital stay",
      "Covers rehabilitation and recovery period",
      "Peace of mind for major health risks",
      "Can be taken as rider (add-on) to health or life insurance",
    ],
    
    whoBest: "Family breadwinners, self-employed professionals, young people (eligible from age 18-65)",
    
    coverageAmount: "₹25L to ₹1 crore+ based on income",
    
    premiumFactors: [
      "Age (younger = lower premium)",
      "Coverage amount",
      "Health status",
      "Family history of serious illness",
      "As standalone policy vs rider",
    ],
    
    costRange: "₹40-100/month for ₹25L coverage (age 30, standalone). Cheaper as rider.",
    
    claimProcess: [
      "Medical diagnosis confirmed by doctor",
      "Submit policy and medical reports to insurer",
      "Insurer reviews diagnosis against policy",
      "Approval and lump sum paid within 15-30 days",
      "Money can be used for any purpose",
    ],

    commonQuestions: {
      "Should I buy standalone or as rider?": "Rider is cheaper but limited. Standalone offers longer coverage and higher amounts. Ideally have rider + standalone combo.",
      "Is early-stage cancer covered?": "Yes, specific plans cover early-stage cancers like early-stage breast, cervical cancer at low cost.",
      "Can I claim both health insurance and critical illness?": "Yes! Health insurance covers hospital bills, critical illness covers income loss and additional treatments.",
      "What's the difference from term insurance?": "Term insurance pays if you die. Critical illness pays if you get seriously ill and survive (when you need it most!).",
    },
  },

  // ============================================
  // PENSION & INVESTMENT PLANS
  // ============================================
  pensionInvestmentPlans: {
    overview: `Pension and Investment plans combine insurance protection with investment returns. They help build wealth and ensure financial security in retirement.`,
    
    types: {
      nps: "National Pension System. Government-backed, tax-efficient, flexible retirement planning. Best for regular savings.",
      ulip: "Unit Linked Insurance Plan. Life insurance + investment in stocks/bonds. Higher risk, higher return potential.",
      wholeLfe: "Whole Life Insurance. Lifelong coverage with guaranteed returns. Expensive premium but permanent protection.",
      endowment: "Endowment plans. Fixed term (10-20 years) with maturity benefit. Returns guaranteed or profit on maturity.",
      lic: "LIC plans. Government insurer, guaranteed returns, slowest growth, lifetime pension options available.",
    },
    
    benefits: [
      "Retirement income secured - regular pension after retirement",
      "Wealth creation - investment component builds corpus over time",
      "Life protection - insurance cover during accumulation period",
      "Tax benefits - up to ₹1.5L per year under Section 80C (NPS, ULIP, endowment)",
      "Guaranteed returns - most plans offer minimum guaranteed amount",
      "Legacy planning - pass on wealth to children",
      "Inflation protection - increasing annuity options available",
    ],

    npsDetails: {
      overview: "Government-backed retirement scheme. Most flexible and tax-efficient option.",
      benefit: "60% withdrawal at retirement. 40% converted to annuity (monthly pension). Excellent for self-employed.",
      taxBenefit: "Up to ₹2L deduction under 80CCD",
      charges: "Lowest charges among all pension plans (0.3-0.5% per year)",
      return: "Market-linked returns (6-8% annually on average)",
      who: "Self-employed, business owners, high-income individuals, those wanting maximum control",
    },

    ulipDetails: {
      overview: "Insurance + Investment combined. You choose how much to invest in stocks vs bonds.",
      benefit: "High growth potential if invested in stocks. Flexibility to switch allocations.",
      charges: "Higher charges initially (1-3% annually), but premium allocation charges dropping",
      return: "Market-dependent returns (8-12%+ possible in bull markets)",
      liquidity: "Can surrender/withdraw after 5 years penalty-free",
      who: "Young professionals, those with 15-20 year horizon, comfortable with market risk",
    },

    endowmentDetails: {
      overview: "Fixed return plans. Guaranteed maturity benefit. Bonus if plan performs well.",
      benefit: "Guaranteed returns (4-5% annually). Insurance protection. Secure option.",
      drawback: "Lower returns than ULIPs. Expensive premiums. Less flexibility.",
      lock: "Cannot withdraw before maturity (15-20 years)",
      who: "Conservative investors, those wanting guaranteed returns, traditional savers",
    },

    taxBenefits: [
      "Premiums paid - up to ₹1.5L per year deductible under Section 80C",
      "Maturity amount - FREE from tax (Section 10(10D)) if survival benefits",
      "Annuity/Pension - partly taxable, partly exemption based on investment",
      "NPS additional deduction - ₹2L more under 80CCD for NPS",
    ],

    commonQuestions: {
      "Should I prioritize pension planning?": "Yes! Start as early as possible. Compound growth over 30-40 years is powerful.",
      "NPS vs traditional endowment - which is better?": "NPS is better for most. Better returns (6-8%), lower charges, more flexible, more tax benefits.",
      "Can I have multiple pension plans?": "Yes! Ideally: NPS (core) + ULIP/endowment (supplementary) + health insurance + term insurance.",
      "Are pension fund returns guaranteed?": "NPS/ULIP - market-linked, not guaranteed. Endowment/traditional - guaranteed returns specified.",
      "What's monthly pension at retirement?": "Depends on accumulated corpus. Example: ₹50L corpus → ~₹20-25K monthly pension at 60s.",
    },
  },

  // ============================================
  // COST CONSIDERATIONS
  // ============================================
  costConsiderations: {
    overview: "Understanding insurance costs and payment options helps you choose the right coverage at affordable premiums.",
    
    premiumFactors: {
      age: "PRIMARY FACTOR - Younger = lower premium. Premium roughly doubles every 10 years.",
      health: "Non-smokers pay 30-40% less. No health issues = better rates. Diabetes/BP add 20-50%.",
      lifestyle: "Occupation (hazardous = higher), habits (smoking = +30-40%), sports (risky = higher).",
      coverage: "Higher sum insured = higher premium. Doubling coverage = roughly 1.5-2x premium.",
      term: "Longer term period = higher premium. 10-year term cheaper than 20-year term.",
      gender: "Women usually pay 10-15% less than men (except health insurance where similar)",
    },

    paymentModes: {
      monthly: "Most affordable - break down large premiums. Great for cash flow management.",
      quarterly: "Little discount vs monthly. Take if you prefer less frequent payments.",
      halfYearly: "2-3% discount vs monthly. Good balance between cost and convenience.",
      annual: "5-8% discount vs monthly. Best option if you can afford lump sum.",
    },

    cost: [
      "Group discounts - 10-15% if 4+ family members buy same plan",
      "Online purchase - 5-10% discount vs agent purchase",
      "No-claim bonus - accumulated bonus increases sum insured",
      "Loyalty discounts - existing customers get renewal discounts",
      "Health checkup bonus - free checkups if claim-free",
      "Quit smoking bonus - 10% discount if you quit smoking",
    ],

    affordability: {
      budgetBased: "Decide budget (e.g., ₹500/month). Buy what fits: term insurance + basic health.",
      priorityOrder: "1) Term insurance (cheapest protection). 2) Health insurance (must-have). 3) Critical illness (add-on). 4) Pension (long-term).",
      combination: "Smart combination: ₹1000/month = ₹50L term (₹50) + ₹5L health (₹150) + critical illness rider (₹300) + leftover for savings/investments.",
    },

    costModels: {
      groupPolicies: "Buy through employer (best rates). Family floater for mutual/relative groups.",
      onlineDirectory: "Direct online purchase beats agents by 5-10% and is transparent.",
      comparison: "Use insurance calculators to compare 3-5 plans side by side.",
      reviews: "Check customer reviews on IRDAI website or InsAssessment portal.",
    },

    commonQuestions: {
      "Is insurance expensive?": "No! ₹500-1000/month gets you ₹1cr term + ₹5L health insurance. Essential expense, not luxury.",
      "Why does premium increase with age?": "Medical claims increase with age due to health risks. Insurance pools risk, younger provide cheaper rates.",
      "Should I buy multiple policies?": "Yes! Multiple health policies don't duplicate benefits. All claims are valid from all insurers.",
      "Any way to reduce premiums?": "Healthy lifestyle (exercise, no smoking), annual health checkups, bundle policies, buy online, pay annually.",
    },
  },

  // ============================================
  // CLAIMS PROCESS
  // ============================================
  claimsProcess: {
    generalSteps: [
      "Notify insurer as early as possible (preferably before major expense/event)",
      "Collect all required documents (policy, bills, medical reports, ID proofs)",
      "Submit claim form (available on website or from insurer) with documents",
      "Provide additional information if requested by insurer",
      "Insurer verifies authenticity of claim documents",
      "Claim approved and payment made by EFT/cheque/bank transfer",
      "Keep copy of claim acknowledgment for records",
    ],

    healthInsuranceClaim: {
      cashless: [
        "Inform insurer/TPA at least 2-3 days before planned hospitalization",
        "Provide policy number to hospital admission desk",
        "Hospital contacts insurer directly for pre-authorization",
        "Insurer approves covered amount",
        "You pay only co-pay/non-covered expenses, insurer pays hospital directly",
        "Discharge and leave (no waiting for reimbursement)",
      ],
      reimbursement: [
        "Get discharged and pay hospital in full",
        "Collect original bills, discharge summary, medical reports",
        "Fill claim form from insurer website",
        "Submit documents to insurer within 30 days (ideally within 1 week)",
        "Insurer processes and transfers approved amount to your bank",
        "Typical timeline: 7-15 days for paperless claims",
      ],
      requiredDocs: [
        "Original itemized hospital bill with breakdown",
        "Discharge summary from doctor",
        "Doctor's prescription",
        "Medical test reports (pathology/radiology)",
        "Proof of payment (receipt/cancelled cheque)",
        "Patient ID copy (Aadhaar/PAN/DL)",
        "Claim form duly signed",
      ],
    },

    lifeInsuranceClaim: {
      docs: [
        "Death certificate (issued by hospital/municipality)",
        "Policy document original",
        "Claim form (from insurer or website)",
        "Nominee ID proof and address proof",
        "Last premium receipt",
        "Medical reports if death due to illness",
      ],
      timeline: "Usually settled within 15-30 days after document submission",
      nominee: "Policy amount paid entirely to nominee (or legal heirs if no nominee)",
    },

    commonIssues: {
      rejection: "Pre-existing disease within waiting period. Non-disclosure during proposal. Accident claim with exclusion.",
      reduction: "Pre-existing conditions may have higher deductible or reduced coverage within waiting period.",
      delay: "Missing documents. Incomplete patient details. Insurer verification pending.",
      tips: "Keep all bills organized. File claim early. Maintain policy documents safely. Take photos of bills.",
    },

    timelines: {
      acknowledgment: "2-3 days after submission",
      processing: "7-15 days for paperless, 20-30 days for paper claims",
      approval: "Another 2-5 days after processing",
      payment: "1-3 days after approval via bank transfer",
      total: "Usually 30-45 days end-to-end from claim filing",
    },

    commonQuestions: {
      "Do I need to pay and then claim reimbursement?": "No! Use cashless facility where possible. Notify insurer before hospitalization.",
      "What if bill exceeds sum insured?": "You pay excess. Insurer covers up to sum insured. Hence increase sum insured planning.",
      "Can family claim term insurance after death?": "Yes, nominee or legal heirs can claim. Policy amount is paid in full (tax-free).",
      "Do I need original bills for claims?": "Insurer prefers originals, but accepts color photocopies now. Keep originals safe for 6 years.",
    },
  },

  // ============================================
  // POLICY COMPARISONS
  // ============================================
  policyComparisons: {
    termVsWholeLlife: {
      term: {
        cost: "₹500-1500/month for ₹1cr coverage",
        protection: "10-40 years (you choose)",
        benefit: "Death benefit only (usually lump sum)",
        cashValue: "No cash value",
        bestFor: "Affordable protection for limited period",
      },
      wholeLlife: {
        cost: "₹5000-15000/month for ₹1cr coverage",
        protection: "Lifetime until death",
        benefit: "Maturity amount + death benefit",
        cashValue: "Builds cash value after 10-15 years",
        bestFor: "Legacy building, those with high income",
      },
      verdict: "Most people need term. Whole life for legacy planning only if affordable.",
    },

    healthVsCritical: {
      health: {
        covers: "Hospital bills, treatments, diagnostics",
        benefit: "Reimbursement of expenses",
        limit: "Up to sum insured per year",
        waiting: "Pre-existing disease waiting period",
      },
      critical: {
        covers: "Specified serious illnesses (cancer, MI, stroke, etc.)",
        benefit: "Lump sum on diagnosis",
        limit: "Fixed amount, not spent on bills",
        waiting: "Usually 90 days",
      },
      verdict: "Both needed! Health covers treatment costs. Critical illness covers lost income + extra treatments.",
    },

    ulipVsEndowment: {
      ulip: {
        growth: "Market-linked (6-12%+ possible)",
        control: "You choose allocation (stocks/bonds)",
        charges: "1-3% annually",
        flexibility: "Can withdraw/surrender after 5 years",
        returns: "Higher but unpredictable",
      },
      endowment: {
        growth: "Guaranteed returns (4-5%)",
        control: "Insurer decides allocation",
        charges: "Built into low returns",
        flexibility: "Locked for policy term",
        returns: "Lower but guaranteed",
      },
      verdict: "ULIP if 15+ year horizon and comfortable with risk. Endowment if need guaranteed returns.",
    },

    npsVsLIC: {
      nps: {
        return: "Market-linked (6-8% average)",
        tax: "↑₹2L deduction under 80CCD",
        charges: "Lowest (0.3-0.5%)",
        flexibility: "Choose asset allocation, withdraw 60% at retirement",
        pension: "Remaining 40% converted to pension",
        best: "Self-employed, high earners, those with long time horizon",
      },
      lic: {
        return: "Guaranteed (4-5%)",
        tax: "₹1.5L deduction under 80C",
        charges: "High (1-2% disguised in low returns)",
        flexibility: "Locked till maturity",
        pension: "Provides various pension options",
        best: "Conservative investors, those preferring guaranteed returns",
      },
      verdict: "NPS is superior for most. LIC for those wanting maximum safety and guaranteed returns.",
    },

    familyFloaterVsIndividual: {
      floater: {
        cost: "₹150-250/month for ₹5L coverage for family of 4",
        coverage: "Shared ₹5L for entire family",
        addon: "All family members covered with same benefits",
        best: "Large families, budget-conscious",
      },
      individual: {
        cost: "₹100-150/month per person per ₹5L",
        coverage: "Separate ₹5L for each person",
        flexibility: "Can customize per person, higher for self, lower for kids",
        best: "High-income families wanting individual customization",
      },
      verdict: "Family floater for most. Individual if 3+ earners or kids need separate coverage.",
    },
  },

  // ============================================
  // GENERAL INSURANCE TIPS
  // ============================================
  generalTips: [
    "✅ Buy early - Premiums lock at your current age. At 30: ₹500/month. At 40: ₹1500/month.",
    "✅ Buy more coverage - Better to over-insure than under-insure. Worse case: unused coverage.",
    "✅ Be honest in proposal - Non-disclosure can lead to claim rejection.",
    "✅ Review annually - Life changes (marriage, kids, promotion) warrant policy reviews.",
    "✅ Combine products - Ideally: term + health + critical illness + pension.",
    "✅ Don't lapse policies - Reactivation requires medical tests. Keep paying premiums.",
    "✅ Use calculators - Our tools give personalized recommendations based on your needs.",
    "✅ Compare before buying - Use online platforms to compare 5-10 plans side by side.",
    "✅ Read policy document - Understand coverage, exclusions, waiting periods before buying.",
    "✅ Check network hospitals - For health insurance, verify network quality in your city.",
    "✅ Maintain records - Keep all bills, receipts, policies, documents organized for 6+ years.",
    "✅ Update nominees - Ensure nominees are correctly listed and addresses updated.",
  ],

  // ============================================
  // QUICK ANSWERS (Used for instant responses)
  // ============================================
  quickAnswers: {
    "what is term insurance": "Term life insurance provides pure death protection for a fixed period (10-40 years). Cheapest life insurance option (₹500-1500/month for ₹1cr). Best for families with dependents.",
    
    "is term insurance worth it": "Absolutely! For ₹500/month you get ₹1cr coverage. That's almost unlimited ROI if needed. Essential for any earning member with dependents.",
    
    "what is health insurance": "Health insurance covers medical expenses during hospitalization, treatment, and diagnostics. Protects your savings from medical emergencies. Recommend ₹5-10L sum insured.",
    
    "should i buy health insurance": "Absolutely essential! Medical emergencies can cost ₹2-5 lakhs easily. Health insurance at ₹200-300/month saves you from bankruptcy.",
    
    "what is critical illness insurance": "Lump sum payment upon diagnosis of serious illnesses (cancer, heart attack, stroke). Supplements health insurance. Covers lost income during recovery. ₹25-50L coverage recommended.",
    
    "should i buy critical illness insurance": "If you're main earner: YES. Lost income during illness is bigger risk than treatment cost. Cheapest rider option: ₹40-80/month for ₹25L.",
    
    "how much insurance do i need": "Term insurance: 10-15x annual income + debts. Health: ₹5-10L sum insured. Critical illness: ₹25-50L. Pension: 25x annual expenses for 30 years retirement.",
    
    "what is nps": "National Pension System. Government-backed retirement plan. Market-linked returns (6-8%). Lower charges. Up to ₹2L tax deduction. Withdraw 60% at retirement, convert 40% to pension.",
    
    "which insurance plan is best": "No single best plan. Ideal combination: Term insurance (₹500/month) + Health insurance (₹200/month) + Critical illness rider (₹100/month) + NPS (₹2000/month) = ₹2800/month for complete protection.",
    
    "how much life insurance premium": "Depends on age, health, term length, sum insured. Young (25-30): ₹500-1000/month for ₹1cr, 20-year term. Find exact rate using age/health/coverage on our calculator.",
    
    "explain claim process": "Health insurance: Notify before admission → Cashless treatment at network hospital. Life insurance: Submit death certificate + policy → Claim settled in 15-30 days. Keep all bills/documents organized.",
    
    "what is endowment insurance": "Fixed-term life plan (15-20 years) with guaranteed maturity benefit. Insurance + savings combined. Lower returns (4-5%) but guaranteed. Higher premium than term insurance.",
    
    "should i take ulip or endowment": "ULIP for young people (15+ years), market returns possible (8-12%). Endowment for conservative investors, guaranteed returns (4-5%). ULIP usually better if you can wait 20+ years.",
  },
}

/**
 * Get relevant insurance information for AI response
 */
export function getRelevantKnowledge(topic: string): string {
  const lower = topic.toLowerCase()
  
  if (lower.includes("term") || lower.includes("life")) {
    return JSON.stringify(INSURANCE_KNOWLEDGE_BASE.termLife)
  }
  if (lower.includes("health")) {
    return JSON.stringify(INSURANCE_KNOWLEDGE_BASE.healthInsurance)
  }
  if (lower.includes("critical") || lower.includes("illness")) {
    return JSON.stringify(INSURANCE_KNOWLEDGE_BASE.criticalIllness)
  }
  if (lower.includes("pension") || lower.includes("retirement") || lower.includes("nps")) {
    return JSON.stringify(INSURANCE_KNOWLEDGE_BASE.pensionInvestmentPlans)
  }
  if (lower.includes("cost") || lower.includes("premium") || lower.includes("price")) {
    return JSON.stringify(INSURANCE_KNOWLEDGE_BASE.costConsiderations)
  }
  if (lower.includes("claim")) {
    return JSON.stringify(INSURANCE_KNOWLEDGE_BASE.claimsProcess)
  }
  if (lower.includes("compare") || lower.includes("comparison") || lower.includes("difference")) {
    return JSON.stringify(INSURANCE_KNOWLEDGE_BASE.policyComparisons)
  }
  
  return ""
}
