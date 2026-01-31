import PageBanner from '@/components/PageBanner';
import Image from 'next/image';

export const metadata = {
  title: 'Profesores - Shotokan Rinconada',
  description: 'Conoce a nuestros profesores de karate en Shotokan Rinconada.',
};

export default function Profesores() {
  return (
    <main>
      <PageBanner 
        title="PROFESORES" 
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'PROFESORES' }
        ]} 
      />

      {/* Pedro Bueno Gallardo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden relative border-4 border-red-700 shadow-xl mx-auto mb-6">
                <Image
                  src="images/profesor-pedro.jpg"
                  alt="Pedro Bueno Gallardo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-block bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                SENSEI
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                PEDRO BUENO GALLARDO
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-700 mb-4">Titulaciones</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Cinturón Negro 3er DAN de Karate (R.F.E.K)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Cinturón Negro 5º DAN de Karate (C.S.I.T) (F.K.C.V)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Cinturón Negro 3er DAN de Taijutsu (F.F.TAIJUTSU)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Cinturón Negro 1er DAN de Full-Contact
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Entrenador Regional de Karate (R.F.E.K)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Entrenador Nacional de Karate (C.S.I.T)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Árbitro Regional de Karate (R.F.E.K)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Juez Regional de Karate (R.F.E.K)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Árbitro Internacional de Karate (C.S.I.T)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Instructor de Defensa Personal por el Ministerio del Interior
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-700 mb-4">Hitos Deportivos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">Campeón de Sevilla</p>
                    <p className="text-gray-600 text-sm">1981 - 1985</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">Campeón de Andalucía</p>
                    <p className="text-gray-600 text-sm">Individual</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">Campeón de Andalucía</p>
                    <p className="text-gray-600 text-sm">Por equipos</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">Selección Andaluza</p>
                    <p className="text-gray-600 text-sm">Karate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Borja Bueno Castillo */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                BORJA BUENO CASTILLO
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-500 mb-4">Titulaciones</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Cinturón Negro 1er DAN de Karate (R.F.E.K)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Componente de la Selección Andaluza de Karate en 2014 y 2016
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4">Hitos Deportivos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <p className="font-bold text-white">Campeón de Andalucía</p>
                    <p className="text-gray-400 text-sm">Individual 2014 y 2015</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <p className="font-bold text-white">Campeonato de Andalucía</p>
                    <p className="text-gray-400 text-sm">Múltiples participaciones</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden relative border-4 border-red-700 shadow-xl mx-auto mb-6">
                <Image
                  src="images/profesor-borja.jpg"
                  alt="Borja Bueno Castillo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-block bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                PROFESOR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jesús León */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden relative border-4 border-red-700 shadow-xl mx-auto mb-6">
                <Image
                  src="images/profesor-jesus.jpg"
                  alt="Jesús León"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-block bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                PROFESOR
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                JESÚS LEÓN
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-700 mb-4">Titulaciones</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Cinturón Negro 3º DAN de Karate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Ex-Seleccionador de Kumite y Director Técnico de la Delegación Sevillana
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Miembro de la Selección Andaluza 2003-2018
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 mt-1">•</span>
                    Árbitro Regional
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-700 mb-4">Hitos Deportivos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">14 Medallas</p>
                    <p className="text-gray-600 text-sm">Campeonatos de Andalucía</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">Subcampeón de España</p>
                    <p className="text-gray-600 text-sm">A nivel nacional</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">26 Años</p>
                    <p className="text-gray-600 text-sm">De experiencia</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-gray-900">Cinturón Negro</p>
                    <p className="text-gray-600 text-sm">3º DAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
