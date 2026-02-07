import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function FairGoPolicy() {
  return (
    <section className="py-20 bg-[#1a5f5a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Shield className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Fair Go Policy
        </h2>
        
        <div className="text-white/90 space-y-4 mb-8 text-left max-w-3xl mx-auto">
          <p>
            Our flat rate services are results-based cleans. Unlike our hourly rate services, they're not dependent on time limits. We'll keep working down the checklist of tasks corresponding to the service you've booked (plus any extras you've selected), until everything's been cleaned to our (very high) standards.
          </p>
          <p>
            We do give our cleaning teams estimates of how long we think the job should take so they can plan their day. These are just guidelines - we let your team work harder (and faster) if they're able.
          </p>
          <p>
            On the rare occasions our estimates prove incorrect, our Fair Go policy comes into effect. We'll clean up to 1 hour longer than our estimated time, but if your place needs more time and work to get through our entire checklist to our satisfaction, extra charges may apply. We'll always get in touch with you to confirm any extra charges before proceeding.
          </p>
        </div>
        
        <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg">
          Book your clean now
        </Button>
      </div>
    </section>
  )
}
