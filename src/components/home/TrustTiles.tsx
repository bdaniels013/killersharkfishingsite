import { ShieldCheck, Anchor, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: Anchor,
    title: "USCG Licensed",
    description: "Captain Chris is a fully licensed and insured USCG Captain.",
  },
  {
    icon: Users,
    title: "6 Passengers",
    description: "Comfortable capacity for up to 6 guests per charter.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Equipped with top-tier safety gear and modern navigation.",
  },
  {
    icon: MapPin,
    title: "Gulfport Harbor",
    description: "Conveniently located at Gulfport Harbor, MS.",
  },
];

export function TrustTiles() {
  return (
    <section className="py-12 bg-secondary/30 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-4 text-blue-500">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
