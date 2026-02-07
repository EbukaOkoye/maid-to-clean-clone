import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
                alt="Professional cleaning team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
              <Sparkles className="w-8 h-8 mb-2" />
              <p className="font-bold text-2xl">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Not your average cleaning company
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We were born to clean. We&apos;re just wired that way. There&apos;s nothing we like better than getting stuck in to a dirty home and making it sparkle again.
              </p>
              <p>
                In fact, we love what we do so much we revolutionised the way you book your house cleaning in Melbourne. We were the first local company to introduce a high-tech online booking platform, so we know what we&apos;re doing and we&apos;re always looking to improve.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 bg-transparent">
                See our pricing
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6">
                Book My Clean
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
