"use client"

import { useRef } from "react"
import Image from "next/image"

export function LinkedInSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const posts = [
    {
      days: "2d",
      title: "Claude 3.7 Sonnet introduces significant advancements in AI capabilities, particularly in hybrid reasoning and extended thought modes. These improvements enable more sophisticated problem-solving and decision-making processes."
    },
    {
      days: "4d",
      title: "We're excited to announce our new partnership with leading AI research institutions to advance the development of more robust and reliable AI systems. Stay tuned for more updates!"
    },
    {
      days: "1w",
      title: "Our team has been working on innovative approaches to improve AI model evaluation and testing. The new framework will help developers ensure their AI systems are more reliable and trustworthy."
    },
    {
      days: "2w",
      title: "Join us at the upcoming AI Summit where we'll be showcasing our latest developments in AI agent management and monitoring solutions. Don't miss this opportunity to learn about the future of AI deployment!"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Follow us on LinkedIn for the latest Gen AI developments</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/hebo-icon.svg"
                alt="Hebo Icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <div className="font-bold">hebo.ai</div>
                <div className="text-sm text-gray-600">{post.days}</div>
              </div>
            </div>

            <p className="mb-2">{post.title}</p>
            <a href="#" className="text-blue-600 hover:underline">
              ... read more
            </a>

            <div className="flex mt-4 gap-4">
              <button className="text-sm hover:text-purple-600 transition-colors">Follow</button>
              <button className="text-sm hover:text-purple-600 transition-colors">Share</button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto pb-4" ref={scrollContainerRef}>
        <div className="flex gap-4" style={{ width: "max-content" }}>
          {posts.map((post, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-sm" style={{ width: "280px" }}>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/hebo-icon.svg"
                  alt="Hebo Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div>
                  <div className="font-bold">hebo.ai</div>
                  <div className="text-sm text-gray-600">{post.days}</div>
                </div>
              </div>

              <p className="mb-2">{post.title}</p>
              <a href="#" className="text-blue-600 hover:underline">
                ... read more
              </a>

              <div className="flex mt-4 gap-4">
                <button className="text-sm hover:text-purple-600 transition-colors">Follow</button>
                <button className="text-sm hover:text-purple-600 transition-colors">Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a href="https://www.linkedin.com/company/hebo-ai/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
          Show all posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  )
}
