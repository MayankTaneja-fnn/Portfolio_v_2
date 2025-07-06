"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Award, Target, Code, BookOpen } from "lucide-react"
import SidebarNavigation from "@/components/sidebar-navigation"
import TopRightControls from "@/components/top-right-controls"
import Particles from "@/components/particles"

export default function Achievements() {
  const achievements = [
    {
      title: "JPMorgan Chase & Co Code For Good Hackathon Winner",
      description:
        "Won the prestigious Code For Good Hackathon in Mumbai 2025, developing innovative solutions for social good",
      date: "2025",
      category: "Competition",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600",
      impact: "Mumbai 2025 Winner",
      featured: false,
      location: "Mumbai",
    },
    {
      title: "Morgan Stanley Code To Give Hackathon Finalist",
      description:
        "Reached the finals of Morgan Stanley's Code To Give Hackathon 2025, showcasing technical excellence and innovation",
      date: "2025",
      category: "Competition",
      icon: Award,
      color: "from-blue-500 to-blue-600",
      impact: "Top Finalist",
      featured: false,
      location: "National Level",
    },
    {
      title: "Smart India Hackathon Nationalist",
      description:
        "Selected as a nationalist in Smart India Hackathon 2024, representing innovative problem-solving capabilities",
      date: "2024",
      category: "Competition",
      icon: Star,
      color: "from-green-500 to-green-600",
      impact: "National Recognition",
      featured: false,
      location: "India",
    },
    {
      title: "Academic Excellence at DTU",
      description: "Maintaining exceptional academic performance with CGPA of 8.93/10 in Computer Science Engineering",
      date: "2023-2027",
      category: "Academic",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      impact: "CGPA: 8.93/10",
      featured: false,
      location: "Delhi Technological University",
    },
    {
      title: "1000+ DSA Problems Solved",
      description:
        "Successfully solved over 1000 Data Structures and Algorithms problems across multiple competitive programming platforms",
      date: "2023-2024",
      category: "Programming",
      icon: Code,
      color: "from-orange-500 to-orange-600",
      impact: "1000+ Problems",
      featured: false,
      platforms: ["LeetCode", "Codeforces", "CodeChef", "Coding Studio"],
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-glow">Achievements</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recognition and accomplishments in hackathons, academics, and competitive programming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                ></div>
                <div className="relative bg-slate-800/30 blur-backdrop rounded-3xl p-6 h-full hover:bg-slate-800/50 transition-all duration-300">
                  {achievement.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}

                  <div className="flex items-start mb-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${achievement.color} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 glow-effect`}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                          {achievement.category}
                        </span>
                        <span className="text-gray-400 text-sm">{achievement.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{achievement.description}</p>

                  {achievement.location && (
                    <div className="mb-3">
                      <span className="text-xs text-blue-400 font-medium">Location: </span>
                      <span className="text-xs text-gray-300">{achievement.location}</span>
                    </div>
                  )}

                  {achievement.platforms && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-blue-400 mb-2">Platforms:</h4>
                      <div className="flex flex-wrap gap-1">
                        {achievement.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-500/30"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center text-xs text-gray-400">
                      <Target className="w-3 h-3 mr-1" />
                      Impact
                    </div>
                    <div className="text-xs font-semibold text-blue-400">{achievement.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-4">Achievement Overview</h2>
              <p className="text-gray-400">A summary of my accomplishments and recognition</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
                <div className="text-gray-400 text-sm">Total Achievements</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                <div className="text-gray-400 text-sm">Hackathon Wins/Finals</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">8.93</div>
                <div className="text-gray-400 text-sm">CGPA at DTU</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-400 text-sm">DSA Problems</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
