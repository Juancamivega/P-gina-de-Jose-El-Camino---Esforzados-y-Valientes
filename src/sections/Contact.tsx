import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 300 2050074',
    href: 'tel:+573002050074',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'juancamivega@gmail.com',
    href: 'mailto:juancamivega@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Neiva, Huila',
    href: '#',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Escríbenos',
    href: 'https://wa.me/573002050074',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm font-medium tracking-wider uppercase rounded-full mb-4">
            Contacto
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            ESTAMOS AQUÍ PARA TI
          </h2>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna pregunta o necesitas oración? Nos encantaría escucharte 
            y acompañarte en tu caminar con Dios.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3
                className="text-2xl font-bold text-[#1e3a5f] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                ENVÍANOS UN MENSAJE
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#1e3a5f] hover:bg-[#152a45] text-white py-4 text-base font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  ENVIAR MENSAJE
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3
                  className="text-2xl font-bold text-[#1e3a5f] mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  INFORMACIÓN DE CONTACTO
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#1e3a5f] transition-colors">
                        <item.icon className="w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="text-[#1e3a5f] font-medium group-hover:text-[#c9a227] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Scripture */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl">
                <p
                  className="text-white/90 italic text-lg"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  "Porque donde están dos o tres congregados en mi nombre, 
                  allí estoy yo en medio de ellos."
                </p>
                <p className="text-[#c9a227] mt-2 text-sm">Mateo 18:20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
