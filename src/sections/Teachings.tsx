import { Youtube, ExternalLink, Facebook, Instagram, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoPlayer from '@/components/VideoPlayer';

const teachings = [
  {
    title: 'Yeshua nuestra Primicia',
    description: 'Una enseñanza profunda sobre el significado de Yeshua como las primicias de la resurrección.',
    duration: 'Video Reel',
    videoId: '1607384757151860',
    platform: 'facebook',
  },
  {
    title: 'Jag Pésaj Sameaj',
    description: 'Celebrando la libertad y la redención en nuestra comunidad El Camino.',
    duration: 'Video Reel',
    videoId: '947605698158385',
    platform: 'facebook',
  },
  {
    title: 'Misterios de la Matzah',
    description: 'Descubre el simbolismo espiritual del pan sin levadura en las fiestas del Señor.',
    duration: 'Video Reel',
    videoId: '2765026083856103',
    platform: 'facebook',
  },
  {
    title: 'Nuestra Comunidad',
    description: 'Un vistazo a lo que Dios está haciendo en El Camino - Esforzados y Valientes.',
    duration: 'Video',
    videoId: '2078723776240752',
    platform: 'facebook',
  },
];

const featuredTeaching = {
  title: 'Cómo hacer el Conteo del Omer según la Torá',
  description: 'En esta enseñanza aprenderás sobre el significado y la práctica del conteo del Omer, una tradición bíblica que nos conecta con las fiestas del Señor y nos prepara para Pentecostés.',
  videoId: '2078723776240752',
  platform: 'facebook',
};

export default function Teachings() {
  return (
    <section id="ensenanzas" className="py-24 lg:py-32 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm font-bold tracking-widest uppercase rounded-full mb-6">
            Mensajes de Edificación
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-8 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            FORTALECE <span className="text-[#c9a227]">TU FE</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explora nuestra biblioteca de enseñanzas diseñadas para profundizar 
            tu conocimiento de la Palabra y tu relación con Dios.
          </p>
        </div>

        {/* Featured Teaching with Real Player */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="bg-[#1e3a5f] rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                    NUEVO
                  </span>
                  <span className="px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] text-[10px] font-bold tracking-widest uppercase rounded-full">
                    DESTACADO
                  </span>
                </div>
                <h3
                  className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {featuredTeaching.title}
                </h3>
                <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">
                  {featuredTeaching.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.facebook.com/share/1bpL4j48r6/" target="_blank">
                    <Button className="bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl px-6 py-6 font-bold">
                      <Facebook className="w-5 h-5 mr-3" />
                      FACEBOOK
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/keilaelcamino" target="_blank">
                    <Button className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-xl px-6 py-6 font-bold">
                      <Instagram className="w-5 h-5 mr-3" />
                      INSTAGRAM
                    </Button>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-3 bg-black flex items-center justify-center">
                <VideoPlayer 
                  videoId={featuredTeaching.videoId} 
                  platform={featuredTeaching.platform as 'youtube' | 'facebook'} 
                  title={featuredTeaching.title}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Library Subheader */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 max-w-6xl mx-auto border-b border-gray-100 pb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>BIBLIOTECA DE VIDEOS</h3>
            <p className="text-gray-500">Últimas enseñanzas publicadas</p>
          </div>
          <a href="https://www.youtube.com/@RocaChurchNC" target="_blank">
            <Button variant="link" className="text-[#c9a227] font-bold tracking-widest flex items-center gap-2 group">
              VER CANAL COMPLETO
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Teachings Grid - Premium Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teachings.map((teaching, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${teaching.videoId}/maxresdefault.jpg`} 
                  alt={teaching.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1e3a5f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <a 
                    href={`https://www.youtube.com/watch?v=${teaching.videoId}`} 
                    target="_blank"
                    className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center text-[#1e3a5f] transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl"
                  >
                    <Youtube className="w-8 h-8 fill-current" />
                  </a>
                </div>
                <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold rounded-lg lg:opacity-0 group-hover:opacity-100 transition-opacity">
                  {teaching.duration}
                </span>
              </div>
              <div className="p-8">
                <h4
                  className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#c9a227] transition-colors mb-4 line-clamp-2 leading-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {teaching.title}
                </h4>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6">
                  {teaching.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest">YOUTUBE</span>
                  <Share2 className="w-4 h-4 text-gray-300 hover:text-[#c9a227] cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

