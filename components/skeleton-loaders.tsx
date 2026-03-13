"use client"

import { motion } from "framer-motion"

export function SkeletonLoader() {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="bg-muted rounded-md h-4 w-full"
    />
  )
}

export function CalculatorFormSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="space-y-2">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-muted rounded-md h-4 w-24"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            className="bg-muted rounded-md h-10 w-full"
          />
        </div>
      ))}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        className="bg-muted rounded-md h-12 w-full"
      />
    </div>
  )
}

export function PolicyCheckSkeleton() {
  return (
    <div className="space-y-4">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="bg-muted rounded-lg h-32 w-full"
      />
      <div className="grid md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className="bg-muted rounded-lg h-24 w-full"
          />
        ))}
      </div>
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="space-y-4">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="bg-muted rounded-lg h-48 w-full"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
        className="bg-muted rounded-md h-6 w-3/4"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        className="bg-muted rounded-md h-4 w-full"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        className="bg-muted rounded-md h-4 w-2/3"
      />
    </div>
  )
}

export function MessageSkeleton() {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="bg-muted rounded-lg h-16 w-2/3"
    />
  )
}

export function ComparisonTableSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          className="grid grid-cols-4 gap-2"
        >
          {[1, 2, 3, 4].map((j) => (
            <div key={j} className="bg-muted rounded-md h-12 w-full" />
          ))}
        </motion.div>
      ))}
    </div>
  )
}
