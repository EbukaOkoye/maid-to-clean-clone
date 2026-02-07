const steps = [
  {
    number: "1",
    title: "Choose an hourly or flat rate service",
    description: "Pick the service that best fits your needs",
  },
  {
    number: "2",
    title: "Pop your details in and click 'Book Now'",
    description: "Fill in your information quickly and easily",
  },
  {
    number: "3",
    title: "Put your feet up... We'll take it from there",
    description: "Relax while we handle the rest",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-[#1a3a4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to clean your house in under a minute
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
