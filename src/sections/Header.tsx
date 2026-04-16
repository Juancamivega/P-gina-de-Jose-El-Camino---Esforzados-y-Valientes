import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

const navLinks = [
  { name: 'INICIO', href: '#inicio' },
  { name: 'NOSOTROS', href: '#nosotros' },
  { name: 'ENSEÑANZAS', href: '#ensenanzas' },
  { name: 'RECURSOS', href: '#recursos' },
  { name: 'FAQ', href: '#faq' },
  { name: 'CONTACTO', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-2">
            <span
              className={`text-xl lg:text-2xl font-bold tracking-wide transition-colors ${
                isScrolled ? 'text-[#1e3a5f]' : 'text-white'
              }`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              EL CAMINO
            </span>
            <span
              className={`text-xs lg:text-sm uppercase tracking-wider transition-colors ${
                isScrolled ? 'text-[#c9a227]' : 'text-[#c9a227]'
              }`}
            >
              Esforzados y Valientes
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all hover:scale-105 ${
                  isScrolled
                    ? 'text-[#1e3a5f] hover:text-[#c9a227]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#whatsapp"
              className="flex items-center space-x-2"
            >
              <Button
                className="transition-all bg-[#25D366] hover:bg-[#20b858] text-white font-bold shadow-md hover:shadow-lg"
              >
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.466.668 4.777 1.832 6.763L2 30l7.41-1.811A13.935 13.935 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm-3.55 7.59c-.33-.735-.675-.75-1.006-.763-.26-.011-.556-.01-.853-.01-.296 0-.777.111-1.183.556-.406.444-1.553 1.516-1.553 3.697 0 2.18 1.59 4.289 1.812 4.587.222.296 3.087 4.895 7.573 6.659 3.745 1.477 4.5 1.182 5.312 1.108.814-.074 2.626-1.074 2.996-2.11.37-1.037.37-1.927.26-2.111-.112-.185-.408-.296-.852-.519-.444-.222-2.625-1.295-3.031-1.443-.407-.148-.703-.222-.999.222-.296.445-1.146 1.443-1.405 1.739-.258.296-.517.333-.96.111-.444-.222-1.875-.691-3.572-2.204-1.32-1.178-2.212-2.633-2.47-3.077-.259-.444-.028-.685.194-.906.2-.199.445-.518.667-.777.222-.26.296-.444.444-.74.148-.296.074-.556-.037-.777-.11-.222-1.002-2.404-1.378-3.289Z" fill="white"/>
                </svg>
                WHATSAPP
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? 'text-[#1e3a5f]' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? 'text-[#1e3a5f]' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-[#1e3a5f] hover:text-[#c9a227] hover:bg-[#1e3a5f]/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/573002050074"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button className="w-full bg-[#1e3a5f] hover:bg-[#152a45] text-white">
                <Phone className="w-4 h-4 mr-2" />
                CONTACTO
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
