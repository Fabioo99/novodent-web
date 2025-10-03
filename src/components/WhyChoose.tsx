import { Lightbulb, Shield, Package, Target } from 'lucide-react';
import professionalImage from '@/assets/dentist-professional-new.jpg';

const WhyChoose = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Tecnología de punta y equipos de última generación para maximizar la eficiencia de tu clínica.'
    },
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Más de 45 años de experiencia respaldando a profesionales de la salud dental en todo Venezuela.'
    },
    {
      icon: Package,
      title: 'Variedad',
      description: 'Amplio catálogo con más de 20 marcas internacionales y miles de productos especializados.'
    },
    {
      icon: Target,
      title: 'Precisión',
      description: 'Atención personalizada y soporte técnico especializado para cada necesidad específica.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Por Qué Elegir <span className="text-primary">Novodent</span>?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos más que un distribuidor. Somos tu socio estratégico en el crecimiento 
                y modernización de tu práctica odontológica.
              </p>
            </div>

            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-6 animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 p-8 bg-card rounded-2xl shadow-card border border-border">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+45</div>
                  <div className="text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+20</div>
                  <div className="text-muted-foreground">Marcas Internacionales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+1000</div>
                  <div className="text-muted-foreground">Productos Disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Soporte Técnico</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={professionalImage}
                alt="Profesional odontológico"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-glow animate-float">
              <Shield className="h-12 w-12 text-secondary-foreground" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow animate-float" style={{ animationDelay: '1s' }}>
              <Target className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Experience Banner */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-12 text-center shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Respaldo Post-Venta Ágil y Especializado
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Nuestro equipo técnico especializado te acompaña antes, durante y después de tu compra. 
            Garantizamos el máximo rendimiento de tus equipos con mantenimiento y soporte continuo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;