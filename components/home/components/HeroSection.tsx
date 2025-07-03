"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  // Hero section animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        const tl = gsap.timeline();

        tl.fromTo(
          ".hero-badge",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
          .fromTo(
            ".hero-title",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.5"
          )
          .fromTo(
            ".hero-description",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.7"
          )
          .fromTo(
            ".hero-image",
            { opacity: 0, scale: 0.8, x: 50 },
            { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power2.out" },
            "-=1"
          )
          .fromTo(
            ".hero-decorations",
            { opacity: 0, rotation: -10 },
            {
              opacity: 0.3,
              rotation: 0,
              duration: 1,
              ease: "power2.out",
              stagger: 0.2,
            },
            "-=0.8"
          );
      }
      return () => ctx.revert();
    });
  }, []);

  return (
    <section ref={heroRef} className="px-4 pt-40 relative">
      <Image
        src="/home/square-patron.png"
        alt="Professional businessman"
        fill
        quality={100}
        className="rounded-lg z-0"
      />
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-screen-xl mx-auto z-10 relative">
        <div>
          <p className="hero-badge text-brand-blue font-semibold mb-4 uppercase tracking-wide">
            <span>GARZA</span>
            <span className="text-brand-green">SOFT</span>
          </p>
          <h1 className="hero-title text-4xl lg:text-[52px] font-bold font-manrope text-brand-darkerGreen mb-6 leading-tight">
            Soluciones tecnológicas a medida para tu empresa.
          </h1>
          <p className="hero-description text-brand-gray mb-8 leading-relaxed">
            Transformamos tus procesos con software especializado en facturación
            electrónica, gestión empresarial, consultoría en TI y aplicaciones
            personalizadas. Eficiencia, innovación y tranquilidad garantizadas.
          </p>
        </div>

        <div className="relative hero-image z-10 flex justify-center">
          <Image
            src="/home/element1.svg"
            alt="Decorative element"
            width={215}
            height={159}
            className="rounded-lg absolute top-0 left-0 h-20 md:h-32 w-auto"
          />
          <Image
            src="/home/element2.svg"
            alt="Decorative element"
            width={100}
            height={100}
            className="rounded-lg absolute top-0 right-0 md:right-[20%]"
          />
          <Image
            src="/home/professional-businessman.png"
            alt="Professional businessman"
            width={350}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
