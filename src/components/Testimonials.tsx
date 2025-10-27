import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: false });

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.testimonials.headline}</h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
