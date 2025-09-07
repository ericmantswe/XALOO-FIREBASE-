import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import { VisionMission } from '@/components/vision-mission';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Trust } from '@/components/trust';
import { Testimonials } from '@/components/testimonials';
import { ClientOnly } from '@/components/client-only';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Services />
        </AnimateOnScroll>
        <ClientOnly>
          <AnimateOnScroll>
            <Trust />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Testimonials />
          </AnimateOnScroll>
        </ClientOnly>
        <AnimateOnScroll>
          <Projects />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <VisionMission />
        </AnimateOnScroll>
        <ClientOnly>
          <Contact />
        </ClientOnly>
      </main>
      <Footer />
    </div>
  );
}
