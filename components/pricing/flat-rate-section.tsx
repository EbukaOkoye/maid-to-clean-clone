import { Card, CardContent } from "@/components/ui/card"

const flatRates = [
  { type: "House / Apartment", bedrooms: "1 Bedroom", price: "$169" },
  { type: "House / Apartment", bedrooms: "2 Bedroom", price: "$189" },
  { type: "House", bedrooms: "3 Bedrooms", price: "$219" },
  { type: "House", bedrooms: "4 Bedrooms", price: "$259" },
  { type: "House", bedrooms: "5 Bedrooms", price: "$309" },
  { type: "House", bedrooms: "6 Bedrooms", price: "$339" },
]

export function FlatRateSection() {
  return (
    <section id="flat-rate" className="py-20 bg-muted scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Table */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Flat Rate</h2>
            <div className="space-y-3">
              {flatRates.map((rate, index) => (
                <Card key={index} className="border bg-background">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <span className="text-sm text-muted-foreground">{rate.type}</span>
                      <p className="font-medium text-foreground">{rate.bedrooms}</p>
                    </div>
                    <span className="text-2xl font-bold text-primary">{rate.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Here's what's included</h3>
            <div className="prose prose-gray">
              <p className="text-muted-foreground mb-4">
                The perfect service to get the whole house cleaned. Prices depend on number of bedrooms and studies in your home and we will complete all general cleaning as per our checklists below.
              </p>
              <p className="text-muted-foreground mb-4">
                There is additional services and pricing displayed below the list of what is included in our full house service. Please select a <span className="text-primary font-medium">"Spring Clean"</span> if your home has not been cleaned thoroughly for over a month.
              </p>
              <p className="text-muted-foreground mb-4">
                Please note: We follow a "Fair Go" policy with all our flat rate services. <span className="text-primary font-medium">Click here for more information</span>.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                <p className="text-sm font-medium text-foreground">
                  Notice: Disinfectant Products now available. <span className="text-primary">Click here for more information</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
