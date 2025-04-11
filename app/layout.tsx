import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "@/components/google-analytics"
import { Favicon } from "@/components/favicon"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#f9c823",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover"
}

export const metadata: Metadata = {
  title: "Hebo AI - Launch AI Agents with Confidence",
  description: "Manage the whole lifecycle of your conversational agents, from building & testing over real-time monitoring to rapid iterations.",
  keywords: "AI agents, deployment platform, AI monitoring, AI agent testing, enterprise AI",
  authors: [{ name: "Infinite Monkey AI" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://hebo.ai"
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Hebo AI"
  },
  openGraph: {
    title: "Hebo AI - Launch AI Agent with Confidence",
    description: "Manage the whole lifecycle of your conversational agents, from building & testing over real-time monitoring to rapid iterations.",
    images: [
      {
        url: "https://hebo.ai/hebo-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Hebo AI"
      }
    ],
    url: "https://hebo.ai",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hebo AI - Launch AI Agent with Confidence",
    description: "Manage the whole lifecycle of your conversational agents, from building & testing over real-time monitoring to rapid iterations.",
    images: ["https://hebo.ai/hebo-dashboard.png"]
  },
  other: {
    "msapplication-TileColor": "#f9c823"
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={`${inter.className} bg-gradient-to-tl from-[#F8F9D2] to-[#F5F7FA] min-h-screen overflow-x-hidden`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}


import './globals.css'