"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: "gesrest",
    name: "GESREST",
    quantity: 150,
    description: "Software para gestión de restaurantes",
    caption:
      "Nuestra plataforma GESREST está disponible para venta en salón, venta por Delivery, venta por aplicativo, considerando ingresos por pago en efectivo, tarjeta, transferencia, billeteras digitales.",
    image: "/productos/gesrest.png",
    href: "https://www.gesrest.net/",
    highlightColor: "#fe6055",
    badgeColor: "#fe6055",
  },
  {
    id: "360sys",
    name: "360Sys",
    quantity: 60,
    description: "Sistema de gestión empresarial",
    caption:
      "La plataforma que facilita la atención en tu Punto de Venta. Ideal para mini mercado, ferretería, farmacia, panadería, heladería y similares",
    image: "/productos/360sys.png",
    href: "https://360sys.com.pe/",
    highlightColor: "#3dd22d",
    badgeColor: "#3dd22d",
  },
  {
    id: "hotelhub",
    name: "Hotel HUB",
    quantity: 20,
    description: "Plataforma de gestión hotelera",
    caption:
      "Hotel HUB es una plataforma tecnológica integral desarrollada para lograr la mejor experiencia del huésped en tu alojamiento.",
    image: "/productos/hotelhub.png",
    href: "https://www.hotelhub.com.pe/",
    highlightColor: "#0a88cd",
    badgeColor: "#0a88cd",
  },
  {
    id: "pulsoplus",
    name: "Pulso Plus",
    quantity: 20,
    description: "Sistema de gestión de salud",
    caption:
      "Pulso+ es una plataforma tecnológica integral desarrollada para mejorar la calidad de vida de millones de personas y familias a través de la gestión de datos y la automatización de procesos en empresas dedicadas al servicio de salud.",
    image: "/productos/pulsoplus.png",
    href: "https://pulso-web-ten.vercel.app/",
    highlightColor: "#112464",
    badgeColor: "#112464",
  },
  {
    id: "comprobantee",
    name: "Comprobante-e",
    quantity: 30,
    description: "Generador de comprobantes electrónicos",
    caption:
      "Emite tus facturas y boletas electrónicas con seguridad, sin contratiempos y desde cualquier lugar.",
    image: "/productos/comprobantee.png",
    href: "https://comprobante-e.com/",
    highlightColor: "#cd3b27",
    badgeColor: "#cd3b27",
  },
];

export default function Page() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, i) => {
        if (!section) return;

        const fromX = i % 2 === 0 ? -100 : 100;

        gsap.fromTo(
          section.querySelector(".product-content"),
          { opacity: 0, x: fromX },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          section.querySelector(".product-image"),
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection title="Productos" />

      {PRODUCTS.map((product, i) => (
        <section
          key={product.id}
          ref={(el) => {
            sectionsRef.current[i] = el;
          }}
          className="bg-[#edf5f4] py-16 px-4 border-b border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="product-content">
                <div
                  className="font-semibold text-sm uppercase tracking-wide mb-4"
                  style={{ color: product.highlightColor }}
                >
                  {product.name}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
                  {product.description.split(":")[0]}
                </h2>

                <p className="text-[#6e7676] text-lg leading-relaxed mb-8">
                  {product.caption}
                </p>

                <Link href={product.href} target="_blank">
                  <Button
                    className={cn(
                      "text-black font-semibold px-8 py-3 rounded-lg flex items-center gap-2",
                      product.highlightColor && "border-2 border-solid"
                    )}
                    style={{
                      borderColor: product.highlightColor,
                      backgroundColor: product.highlightColor,
                      color: "#ffffff",
                    }}
                  >
                    Visitar {product.name}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="relative product-image">
                <div className="relative mx-auto w-80">
                  <Iphone15Pro className="size-full" src={product.image} />
                  <div
                    className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-2"
                    style={{ borderColor: product.badgeColor }}
                  >
                    <div className="text-sm text-center">
                      <div className="text-gray-600">
                        Más de {product.quantity} usuarios confían en
                      </div>
                      <div
                        className="font-bold"
                        style={{ color: product.badgeColor }}
                      >
                        {product.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
