import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function Focus() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient max-w-3xl mx-auto">
            {t.focus.headline}
          </h2>
        </div>
      </div>
    </section>
  );
}
