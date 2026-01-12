import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Facebook, Instagram, MapPin, Phone, Mail, Anchor } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter uppercase text-foreground">
                {siteContent.business.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premier offshore shark fishing charters in Gulfport, MS. Experience the thrill of the hunt with Captain Chris.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {siteContent.business.social.facebook && (
                <a
                  href={siteContent.business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {siteContent.business.social.instagram && (
                <a
                  href={siteContent.business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold uppercase tracking-wider mb-4 text-sm">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: "Trips & Rates", href: "/trips" },
                { name: "Marine Services", href: "/services" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "About The Captain", href: "/about" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold uppercase tracking-wider mb-4 text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 shrink-0 text-blue-500" />
                <span>
                  {siteContent.business.address}
                  <br />
                  Gulfport, MS
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 shrink-0 text-blue-500" />
                <a href={`tel:${siteContent.business.phone}`} className="hover:text-foreground transition-colors">
                  {siteContent.business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 shrink-0 text-blue-500" />
                <a href={`mailto:${siteContent.business.email}`} className="hover:text-foreground transition-colors">
                  {siteContent.business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Licenses */}
          <div>
            <h3 className="text-foreground font-semibold uppercase tracking-wider mb-4 text-sm">Certifications</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-blue-500" />
                USCG Licensed Captain
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-blue-500" />
                Towing Endorsed
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-blue-500" />
                Fully Insured
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} {siteContent.business.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
