export const siteContent = {
  business: {
    name: "Killer Shark Fishing",
    captain: "Captain Chris",
    phone: "228-596-0472",
    email: "killersharkfishing@gmail.com",
    address: "Gulfport Harbor, Gulfport, MS",
    location: {
      lat: 30.3674, // Approximate coordinates for Gulfport Harbor
      lng: -89.0928,
    },
    social: {
      facebook: "https://facebook.com", // Placeholder
      instagram: "https://instagram.com", // Placeholder
    },
  },
  branding: {
    logo: {
      src: "/images/killer%20shark%20fishing%20charters%20logo.jpg",
      alt: "Killer Shark Fishing logo",
      width: 180,
      height: 72,
    },
    heroVideo: {
      src: "/videos/hero.mp4",
      poster: "/images/killer%20shark%20fishing%20charters%20logo.jpg",
    },
  },
  booking: {
    provider: "bokun" as "bokun" | "fishingbooker",
    bokun: {
      // Example placeholder config
      embedScript: "https://widgets.bokun.io/assets/javascripts/apps/build/booking-channel-widget/booking-channel-widget.js",
      channelId: "YOUR_BOKUN_CHANNEL_ID", 
    },
    fishingbooker: {
      // Example placeholder config
      embedHtml: '<div id="fishingbooker-widget"></div>',
    },
  },
  trips: [
    {
      id: "4hr-shark",
      title: "4 Hour Offshore Shark Charter",
      duration: "4 Hours",
      capacity: "Up to 6 Passengers",
      price: "Contact for Pricing",
      description: "An action-packed half-day adventure targeting coastal shark species. Perfect for families and beginners.",
      included: ["Bait & Tackle", "Ice & Water", "Fishing Licenses", "Safety Gear"],
      whatToBring: ["Sunscreen", "Sunglasses", "Hat", "Snacks & Drinks", "Camera"],
      image: "/images/shark-4hr.jpg", // Placeholder
    },
    {
      id: "6hr-shark",
      title: "6 Hour Offshore Shark Charter",
      duration: "6 Hours",
      capacity: "Up to 6 Passengers",
      price: "Contact for Pricing",
      description: "Go further offshore for bigger sharks and more action. The ultimate shark fishing experience.",
      included: ["Bait & Tackle", "Ice & Water", "Fishing Licenses", "Safety Gear"],
      whatToBring: ["Sunscreen", "Sunglasses", "Hat", "Snacks & Drinks", "Camera"],
      image: "/images/shark-6hr.jpg", // Placeholder
    },
  ],
  services: [
    {
      id: "towing",
      title: "Boat Towing",
      description: "Reliable breakdown assistance and towing services.",
      icon: "Anchor",
    },
    {
      id: "transport",
      title: "Rig Worker Transport",
      description: "Safe and timely offshore pickup and drop-off to boats and rigs.",
      icon: "Users",
    },
    {
      id: "parts",
      title: "Parts Delivery & Urgent Runs",
      description: "Expedited delivery of critical parts and supplies to transiting vessels.",
      icon: "Package",
    },
    {
      id: "offshore-taxi",
      title: "Offshore Pickup & Drop-off",
      description: "General transport services for personnel and equipment.",
      icon: "Ship",
    },
  ],
  policies: {
    deposit: "A deposit is required to secure your booking. The amount is determined by the booking provider.",
    cancellation: "Deposits are non-refundable if the customer cancels. If the captain cancels due to weather or safety concerns, you will be offered a reschedule or a full refund.",
    weather: "Weather decisions are made solely by the captain. We monitor conditions closely to ensure your safety.",
  },
  seo: {
    defaultTitle: "Killer Shark Fishing | Gulfport, MS",
    defaultDescription: "Premier offshore shark fishing charters in Gulfport, MS with Captain Chris. Also offering marine services including towing and transport.",
    baseUrl: "https://killersharkfishing.com",
  },
};
