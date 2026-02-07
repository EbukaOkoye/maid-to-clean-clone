import { Award, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function OperationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We run a smooth operation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Maid to Clean we are all about providing the best experience for our customers. We will work to assign cleaning teams that are local to you, not only to support them but also to reduce travel times and delays.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-border mb-16" />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Best in Melbourne */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Best in Melbourne</h4>
            <p className="text-muted-foreground">
              We are a friendly company of Brunswick based cleaners who provide the highest quality home cleaning services to all suburbs of Melbourne. Our business started out supplying home cleaning services in{" "}
              <Link href="#" className="text-primary hover:underline">Brunswick</Link>,{" "}
              <Link href="#" className="text-primary hover:underline">Northcote</Link>{" "}
              and surrounding inner city suburbs. Our loyal and happy customers spread the word and we now provide home cleaning all over Melbourne.
            </p>
          </div>

          {/* Available Anytime */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Available Anytime</h4>
            <p className="text-muted-foreground">
              We have domestic cleaners available in your area to clean anytime from 7am and 6pm. Just select the desired calendar day to check date availability. Maid To Clean&apos;s professional and reliable cleaners will get the job done with a flat rate service and outstanding customer experience - we want you raving about us to your friends!
            </p>
          </div>

          {/* All Suburbs */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">All Suburbs</h4>
            <p className="text-muted-foreground">
              Our rates are the same across all suburbs and locations, so if you&apos;re looking for{" "}
              <Link href="#" className="text-primary hover:underline">cleaners in Brunswick</Link>,{" "}
              <Link href="#" className="text-primary hover:underline">Northcote</Link>, or anywhere in Melbourne. You can give us a call on{" "}
              <a href="tel:0383917026" className="text-primary font-semibold hover:underline">03 8391 7026</a>{" "}
              or jump on to our booking page where you can book a service in just 60 seconds!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
