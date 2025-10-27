import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { UserPlus, Settings, ClipboardList, Users, Sparkles } from 'lucide-react';
import processImage from '@/assets/students-learning.jpg';

const icons = [UserPlus, Settings, ClipboardList, Users, Sparkles];

export function Process() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.process.headline}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          <div ref={ref}>
            {t.process.steps.map((step, index) => {
              const Icon = icons[index];
              
              return (
                <div
                  key={index}
                  className={`flex items-start gap-6 mb-8 transition-all duration-700 ${
                    isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="p-3 bg-gradient-hero rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {index < t.process.steps.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-300 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src={processImage}
              alt="Students learning in classroom"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-success/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
