"use client"

import { useState } from "react"
import Image from "next/image"

export function LifecycleTabs() {
  const [activeTab, setActiveTab] = useState("Build")
  const tabs = ["Build", "Test", "Monitor", "Iterate"]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">The full lifecycle:</h2>
        <div className="flex bg-[#AFCFFF]/20 rounded-[12px] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-[12px] transition-all ${
                activeTab === tab ? "bg-[#AFCFFF] text-gray-800 shadow-sm" : "bg-transparent text-gray-600"
              } ${tab === "Test" ? "relative" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === "Test" && (
                <span className="absolute -top-2 -right-2 bg-[#3FB249] text-white text-xs px-2 py-0.5 rounded-[4px] transform rotate-12">
                  New
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <Image
        src="/hebo-dashboard.png"
        alt="Hebo Dashboard"
        width={1200}
        height={600}
        className="w-full h-auto shadow-lg rounded-lg"
      />
    </div>
  )
}
