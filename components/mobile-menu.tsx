"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { MobileMenuProps } from "../types"
import Image from "next/image"

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/20" onClick={onClose} />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[80%] w-[calc(100%-2rem)] max-w-full bg-[#E8ECFC] pt-[10px] px-6 pb-6 flex flex-col rounded-[18px] my-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Image
              src="/hebo-icon.svg"
              alt="Hebo Icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="font-bold text-xl">hebo.ai</span>
            <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-[8px] ml-2">Hiring</span>
          </div>
          <button className="flex items-center justify-center p-2 rounded-md" onClick={onClose} aria-label="Close menu">
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
          </button>
        </div>

        <div className="space-y-6">
          <Link href="https://github.com/heboai/hebo" className="flex items-center gap-2 font-bold">
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Docs
          </Link>

          <Link href="https://discord.gg/cCJtXZRU5p" className="flex items-center gap-2 font-bold">
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Discord
          </Link>

          <Link href="https://github.com/heboai" className="flex items-center gap-2 font-bold">
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
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Source
          </Link>

          <Link href="#enterprise" className="flex items-center gap-2 font-bold" onClick={onClose}>
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
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Enterprise
          </Link>
        </div>

        <div className="mt-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 font-geist">Is your AI Pilot stuck?</h3>
            <p className="mb-4">We offer tailored services - let us help you!</p>
            <a href="https://3ccat2022.sg.larksuite.com/scheduler/69f1b552384fa196" target="_blank" rel="noopener noreferrer">
              <Button variant="custom" className="w-full h-[52px] shadow-md font-geist text-[18px] font-semibold rounded-[12px]">
                Talk to us
              </Button>
            </a>
          </div>

          <div className="flex items-center text-sm text-[#333333]">
            <Image src="/IM-Logo.svg" alt="Infinite Monkey Logo" width={24} height={24} />
            <span className="font-geist text-[14px]">
              <span className="font-bold">Infinite Monkey Sdn Bhd</span> (202501003121)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
