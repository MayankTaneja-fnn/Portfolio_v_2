"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Send, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SidebarNavigation from "@/components/sidebar-navigation"
import TopRightControls from "@/components/top-right-controls"
import Particles from "@/components/particles"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanejamayank21@gmail.com",
      href: "mailto:tanejamayank21@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9034827529",
      href: "tel:+919034827529",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mayanktaneja",
      href: "https://linkedin.com/in/mayanktaneja",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mayanktaneja",
      href: "https://github.com/mayanktaneja",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sonipat, Haryana, India",
      href: null,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-glow">Get In Touch</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects? Let's discuss how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-8 h-8 mr-3 text-blue-400" />
                  Let's Connect
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always excited to work on innovative projects and collaborate with talented individuals. Whether
                  you have an AI/ML project, need full-stack development, or want to discuss technology trends, feel
                  free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group"
                  >
                    <div className="flex items-center p-4 rounded-2xl bg-slate-800/30 blur-backdrop hover:bg-slate-800/50 transition-all duration-300">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 glow-effect">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-blue-400 mb-1">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-gray-300 hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-300">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/mayanktaneja", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/mayanktaneja", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:tanejamayank21@gmail.com", label: "Email" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl bg-slate-800/50 blur-backdrop text-gray-400 hover:text-blue-400 transition-colors glow-effect"
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/30 blur-backdrop rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="bg-slate-700/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-blue-400 rounded-xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="bg-slate-700/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-blue-400 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="bg-slate-700/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-blue-400 rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        className="bg-slate-700/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-blue-400 resize-none rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="loading-spinner w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
