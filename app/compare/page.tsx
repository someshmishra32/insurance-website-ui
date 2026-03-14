"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Plus, X, Download, Info, Filter, TrendingUp, ChevronDown, Star, Clock, Zap, Heart, MapPin } from "lucide-react"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScheduleCallButton } from "@/components/schedule-call-button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Helper function to handle brochure download
const handleBrochureDownload = (brochureUrl: string, companyName: string) => {
  if (!brochureUrl || brochureUrl.includes('example.com')) {
    alert(`${companyName} brochure link is not yet available. Please request it via WhatsApp or contact us for more information.`)
    return
  }

  // Open brochure in new tab
  window.open(brochureUrl, '_blank')
}

// Enhanced data with detailed metrics
const INSURANCE_COMPANIES = [
  // TERM PLANS
  {
    id: "hdfc-life-term",
    company: "HDFC Life",
    logoDomain: "hdfclife.com",
    type: "term",
    established: 2000,
    claimSettlement: 99.68,
    avgApprovalTime: "15 mins",
    premiumRange: "₹8,456 - ₹45,000",
    coverage: "₹25 Lakh - ₹5 Crore+",
    taxBenefit: "80C - ₹1.5L/year",
    hospitalNetwork: 9500,
    plans: [
      {
        id: "hdfc-click2protect-term",
        name: "Click 2 Protect Super",
        premium: "₹8,456/year",
        coverage: "₹1 Crore",
        term: "30 years",
        medicalExam: "No (up to ₹50L)",
        waitingPeriod: "30 days",
        features: ["Life Cover + Death Benefit", "Return of Premium Option", "Critical Illness Rider", "Accidental Death Benefit"],
        advantages: ["No medical exam up to ₹50L", "Highest CSR 99.68%", "Online approval in 15 mins"],
        brochure: "https://www.hdfclife.com/content/dam/hdfclifeterm/brochures/C2P3DPlus_Brochure.pdf",
        rating: 4.8,
        detailedFeatures: {
          terminalIllness: "Included (Accelerated payout up to ₹2Cr)",
          waiverOfPremium: "Covers 60 Critical Illnesses & Disability",
          riders: "Accidental Death, Income Benefit, Critical Illness",
          specialFeature: "Life Stage Benefit (Increase cover at marriage/birth)"
        }
      },
    ],
  },
  {
    id: "icici-pru-term",
    company: "ICICI Prudential",
    logoDomain: "iciciprulife.com",
    type: "term",
    established: 1999,
    claimSettlement: 99.17,
    avgApprovalTime: "20 mins",
    premiumRange: "₹7,812 - ₹42,000",
    coverage: "₹25 Lakh - ₹2 Crore",
    taxBenefit: "80C - ₹1.5L/year",
    hospitalNetwork: 8800,
    plans: [
      {
        id: "icici-iprotect-term",
        name: "iProtect Smart",
        premium: "₹7,812/year",
        coverage: "₹1 Crore",
        term: "30 years",
        medicalExam: "No (up to ₹50L)",
        waitingPeriod: "30 days",
        features: ["Flexible Payout Options", "Waiver of Premium", "Income Benefit Option", "Terminal Illness Cover"],
        advantages: ["Family protection rider", "28-day waiting waiver", "High trust brand"],
        brochure: "https://www.iciciprulife.com/content/dam/icicipru/brochures/iProtect-Smart-Brochure.pdf",
        rating: 4.7,
        detailedFeatures: {
          terminalIllness: "100% Payout on diagnosis (Base SA)",
          waiverOfPremium: "Waiver on Accidental Permanent Disability",
          riders: "Covers 34 Critical Illnesses in base plan",
          specialFeature: "Smart Exit (Premium refund after certain years)"
        }
      },
    ],
  },
  {
    id: "max-life-term",
    company: "Max Life (Axis Bank)",
    logoDomain: "maxlife.in",
    type: "term",
    established: 2000,
    claimSettlement: 99.65,
    avgApprovalTime: "10 mins",
    premiumRange: "₹8,203 - ₹43,500",
    coverage: "₹25 Lakh - ₹1.5 Crore",
    taxBenefit: "80C - ₹1.5L/year",
    hospitalNetwork: 7500,
    plans: [
      {
        id: "max-smart-term",
        name: "Smart Secure Plus",
        premium: "₹8,203/year",
        coverage: "₹1 Crore",
        term: "30 years",
        medicalExam: "No (up to ₹40L)",
        waitingPeriod: "30 days",
        features: ["Monthly Income Option", "Terminal Illness Benefit", "Accidental TPD", "Critical Illness Rider"],
        advantages: ["Fastest 10-min approval", "99.65% Claim Settlement", "Special 2025 AI underwriting"],
        brochure: "https://www.maxlifeinsurance.com/content/dam/corporate/brochures/Smart-Secure-Plus-Brochure.pdf",
        rating: 4.9,
        detailedFeatures: {
          terminalIllness: "Accelerated payout up to ₹1 Crore",
          waiverOfPremium: "Covers 11 CI & 4 Disability types",
          riders: "Critical Illness (up to 64 illnesses)",
          specialFeature: "Cover Continuance (Premium deferral allowed)"
        }
      },
    ],
  },
  {
    id: "tata-aia-term",
    company: "Tata AIA Life",
    logoDomain: "tataaia.com",
    type: "term",
    established: 2001,
    claimSettlement: 99.41,
    avgApprovalTime: "12 mins",
    premiumRange: "₹8,100 - ₹44,000",
    coverage: "₹25 Lakh - ₹2 Crore+",
    taxBenefit: "80C - ₹1.5L/year",
    hospitalNetwork: 7000,
    plans: [
      {
        id: "tata-mpp-term",
        name: "Maha Raksha Supreme",
        premium: "₹8,100/year",
        coverage: "₹1 Crore",
        term: "35 years",
        medicalExam: "Tele-medical possible",
        waitingPeriod: "30 days",
        features: ["Life Cover + Life Stage Plus", "Accelerator Rider", "Return of Premium", "Payout on TPD"],
        advantages: ["Tata Group Trust", "Flexible premium options", "99.41% Settlement"],
        brochure: "https://tataaia.com/content/dam/tataaia/brochures/Maha_Raksha_Supreme_Brochure.pdf",
        rating: 4.8,
        detailedFeatures: {
          terminalIllness: "50% Accelerated Sum Assured payout",
          waiverOfPremium: "Comprehensive WOP on CI & TPD",
          riders: "Accidental Disability & Death Riders",
          specialFeature: "Whole Life Cover (Option up to 100 years)"
        }
      },
    ],
  },
  {
    id: "bajaj-life-term",
    company: "Bajaj Allianz Life",
    logoDomain: "bajajallianzlife.com",
    type: "term",
    established: 2001,
    claimSettlement: 99.29,
    avgApprovalTime: "18 mins",
    premiumRange: "₹7,950 - ₹41,000",
    coverage: "₹25 Lakh - ₹1.5 Crore",
    taxBenefit: "80C - ₹1.5L/year",
    hospitalNetwork: 6500,
    plans: [
      {
        id: "bajaj-smart-term",
        name: "Smart Protect Goal",
        premium: "₹7,950/year",
        coverage: "₹1 Crore",
        term: "30 years",
        medicalExam: "No (up to ₹30L)",
        waitingPeriod: "30 days",
        features: ["Return of Premium", "Child Education Extra", "Joint Life Option", "Add-on Critical Illness"],
        advantages: ["Comprehensive 55 CI cover", "Fast claim processing", "Joint life option"],
        brochure: "https://www.bajajallianzlife.com/content/dam/balic/brochures/Smart-Protect-Goal-Brochure.pdf",
        rating: 4.6,
        detailedFeatures: {
          terminalIllness: "Included in base plan",
          waiverOfPremium: "Available as add-on for 55 illnesses",
          riders: "Child Education & Accidental Cover",
          specialFeature: "Joint Life Option (Cover for both spouses)"
        }
      },
    ],
  },
  {
    id: "aditya-birla-term",
    company: "Aditya Birla Sun Life",
    logoDomain: "adityabirlasunlifeinsurance.com",
    type: "term",
    established: 2000,
    claimSettlement: 98.74,
    avgApprovalTime: "25 mins",
    premiumRange: "₹8,300 - ₹46,000",
    coverage: "₹25 Lakh - ₹2 Crore",
    taxBenefit: "80C - ₹1.5L/year",
    hospitalNetwork: 6000,
    plans: [
      {
        id: "aditya-digishield-term",
        name: "DigiShield Plan",
        premium: "₹8,300/year",
        coverage: "₹1 Crore",
        term: "30 years",
        medicalExam: "Standard requirement",
        waitingPeriod: "30 days",
        features: ["Multiple plan options", "Enhanced life cover", "Terminal illness benefit", "Waiver of premium"],
        advantages: ["10 customized variants", "Birla Group legacy", "Survival benefits"],
        brochure: "https://lifeinsurance.adityabirlacapital.com/content/dam/adityabirla/lifeinsurance/brochures/DigiShield_Brochure.pdf",
        rating: 4.5,
        detailedFeatures: {
          terminalIllness: "Acceleration based on life expectancy",
          waiverOfPremium: "Standard CI & TPD waiver",
          riders: "10 customized variants available",
          specialFeature: "Survival Benefit (Monthly income option)"
        }
      },
    ],
  },

  // HEALTH PLANS
  {
    id: "niva-bupa-health",
    company: "Niva Bupa",
    logoDomain: "nivabupa.com",
    type: "health",
    established: 2009,
    claimSettlement: 92.4,
    avgApprovalTime: "20 mins",
    premiumRange: "₹3,000 - ₹28,000",
    coverage: "₹3 Lakh - ₹1 Crore",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 10400,
    plans: [
      {
        id: "niva-restore-health",
        name: "ReAssure 2.0",
        premium: "₹5,500/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Age based",
        waitingPeriod: "30 days (pre-existing 2 years)",
        features: ["Lock-the-clock premium", "ReAssure benefit", "Live healthy discount", "Mental health"],
        advantages: ["Best for families", "Wellness benefits", "Unlimited restoration"],
        brochure: "https://www.nivabupa.com/content/dam/nivabupa/pdf/product-brochures/ReAssure-Brochure.pdf",
        rating: 4.7,
        detailedFeatures: {
          ncb: "Booster+ (Carry forward up to 10x SI)",
          restoration: "ReAssure+ (Unlimited, even for same illness)",
          roomRent: "No Limit (Any room category)",
          consumables: "Included via Claim Safeguard Plus"
        }
      },
    ],
  },
  {
    id: "hdfc-ergo-health",
    company: "HDFC ERGO",
    logoDomain: "hdfcergo.com",
    type: "health",
    established: 2002,
    claimSettlement: 98.85,
    avgApprovalTime: "30 mins",
    premiumRange: "₹3,200 - ₹30,000",
    coverage: "₹3 Lakh - ₹1 Crore",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 13000,
    plans: [
      {
        id: "hdfc-ergo-optima-health",
        name: "Optima Secure",
        premium: "₹5,800/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Standard",
        waitingPeriod: "30 days",
        features: ["Secure Benefit", "Plus Benefit", "Restore Benefit", "Protect Benefit"],
        advantages: ["4x coverage in 1 year", "No sub-limits", "98.85% CSR"],
        brochure: "https://www.hdfcergo.com/content/dam/hdfcergo/documents/product-brochures/Optima-Secure-Brochure.pdf",
        rating: 4.9,
        detailedFeatures: {
          ncb: "Multiplier Benefit (50% per year up to 100%)",
          restoration: "100% Automatic restoration once a year",
          roomRent: "No Room Rent Limit",
          consumables: "Included under Protect Benefit"
        }
      },
    ],
  },
  {
    id: "icici-lombard-health",
    company: "ICICI Lombard",
    logoDomain: "icicilombard.com",
    type: "health",
    established: 2001,
    claimSettlement: 98.45,
    avgApprovalTime: "25 mins",
    premiumRange: "₹3,100 - ₹29,000",
    coverage: "₹3 Lakh - ₹1 Crore",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 10800,
    plans: [
      {
        id: "icici-anytime-health",
        name: "Health AdvantEdge",
        premium: "₹5,400/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Not required <45y",
        waitingPeriod: "30 days",
        features: ["OPD Coverage", "Unlimited Restoration", "Free health checkup", "AYUSH treatment"],
        advantages: ["Largest private network", "Fastest cashless approval", "Wellness discounts"],
        brochure: "https://www.icicilombard.com/docs/default-source/product-documents/health-insurance/health-care-brochure.pdf",
        rating: 4.8,
        detailedFeatures: {
          ncb: "Cumulative Bonus (20% per year)",
          restoration: "Unlimited restoration (via add-on)",
          roomRent: "Any Room category allowed",
          consumables: "Covered via BeFit add-on"
        }
      },
    ],
  },
  {
    id: "digit-health",
    company: "Go Digit",
    logoDomain: "godigit.com",
    type: "health",
    established: 2017,
    claimSettlement: 97.0,
    avgApprovalTime: "15 mins",
    premiumRange: "₹2,800 - ₹25,000",
    coverage: "₹3 Lakh - ₹50 Lakh",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 9000,
    plans: [
      {
        id: "digit-complete-health",
        name: "Health Plus",
        premium: "₹4,900/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Usually not required",
        waitingPeriod: "30 days",
        features: ["Zero co-payment", "No room rent sub-limit", "Road ambulance", "Psychiatric benefit"],
        advantages: ["Paperless process", "Young & tech-savvy", "Transparent claims"],
        brochure: "https://www.godigit.com/content/dam/godigit/directportal/en/brochures/health-insurance-brochure.pdf",
        rating: 4.6,
        detailedFeatures: {
          ncb: "Initial discount + Cumulative bonus",
          restoration: "100% Restoration benefit",
          roomRent: "No room rent sub-limits",
          consumables: "Available as add-on"
        }
      },
    ],
  },
  {
    id: "tata-aig-health",
    company: "Tata AIG",
    logoDomain: "tataaig.com",
    type: "health",
    established: 2001,
    claimSettlement: 95.43,
    avgApprovalTime: "30 mins",
    premiumRange: "₹3,300 - ₹32,000",
    coverage: "₹3 Lakh - ₹1 Crore",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 11000,
    plans: [
      {
        id: "tata-mediprime-health",
        name: "MediCare Premier",
        premium: "₹5,900/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Age based",
        waitingPeriod: "30 days",
        features: ["Consumables cover", "Global cover", "Maternity benefit", "Restoration benefit"],
        advantages: ["Comprehensive TATA cover", "High sub-limit flexibility", "Global medical benefit"],
        brochure: "https://www.tataaig.com/content/dam/tataaig/documents/brochures/Health_Medicare_Brochure.pdf",
        rating: 4.7,
        detailedFeatures: {
          ncb: "Cumulative Bonus (50% max)",
          restoration: "Automatic restoration",
          roomRent: "Single Private Room covered",
          consumables: "Inbuilt Consumables cover"
        }
      },
    ],
  },
  {
    id: "care-health-ins",
    company: "Care Health",
    logoDomain: "careinsurance.com",
    type: "health",
    established: 2011,
    claimSettlement: 99.95,
    avgApprovalTime: "25 mins",
    premiumRange: "₹2,500 - ₹24,000",
    coverage: "₹3 Lakh - ₹2 Crore",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 24800,
    plans: [
      {
        id: "care-supreme-health",
        name: "Care Supreme",
        premium: "₹5,100/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Age based",
        waitingPeriod: "30 days",
        features: ["Cumulative bonus", "No claim bonus", "Health checkup", "Annual check-up"],
        advantages: ["Largest hospital network", "99.95% CSR for health", "Value for money"],
        brochure: "https://www.careinsurance.com/content/dam/careinsurance/documents/brochure/Care-Supreme-Brochure.pdf",
        rating: 4.5,
        detailedFeatures: {
          ncb: "Up to 50% year-on-year bonus",
          restoration: "Every claim restoration",
          roomRent: "Single Private Room",
          consumables: "Available as optional cover"
        }
      },
    ],
  },
  {
    id: "manipal-cigna-health",
    company: "ManipalCigna",
    logoDomain: "manipalcigna.com",
    type: "health",
    established: 2012,
    claimSettlement: 99.88,
    avgApprovalTime: "35 mins",
    premiumRange: "₹3,400 - ₹35,000",
    coverage: "₹3 Lakh - ₹1 Crore",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 8500,
    plans: [
      {
        id: "manipal-prohealth",
        name: "ProHealth Prime",
        premium: "₹6,200/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Standard",
        waitingPeriod: "30 days",
        features: ["Switch off benefit", "Cashless OPD", "Unlimited restoration", "Critical illness cover"],
        advantages: ["Multi-year discounts", "Global emergency cover", "99.88% Settlement"],
        brochure: "https://www.manipalcigna.com/content/dam/manipal-cigna/documents/brochures/ProHealth-Prime-Brochure.pdf",
        rating: 4.6,
        detailedFeatures: {
          ncb: "Guaranteed NCB (even with claims)",
          restoration: "Unlimited Restoration Benefit",
          roomRent: "No limit on room categories",
          consumables: "In-built Non-medical cover"
        }
      },
    ],
  },
  {
    id: "bajaj-gen-health",
    company: "Bajaj Allianz General",
    logoDomain: "bajajallianz.com",
    type: "health",
    established: 2001,
    claimSettlement: 98.56,
    avgApprovalTime: "20 mins",
    premiumRange: "₹3,100 - ₹28,000",
    coverage: "₹3 Lakh - ₹50 Lakh",
    taxBenefit: "80D - ₹15,000/year",
    hospitalNetwork: 18400,
    plans: [
      {
        id: "bajaj-health-guard",
        name: "Health Guard Plus",
        premium: "₹5,300/year",
        coverage: "₹5 Lakh",
        term: "1 year",
        medicalExam: "Not required <45y",
        waitingPeriod: "30 days",
        features: ["Bariatric surgery", "Air ambulance", "Daily cash benefit", "Recovery benefit"],
        advantages: ["Trusted brand", "Wide 18k+ network", "Fast settlement"],
        brochure: "https://www.bajajallianz.com/content/dam/balic/brochures/Health-Guard-Plus-Brochure.pdf",
        rating: 4.7,
        detailedFeatures: {
          ncb: "Cumulative Bonus up to 100%",
          restoration: "Available as an add-on",
          roomRent: "No limit on room category",
          consumables: "Available as add-on"
        }
      },
    ],
  },

  // INVESTMENT PLANS
  {
    id: "hdfc-life-invest",
    company: "HDFC Life",
    logoDomain: "hdfclife.com",
    type: "investment",
    established: 2000,
    claimSettlement: 99.68,
    avgApprovalTime: "15 mins",
    premiumRange: "₹50,000 - ₹5,00,000",
    coverage: "10x Annual Premium",
    taxBenefit: "80C & 10(10D)",
    hospitalNetwork: 9500,
    plans: [
      {
        id: "hdfc-c2i-invest",
        name: "Click 2 Invest ULIP",
        premium: "₹50,000/year",
        coverage: "₹5 Lakh",
        term: "10-20 years",
        medicalExam: "Usually not required",
        waitingPeriod: "None",
        features: ["Market linked returns", "0% Allocation charge", "11 Fund options", "Partial withdrawals"],
        advantages: ["Low charge structure", "HDFC Fund performance", "Flexible tenure"],
        brochure: "https://www.hdfclife.com/content/dam/hdfclifeinvestment/brochures/C2I_Brochure.pdf",
        rating: 4.6,
        detailedFeatures: {
          fundPerformance: "Multi-Cap Fund (~13.8% 5yr CAGR)",
          wealthBoosters: "Added to fund value after 10 years",
          mortalityReturn: "Return of Mortality Charges at maturity",
          loyaltyAdditions: "Loyalty additions after 10 years"
        }
      },
    ],
  },
  {
    id: "icici-pru-invest",
    company: "ICICI Prudential",
    logoDomain: "iciciprulife.com",
    type: "investment",
    established: 1999,
    claimSettlement: 99.17,
    avgApprovalTime: "20 mins",
    premiumRange: "₹30,000 - ₹10,00,000+",
    coverage: "10x Annual Premium",
    taxBenefit: "80C & 10(10D)",
    hospitalNetwork: 8800,
    plans: [
      {
        id: "icici-sig-invest",
        name: "Pru Signature ULIP",
        premium: "₹60,000/year",
        coverage: "₹6 Lakh",
        term: "15 years",
        medicalExam: "No",
        waitingPeriod: "None",
        features: ["Wealth Boosters", "Unlimited switches", "Systematic Withdrawal", "Return of Mortality charges"],
        advantages: ["Best for wealth creation", "Unlimited free switches", "Premium waiver benefit"],
        brochure: "https://www.iciciprulife.com/content/dam/icicipru/brochures/Signature-Brochure.pdf",
        rating: 4.7,
        detailedFeatures: {
          fundPerformance: "Opportunities Fund (~13.2% 5yr CAGR)",
          wealthBoosters: "1.50% - 3.25% added every 5 years",
          mortalityReturn: "Return of 100% Mortality Charges",
          loyaltyAdditions: "Regular Loyalty Additions from 6th year"
        }
      },
    ],
  },
  {
    id: "max-life-invest",
    company: "Max Life",
    logoDomain: "maxlife.in",
    type: "investment",
    established: 2000,
    claimSettlement: 99.65,
    avgApprovalTime: "10 mins",
    premiumRange: "₹25,000 - ₹5,00,000",
    coverage: "10x Annual Premium",
    taxBenefit: "80C & 10(10D)",
    hospitalNetwork: 7500,
    plans: [
      {
        id: "max-savings-invest",
        name: "Online Savings Plan",
        premium: "₹45,000/year",
        coverage: "₹4.5 Lakh",
        term: "10-25 years",
        medicalExam: "No",
        waitingPeriod: "None",
        features: ["Auto-Rebalancing", "Life stage fund", "8 Fund options", "Loyalty additions"],
        advantages: ["Portfolio management", "Zero allocation charge", "Flexible withdrawals"],
        brochure: "https://www.maxlifeinsurance.com/content/dam/corporate/brochures/Online-Savings-Plan-Brochure.pdf",
        rating: 4.5,
        detailedFeatures: {
          fundPerformance: "High Growth Fund (~13.9% 5yr CAGR)",
          wealthBoosters: "Added to fund at maturity",
          mortalityReturn: "Complete Return of Mortality Charges",
          loyaltyAdditions: "Guaranteed Loyalty additions"
        }
      },
    ],
  },
  {
    id: "tata-aia-invest",
    company: "Tata AIA",
    logoDomain: "tataaia.com",
    type: "investment",
    established: 2001,
    claimSettlement: 99.41,
    avgApprovalTime: "12 mins",
    premiumRange: "₹50,000 - ₹2,00,000+",
    coverage: "10x Annual Premium",
    taxBenefit: "80C & 10(10D)",
    hospitalNetwork: 7000,
    plans: [
      {
        id: "tata-pro-invest",
        name: "Fortune Pro ULIP",
        premium: "₹50,000/year",
        coverage: "₹5 Lakh",
        term: "15 years",
        medicalExam: "No",
        waitingPeriod: "None",
        features: ["Guaranteed Additions", "Index Fund options", "Multi-cap exposure", "Critical illness rider"],
        advantages: ["TATA brand trust", "Excellent fund selection", "Market-beating returns"],
        brochure: "https://tataaia.com/content/dam/tataaia/brochures/Fortune_Pro_Brochure.pdf",
        rating: 4.6,
        detailedFeatures: {
          fundPerformance: "Top 200 Fund (~16.8% 5yr CAGR)",
          wealthBoosters: "High Premium Boosters available",
          mortalityReturn: "Refund of Mortality Charges as Loyalty",
          loyaltyAdditions: "Regular Loyalty Additions"
        }
      },
    ],
  },
  {
    id: "aditya-birla-invest",
    company: "Aditya Birla Sun Life",
    logoDomain: "adityabirlasunlifeinsurance.com",
    type: "investment",
    established: 2000,
    claimSettlement: 98.74,
    avgApprovalTime: "25 mins",
    premiumRange: "₹30,000 - ₹5,00,000",
    coverage: "10x Annual Premium",
    taxBenefit: "80C & 10(10D)",
    hospitalNetwork: 6000,
    plans: [
      {
        id: "aditya-wealth-invest",
        name: "Wealth Alpha Plan",
        premium: "₹40,000/year",
        coverage: "₹4 Lakh",
        term: "10-20 years",
        medicalExam: "No",
        waitingPeriod: "None",
        features: ["Wealth Boosters", "Systematic Withdrawal", "Multiple fund strategies", "Return of Mortality charges"],
        advantages: ["Choice of 3 investment strategies", "Birla Group legacy", "Loyalty additions"],
        brochure: "https://lifeinsurance.adityabirlacapital.com/content/dam/adityabirla/lifeinsurance/brochures/Wealth_Alpha_Brochure.pdf",
        rating: 4.5,
        detailedFeatures: {
          fundPerformance: "Equity/Debt mix (~14% average performance)",
          wealthBoosters: "Wealth-Boosting Additions periodically",
          mortalityReturn: "Return of Premium Allocation & Mortality Charges",
          loyaltyAdditions: "Guaranteed Additions every 5 years"
        }
      },
    ],
  },
  {
    id: "bajaj-life-invest",
    company: "Bajaj Allianz Life",
    logoDomain: "bajajallianzlife.com",
    type: "investment",
    established: 2001,
    claimSettlement: 99.29,
    avgApprovalTime: "18 mins",
    premiumRange: "₹25,000 - ₹10,00,000",
    coverage: "10x Annual Premium",
    taxBenefit: "80C & 10(10D)",
    hospitalNetwork: 6500,
    plans: [
      {
        id: "bajaj-wealth-invest",
        name: "Future Wealth Gain",
        premium: "₹50,000/year",
        coverage: "₹5 Lakh",
        term: "10-15 years",
        medicalExam: "No",
        waitingPeriod: "None",
        features: ["Market linked growth", "Loyalty additions", "Choice of 8 funds", "Partial withdrawals"],
        advantages: ["Compounded growth", "Bajaj brand trust", "Systematic planning"],
        brochure: "https://www.bajajallianzlife.com/content/dam/balic/brochures/Future-Wealth-Gain-Brochure.pdf",
        rating: 4.6,
        detailedFeatures: {
          fundPerformance: "Accelerator Mid-Cap Fund (~13.1% 5yr CAGR)",
          wealthBoosters: "Fund Boosters at maturity",
          mortalityReturn: "Return of Mortality Charges at maturity",
          loyaltyAdditions: "Loyalty Additions every 5 years from 10th year"
        }
      },
    ],
  },
]

export default function CompareInsurancePage() {
  const [activeTab, setActiveTab] = useState("term")
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("premium-low")
  const [premiumFilter, setPremiumFilter] = useState("all")
  const [settlementFilter, setSettlementFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Premium Calculator State
  const [showCalculator, setShowCalculator] = useState(false)
  const [calculatorAge, setCalculatorAge] = useState("30")
  const [calculatorCoverage, setCalculatorCoverage] = useState("1000000")
  const [calculatorTerm, setCalculatorTerm] = useState("30")
  const [calculatorHealth, setCalculatorHealth] = useState("true")

  // Filter companies by type
  const filteredCompanies = useMemo(() => {
    let companies = INSURANCE_COMPANIES.filter(c => c.type === activeTab)

    // Apply sorting
    if (sortBy === "premium-low") {
      companies.sort((a, b) => {
        const premA = parseInt(a.plans[0].premium.replace(/[^\d]/g, ''))
        const premB = parseInt(b.plans[0].premium.replace(/[^\d]/g, ''))
        return premA - premB
      })
    } else if (sortBy === "premium-high") {
      companies.sort((a, b) => {
        const premA = parseInt(a.plans[0].premium.replace(/[^\d]/g, ''))
        const premB = parseInt(b.plans[0].premium.replace(/[^\d]/g, ''))
        return premB - premA
      })
    } else if (sortBy === "settlement") {
      companies.sort((a, b) => b.claimSettlement - a.claimSettlement)
    } else if (sortBy === "rating") {
      companies.sort((a, b) => (b.plans[0].rating || 0) - (a.plans[0].rating || 0))
    }

    // Apply filters
    if (premiumFilter !== "all") {
      companies = companies.filter(c => {
        const prem = parseInt(c.plans[0].premium.replace(/[^\d]/g, ''))
        if (premiumFilter === "under-10000") return prem < 10000
        if (premiumFilter === "10000-20000") return prem >= 10000 && prem < 20000
        if (premiumFilter === "above-20000") return prem >= 20000
        return true
      })
    }

    if (settlementFilter !== "all") {
      companies = companies.filter(c => {
        if (settlementFilter === "above-98") return c.claimSettlement >= 98
        if (settlementFilter === "above-96") return c.claimSettlement >= 96
        return true
      })
    }

    return companies
  }, [activeTab, sortBy, premiumFilter, settlementFilter])

  const selectedCompanyDetails = useMemo(() => {
    return INSURANCE_COMPANIES.filter(c => selectedCompanies.includes(c.id))
  }, [selectedCompanies])

  const addCompany = (id: string) => {
    if (!selectedCompanies.includes(id)) {
      setSelectedCompanies([...selectedCompanies, id])
    }
  }

  const removeCompany = (id: string) => {
    setSelectedCompanies(selectedCompanies.filter(c => c !== id))
  }

  const clearAll = () => {
    setSelectedCompanies([])
  }

  // Premium Calculator Constants
  const CALCULATOR_CONSTANTS = {
    TERM_BASE_RATE: 0.008,
    HEALTH_BASE_RATE: 0.005,
  }

  // Premium Calculator Logic with error handling
  const calculateEstimatedPremium = () => {
    try {
      const age = parseInt(calculatorAge, 10)
      const coverage = parseInt(calculatorCoverage, 10)
      const term = parseInt(calculatorTerm, 10)

      // Validate inputs
      if (isNaN(age) || isNaN(coverage) || isNaN(term)) {
        return 0
      }

      const baseRate = activeTab === "term" ? CALCULATOR_CONSTANTS.TERM_BASE_RATE : CALCULATOR_CONSTANTS.HEALTH_BASE_RATE
      const ageFactor = age < 30 ? 0.8 : age < 40 ? 1 : age < 50 ? 1.3 : 1.8
      const termFactor = term <= 10 ? 0.8 : term <= 20 ? 1 : 1.2

      const estimatedPremium = Math.round(coverage * baseRate * ageFactor * termFactor)
      return Math.max(0, estimatedPremium)
    } catch (error) {
      console.error('Premium calculation error:', error)
      return 0
    }
  }

  const estimatedPremium = calculateEstimatedPremium()

  // Generate Comparison Report as Text
  const generateComparisonReport = () => {
    const companies = selectedCompanyDetails
    if (companies.length === 0) {
      console.warn("Please select at least 2 companies to compare")
      return
    }

    let report = `INSURANCE COMPARISON REPORT\n`
    report += `Generated on: ${new Date().toLocaleDateString()}\n`
    report += `Insurance Type: ${activeTab === "term" ? "Term Insurance" : "Health Insurance"}\n\n`
    report += `SELECTED COMPANIES FOR COMPARISON:\n`
    report += `${"=".repeat(80)}\n\n`

    companies.forEach((company, idx) => {
      const plan = company.plans[0]
      report += `${idx + 1}. ${company.company}\n`
      report += `   Company Details:\n`
      report += `   - Established: ${company.established}\n`
      report += `   - Claim Settlement Ratio: ${company.claimSettlement}%\n`
      report += `   - Average Approval Time: ${company.avgApprovalTime}\n`
      report += `   - Hospital Network: ${company.hospitalNetwork}+\n\n`
      report += `   Plan: ${plan.name}\n`
      report += `   - Annual Premium: ${plan.premium}\n`
      report += `   - Coverage: ${plan.coverage}\n`
      report += `   - Rating: ${plan.rating}/5\n`
      report += `   - Medical Exam: ${plan.medicalExam}\n`
      report += `   - Waiting Period: ${plan.waitingPeriod}\n`
      report += `   - Key Features:\n`
      plan.features.forEach(f => report += `     • ${f}\n`)
      report += `   - Why Choose:\n`
      plan.advantages.forEach(a => report += `     • ${a}\n`)
      report += `\n`
    })

    report += `\n${"=".repeat(80)}\n`
    report += `COMPARISON SUMMARY:\n`
    report += `${"=".repeat(80)}\n\n`
    report += `Lowest Premium: ${companies.reduce((a, b) => {
      const premA = parseInt(a.plans[0].premium.replace(/[^\d]/g, ''), 10)
      const premB = parseInt(b.plans[0].premium.replace(/[^\d]/g, ''), 10)
      return premA < premB ? a : b
    }).company}\n\n`
    report += `Best Claim Settlement: ${companies.reduce((a, b) => a.claimSettlement > b.claimSettlement ? a : b).company}\n\n`
    report += `Fastest Approval: ${companies.reduce((a, b) => {
      const timeA = parseInt(a.avgApprovalTime, 10)
      const timeB = parseInt(b.avgApprovalTime, 10)
      return timeA < timeB ? a : b
    }).company}\n\n`

    report += `\nDISCLAIMER:\n`
    report += `Insurance is subject to terms and conditions. This comparison is for informational purposes only.\n`
    report += `Please consult with an insurance expert before making a purchase decision.\n\n`
    report += `© 2025 Life Cover Now. All rights reserved.\n`

    // Create and download report
    try {
      const file = new Blob([report], { type: "text/plain" })
      const url = URL.createObjectURL(file)
      const element = document.createElement("a")
      element.href = url
      element.download = `insurance-comparison-report-${new Date().toISOString().split('T')[0]}.txt`
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)

      // Cleanup blob URL after a brief delay to ensure download completes
      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 100)
    } catch (error) {
      console.error('Error generating report:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50  to-white ">

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Insurance Comparison</h1>
              <p className="text-xl md:text-2xl opacity-90">Compare plans from India's top insurers in real-time with expert guidance</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-3xl font-bold">14+</p>
                  <p className="text-sm opacity-80">Top Insurers</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-sm opacity-80">Hospitals</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-3xl font-bold">95%+</p>
                  <p className="text-sm opacity-80">Settlement Ratio</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-80">Transparent</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/images/comparison_hero.png"
                alt="Insurance Comparison"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Premium Calculator */}
          <div className="mb-12">
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="w-full text-left"
            >
              <Card className={`cursor-pointer transition-all border-2 ${showCalculator ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">🧮</div>
                      <div>
                        <CardTitle>Premium Calculator</CardTitle>
                        <p className="text-sm text-slate-500">Estimate your insurance premium based on your profile</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-6 h-6 transition-transform ${showCalculator ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </Card>
            </button>

            {showCalculator && (
              <Card className="mt-4 border-2 border-blue-500 bg-gradient-to-br from-blue-50  to-indigo-50 ">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* Age Input */}
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Your Age</label>
                      <Input
                        type="number"
                        min="18"
                        max="70"
                        value={calculatorAge}
                        onChange={(e) => setCalculatorAge(e.target.value)}
                        className="w-full"
                        placeholder="30"
                      />
                      <p className="text-xs text-slate-500 mt-2">{calculatorAge} years old</p>
                    </div>

                    {/* Coverage Input */}
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Coverage Amount</label>
                      <Select value={calculatorCoverage} onValueChange={setCalculatorCoverage}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500000">₹50 Lakh</SelectItem>
                          <SelectItem value="1000000">₹1 Crore</SelectItem>
                          <SelectItem value="1500000">₹1.5 Crore</SelectItem>
                          <SelectItem value="2000000">₹2 Crore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Term Input */}
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Policy Term</label>
                      <Select value={calculatorTerm} onValueChange={setCalculatorTerm}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 Years</SelectItem>
                          <SelectItem value="20">20 Years</SelectItem>
                          <SelectItem value="30">30 Years</SelectItem>
                          <SelectItem value="40">40 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Smoking Status */}
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Health Status</label>
                      <Select value={calculatorHealth} onValueChange={setCalculatorHealth}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Non-Smoker (Good Health)</SelectItem>
                          <SelectItem value="false">Smoker / Pre-existing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-background  p-6 rounded-lg border-2 border-blue-200 ">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <p className="text-sm text-slate-600 mb-2">Estimated Annual Premium</p>
                        <p className="text-4xl font-bold text-blue-600">₹{estimatedPremium.toLocaleString()}</p>
                      </div>
                      <div className="text-center border-l">
                        <p className="text-sm text-slate-600 mb-2">Monthly Cost</p>
                        <p className="text-3xl font-bold text-green-600">₹{Math.round(estimatedPremium / 12).toLocaleString()}</p>
                      </div>
                      <div className="text-center border-l">
                        <p className="text-sm text-slate-600 mb-2">Total Premium ({calculatorTerm} years)</p>
                        <p className="text-3xl font-bold text-indigo-600">₹{(estimatedPremium * parseInt(calculatorTerm, 10)).toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 italic">
                      ⓘ This is an estimated premium. Actual premium may vary based on medical examination and underwriting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="term" className="text-base">
                🛡️ Term Plan
              </TabsTrigger>
              <TabsTrigger value="health" className="text-base">
                ❤️ Health Plan
              </TabsTrigger>
              <TabsTrigger value="investment" className="text-base">
                💰 Investment Plan
              </TabsTrigger>
            </TabsList>

            {/* Filter and Controls */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    variant={showFilters ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="gap-2"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                  {selectedCompanies.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearAll}
                      className="gap-2"
                    >
                      <X className="w-4 h-4" />
                      Clear All
                    </Button>
                  )}
                </div>

                <div className="flex gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="premium-low">Lowest Premium</SelectItem>
                      <SelectItem value="premium-high">Highest Premium</SelectItem>
                      <SelectItem value="settlement">Best Settlement</SelectItem>
                      <SelectItem value="rating">Best Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <Card className="bg-gradient-to-r from-blue-50  to-slate-50 ">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-3 block">Premium Range</label>
                        <Select value={premiumFilter} onValueChange={setPremiumFilter}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Premiums</SelectItem>
                            <SelectItem value="under-10000">Under ₹10,000</SelectItem>
                            <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                            <SelectItem value="above-20000">Above ₹20,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-semibold mb-3 block">Claim Settlement</label>
                        <Select value={settlementFilter} onValueChange={setSettlementFilter}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Companies</SelectItem>
                            <SelectItem value="above-98">Above 98%</SelectItem>
                            <SelectItem value="above-96">Above 96%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-end">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            setPremiumFilter("all")
                            setSettlementFilter("all")
                          }}
                        >
                          Reset Filters
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Companies List */}
            <TabsContent value={activeTab} className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCompanies.map((company) => {
                  const isSelected = selectedCompanies.includes(company.id)
                  const plan = company.plans[0]

                  return (
                    <Card
                      key={company.id}
                      className={`cursor-pointer transition-all border-2 ${isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 hover:border-blue-300"
                        }`}
                      onClick={() => {
                        if (isSelected) {
                          removeCompany(company.id)
                        } else {
                          addCompany(company.id)
                        }
                      }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={`https://logo.clearbit.com/${company.logoDomain}`}
                              alt={company.company}
                              className="w-10 h-10 object-contain rounded bg-white p-1 border shadow-sm"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.company)}&background=random`;
                              }}
                            />
                            <div>
                              <CardTitle className="text-lg">{company.company}</CardTitle>
                              <p className="text-xs text-slate-500">Est. {company.established}</p>
                            </div>
                          </div>
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}>
                            {isSelected && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="p-2 bg-slate-50 rounded">
                            <p className="text-slate-600 text-xs">Settlement</p>
                            <p className="font-bold text-green-600">{company.claimSettlement}%</p>
                          </div>
                          <div className="p-2 bg-slate-50 rounded">
                            <p className="text-slate-600 text-xs">Approval Time</p>
                            <p className="font-bold text-blue-600">{company.avgApprovalTime}</p>
                          </div>
                        </div>

                        {/* Premium */}
                        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg">
                          <p className="text-xs text-slate-600 mb-1">Starting Premium</p>
                          <p className="text-2xl font-bold text-blue-600">{plan.premium}</p>
                        </div>

                        {/* Coverage */}
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Coverage</p>
                          <p className="font-semibold text-sm">{company.coverage}</p>
                        </div>

                        {/* Rating */}
                        {plan.rating && (
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 ${i < Math.floor(plan.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-semibold">{plan.rating}/5</span>
                          </div>
                        )}

                        {/* Quick Features */}
                        <div className="space-y-1 pt-2 border-t">
                          {company.type === "term" && (
                            <>
                              <div className="flex items-center gap-2 text-xs">
                                <Zap className="w-3.5 h-3.5 text-blue-600" />
                                <span>Medical Exam: {plan.medicalExam}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <Clock className="w-3.5 h-3.5 text-blue-600" />
                                <span>Waiting Period: {plan.waitingPeriod}</span>
                              </div>
                            </>
                          )}
                          {company.type === "health" && (
                            <>
                              <div className="flex items-center gap-2 text-xs">
                                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                                <span>{company.hospitalNetwork.toLocaleString()} Hospitals</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <Clock className="w-3.5 h-3.5 text-blue-600" />
                                <span>Waiting: {plan.waitingPeriod}</span>
                              </div>
                            </>
                          )}
                          {company.type === "investment" && (
                            <>
                              <div className="flex items-center gap-2 text-xs">
                                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                                <span>Market Linked Returns</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <Zap className="w-3.5 h-3.5 text-green-600" />
                                <span>Tax Free Returns (10(10D))</span>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Action Button */}
                        <Button
                          className="w-full mt-2"
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Selected
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4 mr-2" />
                              Compare
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {filteredCompanies.length === 0 && (
                <Card className="border-slate-200">
                  <CardContent className="p-12 text-center">
                    <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No plans match your filters</h3>
                    <p className="text-slate-600 mb-4">Try adjusting your filter criteria</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setPremiumFilter("all")
                        setSettlementFilter("all")
                        setShowFilters(false)
                      }}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Comparison Table */}
          {selectedCompanies.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Detailed Comparison</h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={generateComparisonReport}
                  >
                    <Download className="w-4 h-4" />
                    Export Report
                  </Button>
                  <ScheduleCallButton variant="outline" />
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.print()}
                  >
                    <TrendingUp className="w-4 h-4" />
                    Print Comparison
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-100 to-slate-50">
                      <th className="sticky left-0 bg-gradient-to-r from-slate-100 to-slate-50 border p-4 text-left font-semibold text-sm z-10">
                        Feature
                      </th>
                      {selectedCompanyDetails.map((company) => (
                        <th key={company.id} className="border p-4 text-center font-semibold text-sm min-w-[250px]">
                          <div className="flex flex-col items-center gap-2">
                            <img
                              src={`https://logo.clearbit.com/${company.logoDomain}`}
                              alt={company.company}
                              className="w-12 h-12 object-contain rounded bg-white p-1 border shadow-sm mb-1"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.company)}&background=random`;
                              }}
                            />
                            <span>{company.company}</span>
                            <Badge variant="outline" className="capitalize">
                              {activeTab} Plan
                            </Badge>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Plan Name */}
                    <tr>
                      <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">📄 Full Plan Name</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center text-sm font-bold text-slate-800">
                          {company.plans[0].name}
                        </td>
                      ))}
                    </tr>

                    {/* Premium */}
                    <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                      <td className="sticky left-0 bg-blue-50 border p-4 font-semibold text-sm">💰 Premium (Annual)</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center">
                          <p className="text-2xl font-bold text-blue-600">{company.plans[0].premium}</p>
                        </td>
                      ))}
                    </tr>

                    {/* Coverage */}
                    <tr>
                      <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">🛡️ Coverage Amount</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center text-sm">
                          {company.plans[0].coverage}
                        </td>
                      ))}
                    </tr>

                    {/* Term Specific Rows */}
                    {activeTab === "term" && (
                      <>
                        <tr className="bg-orange-50 hover:bg-orange-100 transition-colors">
                          <td className="sticky left-0 bg-orange-50 border p-4 font-semibold text-sm">🏥 Terminal Illness</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.terminalIllness || "Included"}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">✍️ Waiver of Premium</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.waiverOfPremium || "Available"}
                            </td>
                          ))}
                        </tr>
                        <tr className="bg-indigo-50 hover:bg-indigo-100 transition-colors">
                          <td className="sticky left-0 bg-indigo-50 border p-4 font-semibold text-sm">🎭 Key Riders</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.riders || "Accidental/CI"}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">✨ Special Benefit</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm font-semibold text-indigo-600">
                              {company.plans[0].detailedFeatures?.specialFeature || "N/A"}
                            </td>
                          ))}
                        </tr>
                      </>
                    )}

                    {/* Health Specific Rows */}
                    {activeTab === "health" && (
                      <>
                        <tr className="bg-emerald-50 hover:bg-emerald-100 transition-colors">
                          <td className="sticky left-0 bg-emerald-50 border p-4 font-semibold text-sm">📈 No Claim Bonus</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.ncb || "50% per year"}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">🔄 Restoration</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.restoration || "100% Restore"}
                            </td>
                          ))}
                        </tr>
                        <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                          <td className="sticky left-0 bg-amber-50 border p-4 font-semibold text-sm">🏨 Room Rent Limit</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.roomRent || "No Limit"}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">📦 Consumables</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm font-semibold text-amber-600">
                              {company.plans[0].detailedFeatures?.consumables || "Optional"}
                            </td>
                          ))}
                        </tr>
                      </>
                    )}

                    {/* Investment Specific Rows */}
                    {activeTab === "investment" && (
                      <>
                        <tr className="bg-orange-50 hover:bg-orange-100 transition-colors">
                          <td className="sticky left-0 bg-orange-50 border p-4 font-semibold text-sm">📈 Fund Performance</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm font-bold text-orange-600">
                              {company.plans[0].detailedFeatures?.fundPerformance || "13-15% CAGR"}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">🚀 Wealth Boosters</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.wealthBoosters || "Added units"}
                            </td>
                          ))}
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                          <td className="sticky left-0 bg-blue-50 border p-4 font-semibold text-sm">⚰️ Mortality Return</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].detailedFeatures?.mortalityReturn || "Yes (Maturity)"}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">🎁 Loyalty Additions</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm font-semibold text-blue-600">
                              {company.plans[0].detailedFeatures?.loyaltyAdditions || "Periodic additions"}
                            </td>
                          ))}
                        </tr>
                      </>
                    )}

                    {/* Claim Settlement */}
                    <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                      <td className="sticky left-0 bg-green-50 border p-4 font-semibold text-sm">✅ Claim Settlement %</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center">
                          <p className="text-lg font-bold text-green-600">{company.claimSettlement}%</p>
                        </td>
                      ))}
                    </tr>

                    {/* Rating */}
                    <tr>
                      <td className="sticky left-0 bg-background border p-4 font-semibold text-sm">⭐ Rating</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 ${i < Math.floor(company.plans[0].rating || 0)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-300"
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="font-semibold text-sm">{company.plans[0].rating}/5</span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Approval Time */}
                    <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                      <td className="sticky left-0 bg-purple-50 border p-4 font-semibold text-sm">⏱️ Approval Time</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center text-sm font-semibold text-purple-600">
                          {company.avgApprovalTime}
                        </td>
                      ))}
                    </tr>

                    {/* Term/Coverage Type */}
                    {activeTab === "term" && (
                      <>
                        <tr>
                          <td className="sticky left-0 bg-background  border p-4 font-semibold text-sm">📅 Policy Term</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].term}
                            </td>
                          ))}
                        </tr>

                        <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors">
                          <td className="sticky left-0 bg-yellow-50 border p-4 font-semibold text-sm">🏥 Medical Exam</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].medicalExam}
                            </td>
                          ))}
                        </tr>

                        <tr>
                          <td className="sticky left-0 bg-background  border p-4 font-semibold text-sm">⏳ Waiting Period</td>
                          {selectedCompanyDetails.map((company) => (
                            <td key={company.id} className="border p-4 text-center text-sm">
                              {company.plans[0].waitingPeriod}
                            </td>
                          ))}
                        </tr>
                      </>
                    )}

                    {activeTab === "health" && (
                      <tr className="bg-blue-50/50">
                        <td className="sticky left-0 bg-blue-50/50 border p-4 font-semibold text-sm">🏥 Hospital Network</td>
                        {selectedCompanyDetails.map((company) => (
                          <td key={company.id} className="border p-4 text-center text-sm font-semibold text-blue-600">
                            {company.hospitalNetwork?.toLocaleString()}+
                          </td>
                        ))}
                      </tr>
                    )}

                    {activeTab === "investment" && (
                      <tr className="bg-orange-50 hover:bg-orange-100 transition-colors">
                        <td className="sticky left-0 bg-orange-50 border p-4 font-semibold text-sm">📈 Fund Options</td>
                        {selectedCompanyDetails.map((company) => (
                          <td key={company.id} className="border p-4 text-center text-sm font-semibold text-orange-600">
                            {company.plans[0].features.find(f => f.includes('Fund')) || "Multi-fund options"}
                          </td>
                        ))}
                      </tr>
                    )}

                    {/* Key Features */}
                    <tr>
                      <td className="sticky left-0 bg-slate-50 border p-4 font-semibold text-sm align-top">✨ Key Features</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4">
                          <ul className="space-y-2 text-sm">
                            {company.plans[0].features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Why Choose */}
                    <tr>
                      <td className="sticky left-0 bg-slate-50 border p-4 font-semibold text-sm align-top">💡 Why Choose?</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4">
                          <ul className="space-y-2 text-sm">
                            {company.plans[0].advantages.map((adv, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <TrendingUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Premium Range */}
                    <tr className="bg-indigo-50 hover:bg-indigo-100 transition-colors">
                      <td className="sticky left-0 bg-indigo-50 border p-4 font-semibold text-sm">📊 Premium Range</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center text-sm">
                          {company.premiumRange}
                        </td>
                      ))}
                    </tr>

                    {/* Tax Benefits */}
                    <tr>
                      <td className="sticky left-0 bg-background  border p-4 font-semibold text-sm">💵 Tax Benefits</td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4 text-center text-sm font-semibold text-green-600">
                          {company.taxBenefit}
                        </td>
                      ))}
                    </tr>

                    {/* Action Row */}
                    <tr className="bg-gradient-to-r from-blue-100 to-blue-50">
                      <td className="sticky left-0 bg-gradient-to-r from-blue-100 to-blue-50 border p-4"></td>
                      {selectedCompanyDetails.map((company) => (
                        <td key={company.id} className="border p-4">
                          <div className="flex flex-col gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full gap-2"
                              onClick={() => handleBrochureDownload(company.plans[0].brochure, company.company)}
                              title="Download or view company brochure"
                            >
                              <Download className="w-4 h-4" />
                              Brochure
                            </Button>
                            <ExpertAdviceButton className="w-full" size="sm">
                              Get Quote
                            </ExpertAdviceButton>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <section className="mt-16 py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still Confused About Which Plan to Buy?</h2>
              <p className="text-lg opacity-90 mb-6">
                Our insurance experts will analyze your needs and recommend the perfect plan for you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ExpertAdviceButton className="bg-white text-blue-600 hover:bg-slate-100">
                  Get Free Expert Recommendation
                </ExpertAdviceButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50  to-white  border-t mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Expert Tips */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background  p-6 rounded-lg border-2 border-blue-200 ">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  Term Insurance Tips
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Coverage Rule:</strong> Buy 10-15x your annual income as coverage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Age Factor:</strong> Buy early - premiums increase with age</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Term Selection:</strong> Choose 30-40 years for maximum protection</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Riders:</strong> Add critical illness & accidental death riders</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Settlement Ratio:</strong> Prefer companies with &gt; 98% claim settlement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background  p-6 rounded-lg border-2 border-red-200 ">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">❤️</span>
                  Health Insurance Tips
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Coverage Amount:</strong> Choose ₹5-10 lakh minimum for family</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Hospital Network:</strong> Check if your preferred hospital is covered</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>OPD Coverage:</strong> Prefer plans with OPD benefits for routine care</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Pre-existing Conditions:</strong> Check waiting period (typically 2 years)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Cashless Facilities:</strong> Ensure 24x7 claim support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparison Tips */}
            <div className="bg-gradient-to-r from-blue-50  to-indigo-50  p-8 rounded-lg border-2 border-blue-300 mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span>
                How to Compare Insurance Plans
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900">1. Identify Your Needs</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Define coverage amount needed</li>
                    <li>• List essential benefits</li>
                    <li>• Check budget constraints</li>
                    <li>• Consider family size</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900">2. Compare Key Metrics</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Premium amount</li>
                    <li>• Claim settlement ratio</li>
                    <li>• Approval time</li>
                    <li>• Waiting period</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900">3. Make Final Decision</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Review all features</li>
                    <li>• Check medical exam requirement</li>
                    <li>• Read policy documents</li>
                    <li>• Consult with expert</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-background  p-6 rounded-lg border-2 border-amber-200  mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Common Mistakes to Avoid
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Low Coverage:</strong> Don't buy insufficient coverage to save premium</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Hiding Medical History:</strong> Disclosure issues lead to claim rejection</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Buying Based on Price:</strong> Premium alone isn't the deciding factor</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Ignoring Terms & Conditions:</strong> Read fine print carefully</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Not Using Online Tools:</strong> Use calculators to estimate premium</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Buying Without Advice:</strong> Always consult an insurance expert</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="pt-8 text-center text-sm text-slate-600 space-y-2">
              <p>
                <strong>Disclaimer:</strong> Insurance is subject to terms and conditions. Information provided is for educational purposes only.
              </p>
              <p>Please consult with an insurance expert before making a purchase decision.</p>
              <p>© 2025 Life Cover Now. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
