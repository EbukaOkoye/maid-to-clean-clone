import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a3a4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Maid to Clean</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Melbourne&apos;s most trusted cleaning service. Professional, reliable, and dedicated to making your home sparkle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Regular Cleaning</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">One Off Cleaning</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">End of Lease Cleaning</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Office Cleaning</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Carpet Cleaning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Our Teams</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">FAQs</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/70 text-sm">1300 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70 text-sm">hello@maidtoclean.com.au</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70 text-sm">Melbourne, Victoria<br />Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Maid to Clean. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
