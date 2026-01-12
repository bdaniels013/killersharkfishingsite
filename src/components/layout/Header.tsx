"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Trips", href: "/trips" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Marine Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/90 backdrop-blur-md border-border/50 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <Image
            src={siteContent.branding.logo.src}
            alt={siteContent.branding.logo.alt}
            width={siteContent.branding.logo.width}
            height={siteContent.branding.logo.height}
            priority
            className="h-10 w-auto"
          />
          <span className="sr-only">{siteContent.business.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors uppercase tracking-wide active:text-blue-400",
                scrolled ? "hover:text-foreground" : "hover:text-white",
                pathname === item.href ? (scrolled ? "text-blue-400" : "text-white") : scrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild className="hidden lg:flex">
            <a href={`tel:${siteContent.business.phone}`}>
              <Phone className="w-4 h-4 mr-2" />
              {siteContent.business.phone}
            </a>
          </Button>
          <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white border-none">
            <Link href="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
           <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white border-none text-xs px-2 h-8">
            <Link href="/book">Book</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-border/50 w-[300px]">
              <nav className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors uppercase tracking-wide active:text-blue-400",
                      "hover:text-blue-400",
                      pathname === item.href ? "text-blue-400" : "text-foreground/80"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-6">
                  <Button variant="outline" asChild className="w-full justify-start">
                    <a href={`tel:${siteContent.business.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Captain
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/book" onClick={() => setIsOpen(false)}>Book Your Trip</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
