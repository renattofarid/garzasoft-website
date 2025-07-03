"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 300, label: "Proyectos Completados" },
  { value: 150, label: "Clientes Satisfechos" },
  { value: 20, label: "Años de Experiencia" },
  { value: 15, label: "Rubros Atendidos" },
];

export default function StatsSection() {
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statsRef.current) {
        gsap.fromTo(
          ".stat-item",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              end: "bottom 20%",
            },
          }
        );

        STATS.forEach((stat, index) => {
          const counter = { value: 0 };
          gsap.to(counter, {
            value: stat.value,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
            onUpdate: () => {
              const element = document.querySelector(`.counter-${index}`);
              if (element) {
                element.textContent = Math.round(counter.value) + "+";
              }
            },
          });
        });
      }
      return () => ctx.revert();
    });
  }, []);

  return (
    <section ref={statsRef} className="bg-brand-darkGreen py-16 relative">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`stat-item relative md:border-l border-white/20 first:border-none px-4`}
            >
              {/* Rombos decorativos solo si no es el primer ítem */}
              {idx !== 0 && (
                <>
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 md:size-1.5 bg-white/40 rotate-45 rounded-none" />
                  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 md:size-1.5 bg-white/40 rotate-45 rounded-none" />
                </>
              )}
              <h3
                className={`counter-${idx} text-4xl lg:text-6xl font-bold text-white mb-2`}
              >
                0+
              </h3>
              <p className="text-brand-amber font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-12 absolute bottom-0 w-full">
        <Image
          src="/stats/dots.png"
          alt="Decorative element"
          fill
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
