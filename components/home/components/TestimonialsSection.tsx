"use client";

import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Tostao café",
    role: "Market Researcher",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Tostao café",
    role: "Market Researcher",
  },
];

export default function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLElement>(null);

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={testimonialsRef} className="bg-brand-darkGreen py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="testimonials-content col-span-1">
            <p className="text-brand-amber font-semibold mb-4 uppercase tracking-wide">
              TESTIMONIOS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Por qué Trabajar con Nosotros?
            </h2>
            <p className="text-brand-softGreen leading-relaxed">
              En GarzaSoft, no solo desarrollamos software, construimos
              soluciones que se adaptan a la realidad de tu empresa. Nos
              enfocamos en entender tus procesos, tus necesidades y tus desafíos
              para brindarte herramientas tecnológicas que realmente generen
              valor.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 col-span-2">
            {TESTIMONIALS.map((testimonial, idx) => (
              <Card
                key={idx}
                className="testimonial-card bg-white animated-card"
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-brand-amber text-brand-amber"
                      />
                    ))}
                  </div>
                  <p className={`text-brand-gray text-sm mb-4`}>
                    {testimonial.text}
                  </p>
                  <div className="flex items-center py-4">
                    <div className="w-10 h-10 bg-brand-gray rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-brand-darkGreen">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-brand-gray">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Quote className="ml-auto absolute -bottom-4 z-0 right-0 size-20 fill-brand-softGreen text-brand-softGreen" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
