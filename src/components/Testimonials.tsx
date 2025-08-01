import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Belkis Dommar',
      position: 'Decano facultad odontologia',
      location: 'Universidad de Carabobo',
      content: 'Modernizamos una nueva sala clínica para postgrado con equipos SAEVO by Gnatus para la unidad de Carabobo. La calidad de esta marca es reconocida mundialmente y optamos por ella para nuestra nueva sala clínica en nuestra facultad',
      rating: 5,
      image: '/api/placeholder/80/80' // Will be replaced with actual image
    },
    {
      name: 'José Luis Almea',
      position: 'Odontólogo',
      location: 'Caracas',
      content: 'Las piezas de mano JINME que adquirí superaron mis expectativas. Al ser equipos chinos tienes duda de su calidad pero la precisión y durabilidad me dejó sin palabras. La garantía y atención de Novodent es muy profesional',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Nelmary Vidarte',
      position: 'Odontóloga',
      location: 'Valencia, Carabobo',
      content: 'Novodent ha sido mi aliado para equipar mi consultorio de 0. La calidad de sus equipos y su atención post venta es excepcional. Recomienda especialmente sus equipos digitales para impresión 3D y scanner panda 3D',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elegant transition-all duration-300 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Banner */}
        <div className="mt-16 bg-gradient-card rounded-3xl p-12 text-center border border-border shadow-elegant">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Casos de Éxito en Todo Venezuela
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Clínicas Equipadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Tiempo de Respuesta</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde pequeñas consultas hasta grandes clínicas especializadas, hemos acompañado 
              el crecimiento de cientos de profesionales odontológicos en toda Venezuela, 
              proporcionando tecnología de vanguardia y soporte técnico excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;