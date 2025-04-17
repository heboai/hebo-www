"use client"

import { useState } from "react"

export function ExistingLLM() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npx install hebo-eval@latest');
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="max-w-container-llm mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-2 text-[22px] md:text-[28px]">Already have an<br className="md:hidden" /> existing LLM / Agent?</h2>
      <p className="text-lg mb-6">Get started with Hebo Evals to bullet proof your response quality</p>

      <div className="bg-[#241050] text-white rounded-[16px] p-4 flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="mr-2">&gt;</span>
          <span>npx install hebo-eval@latest</span>
        </div>
        <button 
          className="p-1 transition-all" 
          onClick={handleCopy}
        >
          {isCopied ? (
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
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
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
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>

      <a href="https://github.com/heboai/hebo-eval" className="text-blue-600 hover:underline hover:text-purple-600 transition-colors" target="_blank" rel="noopener noreferrer">
        Works with any LLM / agent framework, learn more...
      </a>
    </div>
  )
}
