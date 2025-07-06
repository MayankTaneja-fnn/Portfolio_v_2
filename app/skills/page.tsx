"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Brain, Github, Palette, Cpu, BarChart3 } from "lucide-react"
import SidebarNavigation from "@/components/sidebar-navigation"
import TopRightControls from "@/components/top-right-controls"
import Particles from "@/components/particles"

export default function Skills() {
  const skills = [
    // Programming Languages
    { name: "C++", icon: Code, level: 90, category: "Programming Languages", color: "from-blue-500 to-blue-700" },
    {
      name: "JavaScript",
      icon: Code,
      level: 85,
      category: "Programming Languages",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "TypeScript",
      icon: Code,
      level: 80,
      category: "Programming Languages",
      color: "from-blue-600 to-blue-800",
    },
    { name: "Python", icon: Code, level: 60, category: "Programming Languages", color: "from-green-400 to-green-600" },
    { name: "Java", icon: Code, level: 60, category: "Programming Languages", color: "from-orange-500 to-orange-700" },
    { name: "C", icon: Code, level: 80, category: "Programming Languages", color: "from-gray-500 to-gray-700" },
    {
      name: "SQL",
      icon: Database,
      level: 65,
      category: "Programming Languages",
      color: "from-purple-500 to-purple-700",
    },

    // Frameworks
    { name: "React.js", icon: Code, level: 90, category: "Frameworks & Libraries", color: "from-cyan-400 to-cyan-600" },
    { name: "Next.js", icon: Code, level: 70, category: "Frameworks & Libraries", color: "from-gray-400 to-gray-600" },
    {
      name: "React Native",
      icon: Code,
      level: 70,
      category: "Frameworks & Libraries",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Express.js",
      icon: Server,
      level: 85,
      category: "Frameworks & Libraries",
      color: "from-green-500 to-green-700",
    },
    {
      name: "TensorFlow",
      icon: Brain,
      level: 60,
      category: "Frameworks & Libraries",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Pandas",
      icon: BarChart3,
      level: 50,
      category: "Frameworks & Libraries",
      color: "from-indigo-400 to-indigo-600",
    },
    { name: "NumPy", icon: Cpu, level: 55, category: "Frameworks & Libraries", color: "from-blue-500 to-blue-700" },
    {
      name: "Scikit-Learn",
      icon: Brain,
      level: 60,
      category: "Frameworks & Libraries",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Matplotlib",
      icon: BarChart3,
      level: 50,
      category: "Frameworks & Libraries",
      color: "from-red-400 to-red-600",
    },

    // Tools & Technologies
    {
      name: "MongoDB",
      icon: Database,
      level: 85,
      category: "Tools & Technologies",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Firebase",
      icon: Database,
      level: 80,
      category: "Tools & Technologies",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      name: "Supabase",
      icon: Database,
      level: 75,
      category: "Tools & Technologies",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Git/GitHub",
      icon: Github,
      level: 90,
      category: "Tools & Technologies",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Postman",
      icon: Server,
      level: 85,
      category: "Tools & Technologies",
      color: "from-orange-500 to-orange-700",
    },
    {
      name: "Jupyter Notebook",
      icon: Code,
      level: 80,
      category: "Tools & Technologies",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "AirTable",
      icon: Database,
      level: 65,
      category: "Tools & Technologies",
      color: "from-blue-400 to-blue-600",
    },
  ]

  const categories = ["Programming Languages", "Frameworks & Libraries", "Tools & Technologies"]

  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 light:bg-white relative overflow-hidden">
      <SidebarNavigation />
      <TopRightControls />
      <Particles />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50 dark:from-slate-900/50 light:from-white/50 dark:to-slate-900/50 light:to-white/50" />

      <div className="relative z-10 pt-8 lg:pt-20 pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-glow">My Skills</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Full-stack development expertise with AI/ML specialization and modern technology stack
            </p>
          </motion.div>

          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8 gradient-text">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
                      ></div>
                      <div className="relative bg-slate-800/30 blur-backdrop rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300 glow-effect`}
                          >
                            <skill.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </h3>
                            <p className="text-gray-400 text-sm">{skill.level}% Proficiency</p>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className={`skill-bar bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.5,
                                delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                          <div className="absolute right-0 -top-8 text-xs text-blue-400 font-semibold">
                            {skill.level}%
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-4">Skills Overview</h2>
              <p className="text-gray-400">Comprehensive technical expertise across multiple domains</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const categorySkills = skills.filter((s) => s.category === category)
                const avgLevel = Math.round(
                  categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length,
                )

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">{avgLevel}%</div>
                    <div className="text-gray-400 text-sm font-medium">{category}</div>
                    <div className="text-xs text-blue-400 mt-1">{categorySkills.length} skills</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
