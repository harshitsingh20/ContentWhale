"use client"

import { Button } from "@/components/ui/button"

export function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-24 bg-gradient-to-r from-[#FFF7F0] via-[#FFFFFF] to-[#F9FBFF]">
      {/* Curved white edge at top */}
      <div className="pointer-events-none absolute -top-8 left-0 w-full">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-[100px]">
          <path d="M0 70 C 240 30, 480 100, 720 60 C 960 20, 1200 0, 1440 40 L1440 0 L0 0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left copy block */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug mb-6">
              Expert Content
              <br />
              Writing Solutions
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              Providing real-world results. Few case studies to look at.
            </p>
            <Button className="bg-[#42175B] hover:bg-[#351249] text-white rounded-md px-6 py-6">
              Want to Know More?
            </Button>
          </div>

          {/* Right case study cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {/* Left pink gradient card with device mockup */}
            <div className="bg-gradient-to-b from-[#FFE6E6] to-[#FFFDFD] rounded-2xl shadow-lg ring-1 ring-black/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-6 w-5 rounded-sm" style={{ backgroundColor: "#C0392B" }} />
                <span className="text-2xl md:text-3xl font-semibold text-[#C0392B]">KhataBook</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                KhataBook's Transformation with Content Whale
              </p>
              <div className="rounded-[28px] border-2 border-gray-300 overflow-hidden bg-white mx-auto w-full aspect-[9/16] max-h-[440px]">
                <img src="/placeholder.jpg" alt="Phone mockup" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Right column: single panel with badge and caption */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-black/5 p-6 border border-[#E6EEF9]">
              <div className="rounded-xl bg-gradient-to-b from-[#F7FBFF] to-white border border-[#E6EEF9] p-4 mb-6 flex items-center justify-center min-h-[360px]">
                <img src="/placeholder.jpg" alt="ID card mockup" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center gap-3 text-[#1D4ED8] mb-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 2.239-7 5v3h14v-3c0-2.761-3.134-5-7-5z" />
                </svg>
                <span className="text-3xl md:text-4xl font-semibold">Heritage Hospitals</span>
              </div>
              <div className="text-gray-700">Putting Heritage Hospitals on the Map</div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved white edge at bottom */}
      <div className="pointer-events-none absolute -bottom-8 left-0 w-full">
        <svg viewBox="0 0 1440 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-[120px]">
          <path d="M0 40 C 240 110, 480 -10, 720 30 C 960 70, 1200 160, 1440 90 L1440 160 L0 160 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

function CaseCard({
  badgeColor,
  brand,
  title,
  imageLabel,
}: {
  badgeColor: string
  brand: string
  title: string
  imageLabel: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-block h-5 w-4 rounded-sm" style={{ backgroundColor: badgeColor }} />
        <span className="text-xl font-semibold text-[#C0392B]" style={{ color: badgeColor }}>
          {brand}
        </span>
      </div>
      <p className="text-gray-700 mb-4">{title}</p>
      <div className="rounded-xl border border-gray-200 h-64 flex items-center justify-center text-gray-400">
        {imageLabel}
      </div>
    </div>
  )
}


