'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import { useState } from 'react';

const clases = [
  {
    id: 1,
    title: "KARATE INFANTIL 1",
    category: "karate",
    description: "Clases para los más pequeños, iniciación al karate.",
    image: "👦",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 2,
    title: "KARATE INFANTIL 2",
    category: "karate",
    description: "Nivel intermedio para niños con conocimientos básicos.",
    image: "👧",
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: 3,
    title: "KARATE INFANTIL 3",
    category: "karate",
    description: "Nivel avanzado para niños con experiencia.",
    image: "🥋",
    color: "from-yellow-500 to-green-500"
  },
  {
    id: 4,
    title: "KARATE ADULTOS",
    category: "karate",
    description: "Clases de karate para adultos de todos los niveles.",
    image: "🥋",
    color: "from-gray-600 to-gray-800"
  },
  {
    id: 5,
    title: "DEFENSA PERSONAL",
    category: "defensa",
    description: "Aprende técnicas de defensa personal efectivas.",
    image: "🛡️",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 6,
    title: "PREPARACIÓN FÍSICA",
    category: "fitness",
    description: "Mejora tu condición física con nuestros entrenamientos.",
    image: "💪",
    color: "from-purple-500 to-purple-700"
  }
];

export default function Clases() {
  const [filter, setFilter] = useState('todas');

  const filteredClases = filter === 'todas' 
    ? clases 
    : clases.filter(c => c.category === filter);

  return (
    <main>
      <PageBanner 
        title="NUESTRAS CLASES" 
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'NUESTRAS CLASES' }
        ]} 
      />

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('todas')}
              className={`px-6 py-2 rounded font-bold transition-colors ${filter === 'todas' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'}`}
            >
              TODAS LAS CLASES
            </button>
            <button 
              onClick={() => setFilter('karate')}
              className={`px-6 py-2 rounded font-bold transition-colors ${filter === 'karate' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'}`}
            >
              Karate
            </button>
            <button 
              onClick={() => setFilter('defensa')}
              className={`px-6 py-2 rounded font-bold transition-colors ${filter === 'defensa' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'}`}
            >
              Defensa personal
            </button>
            <button 
              onClick={() => setFilter('fitness')}
              className={`px-6 py-2 rounded font-bold transition-colors ${filter === 'fitness' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'}`}
            >
              Preparación física
            </button>
          </div>

          {/* Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClases.map((clase) => (
              <div key={clase.id} className="bg-zinc-800 rounded-lg overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className={`h-48 bg-gradient-to-br ${clase.color} flex items-center justify-center`}>
                  <span className="text-7xl">{clase.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{clase.title}</h3>
                  <p className="text-gray-400 mb-4">{clase.description}</p>
                  <Link 
                    href="/contacto" 
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors text-sm font-bold"
                  >
                    MÁS INFORMACIÓN
                  </Link>
                </div>
              </div>
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
