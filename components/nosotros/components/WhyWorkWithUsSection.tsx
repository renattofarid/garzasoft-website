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
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
      gravida libero. Donec lacinia, nisl at tincidunt pretium, massa sem
      ultrices erat, at sagittis nisi lorem ut metus.`,
    },
    {
      title: "Optimizamos sus procesos de negocio",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
      gravida libero. Donec lacinia, nisl at tincidunt pretium, massa sem
        ultrices erat, at sagittis nisi lorem ut metus.`,
    },
    {
      title:
        "Brindamos herramientas para que realice control sobre sus recursos",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
      gravida libero. Donec lacinia, nisl at tincidunt pretium, massa sem
        ultrices erat, at sagittis nisi lorem ut metus.`,
    },
    {
      title:
        "Contamos con un grupo humano con más de una década de experiencia en el sector",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
      gravida libero. Donec lacinia, nisl at tincidunt pretium, massa sem
        ultrices erat, at sagittis nisi lorem ut metus.`,
    },
    {
      title: "Nuestros precios se adaptan al mercado",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
      gravida libero. Donec lacinia, nisl at tincidunt pretium, massa sem
        ultrices erat, at sagittis nisi lorem ut metus.`,
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
    <section className="py-16 bg-brand-softGreen">
      <div className="max-w-screen-xl mx-auto px-6 relative">
        <Wifi className="absolute bottom-0 -rotate-45 left-0 w-80 h-80 text-brand-darkGreen opacity-20" />
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
                    className={`cursor-pointer p-6 w-full transition-colors duration-300 border-b`}
                    role="button"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            isOpen ? "text-brand-amber" : ""
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3
                          className={`text-xl font-medium text-left ${
                            isOpen ? "text-brand-amber" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {isOpen ? (
                        <CircleMinus className="w-5 h-5 text-brand-amber" />
                      ) : (
                        <CirclePlus className="w-5 h-5 text-brand-amber" />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="mt-4 pl-12 pr-4 text-sm text-gray-600 rounded-b-lg"
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
