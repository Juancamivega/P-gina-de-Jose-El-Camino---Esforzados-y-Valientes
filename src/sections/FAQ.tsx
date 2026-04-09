import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es El Camino?",
    answer: "El Camino es una comunidad dedicada a la enseñanza de la Palabra de Dios, enfocada en fortalecer la fe y el carácter de cada creyente a través de enseñanzas bíblicas profundas y prácticas.",
  },
  {
    question: "¿Dónde puedo ver las enseñanzas completas?",
    answer: "Nuestras enseñanzas se publican semanalmente en nuestro canal de YouTube y en nuestras redes sociales (Facebook e Instagram). Puedes encontrar los enlaces en la sección de 'Enseñanzas' de esta página.",
  },
  {
    question: "¿Cómo puedo participar o unirme?",
    answer: "¡Eres bienvenido! Puedes contactarnos a través del formulario al final de esta página o escribirnos directamente a nuestras redes sociales para obtener información sobre reuniones y actividades.",
  },
  {
    question: "¿Tienen material de estudio para descargar?",
    answer: "Sí, en la sección de 'Recursos' ofrecemos guías de estudio, notas de enseñanzas y materiales de discipulado de forma gratuita.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm font-medium tracking-wider uppercase rounded-full mb-4">
            Preguntas Frecuentes
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            RESOLVEMOS TUS DUDAS
          </h2>
          <p className="text-lg text-gray-600">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestra comunidad.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1e3a5f] hover:text-[#c9a227] hover:no-underline transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
