import Image from "next/image";
import { Award, Heart, Users, TrendingUp, Briefcase, Smile } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const trustPoints = [
    {
        icon: Award,
        title: "Proven Expertise",
        description: "Over a decade of experience in delivering high-quality industrial automation solutions.",
    },
    {
        icon: Users,
        title: "Customer-Centric",
        description: "We prioritize your needs, ensuring solutions are tailored to your specific requirements.",
    },
    {
        icon: Heart,
        title: "Reliable & Trusted",
        description: "Committed to providing dependable systems and building lasting partnerships.",
    },
];

const stats = [
    {
        icon: TrendingUp,
        value: "14+",
        label: "Years of Experience",
    },
    {
        icon: Briefcase,
        value: "200+",
        label: "Projects Completed",
    },
    {
        icon: Smile,
        value: "99%",
        label: "Client Satisfaction",
    },
];

const clients = [
  { name: "BCL Mine", logoHint: "mining company logo" },
  { name: "BMC", logoHint: "meat processing logo" },
  { name: "Discovery Metals", logoHint: "metals company logo" },
  { name: "Debswana", logoHint: "diamond company logo" },
  { name: "Water Utilities Corp.", logoHint: "water utility logo" },
];

export function Trust() {
  return (
    <section id="why-trust-us" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Why Trust Xaloo Technologies?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our commitment to quality, reliability, and customer satisfaction sets us apart.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point) => (
                <Card key={point.title} className="flex flex-col items-center text-center p-6 bg-secondary border-2 border-transparent hover:border-primary transition-colors duration-300 hover:-translate-y-2 shadow-lg">
                    <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                        <point.icon className="h-10 w-10" />
                    </div>
                    <CardHeader className="p-0">
                        <CardTitle className="font-headline">{point.title}</CardTitle>
                    </CardHeader>
                    <CardDescription className="mt-2 text-base text-muted-foreground">
                        {point.description}
                    </CardDescription>
                </Card>
            ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center">
              <stat.icon className="h-12 w-12 text-primary" />
              <p className="mt-4 text-4xl font-bold tracking-tighter text-primary">{stat.value}</p>
              <p className="mt-1 text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline text-primary">
            Our Satisfied Clients
          </h3>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div key={client.name} className="flex flex-col items-center gap-2">
                <Image
                  src="https://picsum.photos/150/80?grayscale"
                  alt={`${client.name} Logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                  data-ai-hint={client.logoHint}
                />
                <span className="text-sm font-medium text-muted-foreground">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
