
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled ? 'bg-[#020617]/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group" aria-label="SiteEase Home">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 14h6" />
                  <path d="M9 18h6" />
                </svg>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">SiteEase<span className="text-blue-500">.ca</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center" aria-label="Main Navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-blue-400 font-bold transition-colors text-sm uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
             {/* Special Offer Link for Demo */}
             <a href="#/offer" className="text-green-400 hover:text-green-300 font-bold text-sm uppercase tracking-widest border border-green-500/30 px-3 py-1 rounded-full bg-green-500/10">
                Brantford Offer
            </a>

            <a href="#contact" tabIndex={-1}>
              <Button variant="primary" className="py-2.5 px-6 text-sm font-black bg-blue-600 hover:bg-blue-500">
                Get Started
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white hover:text-blue-400 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#020617] border-b border-white/10" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 rounded-xl text-lg font-bold text-white hover:text-blue-400 hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#/offer" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-xl text-lg font-bold text-green-400 hover:bg-white/5">
                View Brantford Offer
            </a>
            <div className="pt-4">
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block">
                <Button fullWidth className="h-14 text-lg font-black bg-blue-600">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
