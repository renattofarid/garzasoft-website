"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useEffect, useRef } from "react";
import ClientsPage from "./components/clients";
import HeroSection from "@/components/HeroSection";
import { CloudCog, Database, Rocket, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CLIENT_ISSUES_ICONS = [
  {
    Icon: CloudCog,
    label: "Problemas con el uso de sus sistemas informáticos",
  },
  {
    Icon: Rocket,
    label: "Uso poco adecuado de sus recursos",
  },
  {
    Icon: Database,
    label: "Guardan muchos datos pero no lo analizan.",
  },
  {
    Icon: TrendingUp,
    label: "Necesidad de productividad.",
  },
];

function ClientPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full">
      <Header />
      <HeroSection title="Nuestros clientes" />
      <div
        ref={sectionRef}
        className="flex min-h-screen flex-col items-center py-10 px-4 md:p-12 bg-brand-softGreen relative"
      >
        {/* Mobile */}
        <div className="block md:hidden fade-in">
          <h1 className="text-brand-darkGreen text-center font-bold text-2xl">
            Nuestros clientes
          </h1>
          <p className="text-brand-darkGreen text-center font-light pt-5 pb-5 md:pb-10 text-sm md:text-base">
            En Garzasoft, contamos con más de 20 años de experiencia en el
            desarrollo de software, brindando soluciones innovadoras y
            personalizadas para todo tipo de negocios.
          </p>
          <p className="text-brand-darkGreen text-center font-normal pb-5">
            Más de{" "}
            <span className="text-brand-blue font-bold italic">
              300 empresas
            </span>{" "}
            confían en nosotros!
          </p>
        </div>

        <div className="grid md:hidden grid-cols-6 gap-3 justify-items-center fade-in">
          <div className="col-span-6 md:col-span-3 flex flex-col items-center justify-center">
            <p className="text-brand-darkGreen text-center font-bold text-lg">
              ¿Qué tenían en común <br /> estas empresas?
            </p>
          </div>

          {CLIENT_ISSUES_ICONS.map(({ Icon, label }, idx) => (
            <div
              key={idx}
              className={`col-span-3 md:col-span-${
                idx === 0 ? 3 : 2
              } p-3 h-full rounded-lg bg-[#D1EDEB] flex flex-col items-center self-start`}
            >
              <Icon className="size-20 text-brand-green" />
              <p className="text-xs font-semibold pt-2 text-brand-darkGreen text-center">
                {label}
              </p>
            </div>
          ))}

          <div className="col-start-1 col-span-6 md:col-span-4">
            <p className="text-brand-darkGreen text-left font-bold text-2xl pt-6">
              Clientes Garzasoft
            </p>
            <p className="text-brand-darkGreen text-left text-sm font-light pt-5 pb-5">
              Estos son algunos de los clientes que han confiado en{" "}
              <span className="text-brand-blue font-bold">Garzasoft</span> para
              llevar sus negocios al siguiente nivel.
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-6 gap-10 max-w-screen-xl mx-auto fade-in">
          <div className="col-span-4">
            <p className="text-brand-darkGreen text-center font-bold pt-10 pb-5">
              Más de{" "}
              <span className="text-brand-blue italic">300 empresas</span>{" "}
              confían en nosotros!
            </p>
            <p className="text-brand-darkGreen text-center font-medium text-5xl">
              ¿Qué tenían en común <br /> estas empresas?
            </p>
          </div>

          {CLIENT_ISSUES_ICONS.map(({ Icon, label }, idx) => (
            <div
              key={idx}
              className="col-span-2 p-8 h-full rounded-lg bg-[#D1EDEB] flex flex-col gap-4 items-center self-start"
            >
              <Icon className="size-20 text-brand-green" />
              <p className="text-2xl font-semibold pt-2 text-brand-darkerGreen text-center">
                {label}
              </p>
            </div>
          ))}

          <div className="col-start-1 col-span-4">
            <p className="text-brand-darkGreen text-left font-medium text-5xl">
              Clientes Garzasoft
            </p>
            <p className="text-brand-darkGreen text-left font-light pt-10 pb-5">
              Estos son algunos de los clientes que han confiado en{" "}
              <span className="text-brand-blue font-bold">Garzasoft</span> para
              llevar sus negocios al siguiente nivel.
            </p>
          </div>
        </div>

        <ClientsPage />
      </div>
      <Footer />
    </main>
  );
}

export default ClientPage;
