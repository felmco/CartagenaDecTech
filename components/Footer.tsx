import React from 'react';
import { Twitter, Linkedin, Instagram, Hexagon, Github, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Hexagon className="w-6 h-6 text-brand-500" />
              <span className="text-xl font-bold text-white">CartagenaTech</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Impulsando la innovación tecnológica en el Caribe colombiano. 
              Un ecosistema diseñado para el crecimiento de startups, Web3 y tecnología sostenible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Disc className="w-5 h-5" /></a> {/* Discord alternative icon */}
              <a href="#" className="hover:text-brand-400 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Ecosistema</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Startups</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Inversionistas</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Mentores</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Beneficios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Términos de uso</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Cartagena Tech Park. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0 text-slate-500">Diseñado con tecnología Web3.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;