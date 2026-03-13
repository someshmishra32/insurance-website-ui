import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function CalculatorSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-5/6 mb-12" />
          </div>
        </div>
      </section>

      {/* Form Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i}>
                      <Skeleton className="h-4 w-1/4 mb-3" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  ))}
                  <Skeleton className="h-12 w-full mt-8" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export function PolicyCheckSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-5/6" />
          </div>
        </div>
      </section>

      {/* Upload Area Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-12 border-2 border-dashed">
                <Skeleton className="h-32 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export function AIAssistantSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-5 w-1/2 mx-auto" />
        </div>
      </section>

      {/* Chat Area Skeleton */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <Skeleton className="h-20 w-3/4 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Input Area Skeleton */}
      <div className="container mx-auto px-4 max-w-2xl pb-8">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
  )
}

export function BlogListSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-48 w-full mb-4 rounded-lg" />
                  <Skeleton className="h-4 w-1/4 mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export function CompareSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      </section>

      {/* Table Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
