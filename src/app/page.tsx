import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { SeoTool } from '@/components/seo-tool';
import { Services } from '@/components/services';
import { VisionMission } from '@/components/vision-mission';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <VisionMission />
        <SeoTool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
