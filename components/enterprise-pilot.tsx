import { Button } from "./ui/button"
import Image from "next/image"

export function EnterprisePilot() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-yellow-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Is your Enterprise AI Pilot stuck?</h2>
          <p className="text-lg mb-4">We offer tailored enterprise services - let us help you!</p>

          <Button variant="custom" className="px-6 text-base font-medium shadow-md h-[48px] md:h-[52px]">
            Talk to us
          </Button>
        </div>

        <div className="relative w-full md:w-64 h-48 md:h-64">
          <Image
            src="/Bitmap.png"
            alt="Enterprise AI Pilot"
            width={256}
            height={256}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
