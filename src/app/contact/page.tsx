import { ContactForm } from "@/components/contact/ContactForm";
import { siteContent } from "@/data/siteContent";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to book your trip or have questions? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-secondary/10 p-8 rounded-xl border border-border/50 space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Contact Info</h3>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold uppercase text-sm mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    {siteContent.business.address}<br />
                    Gulfport, MS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold uppercase text-sm mb-1">Phone</h4>
                  <p className="text-muted-foreground mb-2">
                    <a href={`tel:${siteContent.business.phone}`} className="hover:text-foreground transition-colors">
                      {siteContent.business.phone}
                    </a>
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <a href={`sms:${siteContent.business.phone}`}>Text Captain</a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold uppercase text-sm mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href={`mailto:${siteContent.business.email}`} className="hover:text-foreground transition-colors">
                      {siteContent.business.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 p-8 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {siteContent.business.social.facebook && (
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <a href={siteContent.business.social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-5 h-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </Button>
                )}
                {siteContent.business.social.instagram && (
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <a href={siteContent.business.social.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
