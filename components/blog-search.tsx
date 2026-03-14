"use client"

import { useState, useMemo } from "react"
import { Search, X, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export interface BlogPost {
  title: string
  excerpt: string
  category: string
  readingTime: number
  difficulty: "beginner" | "intermediate" | "advanced"
  slug: string
}

interface BlogSearchProps {
  posts: BlogPost[]
  onFilterChange?: (filtered: BlogPost[]) => void
}

const categories = [
  "All",
  "Term Insurance",
  "Health Insurance",
  "Family Floater",
  "Claim Process",
  "Senior Citizens",
  "Government Initiatives",
]

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export function BlogSearch({ posts, onFilterChange }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [sortBy, setSortBy] = useState<"recent" | "reading-time">( "recent")

  // Filter and search
  const filteredPosts = useMemo(() => {
    let result = [...posts]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((post) => post.category === selectedCategory)
    }

    // Difficulty filter
    if (selectedDifficulty !== "All") {
      result = result.filter(
        (post) =>
          post.difficulty ===
          selectedDifficulty.toLowerCase()
      )
    }

    // Sorting
    if (sortBy === "reading-time") {
      result.sort((a, b) => a.readingTime - b.readingTime)
    }

    return result
  }, [posts, searchQuery, selectedCategory, selectedDifficulty, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSelectedDifficulty("All")
    setSortBy("recent")
  }

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedDifficulty !== "All"

  // Notify parent component of filtered results
  useMemo(() => {
    onFilterChange?.(filteredPosts)
  }, [filteredPosts, onFilterChange])

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search articles, guides, topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 h-11"
        />
        <AnimatePresence>
          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3 rounded-md p-1 hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Filter Tabs */}
      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <p className="mb-2 text-sm font-semibold text-muted-foreground">Category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <p className="mb-2 text-sm font-semibold text-muted-foreground">Difficulty</p>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <motion.button
                key={diff}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDifficulty(diff)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedDifficulty === diff
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted text-foreground"
                }`}
              >
                {diff}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sort & Clear */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "recent" | "reading-time")}
              className="rounded-md border border-muted bg-background px-3 py-1 text-sm"
            >
              <option value="recent">Recent</option>
              <option value="reading-time">Reading Time</option>
            </select>
          </div>

          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </motion.button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <motion.div
        key={filteredPosts.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between rounded-lg border border-muted bg-muted/30 p-4"
      >
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-yellow-500" />
          <span className="text-sm">
            Found{" "}
            <strong className="text-primary">{filteredPosts.length}</strong>{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {filteredPosts.length > 0 && (
          <span className="text-xs text-muted-foreground">
            Avg. {Math.round(filteredPosts.reduce((a, b) => a + b.readingTime, 0) / filteredPosts.length)} min read
          </span>
        )}
      </motion.div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-lg border-2 border-dashed border-muted p-8 text-center"
        >
          <p className="mb-2 text-lg font-semibold">No articles found</p>
          <p className="text-sm text-muted-foreground mb-4">
            Try adjusting your filters or search terms
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </motion.div>
      )}
    </div>
  )
}
