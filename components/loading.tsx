"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
    >
      <div className="text-center">
        <div className="loading-spinner w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full mx-auto mb-4"></div>
        <p className="text-blue-400 text-lg">Loading...</p>
      </div>
    </motion.div>
  )
}
