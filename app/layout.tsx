import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hebo.ai - Launch AI Agents with Confidence",
  description: "Manage the full lifecycle of your conversational agents",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-tl from-[#F8F9D2] to-[#F5F7FA] min-h-screen`}>{children}</body>
    </html>
  )
}


import './globals.css'