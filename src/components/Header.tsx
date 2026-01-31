'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md shadow-md">
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="images/logo.png"
              alt="Shotokan Rinconada Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-gray-900 font-bold text-xl hidden md:block">SHOTOKAN RINCONADA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              INICIO
            </Link>
            <Link href="/clases" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              CLASES
            </Link>
            <Link href="/profesores" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              PROFESORES
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              CONTACTO
            </Link>
            <a href="tel:955790451" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors">
              955 790 451
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-900"
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>INICIO</Link>
            <Link href="/clases" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>CLASES</Link>
            <Link href="/profesores" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>PROFESORES</Link>
            <Link href="/contacto" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>CONTACTO</Link>
            <a href="tel:955790451" className="block py-2 text-red-600 font-bold" onClick={() => setIsMenuOpen(false)}>955 790 451</a>
          </div>
        )}
      </nav>
    </header>
  );
}
