import Image from "next/image"

export function TrustSection() {
  const brands = [
    { name: "upGrad", logo: "/images/icons/upgrade.svg" },
    { name: "BCG", logo: "/images/icons/bcg.svg" },
    { name: "ICICI", logo: "/images/icons/icici.svg" },
    { name: "TATA", logo: "/images/icons/tata.svg" },
    { name: "redBus", logo: "/images/icons/redbus.svg" },
    { name: "HSBC", logo: "/images/icons/hsbc.svg" },
    { name: "Thomas Cook", logo: "/images/icons/thomas.svg" },
    { name: "WazirX", logo: "/images/icons/warix.svg" },
  ]

  return (
    <section className="pt-0 pb-16 px-4 bg-gradient-to-r from-purple-100 via-gray-50 to-yellow-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-800 text-lg mb-12">
          <span className="text-gray-800">Trusted by</span> <span className="text-[#FBBB18] font-semibold">2,000+ Brands</span>
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center items-center">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={100}
                height={40}
                className="h-8 w-auto object-contain max-w-[120px]"
                style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(2000%) hue-rotate(250deg) brightness(0.3) contrast(1.2)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
