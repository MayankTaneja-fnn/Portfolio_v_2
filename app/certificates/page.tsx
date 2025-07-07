"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Building, Star } from "lucide-react"
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
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/K35Y6JFP9E6K",
      featured: false,
      image: "/ml-certificate.png",
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
      verifyLink: "https://certificate.codingninjas.com/view/200644a90a149213",
      featured: false,
      image: "/react.png",
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
      verifyLink: "https://certificate.codingninjas.com/view/db2a9d44b7273014",
      featured: false,
      image: "/dsa.png",
      achievements: [
        "Solved 1000+ problems across platforms",
        "Mastered Linked Lists, Trees, Graphs, Heaps",
        "Advanced techniques: DP, Backtracking",
      ],
    },
    // Backend Completion
    {
      title: "Backend Development Completion",
      issuer: "Coding Ninjas",
      date: "Feb 2024 - May 2024",
      description:
        "Comprehensive backend development course covering Node.js, Express.js, MongoDB, REST APIs, and authentication.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication","MVC Architecture", "Backend Architecture"],
      featured: false,
      image: "/backend_cn.png",
      projects: "Built scalable backend APIs and authentication systems.",
    },
    // Frontend Completion
    {
      title: "Frontend Development Completion",
      issuer: "Coding Ninjas",
      date: "Jan 2024 - Mar 2024",
      description:
        "In-depth frontend course covering HTML, CSS, JavaScript, React.js, and responsive web design.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design", "Frontend Architecture"],
      featured: false,
      image: "/frontend_cn.png",
      projects: "Developed multiple responsive web applications.",
    },
    // Intro to C++
    {
      title: "Introduction to C++",
      issuer: "Coding Ninjas",
      date: "Aug 2023 - Oct 2023",
      description:
        "Fundamental C++ programming course covering syntax, OOP, STL, and problem solving.",
      skills: ["C++", "OOP", "STL", "Problem Solving", "Programming Basics"],
      featured: false,
      image: "/into-c++.png",
      achievements: ["Completed 50+ coding challenges", "Mastered C++ basics and OOP concepts"],
    },
    // Hackathons
    {
      title: "JPMC Code for Good Hackathon Winner",
      issuer: "J.P. Morgan & Chase, Mumbai",
      date: "2025",
      description:
        "24-hour hackathon in Mumbai. Developed a fintech solution and won the competition.",
      skills: ["Fintech", "Teamwork", "Rapid Prototyping", "Presentation"],
      featured: false,
      image: "/JPMC CFG.jpg",
      achievements: ["Winner, 24-hour hackathon, Mumbai 2025"],
    },
    {
      title: "Morgan Stanley Code to Give Finalist",
      issuer: "Morgan Stanley",
      date: "2025",
      description:
        "7-day virtual hackathon. Built a social impact project and reached the finals.",
      skills: ["Social Impact", "Full Stack Development", "Pitching", "Collaboration"],
      featured: false,
      image: "/ms_ctg.png",
      achievements: ["Finalist, 7-day virtual hackathon, 2025"],
    },
    {
      title: "Smart India Hackathon Nationalist",
      issuer: "SIH 2024",
      date: "2024",
      description:
        "National-level hackathon. Developed a government solution and reached the national stage.",
      skills: ["Government Solutions", "Innovation", "Teamwork"],
      featured: false,
      image: "/sih.png",
      achievements: ["Nationalist, SIH 2024"],
    },
    {
      title: "BrainWave Hackathon Participant",
      issuer: "DTU, Delhi",
      date: "2024",
      description:
        "24-hour hackathon at DTU. Built a health-tech prototype in a team.",
      skills: ["Health-Tech", "Prototyping", "Teamwork"],
      featured: false,
      image: "/brainwave.png",
      achievements: ["Participant, BrainWave 2024, DTU"],
    },
    // Social Work
    {
      title: "Shubhakshika NGO Volunteer",
      issuer: "Shubhakshika NGO",
      date: "2023 - 2024",
      description:
        "Volunteered for Shubhakshika NGO, contributing to education and social welfare initiatives.",
      skills: ["Volunteering", "Education", "Social Welfare"],
      featured: false,
      image: "/shubhakshika.png",
      achievements: ["Organized educational camps", "Community outreach"],
    },
    {
      title: "NSS Volunteer",
      issuer: "National Service Scheme (NSS)",
      date: "2023 - 2024",
      description:
        "Active member of NSS, participated in various social service and awareness programs.",
      skills: ["Social Service", "Awareness Campaigns", "Community Work"],
      featured: false,
      image: "/nsss.png",
      achievements: ["Participated in cleanliness drives", "Organized awareness campaigns"],
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

                  {/* 50-50 Split Certificate Layout */}
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Certificate Image - 50% width on large screens */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                      <div className="relative w-full h-48 lg:h-80 rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    {/* Certificate Content - 50% width on large screens */}
                    <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
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
              <p className="text-gray-400">Continuous learning, hackathons, and social impact</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">{certificates.length}</div>
                <div className="text-gray-400 text-sm">Total Certificates</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">4</div>
                <div className="text-gray-400 text-sm">Hackathons</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-gray-400 text-sm">Social Work</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">2025</div>
                <div className="text-gray-400 text-sm">Latest Year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
