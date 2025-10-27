import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Lightbulb } from 'lucide-react';
import aboutImage from '@/assets/teachers-collaboration.jpg';

export function About() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3, freezeOnceVisible: false });

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Teachers collaborating together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className={`transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
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
      </div>
    </section>
  );
}
