"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./marquee";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

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

  const activePath = pathname === "/" ? "/#" : pathname;

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
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-4 right-4 z-50 bg-black backdrop-blur-md rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg transition-all duration-300 max-w-screen-xl mx-auto ${
          isScrolled ? "mt-3" : "mt-12"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="GarzaSoft Logo"
              width={50}
              height={50}
              priority
              className="rounded-full w-auto h-[50px] object-cover"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors ${
                  activePath === link.href
                    ? "text-brand-green font-semibold"
                    : "text-white hover:text-brand-green"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 sm:w-72 bg-black text-white"
              >
                <SheetHeader className="text-left text-lg font-bold mb-4">
                  Menú
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-base ${
                        activePath === link.href
                          ? "text-brand-green font-semibold"
                          : "hover:text-brand-green"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contacto">
                    <Button className="w-full bg-brand-green hover:bg-brand-green/85 text-white mt-4">
                      Contáctanos
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Botón contacto Desktop */}
          <div className="hidden md:block">
            <Link href="/contacto" passHref>
              <Button className="bg-brand-green hover:bg-brand-green/85 text-white rounded-full px-6">
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
