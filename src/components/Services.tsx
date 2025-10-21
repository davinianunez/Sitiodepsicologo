import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Heart, Users, Baby } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Terapia de Pareja',
    price: '250 Bs',
    description: 'Fortalece tu relación y mejora la comunicación con tu pareja. Trabajamos juntos para superar conflictos y construir un vínculo más sólido.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1604881990409-b9f246db39da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB0aGVyYXB5fGVufDF8fHx8MTc2MTA4MzE5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Terapia Familiar',
    price: '400 Bs',
    description: 'Mejora la dinámica familiar y resuelve conflictos. Creamos un ambiente de comprensión y apoyo mutuo entre todos los miembros de la familia.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1624448445915-97154f5e688c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBwaW5lc3MlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjEwODMxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Terapia Infantil',
    price: '350 Bs',
    description: 'Apoyo especializado para niños y adolescentes. Ayudamos a los más pequeños a desarrollar habilidades emocionales y superar dificultades.',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1695263747060-cc445217dc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXlpbmclMjBoYXBweXxlbnwxfHx8fDE3NjEwODMxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrezco servicios especializados de psicología clínica adaptados a tus necesidades específicas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <span className="text-2xl text-indigo-600">
                      {service.price}
                    </span>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-sm">por sesión</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
