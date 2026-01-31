'use client';

import PageBanner from '@/components/PageBanner';
import Image from 'next/image';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <main>
      <PageBanner 
        title="CONTACTO" 
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'CONTACTO' }
        ]} 
      />

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">CONTACTO</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre *"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje *"
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 resize-none"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition-colors"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

            {/* Map and Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">CONTACTO</h2>
              
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

              {/* Contact Info */}
              <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
                <h3 className="text-xl font-bold text-red-600 mb-4">Shotokan Rinconada</h3>
                <div className="space-y-3 text-gray-400">
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Calle Miguel de Mañara Nº 2E<br />41300 San José de la Rinconada, Sevilla</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:955790451" className="text-red-600 hover:text-red-600">955 790 451</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@shotokanrinconada.es" className="text-red-600 hover:text-red-600">info@shotokanrinconada.es</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Federaciones y Colaboradores</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="/images/fed-sevillana.png"
                  alt="Federación Sevillana de Karate"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="/images/fed-andaluza.png"
                  alt="Federación Andaluza de Karate"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="/images/fed-espanola.png"
                  alt="Federación Española de Karate"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="/images/wkf.png"
                  alt="World Karate Federation"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <Image
                  src="/images/partner-bc.png"
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
