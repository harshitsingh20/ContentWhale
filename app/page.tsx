import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { SolutionsSection } from "@/components/solutions-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { FeaturesSection } from "@/components/features-section"
import { MentionsSection } from "@/components/mentions-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ConnectSection } from "@/components/connect-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <SolutionsSection />
      <PricingSection />
      <CTASection />
      <FeaturesSection />
      <MentionsSection />
      <CaseStudiesSection />
      <FAQSection />
      <ConnectSection />
    </main>
  )
}
