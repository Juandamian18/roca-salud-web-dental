import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Centro Médico Roca</h4>
            <div className="flex items-start mb-3">
              <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
              <p>Ambrosetti 698, Caballito, CABA</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="flex items-center mb-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              <a 
                href="https://wa.me/541127756496" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-200"
              >
                +54 11 2775-6496
              </a>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="w-5 h-5 mr-2" />
              <a 
                href="tel:+541152633288" 
                className="hover:text-primary-200"
              >
                5263-3288
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a 
                href="mailto:rocasaludintegral@gmail.com" 
                className="hover:text-primary-200 break-all"
              >
                rocasaludintegral@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex items-center mb-3">
              <Facebook className="w-5 h-5 mr-2" />
              <a 
                href="https://www.facebook.com/centromedicorocacaba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-200"
              >
                centromedicorocacaba
              </a>
            </div>
            <div className="flex items-center">
              <Instagram className="w-5 h-5 mr-2" />
              <a 
                href="https://www.instagram.com/cmrocasaludok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-200"
              >
                @cmrocasaludok
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Centro Médico Roca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
