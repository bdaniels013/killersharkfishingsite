import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            The <span className="text-blue-500">Catch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the action. Real sharks, real people, real adventures.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}
