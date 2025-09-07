import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, Gauge, Network, Cog, BarChart3, School } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Cpu,
    title: "Control Systems",
    description: "Expert services in design, upgrades, commissioning, audits, and fault finding for robust control systems.",
  },
  {
    icon: Gauge,
    title: "Process Instruments",
    description: "Precise installation and calibration of process instruments to ensure optimal performance and accuracy.",
  },
  {
    icon: Network,
    title: "Industrial Communications",
    description: "Specializing in Profibus, Profinet, Modbus, Fiber Optics, WLAN, and Ethernet for seamless connectivity.",
  },
  {
    icon: Cog,
    title: "Drives, Motors & Actuators",
    description: "Comprehensive installation and troubleshooting services for drives, motors, and actuators.",
  },
  {
    icon: BarChart3,
    title: "SCADA Systems",
    description: "End-to-end solutions for SCADA systems, including design, upgrades, and commissioning.",
  },
  {
    icon: School,
    title: "Professional Training",
    description: "Empowering your team with certified training for PLCs and Profibus technologies.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Our Comprehensive Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a complete range of industrial automation and control engineering solutions to meet your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center p-6 bg-secondary border-2 border-transparent hover:border-primary transition-colors duration-300 hover:-translate-y-2 shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <service.icon className="h-10 w-10" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
