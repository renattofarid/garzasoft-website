"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#", label: "Home" },
  { href: "#", label: "Nosotros" },
  { href: "#", label: "Servicios" },
  { href: "#", label: "Experiencia" },
  { href: "#", label: "Productos" },
  { href: "#", label: "Clientes" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll(); // Detectar posición inicial del scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-[#c6f432] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button
          className="bg-[#11b328] hover:bg-[#c6f432] text-white hover:text-black transition-colors rounded-full px-6 animated-button"
          onClick={() => (window.location.href = "/verify")}
        >
          Contáctanos
        </Button>
      </div>
    </nav>
  );
}
