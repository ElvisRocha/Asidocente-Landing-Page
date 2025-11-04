import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Send } from 'lucide-react';
import contactImage from '@/assets/parent-communication.jpg';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Importar banderas SVG
import GT from 'country-flag-icons/react/3x2/GT';
import BZ from 'country-flag-icons/react/3x2/BZ';
import HN from 'country-flag-icons/react/3x2/HN';
import SV from 'country-flag-icons/react/3x2/SV';
import NI from 'country-flag-icons/react/3x2/NI';
import CR from 'country-flag-icons/react/3x2/CR';
import PA from 'country-flag-icons/react/3x2/PA';

const CENTRAL_AMERICAN_COUNTRIES = [
  { code: 'GT', name: 'Guatemala', Flag: GT },
  { code: 'BZ', name: 'Belice', Flag: BZ },
  { code: 'HN', name: 'Honduras', Flag: HN },
  { code: 'SV', name: 'El Salvador', Flag: SV },
  { code: 'NI', name: 'Nicaragua', Flag: NI },
  { code: 'CR', name: 'Costa Rica', Flag: CR },
  { code: 'PA', name: 'Panamá', Flag: PA },
];

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { ref, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.2, 
    rootMargin: '50px',
    freezeOnceVisible: true 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      country: selectedCountry,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('https://n8n.smartflow-automations.com/webhook/5b96cfff-2520-4628-af28-d23b39b63956', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      toast({
        title: t.contact.success || '¡Mensaje enviado exitosamente!',
        description: 'Nos pondremos en contacto contigo pronto.',
      });

      (e.target as HTMLFormElement).reset();
      setSelectedCountry('');
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error al enviar el mensaje',
        description: 'Por favor, intenta nuevamente más tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={contactImage}
                alt="Teacher and parent communication"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </div>

          <div>
            <div
              className={`mb-8 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.headline}</h2>
              <p className="text-lg text-muted-foreground">{t.contact.text}</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div>
                <Input
                  name="name"
                  placeholder={t.contact.form.name}
                  required
                  className="transition-all focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={t.contact.form.email}
                  required
                  className="transition-all focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                  required
                >
                  <SelectTrigger className="w-full transition-all focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="🌎 Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent>
                    {CENTRAL_AMERICAN_COUNTRIES.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.name}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <country.Flag className="w-6 h-4 rounded-sm object-cover shadow-sm" />
                          <span className="font-medium">{country.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t.contact.form.message}
                  required
                  rows={5}
                  className="transition-all focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-hero hover:opacity-90 transition-all hover:scale-105 group py-4 md:py-3"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Enviando...</span>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1 transition-all hover:scale-105 py-4 md:py-3"
                  onClick={() => window.open('https://cal.com/elvis-rocha-xws8oy/30min?overlayCalendar=true', '_blank')}
                >
                  {t.contact.form.talk}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}