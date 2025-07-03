"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ClientResource } from "../lib/clients.interface";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface Props {
  clients: ClientResource[];
}

export default function PartnersSection({ clients }: Props) {
  const partnersRef = useRef<HTMLElement>(null);

  console.log("PartnersSection clients:", clients);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={partnersRef} className="py-16 bg-[#edf5f4]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-[#737373] mb-8">
          Hemos trabajado en más de{" "}
          <span className="text-[#ffb000] font-semibold">300 proyectos</span>{" "}
          con más de{" "}
          <span className="text-[#ffb000] font-semibold">150 clientes</span>
        </p>
        <div className="flex justify-center flex-nowrap overflow-x-auto scrollbar-hide items-center gap-16 px-2">
          {clients.map((client, i) => (
            <div className="relative flex-shrink-0 size-44 max-h-24" key={i}>
              <Image
                src={client.logo}
                alt={client.nombre}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
