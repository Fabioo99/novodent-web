import { MessageCircle, FileText, Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/584124555310', '_blank');
  };

  const handleCatalog = () => {
    window.open('#', '_blank'); // Replace with actual Google Drive link
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/novodentca', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:novodent.vzla@gmail.com');
  };

  const handlePhone = () => {
    window.open('tel:+584124555310');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const brands = [
    'SAEVO BY GNATUS', 'AJAX', 'DEOCA', 'SPD', 'BIOART', 'ORTHOMETRIC',
    'VOCO', 'SHOFU', 'ANYCUBIC', 'PRIZMA', 'PANDA', 'WOSON',
    'DTE', 'JINME', 'DENTALFILM', 'PREVEST', 'MDT', 'TPC', 'DMP', 'Aalbadent'
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-primary mb-6">
              NOVODENT
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Tu aliado confiable en soluciones odontológicas con más de 45 años de experiencia. 
              Importamos y distribuimos equipos de alta tecnología de las mejores marcas internacionales.
            </p>
            
            <div className="flex gap-4">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsApp}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleInstagram}
                className="flex items-center gap-2 border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('marcas')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Marcas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button 
                  onClick={handleCatalog}
                  className="text-background/80 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Catálogo Completo
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <button 
                  onClick={handlePhone}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  +58 412 4555310
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <button 
                  onClick={handleEmail}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  novodent.vzla@gmail.com
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">
                  Valencia, Edo. Carabobo
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-primary" />
                <button 
                  onClick={handleInstagram}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  @novodentca
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-background/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-semibold text-background">Horario de Atención</span>
              </div>
              <div className="text-sm text-background/80">
                <div>Lun - Vie: 8:00 AM - 6:00 PM</div>
                <div>Sáb: 8:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">
              Marcas Representadas
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {brands.slice(0, 12).map((brand) => (
                <div key={brand} className="text-background/80 hover:text-primary transition-colors cursor-pointer">
                  {brand}
                </div>
              ))}
            </div>
            <button 
              onClick={() => scrollToSection('marcas')}
              className="text-primary hover:text-secondary transition-colors mt-4 text-sm"
            >
              Ver todas las marcas →
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2024 Novodent. Todos los derechos reservados. 45+ años distribuyendo excelencia odontológica.
            </div>
            
            <div className="flex items-center gap-6">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsApp}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Contactar Ahora
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-6 text-background/40 text-xs">
            Distribuidores oficiales de tecnología odontológica de vanguardia en Venezuela
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;