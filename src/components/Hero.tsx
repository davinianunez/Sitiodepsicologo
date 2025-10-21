import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
              Brandon Alexander Pessoa Balcazar
            </h1>
            <p className="text-xl text-gray-700">
              Psicólogo Clínico
            </p>
            <p className="text-lg text-gray-600">
              Especialista en terapia de pareja, familiar e infantil. 
              Ofreciendo un espacio seguro y profesional para tu bienestar emocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto">
                <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar Cita
                </Button>
              </a>
              <a href="#servicios">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver Servicios
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722312770621-e19e81430ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwc3ljaG9sb2dpc3QlMjBvZmZpY2V8ZW58MXx8fHwxNzYxMDgzMTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Consultorio de psicología profesional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
