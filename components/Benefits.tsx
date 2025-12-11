import React, { useState } from 'react';
import { Network, Cpu, Coins, Building2, Zap, Users } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    title: 'Infraestructura Smart',
    description: 'Espacios de coworking y laboratorios IoT de última generación.',
    icon: Building2,
    detail: 'Fibra óptica redundante, espacios modulares y acceso 24/7 con biometría.',
  },
  {
    title: 'Networking Estratégico',
    description: 'Conexión directa con corporativos líderes y mentores globales.',
    icon: Network,
    detail: 'Eventos mensuales de matchmaking y sesiones de mentoría con ex-founders.',
  },
  {
    title: 'Acceso a Capital',
    description: 'Venture Capital y Business Angels enfocados en LATAM.',
    icon: Coins,
    detail: 'Rondas de inversión exclusivas y preparación para YC/Techstars.',
  },
  {
    title: 'Hub Web3 & Blockchain',
    description: 'Sandbox regulatorio y comunidad de desarrolladores activa.',
    icon: Cpu,
    detail: 'Nodos validadores on-site y hackathons trimestrales.',
  },
  {
    title: 'Talento High-Tech',
    description: 'Alianzas con universidades y bootcamps locales.',
    icon: Users,
    detail: 'Bolsa de empleo exclusiva y programas de pasantías certificadas.',
  },
  {
    title: 'Softlanding Caribe',
    description: 'Asesoría legal y tributaria para establecer tu startup.',
    icon: Zap,
    detail: 'Beneficios tributarios de Zona Franca y gestión de visas para nómadas.',
  },
];

const Benefits: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="benefits" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">¿Por qué Cartagena?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Todo lo que necesitas para escalar tu startup
          </h3>
          <p className="text-slate-600 text-lg">
            Diseñamos un ecosistema donde la tecnología y la calidad de vida convergen para potenciar la creatividad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>

                {/* Tooltip / Popover Effect */}
                <div
                  className={`absolute inset-0 bg-brand-600 rounded-2xl p-8 flex flex-col justify-center items-center text-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                  }`}
                >
                    <Icon className="w-10 h-10 text-white mb-4" />
                    <p className="text-white font-medium text-lg leading-relaxed">
                        {benefit.detail}
                    </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;