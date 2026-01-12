import { siteContent } from "@/data/siteContent";
import { Anchor, ShieldCheck, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Bio Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1 w-full">
            <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden relative border border-border/50">
               {/* Placeholder */}
               <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-muted-foreground">
                 <span className="text-xl uppercase tracking-widest font-bold text-zinc-600">Captain Chris</span>
               </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Meet <span className="text-blue-500">Captain Chris</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience navigating the Gulf Coast waters, Captain Chris is dedicated to providing 
              safe, thrilling, and memorable shark fishing adventures. His passion for the ocean and expertise 
              in targeting coastal shark species ensures that every trip is an educational and action-packed experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a seasoned angler or a family looking for a unique vacation activity, 
              Captain Chris works tirelessly to put you on the fish and keep everyone comfortable and safe.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
               <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-border/50">
                 <Anchor className="w-8 h-8 text-blue-500" />
                 <div>
                   <h3 className="font-bold uppercase text-sm">USCG Licensed</h3>
                   <p className="text-xs text-muted-foreground">OUPV 6-Pack Captain</p>
                 </div>
               </div>
               <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-border/50">
                 <Anchor className="w-8 h-8 text-blue-500" />
                 <div>
                   <h3 className="font-bold uppercase text-sm">Towing Endorsed</h3>
                   <p className="text-xs text-muted-foreground">Commercial Assistance</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Safety & What to Expect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Safety First
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tight">Professional & Safe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your safety is our top priority. Our vessel is equipped with all USCG-required safety gear, 
              modern navigation electronics, and top-of-the-line communications equipment. 
              We monitor weather conditions constantly and will never risk your safety for a trip.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              The Experience
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tight">What to Expect</h2>
            <p className="text-muted-foreground leading-relaxed">
              Trips depart from Gulfport Harbor. We'll start with a brief safety orientation before heading out 
              to prime shark grounds. Depending on the trip length, we may travel 5-15 miles offshore. 
              Be prepared for sun, salt spray, and some serious rod-bending action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
