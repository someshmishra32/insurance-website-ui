import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { ExpertAdviceButton } from "@/components/expert-advice-button"
import { HelpCircle, MessageSquare, Shield, Heart, DollarSign, FileText } from "lucide-react"

export const metadata = {
  title: "Frequently Asked Questions | InsureWise",
  description:
    "Get answers to common insurance questions about term life, health insurance, claims, and more. Expert guidance on choosing the right insurance.",
  keywords: "insurance FAQ, insurance questions, how insurance works, insurance claims process",
}

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Life Insurance",
      icon: Shield,
      faqs: [
        {
          question: "What's the difference between term and whole life insurance?",
          answer:
            "Term insurance is pure protection for a fixed period (10-40 years) with low premiums and no cash value. Whole life insurance provides lifetime coverage with a savings/investment component but costs 10-20x more. Most families benefit more from term insurance due to affordability and flexibility.",
        },
        {
          question: "How much life insurance coverage do I need?",
          answer:
            "A good rule of thumb is 10-15 times your annual income. For example, if you earn ₹10 Lakhs per year, you should have ₹1-1.5 Crore coverage. Add additional coverage for outstanding debts, children's education, and spouse's retirement needs.",
        },
        {
          question: "Can I get life insurance if I have a pre-existing health condition?",
          answer:
            "Yes, but premiums will be higher and may require medical underwriting. Be honest in your application - non-disclosure can lead to claim rejection. Some insurers specialize in health-impaired applicants.",
        },
        {
          question: "Is life insurance taxable?",
          answer:
            "Death benefits from life insurance are tax-free for beneficiaries under Section 10(10D) of the Income Tax Act. Premiums are tax-deductible under Section 80C up to ₹1.5 Lakhs per year.",
        },
      ],
    },
    {
      category: "Health Insurance",
      icon: Heart,
      faqs: [
        {
          question: "What should be the ideal sum insured for a health insurance policy?",
          answer:
            "Minimum ₹5 Lakhs for individuals, ₹10-15 Lakhs for families of 4. If above 45 years or having health issues, opt for ₹20-25 Lakhs. Consider that average hospitalization costs are ₹5-15 Lakhs in metro cities.",
        },
        {
          question: "What is a room rent cap and how does it affect my claim?",
          answer:
            "Room rent cap is the maximum daily hospital room cost covered. If you choose a room exceeding this limit, the insurer reduces your entire claim reimbursement proportionally. It's best to choose unlimited or 3-5% of sum insured as room rent cap.",
        },
        {
          question: "What is a pre-existing disease (PED) waiting period?",
          answer:
            "It's the waiting period before claims related to existing health conditions are covered. Most policies have 2-4 years PED waiting. Some plans offer reduced waiting periods (30-45 days) for senior citizens. Always disclose existing conditions during application.",
        },
        {
          question: "Can I claim health insurance for routine check-ups?",
          answer:
            "No, routine wellness checks aren't covered. However, many policies now include OPD coverage for outpatient treatments like doctor consultations, lab tests, and medications. Check your policy for these benefits.",
        },
        {
          question: "How long can I renew my health insurance?",
          answer:
            "Most policies offer lifetime renewability, meaning you can renew until any age as long as you pay premiums on time. However, some older plans may have renewal limits at 65 or 70 years of age.",
        },
      ],
    },
    {
      category: "Insurance Claims",
      icon: FileText,
      faqs: [
        {
          question: "How long does the insurance claim process take?",
          answer:
            "For cashless claims at network hospitals, approval is typically given within 24-48 hours. For reimbursement claims, the process takes 5-15 days after document submission. Approval depends on completeness of documentation and claim validity.",
        },
        {
          question: "What documents are needed to file an insurance claim?",
          answer:
            "For health insurance: Original bills, prescriptions, medical reports, discharge summary, lab reports, and photo ID. For life insurance: Death certificate, beneficiary ID proof, claim form. Keep originals or certified copies, not scanned versions.",
        },
        {
          question: "Can my claim be rejected?",
          answer:
            "Yes, claims can be rejected for non-disclosure of pre-existing conditions, hospitalization at non-network hospitals without prior approval, treatment during waiting period, or incomplete documentation. Always be truthful during application and maintain proper records.",
        },
        {
          question: "What should I do immediately after a medical emergency?",
          answer:
            "1) Contact your insurer and get approval/authorization before treatment. 2) Choose a network hospital if possible for cashless treatment. 3) Keep all medical documents and bills. 4) Inform the hospital about your insurance. 5) File claim within 30 days of discharge.",
        },
      ],
    },
    {
      category: "Buying Insurance",
      icon: DollarSign,
      faqs: [
        {
          question: "When should I buy life insurance?",
          answer:
            "As early as possible. Insurance is cheaper when you're young and healthy. If you have dependents, you need it immediately. Buying at 25 is 70% cheaper than buying at 35 for the same coverage.",
        },
        {
          question: "Is it better to buy online or through an agent?",
          answer:
            "Online policies are cheaper (20-30% lower premiums) but require more self-service. Agents provide guidance but earn commission (included in premium). Choose online if you know what you need, or use an agent/broker for personalized advice.",
        },
        {
          question: "Can I buy multiple insurance policies?",
          answer:
            "Yes, you can own multiple policies from different insurers. This helps maximize coverage and provides flexibility. However, you must disclose all existing policies during application to avoid fraud issues.",
        },
        {
          question: "What questions will the insurer ask during underwriting?",
          answer:
            "Income, occupation, health history, medical conditions, medications, smoking/drinking habits, family history, previous claims, and lifestyle. Be honest - any discrepancy can lead to claim rejection.",
        },
      ],
    },
    {
      category: "Policy Management",
      icon: Shield,
      faqs: [
        {
          question: "What if I miss a premium payment?",
          answer:
            "Most policies have a grace period of 30 days to pay missed premiums. After 30 days, the policy lapses. You can revive a lapsed policy within 2 years, but may need medical re-examination.",
        },
        {
          question: "Can I change my nominee after buying the policy?",
          answer:
            "Yes, you can change the nominee anytime by submitting a written request to the insurance company. The change takes effect once the insurer acknowledges it.",
        },
        {
          question: "What happens if I don't use my full claim amount?",
          answer:
            "For health insurance, unused sum insured typically gets carried forward to the next year (annual renewal). For term insurance, there's no 'usage' - it only pays out if there's a death claim.",
        },
        {
          question: "How can I check my policy status online?",
          answer:
            "Most insurers have online portals where you can log in with your policy number and date of birth. You can view policy documents, premium payment history, and claim status. Download copies for your records.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Get answers to common insurance questions and make informed decisions about your coverage
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 -mx-4 px-4">
            {faqCategories.map((cat) => (
              <Link
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors whitespace-nowrap font-medium text-sm"
              >
                {cat.category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {faqCategories.map((catData) => (
            <div
              key={catData.category}
              id={catData.category.toLowerCase().replace(/\s+/g, "-")}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <catData.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">{catData.category}</h2>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {catData.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`${catData.category}-${index}`} className="border-b last:border-b-0">
                          <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors text-left">
                            <span className="font-semibold text-base">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 bg-muted/30">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Our insurance experts are here to answer your specific questions and help you find the perfect coverage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ExpertAdviceButton size="lg">
                Book Free Consultation
              </ExpertAdviceButton>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Help Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Can't Find Your Answer?</h2>
            <p className="text-muted-foreground mb-6">
              Browse our comprehensive blog articles for detailed guides on insurance topics:
            </p>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/blog">Read Our Blog Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
