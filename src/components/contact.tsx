import { MapComponent } from './map';
import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
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
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="rounded-lg bg-background p-8 shadow-lg">
            <ContactForm />
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg h-full">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}