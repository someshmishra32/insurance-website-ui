"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get stored theme preference
    const stored = localStorage.getItem("theme") as Theme | null
    const initialTheme = stored || "system"
    setThemeState(initialTheme)

    // Apply theme
    applyTheme(initialTheme)
  }, [])

  const applyTheme = (t: Theme) => {
    const html = document.documentElement
    let isDarkMode = t === "dark"

    if (t === "system") {
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    setIsDark(isDarkMode)

    if (isDarkMode) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem("theme", t)
    applyTheme(t)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, isDark } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (theme === "system") {
          setTheme(isDark ? "light" : "dark")
        } else if (theme === "light") {
          setTheme("dark")
        } else {
          setTheme("system")
        }
      }}
      className={`
        relative p-2 rounded-lg
        bg-muted hover:bg-muted text-foreground
        transition-all duration-300
        ${className}
      `}
      title={`Current theme: ${theme}`}
    >
      <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        exit={{ rotate: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={theme}
      >
        {isDark ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  )
}

export function ThemeToggleDropdown() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-muted hover:bg-muted text-foreground transition-all"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-40 rounded-lg border border-muted bg-background shadow-lg z-50"
        >
          {(["light", "dark", "system"] as const).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t)
                setIsOpen(false)
              }}
              className={`
                w-full px-4 py-2 text-sm text-left
                transition-all
                ${theme === t
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-muted"
                }
              `}
            >
              {t === "light" && <Sun className="h-4 w-4 inline mr-2" />}
              {t === "dark" && <Moon className="h-4 w-4 inline mr-2" />}
              {t === "system" && <div className="h-4 w-4 inline mr-2">🔄</div>}
              {t.charAt(0).toUpperCase() + t.slice(1)} Mode
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}
