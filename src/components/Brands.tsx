import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MessageCircle, FileText, ChevronRight } from 'lucide-react';

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
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleWhatsApp = (product?: string) => {
    const message = product 
      ? `Hola, me interesa el producto: ${product}. ¿Podrían brindarme más información?`
      : 'Hola, me interesa conocer más sobre sus productos odontológicos.';
    window.open(`https://wa.me/584124555310?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBrandCatalog = (brand: string) => {
    window.open('#', '_blank'); // Replace with actual brand catalog link
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
        { name: 'Saevo Smart', description: 'Unidad dental inteligente con tecnología avanzada' },
        { name: 'Compressor', description: 'Compresor dental silencioso y eficiente' },
        { name: 'Autoclave', description: 'Sistema de esterilización automático' }
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
    'DTE', 'JINME', 'DENTALFILM', 'PREVEST', 'MDT', 'TPC', 'DMP', 'Aalbadent'
  ];

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
                    onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-center hover:shadow-card ${
                      selectedBrand === brand
                        ? 'border-primary bg-primary/5 shadow-card'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <span className="text-sm font-medium text-foreground">
                      {brand}
                    </span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Selected Brand Products */}
        {selectedBrand && (
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border animate-fade-in">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-foreground">
                Productos {selectedBrand}
              </h3>
              <Button
                variant="outline"
                onClick={() => handleBrandCatalog(selectedBrand)}
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Ver Catálogo
              </Button>
            </div>

            {brands.find(b => b.name === selectedBrand)?.products ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brands.find(b => b.name === selectedBrand)?.products.map((product, index) => (
                  <div
                    key={product.name}
                    className="bg-background rounded-xl p-6 border border-border hover:shadow-card transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-32 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-center px-4">
                        {product.name}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-2">
                      {product.name}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        variant="whatsapp"
                        size="sm"
                        onClick={() => handleWhatsApp(product.name)}
                        className="flex-1"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleBrandCatalog(selectedBrand)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-6">
                  Catálogo completo disponible para {selectedBrand}
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="whatsapp"
                    onClick={() => handleWhatsApp()}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar por WhatsApp
                  </Button>
                  <Button
                    variant="catalog"
                    onClick={() => handleBrandCatalog(selectedBrand)}
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Ver Catálogo Completo
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        {!selectedBrand && (
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
        )}
      </div>
    </section>
  );
};

export default Brands;