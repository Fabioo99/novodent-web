import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-dental-clinic.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/584124555310', '_blank');
  };

  const handleCatalog = () => {
    window.open('#', '_blank'); // Replace with actual Google Drive link
  };


  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="text-white space-y-8 max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Tu aliado en{' '}
                <span className="text-secondary">soluciones odontológicas</span>
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed opacity-90 animate-slide-in">
                Equipos y tecnología dental de primer nivel, atención especializada y respaldo 
                de las mejores marcas internacionales en Venezuela.
              </p>

              <div className="flex items-center space-x-2 text-lg">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="font-semibold">45+ años de experiencia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={handleWhatsApp}
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button
                variant="catalog"
                size="xl"
                onClick={handleCatalog}
                className="flex items-center gap-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <FileText className="h-6 w-6" />
                Ver Catálogo Completo
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;