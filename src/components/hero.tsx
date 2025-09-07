"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[600px] w-full flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Industrial Automation"
          fill
          priority
          className="object-cover"
          data-ai-hint="industrial automation"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl font-headline text-primary">
              Transforming Industries with Smart Automation Solutions
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Delivering reliable automation, control systems, and industrial communication solutions for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-64 md:h-[450px] md:w-[450px] mx-auto">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 rotate-45">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`
                  ${i === 0 ? 'rounded-tl-full' : ''}
                  ${i === 2 ? 'rounded-tr-full' : ''}
                  ${i === 6 ? 'rounded-bl-full' : ''}
                  ${i === 8 ? 'rounded-br-full' : ''}
                  ${i === 4 ? 'opacity-0' : ''}
                  bg-primary/20 backdrop-blur-sm
                `}/>
              ))}
            </div>
            <Image
              src="https://picsum.photos/600"
              alt="Engineer"
              fill
              className="object-cover mask-diagonal"
              data-ai-hint="engineer space suit"
            />
          </div>
        </div>
      </div>
       <style jsx>{`
        .mask-diagonal {
          mask-image: linear-gradient(45deg, transparent 0%, transparent 25%, black 25%, black 75%, transparent 75%, transparent 100%),
                      linear-gradient(-45deg, transparent 0%, transparent 25%, black 25%, black 75%, transparent 75%, transparent 100%);
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
          mask-position: center;
          mask-composite: intersect;
        }
      `}</style>
    </section>
  );
}
