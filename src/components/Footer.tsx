export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Brandon Alexander Pessoa Balcazar</h3>
            <p className="text-gray-400">
              Psicólogo Clínico especializado en terapia de pareja, familiar e infantil.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Terapia de Pareja</li>
              <li>Terapia Familiar</li>
              <li>Terapia Infantil</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Teléfono: 78093102</li>
              <li>Horario: Lun - Vie, 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brandon Alexander Pessoa Balcazar. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Consultas de psicología profesional y confidencial</p>
        </div>
      </div>
    </footer>
  );
}
