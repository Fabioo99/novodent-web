import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MessageCircle } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  image?: string;
}

interface Brand {
  name: string;
  products: Product[];
}

const Brands = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const autoPlay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    const onPointerDown = () => {
      clearInterval(autoPlay);
      setTimeout(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 7000);
    };

    api.on('pointerDown', onPointerDown);

    return () => {
      clearInterval(autoPlay);
      api.off('pointerDown', onPointerDown);
    };
  }, [api]);

  const handleWhatsApp = (product?: string) => {
    const message = product 
      ? `Hola, me interesa el producto: ${product}. ¿Podrían brindarme más información?`
      : 'Hola, me interesa conocer más sobre sus productos odontológicos.';
    window.open(`https://wa.me/584124555310?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBrandCatalog = (brand: string) => {
    window.open('https://drive.google.com/drive/folders/1rmiHiEIzd_E7S9rUtD8seuzgM8LGawUz?usp=sharing', '_blank');
  };

  const handleBrandClick = (brand: string) => {
    navigate(`/marca/${encodeURIComponent(brand)}`);
    // Scroll to top when navigating to brand page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const brands: Brand[] = [
    {
      name: 'ANYCUBIC',
      products: [
        { name: 'Photon Mono 4 Ultra', description: 'Impresora 3D de alta precisión para odontología' },
        { name: 'Photon Mono 7', description: 'Impresora 3D profesional con pantalla 4K' },
        { name: 'Wash&Cure 3.0 Plus', description: 'Estación de lavado y curado automatizada' },
        { name: 'Wash Cure Max', description: 'Sistema de lavado y curado de gran capacidad' },
        { name: 'Resina Standard', description: 'Resina biocompatible para aplicaciones dentales' }
      ]
    },
    {
      name: 'PRIZMA',
      products: [
        { name: 'Bio Crown Diamond', description: 'Coronas temporales de alta resistencia' },
        { name: 'Bio Crown', description: 'Sistema de coronas provisionales' },
        { name: 'Bio Splint', description: 'Material para férulas oclusales' },
        { name: 'Bio Provisional', description: 'Resina para restauraciones temporales' }
      ]
    },
    {
      name: 'PANDA',
      products: [
        { name: 'Panda P3', description: 'Unidad dental compacta y eficiente' },
        { name: 'Panda Smart', description: 'Sillón dental con tecnología inteligente' },
        { name: 'Panda P4', description: 'Sistema dental de última generación' }
      ]
    },
    {
      name: 'WOSON',
      products: [
        { name: 'Tanda Color 12L', description: 'Autoclave de mesa de 12 litros' },
        { name: 'Tanda Color 18L', description: 'Autoclave de clase B de 18 litros' },
        { name: 'Tanda Color 23L', description: 'Autoclave profesional de 23 litros' },
        { name: 'Sensor Intraoral', description: 'Sensor digital para radiografías' }
      ]
    },
    {
      name: 'DTE',
      products: [
        { name: 'Ultrasonido D1', description: 'Equipo de profilaxis ultrasónica básico' },
        { name: 'Ultrasonido D5', description: 'Destartalizador ultrasónico avanzado' },
        { name: 'Light Max', description: 'Lámpara de fotocurado LED de alta potencia' },
        { name: 'B Cure', description: 'Unidad de fotocurado inalámbrica' }
      ]
    },
    {
      name: 'JINME',
      products: [
        { name: 'J1 Plus', description: 'Motor de endodoncia con localizador apical' },
        { name: 'J5 LED', description: 'Contraángulo con iluminación LED' },
        { name: 'M2', description: 'Micromotor de alta velocidad' },
        { name: 'J45', description: 'Pieza de mano de alta rotación' }
      ]
    },
    {
      name: 'SAEVO BY GNATUS',
      products: [
        { name: 'S501F', description: 'Versatilidad y diseño moderno en una unidad que se adapta a las distintas necesidades de la práctica odontológica diaria' },
        { name: 'S401F', description: 'Unidad compacta de alto rendimiento, pensada para espacios reducidos sin sacrificar tecnología ni comodidad' },
        { name: 'autoclave SAEVO 12 litros', description: 'Autoclave de alta eficiencia para la esterilización rápida y segura de instrumentos odontológicos' },
        { name: 'Bomba de succión 1HP SAEVO by GNATUS', description: 'Solución potente y silenciosa para succión dental, optimizando la higiene y el confort del paciente' }
      ]
    },
    {
      name: 'DENTALFILM',
      products: [
        { name: 'Radiografías Autorrevelables', description: 'Películas radiográficas de revelado automático' }
      ]
    }
  ];

  const allBrands = [
    'SAEVO BY GNATUS', 'AJAX', 'DEOCA', 'SPD', 'BIOART', 'ORTHOMETRIC',
    'VOCO', 'SHOFU', 'ANYCUBIC', 'PRIZMA', 'PANDA', 'WOSON',
    'DTE', 'JINME', 'DENTALFILM', 'PREVEST', 'MDT', 'TPC', 'DMP', 'AALBADENT'
  ];

  // Brand logos mapping
  const brandLogos: { [key: string]: string } = {
    'PANDA': '/brands/panda-logo.jpeg',
    'DENTALFILM': '/brands/dentafilm-logo.jpg',
    'DTE': '/brands/dte-logo.png',
    'PRIZMA': '/brands/prizma-logo.png',
    'ANYCUBIC': '/brands/anycubic-logo.jpeg',
    'SHOFU': '/brands/shofu-logo.png',
    'SAEVO BY GNATUS': '/brands/saevo-logo.png',
    'AJAX': '/brands/ajax-logo.png',
    'DEOCA': '/brands/deoca-logo.png',
    'SPD': '/brands/spd-logo.png',
    'BIOART': '/brands/bioart-logo.png',
    'ORTHOMETRIC': '/brands/orthometric-logo.png',
    'VOCO': '/brands/voco-logo.png',
    'DMP': '/brands/dmp-logo.png',
    'AALBADENT': '/brands/aalbadent-logo.png',
    'WOSON': '/brands/woson-logo.png',
    'JINME': '/brands/jinme-logo.png',
    'TPC': '/brands/tpc-logo.png',
    'MDT': '/brands/mdt-logo.jpeg',
    'PREVEST': '/brands/prevest-logo.jpeg',
    // All brand logos are now available!
  };

  // Function to get brand logo or fallback to initials
  const getBrandDisplay = (brand: string) => {
    const logoPath = brandLogos[brand];
    if (logoPath) {
      return (
        <img 
          src={logoPath} 
          alt={`${brand} logo`} 
          className="w-12 h-12 object-contain"
          onError={(e) => {
            // Fallback to initials if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
      );
    }
    return null;
  };

  return (
    <section id="marcas" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marcas de <span className="text-primary">Excelencia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajamos exclusivamente con las mejores marcas internacionales del sector odontológico
          </p>
        </div>

        {/* Brands Carousel */}
        <div className="mb-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allBrands.map((brand) => (
                <CarouselItem key={brand} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <button
                    onClick={() => handleBrandClick(brand)}
                    className="w-full p-4 rounded-lg border-2 transition-all duration-300 text-center hover:shadow-card border-border bg-card hover:border-primary/50 hover:bg-primary/5"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-border/20 shadow-sm">
                        {getBrandDisplay(brand)}
                        {/* Fallback to initials if no logo */}
                        <span 
                          className={`text-primary font-bold text-xs text-center ${
                            brandLogos[brand] ? 'hidden' : 'flex'
                          }`}
                          style={{ display: brandLogos[brand] ? 'none' : 'flex' }}
                        >
                          {brand.split(' ').map(word => word[0]).join('').slice(0, 3)}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-foreground leading-tight">
                        {brand}
                      </span>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿No encuentras la marca que buscas?
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => handleWhatsApp()}
            className="flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Consulta Nuestro Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Brands;