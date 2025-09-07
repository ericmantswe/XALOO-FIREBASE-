"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { ClientOnly } from "./client-only";

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
          <ClientOnly>
            <MobileMenu navLinks={navLinks} />
          </ClientOnly>
        </div>
      </div>
    </header>
  );
}
