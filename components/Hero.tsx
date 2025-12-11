import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080" 
          alt="Cartagena Technology Park"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-brand-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-brand-100 text-xs font-medium tracking-wide uppercase">Primer Hub Web3 del Caribe</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            El futuro digital <br />
            se construye desde <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              Cartagena
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Conecta con el ecosistema de innovación más vibrante de Latinoamérica. 
            Infraestructura de clase mundial, talento tech y acceso a capital en el corazón del Caribe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contact"
              className="group bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-700 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] flex items-center justify-center gap-2"
            >
              Agendar Visita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Explorar Ecosistema
            </a>
          </div>
        </div>
      </div>

      {/* Abstract Shape Decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;