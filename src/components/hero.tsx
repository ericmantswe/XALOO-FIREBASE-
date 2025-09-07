import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Industrial Automation"
          fill
          priority
          className="object-cover"
          data-ai-hint="industrial automation"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
            Transforming Industries with Smart Automation Solutions
          </h1>
          <p className="text-lg text-primary-foreground/80 md:text-xl">
            Delivering reliable automation, control systems, and industrial communication solutions for over a decade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
