import Image from "next/image"

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex justify-end gap-2">
          
        </div>
        <span className="text-[14px] text-gray-600 flex flex-col items-center font-geist">  
          <span className="font-semibold text-[14px] flex items-center gap-1"> 
            <Image
              src="/hebo icon.svg"
              alt="Hebo Icon"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            hebo.ai 
          </span>
          <span>is designed, built and backed by <br/> <span className="font-semibold">Infinite Monkey Sdn Bhd</span> (202501003121)</span>
        </span>
      </div>
    </footer>
  )
}
