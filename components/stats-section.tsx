import { ThumbsUp, Clock, ShieldCheck } from "lucide-react"

const stats = [
  {
    icon: ThumbsUp,
    value: "96%",
    title: "Spotless Results, Every Time",
    description: "of our clients are thrilled with their cleans. With such high expectations across Melbourne, we're proud to consistently deliver the spotless results our clients know and trust.",
  },
  {
    icon: Clock,
    value: "96.5%",
    title: "Reliable Service",
    description: "success rate, our seamless processes ensure your clean stays on schedule—dependable, efficient, and hassle-free.",
  },
  {
    icon: ShieldCheck,
    value: "97.5%",
    title: "Professionalism You Can Trust",
    description: "of cleans are carried out with complete professionalism, following our trusted policies and procedures.",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{stat.title}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
