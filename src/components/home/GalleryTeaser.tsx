import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function GalleryTeaser() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
          The <span className="text-blue-500">Catch</span>
        </h2>
        <p className="text-muted-foreground">See what our guests are reeling in.</p>
      </div>

      {/* Grid of images - using placeholders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4 max-w-[1600px] mx-auto mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-muted relative rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
               <span className="text-xs uppercase tracking-widest">Gallery {i}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="ghost" className="group text-lg">
          <Link href="/gallery">
            View Full Gallery 
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
