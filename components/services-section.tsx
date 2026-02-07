import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Home, Droplets, Building2, Sofa, Key } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "One Off Cleaning",
    description: "Our one off cleaning service is ideal for catching up on spring cleaning or sprucing a specific area in your home.",
  },
  {
    icon: Home,
    title: "Regular Cleaning",
    description: "Our experienced and professional cleaners will work with you to create a tailored cleaning plan that fits your needs.",
  },
  {
    icon: Droplets,
    title: "Disinfectant Cleaning",
    description: "This service is designed to kill germs and bacteria, using products effective at killing viruses such as COVID-19.",
  },
  {
    icon: Key,
    title: "End of Lease Cleans",
    description: "Our professional cleaners will work hard to get your rental property looking its best with a 100% Bond Back Guarantee.",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "We offer a low maintenance and flexible office cleaning service, ensuring your office is clean and presentable.",
  },
  {
    icon: Sofa,
    title: "Steam and Carpet Cleaning",
    description: "Keep your carpets and upholstery looking and smelling fresh with our steam and carpet cleaning services.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Range Of Cleaning Services Across Melbourne
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Button variant="link" className="px-0 text-primary font-semibold">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
