import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  'Atención personalizada y confidencial',
  'Enfoque basado en evidencia científica',
  'Amplia experiencia en terapia familiar',
  'Horarios flexibles para tu comodidad',
  'Ambiente profesional y acogedor',
  'Compromiso con tu bienestar emocional'
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHNlc3Npb258ZW58MXx8fHwxNzYxMDY5MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sesión de terapia profesional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Sobre Mi Práctica
            </h2>
            <p className="text-lg text-gray-700">
              Como psicólogo clínico especializado, mi misión es proporcionar un espacio seguro 
              y de confianza donde puedas explorar tus emociones, fortalecer tus relaciones y 
              alcanzar tu bienestar mental.
            </p>
            <p className="text-lg text-gray-700">
              Con años de experiencia en terapia de pareja, familiar e infantil, utilizo 
              técnicas basadas en evidencia científica para ayudarte a superar los desafíos 
              que enfrentas.
            </p>
            
            <div className="space-y-3 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
