"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ClientResource } from "../lib/clients.interface";
import Image from "next/image";

interface Props {
  clients: ClientResource[];
}

export default function PartnersSection({ clients }: Props) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween>();

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    marqueeTween.current = gsap.to(el, {
      x: `-${totalWidth}`,
      duration: totalWidth / 100, // velocidad ajustable
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      marqueeTween.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => marqueeTween.current?.pause();
  const handleMouseLeave = () => marqueeTween.current?.resume();

  const renderItems = (arr: ClientResource[]) => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return (
      <>
        {shuffled.map((client, i) => (
          <div
            className="relative flex-shrink-0 size-44 max-h-24"
            key={client.id || i}
          >
            <Image
              src={client.logo}
              alt={client.nombre}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="py-24 bg-[#edf5f4] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-[#737373] mb-8">
          Hemos trabajado en más de{" "}
          <span className="text-[#ffb000] font-semibold">300 proyectos</span>{" "}
          con más de{" "}
          <span className="text-[#ffb000] font-semibold">150 clientes</span>
        </p>

        <div
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={marqueeRef} className="flex flex-nowrap gap-16 px-2">
            {renderItems(clients)}
            {renderItems(clients)}
          </div>
        </div>
      </div>
    </section>
  );
}
