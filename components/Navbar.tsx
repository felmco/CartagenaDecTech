import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Ecosistema', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Hexagon className="w-8 h-8 text-brand-600 group-hover:rotate-180 transition-transform duration-700" />
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              Cartagena<span className="text-brand-600 font-light">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                    isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30"
            >
              Únete al Hub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 font-medium hover:text-brand-600 py-2 border-b border-slate-50 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-brand-600 text-white px-5 py-3 rounded-lg font-medium"
          >
            Únete al Hub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;