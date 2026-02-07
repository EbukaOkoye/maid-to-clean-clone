import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/hero"
import { PricingOptions } from "@/components/pricing/pricing-options"
import { RegularDiscount } from "@/components/pricing/regular-discount"
import { HourlyRateSection } from "@/components/pricing/hourly-rate-section"
import { FlatRateSection } from "@/components/pricing/flat-rate-section"
import { CleaningChecklist } from "@/components/pricing/cleaning-checklist"
import { AdditionalServices } from "@/components/pricing/additional-services"
import { FairGoPolicy } from "@/components/pricing/fair-go-policy"

export const metadata: Metadata = {
  title: "Melbourne Cleaning Pricing and Service List | Maid to Clean",
  description: "Maid to Clean offers a Premium Cleaning Service with transparent pricing. Choose hourly rate or flat rate services for your Melbourne home.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PricingHero />
      <PricingOptions />
      <RegularDiscount />
      <HourlyRateSection />
      <FlatRateSection />
      <CleaningChecklist />
      <AdditionalServices />
      <FairGoPolicy />
      <Footer />
    </main>
  )
}
