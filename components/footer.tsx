import Image from "next/image"

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex justify-end gap-2">
          
        </div>
        <span className="text-[14px] text-[#000000] flex flex-col md:flex-row md:items-center gap-1 font-geist">  
          <span className="flex items-center gap-1"> 
            <Image
              src="/hebo-icon.svg"
              alt="Hebo Icon"
              width={18}
              height={18}
            />
            <span className="font-semibold text-[14px]">hebo.ai</span>
            <span className="md:ml-1">is designed, built and backed by</span>
          </span>
          <span className="font-semibold flex items-center gap-1 text-[#333333]"> 
            <Image src="/IM-Logo.svg" alt="Infinite Monkey Logo" width={24} height={24} className="w-6 h-6" /> 
            Infinite Monkey Sdn Bhd (202501003121)
          </span>
        </span>
      </div>
    </footer>
  )
}
