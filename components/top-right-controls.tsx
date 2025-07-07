"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TopRightControls() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Mayank_Taneja_Resume_v3.pdf"
    link.download = "Mayank_Taneja_Resume_v3.pdf"
    link.click()
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
      <ThemeToggle />
      <Button
        onClick={handleDownloadResume}
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-4 py-2 shadow-lg"
        size="sm"
      >
        <Download className="w-4 h-4 mr-2" />
        Resume
      </Button>
    </div>
  )
}
