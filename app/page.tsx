"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/header";
import Marquee from "@/components/marquee";
import HeroSection from "@/components/home/components/HeroSection";
import StatsSection from "@/components/home/components/StatsSection";
import AboutSection from "@/components/home/components/AboutSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GarzaSoftWebsite() {
  const testimonialsRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonials animations
      if (testimonialsRef.current) {
        gsap.fromTo(
          ".testimonials-content",
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          ".testimonial-card",
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Partners section animation
      if (partnersRef.current) {
        gsap.fromTo(
          ".partner-item",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 0.6,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: partnersRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Hover animations for buttons
      const buttons = document.querySelectorAll(".animated-button");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

      // Hover animations for cards
      const cards = document.querySelectorAll(".animated-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

      // WhatsApp button animation
      const whatsappButton = document.querySelector(".whatsapp-button");
      if (whatsappButton) {
        gsap.fromTo(
          whatsappButton,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
            delay: 2,
          }
        );

        // Pulse animation
        gsap.to(whatsappButton, {
          scale: 1.1,
          duration: 1,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: 3,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-brand-softGreen">
      {/* Top Banner */}
      <Marquee />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="bg-brand-darkGreen py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="testimonials-content">
              <p className="text-brand-amber font-semibold mb-4 uppercase tracking-wide">
                TESTIMONIOS
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                ¿Por qué Trabajar con Nosotros?
              </h2>
              <p className="text-brand-softGreen leading-relaxed">
                En GarzaSoft, no solo desarrollamos software, construimos
                soluciones que se adaptan a la realidad de tu empresa. Nos
                enfocamos en entender tus procesos, tus necesidades y tus
                desafíos para brindarte herramientas tecnológicas que realmente
                generen valor.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="testimonial-card bg-white animated-card">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#ffb000] text-[#ffb000]"
                      />
                    ))}
                  </div>
                  <p className="text-[#737373] mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#8da4a2] rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-[#041b16]">
                        Tostao café
                      </p>
                      <p className="text-sm text-[#737373]">
                        Market Researcher
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="testimonial-card bg-white animated-card">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#ffb000] text-[#ffb000]"
                      />
                    ))}
                  </div>
                  <p className="text-[#737373] mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#8da4a2] rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-[#041b16]">
                        Tostao café
                      </p>
                      <p className="text-sm text-[#737373]">
                        Market Researcher
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-16 bg-[#edf5f4]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#737373] mb-8">
            Hemos trabajado en más de{" "}
            <span className="text-[#ffb000] font-semibold">300 proyectos</span>{" "}
            con más de{" "}
            <span className="text-[#ffb000] font-semibold">150 clientes</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="partner-item flex items-center space-x-2">
                <div className="w-12 h-12 bg-brand-darkGreen rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">GAJEL</span>
                </div>
                <div className="w-8 h-8 bg-[#11b328] rounded-full"></div>
                <span className="text-brand-bg-brand-darkGreen font-semibold text-sm">
                  JUAN PABLO II
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#041b16] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#11b328] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">GS</span>
              </div>
              <span className="text-white font-semibold text-xl">
                GarzaSoft
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-8">
              <a
                href="#"
                className="text-[#8da4a2] hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[#8da4a2] hover:text-white transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#"
                className="text-[#8da4a2] hover:text-white transition-colors"
              >
                Servicios
              </a>
              <a
                href="#"
                className="text-[#8da4a2] hover:text-white transition-colors"
              >
                Experiencia
              </a>
              <a
                href="#"
                className="text-[#8da4a2] hover:text-white transition-colors"
              >
                Productos
              </a>
              <a
                href="#"
                className="text-[#8da4a2] hover:text-white transition-colors"
              >
                Clientes
              </a>
            </nav>

            <div className="flex space-x-6">
              <Facebook className="w-6 h-6 text-[#8da4a2] hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-[#8da4a2] hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-[#8da4a2] hover:text-white cursor-pointer transition-colors" />
            </div>

            <div className="border-t border-[#8da4a2] w-full pt-8 text-center">
              <p className="text-[#8da4a2] text-sm">
                Mr. Soft ©2024 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="whatsapp-button bg-[#11b328] rounded-full p-3 shadow-lg cursor-pointer hover:bg-brand-atext-brand-amber transition-colors">
          <Phone className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
