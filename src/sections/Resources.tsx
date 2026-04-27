import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';



const driveResources = [
  {
    title: 'Estudios de la Parashá',
    description: 'Explora nuestros estudios sistemáticos de las porciones semanales de la Torá (Parashá), diseñados para revelar el carácter de Dios y su plan redentor.',
    image: '/assets/parasha.png',
    link: 'https://drive.google.com/drive/folders/1VY8s6DZSpkkxtc5eCT54uC138YUSA_sb?usp=sharing',
    contents: [
      'Bereshit (Génesis)',
      'Noaj (Noé)',
      'Lej Lejá (Vete)',
      'Vayerá (Y se apareció)',
      'Jayei Sarah (La vida de Sara)',
      'Toldot (Generaciones)',
      'Vayetzé (Y salió)',
      'Vayishláj (Y envió)',
      'Vayeshev (Y habitó)',
      'Vayigash (Y se acercó)',
      'Vayejí (Y vivió)',
      'Shemot (Nombres)',
      'Vaerá (Y aparecí a)',
      'Bo (Ven)'
    ],
  },
  {
    title: 'Enseñanzas Bíblicas',
    description: 'Colección de enseñanzas profundas sobre doctrinas, las fiestas del SEÑOR, y la identidad del creyente en el contexto bíblico original.',
    image: '/assets/ensenanzas.png',
    link: 'https://drive.google.com/drive/folders/1JGjjEuUFCjZBIekrLjtHeJK8RitfVgLF?usp=sharing',
    contents: [
      'El Shofar y el Espíritu',
      'Doctrinas Extrañas',
      'Identidad Perdida en Israel',
      'Yeshúa Junto a Dos Ladrones',
      'Cronología de la Redención',
      'El Misterio del Pan y Vino',
      'Santidad en la Unicidad',
      'Rosh Jodesh (Inicio de Mes)',
      'Fiesta de Sucot',
      'La Bendición del Shabat'
    ],
  }
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

        {/* Featured Drive Resources */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {driveResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden group flex flex-col border border-gray-100 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/40 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-3 py-1 bg-[#c9a227] text-[#1e3a5f] text-xs font-bold tracking-widest uppercase rounded-md mb-3">
                    Colección en Drive
                  </span>
                  <h3 className="text-3xl font-bold text-white drop-shadow-md leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {resource.title}
                  </h3>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {resource.description}
                </p>
                <div className="mb-10 flex-1">
                  <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-5 border-b border-gray-100 pb-3 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Contenido Disponible
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {resource.contents.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-500">
                        <span className="text-[#c9a227] mr-2 text-xl leading-none mt-[-2px]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto block"
                >
                  <Button className="w-full bg-[#1e3a5f] hover:bg-[#152a45] text-white py-7 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all group-hover:-translate-y-1">
                    ACCEDER A LA CARPETA
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
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

