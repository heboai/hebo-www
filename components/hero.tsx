"use client"

import { Button } from "./ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <div className="flex flex-col items-start md:items-center px-4 py-12 max-w-6xl mx-auto">
      <div className="bg-[#F8F9D2] text-sm px-4 py-2 rounded-full mb-4 w-full md:w-auto overflow-hidden whitespace-nowrap">
        <span role="img" aria-label="monocle" className="mr-1">
          🧐
        </span>
        <span className="font-semibold truncate text-xs">
          NEW:{" "}
          <a 
            href="https://github.com/heboai/hebo-eval" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Evals - quality control for any LLM / agent &gt;
          </a>
        </span>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-left">
        Launch AI Agents with{" "}
        <br/>
        <span className="relative">
          Confidence
          <Image
            src="/underline.svg"
            alt="Underline"
            width={180}
            height={20}
            className="absolute bottom-[-8px] left-0 w-full h-auto"
          />
        </span>
        {" "}
        <span className="text-yellow-500 whitespace-nowrap">
          <Image
            src="/hero-icon.png"
            alt="Hero icon"
            width={24}
            height={24}
            className="inline-block mr-2 transform rotate-45"
          />
          Every Time
        </span>
      </h1>

      <p className="text-base md:text-lg mb-8 max-w-3xl text-left md:text-center">
        Manage the full lifecycle of your conversational agents, from{" "}
        <a href="#" className="font-semibold underline hover:text-purple-600 transition-colors">
          building
        </a>{" "}
        to{" "}
        <a href="#" className="font-semibold underline hover:text-purple-600 transition-colors">
          testing
        </a>{" "}
        over{" "}
        <a href="#" className="font-semibold underline hover:text-purple-600 transition-colors">
          real-time monitoring
        </a>{" "}
        to{" "}
        <a href="#" className="font-semibold underline hover:text-purple-600 transition-colors">
          rapid iterations
        </a>
        .
      </p>

      <div className="flex flex-row gap-4 mb-8 w-full md:w-auto">
        <a href="https://app.hebo.ai/" target="_blank" rel="noopener noreferrer">
          <Button variant="custom" className="px-6 text-base font-medium shadow-md h-[48px] md:h-[52px] flex-1 md:flex-none">
            Get started for Free
          </Button>
        </a>
        <Button variant="custom" className="px-6 text-base font-medium relative shadow-md h-[48px] md:h-[52px] flex-1 md:flex-none" onClick={() => window.open('https://github.com/heboai/hebo-eval', '_blank', 'noopener,noreferrer')}>
          Hebo Evals
          <span className="absolute -top-2 -right-2 bg-[#3FB249] text-white text-xs px-2 py-0.5 rounded-[4px] transform rotate-[5deg]">
            New
          </span>
        </Button>
      </div>

      <div className="flex items-center gap-2 text-sm w-full md:w-auto">
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
        <a href="https://github.com/heboai" className="hover:underline">Fair Source: Join our community</a>
      </div>
    </div>
  )
}
