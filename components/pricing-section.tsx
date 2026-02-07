import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Regular Cleaning",
    price: "$63",
    unit: "/hr",
    popular: false,
    description: "Our experienced and professional cleaners will work with you to create a tailored cleaning plan that fits your needs and schedule.",
    features: [
      "Hourly or Flat rates",
      "Discounts for Regular Services",
      "Consistent Cleaning Team each Service",
      "Professional, Police Checks and Insured",
      "All Equipment and Supplies Provided",
    ],
  },
  {
    name: "One Off Cleaning",
    price: "$140",
    unit: "+",
    popular: false,
    description: "Need a one-time refresh? Our one-off cleaning service is perfect for touch ups, spring cleans, or special occasions.",
    features: [
      "Hourly or Flat rates",
      "Small Touch Ups or Full Home Cleans",
      "Extras Like Oven, Fridge, Carpet Cleaning",
      "Professional, Police Checks and Insured",
      "All Equipment and Supplies Provided",
    ],
  },
  {
    name: "End Of Lease Cleaning",
    price: "$342",
    unit: "",
    popular: true,
    badge: "Most Popular",
    description: "Moving out? Let us take the stress out of your end-of-lease clean with our agency-approved checklists.",
    features: [
      "100% Bond Back Guarantee",
      "20% Off - Limited Time Only",
      "Honest and Transparent Pricing",
      "Tailored to Rental Agents Inspections",
      "All Equipment and Supplies Provided",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-muted" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            MOST POPULAR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose what suits you best – a time-based hourly rate service or a results-based flat rate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative flex flex-col ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-border'}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" /> {plan.badge}
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-sm text-muted-foreground">FROM</span>
                </div>
                <div className="flex items-baseline justify-center mt-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.unit}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full font-semibold ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-foreground hover:bg-foreground/90 text-white'}`}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
