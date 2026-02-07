import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const hourlyRates = [
  { type: "One off", price: "$70" },
  { type: "Weekly", price: "$63" },
  { type: "Fortnightly", price: "$63" },
  { type: "3 or 4 Weekly", price: "$66.5" },
]

export function HourlyRateSection() {
  return (
    <section id="hourly-rate" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Table */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Hourly Rate</h2>
            <div className="space-y-3">
              {hourlyRates.map((rate) => (
                <Card key={rate.type} className="border">
                  <CardContent className="p-4 flex justify-between items-center">
                    <span className="font-medium text-foreground">{rate.type}</span>
                    <span className="text-2xl font-bold text-primary">{rate.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              *prices above include regular service discount.
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">How does it work?</h3>
            <div className="prose prose-gray">
              <p className="text-muted-foreground mb-4">
                Our hourly rate service is a time-based service so there is not a fixed list of what is and is not included. Our cleaners will do as much as they can in the time that is booked and we can be 100% flexible with the work we do.
              </p>
              <p className="text-muted-foreground mb-4">
                The hourly rate service is perfect if you want specific areas of your house cleaned. Our cleaners will always prioritise quality vs quantity unless requested otherwise.
              </p>
              <p className="text-muted-foreground mb-6">
                We strongly advise against our Hourly Rate service if you need an End of Lease Clean and our Satisfaction Guarantee will not apply.
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              Book My Clean
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
