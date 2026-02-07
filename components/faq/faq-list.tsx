import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "When will my cleaner arrive?",
    answer:
      "After your booking has been confirmed, (which is usually within 1-2 weeks of your service), you will receive a confirmation email. This email will contain a summary of your booking, including a line that shows the date and time of arrival. This will indicate when you should expect the cleaner. Please note there may be an arrival window, and the team will arrive between these times and then start cleaning.",
  },
  {
    question: "What will my cleaner bring to the service?",
    answer:
      "All of our cleaners come fully equipped with their own cleaning equipment and supplies. However, if you would like a particular product or equipment used in your home you are more than welcome to leave it out for the cleaner. All of our cleaners are advised to disinfect and change all clothes and sponges in between services and they are to use different clothes for bathrooms, kitchens and common areas.\n\nPlease note that the majority of our cleaners travel by car and will be equipped with a small step ladder for high up areas. A handful of our teams travel by public transport (which is great for city jobs with restricted parking) however these teams will NOT bring a step ladder. If you need a team with a step-ladder please inform us upon booking your service.",
  },
  {
    question: "What if I don't have parking available for the cleaners?",
    answer:
      "Please note that we require parking to be provided for our cleaning teams. If you live in the city or in an area where parking is difficult, please make sure to either contact us and let us know if we can use a private car parking spot or advise if there is public parking available. Any parking costs incurred will be billed on top of the service. If the parking provided is further than 100mtrs from your property then additional charges may apply. Please also note that if no parking is provided and no public parking space can be found (we generally will look for up to 20 minutes) then a cancellation fee will be incurred.\n\nWe have a small number of cleaning teams who use public transport so if notified beforehand we can attempt to allocate one of these teams to your clean. Please provide as much flexibility with your start time as possible to help us schedule this for you.",
  },
  {
    question: "Do I have to be home during the service?",
    answer:
      "This is entirely up to you \u2013 you can be there for the service, let the cleaner in and leave, or even not be there at all. You are more than welcome to provide access to your cleaners by way of a key/lockbox. Please note that in general our cleaners work most efficiently when the house is empty of people and pets.",
  },
  {
    question: "How do I contact the office regarding my service?",
    answer:
      "You can contact the office via phone, txt or email. Our office hours are 7am \u2013 5pm.\n\nPhone: (03) 8391 7026\nTxt Message: 0488 842 417\nEmail: hello@maidtoclean.com.au",
  },
  {
    question: "What if I am not happy with my service?",
    answer:
      "We appreciate all feedback we get, whether it\u2019s positive or negative. If you are not satisfied with your service, please email our office with details regarding what might have been an issue and include all relevant photos. We will then proceed with our 200% satisfaction guarantee, and aim to provide a re-clean within 2-4 days of the initial service for any missed/unsatisfactory areas and/or look at an appropriate discount if required.",
  },
  {
    question: "How do I make changes to my booking?",
    answer:
      "You will receive confirmation and reminder emails before your service. At the bottom of these emails will be a link to create and sign in to your account. You can make changes to your service that will be flagged in the office. If these changes don\u2019t affect the cleaner\u2019s schedule, they will go ahead. If your change clashes in the cleaner\u2019s schedule, our friendly office staff will get in contact with you to try and reach a solution that benefits all parties.",
  },
  {
    question: "Can I give the cleaner a key?",
    answer:
      "Yes. Our office regularly runs reports on the keys in which the cleaners have in their possession. We strongly enforce only first names and the first initial of the last name to be on the key tag. Strictly no phone numbers, addresses or full names are to be on the keys at any time, so they cannot be traced back to the property. Alternatively, you can get a key safe from any general hardware store for your property and provide us with the code. This is starting to be a very common practice with our customers. If, for example, your cleaner can not make your service due to an emergency, the key is available for a replacement team to complete the service on the same day. We therefore highly recommend key safes or something similar to provide remote access.",
  },
  {
    question: "Will I get the same cleaner each service?",
    answer:
      "Generally, yes. We always endeavour to match you with a cleaner who will continue your service ongoing, however there are occasions such as public holidays, illnesses, emergencies and travel/holidays that may impact your usual cleaner being sent to your property. We always try our very best to give you plenty of notice of any changes made to your service, but unfortunately, there are things that are out of our control that may impact your service on the day booked. We can not guarantee a regular cleaner for 3/4-weekly bookings (unless arranged directly with staff) due to scheduling issues.",
  },
  {
    question: "Is window cleaning interior and exterior?",
    answer:
      "Unfortunately no, we only complete interior window cleaning, not exterior.",
  },
  {
    question: "Do you clean under furniture?",
    answer:
      "We will move and clean under small objects and light furniture. We will also vacuum/mop under heavy furniture (like beds and couches) however we will strictly not move heavy furniture. This is due to the high risk of scratching floors. We are happy if customers would like to move furniture for us, but we will not instruct the cleaning teams to do so themselves.",
  },
  {
    question: "Can I book steam cleaning on the day of my clean?",
    answer:
      "Yes you can, but please keep in mind that steam cleaning may need to be staggered on the day of your service if the initial team sent to you are not trained steam cleaners. For example, your cleaners may arrive at 9am to complete the general cleaning and finish up a few hours later, then a different team will arrive to complete the steam cleaning. However we do have a few cleaners that can complete all general cleaning as well as steam cleaning.",
  },
  {
    question: "How can I cancel my service?",
    answer:
      "You can cancel your service at any given time, either online or over the phone. We have no lock-in contracts that you need to worry about. Please note: all cancellations must be made 1 business day before the service is to take place. If a cancellation is made within 1 business day, you may incur a fee which covers the cleaner\u2019s loss of wages. Please note that if we can cover the cleaner\u2019s time through re-allocating work. We can sometimes waive this fee, but on occasion the fee must be charged.",
  },
  {
    question: "What happens if damage is caused during the service?",
    answer:
      "In the rare instance that damage is caused as a result of our service, please contact our team and provide photos within 48 hours of the date/time of your service. In the event that damage has been caused due to fault/negligence of our team, we will first seek to repair the item. Depending on the value of the repair, up to 3 quotes may be required. When a repair is not possible, a suitable replacement will be sought, and proof of purchase will be required. All quotes and proof of purchase must be provided within 30 days of the complaint being lodged.",
  },
  {
    question: "Do the cleaners have police checks?",
    answer:
      "Yes, all of our cleaners are required to submit all checks before they commence any work. Most cleaners have working with children checks too. Once our cleaners have passed a phone interview with our office staff, they will be invited to have an interview with our director. This is where he runs through all of our guidelines and procedures. All of our cleaners must have an extensive cleaning history to be able to work for us.",
  },
  {
    question: "Do you work on the weekend?",
    answer:
      "We work on Saturdays as usual, however as we only have limited office support, our phone lines are closed. We can be contacted via SMS on: 0488 842 417 and if you need to speak with our team please just message and we will text/call you back. We do not operate on Sundays.",
  },
  {
    question: "Does your company do any exterior work?",
    answer:
      "Unfortunately no, we only focus on interior work. We do, however, have a balcony service that is available as an added extra.",
  },
  {
    question: "How much does a cleaner cost?",
    answer:
      "We offer exceptional cleaning at reasonable prices! We can work off a flat rate if you\u2019re looking for something like a whole house clean, or an hourly rate if you are looking for a couple hours of cleaning here or there. For our up to date price list, please head over to our Pricing page.",
  },
  {
    question: "How do I pay for my service?",
    answer:
      "For all bookings we require a credit/debit card to secure the booking. We will not be able to complete your booking without a card on file. Please rest assured we will not charge your card until after the service is complete and we have made 3 attempts to contact you to see how the service went.",
  },
  {
    question:
      "Can I use more than one gift card or discount code for my booking?",
    answer:
      "No, only one gift card or discount code can be used per booking. Unfortunately, we cannot combine multiple codes or gift cards in a single transaction. If you wish to use another gift card code or discount code, please contact our office to arrange another service or update an existing booking.",
  },
  {
    question: "Are cleaners considered essential workers?",
    answer:
      "This depends on what the clean is for. If your service is for an NDIS/TAC client it is determined essential. If for a business that is open during COVID restrictions it is also considered essential. If for a standard domestic clean that could be done by the customer if needed, it is not essential. Finally, move out/end of lease cleans are considered essential.",
  },
  {
    question: "Does your company invoice out?",
    answer:
      "Our billing department may be able to work out an invoice for your company, but please know that our general payment process is via a credit/debit card on file. Currently we are registered for TAC claims (provided they can bill out to us) and NDIS clients.",
  },
]

export function FaqList() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          FAQs
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground py-5 hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">
                {faq.answer.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            If we haven&apos;t answered your question here, please{" "}
            <Link
              href="/contact-us"
              className="text-primary font-semibold underline hover:text-primary/80"
            >
              contact us
            </Link>{" "}
            for more information about our cleaning services.
          </p>
        </div>
      </div>
    </section>
  )
}
