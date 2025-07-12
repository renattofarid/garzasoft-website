"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartPie, Database, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function GarzaSoftWebsite() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const productosRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Folder,
      title: "Desarrollo de software a medida",
      description:
        "Garzasoft se caracteriza por personalizar nuestras aplicaciones de software de acuerdo a las necesidades y expectativas del cliente. Contamos con amplia experiencia en el desarrollo de aplicaciones para el sector comercial, educativo, salud, gastronómico, hotelería, de servicios, productivo, entre otros. Nuestro personal analizará la situación actual de su empresa para lograr un diagnóstico situacional, luego de lo cual formulará propuestas para mejorar las cuales serán validadas por usted, y finalmente adecuar nuestra solución de software a su nuevo modelo de negocio, logrando su empresa el máximo rendimiento./*  */",
    },
    {
      icon: ChartPie,
      title: "Facturación Electrónica",
      description:
        "La Factura Electrónica es el comprobante de pago: Factura / Boleta / Nota de Crédito y Débito emitido desde los sistemas del contribuyente (cliente empresa) hacia el sistema de emisión electrónica de SUNAT. La Facturación Electrónica es obligada por SUNAT desde inicios de 2018 en un plan de implementación que incluirá a todas las empresas en 2020. Garzasoft pone a disposición de su empresa el desarrollo personalizado de un software de facturación electrónica desde el cual usted puede cumplir con la obligación de SUNAT a un precio mensual de 100.00 soles",
    },
    {
      icon: Database,
      title: "Asesoría y consultoría en usos de TI",
      description:
        "Garzasoft realiza el diagnóstico de la actualidad de su empresa, luego basado en nuestra experiencia en el sector y en el uso de las tecnologías de información, proponemos rediseños a los procesos, adquisiciones de tencología y desarrollos de software que brinden a su negocio las herramientas tecnológicas que aseguren el logro de sus metas.",
    },
  ];

  const productos = [
    {
      href: "https://www.gesrest.net/",
      name: "Gesrest",
      description: "Software para gestión de restaurantes",
      img: "/productos/Logo_Gesrest.png",
      alt: "Imagen Gesrest",
      target: "_blank",
    },
    {
      href: "https://www.hotelhub.com.pe/",
      name: "HotelHub",
      description: "Software para gestión de hoteles",
      img: "/productos/Logo_HotelHub.png",
      alt: "Imagen HotelHub",
      target: "_blank",
    },
    {
      href: "https://pulso-web-ten.vercel.app/",
      name: "Pulso",
      description: "Software para gestión de clínicas",
      img: "/productos/Logo_Pulso.png",
      alt: "Imagen Pulso",
      target: "_blank",
    },
    {
      href: "https://360sys.com.pe/",
      name: "360sys",
      description: "Software para gestión de empresas",
      img: "/productos/Logo_360.png",
      alt: "Imagen 360sys",
      target: "_blank",
    },
    {
      href: "https://comprobante-e.com/",
      name: "Comprobante-e",
      description: "Software para emisión de comprobantes electrónicos",
      img: "/productos/Logo_Comprobante.png",
      alt: "Imagen Comprobante-e",
      target: "_blank",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".product-card", {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: productosRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-brand-softGreen">
      <Header />
      <HeroSection title="Servicios" />

      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="w-full flex justify-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Nuestros servicios
            </h2>
          </div>

          <div
            ref={servicesRef}
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
              >
                <CardHeader className="flex flex-row items-center gap-2 p-2 md:p-6">
                  <service.icon className="size-6 md:size-12 text-brand-darkGreen" />
                  <h3 className="md:text-xl font-semibold !mt-0">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-2 md:p-6">
                  <p className="text-brand-gray text-sm md:text-base text-justify">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="my-16 py-16 relative">
        <Image
          src="/services/products.jpg"
          alt="Imagen de productos"
          fill
          className="z-0 object-cover opacity-70"
        />

        <div className="w-full flex justify-center mb-8 relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold text-white p-1 px-4 bg-brand-darkGreen mb-8 uppercase">
            Nuestros Productos
          </h2>
        </div>

        <div
          ref={productosRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 justify-center relative z-10 max-w-screen-xl mx-auto px-6"
        >
          {productos.map((producto, idx) => (
            <Link
              key={idx}
              href={producto.href}
              target={producto.target}
              className="product-card bg-black/70 p-4 flex gap-4 items-center justify-start"
            >
              <div className="relative size-14 md:size-20 aspect-square">
                <Image
                  src={producto.img}
                  alt={producto.alt}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <Separator className="h-full w-0.5 bg-brand-gray" />
              <span className="text-white text-sm md:text-lg">
                {producto.description}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
