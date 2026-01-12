import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Schema } from "@/components/seo/Schema";
import { siteContent } from "@/data/siteContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.baseUrl),
  title: {
    default: siteContent.seo.defaultTitle,
    template: `%s | ${siteContent.business.name}`,
  },
  description: siteContent.seo.defaultDescription,
  openGraph: {
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.defaultDescription,
    url: "/",
    siteName: siteContent.business.name,
    type: "website",
    images: [
      {
        url: siteContent.branding.logo.src,
        width: siteContent.branding.logo.width,
        height: siteContent.branding.logo.height,
        alt: siteContent.branding.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.defaultDescription,
    images: [siteContent.branding.logo.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased flex flex-col")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Schema />
      </body>
    </html>
  );
}
