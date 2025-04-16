"use client"

import { Button } from "./ui/button"
import Image from "next/image"

export function EnterprisePilot() {
  return (
    <div className="max-w-[871px] mx-auto px-4 py-12">
      <div id="enterprise" className="bg-gradient-to-br from-[#F8F9D2] to-[#F5F7FA] rounded-xl py-[29px] px-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between gap-6 md:max-h-none overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="w-full -mt-[15px]">
          <h2 className="text-2xl font-bold mb-1">Is your Enterprise AI Pilot stuck?</h2>
          <p className="text-lg mb-2">We offer tailored enterprise services - let us help you!</p>
          
          <div className="flex justify-between items-end w-full">
            <a href="https://3ccat2022.sg.larksuite.com/scheduler/69f1b552384fa196" target="_blank" rel="noopener noreferrer">
              <Button variant="custom" className="px-6 text-base font-medium shadow-md h-[48px] md:h-[52px] mt-auto">
                Talk to us
              </Button>
            </a>
            <div className="relative w-[120px] h-[120px] md:w-auto md:h-auto max-h-[173px] ml-auto">
              <Image
                src="/Bitmap.png"
                alt="Enterprise AI Pilot"
                width={120}
                height={120}
                className="w-full h-full object-contain max-h-[173px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
