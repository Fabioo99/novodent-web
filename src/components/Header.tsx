import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const brands = [
    'SAEVO BY GNATUS', 'AJAX', 'DEOCA', 'SPD', 'BIOART', 'ORTHOMETRIC',
    'VOCO', 'SHOFU', 'ANYCUBIC', 'PRIZMA', 'PANDA', 'WOSON',
    'DTE', 'JINME', 'DENTALFILM', 'PREVEST', 'MDT', 'TPC', 'DMP', 'AALBADENT'
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/584124555310', '_blank');
  };

  const handleCatalog = () => {
    window.open('https://drive.google.com/drive/folders/1rmiHiEIzd_E7S9rUtD8seuzgM8LGawUz?usp=sharing', '_blank');
  };

  return (
    <header className="bg-card shadow-elegant sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo-novodent.png"
                alt="Novodent Logo"
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>

            {/* Brands Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (closeTimeout) {
                  clearTimeout(closeTimeout);
                  setCloseTimeout(null);
                }
                setIsBrandsOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setIsBrandsOpen(false);
                }, 300);
                setCloseTimeout(timeout);
              }}
            >
              <button
                className="flex items-center text-foreground hover:text-primary transition-colors"
              >
                Marcas
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isBrandsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-card shadow-elegant rounded-lg border border-border"
                >
                  <div className="max-h-64 overflow-y-auto p-4">
                    <div className="space-y-1">
                      {brands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => navigate(`/marca/${encodeURIComponent(brand)}`)}
                          className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-accent"
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Sobre Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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
              variant="catalog"
              size="sm"
              onClick={handleCatalog}
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Ver Catálogo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#marcas" className="text-foreground hover:text-primary transition-colors">
                Marcas
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>

              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="catalog"
                  size="sm"
                  onClick={handleCatalog}
                  className="flex items-center gap-2 w-full"
                >
                  <FileText className="h-4 w-4" />
                  Ver Catálogo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;