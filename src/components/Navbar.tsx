import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'services', 'process', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-foreground to-foreground/95 ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Asidocente
          </button>

          <div className="hidden md:flex items-center gap-6">
            {['home', 'about', 'services', 'process', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section 
                    ? 'text-primary-glow' 
                    : 'text-background/80 hover:text-background'
                }`}
              >
                {t.nav[section as keyof typeof t.nav]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="transition-transform hover:scale-110 text-background/80 hover:text-background hover:bg-background/10 font-semibold"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </Button>
            
            {/* Desktop Login Button */}
            <Button 
              onClick={() => window.open('https://app.asidocente.com/login', '_blank')}
              className="hidden md:flex bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow"
            >
              {t.nav.login}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-background/80 hover:text-background hover:bg-background/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] bg-gradient-to-b from-foreground to-foreground/95"
              >
                <SheetHeader>
                  <SheetTitle className="text-left bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                    Asidocente
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {['home', 'about', 'services', 'process', 'testimonials', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`text-left text-base font-medium transition-colors py-2 ${
                        activeSection === section 
                          ? 'text-primary-glow' 
                          : 'text-background/80 hover:text-background'
                      }`}
                    >
                      {t.nav[section as keyof typeof t.nav]}
                    </button>
                  ))}
                  <Button 
                    className="mt-4 bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow w-full"
                    onClick={() => {
                      window.open('https://app.asidocente.com/login', '_blank');
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t.nav.login}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
