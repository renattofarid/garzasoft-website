import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import WhyWorkWithUsSection from "@/components/nosotros/components/WhyWorkWithUsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Crown,
  Award,
  Gem,
} from "lucide-react";
import Image from "next/image";

export default function PageF() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection title="Nosotros" />
      {/* About Section */}
      <section className="py-16 bg-brand-softGreen">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Quienes Somos
              </h2>

              <Tabs defaultValue="mision" className="mb-8">
                <TabsList className="grid w-full grid-cols-3 bg-white">
                  <TabsTrigger
                    value="mision"
                    className="data-[state=active]:bg-brand-amber data-[state=active]:text-white"
                  >
                    Misión
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:bg-brand-amber data-[state=active]:text-white"
                    value="vision"
                  >
                    Visión
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:bg-brand-amber data-[state=active]:text-white"
                    value="valores"
                  >
                    Valores
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="mision" className="mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    Somos una empresa líder dedicada al desarrollo de software y
                    soluciones tecnológicas para las empresas, brindando un
                    soporte de calidad con profesionales calificados,
                    manteniendo así la confianza en nuestra empresa con
                    oportunidades de crecimiento para la sociedad.
                  </p>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">
                        Contamos con un equipo de profesionales altamente
                        calificados.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">
                        Ofrecemos soluciones tecnológicas personalizadas para
                        cada cliente.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">
                        Nuestro compromiso es brindar un soporte técnico de
                        calidad.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    <Image
                      src="/aboutus/rate.png"
                      alt="Rate"
                      width={200}
                      height={50}
                      className="mt-6 object-cover"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="vision" className="mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    Ser una empresa líder en el sector de la tecnología con
                    software de última generación para las empresas, con un
                    soporte técnico garantizado de la mano con el talento
                    profesional calificado satisfaciendo las necesidades de
                    nuestros clientes.
                  </p>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">
                        Contamos con un equipo de profesionales altamente
                        calificados.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">
                        Ofrecemos soluciones tecnológicas personalizadas para
                        cada cliente.
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-darkGreen rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">
                        Nuestro compromiso es brindar un soporte técnico de
                        calidad.
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    <Image
                      src="/aboutus/rate.png"
                      alt="Rate"
                      width={200}
                      height={50}
                      className="mt-6 object-cover"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="valores" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Globe,
                        title: "Compromiso",
                        description:
                          "Nos dedicamos a cumplir con excelencia cada proyecto asegurando resultados que superen las expectativas de nuestros clientes.",
                      },
                      {
                        icon: Gem,
                        title: "Responsabilidad",
                        description:
                          "Asumimos con seriedad nuestras obligaciones, garantizando la calidad y puntualidad en nuestras energías.",
                      },
                      {
                        icon: Crown,
                        title: "Sociabilidad",
                        description:
                          "Promovemos un ambiente colaborativo y cercano, tanto con nuestros clientes como dentro de nuestro equipo de trabajo.",
                      },
                      {
                        icon: Award,
                        title: "Lealtad",
                        description:
                          "Fomentamos relaciones duraderas basadas en la confianza y el respeto mutuo.",
                      },
                    ].map((valor, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <div className="flex-shrink-0">
                          <valor.icon className="w-8 h-8 text-brand-darkGreen" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-darkGreen mb-1">
                            {valor.title}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {valor.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="relative h-full w-full">
              <Image
                src="/aboutus/image1.png"
                alt="Professional with laptop"
                fill
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <WhyWorkWithUsSection />

      {/* Team Section */}
      <section className="py-16 bg-brand-softGreen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#006d5b] font-semibold mb-2">NUESTRO EQUIPO</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Miembros del equipo de expertos
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo está formado por profesionales altamente
              cualificados y apasionados por la tecnología, comprometidos en
              ofrecer soluciones innovadoras y efectivas para nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Gilberto Martín Ampuero Pasco",
                role: "CEO Fundador",
                color: "bg-orange-100",
                image: "/aboutus/Gilberto.jpg",
              },
              {
                name: "José Alexander Samamé Nizama",
                role: "Líder de Proyectos",
                color: "bg-blue-100",
                image: "/aboutus/Jose.jpg",
              },
              {
                name: "Renatto Farid Perleche Alvitez",
                role: "Líder Frontend",
                color: "bg-green-100",
                image: "/aboutus/Renatto.jpg",
              },
              {
                name: "Sergio Huamán Gavidia",
                role: "Proyectos de Automatización",
                color: "bg-purple-100",
                image: "/aboutus/Sergio.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`bg-white w-full aspect-[3/4] flex items-center justify-center relative`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover rounded-xl p-4"
                      fill
                    />
                  </div>
                  <div className="p-6 w-4/5 -mt-10 relative z-20 bg-white rounded-lg mr-auto">
                    <h3 className="font-semibold text-gray-900 mb-1 w-full text-start">
                      {member.name}
                    </h3>
                    <p className="text-brand-amber font-medium text-sm mb-4 w-full text-start">
                      {member.role}
                    </p>
                    <div className="flex justify-start gap-2">
                      <Facebook className="size-6 fill-brand-darkGreen rounded-md text-brand-darkGreen bg-brand-darkGreen/10 p-1.5 cursor-pointer hover:text-brand-darkGreen" />
                      <Twitter className="size-6 rounded-md text-brand-darkGreen bg-brand-darkGreen/10 p-1.5 cursor-pointer hover:text-brand-darkGreen" />
                      <Instagram className="size-6 rounded-md text-brand-darkGreen bg-brand-darkGreen/10 p-1.5 cursor-pointer hover:text-brand-darkGreen" />
                      <Linkedin className="size-6 rounded-md text-brand-darkGreen bg-brand-darkGreen/10 p-1.5 cursor-pointer hover:text-brand-darkGreen" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
