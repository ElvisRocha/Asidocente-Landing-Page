import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-teacher.jpg';
import { VideoModal } from '@/components/VideoModal';

export function Hero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-hero rounded-full blur-3xl animate-float opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-hero rounded-full blur-3xl animate-float-delayed opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-hero rounded-full blur-3xl animate-float opacity-20" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-[4fr_1fr] gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Area - 80% on desktop */}
          <div className="text-center lg:text-left py-16 lg:py-20 px-6 lg:px-10">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold mb-6 leading-[1.4] transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-gradient">{t.hero.headline}</span>
            </h1>

            <p
              className={`text-base md:text-lg lg:text-xl text-muted-foreground mb-6 leading-[1.6] transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {t.hero.subheadline}
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-all hover:scale-105 group">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all hover:scale-105 group"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Image Area - 20% on desktop */}
          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Teacher using technology with students"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-hero rounded-2xl -z-10 animate-float-delayed shadow-glow" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-hero rounded-2xl -z-10 animate-float shadow-glow" />
          </div>
        </div>
      </div>

      <VideoModal
        open={isVideoOpen}
        onOpenChange={setIsVideoOpen}
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title={t.hero.ctaSecondary}
      />
    </section>
  );
}
