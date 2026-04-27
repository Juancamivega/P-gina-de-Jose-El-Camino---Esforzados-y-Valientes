import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const WHATSAPP_NUMBER = '573002050074';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20la%20comunidad%20El%20Camino.`;

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
    value: 'Keilaelcamino@gmail.com',
    href: 'mailto:Keilaelcamino@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Neiva, Huila',
    href: '#',
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
    <>
      {/* ── WhatsApp Hero CTA ─────────────────────────────── */}
      <section
        id="whatsapp"
        className="py-20 relative overflow-hidden bg-gradient-to-br from-[#075E54] via-[#128C7E] to-[#25D366]"
      >
        {/* decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto text-center">
          {/* Icon badge */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/30">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 2C8.268 2 2 8.268 2 16c0 2.466.668 4.777 1.832 6.763L2 30l7.41-1.811A13.935 13.935 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm-3.55 7.59c-.33-.735-.675-.75-1.006-.763-.26-.011-.556-.01-.853-.01-.296 0-.777.111-1.183.556-.406.444-1.553 1.516-1.553 3.697 0 2.18 1.59 4.289 1.812 4.587.222.296 3.087 4.895 7.573 6.659 3.745 1.477 4.5 1.182 5.312 1.108.814-.074 2.626-1.074 2.996-2.11.37-1.037.37-1.927.26-2.111-.112-.185-.408-.296-.852-.519-.444-.222-2.625-1.295-3.031-1.443-.407-.148-.703-.222-.999.222-.296.445-1.146 1.443-1.405 1.739-.258.296-.517.333-.96.111-.444-.222-1.875-.691-3.572-2.204-1.32-1.178-2.212-2.633-2.47-3.077-.259-.444-.028-.685.194-.906.2-.199.445-.518.667-.777.222-.26.296-.444.444-.74.148-.296.074-.556-.037-.777-.11-.222-1.002-2.404-1.378-3.289Z"
                  fill="#25D366"
                />
              </svg>
            </div>
          </div>

          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-sm">
            Contacto Directo
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight drop-shadow"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            ¡CHATEA CON NOSOTROS <br />
            <span className="text-white/80">AHORA!</span>
          </h2>

          <p className="text-white/85 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Estamos a un mensaje de distancia. Escríbenos por WhatsApp y con gusto te acompañamos en tu caminar espiritual.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-cta-btn"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#075E54] font-black text-xl rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
            Chatea con nosotros ahora
          </a>

          <p className="mt-5 text-white/60 text-sm tracking-wide">
            +57 300 2050074 · Respuesta rápida garantizada
          </p>
        </div>
      </section>

      {/* ── Contact Form / Info ───────────────────────────── */}
      <section id="contacto" className="py-20 lg:py-32 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm font-medium tracking-wider uppercase rounded-full mb-4">
              Más formas de contacto
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
                  <div className="space-y-4">
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

                    {/* WhatsApp inline card */}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:shadow-md hover:bg-[#25D366]/20 transition-all group"
                    >
                      <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center mr-4 shadow">
                        <MessageCircle className="w-6 h-6 text-white fill-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">WhatsApp</p>
                        <p className="text-[#075E54] font-bold group-hover:text-[#128C7E] transition-colors">
                          Escríbenos ahora →
                        </p>
                      </div>
                    </a>
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
    </>
  );
}
