import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: t.contact.success,
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-2xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
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
                placeholder={t.contact.form.name}
                required
                className="transition-all focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={t.contact.form.email}
                required
                className="transition-all focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <Textarea
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
                className="flex-1 bg-gradient-hero hover:opacity-90 transition-all hover:scale-105 group"
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
                className="flex-1 transition-all hover:scale-105"
              >
                {t.contact.form.talk}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
