import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const handleCallClick = () => {
    window.location.href = 'tel:78093102';
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Agenda Tu Cita
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estoy aquí para ayudarte. Contacta conmigo para agendar tu primera sesión
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                  <Phone className="h-10 w-10" />
                </div>
                <h3 className="text-2xl md:text-3xl mb-2">
                  Llama para Agendar
                </h3>
                <p className="text-blue-100">
                  Comunícate directamente para programar tu sesión
                </p>
              </div>

              <div className="text-center mb-8">
                <a 
                  href="tel:78093102" 
                  className="text-4xl md:text-5xl inline-block hover:scale-105 transition-transform"
                >
                  78093102
                </a>
              </div>

              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  onClick={handleCallClick}
                  className="bg-white text-indigo-600 hover:bg-blue-50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="mb-2">Horario</h4>
                <p className="text-sm text-gray-600">
                  Lunes a Viernes<br />
                  9:00 AM - 7:00 PM
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="mb-2">Ubicación</h4>
                <p className="text-sm text-gray-600">
                  Consulta disponible<br />
                  Consultorio privado
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="mb-2">Email</h4>
                <p className="text-sm text-gray-600">
                  Consultas por correo<br />
                  disponibles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
