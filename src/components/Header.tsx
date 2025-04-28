
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
            alt="Centro Médico Roca Logo" 
            className="h-12"
            loading="lazy"
          />
          <span className="font-semibold text-xl hidden sm:block text-primary">Centro Médico Roca</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-primary font-medium">INICIO</a>
          <a href="#contacto" className="text-gray-700 hover:text-primary font-medium">CONTACTO</a>
          <a href="#especialidades" className="text-gray-700 hover:text-primary font-medium">ESPECIALIDADES</a>
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
              href="#contacto" 
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACTO
            </a>
            <a 
              href="#especialidades" 
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ESPECIALIDADES
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
