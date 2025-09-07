"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "K. Johnson",
    company: "BCL Mine",
    quote: "Xaloo's expertise in Profibus networking was instrumental in upgrading our systems. Their team is professional, efficient, and highly skilled.",
    avatar: "https://picsum.photos/100/100?random=1",
    avatarHint: "man portrait"
  },
  {
    name: "L. Williams",
    company: "Water Utilities Corp.",
    quote: "The telemetry system designed by Xaloo has revolutionized our remote monitoring capabilities. We've seen a significant improvement in operational efficiency.",
    avatar: "https://picsum.photos/100/100?random=2",
    avatarHint: "woman portrait"
  },
  {
    name: "M. Brown",
    company: "Debswana",
    quote: "The control system upgrade was seamless and has greatly enhanced our production efficiency. Xaloo delivered beyond our expectations.",
    avatar: "https://picsum.photos/100/100?random=3",
    avatarHint: "man portrait"
  },
  {
    name: "S. Davis",
    company: "BMC",
    quote: "A successful SCADA system upgrade with excellent post-project support. We are very satisfied with the results.",
    avatar: "https://picsum.photos/100/100?random=4",
    avatarHint: "woman portrait"
  },
  {
    name: "T. Miller",
    company: "Discovery Metals",
    quote: "The HMI interfacing solution streamlined our plant operations perfectly. We highly recommend Xaloo Technologies.",
    avatar: "https://picsum.photos/100/100?random=5",
    avatarHint: "man portrait"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear directly from the partners who have trusted us with their critical systems.
            </p>
          </div>
        </div>
        <div className="relative mt-12 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ['0%', '-100%'],
              transition: {
                ease: 'linear',
                duration: 40,
                repeat: Infinity,
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card key={index} className="min-w-[350px] max-w-[350px] flex-shrink-0 bg-background shadow-lg">
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent" />
        </div>
      </div>
    </section>
  );
}
