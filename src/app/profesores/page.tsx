import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Profesores - Shotokan Rinconada',
  description: 'Conoce a nuestros profesores de karate en Shotokan Rinconada.',
};

const profesores = [
  {
    id: 1,
    name: "PEDRO BUENO GALLARDO",
    role: "Profesor Principal",
    image: "/images/profesor-pedro.jpg",
    description: "Fundador del club con más de 30 años de experiencia en la enseñanza del karate."
  },
  {
    id: 2,
    name: "BORJA BUENO CASTILLO",
    role: "Profesor",
    image: "/images/profesor-borja.jpg",
    description: "Profesor con amplia experiencia en karate infantil y competición."
  },
  {
    id: 3,
    name: "JESÚS LEÓN",
    role: "Profesor",
    image: "/images/profesor-jesus.jpg",
    description: "Especialista en artes marciales y defensa personal."
  }
];

export default function Profesores() {
  return (
    <main>
      <PageBanner 
        title="PROFESORES" 
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'NUESTRAS CLASES', href: '/clases' },
          { label: 'PROFESORES' }
        ]} 
      />

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {profesores.map((profesor) => (
              <div key={profesor.id} className="bg-gray-800 rounded-lg overflow-hidden text-center group hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-700">
                <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden relative border-4 border-gray-600 shadow-lg">
                    <Image
                      src={profesor.image}
                      alt={profesor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">{profesor.name}</h2>
                  <p className="text-red-600 font-medium mb-3">{profesor.role}</p>
                  <p className="text-gray-400 mb-4 text-sm">{profesor.description}</p>
                  <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors text-sm font-bold">
                    VER PERFIL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEN A SHOTOKAN Section */}
      <section className="py-16 bg-red-700">
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
