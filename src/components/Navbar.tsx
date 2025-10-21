import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-xl text-gray-900">
              Brandon A. Pessoa B.
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:78093102">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Phone className="mr-2 h-4 w-4" />
                78093102
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:78093102">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <Phone className="mr-2 h-4 w-4" />
                  78093102
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
