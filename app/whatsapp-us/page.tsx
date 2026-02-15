import { WhatsAppButton } from "@/components/whatsapp-button"
import { MessageCircle, Clock, ShieldCheck, HeartPulse } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
    title: "WhatsApp Us | Life Cover Now - Expert Insurance Advice",
    description: "Connect with our expert insurance advisors instantly on WhatsApp. Get quotes, policy help, and honest advice for health and life insurance.",
}

export default function WhatsAppUsPage() {
    const officeHours = [
        { days: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
        { days: "Saturday", time: "10:00 AM - 4:00 PM" },
        { days: "Sunday", time: "Closed (Will respond on Monday)" },
    ]

    const benefits = [
        {
            icon: <MessageCircle className="w-6 h-6 text-primary" />,
            title: "Instant Response",
            description: "Get answers to your insurance queries in real-time."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Safe & Secure",
            description: "End-to-end encrypted chats for your privacy and data security."
        },
        {
            icon: <HeartPulse className="w-6 h-6 text-primary" />,
            title: "Expert Guidance",
            description: "Direct access to certified insurance advisors, not bots."
        }
    ]

    return (
        <div className="min-h-screen bg-muted/30">

            <main className="container mx-auto px-4 py-12 md:py-20" id="main-content">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Connect on WhatsApp</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Skip the long queues and automated systems. Get direct, honest advice from our experts on your favorite messaging app.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <Card className="md:col-span-2 border-primary/20 shadow-lg bg-background overflow-hidden">
                            <CardContent className="p-0">
                                <div className="bg-primary/5 p-8 md:p-12 text-center flex flex-col items-center">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <MessageCircle className="w-10 h-10 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">Start a Chat Now</h2>
                                    <p className="text-muted-foreground mb-8 text-lg">
                                        Click the button below to open a chat with us on WhatsApp. We typically respond within minutes during business hours.
                                    </p>
                                    <WhatsAppButton variant="default" size="lg" />
                                    <p className="mt-4 text-sm text-muted-foreground">
                                        Or save our number: <span className="font-semibold text-foreground">+91 70211 55995</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-md">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-primary" />
                                    Office Hours
                                </h3>
                                <div className="space-y-4">
                                    {officeHours.map((item, index) => (
                                        <div key={index} className="flex flex-col border-b border-muted last:border-0 pb-3 last:pb-0">
                                            <span className="text-sm font-medium">{item.days}</span>
                                            <span className="text-sm text-muted-foreground">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                                    <p className="text-xs text-muted-foreground italic">
                                        Note: You can message us anytime! If it's outside business hours, we'll get back to you as soon as we're back online.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-background border shadow-sm">
                                <div className="mb-4 p-3 bg-primary/5 rounded-full">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-xl">
                        <h2 className="text-3xl font-bold mb-6">Why Life Cover Now on WhatsApp?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-foreground"></span>
                                    <span>Share documents safely for policy review</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-foreground"></span>
                                    <span>Get soft copies of quotes instantly</span>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-foreground"></span>
                                    <span>Quick resolution for claim-related queries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-foreground"></span>
                                    <span>Updates on your policy renewals</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
