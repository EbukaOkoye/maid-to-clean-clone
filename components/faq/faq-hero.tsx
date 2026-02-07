"use client"

import React from "react"
import { useState } from "react"
import { Shield, UserCheck, BadgeCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FaqHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-[#1a3a4a] text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Here you&apos;ll find a list of the questions we&apos;re most
              frequently asked here at Maid to Clean. Do have a question we
              haven&apos;t mentioned here? If so, please don&apos;t hesitate to{" "}
              <a
                href="/contact-us"
                className="text-primary underline hover:text-primary/80"
              >
                get in touch.
              </a>
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">200% Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <UserCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Fully Police Checked</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">5 Star Rated Service</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 text-foreground">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Quick Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="faq-firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First name<span className="text-red-500">*</span>
                </label>
                <Input
                  id="faq-firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="faq-email"
                  className="block text-sm font-medium mb-2"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <Input
                  id="faq-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="faq-phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone<span className="text-red-500">*</span>
                </label>
                <Input
                  id="faq-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full"
                  placeholder="0400 000 000"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
              >
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
