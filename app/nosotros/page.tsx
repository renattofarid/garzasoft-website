"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import WhyWorkWithUsSection from "@/components/nosotros/components/WhyWorkWithUsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Globe, Crown, Award, Gem } from "lucide-react";
import Image from "next/image";

export default function PageF() {
  const sectionRef = useRef(null);
  const teamRef = useRef(null);

  const teamMembers = [
    {
      img: "/aboutus/Gilberto.jpg",
      name: "Gilberto Martin Ampuero Pasco",
      rol: "CEO Fundador - Director General",
      items: [
        "Magister en Ciencias con Mención en Ingeniería de Sistemas",
        "Especialista en tecnología y desarrollo de software, con amplia experiencia en soluciones empresariales.",
      ],
    },
    {
      img: "/aboutus/Jose.jpg",
      name: "José Alexander Samamé Nizama",
      rol: "Líder de Proyectos de Desarrollo de Software",
      items: [
        "Experto en gestión de proyectos, análisis de requisitos, arquitectura de software y metodologías ágiles.",
      ],
    },
    {
      img: "/aboutus/Renatto.jpg",
      name: "Renatto Farid Perleche Alvitez",
      rol: "Líder Técnico Front-End y UX/UI",
      items: [
        "Responsable de la dirección técnica y estratégica de proyectos front-end, así como de la gestión de recursos relacionados con la experiencia de usuario (UX) y diseño de interfaces (UI).",
      ],
    },
    {
      img: "/aboutus/Sergio.jpg",
      name: "Sergio Huamán Gavidia",
      rol: "Proyectos de Automatización de Procesos.",
      items: [
        "Experto en Automatización, diseño por gestión de procesos, Orquestación, mejora continua de soluciones.",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".team-member", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection title="Nosotros" />

      <section className="py-16 bg-brand-softGreen" ref={sectionRef}>
        <div className="max-w-screen-xl mx-auto px-6 fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Quienes Somos
              </h2>
              <Tabs defaultValue="mision" className="mb-8">
                <TabsList className="grid w-full grid-cols-3 bg-white">
                  <TabsTrigger
                    value="mision"
                    className="data-[state=active]:bg-brand-amber data-[state=active]:text-white"
                  >
                    Misión
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:bg-brand-amber data-[state=active]:text-white"
                    value="vision"
                  >
                    Visión
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:bg-brand-amber data-[state=active]:text-white"
                    value="valores"
                  >
                    Valores
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="mision" className="mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    Somos una empresa líder dedicada al desarrollo de software y
                    soluciones tecnológicas para las empresas, brindando un
                    soporte de calidad con profesionales calificados,
                    manteniendo así la confianza en nuestra empresa con
                    oportunidades de crecimiento para la sociedad.
                  </p>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="min-w-3 min-h-3 aspect-square text-white" />
                      </div>
                      <span className="text-gray-700">
                        Contamos con un equipo de profesionales altamente
                        calificados.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="min-w-3 min-h-3 aspect-square text-white" />
                      </div>
                      <span className="text-gray-700">
                        Ofrecemos soluciones tecnológicas personalizadas para
                        cada cliente.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="min-w-3 min-h-3 aspect-square text-white" />
                      </div>
                      <span className="text-gray-700">
                        Nuestro compromiso es brindar un soporte técnico de
                        calidad.
                      </span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="vision" className="mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    Ser una empresa líder en el sector de la tecnología con
                    software de última generación para las empresas, con un
                    soporte técnico garantizado de la mano con el talento
                    profesional calificado satisfaciendo las necesidades de
                    nuestros clientes.
                  </p>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="min-w-3 min-h-3 aspect-square text-white" />
                      </div>
                      <span className="text-gray-700">
                        Contamos con un equipo de profesionales altamente
                        calificados.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="min-w-3 min-h-3 aspect-square text-white" />
                      </div>
                      <span className="text-gray-700">
                        Ofrecemos soluciones tecnológicas personalizadas para
                        cada cliente.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="min-w-3 min-h-3 aspect-square text-white" />
                      </div>
                      <span className="text-gray-700">
                        Nuestro compromiso es brindar un soporte técnico de
                        calidad.
                      </span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="valores" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Globe,
                        title: "Compromiso",
                        description:
                          "Nos dedicamos a cumplir con excelencia cada proyecto asegurando resultados que superen las expectativas de nuestros clientes.",
                      },
                      {
                        icon: Gem,
                        title: "Responsabilidad",
                        description:
                          "Asumimos con seriedad nuestras obligaciones, garantizando la calidad y puntualidad en nuestras energías.",
                      },
                      {
                        icon: Crown,
                        title: "Sociabilidad",
                        description:
                          "Promovemos un ambiente colaborativo y cercano, tanto con nuestros clientes como dentro de nuestro equipo de trabajo.",
                      },
                      {
                        icon: Award,
                        title: "Lealtad",
                        description:
                          "Fomentamos relaciones duraderas basadas en la confianza y el respeto mutuo.",
                      },
                    ].map((valor, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-start gap-2 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <div className="flex gap-3 items-center">
                          <valor.icon className="w-8 h-8 text-brand-darkGreen" />
                          <h4 className="font-semibold text-brand-darkGreen">
                            {valor.title}
                          </h4>
                        </div>
                        <div>
                          <p className="text-gray-700 text-sm">
                            {valor.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="relative h-full w-full fade-in">
              <Image
                src="/aboutus/image1.png"
                alt="Professional with laptop"
                fill
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <WhyWorkWithUsSection />

      <section className="pb-16 md:py-16 bg-brand-softGreen" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <p className="text-[#006d5b] font-semibold mb-2">NUESTRO EQUIPO</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Miembros del equipo de expertos
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo está formado por profesionales altamente
              cualificados y apasionados por la tecnología.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((_, idx) => (
              <Card
                key={idx}
                className="text-center overflow-hidden team-member"
              >
                <CardContent className="p-0">
                  <div className="bg-white w-full aspect-[3/4] flex items-center justify-center relative">
                    <Image
                      src={`${_.img}`}
                      alt={_.name}
                      className="object-cover rounded-xl p-4"
                      fill
                    />
                  </div>
                  <div className="pl-4 p-4 w-4/5 -mt-10 relative z-20 bg-white rounded-lg mr-auto">
                    <h3 className="font-semibold text-gray-900 mb-1 w-full text-start">
                      {_.name}
                    </h3>
                    <p className="text-brand-amber font-medium text-xs w-full text-start">
                      {_.rol}
                    </p>
                  </div>

                  <div className="list-disc p-4 pt-0 list-inside text-gray-700 text-xs text-start space-y-1">
                    {_.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
