"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./marquee";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#", label: "Home" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/productos", label: "Productos" },
  { href: "/clientes", label: "Clientes" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Marquee />
      <nav
        className={`fixed top-0 left-4 right-4 z-50 bg-black backdrop-blur-md rounded-full px-6 py-3 shadow-lg transition-all duration-300 max-w-screen-xl mx-auto ${
          isScrolled ? "mt-3" : "mt-12"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={"/logo.png"}
              alt="GarzaSoft Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/#" && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#c6f432] font-semibold"
                      : "text-white hover:text-[#c6f432]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link href={"/contacto"}>
            <Button className="bg-brand-green hover:bg-brand-green/85 text-white hover:text-white transition-colors rounded-full px-6 animated-button">
              Contáctanos
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
