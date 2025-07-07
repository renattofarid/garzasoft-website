"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Check, Database, PieChart } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [sector, setSector] = useState<"public" | "private">("public");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [sector]);

  return (
    <div className="min-h-screen bg-brand-softGreen">
      <Header />
      <HeroSection title="Experiencia" />

      <main className="bg-brand-softGreen py-16">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-2 mb-8">
                <button
                  onClick={() => setSector("public")}
                  className={`w-full px-4 py-3 rounded-lg text-left flex items-center space-x-3 ${
                    sector === "public"
                      ? "bg-brand-darkGreen text-brand-softGreen"
                      : "bg-transparent text-brand-gray hover:bg-white transition-colors"
                  }`}
                >
                  <Database className="size-4" />
                  <span>Sector público</span>
                </button>

                <button
                  onClick={() => setSector("private")}
                  className={`w-full px-4 py-3 rounded-lg text-left flex items-center space-x-3 ${
                    sector === "private"
                      ? "bg-brand-darkGreen text-brand-softGreen"
                      : "bg-transparent text-brand-gray hover:bg-white transition-colors"
                  }`}
                >
                  <PieChart className="size-4" />
                  <span>Sector privado</span>
                </button>
              </div>

              {/* Contact Form */}
              <div className="rounded-lg py-6 hidden lg:block">
                <h3 className="text-black text-xl font-semibold mb-4">
                  Contáctanos
                </h3>
                <form className="space-y-4">
                  <Input
                    placeholder="Razón Social"
                    className="border-none focus:border-brand-darkGreen"
                    onChange={(e) =>
                      localStorage.setItem("razon_social", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Correo"
                    type="email"
                    className="border-none focus:border-brand-darkGreen"
                    onChange={(e) =>
                      localStorage.setItem("correo", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Teléfono"
                    className="border-none focus:border-brand-darkGreen"
                    onChange={(e) =>
                      localStorage.setItem("telefono", e.target.value)
                    }
                  />
                  <Textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="border-none focus:border-brand-darkGreen resize-none"
                    onChange={(e) =>
                      localStorage.setItem("mensaje", e.target.value)
                    }
                  />
                  <Link href={"/contacto"}>
                    <Button className="w-full mt-4 bg-brand-amber hover:bg-brand-amber text-white">
                      Continuar
                    </Button>
                  </Link>
                </form>
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="lg:col-span-3">
              <div
                ref={contentRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {sector === "public" ? (
                  <>
                    <div>
                      <h2 className="text-black text-2xl font-bold mb-4">
                        Nuestra experiencia en el sector público
                      </h2>
                      <p className="text-brand-gray mb-6 leading-relaxed">
                        Hemos trabajado con organismos estatales, municipales y
                        educativos brindando soluciones integrales.
                      </p>
                      <div className="space-y-3">
                        {[
                          "Gestión documental para gobiernos locales",
                          "Plataformas de control presupuestal",
                          "Portales institucionales accesibles",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-fit aspect-square p-0.5 bg-brand-amber rounded-full flex-shrink-0">
                              <Check className="size-4 text-white" />
                            </div>
                            <span className="text-black text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/experiencia/sectores.jpg"
                        alt="Sector público"
                        width={500}
                        height={400}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-black text-2xl font-bold mb-4">
                        Nuestra experiencia en el sector privado
                      </h2>
                      <p className="text-brand-gray mb-6 leading-relaxed">
                        Ayudamos a empresas de diversos rubros a digitalizar sus
                        procesos y optimizar su productividad.
                      </p>
                      <div className="space-y-3">
                        {[
                          "E-commerce a medida",
                          "Sistemas ERP personalizados",
                          "Aplicaciones móviles corporativas",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-fit aspect-square p-0.5 bg-brand-amber rounded-full flex-shrink-0">
                              <Check className="size-4 text-white" />
                            </div>
                            <span className="text-black text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/experiencia/sectores.jpg"
                        alt="Sector privado"
                        width={500}
                        height={400}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CONTACTANOS */}
          <div className="rounded-lg py-6 lg:hidden block">
            <h3 className="text-black text-xl font-semibold mb-4">
              Contáctanos
            </h3>
            <form className="space-y-4">
              <Input
                placeholder="Razón Social"
                className="border-none focus:border-brand-darkGreen"
                onChange={(e) =>
                  localStorage.setItem("razon_social", e.target.value)
                }
              />
              <Input
                placeholder="Correo"
                type="email"
                className="border-none focus:border-brand-darkGreen"
                onChange={(e) => localStorage.setItem("correo", e.target.value)}
              />
              <Input
                placeholder="Teléfono"
                className="border-none focus:border-brand-darkGreen"
                onChange={(e) =>
                  localStorage.setItem("telefono", e.target.value)
                }
              />
              <Textarea
                placeholder="Mensaje"
                rows={4}
                className="border-none focus:border-brand-darkGreen resize-none"
                onChange={(e) =>
                  localStorage.setItem("mensaje", e.target.value)
                }
              />
              <Link href={"/contacto"}>
                <Button className="w-full mt-4 bg-brand-amber hover:bg-brand-amber text-white">
                  Continuar
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
