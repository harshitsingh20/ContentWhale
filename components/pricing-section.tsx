"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export function PricingSection() {
  const [wordCount, setWordCount] = useState("500")
  const [serviceType, setServiceType] = useState("Content Writing")

  const calculatePrice = () => {
    const words = Number.parseInt(wordCount) || 500
    const pricePerWord = 1.5
    return (words * pricePerWord).toFixed(2)
  }

  const features = [
    "SEO-Optimization",
    "0% Plagiarism (With Report)",
    "100% AI-free content",
    "Free revisions",
    "48 hours delivery",
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-gray-50 to-yellow-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Industry-Leading Quality at Affordable Rates
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Starting at 1.5/word for content writing solutions. No contracts, no commitments.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <Button variant="default" className="bg-[#42175A] hover:bg-[#351249] text-white">
            Content Writing
          </Button>
          <Button variant="outline">SEO Writing</Button>
          <Button variant="outline">Translation</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pricing Calculator */}
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Calculate your pricing for content</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Content type</label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Content Writing">Content Writing</SelectItem>
                        <SelectItem value="SEO Writing">SEO Writing</SelectItem>
                        <SelectItem value="Translation">Translation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Word Count</label>
                    <Input
                      type="number"
                      value={wordCount}
                      onChange={(e) => setWordCount(e.target.value)}
                      placeholder="500"
                      className="text-right"
                    />
                    <span className="text-xs text-gray-500">recommended</span>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-sm font-medium mb-2">Your price</label>
                  <div className="text-3xl font-bold text-[#42175A]">
                    ₹{calculatePrice()}.00 <span className="text-sm font-normal text-gray-600">Rupees</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">What's Included</h3>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6 bg-[#FBBB18] hover:bg-[#E5A616] text-black font-medium">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
