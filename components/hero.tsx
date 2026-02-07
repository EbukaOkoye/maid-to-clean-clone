"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Award, Star, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-[#1a3a4a] min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a4a]/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Melbourne&apos;s Most Trusted Cleaning Service
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
              Maid to Clean prides itself in being Melbourne&apos;s best rated and most trusted cleaning company. We specialise in cleaning with exceptionally high attention to detail and unrivalled reliability.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">200% Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Police Checked</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">5 Star Rated</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 p-4 rounded-lg max-w-md">
              <p className="text-white/90 italic text-sm">
                &quot;Amazing customer service and an even more amazing cleaning service! Very, very happy with maid to clean thank you!&quot;
              </p>
              <p className="text-primary font-semibold mt-2 text-sm">— Jane C. from Southbank</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">Get a Free Quote</h3>
            <p className="text-muted-foreground mb-6">Book your clean in under 60 seconds</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                  First name<span className="text-red-500">*</span>
                </label>
                <Input 
                  id="firstName"
                  type="text" 
                  placeholder="Your first name" 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Phone<span className="text-red-500">*</span>
                </label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="Your phone number" 
                  className="w-full"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
              >
                Get My Quote
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              By submitting, you agree to our Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
