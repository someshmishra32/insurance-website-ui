"use client"

import { ReactNode } from "react"

interface GlassmorphismProps {
  children: ReactNode
  className?: string
  intensity?: "light" | "medium" | "strong"
  rounded?: "sm" | "md" | "lg" | "xl" | "full"
  borderColor?: "white" | "primary" | "muted"
}

/**
 * Glassmorphism Component - Frosted glass effect
 * Creates a modern, elegant background effect with backdrop blur
 * 
 * @example
 * <Glassmorphism intensity="medium">
 *   <h1>Frosted Glass</h1>
 * </Glassmorphism>
 */
export function Glassmorphism({
  children,
  className = "",
  intensity = "medium",
  rounded = "lg",
  borderColor = "white",
}: GlassmorphismProps) {
  const intensityClasses = {
    light: "bg-white/10 backdrop-blur-sm",
    medium: "bg-white/20 backdrop-blur-md",
    strong: "bg-white/30 backdrop-blur-lg",
  }

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }

  const borderClasses = {
    white: "border-white/30",
    primary: "border-primary/30",
    muted: "border-muted/30",
  }

  return (
    <div
      className={`
        ${intensityClasses[intensity]}
        ${roundedClasses[rounded]}
        border ${borderClasses[borderColor]}
        backdrop-saturate-180
        transition-all duration-300
        hover:bg-white/25 hover:border-white/40
        ${className}
      `}
    >
      {children}
    </div>
  )
}

/**
 * Glassmorphism Button - Styled button with glass effect
 */
export function GlassmorphismButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`
        bg-white/20 backdrop-blur-md
        border border-white/30
        rounded-lg px-6 py-3
        hover:bg-white/30 hover:border-white/40
        transition-all duration-300
        font-medium
        text-white
        hover:shadow-lg
        active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * Glassmorphism Card - Container with glass effect
 */
interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
}

export function GlassmorphismCard({
  children,
  className = "",
}: GlassmorphismCardProps) {
  return (
    <div
      className={`
        bg-white/10 backdrop-blur-lg
        border border-white/20
        rounded-2xl p-6
        hover:bg-white/15 hover:border-white/30
        transition-all duration-300
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// CSS Classes for direct usage (without component)
export const glassmorphismClasses = {
  container: "bg-white/20 backdrop-blur-md border border-white/30 rounded-lg hover:bg-white/25 hover:border-white/40 transition-all duration-300",
  card: "bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300",
  button: "bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 py-2 hover:bg-white/30 hover:border-white/40 transition-all duration-300 font-medium hover:shadow-lg",
  overlay: "bg-black/50 backdrop-blur-sm border border-white/10",
  badge: "bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1",
}
