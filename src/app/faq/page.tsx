import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";

const faqs = [
  {
    question: "Do I need a fishing license?",
    answer: "No, our charter license covers all passengers on board. You do not need to purchase an individual fishing license.",
  },
  {
    question: "What should I bring?",
    answer: "We recommend bringing sunscreen, sunglasses, a hat, non-marking shoes, and any food or drinks you'd like. We provide a cooler with ice and water.",
  },
  {
    question: "Is alcohol allowed?",
    answer: "Yes, you are welcome to bring beer or wine (cans preferred, no glass). Hard liquor is generally discouraged for safety reasons. Intoxicated passengers may result in trip termination.",
  },
  {
    question: "What happens if it rains?",
    answer: "The captain monitors weather closely. Scattered showers are common and usually don't stop the fishing. However, in the event of lightning, high winds, or unsafe seas, the captain will cancel the trip. You will be offered a reschedule or a full refund.",
  },
  {
    question: "Can we keep the sharks?",
    answer: "We primarily practice catch and release to preserve the shark population. However, if a shark is of legal size and species, and you wish to keep it for meat, we can discuss harvesting it. Please note that processing sharks can be messy and labor-intensive.",
  },
  {
    question: "Is there a bathroom on board?",
    answer: "Our vessel is a center console fishing boat focused on performance and fishing space. There is no enclosed head (bathroom). We recommend using the facilities at the marina before departure.",
  },
  {
    question: "How many people can go?",
    answer: "We are USCG licensed for up to 6 passengers. This is a strict federal regulation and includes children and infants.",
  },
  {
    question: "Are kids allowed?",
    answer: "Absolutely! We love introducing kids to shark fishing. We recommend the 4-hour trip for younger children. Please let us know ages in advance so we can ensure proper life vest sizes.",
  },
  {
    question: "Do I need to know how to fish?",
    answer: "Not at all. Captain Chris and the crew will demonstrate everything and assist as much as needed. We welcome beginners!",
  },
  {
    question: "What kind of sharks will we catch?",
    answer: "Common species include Blacktip, Spinner, Atlantic Sharpnose, Bull Sharks, and occasionally Hammerheads or Tigers, depending on the season.",
  },
  {
    question: "Do you offer other types of fishing?",
    answer: "Our specialty is shark fishing, but we can occasionally target other species upon request. Please contact us to discuss custom trips.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Common <span className="text-blue-500">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before you go.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center bg-secondary/10 p-8 rounded-xl border border-border/50">
          <h3 className="text-xl font-bold uppercase mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Feel free to reach out to us directly.
          </p>
          <Link href="/contact" className="text-blue-500 hover:underline font-medium">
            Contact Captain Chris
          </Link>
        </div>
      </div>
    </div>
  );
}
