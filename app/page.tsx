"use client"

import { motion } from "framer-motion"
import { Code, Award, Trophy, User, Github, Linkedin, Mail, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SidebarNavigation from "@/components/sidebar-navigation"
import TopRightControls from "@/components/top-right-controls"
import Particles from "@/components/particles"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 light:bg-white relative overflow-hidden">
      <SidebarNavigation />
      <TopRightControls />
      <Particles />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50 dark:from-slate-900/50 light:from-white/50 dark:to-slate-900/50 light:to-white/50" />

      <div className="relative z-10 pt-8 lg:pt-20 pb-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">Hi,</h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    I'm{" "}
                    <span className="relative">
                      <span className="text-blue-400">Mayank</span>
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </span>
                    ,
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    web developer.
                  </h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-400 max-w-lg"
                >
                  Full Stack Developer / AI/ML Expert / Problem Solver
                </motion.p>
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-none px-8 py-4 text-lg font-medium transition-all duration-300 uppercase tracking-wider"
                  >
                    Contact Me
                  </Button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex gap-6 pt-8"
              >
                {[
                  { icon: Github, href: "https://github.com/MayankTaneja-fnn", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/mayank-taneja-2651a4287/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:tanejamayank21@gmail.com", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-slate-800/50 text-gray-400 hover:text-blue-400 transition-colors border border-slate-700 hover:border-blue-400"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="relative">
                {/* 3D "M" Logo */}
                <motion.div
                  className="relative"
                  animate={{
                    rotateY: [0, 5, -5, 0],
                    rotateX: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {/* Main M Shape */}
                  <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem]">
                    {/* Left Stroke */}
                    <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-t-3xl rounded-b-lg transform -skew-y-3 shadow-2xl" />

                    {/* Right Stroke */}
                    <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-b from-pink-500 to-red-500 rounded-t-3xl rounded-b-lg transform skew-y-3 shadow-2xl" />

                    {/* Middle V Shape */}
                    <div className="absolute left-12 top-0 w-12 h-48 bg-gradient-to-b from-cyan-400 to-pink-500 transform rotate-12 origin-bottom rounded-t-2xl shadow-xl" />
                    <div className="absolute right-12 top-0 w-12 h-48 bg-gradient-to-b from-pink-500 to-cyan-400 transform -rotate-12 origin-bottom rounded-t-2xl shadow-xl" />

                    {/* Glow Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/10 to-transparent blur-2xl" />
                  </div>
                </motion.div>

                {/* Floating Particles around logo */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: `${20 + Math.cos((i * 45 * Math.PI) / 180) * 200}px`,
                      top: `${150 + Math.sin((i * 45 * Math.PI) / 180) * 200}px`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {[
              { icon: Code, label: "Projects", href: "/projects", color: "from-blue-500 to-cyan-500" },
              { icon: User, label: "Skills", href: "/skills", color: "from-purple-500 to-pink-500" },
              { icon: GraduationCap, label: "Education", href: "/education", color: "from-green-500 to-emerald-500" },
              { icon: Briefcase, label: "Position", href: "/experience", color: "from-orange-500 to-red-500" },
              { icon: Award, label: "Certificates", href: "/certificates", color: "from-yellow-500 to-orange-500" },
              { icon: Trophy, label: "Achievements", href: "/achievements", color: "from-indigo-500 to-purple-500" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <Link href={item.href}>
                  <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{item.label}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
