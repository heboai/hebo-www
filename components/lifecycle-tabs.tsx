"use client"

import { useState } from "react"
import Image from "next/image"

export function LifecycleTabs() {
  const [activeTab, setActiveTab] = useState("Build")
  const tabs = ["Build", "Test", "Monitor", "Iterate"]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold mb-4">The full lifecycle:</h2>
        <div className="flex bg-[#AFCFFF]/20 rounded-[12px] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-[12px] transition-all hover:bg-gradient-to-r hover:from-cyan-600 hover:to-cyan-400 ${
                activeTab === tab ? "bg-[#AFCFFF] text-gray-800 shadow-sm" : "bg-transparent text-gray-600"
              } ${tab === "Test" ? "relative" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === "Test" && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full transform rotate-12">
                  New
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <Image
          src="/hebo-dashboard.png"
          alt="Hebo.ai platform interface"
          width={900}
          height={400}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  )
}
