import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call to Mailchimp
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-brand-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          ¿Listo para escalar tu proyecto?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Agenda una visita guiada o suscríbete a nuestro newsletter para recibir noticias sobre convocatorias y eventos.
        </p>

        <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 max-w-lg mx-auto">
          {status === 'success' ? (
            <div className="py-4 flex flex-col items-center text-green-600 animate-in fade-in zoom-in">
              <CheckCircle className="w-12 h-12 mb-2" />
              <p className="font-semibold text-lg">¡Gracias! Nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="tu@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-6 py-4 rounded-xl text-slate-900 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-w-[160px]"
              >
                {status === 'loading' ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : (
                  <>
                    Contactar <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
        
        <p className="mt-4 text-xs text-slate-400">
          Al registrarte aceptas nuestra política de privacidad. No enviamos spam.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;