import { Hero } from "@/components/home/Hero";
import { TrustTiles } from "@/components/home/TrustTiles";
import { FeaturedTrips } from "@/components/home/FeaturedTrips";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustTiles />
      <FeaturedTrips />
      <ServicesTeaser />
      <GalleryTeaser />
      <Newsletter />
    </div>
  );
}
