import { BookingWidget } from "@/components/booking/BookingWidget";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, Calendar, CreditCard } from "lucide-react";

export default function BookPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Book Your <span className="text-blue-500">Adventure</span>
          </h1>
          <p className="text-muted-foreground">Secure your spot instantly online.</p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Calendar, title: "Select Date", desc: "Choose your preferred date and time." },
            { icon: CheckCircle2, title: "Pick Trip", desc: "Select your 4 or 6 hour shark trip." },
            { icon: CreditCard, title: "Secure Deposit", desc: "Pay a small deposit to lock it in." },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 bg-secondary/10 rounded-lg border border-border/50">
              <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-3">
                <step.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold uppercase text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Widget */}
        <div className="mb-16">
          <BookingWidget />
        </div>

        {/* Policies / FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-center">Booking Policies</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="deposit">
              <AccordionTrigger>Deposit Policy</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {siteContent.policies.deposit}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cancellation">
              <AccordionTrigger>Cancellation Policy</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {siteContent.policies.cancellation}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="weather">
              <AccordionTrigger>Weather Policy</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {siteContent.policies.weather}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
