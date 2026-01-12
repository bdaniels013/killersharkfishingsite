import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";

export function ServicesTeaser() {
  return (
    <section className="py-20 bg-secondary/10 border-y border-border/50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium uppercase tracking-wider">
            <Anchor className="w-4 h-4" />
            Marine Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            More Than Just <span className="text-blue-500">Fishing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide professional marine services including boat towing, rig worker transport, 
            offshore pickup/drop-off, and urgent parts delivery. Reliable, licensed, and ready to dispatch.
          </p>
          <Button asChild size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10">
            <Link href="/services">Explore Marine Services</Link>
          </Button>
        </div>
        
        <div className="flex-1 w-full">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-muted">
             {/* Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-zinc-900">
               <span className="uppercase tracking-widest font-bold text-zinc-700 text-2xl">Service Vessel</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
