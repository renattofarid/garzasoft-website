"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CircleMinus, CirclePlus, Wifi } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function WhyWorkWithUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = [
    {
      title:
        "Solucionamos sus problemas mediante el correcto uso de las Tecnologías de Información",
      content: `Aplicamos nuestro conocimiento en tecnologías de la información para resolver de forma efectiva los desafíos que enfrenta su empresa, desarrollando soluciones prácticas, escalables y adaptadas a su realidad operativa.`,
    },
    {
      title: "Optimizamos sus procesos de negocio",
      content: `Analizamos, rediseñamos y automatizamos sus procesos clave para que su empresa funcione con mayor eficiencia, reduciendo tiempos, costos y errores, y permitiéndole enfocarse en lo que realmente importa: crecer.`,
    },
    {
      title:
        "Brindamos herramientas para que realice control sobre sus recursos",
      content: `Ponemos a su disposición soluciones tecnológicas que le permiten monitorear, analizar y gestionar sus recursos con precisión, promoviendo una toma de decisiones informada y en tiempo real.`,
    },
    {
      title:
        "Contamos con un grupo humano con más de una década de experiencia en el sector",
      content: `Nuestro equipo está formado por profesionales con amplia trayectoria en el desarrollo e implementación de software empresarial, lo que garantiza un acompañamiento experto en cada etapa de su proyecto.`,
    },
    {
      title: "Nuestros precios se adaptan al mercado",
      content: `Ofrecemos soluciones con una excelente relación calidad-precio, adecuándonos a las posibilidades de su empresa sin comprometer la calidad del servicio ni el alcance de nuestras soluciones.`,
    },
  ];

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      gsap.fromTo(
        contentRefs.current[openIndex],
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
  }, [openIndex]);

  return (
    <section className="pb-16 md:py-16 bg-brand-softGreen">
      <div className="max-w-screen-xl mx-auto px-6 relative">
        <Wifi className="absolute hidden md:block bottom-0 -rotate-45 left-0 w-80 h-80 text-brand-darkGreen opacity-20" />
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          ¿Por qué trabajar con nosotros?
        </h2>

        <div className="space-y-4 max-w-screen-md mx-auto">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Collapsible
                key={index}
                open={isOpen}
                onOpenChange={(open) => setOpenIndex(open ? index : null)}
              >
                <CollapsibleTrigger asChild>
                  <div
                    className={`cursor-pointer md:p-6 w-full transition-colors duration-300 border-b`}
                    role="button"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`min-w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            isOpen ? "text-brand-amber" : ""
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3
                          className={`md:text-xl font-medium text-left ${
                            isOpen ? "text-brand-amber" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {isOpen ? (
                        <CircleMinus className="min-w-5 h-5 text-brand-amber" />
                      ) : (
                        <CirclePlus className="min-w-5 h-5 text-brand-amber" />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="mt-4 pl-12 pr-4 text-xs md:text-sm text-gray-600 rounded-b-lg"
                  >
                    {item.content}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
