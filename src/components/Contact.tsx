import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hola, soy ${formData.name}.\n\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n\n` +
      `Mensaje: ${formData.message}`;
    
    window.open(`https://wa.me/584124555310?text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/584124555310', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+584124555310');
  };

  const handleEmail = () => {
    window.open('mailto:novodent.vzla@gmail.com');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/novodentca', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entra en <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte a encontrar las mejores soluciones odontológicas para tu práctica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-card transition-all duration-300 cursor-pointer" onClick={handlePhone}>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Teléfono</div>
                    <div className="text-muted-foreground">+58 412 4555310</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-card transition-all duration-300 cursor-pointer" onClick={handleEmail}>
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">novodent.vzla@gmail.com</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ubicación</div>
                    <div className="text-muted-foreground">Valencia, Edo. Carabobo</div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4 p-4 rounded-xl border hover:shadow-lg transition-all duration-300 cursor-pointer" style={{backgroundColor: '#FFFFFF', borderColor: '#FFFFFF'}} onClick={handleInstagram}>
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Instagram</div>
                    <div className="text-primary/80 text-sm">@novodent</div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Horario de Atención</div>
                    <div className="text-muted-foreground">Lunes a Viernes De 8:00 a.m. a 4:00 p.m.</div>
                    <div className="text-muted-foreground">Sabado y Domingo no laboramos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-elegant">
              <h4 className="text-xl font-bold text-primary-foreground mb-4">
                ¿Necesitas Atención Inmediata?
              </h4>
              <p className="text-primary-foreground/90 mb-6">
                Contáctanos directamente por WhatsApp para una respuesta rápida
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                className="bg-success hover:bg-success/90"
              >
                <MessageCircle className="h-5 w-5" />
                Abrir WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="+58 412 123 4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  placeholder="Cuéntanos sobre tus necesidades odontológicas..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full flex items-center gap-3"
              >
                <Send className="h-5 w-5" />
                Enviar Mensaje por WhatsApp
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              Al enviar este formulario, serás redirigido a WhatsApp con tu mensaje pre-cargado
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nuestra Ubicación
          </h3>
          <div className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border">
            <div className="relative w-full h-96 md:h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.889076848184!2d-68.00796922461804!3d10.189662689925695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e806700002d045b%3A0x3dec254129fd074d!2sNovodent%2C%20C.A.!5e0!3m2!1ses!2sus!4v1753850210634!5m2!1ses!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Novodent C.A. en Valencia, Carabobo, Venezuela"
                className="w-full h-full"
              />
            </div>
            {/* Location info below map */}
            <div className="p-6 bg-card">
              <div className="flex items-center justify-center gap-3 text-center">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    Novodent, C.A.
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Valencia 2001, Carabobo, Venezuela
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;