"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Marquee() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!wrapperRef.current) return;

      const totalWidth = wrapperRef.current.scrollWidth / 2;

      marqueeTween.current = gsap.to(wrapperRef.current, {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    });

    return () => {
      ctx.revert();
      marqueeTween.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    marqueeTween.current?.pause();
  };

  const handleMouseLeave = () => {
    marqueeTween.current?.resume();
  };

  const content = (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <Link
          href="https://www.mrsoftperu.com/"
          target="_blank"
          key={i}
          className="mx-8 text-sm flex justify-center items-center h-full w-fit gap-2"
        >
          <span className="font-medium text-xs">Ahora somos </span>
          <Image
            src="/mrsoft.png"
            alt="Mr. Soft Logo"
            width={100}
            height={100}
            className="h-6 w-auto"
          />
        </Link>
      ))}
    </>
  );

  return (
    <div
      className="bg-[rgb(4,9,49)] text-white py-2 overflow-hidden h-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={wrapperRef}
        className="whitespace-nowrap flex items-center gap-4 w-max"
      >
        {content}
        {content}
      </div>
    </div>
  );
}
