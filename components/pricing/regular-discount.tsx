import { Percent } from "lucide-react"

export function RegularDiscount() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            You pay less the more often we clean
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Loyalty has its rewards - we offer great discounts for regular clients.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            Book a regular cleaning service and we'll also assign you a dedicated housekeeper - that's consistently exceptional, hassle-free cleaning from someone you trust. Guaranteed.
          </p>
        </div>

        {/* Discount Visual */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-primary text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Regular Service Discount</h3>
              <p className="text-white/90">Save more with regular bookings</p>
            </div>
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">10%</p>
                <p className="text-muted-foreground font-medium">Fortnightly</p>
              </div>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">10%</p>
                <p className="text-muted-foreground font-medium">Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
