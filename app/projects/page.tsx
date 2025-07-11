"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import SidebarNavigation from "@/components/sidebar-navigation"
import TopRightControls from "@/components/top-right-controls"
import Particles from "@/components/particles"
import Loading from "@/components/loading"

export default function Projects() {
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Sahayak - Emergency Response App",
      description:
        "AI-powered mobile app that enables users to seek and provide real-time help during emergencies by notifying nearby users and authorities",
      details: [
        "AI models classify alerts by severity and detect misuse",
        "Automatic notification to police, fire brigade, or ambulance",
        "Real-time location-based emergency assistance",
        "Built with React Native for cross-platform compatibility",
        "Flask backend with Groq AI integration",
      ],
      deployLink: "https://drive.usercontent.google.com/download?id=1Vlwh2p0kpfphOaetGMjfxLWULUKSTJi9&export=download&authuser=0",
      githubLink: "https://github.com/MayankTaneja-fnn/Sahayak",
      tech: ["React Native", "ExpressJS", "Flask", "Groq", "Firebase"],
      category: "Mobile App",
      featured: false,
      duration: "May 2025 - June 2025",
      image: "/sahayak-project.jpg",
    },
    {
      title: "Vruksh Ekatra",
      description:
        "A web application that helps educators upload and manage content, and students to access and learn from it",
      details: [
        "User-friendly interface for content management and access and uses Airtable for content storage",
        "Real-time collaboration tools for educators and students",
        "Analytics dashboard for tracking student progress and helps NGO manage their content",
        "3 level authentication system for secure access for admin, educator, and student",
        "Responsive design for mobile and desktop access",
      ],
      deployLink: "https://vruksh-ekatra.vercel.app/",
      githubLink: "https://github.com/MayankTaneja-fnn/Vruksh_Ekatra",
      tech: ["TypeScript", "NextJS", "ExpressJS", "AirTable", "Tailwind CSS", "Gemini"],
      category: "Web Application",
      featured: false,
      duration: "April 2025 - May 2025",
      image: "/vruksh.png",
    },
    {
      title: "Ishanya Dashboard",
      description:
        "A web application for managing details of educators and students for NGO.",
      details: [
        "The admin can add, edit, and delete details of educators and students and assign tasks to educators",
        "Educators can view their assigned tasks and update their status",
        "Generate progress report for each student",
        "Parents can login and see daily progress and updates on their students given by educators.",
        "Discussion page and kanban board for teachers and feedback page for parents",
      ],
      deployLink: "https://ishanya-dashboard-hub-82-54.vercel.app/",
      githubLink: "https://github.com/MayankTaneja-fnn/ishanya-dashboard-hub-82-54",
      tech: ["TypeScript", "ReactJS", "ExpressJS", "SupaBase", "Vite", "Tailwind CSS", "Google Cloud Platform", "LangChain"],
      category: "AI Platform",
      featured: false,
      duration: "Jan 2025 - March 2025",
      image: "/ishanya.png",
    }
    ,
    {
      title: "DTU Website - Extension & Field Outreach",
      description:
        "Official website for Centre of Extension and Field Outreach of Delhi Technological University with comprehensive features",
      details: [
        "User authentication and authorization system",
        "Automatic attendance tracking system",
        "Activity logs and posting functionality",
        "Responsive design with modern UI/UX",
        "Admin dashboard for content management",
      ],
      deployLink: "https://dtu-sjva.vercel.app/",
      githubLink: "https://github.com/MayankTaneja-fnn/DTU",
      tech: ["ReactJS", "ExpressJS", "MongoDB", "JavaScript", "Tailwind CSS"],
      category: "Web Application",
      featured: false,
      duration: "Sept 2024 - Dec 2024",
      image: "/extension_outreach.png",
    },
    {
      title: "INT-O-VIEW - AI Interview Platform",
      description:
        "AI-based interview platform for simulating the recruitment process using advanced Large Language Models",
      details: [
        "Leverages two LLMs for comprehensive interview experience",
        "Real-time AI-powered question generation",
        "Performance analysis and feedback system",
        "TypeScript for enhanced code reliability",
        "Integration with ChatGPT-4 and Groq APIs",
      ],
      deployLink: "https://int-o-view.vercel.app/",
      githubLink: "https://github.com/MayankTaneja-fnn/Int-O-View",
      tech: ["TypeScript", "ReactJS", "ExpressJS", "MongoDB", "Vite", "Tailwind CSS", "Groq", "ChatGPT-4"],
      category: "AI Platform",
      featured: false,
      duration: "June 2024 - Aug 2024",
      image: "/interview-platform.png",
    },
    
    
    {
      title: "TripOn",
      description:
        "A website that provides details about various places to visit in India, including popular tourist spots and hidden gems",
      details: [
        "Made on MVC architecture using ejs",
        "Helps users to connect to local of that place to know more about the place",
        "Gives details about the place like best time to visit, how to reach, etc.",
        "Helps in making customized travel plans",
        "Provides taxi fares and hotel fares for the trip and various restaurants and complete itinerary.",
      ],
      deployLink: "https://tripon-oodg.onrender.com/",
      githubLink: "https://github.com/MayankTaneja-fnn/TRIPON",
      tech: ["JavaScript", "EJS", "ExpressJS", "MongoDB"],
      category: "Web Application",
      featured: false,
      duration: "Feb 2024 - May 2024",
      image: "/tripon.png",
    },
  ]

  const categories = ["All", "Mobile App", "Web Application", "AI Platform"]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>

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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-glow">My Projects</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                AI-powered solutions and innovative web applications that solve real-world problems
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    filter === category
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white glow-effect"
                      : "border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent blur-backdrop"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-slate-800/30 blur-backdrop rounded-3xl p-8 h-full hover:bg-slate-800/50 transition-all duration-300">
                      {project.featured && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}

                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Project Image */}
                        <div className="lg:col-span-1">
                          <div className="relative h-48 lg:h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="lg:col-span-2 space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-400">
                              <Calendar className="w-4 h-4 mr-1" />
                              {project.duration}
                            </div>
                          </div>

                          <p className="text-gray-300 leading-relaxed">{project.description}</p>

                          <div>
                            <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {project.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-300 text-sm flex items-start">
                                  <span className="text-blue-400 mr-3 mt-1">▸</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-4 pt-4">
                            <Button
                              asChild
                              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full glow-effect"
                            >
                              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 rounded-full bg-transparent blur-backdrop"
                            >
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
