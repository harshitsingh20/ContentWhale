import { Card, CardContent } from "@/components/ui/card"
import { Search, PenTool, Languages } from "lucide-react"
import Image from "next/image"

export function SolutionsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-gray-50 to-yellow-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gray-800">Choose the Solution</span> <span className="text-[#FBBB18]">that Best Suits You</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Content Writing */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#42175B] rounded-lg flex items-center justify-center">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#42175B]">Content Writing</h3>
              </div>

              <div className="space-y-3">
                {/* Mobile Phone Interface */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="flex gap-3">
                    <div className="w-12 h-16 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold mb-1">The Psychology Of Money</div>
                      <div className="text-xs text-gray-600 space-y-0.5">
                        <div>4.4 Rating</div>
                        <div>280 Pages</div>
                        <div>Language: English</div>
                        <div>Audio</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tablet Interface */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-sm font-semibold mb-1">Inside Design: St</div>
                  <div className="text-xs text-gray-600 mb-2">Subscribe to learn about new product</div>
                  <div className="w-full h-5 bg-gray-200 rounded mb-2"></div>
                  <div className="text-xs text-gray-500">Recent blog posts</div>
                  <div className="w-16 h-10 bg-gray-300 rounded mt-1"></div>
                </div>

                {/* Corporate Profile Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#42175B] rounded text-white text-xs flex items-center justify-center font-bold">PG</div>
                    <div className="text-xs">
                      <div className="font-semibold">Corporate Company Profile</div>
                      <div className="text-gray-500">Company</div>
                    </div>
                  </div>
                </div>

                {/* Recent Blog Posts */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Recent blog posts</div>
                  <div className="w-16 h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Services */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <div className="text-white text-lg font-bold">Q</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">SEO</h3>
                  <h4 className="text-lg font-bold text-[#4A90E2]">SEO Services</h4>
                </div>
              </div>

              <div className="space-y-3">
                {/* Traffic Growth Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-sm font-bold text-[#4A90E2] mb-2">40% Traffic Growth</div>
                  <div className="flex items-end gap-1 h-6">
                    <div className="w-2 h-1 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-2 h-2 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-2 h-3 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-2 h-4 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-2 h-5 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-2 h-6 bg-[#4A90E2] rounded-sm"></div>
                  </div>
                </div>

                {/* Suggested Topics Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xs font-semibold mb-2">ested topics</div>
                  <div className="space-y-1">
                    <div className="text-xs">ons to start content</div>
                    <div className="text-xs">EO writing</div>
                    <div className="text-xs">t writing</div>
                    <div className="text-xs">SEO wellness</div>
                    <div className="text-xs">+10</div>
                  </div>
                  <div className="mt-2 text-sm font-bold text-[#4A90E2]">10k ↗</div>
                </div>

                {/* Expected Traffic Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xs font-semibold mb-2">Expected Traffi 125%</div>
                  <div className="flex items-end gap-1 h-4">
                    <div className="w-1 h-1 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-1 h-2 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-1 h-3 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-1 h-4 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-1 h-3 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-1 h-2 bg-[#4A90E2] rounded-sm"></div>
                    <div className="w-1 h-4 bg-[#4A90E2] rounded-sm"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Translation */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <div className="text-black text-lg font-bold">A</div>
                    <div className="text-black text-lg font-bold">文</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#FBBB18]">Translation</h3>
              </div>

              <div className="space-y-3">
                {/* Supported Languages */}
                <div className="text-sm font-semibold text-[#FBBB18] mb-2">40+ Supported langauge</div>
                
                {/* Translation Interface */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xs font-semibold mb-2">ckest Translation</div>
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded p-2">
                      <div className="text-xs font-semibold mb-1">glish</div>
                      <div className="text-xs text-gray-600">Keyword research and content optimization</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-0.5 h-4 bg-[#FBBB18]"></div>
                      <div className="text-xs text-gray-500 ml-2">Translate</div>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <div className="text-xs font-semibold mb-1">nçais</div>
                      <div className="text-xs text-gray-600">Deep keyword research and content optimization</div>
                    </div>
                  </div>
                </div>

                {/* Flags Grid */}
                <div className="grid grid-cols-4 gap-1 mb-3">
                  {['🇮🇪', '🇩🇪', '🇪🇸', '🇫🇷', '🇯🇵', '🇨🇳', '🇮🇳', '🇰🇷'].map((flag, index) => (
                    <div key={index} className="w-6 h-4 bg-gray-100 rounded flex items-center justify-center text-sm">
                      {flag}
                    </div>
                  ))}
                </div>

                {/* Expert Writers */}
                <div className="text-sm font-bold text-[#FBBB18]">1000+ Expert Writers</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
