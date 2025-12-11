import React from 'react';
import { Startup, Testimonial } from '../types';
import { Quote } from 'lucide-react';

const startups: Startup[] = [
  { name: 'AgroData', category: 'AgriTech', logoUrl: 'https://picsum.photos/id/10/200/200', description: 'Inteligencia artificial para cultivos tropicales.' },
  { name: 'CaribePay', category: 'FinTech', logoUrl: 'https://picsum.photos/id/11/200/200', description: 'Pagos transfronterizos sin fricción.' },
  { name: 'MarLogistics', category: 'LogTech', logoUrl: 'https://picsum.photos/id/12/200/200', description: 'Optimización portuaria basada en Blockchain.' },
  { name: 'EcoStay', category: 'PropTech', logoUrl: 'https://picsum.photos/id/13/200/200', description: 'Marketplace de estancias sostenibles.' },
];

const testimonials: Testimonial[] = [
  {
    name: 'Sofia Martinez',
    role: 'CEO',
    company: 'AgroData',
    content: 'El parque nos dio la visibilidad necesaria para cerrar nuestra ronda Seed. La comunidad aquí es invaluable.',
    avatarUrl: 'https://picsum.photos/id/64/100/100'
  },
  {
    name: 'Carlos Mendez',
    role: 'CTO',
    company: 'CaribePay',
    content: 'La infraestructura es world-class. Tener acceso a nodos validadores on-site aceleró nuestro desarrollo Web3.',
    avatarUrl: 'https://picsum.photos/id/91/100/100'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Startups Grid */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Innovando desde el Caribe</h2>
              <p className="text-slate-600 text-lg">Conoce a las empresas que están transformando industrias desde nuestro campus.</p>
            </div>
            <a href="#" className="hidden md:block text-brand-600 font-semibold hover:text-brand-700 hover:underline mt-4 md:mt-0">
              Ver todo el portafolio &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {startups.map((startup, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 hover:border-brand-300 transition-colors">
                 <div className="h-12 w-12 bg-slate-200 rounded-full mb-4 overflow-hidden">
                    <img src={startup.logoUrl} alt={startup.name} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">
                    {startup.category}
                 </span>
                 <h3 className="text-xl font-bold text-slate-900 mb-1">{startup.name}</h3>
                 <p className="text-sm text-slate-500">{startup.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <Quote className="text-brand-500 w-8 h-8 mb-4 opacity-50" />
                <p className="text-slate-300 text-lg italic mb-6">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-500/30" />
                  <div>
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    <span className="text-brand-400 text-sm">{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;