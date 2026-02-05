"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ArticleNavItem {
  title: string
  slug: string
  href: string
  image?: string
}

interface ArticleNavigationProps {
  currentSlug: string
  articles: ArticleNavItem[]
}

export function ArticleNavigation({ currentSlug, articles }: ArticleNavigationProps) {
  const currentIndex = articles.findIndex((article) => article.slug === currentSlug)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  return (
    <div className="my-12">
      <div className="grid md:grid-cols-2 gap-6">
        {prevArticle ? (
          <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
            <div className="relative w-full h-32 hidden sm:block">
              <Image
                src={prevArticle.image || "/placeholder.svg"}
                alt={prevArticle.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Previous Article
                  </p>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {prevArticle.title}
                  </h3>
                  <Button variant="link" className="px-0" asChild>
                    <Link href={prevArticle.href}>
                      Read Previous ←
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="opacity-50">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">No previous articles</p>
            </CardContent>
          </Card>
        )}

        {nextArticle ? (
          <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
            <div className="relative w-full h-32 hidden sm:block">
              <Image
                src={nextArticle.image || "/placeholder.svg"}
                alt={nextArticle.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1 text-right">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Next Article
                  </p>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {nextArticle.title}
                  </h3>
                  <Button variant="link" className="px-0" asChild>
                    <Link href={nextArticle.href}>
                      Read Next →
                    </Link>
                  </Button>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="opacity-50">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">No more articles</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Back to Blog Link */}
      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/blog">← Back to All Articles</Link>
        </Button>
      </div>
    </div>
  )
}
