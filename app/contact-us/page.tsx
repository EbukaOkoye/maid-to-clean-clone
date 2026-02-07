import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { HappinessAgents } from "@/components/contact/happiness-agents"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Maid to Clean",
  description:
    "Get in touch with Maid to Clean. Contact one of our happiness agents today for all your Melbourne house cleaning needs.",
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <HappinessAgents />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
