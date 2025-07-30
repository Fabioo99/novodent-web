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
  logo?: string;
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
    window.open('https://drive.google.com/drive/folders/1HqjJS3cbcbofBF-vUHzr7htd1kvqFWzH?usp=drive_link', '_blank');
  };

  const allBrands = [
    'SAEVO BY GNATUS', 'AJAX', 'DEOCA', 'SPD', 'BIOART', 'ORTHOMETRIC',
    'VOCO', 'SHOFU', 'ANYCUBIC', 'PRIZMA', 'PANDA', 'WOSON',
    'DTE', 'JINME', 'DENTALFILM', 'TPC', 'DMP', 'Aalbadent'
  ];

  const brandData: Record<string, BrandInfo> = {
    'ANYCUBIC': {
      name: 'ANYCUBIC',
      slogan: 'Innovación en Impresión 3D para Odontología',
      description: 'ANYCUBIC es líder mundial en tecnología de impresión 3D, ofreciendo soluciones completas para aplicaciones odontológicas. Nuestros productos combinan precisión excepcional, facilidad de uso y tecnología avanzada para revolucionar la fabricación de modelos dentales, guías quirúrgicas y prótesis.',
      image: '/brands/anycubic/hero.png',
      logo: '/brands/anycubic-logo.jpeg',
      products: [
        { 
          name: 'Resina Estándar Gris 1kg', 
          description: 'Resina estándar gris de 1 kg para impresoras 3D Anycubic, ideal para impresiones precisas y de alta calidad. Compatible con longitudes de onda UV 365–405 nm.',
          image: '/brands/anycubic/resina-gris.png'
        },
        { 
          name: 'Estación de Limpieza Automática', 
          description: 'Estación de limpieza automática Anycubic: diseñada para lavar modelos impresos en 3D de forma eficiente y sin esfuerzo, incluye tanques duales para mayor capacidad.',
          image: '/brands/anycubic/estacion-limpieza.png'
        },
        { 
          name: 'Photon Mono 4 Ultra', 
          description: 'Impresora 3D Anycubic Photon Mono 4 Ultra: impresora de resina de alta precisión, perfecta para detalles finos y prototipos profesionales.',
          image: '/brands/anycubic/photon-mono-4-ultra.png'
        },
        { 
          name: 'Wash & Cure 3 Plus', 
          description: 'Anycubic Wash & Cure 3 Plus: estación todo en uno para el lavado y curado de piezas impresas en resina, optimiza el post-procesado y asegura acabados profesionales.',
          image: '/brands/anycubic/wash-cure-3-plus.png'
        }
      ]
    },
    'PRIZMA': {
      name: 'PRIZMA',
      slogan: 'Innovación en Resinas Biocompatibles para Impresión 3D',
      description: 'PRIZMA se especializa en el desarrollo de resinas fotopolimerizables de alta biocompatibilidad para aplicaciones odontológicas. Nuestros productos están diseñados específicamente para la impresión 3D de dispositivos dentales, ofreciendo transparencia, resistencia y seguridad excepcionales para férulas y placas dentales.',
      image: '/brands/prizma/hero.png',
      logo: '/brands/prizma-logo.png',
      products: [
        { 
          name: 'Resina Prizma 3D Bio Splint', 
          description: 'Resina fotopolimerizable Prizma 3D Bio Splint de Makertech Labs, diseñada para la impresión 3D de férulas y placas dentales. Ofrece alta biocompatibilidad, transparencia y resistencia, ideal para aplicaciones odontológicas que requieren precisión y seguridad.',
          image: '/brands/prizma/resina-bio-splint.png'
        }
      ]
    },
'PANDA': {
      name: 'PANDA',
      slogan: 'Innovación en Escáneres Intraorales de Vanguardia',
      description: 'PANDA se especializa en el desarrollo de escáneres intraorales de última generación que combinan precisión, velocidad y diseño moderno. Nuestros productos ofrecen captura digital rápida y precisa, con opciones de personalización que se adaptan al estilo y preferencias de cada profesional dental.',
      image: '/brands/panda/hero.png',
      logo: '/brands/panda-logo.jpeg',
      products: [
        { 
          name: 'Escáner Intraoral Multicolor', 
          description: 'Escáner intraoral disponible en siete colores modernos: Crystal White, Lightsaber Red, Champagne Gold, Radiant Silver, Sparkly Purple, Ice Blue y Laguna Blue. Permite capturar impresiones digitales de manera rápida, precisa y con estilo, adaptándose al gusto de cada profesional dental.',
          image: '/brands/panda/escaner-multicolor.png'
        },
        { 
          name: 'Escáner Intraoral Compacto', 
          description: 'Escáner intraoral compacto y ergonómico en color blanco, diseñado para facilitar la captura de impresiones digitales en consultorios modernos. Su interfaz intuitiva y diseño liviano permiten un flujo de trabajo eficiente y cómodo para el odontólogo.',
          image: '/brands/panda/escaner-compacto.png'
        }
      ]
    },
    'SAEVO BY GNATUS': {
      name: 'SAEVO BY GNATUS',
      slogan: 'Innovación y Precisión en Equipamiento Dental',
      description: 'La S500 F es la unidad odontológica más avanzada de SAEVO, diseñada para ofrecer precisión, comodidad y eficiencia tanto para el odontólogo como para el paciente. Integra tecnología digital, materiales de alta calidad y múltiples opciones de personalización para clínicas de alto nivel.',
      image: '/brands/saevo/hero.jpeg',
      logo: '/brands/saevo-logo.png',
      products: [
        { 
          name: 'Autoclave SAEVO', 
          description: 'Esterilizador automático de alta capacidad y máxima seguridad, ideal para clínicas que buscan procesos confiables y sencillos.',
          image: '/brands/saevo/autoclave.jpeg'
        },
        { 
          name: 'Bomba de Vacío SAEVO', 
          description: 'Solución potente y silenciosa para succión dental, optimizando la higiene y el confort del paciente en cada procedimiento.',
          image: '/brands/saevo/bomba-vacio.jpeg'
        },
        { 
          name: 'S200 F – Unidad Compacta', 
          description: 'Unidad compacta de alto rendimiento, pensada para espacios reducidos sin sacrificar tecnología ni comodidad.',
          image: '/brands/saevo/s200f.jpeg'
        },
        { 
          name: 'S400 Q – Unidad Multifuncional', 
          description: 'Versatilidad y diseño moderno en una unidad que se adapta a las distintas necesidades de la práctica odontológica diaria.',
          image: '/brands/saevo/s400q.jpeg'
        },
        { 
          name: 'S200 F – Unidad Compacta (Modelo Adicional)', 
          description: 'Unidad compacta de alto rendimiento, pensada para espacios reducidos sin sacrificar tecnología ni comodidad.',
          image: '/brands/saevo/s200f-compacta.jpeg'
        },
        { 
          name: 'Autoclave SAEVO (Apertura total)', 
          description: 'Autoclave de alta eficiencia para la esterilización rápida y segura de instrumentos odontológicos. Ideal para clínicas modernas que requieren máxima higiene en poco tiempo.',
          image: '/brands/saevo/autoclave-abierto.jpeg'
        },
        { 
          name: 'Autoclave SAEVO (Vista frontal cerrada)', 
          description: 'Vista frontal del autoclave completamente cerrado, mostrando el diseño seguro y el panel de control intuitivo para ciclos automáticos de esterilización.',
          image: '/brands/saevo/autoclave-cerrado.jpeg'
        },
        { 
          name: 'Silla Odontológica SAEVO (Modelo adicional)', 
          description: 'Silla odontológica ergonómica de última generación, fabricada para máxima comodidad del paciente y facilidad de operación para el especialista.',
          image: '/brands/saevo/silla-odontologica.jpeg'
        }
      ]
    },
    'AJAX': {
      name: 'AJAX',
      slogan: 'Innovación y Calidad en Equipamiento Dental',
      description: 'AJAX se destaca por ofrecer soluciones dentales de alta calidad, combinando tecnología avanzada con diseño ergonómico para optimizar la experiencia tanto del profesional como del paciente. Nuestros equipos están diseñados para brindar máxima eficiencia y confiabilidad en cada procedimiento.',
      image: '/brands/ajax/hero.jpeg',
      logo: '/brands/ajax-logo.png',
      products: [
        { 
          name: 'Equipo Dental AJAX Principal', 
          description: 'Solución integral de equipamiento dental que combina tecnología avanzada, diseño ergonómico y máxima confiabilidad para el consultorio moderno.',
          image: '/brands/ajax/hero.jpeg'
        }
      ]
    },
'DEOCA': {
      name: 'DEOCA',
      slogan: 'Innovación en Equipos Odontológicos DEOCA',
      description: 'Descubre la última generación en unidades odontológicas, diseñadas para brindar máxima comodidad al paciente y eficiencia al profesional. Nuestra tecnología combina ergonomía avanzada, materiales de alta calidad y un diseño elegante que se adapta a cualquier consultorio moderno.',
      image: '/brands/deoca/producto1.png',
      logo: '/brands/deoca-logo.png',
      products: [
        { 
          name: 'DEOCA QL2028I – Unidad Dental Compacta', 
          description: 'La QL2028I es la opción ideal para consultorios que requieren soluciones compactas sin sacrificar tecnología ni diseño. Incluye todas las funciones esenciales, con controles intuitivos y una estructura que optimiza el espacio, perfecta para clínicas modernas y eficientes.',
          image: '/brands/deoca/hero.png'
        }
      ]
    },
    'SPD': {
      name: 'SPD',
      slogan: 'Confiabilidad en Compresores y Equipos Auxiliares',
      description: 'SPD es sinónimo de confiabilidad en compresores y equipos auxiliares para clínicas odontológicas. Nuestros productos ofrecen tecnología silenciosa y eficiente, ideales para el máximo rendimiento en consultorios modernos.',
      image: '/brands/spd/hero.png',
      logo: '/brands/spd-logo.png',
      products: [
        { 
          name: 'Selladora de bolsas SPD', 
          description: 'Dispositivo de sellado térmico para bolsas de esterilización. Permite empaquetar de forma segura el material clínico, asegurando la integridad y esterilidad de los instrumentos antes de cada procedimiento.',
          image: '/brands/spd/selladora.png'
        },
        { 
          name: 'Destiladora de agua SPD', 
          description: 'Equipo compacto para la producción de agua destilada, esencial para la operación segura de autoclaves y equipos clínicos. Garantiza agua libre de impurezas, ideal para procesos de esterilización y laboratorio.',
          image: '/brands/spd/destiladora.png'
        },
        { 
          name: 'Compresor Dental SPD (Modelo 3)', 
          description: 'Compresor de alto rendimiento, diseñado para clínicas con múltiples unidades.',
          image: '/brands/spd/compresor3.png'
        },
        { 
          name: 'Compresor Dental SPD (Modelo 4)', 
          description: 'Compresor vertical de gran capacidad, máxima potencia y eficiencia para grandes demandas.',
          image: '/brands/spd/compresor4.png'
        }
      ]
    },
    'BIOART': {
      name: 'BIOART',
      slogan: 'Innovación en Equipamiento para Laboratorio Dental',
      description: 'BIOART se especializa en el desarrollo de equipos y accesorios de alta calidad para laboratorios dentales. Nuestros productos combinan precisión, durabilidad y tecnología avanzada para optimizar los procesos de fabricación protésica y garantizar resultados excepcionales en cada trabajo.',
      image: '/brands/bioart/hero.png',
      logo: '/brands/bioart-logo.png',
      products: [
        { 
          name: 'MicroJato Bio-Art (Microblaster)', 
          description: 'Equipo de microarenado dental disponible en acero inoxidable y polímero. Permite realizar trabajos de limpieza, grabado y preparación de superficies en prótesis dentales con precisión y eficiencia.',
          image: '/brands/bioart/microjato.png'
        },
        { 
          name: 'BioCámara Bio-Art', 
          description: 'Cámara de trabajo con guantes integrados, diseñada para manipular materiales sensibles o realizar procedimientos que requieren un entorno controlado y seguro, protegiendo tanto al usuario como a las piezas.',
          image: '/brands/bioart/biocamara.png'
        },
        { 
          name: 'Arco Facial y Articulador Bio-Art', 
          description: 'Kit de articulador y arco facial para laboratorio dental, ideal para el montaje preciso de modelos y la reproducción exacta de movimientos mandibulares, optimizando la confección de prótesis y rehabilitaciones.',
          image: '/brands/bioart/arco-facial.png'
        }
      ]
    },
    'ORTHOMETRIC': {
      name: 'ORTHOMETRIC',
      slogan: 'Precisión en Medición y Diagnóstico Ortodoncico',
      description: 'ORTHOMETRIC se especializa en equipos de medición y diagnóstico ortodoncico de alta precisión. Nuestros productos combinan tecnología avanzada con facilidad de uso, proporcionando herramientas esenciales para el análisis cefalométrico y planificación de tratamientos ortodoncicos exitosos.',
      image: '/brands/orthometric/hero.png',
      logo: '/brands/orthometric-logo.png',
      products: [
        { 
          name: 'Elástico Ortodóntico Corrente', 
          description: 'Cadena elástica para ortodoncia, ideal para cierre de espacios y alineación dental precisa. Flexible y resistente.',
          image: '/brands/orthometric/producto1.png'
        },
        { 
          name: 'Brackets AdvancedSeries MBT', 
          description: 'Brackets metálicos de alta calidad, diseñados para un tratamiento ortodóntico eficiente y cómodo. Excelente adherencia y precisión.',
          image: '/brands/orthometric/producto2.png'
        },
        { 
          name: 'Arco Intraoral FlexyNiTi', 
          description: 'Arco superelástico de níquel-titanio, perfecto para movimientos suaves y continuos durante el tratamiento de ortodoncia.',
          image: '/brands/orthometric/producto3.png'
        }
      ]
    },
    'VOCO': {
      name: 'VOCO',
      slogan: 'Innovación en Materiales Dentales de Alta Calidad',
      description: 'VOCO es líder mundial en el desarrollo y fabricación de materiales dentales innovadores. Nuestros productos combinan la más avanzada tecnología con la facilidad de uso, ofreciendo soluciones completas para restauraciones estéticas, cementación y protección pulpar con resultados excepcionales.',
      image: '/brands/voco/hero.png',
      logo: '/brands/voco-logo.png',
      products: [
        { 
          name: 'Polofil Supra', 
          description: 'Composite micro-híbrido fotopolimerizable, ideal para restauraciones duraderas con excelente estética y fácil manipulación.',
          image: '/brands/voco/polofil-supra.png'
        },
        { 
          name: 'Polofil NHT', 
          description: 'Composite nano-híbrido de curado por luz, diseñado para obtener restauraciones de alta resistencia y pulido superior.',
          image: '/brands/voco/polofil-nht.png'
        },
        { 
          name: 'Meron', 
          description: 'Cemento de ionómero de vidrio para fijación, perfecto para cementar coronas, puentes y bandas ortodónticas, ofreciendo gran adherencia y liberación de flúor.',
          image: '/brands/voco/meron.png'
        },
        { 
          name: 'Calcimol LC', 
          description: 'Pasta de hidróxido de calcio fotopolimerizable, utilizada como recubrimiento pulpar directo o indirecto y para favorecer la formación de dentina secundaria.',
          image: '/brands/voco/calcimol-lc.png'
        }
      ]
    },
    'SHOFU': {
      name: 'SHOFU',
      slogan: 'Excelencia en Composites y Materiales Estéticos',
      description: 'SHOFU es reconocido mundialmente por su innovación en composites dentales y materiales estéticos de alta calidad. Nuestros productos Beautifil combinan estética superior con propiedades físicas excepcionales, ofreciendo soluciones completas para restauraciones duraderas y naturales.',
      image: '/brands/shofu/hero.png',
      logo: '/brands/shofu-logo.png',
      products: [
        { 
          name: 'Beautifil II LS (Shofu)', 
          description: 'Composite de baja contracción, ideal para restauraciones directas y duraderas. Ofrece una excelente adaptación marginal y resistencia al desgaste.',
          image: '/brands/shofu/beautifil-ii-ls.png'
        },
        { 
          name: 'Beautifil II (Shofu)', 
          description: 'Composite universal para restauraciones estéticas, libera flúor y proporciona un acabado natural. Disponible en varios tonos para adaptarse a cada caso clínico.',
          image: '/brands/shofu/beautifil-ii.jpeg'
        },
        { 
          name: 'Beautifil Flow Plus (Shofu)', 
          description: 'Composite fluido para restauraciones mínimamente invasivas y relleno de cavidades pequeñas. Excelente manejo y estética, indicado para técnicas de estratificación.',
          image: '/brands/shofu/beautifil-flow-plus.png'
        }
      ]
    },
    'WOSON': {
      name: 'WOSON',
      slogan: 'Tecnología Avanzada en Diagnóstico y Esterilización',
      description: 'WOSON se especializa en el desarrollo de equipos de diagnóstico por imagen y esterilización de alta tecnología para clínicas dentales. Nuestros productos combinan precisión, seguridad y eficiencia, ofreciendo soluciones completas para radiografía digital y esterilización de instrumentos con los más altos estándares de calidad.',
      image: '/brands/woson/hero.png',
      logo: '/brands/woson-logo.PNG',
      products: [
        { 
          name: 'Sensor Intraoral de Rayos X Woson Rayin', 
          description: 'Sensor digital intraoral para radiografías dentales, disponible en tres modelos (Rayin, Rayin Med, Rayin Max) con diferentes tamaños y resoluciones. Ideal para diagnósticos precisos, compatible con Windows y resistente a la desinfección.',
          image: '/brands/woson/sensor-rayin.png'
        },
        { 
          name: 'Autoclave Woson', 
          description: 'Esterilizador automático de alta tecnología para clínicas dentales, equipado con panel digital, controles precisos de temperatura y presión. Garantiza la máxima seguridad y eficiencia en la esterilización de instrumentos.',
          image: '/brands/woson/autoclave.png'
        }
      ]
    },
    'DTE': {
      name: 'DTE',
      slogan: 'Equipamiento Dental de Precisión y Eficiencia',
      description: 'DTE se especializa en el desarrollo de equipos dentales de alta precisión que combinan tecnología avanzada con diseño ergonómico. Nuestros productos incluyen scalers ultrasónicos y lámparas de fotocurado de última generación, diseñados para optimizar los procedimientos clínicos y mejorar la experiencia tanto del profesional como del paciente.',
      image: '/brands/dte/hero.jpeg',
      logo: '/brands/dte-logo.PNG',
      products: [
        { 
          name: 'Scaler ultrasónico DTE D5 LED', 
          description: 'Equipo ultrasónico para profilaxis dental con control digital, potente y preciso. Incluye pieza de mano con luz LED para mayor visibilidad durante el tratamiento.',
          image: '/brands/dte/scaler-d5-led.png'
        },
        { 
          name: 'Lámpara de Fotocurado', 
          description: 'Lámpara LED para el fotocurado de resinas dentales. Diseño moderno, ergonómico y con alta intensidad de luz para un curado rápido y eficiente.',
          image: '/brands/dte/lampara-fotocurado.jpeg'
        },
        { 
          name: 'Lámpara de Fotocurado B-Cure ONECURE', 
          description: 'Lámpara inalámbrica de fotocurado para odontología, con pantalla digital y base de carga. Ideal para procedimientos rápidos y uniformes en restauraciones.',
          image: '/brands/dte/lampara-onecure.jpeg'
        }
      ]
    },
    'JINME': {
      name: 'JINME',
      slogan: 'Precisión y Calidad en Instrumentación Dental',
      description: 'JINME se especializa en el desarrollo de instrumentación dental de alta calidad que combina precisión, durabilidad y tecnología avanzada. Nuestros productos incluyen piezas de mano de alta velocidad, instrumentos quirúrgicos especializados y micromotores, diseñados para optimizar el rendimiento clínico y brindar la máxima confiabilidad en cada procedimiento.',
      image: '/brands/jinme/hero.png',
      logo: '/brands/jinme-logo.png',
      products: [
        { 
          name: 'J5 LED Handpiece', 
          description: 'Pieza de mano de alta velocidad con iluminación LED integrada. Ideal para procedimientos dentales precisos, ofrece excelente visibilidad, potencia y durabilidad en un diseño ergonómico y ligero.',
          image: '/brands/jinme/j5-led-handpiece.png'
        },
        { 
          name: 'J45 45° Degree Surgical Handpiece', 
          description: 'Pieza de mano quirúrgica a 45° especialmente diseñada para cirugías dentales complejas. Su ángulo facilita el acceso en zonas de difícil alcance, brindando precisión y seguridad al profesional.',
          image: '/brands/jinme/j45-surgical-handpiece.png'
        },
        { 
          name: 'Micro Motor M2 Jinme', 
          description: 'Micromotor dental versátil y compacto, compatible con diferentes contra-ángulos y piezas de mano. Ofrece un rendimiento constante y silencioso, ideal para procedimientos de laboratorio y clínica.',
          image: '/brands/jinme/micro-motor-m2.png'
        }
      ]
    },
    'DENTALFILM': {
      name: 'DENTALFILM',
      slogan: 'Excelencia Italiana en Radiografía Dental',
      description: 'DENTALFILM es una marca italiana líder en la fabricación de películas radiográficas dentales de alta calidad. Con décadas de experiencia en el sector, nos especializamos en ofrecer productos que garantizan imágenes nítidas, revelado rápido y máxima precisión diagnóstica. Nuestro compromiso con la innovación y la calidad italiana nos posiciona como referente mundial en radiografía dental.',
      image: '/brands/dentafilm/hero.png',
      logo: '/brands/dentafilm-logo.jpg',
      products: [
        { 
          name: 'Película Radiográfica Dental ERGONOM X', 
          description: 'Película de rayos X de alta definición para uso dental, diseñada para un revelado rápido y resultados precisos. Fabricada en Italia, garantiza imágenes nítidas y confort durante la toma radiográfica gracias a su diseño ergonómico.',
          image: '/brands/dentafilm/pelicula-ergonom-x.png'
        }
      ]
    },
    'TPC': {
      name: 'TPC',
      slogan: 'Innovación Americana en Instrumentación Ultrasónica',
      description: 'TPC es una marca estadounidense líder en el desarrollo de puntas ultrasónicas de alta calidad para procedimientos dentales profesionales. Con tecnología avanzada fabricada en EE.UU., nuestros productos ofrecen compatibilidad universal, eficiencia superior y durabilidad excepcional. Nos especializamos en soluciones ultrasónicas que optimizan la limpieza dental y mejoran los resultados clínicos.',
      image: '/brands/tpc/hero.png',
      logo: '/brands/tpc-logo.png',
      products: [
        { 
          name: 'TPC 25kHz "Universal" Insert S1025', 
          description: 'Punta ultrasónica universal de 25 kHz con mango metálico, ideal para procedimientos de limpieza dental profesional. Compatible con la mayoría de los equipos ultrasónicos, ofrece eficiencia en la remoción de placa y cálculo dental. Fabricada en EE. UU.',
          image: '/brands/tpc/tpc-s1025-insert.png'
        }
      ]
    },
    'DMP': {
      name: 'DMP',
      slogan: 'Excelencia en Materiales de Impresión Dental',
      description: 'DMP se especializa en el desarrollo de materiales de impresión dental de alta calidad que garantizan precisión y confiabilidad en cada procedimiento. Nuestros productos incluyen siliconas por condensación, masillas y pastas activadoras diseñadas para ofrecer excelente detalle, fácil manipulación y tiempos de fraguado controlados. Comprometidos con la innovación, brindamos soluciones completas para restauraciones y prótesis dentales.',
      image: '/brands/dmp/hero.png',
      logo: '/brands/dmp-logo.png',
      products: [
        { 
          name: 'Bonasil Kit (DMP)', 
          description: 'Kit de silicona por condensación para impresión dental. Incluye Bonasil Putty (masilla), pasta activadora y silicona ligera, ideal para tomar impresiones precisas en odontología. Ofrece excelente detalle, fácil manipulación y tiempos de fraguado controlados para restauraciones y prótesis.',
          image: '/brands/dmp/bonasil-kit.png'
        }
      ]
    },
    'AALBADENT': {
      name: 'AALBADENT',
      slogan: 'Aleaciones Dentales de Precisión y Calidad Superior',
      description: 'AALBADENT es líder en la fabricación de aleaciones dentales de alta calidad, especializados en aleaciones de cromo-cobalto libres de berilio para aplicaciones protésicas. Nuestros productos están diseñados para ofrecer resistencia mecánica excepcional, durabilidad y precisión en cada fundición. Comprometidos con la excelencia, brindamos soluciones confiables para laboratorios dentales que buscan resultados de calidad superior.',
      image: '/brands/aalbadent/hero.png',
      logo: '/brands/aalbadent-logo.png',
      products: [
        { 
          name: 'Vera PDS', 
          description: 'Alelo de cromo-cobalto de alta resistencia, libre de berilio, diseñado para la fabricación de prótesis parciales dentales mediante fundición. Ofrece excelente resistencia mecánica y durabilidad, ideal para laboratorios que buscan resultados confiables y de alta calidad.',
          image: '/brands/aalbadent/vera-pds.png'
        },
        { 
          name: 'Vera PDN', 
          description: 'Alelo premium de cromo-cobalto para uso dental, en formato de lingote cilíndrico. Especialmente desarrollado para fundición de prótesis parciales removibles, proporcionando resistencia, estabilidad y precisión en cada trabajo protésico.',
          image: '/brands/aalbadent/vera-pdn.png'
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

  // Function to get logo path for each brand
  const getBrandLogo = (brand: string): string => {
    const logoMap: Record<string, string> = {
      'SAEVO BY GNATUS': '/brands/saevo-logo.png',
      'AJAX': '/brands/ajax-logo.png',
      'DEOCA': '/brands/deoca-logo.png',
      'SPD': '/brands/spd-logo.png',
      'BIOART': '/brands/bioart-logo.png',
      'ORTHOMETRIC': '/brands/orthometric-logo.png',
      'VOCO': '/brands/voco-logo.png',
      'SHOFU': '/brands/shofu-logo.png',
      'ANYCUBIC': '/brands/anycubic-logo.jpeg',
      'PRIZMA': '/brands/prizma-logo.png',
      'PANDA': '/brands/panda-logo.jpeg',
      'WOSON': '/brands/woson-logo.PNG',
      'DTE': '/brands/dte-logo.PNG',
      'JINME': '/brands/jinme-logo.png',
      'DENTALFILM': '/brands/dentafilm-logo.jpg',
      'TPC': '/brands/tpc-logo.png',
      'DMP': '/brands/dmp-logo.png',
      'Aalbadent': '/brands/aalbadent-logo.png'
    };
    return logoMap[brand] || '/brands/default-logo.png';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-8 border-border hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          
          {/* Premium Hero Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border/10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50/50">
                {/* Logo */}
                {currentBrand.logo && (
                  <div className="mb-8">
                    <img
                      src={currentBrand.logo}
                      alt={`${currentBrand.name} logo`}
                      className="h-16 lg:h-20 w-auto object-contain"
                    />
                  </div>
                )}
                
                <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {currentBrand.name}
                </h1>
                
                <p className="text-lg lg:text-xl text-primary mb-6 font-semibold">
                  {currentBrand.slogan}
                </p>
                
                <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
                  {currentBrand.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    onClick={() => handleWhatsApp()}
                    className="flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Consultar por WhatsApp
                  </Button>
                  <Button
                    variant="catalog"
                    size="lg"
                    onClick={handleBrandCatalog}
                    className="flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FileText className="h-5 w-5" />
                    Ver Catálogo Completo
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Hero Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={currentBrand.image}
                  alt={`${currentBrand.name} equipment`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Productos <span className="text-primary">Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre la gama de productos principales de {currentBrand.name}
            </p>
          </div>

          {/* Adaptive grid based on number of products */}
          <div className={`grid gap-6 lg:gap-8 justify-items-center ${
            currentBrand.products.length === 1 
              ? 'grid-cols-1 max-w-md mx-auto' 
              : currentBrand.products.length === 2 
              ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto' 
              : currentBrand.products.length === 3 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto' 
              : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {currentBrand.products.map((product, index) => (
              <div
                key={product.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex gap-3">
                    <Button
                      variant="whatsapp"
                      size="sm"
                      onClick={() => handleWhatsApp(product.name)}
                      className="flex-1 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Consultar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleBrandCatalog}
                      className="shadow-md hover:shadow-lg transition-shadow duration-300"
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
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300 border border-border/20">
                        <img
                          src={getBrandLogo(brand)}
                          alt={`${brand} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <span className="hidden text-xs font-bold text-primary">
                          {brand.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;
