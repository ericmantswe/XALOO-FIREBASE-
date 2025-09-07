"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";

interface MobileMenuProps {
    navLinks: { href: string; label: string }[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
    return (
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
    )
}
