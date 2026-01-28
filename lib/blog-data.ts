export interface BlogPost {
    title: string
    excerpt: string
    category: string
    readTime: string
    date: string
    audience: string
    takeaways: string[]
    slug: string
    content?: string // Added for future full content
}

export const blogPosts: BlogPost[] = [
    {
        title: "GST Relief on Insurance (2025 Update)",
        excerpt: "Complete guide to GST relief on insurance premiums in 2025. Understand how 0% GST on term life insurance, health insurance, and riders reduces your premium costs.",
        category: "Government Initiatives",
        readTime: "4 min read",
        date: "Jan 10, 2025",
        audience: "All insurance buyers",
        takeaways: [
            "0% GST on Term Life Insurance (was 18%)",
            "0% GST on Health Insurance (was 18%)",
            "Riders like Critical Illness also get 0% GST"
        ],
        slug: "gst-relief-insurance-2025",
    },
    {
        title: "Term Insurance vs. Whole Life: Which is Right for You?",
        excerpt:
            "Understanding the key differences between term and whole life insurance policies to make the best choice for your family. We break down costs, benefits, and ideal scenarios.",
        category: "Term Insurance",
        readTime: "5 min read",
        date: "Dec 15, 2024",
        audience: "Anyone planning life insurance coverage",
        takeaways: [
            "Term insurance is 70-80% cheaper than whole life",
            "Whole life includes investment but lower returns",
            "Most families benefit more from pure term coverage",
        ],
        slug: "term-vs-whole-life-insurance",
    },
    {
        title: "Top 5 Things to Check Before Buying Health Insurance",
        excerpt:
            "Essential checklist to ensure you get comprehensive coverage without overpaying for unnecessary features. Learn about waiting periods, room rent limits, and more.",
        category: "Health Insurance",
        readTime: "7 min read",
        date: "Dec 12, 2024",
        audience: "First-time health insurance buyers",
        takeaways: [
            "Always check waiting periods for pre-existing conditions",
            "Room rent limits can significantly affect out-of-pocket costs",
            "Co-payment clauses reduce premium but increase claim costs",
        ],
        slug: "top-5-things-to-check-before-buying-health-insurance",
    },
    {
        title: "How to File Insurance Claims Successfully: A Step-by-Step Guide",
        excerpt:
            "Navigate the claim process with confidence. Learn the documents needed and common mistakes to avoid during the crucial claim filing period.",
        category: "Claim Process",
        readTime: "6 min read",
        date: "Dec 10, 2024",
        audience: "Insurance claimants",
        takeaways: [
            "Keep all relevant documents organized",
            "Contact your insurer promptly after an incident",
            "Avoid making unnecessary statements",
        ],
        slug: "how-to-file-insurance-claims-successfully",
    },
    {
        title: "Understanding Co-payment and Deductibles in Health Insurance",
        excerpt:
            "What are co-payment clauses and how do they affect your out-of-pocket expenses? A detailed explanation with real examples.",
        category: "Health Insurance",
        readTime: "5 min read",
        date: "Dec 8, 2024",
        audience: "Health insurance policyholders",
        takeaways: [
            "Co-payment reduces your premium",
            "Deductibles are the amount you pay first",
            "Review your policy terms carefully",
        ],
        slug: "understanding-co-payment-and-deductibles-in-health-insurance",
    },
    {
        title: "Best Health Insurance Plans for Senior Citizens in 2024",
        excerpt:
            "Comprehensive comparison of senior citizen health insurance plans available in India, including coverage limits, premium costs, and pre-existing disease coverage.",
        category: "Senior Citizens",
        readTime: "8 min read",
        date: "Dec 5, 2024",
        audience: "Senior citizens and their families",
        takeaways: [
            "Look for plans with no waiting period",
            "Prioritize coverage for common senior health issues",
            "Consider plans with higher room rent limits",
        ],
        slug: "best-health-insurance-plans-for-senior-citizens-in-2024",
    },
    {
        title: "Family Floater vs Individual Health Plans: What's Better?",
        excerpt:
            "Should you buy a family floater or individual policies for each family member? We analyze the pros and cons based on different family structures.",
        category: "Family Floater",
        readTime: "6 min read",
        date: "Dec 3, 2024",
        audience: "Families considering health insurance",
        takeaways: [
            "Family floater offers shared coverage",
            "Individual plans cater to specific needs",
            "Compare costs and benefits thoroughly",
        ],
        slug: "family-floater-vs-individual-health-plans",
    },
    {
        title: "Critical Illness Riders: Are They Worth the Extra Premium?",
        excerpt:
            "Detailed analysis of critical illness riders in term insurance. Learn which diseases are covered, claim statistics, and whether you actually need this add-on.",
        category: "Term Insurance",
        readTime: "7 min read",
        date: "Nov 28, 2024",
        audience: "Term insurance buyers",
        takeaways: [
            "Critical illness riders cover 30-40 major diseases",
            "Lump sum payout on diagnosis, not death",
            "Consider your family medical history before adding",
        ],
        slug: "critical-illness-riders",
    },
    {
        title: "How Much Life Insurance Cover Do You Really Need?",
        excerpt:
            "Stop guessing! Use our proven calculation method to determine the exact life insurance coverage your family needs based on your income, debts, and future goals.",
        category: "Term Insurance",
        readTime: "6 min read",
        date: "Nov 25, 2024",
        audience: "Working professionals planning life insurance",
        takeaways: [
            "Calculate 10-15x your annual income as baseline",
            "Add all outstanding debts and loans",
            "Include children's education and marriage expenses",
        ],
        slug: "how-much-life-insurance-cover-do-you-really-need",
    },
    {
        title: "Pre-Existing Disease Coverage: What You Need to Know",
        excerpt:
            "Everything about waiting periods, disclosure requirements, and how to get your pre-existing conditions covered without claim rejection.",
        category: "Health Insurance",
        readTime: "8 min read",
        date: "Nov 20, 2024",
        audience: "People with existing health conditions",
        takeaways: [
            "Always disclose pre-existing conditions truthfully",
            "Waiting periods range from 2-4 years typically",
            "Some plans offer reduced waiting periods at higher premium",
        ],
        slug: "pre-existing-disease-coverage",
    },
    {
        title: "Maternity Coverage in Health Insurance: Complete Guide",
        excerpt:
            "Planning to start a family? Understand maternity benefits, waiting periods, newborn coverage, and which health insurance plans offer the best maternity coverage.",
        category: "Health Insurance",
        readTime: "7 min read",
        date: "Nov 15, 2024",
        audience: "Couples planning for children",
        takeaways: [
            "Maternity waiting period is typically 2-4 years",
            "Coverage includes normal and C-section delivery",
            "Newborn baby covered from day one under most plans",
        ],
        slug: "maternity-coverage-in-health-insurance",
    },
    {
        title: "Top 7 Reasons Why Insurance Claims Get Rejected",
        excerpt:
            "Learn the most common reasons for claim rejection and how to avoid them. Real case studies and expert tips to ensure your claim gets approved.",
        category: "Claim Process",
        readTime: "9 min read",
        date: "Nov 10, 2024",
        audience: "All insurance policyholders",
        takeaways: [
            "Non-disclosure is the #1 reason for rejection",
            "Keep all original bills and medical records",
            "File claims within the specified time limits",
        ],
        slug: "top-7-reasons-why-insurance-claims-get-rejected",
    },
    {
        title: "Health Insurance for Diabetics: Best Plans and Coverage Tips",
        excerpt:
            "Comprehensive guide for diabetics looking for health insurance. Compare plans, understand waiting periods, and learn about specialized diabetic care coverage.",
        category: "Health Insurance",
        readTime: "8 min read",
        date: "Nov 5, 2024",
        audience: "Diabetics and pre-diabetics",
        takeaways: [
            "Disclose diabetes during policy purchase",
            "Look for plans covering diabetic complications",
            "Annual health check-ups often included",
        ],
        slug: "health-insurance-for-diabetics",
    },
    {
        title: "Insurance for All by 2047: What It Means for Every Indian",
        excerpt:
            "Understanding IRDAI's Mission 2047, GST reforms, and how insurance is becoming simpler, affordable, and transparent",
        category: "Government Initiatives",
        readTime: "10 min read",
        date: "Nov 1, 2024",
        audience: "All Indians",
        takeaways: [
            "IRDAI aims to provide insurance coverage to every Indian by 2047",
            "GST reforms have made insurance more affordable",
            "Increased transparency and simplicity in insurance policies",
        ],
        slug: "mission-2047-insurance-for-all",
    },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
    return blogPosts.map((post) => post.slug)
}
