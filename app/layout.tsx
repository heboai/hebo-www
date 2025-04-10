import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hebo AI - Launch AI Agents with Confidence",
  description: "Manage the whole lifecycle of your conversational agents, from building & testing over real-time monitoring to rapid iterations.",
  keywords: "AI agents, deployment platform, AI monitoring, AI agent testing, enterprise AI",
  authors: [{ name: "Infinite Monkey AI" }],
  robots: "index, follow",
  language: "English",
  alternates: {
    canonical: "https://hebo.ai"
  },
  icons: {
    icon: [
      { url: "/public/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/public/favicon.svg", type: "image/svg+xml" },
      { url: "/public/favicon.ico", type: "image/x-icon" }
    ],
    apple: [
      { url: "/public/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/public/site.webmanifest",
  appleWebApp: {
    title: "Hebo AI"
  },
  openGraph: {
    title: "Hebo AI - Launch AI Agent with Confidence",
    description: "Manage the whole lifecycle of your conversational agents, from building & testing over real-time monitoring to rapid iterations.",
    images: [
      {
        url: "https://hebo.ai/public/og-image.png",
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
    images: ["https://hebo.ai/public/og-image.png"]
  },
  themeColor: "#f9c823",
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
      <body className={`${inter.className} bg-gradient-to-tl from-[#F8F9D2] to-[#F5F7FA] min-h-screen`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}


import './globals.css'