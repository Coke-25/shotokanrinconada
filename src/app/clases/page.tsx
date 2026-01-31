import PageBanner from '@/components/PageBanner';
import Image from 'next/image';

export default function Clases() {
  return (
    <main>
      <PageBanner 
        title="CLASES" 
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'CLASES' }
        ]} 
      />

      {/* Clases Infantiles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                KARATE INFANTIL
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Clases para Niños
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                En nuestras clases infantiles, los más pequeños aprenden karate de forma divertida y segura. Desarrollan disciplina, coordinación y confianza en sí mismos mientras se divierten con ejercicios adaptados a su edad.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="bg-red-700 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Horarios</h4>
                    <p className="text-gray-600">Lunes, Miércoles y Viernes: 17:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="bg-red-700 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Edad</h4>
                    <p className="text-gray-600">De 5 a 14 años</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl overflow-hidden relative min-h-80">
              <Image
                src="images/karate-ninos-card.jpg"
                alt="Karate para niños"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases Adultos */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-800 rounded-2xl overflow-hidden relative min-h-80 border border-gray-700">
              <Image
                src="images/karate-adultos-card.jpg"
                alt="Karate para adultos"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-block bg-red-900/50 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                KARATE ADULTOS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Clases para Adultos
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Nunca es tarde para empezar. Nuestras clases de adultos están diseñadas para todos los niveles, desde principiantes hasta avanzados. Mejora tu forma física, aprende defensa personal y descubre el arte del karate.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="bg-red-700 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horarios</h4>
                    <p className="text-gray-400">Lunes, Miércoles y Viernes: 20:00 - 21:30</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="bg-red-700 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Edad</h4>
                    <p className="text-gray-400">A partir de 15 años</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gimnasio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              GIMNASIO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Entrena a tu ritmo
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Además de las clases de karate, disponemos de un <span className="font-semibold text-gray-800">gimnasio completamente equipado</span> abierto para todo el mundo. No hace falta practicar karate para usar nuestras instalaciones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Máquinas de musculación</h3>
              <p className="text-gray-600">Equipamiento completo para trabajar todos los grupos musculares.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏃</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zona de cardio</h3>
              <p className="text-gray-600">Cintas de correr, bicicletas estáticas y elípticas.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Horario flexible</h3>
              <p className="text-gray-600">Abierto de lunes a viernes en horario amplio para que entrenes cuando mejor te venga.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Quieres conocer nuestras instalaciones?
            </h3>
            <p className="text-blue-200 text-lg mb-6">
              Ven a visitarnos sin compromiso y te enseñamos todo lo que tenemos para ofrecerte
            </p>
            <a 
              href="/contacto#formulario" 
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              CONTACTAR
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
