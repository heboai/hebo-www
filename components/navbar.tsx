"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { MobileMenu } from "./mobile-menu"
import Image from "next/image"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flex items-center justify-between px-4 md:px-12 py-4 relative bg-[#AFCFFF]/25 md:bg-transparent mx-4 my-4 rounded-[18px] md:mx-0 md:my-0 md:rounded-none h-[48px] mt-8">
      {/* Desktop Navigation */}
      <div className="flex items-center gap-2 md:mt-6">
        <Image
          src="/hebo-icon.svg"
          alt="Hebo Icon"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="font-bold text-xl">hebo.ai</span>
        <a href="https://www.linkedin.com/company/hebo-ai/jobs/" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-[8px] ml-2 hover:bg-indigo-700 transition-colors">
          Hiring
        </a>
      </div>
      <div className="hidden md:flex items-center gap-6 mt-6">
        <div className="flex bg-[#AFCFFF]/20 rounded-[12px] p-1 gap-1">
          <Link href="https://github.com/heboai/hebo" className="px-4 py-2 rounded-[12px] transition-all hover:bg-[#AFCFFF] hover:text-gray-800 hover:shadow-sm text-gray-600">
            <div className="flex items-center gap-2">
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
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Docs
            </div>
          </Link>

          <Link href="https://discord.gg/cCJtXZRU5p" className="px-4 py-2 rounded-[12px] transition-all hover:bg-[#AFCFFF] hover:text-gray-800 hover:shadow-sm text-gray-600">
            <div className="flex items-center gap-2">
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
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Discord
            </div>
          </Link>

          <Link href="https://github.com/heboai" className="px-4 py-2 rounded-[12px] transition-all hover:bg-[#AFCFFF] hover:text-gray-800 hover:shadow-sm text-gray-600" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
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
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Source
            </div>
          </Link>

          <Link href="#enterprise" className="px-4 py-2 rounded-[12px] transition-all hover:bg-[#AFCFFF] hover:text-gray-800 hover:shadow-sm text-gray-600">
            <div className="flex items-center gap-2">
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
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Enterprise
            </div>
          </Link>
        </div>
      </div>

      <div className="hidden md:block mt-6 rounded-[18px]">
        <a href="https://app.hebo.ai/" target="_blank" rel="noopener noreferrer">
          <Button variant="custom" className="px-6 text-base font-medium shadow-md hover:translate-y-[-2px] transition-transform duration-200">
            Sign Up
          </Button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-md transition-all"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  )
}
