import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* CTA Section */}
      <div className="bg-red-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Y DISFRUTA DEL KARATE</h2>
          <Link 
            href="/contacto" 
            className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            ¡QUIERO APUNTARME!
          </Link>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Shotokan Rinconada</h4>
            <p className="text-gray-300 mb-2">Calle Miguel de Mañara,</p>
            <p className="text-gray-300 mb-2">41300 San José de la Rinconada, Sevilla.</p>
            <p className="text-gray-300 mb-2">
              Teléfono: <a href="tel:955790451" className="text-red-500 hover:text-red-400">955 790 451</a>
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:info@shotokanrinconada.es" className="text-red-500 hover:text-red-400">info@shotokanrinconada.es</a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                  INICIO
                </Link>
              </li>
              <li>
                <Link href="/club-shotokan" className="text-gray-300 hover:text-red-500 transition-colors">
                  CLUB SHOTOKAN
                </Link>
              </li>
              <li className="pl-4">
                <Link href="/profesores" className="text-gray-300 hover:text-red-500 transition-colors">
                  → PROFESORES
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-red-500 transition-colors">
                  CONTACTO
                </Link>
              </li>
              <li>
                <Link href="/clases" className="text-gray-300 hover:text-red-500 transition-colors">
                  NUESTRAS CLASES
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Brand */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
              </a>
            </div>
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">SR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          Copyright © 2018 SANSARU marketing
        </div>
      </div>
    </footer>
  );
}
