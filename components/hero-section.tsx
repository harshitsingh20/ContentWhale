import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-gray-50 to-yellow-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#FBBB18] text-lg mb-6 font-normal">We bring you,</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gray-700 block mb-2">Textual Content Solutions For</span>
          <span className="block">
            <span className="text-[#42175B]">All Business</span>
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FBBB18] bg-clip-text text-transparent"> Communications!</span>
          </span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          We provide professional content writing, SEO content, and translation services for effective communication, maximum reach, and global impact.
        </p>

        <Button className="bg-[#42175B] hover:bg-[#351249] text-white px-8 py-3 rounded-lg text-lg font-medium">
          Connect With Us
        </Button>
      </div>
    </section>
  )
}
