import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ClipboardCheck, Brain, MessageSquare, BarChart3 } from 'lucide-react';
import servicesImage from '@/assets/teacher-planning.jpg';

const icons = [CheckCircle2, ClipboardCheck, Brain, MessageSquare, BarChart3];

export function Services() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.headline}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-12">
          <div
            className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img
              src={servicesImage}
              alt="Teacher working with digital tools"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          </div>

          <div ref={ref} className="grid gap-4">
            {t.services.items.map((service, index) => {
              const Icon = icons[index];
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                    isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="p-2 bg-gradient-hero rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
