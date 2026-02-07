import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-1">200% Satisfaction Guarantee</h3>
              <p className="text-white/90 max-w-xl">
                If you&apos;re not happy enough to recommend us to your friends, let us know and we&apos;ll send a team out to make it right. Still not thrilled? Get up to a full refund.
              </p>
            </div>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shrink-0">
            Book My Clean
          </Button>
        </div>
      </div>
    </section>
  )
}
