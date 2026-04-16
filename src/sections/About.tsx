import { BookOpen, Heart, Search, Globe } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* ¿Quiénes Somos? Section */}
      <section id="nosotros" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div className="relative">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm font-bold tracking-widest uppercase rounded-full mb-6">
                  ¿Quiénes Somos?
                </span>
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-8 leading-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  LA COMUNIDAD <br />
                  <span className="text-[#c9a227]">"EL CAMINO"</span>
                </h2>
                <div className="space-y-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                  <p>
                    Somos la comunidad <strong className="text-[#1e3a5f]">'El Camino'</strong>, un grupo que se esfuerza
                    con valentía por volver al origen. Nos dedicamos al estudio profundo de toda la Biblia, analizando
                    su contexto histórico, cultural y lingüístico desde las fuentes originales en hebreo y griego koiné.
                  </p>
                  <p>
                    Al buscar la verdad escritural, restauramos nuestra verdadera identidad a la luz de la Palabra,
                    reconectando con nuestras raíces hebreas para caminar con certeza hacia nuestro origen y destino final.
                  </p>
                </div>
              </div>

              {/* Features Mini-Grid */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Estudio Profundo</h3>
                  <p className="text-sm text-gray-500">Análisis bíblico desde las fuentes originales en hebreo y griego.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contexto Histórico</h3>
                  <p className="text-sm text-gray-500">Comprensión cultural y lingüística de la Palabra de Dios.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Raíces Hebreas</h3>
                  <p className="text-sm text-gray-500">Reconectando con nuestra identidad y herencia espiritual.</p>
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
        </div>
      </section>

      {/* ¿Qué es El Camino? Section */}
      <section className="py-24 lg:py-32 bg-[#f8f6f1] overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#c9a227]/15 text-[#c9a227] text-sm font-bold tracking-widest uppercase rounded-full mb-6">
                Nuestra Historia
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-6 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                ¿QUÉ ES <span className="text-[#c9a227]">EL CAMINO?</span>
              </h2>
            </div>

            {/* Two-column content + featured card */}
            <div className="grid lg:grid-cols-3 gap-10 items-stretch">
              {/* Origin text */}
              <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col justify-center">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  <strong className="text-[#1e3a5f]">El Camino - Esforzados y Valientes</strong> nació con el firme
                  propósito de acompañar a cada persona en su caminar espiritual, brindando herramientas bíblicas
                  reales para los desafíos de hoy.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  No somos solo una página web; somos una familia espiritual en marcha. Creemos en el poder de{' '}
                  <strong className="text-[#1e3a5f]">Yeshua Hamashiaj (Jesucristo)</strong> para transformar vidas,
                  rescatando la esencia de Su nombre original como fundamento de nuestra fe y nuestra victoria.
                </p>
              </div>

              {/* Ministry Card */}
              <div className="bg-[#1e3a5f] rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a227]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10">
                  <span className="text-[#c9a227] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                    nosotros / UN MINISTERIO DE
                  </span>
                  <h3
                    className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    FE Y VALENTÍA
                  </h3>
                  <p className="text-white/75 leading-relaxed text-base">
                    "Somos una familia espiritual en marcha. Creemos en el poder de Yeshua Hamashiaj para transformar
                    vidas, rescatando la esencia de Su nombre original como fundamento de nuestra fe y nuestra victoria."
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3 relative z-10">
                  <div className="h-[2px] w-8 bg-[#c9a227]" />
                  <span className="text-[#c9a227] text-xs font-bold tracking-widest uppercase">El Camino</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Banner */}
          <div className="mt-20 max-w-6xl mx-auto">
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
    </>
  );
}
