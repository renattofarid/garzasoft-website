"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#041b16] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#11b328] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">GS</span>
            </div>
            <span className="text-white font-semibold text-xl">GarzaSoft</span>
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
  );
}
