import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MessageCircle, FileText, ArrowLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  name: string;
  description: string;
  image?: string;
}

interface BrandInfo {
  name: string;
  slogan: string;
  description: string;
  image?: string;
  products: Product[];
}

const BrandPage = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();

  const handleWhatsApp = (product?: string) => {
    const message = product 
      ? `Hola, me interesa el producto: ${product} de ${brandName}. ¿Podrían brindarme más información?`
      : `Hola, me interesa conocer más sobre los productos de ${brandName}.`;
    window.open(`https://wa.me/584124555310?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBrandCatalog = () => {
    window.open('#', '_blank'); // Replace with actual brand catalog link
  };

  const allBrands = [
    'SAEVO BY GNATUS', 'AJAX', 'DEOCA', 'SPD', 'BIOART', 'ORTHOMETRIC',
    'VOCO', 'SHOFU', 'ANYCUBIC', 'PRIZMA', 'PANDA', 'WOSON',
    'DTE', 'JINME', 'DENTALFILM', 'PREVEST', 'MDT', 'TPC', 'DMP', 'Aalbadent'
  ];

  const brandData: Record<string, BrandInfo> = {
    'ANYCUBIC': {
      name: 'ANYCUBIC',
      slogan: 'Innovación en Impresión 3D Dental',
      description: 'Líder mundial en tecnología de impresión 3D para aplicaciones odontológicas, ofreciendo precisión y calidad incomparables.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&h=600',
      products: [
        { 
          name: 'Photon Mono 4 Ultra', 
          description: 'Impresora 3D de alta precisión con pantalla 6.1" 4K monocromática para aplicaciones dentales profesionales.',
          image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=300'
        },
        { 
          name: 'Photon Mono 7', 
          description: 'Impresora 3D profesional con pantalla 4K para modelos dentales de gran formato y alta calidad.',
          image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=400&h=300'
        },
        { 
          name: 'Wash&Cure 3.0 Plus', 
          description: 'Estación de lavado y curado automatizada con tecnología LED UV para post-procesamiento perfecto.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300'
        },
        { 
          name: 'Resina Biocompatible', 
          description: 'Resina certificada para aplicaciones dentales directas, segura y de alta precisión dimensional.',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300'
        }
      ]
    },
    'PRIZMA': {
      name: 'PRIZMA',
      slogan: 'Soluciones Avanzadas en Biomateriales',
      description: 'Especialistas en materiales odontológicos de alta calidad para restauraciones temporales y permanentes.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&h=600',
      products: [
        { 
          name: 'Bio Crown Diamond', 
          description: 'Coronas temporales de máxima resistencia y estética superior para procedimientos complejos.',
          image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&h=300'
        },
        { 
          name: 'Bio Splint', 
          description: 'Material especializado para férulas oclusales con excelente adaptabilidad y durabilidad.',
          image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300'
        },
        { 
          name: 'Bio Provisional', 
          description: 'Resina para restauraciones temporales con propiedades mecánicas optimizadas.',
          image: 'https://images.unsplash.com/photo-1516985080664-ed2fc6a32937?auto=format&fit=crop&w=400&h=300'
        }
      ]
    },
    'PANDA': {
      name: 'PANDA',
      slogan: 'Equipamiento Dental de Nueva Generación',
      description: 'Unidades dentales inteligentes que combinan ergonomía, tecnología y eficiencia en cada tratamiento.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&h=600',
      products: [
        { 
          name: 'Panda P4', 
          description: 'Sistema dental de última generación con tecnología inteligente y diseño ergonómico avanzado.',
          image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300'
        },
        { 
          name: 'Panda Smart', 
          description: 'Sillón dental inteligente con control táctil y sistemas automatizados de alta precisión.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300'
        },
        { 
          name: 'Panda P3', 
          description: 'Unidad dental compacta y eficiente, perfecta para consultorios de cualquier tamaño.',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300'
        }
      ]
    }
  };

  // Add default data for brands not yet configured
  const defaultBrandData = {
    name: brandName || '',
    slogan: 'Excelencia en Equipamiento Odontológico',
    description: 'Marca líder en el sector odontológico, comprometida con la innovación y calidad en cada producto.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&h=600',
    products: [
      {
        name: 'Producto Destacado 1',
        description: 'Descripción del producto principal de la marca.',
        image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Producto Destacado 2',
        description: 'Segundo producto principal con características avanzadas.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300'
      }
    ]
  };

  const currentBrand = brandData[brandName as string] || { ...defaultBrandData, name: brandName || '' };
  const otherBrands = allBrands.filter(brand => brand !== brandName);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Button>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentBrand.name}
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-4 font-medium">
                {currentBrand.slogan}
              </p>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {currentBrand.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => handleWhatsApp()}
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consultar por WhatsApp
                </Button>
                <Button
                  variant="catalog"
                  size="lg"
                  onClick={handleBrandCatalog}
                  className="flex items-center gap-3"
                >
                  <FileText className="h-5 w-5" />
                  Ver Catálogo Completo
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src={currentBrand.image}
                  alt={`${currentBrand.name} equipment`}
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-elegant"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Productos <span className="text-primary">Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre la gama de productos principales de {currentBrand.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentBrand.products.map((product, index) => (
              <div
                key={product.name}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex gap-3">
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
                      onClick={handleBrandCatalog}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Brands Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Explorar Otras <span className="text-primary">Marcas</span>
            </h3>
            <p className="text-muted-foreground">
              Descubre nuestro portafolio completo de marcas líderes
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {otherBrands.map((brand) => (
                <CarouselItem key={brand} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <button
                    onClick={() => navigate(`/marca/${encodeURIComponent(brand)}`)}
                    className="w-full p-4 rounded-lg border-2 border-border bg-card hover:border-primary/50 hover:shadow-card transition-all duration-300 text-center group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;
