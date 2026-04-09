import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'INICIO', href: '#inicio' },
  { name: 'ENSEÑANZAS', href: '#ensenanzas' },
  { name: 'RECURSOS', href: '#recursos' },
  { name: 'FAQ', href: '#faq' },
  { name: 'NOSOTROS', href: '#nosotros' },
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
              href="https://wa.me/573002050074"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Button
                className={`transition-all ${
                  isScrolled
                    ? 'bg-[#1e3a5f] hover:bg-[#152a45] text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                CONTACTO
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
