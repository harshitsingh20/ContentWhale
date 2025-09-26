import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white text-gray-800 py-3 px-4 relative overflow-hidden">
      {/* Sun-like background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-300 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
      <div className="absolute top-2 right-4 w-24 h-24 bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 rounded-full opacity-30 transform translate-x-12 -translate-y-12"></div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/Logo.svg" 
            alt="Content Whale" 
            width={150} 
            height={30} 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation - Moved to left side */}
        <nav className="hidden md:flex items-center gap-8 ml-8">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
            <span>Content Solutions</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
            <span>Resources</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="cursor-pointer hover:text-gray-600">About Us</span>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm">
              <span className="text-[#42175B]">Rank On</span>
              <span className="text-[#FF6B35]"> AI</span>
            </span>
            <div className="bg-[#FBBB18] text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </div>
          </div>
          <Button className="bg-gradient-to-r from-[#42175B] to-[#6B46C1] hover:from-[#3A1551] hover:to-[#5B3FA3] text-white px-6 py-2 rounded-full text-sm font-medium">
            Let's Talk →
          </Button>
        </div>
      </div>
    </header>
  )
}
