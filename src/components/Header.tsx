  
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/00c8997e-6f10-42a5-892e-ee0f278f783f.png" 
            alt="Dental Roca Logo" 
            className="h-12"
            loading="lazy"
          />
          <span className="font-semibold text-lg hidden sm:block text-primary">Dental Roca</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-primary font-medium">INICIO</a>
          <a href="#servicios" className="text-gray-700 hover:text-primary font-medium">SERVICIOS</a>
          <a href="#contacto" className="text-gray-700 hover:text-primary font-medium">CONTACTO</a>
          <a 
            href="https://wa.me/541127756496" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block px-4 py-2 text-sm" // Adjusted padding and text size for nav
          >
            Reservá tu turno
          </a>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
            <a 
              href="#inicio" 
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              INICIO
            </a>
            <a 
              href="#servicios" 
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICIOS
            </a>
            <a 
              href="#contacto" 
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACTO
            </a>
            <a 
              href="https://wa.me/541127756496" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center mt-2 py-2" // Centered and with margin top
              onClick={() => setIsMenuOpen(false)}
            >
              Reservá tu turno
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
