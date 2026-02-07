import Link from "next/link"
import { Button } from "@/components/ui/button"

const suburbs = [
  { name: "Abbotsford", link: false },
  { name: "Armadale", link: false },
  { name: "Balaclava", link: false },
  { name: "Bentleigh", link: true },
  { name: "Brighton", link: false },
  { name: "Brunswick", link: true },
  { name: "Carlton", link: true },
  { name: "Caulfield", link: false },
  { name: "Cheltenham", link: true },
  { name: "Coburg", link: true },
  { name: "Dandenong", link: true },
  { name: "Elwood", link: false },
  { name: "Essendon", link: true },
  { name: "Fawkner", link: false },
  { name: "Fitzroy", link: false },
  { name: "Glen Waverley", link: false },
  { name: "Greenvale", link: false },
  { name: "Hampton", link: false },
  { name: "Hawthorn", link: false },
  { name: "Highett", link: false },
  { name: "Malvern", link: false },
  { name: "Melbourne", link: false },
  { name: "Middle Park", link: false },
  { name: "Moonee Ponds", link: true },
  { name: "Newport", link: true },
  { name: "North Melbourne", link: false },
  { name: "Northcote", link: true },
  { name: "Oakleigh", link: false },
  { name: "Pascoe Vale", link: false },
  { name: "Prahran", link: false },
  { name: "Preston", link: true },
  { name: "Reservoir", link: false },
  { name: "St Kilda", link: true },
  { name: "Thomastown", link: false },
  { name: "Thornbury", link: true },
  { name: "Toorak", link: false },
  { name: "Williamstown", link: true },
]

export function SuburbsList() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          A few suburbs we service include:
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
          {suburbs.map((suburb) => (
            <div
              key={suburb.name}
              className="bg-white rounded-lg px-4 py-3 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {suburb.link ? (
                <Link
                  href={`/suburbs/${suburb.name.toLowerCase().replace(" ", "-")}`}
                  className="text-primary font-medium hover:underline"
                >
                  {suburb.name}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{suburb.name}</span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg"
          >
            Book My Clean
          </Button>
        </div>
      </div>
    </section>
  )
}
