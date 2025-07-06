"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Award, Trophy, Mail, GraduationCap, Briefcase, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      // Don't auto-open on desktop anymore
      setIsOpen(false)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: Code },
    { href: "/skills", label: "Skills", icon: User },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/experience", label: "Positions", icon: Briefcase },
    { href: "/certificates", label: "Certificates", icon: Award },
    { href: "/achievements", label: "Achievements", icon: Trophy },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
      {/* Three-line Menu Button - Always visible */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 shadow-lg"
        size="sm"
      >
        <div className="flex flex-col space-y-1">
          <div className="w-5 h-0.5 bg-white rounded"></div>
          <div className="w-5 h-0.5 bg-white rounded"></div>
          <div className="w-5 h-0.5 bg-white rounded"></div>
        </div>
      </Button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-xl z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-track-slate-700"
            >
              {/* Header with Close Button */}
              <div className="sticky top-0 bg-white dark:bg-slate-900 p-6 border-b border-gray-200 dark:border-slate-700 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      href="/"
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Mayank Taneja
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Full Stack Developer</p>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full p-2"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <div
                          className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                            pathname === item.href
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                        >
                          <div className="flex items-center">
                            <item.icon className="w-5 h-5 mr-3" />
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              pathname === item.href ? "rotate-90" : "group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
