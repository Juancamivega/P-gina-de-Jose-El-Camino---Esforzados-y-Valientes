import { BookOpen, Heart, Users, Cross, Video } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Enseñanza Bíblica',
    description: 'Estudiamos la Palabra de Dios con profundidad y revelación para edificar tu fe.',
  },
  {
    icon: Heart,
    title: 'Amor y Comunidad',
    description: 'Creamos un ambiente de amor genuino donde cada persona es valorada.',
  },
  {
    icon: Users,
    title: 'Familia Unida',
    description: 'Somos una familia espiritual que camina junta en el propósito de Dios.',
  },
  {
    icon: Cross,
    title: 'Fe y Valentía',
    description: 'Nos inspiramos en Josué 1:9 para enfrentar la vida con fe y valentía.',
  },
];

const socialStats = [
  { platform: 'Facebook', followers: '42+', icon: Video },
  { platform: 'Instagram', followers: 'Activo', icon: Video },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="relative">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm font-bold tracking-widest uppercase rounded-full mb-6">
                Nuestra Identidad
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-8 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                UN MINISTERIO DE <br />
                <span className="text-[#c9a227]">FE Y VALENTÍA</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                <p>
                  El Camino - Esforzados y Valientes nació con el firme propósito de 
                  acompañar a cada persona en su caminar espiritual, brindando herramientas 
                  bíblicas reales para los desafíos de hoy.
                </p>
                <p>
                  No somos solo una página web; somos una familia espiritual que camina 
                  junta, creyendo que en Cristo hay poder para transformar cualquier 
                  circunstancia.
                </p>
              </div>
            </div>

            {/* Features Mini-Grid */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Enseñanza Profunda</h3>
                <p className="text-sm text-gray-500">Revelación bíblica para el crecimiento diario.</p>
              </div>
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Comunidad Real</h3>
                <p className="text-sm text-gray-500">Un espacio de apoyo, amor y oración constante.</p>
              </div>
            </div>
          </div>

          {/* Image & Stats Column */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/about-community.png" 
                alt="Nuestra Comunidad" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#1e3a5f] p-8 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-white italic text-lg mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  "La unidad es nuestra mayor fuerza en el caminar de la fe."
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-6 bg-[#c9a227]" />
                  <span className="text-[#c9a227] text-xs font-bold tracking-widest uppercase">El Camino</span>
                </div>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-12 -right-6 w-48 h-48 border-[20px] border-[#1e3a5f]/5 rounded-full z-0" />
          </div>
        </div>

        {/* Mission Banner */}
        <div className="mt-32">
          <div className="bg-[#1e3a5f] rounded-[2rem] p-10 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[#c9a227] text-sm font-bold tracking-[0.4em] uppercase mb-8 block">Nuestra Inspiración</span>
              <p
                className="text-2xl sm:text-4xl lg:text-5xl text-white font-medium italic mb-10 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "Mira que te mando que te esfuerces y seas valiente; 
                no temas ni desmayes, porque Jehová tu Dios estará 
                contigo en dondequiera que vayas."
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="h-[1px] w-12 bg-white/20" />
                <p className="text-white/60 text-lg tracking-[0.2em] font-light">
                  JOSUÉ 1:9
                </p>
                <div className="h-[1px] w-12 bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
