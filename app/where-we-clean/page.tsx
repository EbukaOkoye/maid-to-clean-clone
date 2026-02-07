import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhereWeCleanHero } from "@/components/where-we-clean/hero"
import { ServiceAreaMap } from "@/components/where-we-clean/service-area-map"
import { SuburbsList } from "@/components/where-we-clean/suburbs-list"
import { CharitySection } from "@/components/where-we-clean/charity-section"
import { OperationsSection } from "@/components/where-we-clean/operations-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "House Cleaning Services Melbourne-Wide | Maid to Clean",
  description: "Maid to Clean provides professional house cleaning services across all Melbourne suburbs. Check our service area and book your clean today.",
}

export default function WhereWeCleanPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WhereWeCleanHero />
      <ServiceAreaMap />
      <SuburbsList />
      <CharitySection />
      <OperationsSection />
      <Footer />
    </main>
  )
}
