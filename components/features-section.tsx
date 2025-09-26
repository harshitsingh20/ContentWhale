"use client"

import type { ReactNode } from "react"
import { Truck, Target, BadgeCheck, Languages } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="relative bg-white px-4 pt-16 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
            Top Features of Content Whale’s
            <br />
            Content Writing Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <Feature
            icon={<Truck className="h-8 w-8 text-[#ffb703]" />}
            title="Blazing-Fast Content Delivery"
            description="Our process-driven content writing and editing practices enable us to deliver upto 20,000+ words in just 48 hours."
          />
          <Feature
            icon={<Target className="h-8 w-8 text-[#38bdf8]" />}
            title="TG-focused Content To Boost Lead Generation"
            description="We use data-driven content writing practices to drive traffic through funneling and ascertain conversions."
          />
          <Feature
            icon={<BadgeCheck className="h-8 w-8 text-[#7c3aed]" />}
            title="Original & Authoritative Content That Always Rank"
            description="Our SMEs and content editors follow Google’s E-E-A-T guidelines to ensure every piece of delivered content ranks!"
          />
          <Feature
            icon={<Languages className="h-8 w-8 text-[#2563eb]" />}
            title="Translate Your Brand Across All Languages"
            description="With 50+ certified multilingual translators and 1000+ global-to-local SME translators, we help you connect globally."
          />
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            We are PROUD to say that we have:
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <Stat
            valueClass="bg-clip-text text-transparent bg-gradient-to-r from-[#A000E6] to-[#FF7A00]"
            value="100M+"
            labelLine1="Words"
            labelLine2="Written"
          />
          <Stat
            valueClass="text-[#A000E6]"
            value="15+"
            labelLine1="Countries"
            labelLine2="catered"
          />
          <Stat
            valueClass="text-[#7c3aed]"
            value="100K+"
            labelLine1="Content Pieces"
            labelLine2="Delivered"
          />
          <Stat
            valueClass="text-[#FF7A00]"
            value="3000+"
            labelLine1="Businesses"
            labelLine2="Supported"
          />
        </div>
      </div>

      {/* Curved white overlay to transition into next section */}
      <div className="pointer-events-none absolute -bottom-8 left-0 w-full">
        <svg viewBox="0 0 1440 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-[120px]">
          <path d="M0 40 C 240 110, 480 -10, 720 30 C 960 70, 1200 160, 1440 90 L1440 160 L0 160 Z" fill="#FBFBFB" />
        </svg>
      </div>
    </section>
  )
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center rounded-full bg-gray-100 h-14 w-14 mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-800 mb-2 leading-snug">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  )
}

function Stat({
  value,
  valueClass,
  labelLine1,
  labelLine2,
}: {
  value: string
  valueClass?: string
  labelLine1: string
  labelLine2: string
}) {
  return (
    <div>
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${valueClass ?? ""}`}>{value}</div>
      <div className="text-gray-700 font-medium">{labelLine1}</div>
      <div className="text-gray-700">{labelLine2}</div>
    </div>
  )
}


