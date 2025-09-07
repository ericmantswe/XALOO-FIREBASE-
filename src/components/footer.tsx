import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Image src="https://i.postimg.cc/CKX2vC8V/xaloo.jpg" alt="Xaloo Technologies Logo" width={60} height={60} className="h-14 w-14 rounded-full" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your partner in smart industrial automation and control engineering.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Connect With Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Xaloo Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
