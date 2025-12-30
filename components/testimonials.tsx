"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  name: string
  role: string
  image: string
  rating: number
  content: string
  category: string
}

const testimonials: Testimonial[] = [
  {
    name: "Amit Kumar",
    role: "Software Engineer, Bangalore",
    image: "AK",
    rating: 5,
    content:
      "InsureWise helped me understand the difference between term and whole life insurance. Their comparison tools made it easy to choose a policy that actually fits my budget. Saved ₹2000/year!",
    category: "Term Insurance",
  },
  {
    name: "Priya Sharma",
    role: "Homemaker, Mumbai",
    image: "PS",
    rating: 5,
    content:
      "I was confused about health insurance coverage gaps. The policy health check tool identified that my room rent cap was too low. Got a better plan now with unlimited room rent at same premium.",
    category: "Health Insurance",
  },
  {
    name: "Rajesh Patel",
    role: "Business Owner, Ahmedabad",
    image: "RP",
    rating: 5,
    content:
      "The expert advice team was excellent. They helped me audit all 3 of my policies and recommended consolidation. Now I'm covered better and paying less premium.",
    category: "Policy Review",
  },
  {
    name: "Sneha Desai",
    role: "Freelancer, Pune",
    image: "SD",
    rating: 5,
    content:
      "As a freelancer with irregular income, I thought I couldn't afford life insurance. InsureWise showed me I could get ₹50L coverage for just ₹600/month. Game changer!",
    category: "Term Insurance",
  },
  {
    name: "Vikram Singh",
    role: "CA, Delhi",
    image: "VS",
    rating: 5,
    content:
      "The blog articles are incredibly detailed. I learned about GST relief on insurance and immediately updated my family's health policies. Saved ₹5000+ this year.",
    category: "Health Insurance",
  },
  {
    name: "Anjali Gupta",
    role: "HR Manager, Gurugram",
    image: "AG",
    rating: 5,
    content:
      "We were using InsureWise for employee education. The calculators and comparisons make insurance so easy to understand. Recommended it to all 200+ team members.",
    category: "Education",
  },
]

interface TestimonialSliderProps {
  maxCount?: number
}

export function TestimonialSlider({ maxCount = 3 }: TestimonialSliderProps) {
  const displayedTestimonials = testimonials.slice(0, maxCount)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by thousands of Indians for their insurance decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>

                  {/* User Info */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                      <AvatarFallback>{testimonial.image}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AllTestimonials() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Category Badge */}
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {testimonial.category}
                </span>

                {/* Testimonial Text */}
                <p className="text-muted-foreground my-4 leading-relaxed">{testimonial.content}</p>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                    <AvatarFallback>{testimonial.image}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
