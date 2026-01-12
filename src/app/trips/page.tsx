import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteContent } from "@/data/siteContent";
import { Clock, Users, Check, Phone, ShieldCheck } from "lucide-react";

export default function TripsPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Offshore <span className="text-blue-500">Shark Charters</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the adrenaline of battling the ocean's apex predators. 
            All trips include licenses, bait, tackle, and ice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {siteContent.trips.map((trip) => (
            <Card key={trip.id} className="bg-card border-border/50 overflow-hidden flex flex-col h-full hover:border-blue-500/50 transition-colors shadow-lg">
              <div className="h-72 w-full bg-muted relative">
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-muted-foreground">
                   <span className="text-lg uppercase tracking-widest font-semibold">Image Placeholder</span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <CardTitle className="text-3xl uppercase tracking-tight">{trip.title}</CardTitle>
                </div>
                <div className="flex gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    {trip.capacity}
                  </div>
                </div>
                <CardDescription className="text-base">
                  {trip.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow space-y-6">
                <div>
                  <h4 className="font-semibold uppercase text-sm mb-3 text-foreground/80">What's Included</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {trip.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold uppercase text-sm mb-3 text-foreground/80">What to Bring</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {trip.whatToBring.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-3 pt-6 border-t border-border/50">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 h-auto">
                  <Link href={`/book?trip=${trip.id}`}>Book This Trip Now</Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  A deposit is required to secure your date.
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom Trip CTA */}
        <div className="max-w-4xl mx-auto bg-blue-950/30 border border-blue-500/30 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
            Looking for something custom?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            We can tailor a trip to your specific needs. Corporate events, special occasions, or longer duration trips.
          </p>
          <Button size="lg" variant="outline" asChild className="text-lg h-12">
            <a href={`tel:${siteContent.business.phone}`}>
              <Phone className="w-5 h-5 mr-2" />
              Call Captain Chris: {siteContent.business.phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
