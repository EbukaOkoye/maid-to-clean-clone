import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cleaner of the Month */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Cleaner of the Month Winner</h2>
          </div>
          
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            At Maid to Clean, we know that the true heart of our business is our incredible Cleaning Team. To celebrate their amazing efforts, we&apos;ve launched a monthly Cleaner of the Month award!
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl p-6 max-w-3xl mx-auto">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-4xl font-bold text-primary">K</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">Karen</h3>
                <span className="text-sm text-muted-foreground">— Glenroy</span>
              </div>
              <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mb-3">
                October 2025
              </span>
              <p className="text-muted-foreground text-sm">
                Karen is one of Maid to Clean Melbourne&apos;s shining stars. She&apos;s known for her incredible commitment to every job and her exceptional reliability. Customers regularly praise her attention to detail and the consistent quality she brings to every home.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Your Team */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="Professional cleaning team members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Meet your perfect cleaning team
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We want you to be delighted with your clean every time. We know the secret to a great service is perfectly matching you with a cleaning team who understands your needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              That&apos;s why we&apos;ve hand-picked every one of our cleaning teams. We only choose those with extensive cleaning experience, a professional, can-do attitude and a passion for cleaning.
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              Melbourne&apos;s Premium Home Cleaning Service
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              Find me a perfect match
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
