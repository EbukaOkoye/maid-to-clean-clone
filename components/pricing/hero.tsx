"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, UserCheck, Award, Star } from "lucide-react"

export function PricingHero() {
  return (
    <section className="bg-[#1a5f5a] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Cleaning at Reasonable Prices
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Maid to Clean offers a Premium Cleaning Service. Don't settle for any less than the best.
            </p>
            
            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/90 italic mb-3">
                "I cannot rate this company highly enough. Their 4.9 is beyond deserved. We started with a spring clean that rocked our world, but now Steph turns our apartment upside down every fortnight and makes it glow!"
              </p>
              <p className="text-white font-semibold">- Cameron McKnight from Parkville</p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">200% Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <UserCheck className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Fully Police Checked</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">5 Star Rated</span>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Get a Free Quote
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  First name*
                </label>
                <Input 
                  id="name"
                  placeholder="Your name" 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email*
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
                  Phone*
                </label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="0400 000 000" 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-foreground mb-1">
                  Comments
                </label>
                <textarea 
                  id="comments"
                  placeholder="Tell us about your cleaning needs..."
                  className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background text-sm resize-none"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
                Get My Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
