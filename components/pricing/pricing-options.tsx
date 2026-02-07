import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckSquare } from "lucide-react"
import Link from "next/link"

export function PricingOptions() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exceptional cleaning at reasonable prices
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Make your life easier with our conveniently streamlined pricing structure.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            We've boiled our cleaning services down to two simple options: Pay by the hour or choose a flat rate service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hourly Rate Card */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Hourly Rate</h3>
              <p className="text-muted-foreground mb-6">
                A time based service where we work on the clock. We can either follow a list of priorities or use our initiative. Minimum time is 2 hours and we will generally prioritise detail over rushing.
              </p>
              <div className="bg-muted rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-foreground mb-2">Perfect if:</p>
                <p className="text-sm text-muted-foreground">
                  You want specific areas cleaned or just a couple of hours of cleaning here and there.
                </p>
              </div>
              <Link href="#hourly-rate">
                <Button variant="outline" className="w-full font-semibold bg-transparent">
                  More info
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Flat Rate Card */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Flat Rate</h3>
              <p className="text-muted-foreground mb-6">
                A fixed price service covering all the general cleaning in your home. We follow our detailed checklist and only finish when everything is done. One-off extras also available, including <span className="text-primary font-medium">End of Lease Cleans</span>.
              </p>
              <div className="bg-muted rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-foreground mb-2">Perfect if:</p>
                <p className="text-sm text-muted-foreground">
                  You want your whole house cleaned (note: our 'Fair Go' policy applies).
                </p>
              </div>
              <Link href="#flat-rate">
                <Button variant="outline" className="w-full font-semibold bg-transparent">
                  More info
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
