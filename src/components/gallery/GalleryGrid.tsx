"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Sharks", "Offshore", "Crew", "Boat", "Marine Services"];

// Placeholder data
const galleryItems = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1], // Random category excluding All
  image: `/images/gallery-${i + 1}.jpg`,
}));

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full",
              filter === cat ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-accent"
            )}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="aspect-square bg-muted rounded-lg overflow-hidden relative group">
             {/* Placeholder */}
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
               <div className="text-center p-4">
                 <span className="block text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1">Placeholder</span>
                 <span className="text-xs text-zinc-600">{item.category}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
