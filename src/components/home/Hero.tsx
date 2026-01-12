import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster={siteContent.branding.heroVideo.poster}
        >
          <source src={siteContent.branding.heroVideo.src} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-background via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 uppercase drop-shadow-lg max-w-4xl">
          The Ultimate <span className="text-blue-500">Shark Fishing</span> Experience
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-medium drop-shadow-md">
          Join Captain Chris for premier offshore shark charters in Gulfport, MS. 
          Professional, safe, and action-packed adventures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
          <Button size="lg" asChild className="w-full text-lg h-12 bg-blue-600 hover:bg-blue-700 border-none">
            <Link href="/book">Instant Book Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full text-lg h-12 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <a href={`tel:${siteContent.business.phone}`}>
              <Phone className="w-5 h-5 mr-2" />
              Call or Text
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
