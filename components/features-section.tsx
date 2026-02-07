import { Button } from "@/components/ui/button"
import { DollarSign, CalendarCheck, Users } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Know what your costs are",
    description: "Take back control of your cleaning budget. Choose what suits you best – a time-based hourly rate service or a results-based flat rate.",
    cta: "See Pricing",
  },
  {
    icon: CalendarCheck,
    title: "Book your next clean in 60 secs",
    description: "Our streamlined online booking system makes your life a breeze. Just click Book Now and we'll take it from there.",
    cta: "Book Now",
  },
  {
    icon: Users,
    title: "We only employ the very best",
    description: "Our premium Melbourne cleaning teams are at the top of their game and they really love to clean.",
    cta: "Our Teams",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
              <Button variant="link" className="text-primary font-semibold">
                {feature.cta} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
