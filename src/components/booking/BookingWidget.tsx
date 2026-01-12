"use client";

import { useEffect, useRef } from "react";
import { siteContent } from "@/data/siteContent";

export function BookingWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { provider } = siteContent.booking;

    if (provider === "bokun") {
      const { bokun } = siteContent.booking;
      if (bokun?.embedScript) {
        const script = document.createElement("script");
        script.src = bokun.embedScript;
        script.async = true;
        containerRef.current.appendChild(script);
        
        // Cleanup function to remove script if component unmounts
        return () => {
          if (containerRef.current) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const scriptToRemove = containerRef.current.querySelector(`script[src="${bokun.embedScript}"]`);
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
          }
        };
      }
    } else if (provider === "fishingbooker") {
      const { fishingbooker } = siteContent.booking;
      if (fishingbooker?.embedHtml) {
        containerRef.current.innerHTML = fishingbooker.embedHtml;
      }
    }
  }, []);

  return (
    <div className="w-full min-h-[600px] bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg p-4 md:p-8">
      <div ref={containerRef} className="w-full h-full" id="booking-widget-container">
        {/* Widget will be injected here */}
        <div className="flex items-center justify-center h-full text-muted-foreground p-12 text-center border-2 border-dashed border-border rounded-lg">
          <div>
             <h3 className="text-xl font-bold mb-2">Booking Widget Placeholder</h3>
             <p className="max-w-md mx-auto">
               The {siteContent.booking.provider} widget will appear here. 
               Please configure the embed code in <code>src/data/siteContent.ts</code>.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
