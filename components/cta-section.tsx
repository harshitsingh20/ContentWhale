import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative pt-0 pb-20 px-4 bg-gradient-to-r from-purple-100 via-gray-50 to-yellow-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#4C1870] via-[#6B1F9A] to-[#8A1CC6] rounded-2xl p-8 md:p-12 text-white shadow-2xl ring-1 ring-black/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                <span className="block">Are you looking for</span>
                <span className="block">personalized assistance?</span>
              </h2>
            </div>
            <Button className="bg-white text-[#42175A] hover:bg-gray-100 px-8 py-3 rounded-full font-medium whitespace-nowrap shadow">
              Talk to our experts →
            </Button>
          </div>
        </div>
      </div>
      {/* Curved white wave at the bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/2">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-[90px] md:h-[120px]">
          <path d="M0,64 C240,128 480,0 720,32 C960,64 1200,160 1440,96 L1440,160 L0,160 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
