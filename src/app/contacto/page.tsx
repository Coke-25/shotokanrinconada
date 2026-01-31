import PageBanner from '@/components/PageBanner';
import Image from 'next/image';

export default function Contacto() {
  return (
    <main>
      <PageBanner 
        title="CONTACTO" 
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'CONTACTO' }
        ]} 
      />

      <section id="formulario" className="py-20 bg-gray-900 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Box */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">CONTACTA CON NOSOTROS</h2>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <p className="text-gray-300 text-lg mb-8">
                  ¿Quieres más información sobre nuestras clases de karate? ¡Estaremos encantados de atenderte! Puedes contactarnos de las siguientes formas:
                </p>
                
                {/* Email */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-700 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Envíanos un correo</h3>
                    <p className="text-gray-400 text-sm mb-2">Responderemos lo antes posible</p>
                    <a href="mailto:info@shotokanrinconada.es" className="text-red-500 hover:text-red-400 font-medium">
                      info@shotokanrinconada.es
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-700 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Llámanos</h3>
                    <p className="text-gray-400 text-sm mb-2">Atención telefónica en horario de clases</p>
                    <a href="tel:955790451" className="text-red-500 hover:text-red-400 font-medium">
                      955 790 451
                    </a>
                  </div>
                </div>

                {/* Visit */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-700 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Visítanos en persona</h3>
                    <p className="text-gray-400 text-sm mb-2">Ven a conocernos y prueba una clase gratis</p>
                    <p className="text-gray-300">
                      Calle Miguel de Mañara Nº 2E<br />
                      41300 San José de la Rinconada, Sevilla
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">AQUÍ NOS ENCONTRAMOS</h2>
              
              {/* Map */}
              <div className="h-64 bg-gray-800 rounded-lg mb-8 overflow-hidden shadow border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5!2d-5.9444!3d37.4863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzEwLjgiTiA1wrA1NiczOS4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Federaciones y Colaboradores</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="images/fed-sevillana.png"
                  alt="Federación Sevillana de Karate"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="images/fed-andaluza.png"
                  alt="Federación Andaluza de Karate"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="images/fed-espanola.png"
                  alt="Federación Española de Karate"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="images/wkf.png"
                  alt="World Karate Federation"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="images/partner-bc.png"
                  alt="Fisioterapia BC"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
