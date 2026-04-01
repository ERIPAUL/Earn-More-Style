import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WhoWeAreSection from "@/components/sections/who-we-are";
import ServicesSection from "@/components/sections/services";
import EsgSection from "@/components/sections/esg";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <WhoWeAreSection />
        <ServicesSection />
        <EsgSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
