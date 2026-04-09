import { ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 transform scale-105 hover:scale-100"
        style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/90 via-[#1e3a5f]/60 to-[#1e3a5f]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Welcome Message */}
          <div className="mb-8 animate-fade-in-down">
            <span className="inline-block px-4 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full text-[#ffd75e] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
              Bienvenidos a nuestra comunidad
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            GRACIAS POR VISITAR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] via-[#f1d06e] to-[#c9a227]">
              NUESTRA PÁGINA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Esperamos que este espacio sea una fuente de 
            <span className="font-semibold text-white"> bendición y crecimiento </span> 
            espiritual para tu vida.
          </p>

          {/* Scripture Reference with Premium Styling */}
          <div className="mb-14 relative inline-block">
            <div className="absolute -inset-4 bg-[#c9a227]/10 blur-xl rounded-full" />
            <div className="relative">
              <p
                className="text-3xl sm:text-4xl md:text-5xl text-[#f1d06e] font-bold italic mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "Esfuérzate y sé valiente"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-8 bg-[#c9a227]/40" />
                <p className="text-white/60 text-xs sm:text-sm tracking-[0.3em] font-medium uppercase">
                  JOSUÉ 1:9
                </p>
                <div className="h-[1px] w-8 bg-[#c9a227]/40" />
              </div>
            </div>
          </div>

          {/* CTA Buttons - Premium Variant */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#ensenanzas" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto min-w-[240px] h-[72px] bg-[#c9a227] hover:bg-[#b8941f] text-[#1e3a5f] font-black px-10 text-lg rounded-full shadow-[0_10px_30px_-10px_rgba(201,162,39,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                <Play className="w-6 h-6 mr-3 fill-current" />
                VER ENSEÑANZAS
              </Button>
            </a>
            <a href="#nosotros" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[240px] h-[72px] border-[#c9a227] bg-black/20 text-white hover:bg-[#c9a227]/20 px-10 text-lg rounded-full backdrop-blur-md transition-all hover:border-[#ffd75e] hover:text-[#ffd75e] flex items-center justify-center"
              >
                CONÓCENOS
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-white/30 text-[9px] tracking-[0.3em] font-bold uppercase">Descubrir</span>
        <a href="#nosotros" className="text-white/40 hover:text-[#c9a227] transition-all transform hover:translate-y-1">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Subtle Light Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a227]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1e3a5f]/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
    </section>
  );
}

