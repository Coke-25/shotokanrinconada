import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export const metadata = {
  title: 'Club Shotokan - Shotokan Rinconada',
  description: 'Historia del Club Shotokan Rinconada. Más de 30 años enseñando karate en San José de la Rinconada.',
};

export default function ClubShotokan() {
  const timeline = [
    {
      year: "1984",
      title: "FUNDACIÓN DEL CLUB",
      content: "Shotokan Rinconada se fundó allá por el año 1984 en San José de la Rinconada. En nuestros inicios, hace casi 34 años, estábamos ubicados en la carretera Sevilla-Brenes, frente a la Piscina Municipal. En aquella época fue bastante difícil comenzar con nuestra actividad, que no era otra que Karate, dado que estábamos junto a la carretera y eso dificultaba mucho la posibilidad de que la gente del pueblo pudiera venir a practicar clases de Karate. Gracias a nuestro ingenio, comenzamos a usar una furgoneta como transporte privado y empezamos a hacernos cargo del transporte de aquellos niños que no tenían forma de venir a practicar su deporte favorito."
    },
    {
      year: "1986",
      title: "PRIMERAS COMPETICIONES PROVINCIALES",
      content: "La evolución técnica de los practicantes de Karate fue bastante buena tanto a nivel infantil como de otras categorías superiores. A los dos años aproximadamente de nuestra fundación y con la dificultad de que tanto niños como adultos comenzaron su formación desde cero, empezamos a competir a nivel provincial con unos resultados muy buenos. Shotokan Rinconada empezaba a conocerse a nivel autonómico y conseguimos nuestros primeros campeonatos autonómicos tanto a nivel de Kumite como en Katas."
    },
    {
      year: "1989",
      title: "NUEVA SEDE DEPORTIVA",
      content: "Nuestra mayor preocupación seguía siendo nuestra ubicación así que tomamos la decisión de trasladarnos dentro del pueblo. En el año 1989, Shotokan Rinconada se trasladaba a la calle Carmen la Suspira donde empezamos una nueva etapa con un nuevo tatami y unas nuevas instalaciones en las que ya ampliamos el abanico y dimos comienzo también con clases de mantenimiento, clases de defensa personal para adultos, etc. La nueva ubicación y las nuevas clases llevaron consigo un aumento considerable en el número de usuarios de todas las edades."
    },
    {
      year: "1993",
      title: "SEDE DEFINITIVA",
      content: "En la calle Carmen la Suspira estuvimos aproximadamente unos cuatro años y en el año 1993, con el objetivo de seguir mejorando, nos trasladamos definitivamente a la Calle Miguel de Mañara nº 2 (frente al Instituto Miguel de Mañara). Una vez aquí, volvimos a ampliar tanto las instalaciones para artes marciales, como la zona de maquinaria para musculación, además de añadir otras actividades como aerobic, spinning, saunas, solárium, etc."
    },
    {
      year: "2018+",
      title: "LOGROS DEPORTIVOS",
      content: "En estos últimos años Shotokan Rinconada ha conseguido grandes logros deportivos tanto a nivel competitivo como a nivel técnico. Contamos con más de 20 cinturones negros y distintos danes (1º, 2º, 3º, 4º y 5º dan). Varios árbitros y jueces. Primeros puestos a nivel provincial, autonómico, nacional e internacional. A nivel internacional hemos participado en Francia, Alemania, Holanda, Austria, Marruecos, y en unos Juegos Apoel en Tel-Aviv (Israel) consiguiendo un 3º clasificado en Kumite Individual."
    }
  ];

  return (
    <main>
      <PageBanner 
        title="CLUB SHOTOKAN" 
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'CLUB SHOTOKAN' }
        ]} 
      />

      {/* Gimnasio Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🏋️</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">MUCHO MÁS QUE KARATE</h2>
              <p className="text-gray-300 mb-8">
                En Shotokan Rinconada tienes a tu disposición una sala equipada con todo lo necesario para el trabajo de musculación y ejercicio cardiovascular.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">FITNESS</h4>
                    <p className="text-gray-400">Sala de fitness con más de 30 puestos de entrenamiento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ACTIVIDADES DIRIGIDAS</h4>
                    <p className="text-gray-400">Impartimos más de 100 horas de actividades a la semana.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ZONA DE ESTIRAMIENTOS</h4>
                    <p className="text-gray-400">Con todo lo que necesitas para estirar antes y después de cada entrenamiento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones CTA */}
      <section className="relative py-32 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920')" }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">NUESTRAS INSTALACIONES</h2>
          <p className="text-gray-300 mb-8 text-lg">Únete a nosotros y disfruta de nuestras instalaciones.</p>
          <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors font-bold">
            VER FOTOS
          </button>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            HISTORIA DEL CLUB SHOTOKAN RINCONADA
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600 hidden md:block"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`relative mb-12 md:mb-0 md:py-8 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-red-500">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.content}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-zinc-900"></div>
              </div>
            ))}
          </div>

          {/* Timeline years */}
          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            {timeline.map((item, index) => (
              <span key={index} className="bg-zinc-800 text-white px-4 py-2 rounded font-bold">
                {item.year}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VEN A SHOTOKAN Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">VEN A SHOTOKAN</h2>
          <Link 
            href="/contacto" 
            className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            CONTACTAR
          </Link>
        </div>
      </section>
    </main>
  );
}
