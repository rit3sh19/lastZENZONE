"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heart, Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function MainNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const routes = [
    {
      href: "#features",
      label: "Features",
      active: pathname === "#features",
    },
    {
      href: "#pricing",
      label: "Pricing",
      active: pathname === "#pricing",
    },
    {
      href: "#testimonials",
      label: "Testimonials",
      active: pathname === "#testimonials",
    },
    {
      href: "#team",
      label: "Our Team",
      active: pathname === "#team",
    },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center
          ">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                ZenZone
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-300 group",
                  route.active 
                    ? "text-amber-500" 
                    : "text-gray-700 dark:text-gray-300 hover:text-amber-500"
                )}
                onClick={(e) => {
                  if (route.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(route.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      // Update URL without page reload
                      window.history.pushState(null, '', route.href);
                    }
                  }
                }}
              >
                {route.label}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300",
                  route.active ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>



          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "block px-4 py-2 text-base font-medium rounded-md transition-colors",
                  route.active 
                    ? "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" 
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  )
}
