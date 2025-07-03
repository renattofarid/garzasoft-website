"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const aboutRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section animations
      if (aboutRef.current) {
        gsap.fromTo(
          ".about-image",
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          ".about-content",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          ".contact-form",
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <section ref={aboutRef} className="py-16 bg-[#edf5f4]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="about-image relative w-full h-full">
            <Image
              src="/aboutus/team.jpg"
              alt="Team working together"
              className="rounded-lg object-cover"
              fill
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-10 justify-between h-full py-16">
            <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="about-content">
                <h2 className="text-3xl font-bold text-[#041b16] mb-6">
                  Sobre Nosotros
                </h2>
                <p className="text-[#737373] mb-4 text-justify">
                  Somos{" "}
                  <span className="text-brand-blue font-semibold">
                    GarzaSoft
                  </span>
                  , tu socio estratégico en tecnología, enfocados en implementar
                  herramientas informáticas diseñadas para optimizar recursos y
                  maximizar resultados. Con amplia trayectoria en diversos
                  sectores, nos comprometemos con tu éxito.
                </p>
                <Button className="bg-brand-amber hover:bg-brand-amber/90 text-white rounded-full px-6 animated-button">
                  Conocer más
                </Button>
              </div>

              <div className="relative h-full w-full">
                <Image
                  src="/aboutus/pc.jpg"
                  alt="Computer setup with code"
                  className="rounded-lg object-cover"
                  fill
                />
              </div>
            </div>

            <div className="flex justify-end w-ful">
              <div className="w-1/2">
                <h3 className="text-sm font-semibold text-[#041b16] mb-4">
                  Contáctanos
                </h3>
                <form className="flex gap-4">
                  <div className="flex flex-col w-full gap-1">
                    <Input
                      placeholder="Ingresa tu e-mail aquí"
                      className="w-full"
                      type="email"
                      onChange={(e) =>
                        localStorage.setItem("correo", e.target.value)
                      }
                    />
                    <span className="text-xs text-muted-foreground">
                      Nos pondremos en contacto.
                    </span>
                  </div>
                  <Link href={"/contacto"}>
                    <Button className="w-fit px-6 bg-brand-amber hover:bg-brand-amber/90 text-white animated-button">
                      Continuar
                    </Button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
