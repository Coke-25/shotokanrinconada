import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Section */}
      <div className="bg-red-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Y DISFRUTA DEL KARATE</h2>
          <Link 
            href="/contacto#formulario" 
            className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            ¡QUIERO APUNTARME!
          </Link>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left flex-1">
            {/* Contact info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Shotokan Rinconada</h4>
              <p className="text-gray-400 mb-2">Calle Miguel de Mañara Nº 2E</p>
              <p className="text-gray-400 mb-2">41300 San José de la Rinconada, Sevilla</p>
              <p className="text-gray-400 mb-2">
                Teléfono: <a href="tel:955790451" className="text-red-600 hover:text-red-600">955 790 451</a>
              </p>
              <p className="text-gray-400">
                Email: <a href="mailto:info@shotokanrinconada.es" className="text-red-600 hover:text-red-600">info@shotokanrinconada.es</a>
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-red-600 transition-colors">
                    INICIO
                  </Link>
                </li>
                <li>
                  <Link href="/clases" className="text-gray-400 hover:text-red-600 transition-colors">
                    CLASES
                  </Link>
                </li>
                <li>
                  <Link href="/profesores" className="text-gray-400 hover:text-red-600 transition-colors">
                    PROFESORES
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-400 hover:text-red-600 transition-colors">
                    CONTACTO
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Síguenos</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/shotokan.rinconada/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Logo - right side on desktop, centered on mobile */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="images/logo.png"
              alt="Shotokan Rinconada Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 bg-gray-950">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>🛠️ Web desarrollada por <a href="https://github.com/coke-25" target="_blank" className="text-red-600 hover:text-red-600">Coke</a></p>
        </div>
      </div>
    </footer>
  );
}
