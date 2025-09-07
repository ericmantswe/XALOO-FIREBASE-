"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src="https://i.postimg.cc/nLKkm6Jg/xaloo.png" alt="Xaloo Technologies Logo" width={60} height={60} className="h-14 w-14 rounded-full" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button asChild className="animated-gradient-button">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Sparkles className="h-6 w-6 animate-pulse text-primary" />
                <span className="ml-2">Menu</span>
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex h-full flex-col justify-between p-6">
                  <div className="grid gap-6">
                      <Link href="/" className="flex items-center gap-2" prefetch={false}>
                          <Image src="https://i.postimg.cc/nLKkm6Jg/xaloo.png" alt="Xaloo Technologies Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
                      </Link>
                      <nav className="grid gap-4">
                          {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                              <Link
                              href={link.href}
                              className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                              prefetch={false}
                              >
                              {link.label}
                              </Link>
                          </SheetClose>
                          ))}
                      </nav>
                  </div>
                  <SheetClose asChild>
                      <Button asChild>
                          <Link href="#contact">Contact Us</Link>
                      </Button>
                  </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
