import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteContent } from "@/data/siteContent";
import { Clock, Users, Check } from "lucide-react";

export function FeaturedTrips() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Our <span className="text-blue-500">Charters</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose your adventure. We offer specialized shark fishing trips designed for maximum action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteContent.trips.map((trip) => (
            <Card key={trip.id} className="bg-card border-border/50 overflow-hidden flex flex-col h-full hover:border-blue-500/50 transition-colors">
              <div className="h-64 w-full bg-muted relative">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-muted-foreground">
                  <span className="text-sm uppercase tracking-widest">Image Placeholder</span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <CardTitle className="text-2xl uppercase tracking-tight">{trip.title}</CardTitle>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    {trip.capacity}
                  </div>
                </div>
                <CardDescription className="text-base line-clamp-3">
                  {trip.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {trip.included.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                  <li className="text-sm text-muted-foreground italic pl-6">...and more</li>
                </ul>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-3">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  <Link href={`/book?trip=${trip.id}`}>Book This Trip</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/trips">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
