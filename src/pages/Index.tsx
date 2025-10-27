import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Focus } from '@/components/Focus';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Focus />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
