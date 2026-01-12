import { DispatchForm } from "@/components/services/DispatchForm";
import { siteContent } from "@/data/siteContent";
import { Anchor, Users, Package, Ship, ArrowDown } from "lucide-react";

// Map icon strings to components
const iconMap: Record<string, any> = {
  Anchor,
  Users,
  Package,
  Ship,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Marine <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional maritime support services in the Gulfport area. 
            Licensed, insured, and available for urgent dispatch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {siteContent.services.map((service) => {
            const Icon = iconMap[service.icon] || Anchor;
            return (
              <div key={service.id} className="flex flex-col items-center text-center p-8 bg-card border border-border/50 rounded-xl hover:border-blue-500/50 transition-colors">
                <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dispatch Form Section */}
        <div className="max-w-3xl mx-auto" id="dispatch-form">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
              Request <span className="text-blue-500">Dispatch</span>
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to request a service. For emergencies, please call <a href={`tel:${siteContent.business.phone}`} className="text-blue-500 font-semibold hover:underline">{siteContent.business.phone}</a>.
            </p>
          </div>
          <DispatchForm />
        </div>
      </div>
    </div>
  );
}
