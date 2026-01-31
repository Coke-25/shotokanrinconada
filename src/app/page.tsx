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
          style={{ backgroundImage: "url('/images/shotokan_header.jpeg')" }}
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
                  src="/images/logo.png"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Niños */}
            <div className="bg-gray-50 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-64 relative bg-gray-300">
                <Image
                  src="/images/karate-ninos.png"
                  alt="Karate para niños"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">NIÑOS</h3>
                <p className="text-gray-600 mb-6">
                  En nuestras clases lo pasan genial aprendiendo con ejercicios adaptados a sus capacidades.
                </p>
                <Link 
                  href="/clases" 
                  className="inline-block bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors"
                >
                  1ª CLASE GRATUITA
                </Link>
              </div>
            </div>

            {/* Adultos */}
            <div className="bg-gray-50 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-64 relative bg-gray-300">
                <Image
                  src="/images/karate-adultos.png"
                  alt="Karate para adultos"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ADULTOS</h3>
                <p className="text-gray-600 mb-6">
                  Te enseñamos este arte marcial y los diferentes beneficios que brinda en el crecimiento personal.
                </p>
                <Link 
                  href="/clases" 
                  className="inline-block bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors"
                >
                  PRUEBA GRATIS
                </Link>
              </div>
            </div>
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

      {/* Ven a Shotokan Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">VEN A</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-red-600">SHOTOKAN</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Karate para Niños */}
            <div className="relative group overflow-hidden rounded-lg">
              <div className="h-80 relative">
                <Image
                  src="/images/karate-ninos-card.jpg"
                  alt="Karate para niños"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-2xl font-bold text-white mb-4">KARATE PARA NIÑOS</h4>
                <Link 
                  href="/clases" 
                  className="bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors"
                >
                  MÁS INFORMACIÓN
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                <h4 className="text-xl font-bold text-white text-center">KARATE PARA NIÑOS</h4>
              </div>
            </div>

            {/* Karate para Adultos */}
            <div className="relative group overflow-hidden rounded-lg">
              <div className="h-80 relative">
                <Image
                  src="/images/karate-adultos-card.jpg"
                  alt="Karate para adultos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-2xl font-bold text-white mb-4">KARATE PARA ADULTOS</h4>
                <Link 
                  href="/clases" 
                  className="bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors"
                >
                  MÁS INFORMACIÓN
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                <h4 className="text-xl font-bold text-white text-center">KARATE PARA ADULTOS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
