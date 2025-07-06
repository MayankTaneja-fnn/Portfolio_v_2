"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Code, Award, Trophy, Mail, Download, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: Code },
    { href: "/skills", label: "Skills", icon: User },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/certificates", label: "Certificates", icon: Award },
    { href: "/achievements", label: "Achievements", icon: Trophy },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "/Mayank_Taneja_Resume.pdf"
    link.download = "Mayank_Taneja_Resume.pdf"
    link.click()
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 blur-backdrop" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold gradient-text hover:scale-105 transition-transform">
              Mayank Taneja
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${
                      pathname === item.href
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/5 dark:text-gray-300 light:text-slate-600"
                    } transition-all duration-200 rounded-full`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <ThemeToggle />
              <Button
                onClick={handleDownloadResume}
                className="ml-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-300 hover:text-blue-400 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 mobile-menu-overlay bg-slate-900/90" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-slate-800/95 dark:bg-slate-800/95 light:bg-white/95 blur-backdrop p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-4 mt-16">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-left ${
                        pathname === item.href
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/5 dark:text-gray-300 light:text-slate-600"
                      } rounded-xl`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-gray-400 text-sm">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  onClick={() => {
                    handleDownloadResume()
                    setIsOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl mt-4"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
