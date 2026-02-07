import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function ServiceAreaMap() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Melbourne Service Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are registered in Brunswick East, our office is in Thornbury, but we clean all over Melbourne! An image showing our standard service area is shown below on this page. If you&apos;d like to take a closer look, feel free to check out our{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Interactive Service Area Map
            </a>
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-muted rounded-2xl overflow-hidden mb-8">
          <div className="aspect-video w-full">
            {/* Placeholder map visualization */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4f3] to-[#d0e8e4] flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Melbourne area representation */}
                <svg viewBox="0 0 800 450" className="w-full h-full" aria-label="Melbourne service area map">
                  {/* Background */}
                  <rect fill="#e8f4f3" width="800" height="450" />
                  
                  {/* Water/Bay area */}
                  <path
                    d="M0 300 Q200 350 400 320 Q600 290 800 350 L800 450 L0 450 Z"
                    fill="#a8d4e6"
                    opacity="0.6"
                  />
                  
                  {/* Service area highlight */}
                  <ellipse
                    cx="380"
                    cy="200"
                    rx="200"
                    ry="150"
                    fill="#0d9488"
                    opacity="0.2"
                    stroke="#0d9488"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                  />
                  
                  {/* Location markers */}
                  <g className="animate-pulse">
                    <circle cx="380" cy="180" r="8" fill="#0d9488" />
                    <circle cx="320" cy="160" r="6" fill="#0d9488" opacity="0.8" />
                    <circle cx="420" cy="220" r="6" fill="#0d9488" opacity="0.8" />
                    <circle cx="350" cy="240" r="6" fill="#0d9488" opacity="0.8" />
                    <circle cx="440" cy="170" r="6" fill="#0d9488" opacity="0.8" />
                    <circle cx="300" cy="200" r="6" fill="#0d9488" opacity="0.8" />
                    <circle cx="400" cy="140" r="6" fill="#0d9488" opacity="0.8" />
                  </g>
                  
                  {/* Melbourne CBD marker */}
                  <g>
                    <circle cx="380" cy="180" r="15" fill="#1a3a4a" />
                    <text x="380" y="185" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">M</text>
                  </g>
                  
                  {/* Label */}
                  <text x="380" cy="280" textAnchor="middle" fill="#1a3a4a" fontSize="16" fontWeight="bold">
                    Melbourne Metro Area
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-secondary/50 rounded-xl p-6 flex items-start gap-4">
          <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <p className="text-foreground">
              <span className="font-semibold">Please note,</span> if you live outside our standard service area, all is not lost! Depending on where you are located, the type of service you are after, and how flexible you can be with days/times, we may be able to provide service for you.
            </p>
            <p className="text-foreground mt-2">
              Please give our friendly office team a call to discuss on{" "}
              <a href="tel:0383917026" className="text-primary font-bold hover:underline">
                03 8391 7026
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
