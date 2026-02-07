"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="ml-2">
                <span className="text-xl font-bold text-foreground">Maid to Clean</span>
                <p className="text-xs text-muted-foreground">Melbourne&apos;s Best Cleaning Service</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="group relative">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#" className="block px-4 py-2 hover:bg-muted text-sm">Regular Cleaning</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-muted text-sm">One Off Cleaning</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-muted text-sm">End of Lease Cleaning</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-muted text-sm">Office Cleaning</Link>
              </div>
            </div>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors font-medium">Pricing</Link>
            <Link href="/where-we-clean" className="text-foreground hover:text-primary transition-colors font-medium">Where We Clean</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About Us</Link>
            <Link href="/contact-us" className="text-foreground hover:text-primary transition-colors font-medium">Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:1300000000" className="flex items-center gap-2 text-primary font-bold">
              <Phone className="w-5 h-5" />
              1300 000 000
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-2">
            <Link href="#" className="block py-2 text-foreground font-medium">Services</Link>
            <Link href="/pricing" className="block py-2 text-foreground font-medium">Pricing</Link>
            <Link href="/where-we-clean" className="block py-2 text-foreground font-medium">Where We Clean</Link>
            <Link href="#about" className="block py-2 text-foreground font-medium">About Us</Link>
            <Link href="/contact-us" className="block py-2 text-foreground font-medium">Contact</Link>
            <div className="pt-4 space-y-3">
              <a href="tel:1300000000" className="flex items-center gap-2 text-primary font-bold">
                <Phone className="w-5 h-5" />
                1300 000 000
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
