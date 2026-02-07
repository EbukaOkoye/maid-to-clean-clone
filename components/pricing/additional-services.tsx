import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const additionalServices = [
  { name: "Spring Clean", price: "$60-100", link: "#" },
  { name: "End of Lease", price: "From $418+", link: "#" },
  { name: "Inside Oven", price: "$75", link: "#" },
  { name: "Inside Fridge", price: "$39", link: "#" },
  { name: "Inside Drawers/Cabinets", price: "$35-119", link: "#" },
  { name: "Balcony", price: "$39", link: "#" },
  { name: "Green Supplies", price: "$5", link: "#" },
  { name: "Inside Windows", price: "$79-135", link: "#" },
  { name: "Laundry", price: "$39/load", link: "#" },
  { name: "Bed Changing", price: "$15/bed", link: null },
  { name: "Ironing", price: "$50/30 mins", link: null },
  { name: "Wall Cleaning", price: "$29 per wall", link: null },
  { name: "Steam Cleaning", price: "$55/bedroom", link: "#" },
  { name: "Dish Washing", price: "$39", link: null },
  { name: "Wet Wiping Blinds", price: "$29/blind", link: "#" },
]

export function AdditionalServices() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Additional Services
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {additionalServices.map((service) => (
            <Card key={service.name} className="border bg-background hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex justify-between items-center">
                {service.link ? (
                  <Link href={service.link} className="font-medium text-primary hover:underline">
                    {service.name}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">{service.name}</span>
                )}
                <span className="text-lg font-bold text-primary">{service.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
