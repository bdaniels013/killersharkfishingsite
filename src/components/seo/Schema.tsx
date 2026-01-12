import { siteContent } from "@/data/siteContent";

export function Schema() {
  const { business, seo } = siteContent;
  const logoUrl = new URL(siteContent.branding.logo.src, seo.baseUrl).toString();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "image": logoUrl,
    "telephone": business.phone,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address,
      "addressLocality": "Gulfport",
      "addressRegion": "MS",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.location.lat,
      "longitude": business.location.lng
    },
    "url": seo.baseUrl,
    "priceRange": "$$$",
    "description": seo.defaultDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Charter Services",
      "itemListElement": [
        ...siteContent.trips.map(trip => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": trip.title,
            "description": trip.description
          }
        })),
        ...siteContent.services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description
          }
        }))
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
