import Link from 'next/link';
import Image from 'next/image';
import BenefitCard from '@/components/BenefitCard';

export default function Home() {
  const benefits = [
    {
      title: "ESTIMULA LA COORDINACIÓN Y EL EQUILIBRIO",
      description: "Los ejercicios de Karate mejoran la postura y los movimientos, mejorando la velocidad de reacción y el tiempo de ejecución.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "POTENCIA LA ORIENTACIÓN ESPACIO/TEMPORAL",
      description: "La práctica del Karate permite que el niño esté más centrado en el presente y más atento a su entorno.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "AYUDA A DESARROLLAR VALORES POSITIVOS",
      description: "Potenciará valores como la responsabilidad, la tolerancia y el compañerismo.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "ENSEÑA A CONECTAR LA MENTE Y EL CUERPO",
      description: "Esto se realiza a través del autoconocimiento y la autoexploración.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "PERMITE DESCARGAR EL EXCESO DE ENERGÍA",
      description: "Esto viene especialmente bien para aquellos niños que tienen dificultades de atención.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
    },
    {
      title: "FORTALECE LA AUTOCONFIANZA Y AUTOESTIMA",
      description: "Estas características resultan esenciales para que el niño pueda hacer frente al acoso escolar.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "ESTIMULA EL AUTOCONTROL Y AUTOCONOCIMIENTO",
      description: "Lo que permite que el niño regule mejor sus emociones y mantenga bajo control su impulsividad.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "RESOLVER CONFLICTOS DE MANERA PACÍFICA",
      description: "Una habilidad que resulta muy útil para la integración social del niño.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('images/shotokan_header.jpeg')" }}
        />
        <div className="relative container mx-auto px-4 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-red-600 font-medium mb-2">KARATE EN SAN JOSÉ DE LA RINCONADA</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                SHOTOKAN<br />RINCONADA
              </h1>
              <a href="tel:955790451" className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                955 790 451
              </a>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <Image
                  src="images/logo.png"
                  alt="Karate para niños en San José de la Rinconada"
                  width={320}
                  height={400}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niños y Adultos Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Info paragraph */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg">
              Todas nuestras clases comienzan con un <span className="font-semibold text-gray-800">calentamiento</span> para preparar el cuerpo y finalizan con <span className="font-semibold text-gray-800">estiramientos</span> para favorecer la flexibilidad. <span className="font-semibold text-gray-800">No necesitas ningún conocimiento previo</span> para empezar a entrenar, ¡te esperamos!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              PRACTICA KARATE Y DISFRUTA DE SUS BENEFICIOS
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              El Karate es una de las artes marciales más antiguas y está demostrado que mejora la aptitud física y transmite valores como la perseverancia, el autocontrol y la responsabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gimnasio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 relative rounded-lg overflow-hidden">
              <Image
                src="images/linea-sport.jpg"
                alt="Gimnasio Linea Sport San José de la Rinconada"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">MUCHO MÁS QUE KARATE</h2>
              <p className="text-gray-600 mb-8">
                En Shotokan Rinconada tienes a tu disposición una sala equipada con todo lo necesario para el trabajo de musculación y ejercicio cardiovascular.
                No hace falta unirse a las clases de karate para utilizar el gimnasio.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">FITNESS</h4>
                    <p className="text-gray-600">Sala de fitness con más de 30 puestos de entrenamiento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">ACTIVIDADES DIRIGIDAS</h4>
                    <p className="text-gray-600">Impartimos más de 20 horas de actividades a la semana.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">ZONA DE ESTIRAMIENTOS</h4>
                    <p className="text-gray-600">Con todo lo que necesitas para estirar antes y después de cada entrenamiento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones CTA */}
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="images/gimnasio-tranquilo.jpg"
            alt="Instalaciones Shotokan Rinconada"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">NUESTRAS INSTALACIONES</h2>
          <p className="text-gray-300 mb-8 text-lg">Únete a nosotros y disfruta de nuestras instalaciones.</p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            HISTORIA DEL CLUB SHOTOKAN RINCONADA
          </h2>

          {/* Timeline years */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["1984", "1986", "1989", "1993", "Actualidad"].map((year, index) => (
              <a 
                key={index} 
                href={`#year-${year}`}
                className="bg-gray-800 text-white px-4 py-2 rounded font-bold shadow border border-gray-700 hover:bg-red-700 hover:border-red-700 transition-colors cursor-pointer"
              >
                {year}
              </a>
            ))}
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-700 hidden md:block"></div>

            {[
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
                year: "Actualidad",
                title: "LOGROS DEPORTIVOS",
                content: "En estos últimos años Shotokan Rinconada ha conseguido grandes logros deportivos tanto a nivel competitivo como a nivel técnico. Contamos con más de 20 cinturones negros y distintos danes (1º, 2º, 3º, 4º y 5º dan). Varios árbitros y jueces. Primeros puestos a nivel provincial, autonómico, nacional e internacional. A nivel internacional hemos participado en Francia, Alemania, Holanda, Austria, Marruecos, y en unos Juegos Apoel en Tel-Aviv (Israel) consiguiendo un 3º clasificado en Kumite Individual."
              }
            ].map((item, index) => (
              <div key={index} id={`year-${item.year}`} className="relative mb-12 md:mb-0 md:py-8 scroll-mt-32">
                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-3xl font-bold text-red-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-left">{item.content}</p>
                    </div>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-700 rounded-full border-4 border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Ven a Shotokan Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">VEN A</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-red-600">SHOTOKAN</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
