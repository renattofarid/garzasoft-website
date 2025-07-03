"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/#" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Experiencia", href: "/experiencia" },
  { label: "Productos", href: "/productos" },
  { label: "Clientes", href: "/clientes" },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12 rounded-t-3xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <Image src={"/logo.png"} alt="Logo" width={150} height={50} />

          <nav className="flex flex-wrap justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex space-x-6">
            {SOCIAL_LINKS.map(({ icon: Icon, href }, idx) => (
              <a key={idx} href={href}>
                <Icon className="w-6 h-6 text-white hover:text-white cursor-pointer transition-colors" />
              </a>
            ))}
          </div>

          <div className="border-t border-white w-full pt-8 text-center">
            <p className="text-white text-sm">
              Mr. Soft ©2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
