import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-muted/30 py-12 border-t">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Life Cover Now Logo" className="h-6 w-auto" />
                            <h3 className="font-bold text-lg">Life Cover Now</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Empowering your family's future with transparent insurance. Your independent advisory for informed decisions.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Insurance Types</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/compare?tab=term" className="text-muted-foreground hover:text-primary transition-colors">
                                    Term Insurance
                                </Link>
                            </li>
                            <li>
                                <Link href="/compare?tab=health" className="text-muted-foreground hover:text-primary transition-colors">
                                    Health Insurance
                                </Link>
                            </li>
                            <li>
                                <Link href="/learn#health-insurance" className="text-muted-foreground hover:text-primary transition-colors">
                                    Family Floater
                                </Link>
                            </li>
                            <li>
                                <Link href="/learn#health-insurance" className="text-muted-foreground hover:text-primary transition-colors">
                                    Senior Citizen Plans
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                                    Learning Hub
                                </Link>
                            </li>
                            <li>
                                <Link href="/compare" className="text-muted-foreground hover:text-primary transition-colors">
                                    Compare Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: contact@lifecovernow.in</li>
                            <li>Phone: +91 70211 55995</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t text-center text-sm text-muted-foreground space-y-2">
                    <p className="leading-relaxed">
                        <strong>Disclaimer:</strong> Insurance is subject to terms and conditions. Information provided is for
                        educational purposes only. We are associated with a licensed insurance broker.
                    </p>
                    <p>© 2025 lifecovernow.in. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
