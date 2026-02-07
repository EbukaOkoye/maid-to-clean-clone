import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqList } from "@/components/faq/faq-list"

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Maid to Clean",
  description:
    "Find answers to the most frequently asked questions about Maid to Clean's house cleaning services in Melbourne. Learn about pricing, booking, cancellations, and more.",
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FaqHero />
        <FaqList />
      </main>
      <Footer />
    </div>
  )
}
