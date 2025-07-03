import Header from "@/components/header";
import HeroSection from "@/components/home/components/HeroSection";
import StatsSection from "@/components/home/components/StatsSection";
import AboutSection from "@/components/home/components/AboutSection";
import TestimonialsSection from "@/components/home/components/TestimonialsSection";
import PartnersSection from "@/components/home/components/PartnersSection";
import Footer from "@/components/footer";
import { getClients } from "@/components/home/lib/clients.actions";
import { getComments } from "@/components/home/lib/coments.actions";

export const dynamic = "force-dynamic";

export default async function GarzaSoftWebsite() {
  const clients = await getClients();
  const comments = await getComments();

  return (
    <div className="min-h-screen bg-brand-softGreen">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection comments={comments} />

      {/* Partners Section */}
      <PartnersSection clients={clients} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
