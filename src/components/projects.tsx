import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    client: "BCL Mine",
    description: "Installation of Combricks and execution of Profibus network upgrades.",
    logoHint: "mining company"
  },
  {
    client: "BMC",
    description: "Successful upgrade of the Adroit SCADA system for improved monitoring and control.",
    logoHint: "meat processing"
  },
  {
    client: "Discovery Metals",
    description: "Implemented Modbus & HMI interfacing for streamlined plant operations.",
    logoHint: "metals logo"
  },
  {
    client: "Debswana",
    description: "Carried out a critical control system upgrade to enhance production efficiency.",
    logoHint: "diamond company"
  },
  {
    client: "Water Utilities Corp.",
    description: "Designed and commissioned a comprehensive telemetry system for remote water management.",
    logoHint: "water utility"
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Proven Experience, Successful Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our track record demonstrates our capability to deliver excellence across various demanding industries.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.client} className="overflow-hidden bg-background">
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-secondary rounded-lg">
                  <Image
                    src="https://picsum.photos/100/100?grayscale"
                    alt={`${project.client} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                    data-ai-hint={project.logoHint}
                  />
                </div>
                <CardTitle className="font-headline text-xl">{project.client}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="text-base text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
