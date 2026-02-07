import { Button } from "@/components/ui/button"

export function FounderSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hi. My name&apos;s Ed.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an English engineer who fell in love with Melbourne while studying abroad and decided to call it home permanently in 2013. My parents always nurtured two things in me – an entrepreneurial spirit and the importance of a good work ethic.
              </p>
              <p>
                Maid to Clean was established with a single objective in mind – to help busy people create &quot;me-time&quot; by helping them to book a high-quality professional clean at the right price, when they need it most.
              </p>
              <p>
                I streamlined our website, junked all the laborious &apos;obligation-free quote&apos; palaver, put our costs upfront, and stripped away all the smoke and mirrors. Instead, we compete on a value for money proposition by giving you the best quality, most meticulous service possible at reasonable rates.
              </p>
            </div>
            <p className="text-lg font-semibold text-foreground mt-6 mb-6">
              Now booking a cleaner you can rely on is simplicity itself.
            </p>
            <p className="text-primary font-bold mb-6">
              Go on. Give us a try today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 bg-transparent">
                About Us
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6">
                Book My Clean
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Ed - Founder of Maid to Clean"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
