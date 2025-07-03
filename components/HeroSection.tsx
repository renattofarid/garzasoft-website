"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  title: string;
}

export default function HeroSection({ title }: Props) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="relative h-[30rem] flex items-center overflow-hidden">
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-brand-darkGreen/90 to-brand-darkGreen/40"></div>

      <div className="relative max-w-screen-xl flex justify-start mx-auto px-6 w-full">
        <h1 ref={titleRef} className="text-white z-10 text-6xl font-bold">
          {title}
        </h1>
      </div>

      <div className="absolute right-0 top-0 h-full w-full opacity-30">
        <Image
          src="/aboutus/hero.jpg"
          alt="Medical professionals"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
