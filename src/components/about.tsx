import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const industries = [
  "Mining",
  "Water & Wastewater",
  "Food & Beverage",
  "Telecommunications",
  "Pharmaceuticals",
];

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                About Xaloo Technologies
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in 2010, Xaloo Technologies has grown to be a trusted partner in industrial automation. We specialize in PLCs, SCADA systems, variable speed drives, process instruments, and robust industrial communications.
              </p>
            </div>
            <Card>
              <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                <Image
                  src="https://picsum.photos/200"
                  alt="Gasemotho N. Phalalo, Founder"
                  width={120}
                  height={120}
                  className="rounded-full object-cover border-4 border-primary"
                  data-ai-hint="engineer portrait"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-bold">Gasemotho N. Phalalo</h3>
                  <p className="text-muted-foreground font-medium">Founder & Certified Profibus Engineer</p>
                  <p className="text-sm text-foreground/80">
                    With over 10 years of hands-on experience, Gasemotho leads our team with a commitment to excellence and innovation in every project.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
             <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Industries We Serve</h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <li key={industry} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
