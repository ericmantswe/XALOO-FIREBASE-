import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { MapComponent } from './map';

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Plot no 612, Extension 4, Palapye", "P.O. Box 11178, Palapye, Botswana"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["Phone: +267 492 2424", "Fax: +267 492 2432", "Mobile: +267 716 749 82"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["enquiries@xaloo.co.bw", "gasephalalo@xaloo.co.bw", "olesego@xaloo.co.bw", "xalootech@gmail.com"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're here to help with your industrial automation needs. Contact us today to discuss your project.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <detail.icon className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">{detail.title}</h3>
                  {detail.lines.map((line, index) => (
                    <p key={index} className="text-muted-foreground">
                      {detail.title === 'Email' ? <a href={`mailto:${line}`} className="hover:text-primary">{line}</a> : line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
