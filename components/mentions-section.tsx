"use client"

export function MentionsSection() {
  const logos = [
    { name: "getprospect" },
    { name: "AZBIGMEDIA" },
    { name: "BULK.LY", highlight: true },
    { name: "Featured", quote: true },
    { name: "COLLEGE RECRUITER" },
    { name: "allBusiness" },
    { name: "Forbes", bold: true },
    { name: "LENSA", bold: true },
    { name: "AMERICAN MARKETING" },
    { name: "LIGHTKEY", highlight: true },
    { name: "LeadGrow" },
    { name: "GRITDAILY", bold: true },
  ]

  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 bg-gradient-to-br from-[#F5FAFF] via-[#F7FBFF] to-[#ECF7FF]">
      {/* Curved white shape at top */}
      <div className="pointer-events-none absolute -top-10 left-0 w-full">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-[110px]">
          <path d="M0 80 C 240 20, 480 110, 720 70 C 960 30, 1200 0, 1440 40 L1440 0 L0 0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Mentions & Publications
          </h2>
          <p className="text-lg text-[#4B1D6C] max-w-3xl mx-auto">
            From AMA to Forbes, we have been mentioned in many reputed journals and publications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-md ring-1 ring-black/5 h-20 md:h-24 flex items-center justify-center px-4 ${
                logo.highlight ? "bg-[#D9F1FA]" : ""
              }`}
            >
              <span
                className={`text-gray-700 ${
                  logo.bold ? "font-bold tracking-wide" : "font-medium"
                }`}
              >
                {logo.quote ? "“Featured”" : logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Curved white shape at bottom */}
      <div className="pointer-events-none absolute -bottom-10 left-0 w-full">
        <svg viewBox="0 0 1440 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-[120px]">
          <path d="M0 40 C 240 110, 480 -10, 720 30 C 960 70, 1200 160, 1440 90 L1440 160 L0 160 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}


