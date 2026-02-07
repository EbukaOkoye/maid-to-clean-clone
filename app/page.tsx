import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { PromoBanner } from "@/components/promo-banner"
import { PricingSection } from "@/components/pricing-section"
import { StatsSection } from "@/components/stats-section"
import { HowItWorks } from "@/components/how-it-works"
import { TeamSection } from "@/components/team-section"
import { FeaturesSection } from "@/components/features-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { ServicesSection } from "@/components/services-section"
import { FounderSection } from "@/components/founder-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <PromoBanner />
      <PricingSection />
      <StatsSection />
      <HowItWorks />
      <TeamSection />
      <FeaturesSection />
      <GuaranteeSection />
      <ServicesSection />
      <FounderSection />
      <Footer />
    </main>
  )
}
