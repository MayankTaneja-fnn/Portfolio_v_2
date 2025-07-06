"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useRef } from "react"
import SidebarNavigation from "@/components/sidebar-navigation"
import TopRightControls from "@/components/top-right-controls"

export default function Education() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const educationData = [
    {
      id: 1,
      degree: "Secondary School",
      institution: "Little Angels School, Sonipat",
      duration: "04/2011 - 03/2021",
      logo: "🏫",
      side: "left",
      description:
        "Completed secondary education with strong foundation in science and mathematics. Developed early interest in technology and problem-solving.",
    },
    {
      id: 2,
      degree: "Higher Secondary School",
      institution: "Sant Gyaneshwar School, Alipur",
      duration: "04/2021 - 04/2023",
      logo: "📚",
      side: "right",
      description:
        "Specialized in Science stream (PCM with Computer Science). Achieved 90.6% in board examinations with excellence in Mathematics and Computer Science.",
    },
    {
      id: 3,
      degree: "Bachelors of Technology Computer Science",
      institution: "Delhi Technological University",
      duration: "08/2023 - 05/2027",
      logo: "🎓",
      side: "left",
      description:
        "Currently pursuing B.Tech in Computer Science & Engineering with CGPA of 8.93/10. Active in hackathons, coding competitions, and technical societies.",
    },
  ]

  // Animate the car along the timeline - positioned above the dotted line
  const carY = useTransform(scrollYProgress, [0, 1], [-20, 780])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <SidebarNavigation />
      <TopRightControls />

      <div className="pt-8 lg:pt-16 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto" ref={containerRef}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Education</h1>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Dotted Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #3b82f6 0px, #3b82f6 8px, transparent 8px, transparent 16px)",
              }}
            />

            {/* Animated Car - positioned above the dotted line and facing down */}
            <motion.div
              style={{ y: carY }}
              className="absolute left-1/2 transform -translate-x-1/2 z-20 text-4xl"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 180 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              🚗
            </motion.div>

            {/* Timeline Dots */}
            {educationData.map((item, index) => (
              <TimelineDot key={item.id} index={index} />
            ))}

            {/* Timeline Items */}
            <div className="space-y-32">
              {educationData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineDot({ index }: { index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-lg"
      style={{ top: `${index * 512 + 150}px` }}
    />
  )
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const isLeft = item.side === "left"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
    >
      <div className={`w-5/12 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
        >
          <div className={`flex items-center mb-6 ${isLeft ? "justify-end" : "justify-start"}`}>
            <div className="text-5xl mr-4 filter drop-shadow-lg">{item.logo}</div>
            <div className={isLeft ? "text-right" : "text-left"}>
              <h3 className="text-xl font-bold text-blue-600 mb-2">{item.degree}</h3>
              <p className="text-orange-500 font-semibold mb-1">{item.institution}</p>
              <p className="text-gray-500 text-sm font-medium">{item.duration}</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
