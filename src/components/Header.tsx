'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClasesOpen, setIsClasesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        <span className="font-semibold">MENÚ PRINCIPAL</span>
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SR</span>
            </div>
            <span className="text-white font-bold text-xl hidden md:block">SHOTOKAN RINCONADA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors font-medium">
              INICIO
            </Link>
            <Link href="/club-shotokan" className="text-white hover:text-red-500 transition-colors font-medium">
              CLUB SHOTOKAN
            </Link>
            <div className="relative group">
              <button 
                className="text-white hover:text-red-500 transition-colors font-medium flex items-center gap-1"
                onMouseEnter={() => setIsClasesOpen(true)}
                onMouseLeave={() => setIsClasesOpen(false)}
              >
                NUESTRAS CLASES
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute top-full left-0 bg-black/95 py-2 min-w-48 transition-all ${isClasesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsClasesOpen(true)}
                onMouseLeave={() => setIsClasesOpen(false)}
              >
                <Link href="/clases" className="block px-4 py-2 text-white hover:text-red-500 hover:bg-white/10">
                  Todas las Clases
                </Link>
                <Link href="/profesores" className="block px-4 py-2 text-white hover:text-red-500 hover:bg-white/10">
                  PROFESORES
                </Link>
              </div>
            </div>
            <Link href="/contacto" className="text-white hover:text-red-500 transition-colors font-medium">
              CONTACTO
            </Link>
            <a href="tel:955790451" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              955 790 451
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <Link href="/" className="block py-2 text-white hover:text-red-500">INICIO</Link>
            <Link href="/club-shotokan" className="block py-2 text-white hover:text-red-500">CLUB SHOTOKAN</Link>
            <Link href="/clases" className="block py-2 text-white hover:text-red-500">NUESTRAS CLASES</Link>
            <Link href="/profesores" className="block py-2 text-white hover:text-red-500 pl-4">→ PROFESORES</Link>
            <Link href="/contacto" className="block py-2 text-white hover:text-red-500">CONTACTO</Link>
            <a href="tel:955790451" className="block py-2 text-red-500 font-bold">955 790 451</a>
          </div>
        )}
      </nav>
    </header>
  );
}
