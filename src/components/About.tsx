import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Lightbulb } from 'lucide-react';

export function About() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-hero rounded-xl">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">{t.about.headline}</h2>
            </div>
          </div>

          <p
            className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}
