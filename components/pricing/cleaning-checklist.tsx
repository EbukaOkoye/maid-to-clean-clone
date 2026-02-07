import { Check, X } from "lucide-react"

type CheckItem = {
  task: string
  flatRate: boolean
  springClean: boolean
  endOfLease: boolean
}

const allAreasItems: CheckItem[] = [
  { task: "Light Tidy Up", flatRate: true, springClean: true, endOfLease: false },
  { task: "Extensive Tidy Up (Max 30 mins)", flatRate: false, springClean: true, endOfLease: false },
  { task: "Cobweb Removal", flatRate: true, springClean: true, endOfLease: true },
  { task: "Empty Bins", flatRate: true, springClean: true, endOfLease: true },
  { task: "Dust Skirting Boards/Window Sills/Doors", flatRate: true, springClean: true, endOfLease: false },
  { task: "Wipe Skirting Boards/Window Sills/Doors", flatRate: false, springClean: true, endOfLease: true },
  { task: "Dust/Clean Doors", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Accessible Light Switches/Power Points", flatRate: true, springClean: true, endOfLease: true },
  { task: "Dust All Reachable Surfaces", flatRate: true, springClean: true, endOfLease: true },
  { task: "Dust/Clean Mirrors", flatRate: true, springClean: true, endOfLease: true },
  { task: "Air Freshen/Deodorise (optional)", flatRate: true, springClean: true, endOfLease: true },
  { task: "Vacuum/Clean soft furnishing", flatRate: true, springClean: true, endOfLease: false },
  { task: "Vacuum Accessible Areas Under Beds/Couches/Furniture", flatRate: false, springClean: true, endOfLease: true },
  { task: "Walls", flatRate: false, springClean: false, endOfLease: true },
  { task: "Clean Ceilings", flatRate: false, springClean: false, endOfLease: true },
  { task: "Lightly Dust Blinds", flatRate: true, springClean: true, endOfLease: true },
  { task: "Vacuum/Wipe visible window tracks/sills", flatRate: false, springClean: true, endOfLease: true },
  { task: "Inside All Drawers/Cabinets", flatRate: false, springClean: false, endOfLease: true },
  { task: "Garages", flatRate: false, springClean: false, endOfLease: true },
]

const floorItems: CheckItem[] = [
  { task: "Vacuum/Mop All Accessible Floors", flatRate: true, springClean: true, endOfLease: true },
]

const bathroomItems: CheckItem[] = [
  { task: "Scrub/Clean Bath", flatRate: true, springClean: true, endOfLease: true },
  { task: "Scrub/Clean Shower", flatRate: true, springClean: true, endOfLease: true },
  { task: "Scrub/Clean Sinks", flatRate: true, springClean: true, endOfLease: true },
  { task: "Wipe Down Benches", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Mirrors", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean/Polish Tapware and Chrome", flatRate: true, springClean: true, endOfLease: true },
  { task: "Wipe Down Cupboards (exterior)", flatRate: true, springClean: true, endOfLease: true },
  { task: "Empty Bins", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean/Disinfect Toilet", flatRate: true, springClean: true, endOfLease: true },
  { task: "Scrub Shower Floor/Shower Wall Grout", flatRate: false, springClean: true, endOfLease: true },
  { task: "Floor Grout", flatRate: false, springClean: false, endOfLease: true },
  { task: "Clean Ceiling Exhaust Fans", flatRate: false, springClean: true, endOfLease: true },
  { task: "Inside All Drawers/Cabinets", flatRate: false, springClean: false, endOfLease: true },
]

const kitchenItems: CheckItem[] = [
  { task: "Clean Stovetop", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Rangehood (exterior)", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Underside of Rangehood", flatRate: false, springClean: true, endOfLease: true },
  { task: "Clean Exhaust Fans/Filters", flatRate: false, springClean: false, endOfLease: true },
  { task: "Clean/Wipe All Bench tops", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Visible Appliances (exterior)", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Splash back", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean/Polish Tapware", flatRate: true, springClean: true, endOfLease: true },
  { task: "Scrub/Clean Sink", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Inside/Outside Microwave", flatRate: true, springClean: true, endOfLease: true },
  { task: "Clean Cupboards (exterior)", flatRate: true, springClean: true, endOfLease: true },
  { task: "Polish Stainless Steel Surfaces", flatRate: true, springClean: true, endOfLease: true },
  { task: "Dust All Surfaces", flatRate: true, springClean: true, endOfLease: true },
  { task: "Remove Food and Wipe Inside Dishwasher", flatRate: false, springClean: false, endOfLease: true },
  { task: "Inside Oven", flatRate: false, springClean: false, endOfLease: true },
  { task: "Inside All Drawers/Cabinets", flatRate: false, springClean: false, endOfLease: true },
]

const bedroomItems: CheckItem[] = [
  { task: "Make Beds", flatRate: true, springClean: true, endOfLease: false },
  { task: "Dust/Wipe All Surfaces", flatRate: true, springClean: true, endOfLease: true },
  { task: "Inside All Drawers/Cabinets", flatRate: false, springClean: false, endOfLease: true },
]

function ChecklistIcon({ included }: { included: boolean }) {
  return included ? (
    <Check className="w-5 h-5 text-primary" />
  ) : (
    <X className="w-5 h-5 text-muted-foreground/50" />
  )
}

function ChecklistSection({ title, items }: { title: string; items: CheckItem[] }) {
  return (
    <>
      <tr className="bg-primary/10">
        <td colSpan={4} className="px-4 py-3 font-bold text-foreground">
          {title}
        </td>
      </tr>
      {items.map((item, index) => (
        <tr key={index} className="border-b border-border hover:bg-muted/50">
          <td className="px-4 py-3 text-sm text-foreground">{item.task}</td>
          <td className="px-4 py-3 text-center">
            <ChecklistIcon included={item.flatRate} />
          </td>
          <td className="px-4 py-3 text-center">
            <ChecklistIcon included={item.springClean} />
          </td>
          <td className="px-4 py-3 text-center">
            <ChecklistIcon included={item.endOfLease} />
          </td>
        </tr>
      ))}
    </>
  )
}

export function CleaningChecklist() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          What's Included in Each Service
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-sm border border-border">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-4 text-left font-semibold">All Areas</th>
                <th className="px-4 py-4 text-center font-semibold whitespace-nowrap">Flat Rate</th>
                <th className="px-4 py-4 text-center font-semibold whitespace-nowrap">Spring Clean</th>
                <th className="px-4 py-4 text-center font-semibold whitespace-nowrap">End of Lease (empty)</th>
              </tr>
            </thead>
            <tbody>
              <ChecklistSection title="All Areas" items={allAreasItems} />
              <ChecklistSection title="Floors" items={floorItems} />
              <ChecklistSection title="Bathrooms" items={bathroomItems} />
              <ChecklistSection title="Kitchen" items={kitchenItems} />
              <ChecklistSection title="Bedrooms/Living Areas" items={bedroomItems} />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
