import { Phone, Mail, MapPin } from "lucide-react"

export function HappinessAgents() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          Contact One of Our Happiness Agents Today!
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Need answers about a service? One of our happiness agents will be
          happy to answer your phone or email inquiries within 1 business day,
          or sooner! We will do everything in our power to make sure you are glad
          you chose Maid to Clean. Our goal is to have you raving about us to
          your friends, and we aren{"'"}t happy until you are!
        </p>

        <hr className="border-border mb-12 max-w-lg mx-auto" />

        <div className="grid sm:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <a
              href="tel:0383917026"
              className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              03 8391 7026
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <a
              href="mailto:hello@maidtoclean.com.au"
              className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              hello@maidtoclean.com.au
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <p className="text-lg font-bold text-foreground">
              202 Blyth Street,
              <br />
              Brunswick East, 3057
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
