import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function CharitySection() {
  return (
    <section className="py-16 lg:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Every time we clean your home, we donate food
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Did you know that Maid to Clean has partnered with the Make a Difference Community Charity with the goal of eradicating hunger here in Melbourne?
            </p>
            <p className="text-white/90 text-lg mb-8">
              Sit back and relax while we clean your home with the knowledge that your service has led to a meal being provided to somebody in need.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-foreground hover:bg-white hover:text-primary font-semibold bg-transparent"
            >
              Our Charity
            </Button>
          </div>

          {/* Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-white/15 rounded-full" />
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-white/25 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
