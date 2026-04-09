import { Download, Book, Calendar, Music, FileText, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resources = [
  {
    icon: Book,
    title: 'Guía de Estudio Bíblico',
    description: 'Material de estudio para profundizar en la Palabra de Dios.',
    action: 'Descargar',
    color: 'bg-blue-500',
  },
  {
    icon: Calendar,
    title: 'Calendario de Eventos',
    description: 'Mantente al día con nuestras reuniones y actividades.',
    action: 'Ver Calendario',
    color: 'bg-green-500',
  },
  {
    icon: Music,
    title: 'Alabanzas y Adoración',
    description: 'Playlist de música para tu tiempo de adoración personal.',
    action: 'Escuchar',
    color: 'bg-purple-500',
  },
  {
    icon: FileText,
    title: 'Notas de Enseñanzas',
    description: 'Descarga las notas de nuestras enseñanzas semanales.',
    action: 'Descargar',
    color: 'bg-orange-500',
  },
  {
    icon: Video,
    title: 'Series de Video',
    description: 'Accede a nuestras series de enseñanza completas.',
    action: 'Ver Series',
    color: 'bg-red-500',
  },
  {
    icon: Download,
    title: 'Materiales de Discipulado',
    description: 'Recursos para crecer en tu caminar con Cristo.',
    action: 'Descargar',
    color: 'bg-teal-500',
  },
];

export default function Resources() {
  return (
    <section id="recursos" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header with Image Accent */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] text-sm font-bold tracking-widest uppercase rounded-full mb-6">
              Recursos Gratuitos
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-8 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              HERRAMIENTAS PARA TU <br />
              <span className="text-[#c9a227]">CRECIMIENTO</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Creemos en el poder de la Palabra compartida. Por eso, hemos preparado una 
              biblioteca de recursos gratuitos para ayudarte a profundizar en tu estudio 
              bíblico personal y familiar.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/assets/resources-study.png" alt="Estudio Bíblico" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#1e3a5f]/5 rounded-full -z-10" />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative p-10 bg-white rounded-3xl border border-transparent hover:border-[#c9a227]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div
                className={`w-16 h-16 ${resource.color} rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/5`}
              >
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-[#1e3a5f] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {resource.title}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {resource.description}
              </p>
              <Button
                variant="outline"
                className="w-full border-[#1e3a5f]/20 text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white rounded-xl py-6 font-bold transition-all"
              >
                <Download className="w-5 h-5 mr-3" />
                {resource.action}
              </Button>
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#c9a227] group-hover:w-1/3 transition-all duration-500 rounded-t-full" />
            </div>
          ))}
        </div>

        {/* Newsletter Section - Premium Styling */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#12243a] rounded-[3rem] p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Visual Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#c9a227]/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-[60px]" />
            
            <div className="relative z-10">
              <h3
                className="text-3xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Suscríbete a nuestra <span className="text-[#c9a227]">comunidad</span>
              </h3>
              <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                Recibe semanalmente nuestras enseñanzas, recursos exclusivos e historia de 
                bendición directamente en tu bandeja de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto backdrop-blur-sm bg-white/5 p-2 rounded-2xl border border-white/10">
                <input
                  type="email"
                  placeholder="Tu mejor correo..."
                  className="flex-1 px-6 py-4 rounded-xl bg-transparent text-white placeholder:text-white/30 focus:outline-none"
                />
                <Button className="bg-[#c9a227] hover:bg-[#b8941f] text-[#1e3a5f] font-bold px-10 py-4 rounded-xl shadow-lg transition-transform active:scale-95">
                  UNIRME AHORA
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

