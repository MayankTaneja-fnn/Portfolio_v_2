import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mayank Taneja - Full Stack Developer | MERN Stack Expert",
  description:
    "Portfolio of Mayank Taneja - Full Stack MERN Developer, Problem Solver, and CSE Student at Delhi Technological University. Specializing in React, Node.js, MongoDB, and modern web technologies.",
  keywords:
    "Mayank Taneja, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Web Developer, Portfolio, DTU, Delhi Technological University",
  authors: [{ name: "Mayank Taneja" }],
  creator: "Mayank Taneja",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayanktaneja.dev",
    title: "Mayank Taneja - Full Stack Developer",
    description: "Full Stack MERN Developer and Problem Solver",
    siteName: "Mayank Taneja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Taneja - Full Stack Developer",
    description: "Full Stack MERN Developer and Problem Solver",
    creator: "@mayanktaneja",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
