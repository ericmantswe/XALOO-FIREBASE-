"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// Since spline-viewer is a custom element, we need to declare its type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string; }, HTMLElement>;
    }
  }
}

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[600px] w-full flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/CGTOHKA0m4IbK6xs/scene.splinecode"></spline-viewer>
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl font-headline text-primary-foreground">
            Transforming Industries with Smart <span className="gradient-text">Automation</span> Solutions
          </h1>
          <p className="text-lg text-primary-foreground/80 md:text-xl">
            Delivering reliable automation, control systems, and industrial communication solutions for over a decade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="animated-gradient-button">
              <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
