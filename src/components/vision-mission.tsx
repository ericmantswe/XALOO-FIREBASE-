import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, Goal } from "lucide-react";

export function VisionMission() {
  return (
    <section id="vision-mission" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <Card className="flex flex-col items-center text-center p-8 bg-secondary shadow-lg">
            <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
              <Eye className="h-10 w-10" />
            </div>
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold font-headline">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 p-0">
              <p className="text-muted-foreground text-lg">
                "Customer satisfaction through good response times and first-class service."
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-8 bg-secondary shadow-lg">
            <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
              <Goal className="h-10 w-10" />
            </div>
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 p-0">
              <p className="text-muted-foreground text-lg">
                "Following trends and developments in industrial automation to deliver value-added engineering solutions that suit customer needs."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
