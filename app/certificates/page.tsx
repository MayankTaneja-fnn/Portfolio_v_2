"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Building, ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SidebarNavigation from "@/components/sidebar-navigation"
import TopRightControls from "@/components/top-right-controls"
import Particles from "@/components/particles"

export default function Certificates() {
  const certificates = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "Aug 2024 - Dec 2024",
      description:
        "Comprehensive 3-course specialization covering Supervised Machine Learning, Advanced Learning Algorithms, and Unsupervised Learning",
      skills: [
        "Machine Learning",
        "Python",
        "TensorFlow",
        "Neural Networks",
        "Deep Learning",
        "Supervised Learning",
        "Unsupervised Learning",
      ],
      credentialId: "coursera-ml-spec-001",
      verifyLink: "https://coursera.org/verify/specialization/ml",
      featured: true,
      image: "/ml-certificate.jpg",
      courses: [
        "Supervised Machine Learning: Regression and Classification",
        "Advanced Learning Algorithms",
        "Unsupervised Learning, Recommenders, Reinforcement Learning",
      ],
    },
    {
      title: "MERN Stack Development",
      issuer: "Coding Ninjas",
      date: "Jan 2024 - July 2024",
      description:
        "Complete MERN Stack development course covering JavaScript, Express.js, MongoDB, and React.js with hands-on projects",
      skills: ["JavaScript", "React.js", "Express.js", "MongoDB", "Node.js", "REST APIs", "Full Stack Development"],
      credentialId: "cn-mern-001",
      verifyLink: "https://codingninjas.com/verify/mern",
      featured: true,
      image: "/mern-certificate.jpg",
      projects: "Built 5+ full-stack applications",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Coding Ninjas",
      date: "Aug 2023 - Dec 2023",
      description:
        "Comprehensive DSA course covering various data structures and algorithmic techniques with 1000+ problem solving",
      skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Backtracking", "C++", "Problem Solving"],
      credentialId: "cn-dsa-001",
      verifyLink: "https://codingninjas.com/verify/dsa",
      featured: true,
      image: "/dsa-certificate.jpg",
      achievements: [
        "Solved 1000+ problems across platforms",
        "Mastered Linked Lists, Trees, Graphs, Heaps",
        "Advanced techniques: DP, Backtracking",
      ],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-glow">Certificates</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional certifications in Machine Learning, Full-Stack Development, and Data Structures & Algorithms
            </p>
          </motion.div>

          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/30 blur-backdrop rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-300">
                  {cert.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}

                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Certificate Image */}
                    <div className="lg:col-span-1">
                      <div className="relative h-48 lg:h-full rounded-2xl overflow-hidden">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="lg:col-span-3 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                              {cert.title}
                            </h3>
                            <div className="flex items-center text-green-400 mb-2">
                              <Building className="w-4 h-4 mr-2" />
                              <span className="font-semibold">{cert.issuer}</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{cert.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full"
                        >
                          <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Verify
                          </a>
                        </Button>
                      </div>

                      <p className="text-gray-300 leading-relaxed">{cert.description}</p>

                      {/* Additional Details */}
                      {cert.courses && (
                        <div>
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Courses Completed:</h4>
                          <ul className="space-y-1">
                            {cert.courses.map((course, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="text-green-400 mr-2 mt-1">•</span>
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {cert.achievements && (
                        <div>
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {cert.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="text-green-400 mr-2 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {cert.projects && (
                        <div className="bg-blue-500/10 rounded-lg p-3">
                          <p className="text-blue-300 text-sm font-medium">{cert.projects}</p>
                        </div>
                      )}

                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-3">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <div className="text-xs text-gray-400">ID: {cert.credentialId}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificate Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-4">Certification Overview</h2>
              <p className="text-gray-400">Continuous learning and professional development</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <div className="text-gray-400 text-sm">Total Certificates</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-gray-400 text-sm">Problems Solved</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Skills Mastered</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">2024</div>
                <div className="text-gray-400 text-sm">Latest Year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
