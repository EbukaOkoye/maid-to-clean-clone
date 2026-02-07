import { Button } from "@/components/ui/button"
import { Droplets } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
            <Droplets className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              We Now Offer Exterior Cleaning - Get 25% Off
            </h3>
            <p className="text-muted-foreground">
              We now offer all types of exterior building cleaning, such as house washing, roof cleaning, gutter cleaning, driveway cleaning and much more. For a limited time, get 25% off any exterior cleaning service!
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 shrink-0">
            Register Now!
          </Button>
        </div>
      </div>
    </section>
  )
}
