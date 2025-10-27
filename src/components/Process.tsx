import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { UserPlus, Settings, ClipboardList, Users, Sparkles } from 'lucide-react';

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

        <div ref={ref} className="max-w-5xl mx-auto">
          {t.process.steps.map((step, index) => {
            const Icon = icons[index];
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex items-center gap-8 mb-12 transition-all duration-700 ${
                  isIntersecting ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {isEven ? (
                  <>
                    <div className="flex-1 text-right">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="relative">
                      <div className="p-4 bg-gradient-hero rounded-full">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {index < t.process.steps.length - 1 && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-border" />
                      )}
                    </div>
                    <div className="flex-1" />
                  </>
                ) : (
                  <>
                    <div className="flex-1" />
                    <div className="relative">
                      <div className="p-4 bg-gradient-accent rounded-full">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {index < t.process.steps.length - 1 && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-border" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
