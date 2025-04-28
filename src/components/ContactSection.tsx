
import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-card p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-primary rounded-full p-4 mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">TURNOS por WHATSAPP</h2>
            <p className="text-gray-600 text-lg mb-6">Con y sin turno, ATENCIÓN INMEDIATA</p>
            
            <a 
              href="https://wa.me/541127756496" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 mb-8 w-full max-w-md"
            >
              <MessageCircle size={20} /> Escribinos al 11-2775-6496
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center p-4 bg-accent rounded-lg">
              <Phone className="w-6 h-6 text-primary mr-3" />
              <div>
                <p className="text-sm text-gray-500">Teléfono fijo</p>
                <a href="tel:+541152633288" className="font-medium hover:text-primary">5263-3288</a>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-accent rounded-lg">
              <Mail className="w-6 h-6 text-primary mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:rocasaludintegral@gmail.com" className="font-medium hover:text-primary break-all">
                  rocasaludintegral@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
