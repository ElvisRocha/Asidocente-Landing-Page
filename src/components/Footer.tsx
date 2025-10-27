import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Heart, Send } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: t.footer.newsletter.success,
    });

    setEmail('');
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
                Asidocente
              </h3>
              <p className="text-background/80 text-sm leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20">
              <h4 className="font-bold mb-2 text-lg">{t.footer.newsletter.title}</h4>
              <p className="text-sm text-background/70 mb-4">
                {t.footer.newsletter.description}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t.footer.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/20 border-background/30 text-background placeholder:text-background/50 focus:ring-primary-glow"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-hero hover:opacity-90 transition-all hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block"
                >
                  {t.footer.quickLinks.features}
                </button>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.quickLinks.pricing}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.quickLinks.demo}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.quickLinks.help}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg">{t.footer.resources.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.resources.blog}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.resources.guides}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.resources.webinars}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.resources.community}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-lg">{t.footer.legal.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.legal.terms}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">
                  {t.footer.legal.cookies}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div>
            <p className="text-sm text-background/70 mb-3 text-center md:text-left">
              {t.footer.social}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-all hover:scale-110 hover:shadow-glow"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-background/70 mb-1">
              {t.footer.copyright}
            </p>
            <p className="text-xs text-background/60 flex items-center justify-center md:justify-end gap-1">
              {t.footer.madeWith}{' '}
              <Heart className="h-3 w-3 text-secondary fill-secondary animate-pulse" />{' '}
              {t.footer.for}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
