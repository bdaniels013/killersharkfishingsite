"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("Thanks for subscribing! We'll keep you posted.");
    }, 1000);
  };

  return (
    <section className="py-20 bg-blue-950/20 border-t border-border/50">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mb-6">
          <Mail className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
          Don't Miss the <span className="text-blue-500">Run</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Get updates on open dates, cancellations, and seasonal shark runs directly to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 bg-background/50 border-white/10 focus:border-blue-500"
          />
          <Button type="submit" size="lg" className="h-12 bg-blue-600 hover:bg-blue-700" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
