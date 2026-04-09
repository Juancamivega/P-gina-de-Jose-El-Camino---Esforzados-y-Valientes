import { Facebook, Instagram, Heart, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61580457726907',
    color: 'bg-[#1877F2]',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/keilaelcamino',
    color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
  },
];

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Enseñanzas', href: '#ensenanzas' },
  { name: 'Recursos', href: '#recursos' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span
                  className="text-2xl font-bold tracking-wide"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  EL CAMINO
                </span>
                <span className="text-xs uppercase tracking-wider text-[#c9a227] ml-2">
                  Esforzados y Valientes
                </span>
              </div>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                Un ministerio cristiano dedicado a edificar vidas a través de la 
                enseñanza de la Palabra de Dios. Únete a nosotros en este camino 
                de fe y valentía.
              </p>
              <div className="flex space-x-4 mb-8 lg:mb-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#c9a227]">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#c9a227] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#c9a227]">
                Síguenos
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61580457726907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#c9a227] transition-colors flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/keilaelcamino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#c9a227] transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/17864998073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#c9a227] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} El Camino - Esforzados y Valientes. 
              Todos los derechos reservados.
            </p>
            <p className="text-white/50 text-sm flex items-center">
              Hecho con <Heart className="w-4 h-4 mx-1 text-[#c9a227]" /> para la 
              gloria de Dios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
