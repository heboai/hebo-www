import { Button } from "./ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 max-w-6xl mx-auto">
      <div className="bg-yellow-100 text-sm px-4 py-2 rounded-full mb-8">
        <span role="img" aria-label="smile" className="mr-1">
          😀
        </span>
        NEW: Evals - quality control for any LLM / agent &gt;
      </div>

      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Launch AI Agents with{" "}
        <span className="relative">
          Confidence
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
          
        </span>
          <Image
            src="/hero-icon.png"
            alt="Hero icon"
            width={32}
            height={32}
            className="inline-block ml-2 transform rotate-45"
            style={{
              marginRight: '10px',
            }}
          />
        <span className="text-yellow-500"> Every Time</span>
      </h1>

      <p className="text-base md:text-lg mb-8 max-w-3xl">
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

      <div className="flex gap-4 mb-8">
        <Button variant="custom" className="px-6 text-base font-medium shadow-md h-[48px] md:h-[52px]">
          Get started for Free
        </Button>
        <Button variant="custom" className="px-6 text-base font-medium relative shadow-md h-[48px] md:h-[52px]">
          Hebo Evals
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full transform rotate-12">
            New
          </span>
        </Button>
      </div>

      <div className="flex items-center gap-2 text-sm">
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
        Fair Source: Join our community
      </div>
    </div>
  )
}
