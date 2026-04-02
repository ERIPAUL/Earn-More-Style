import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ServicesSection from "@/components/sections/services";
import EsgSection from "@/components/sections/esg";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <ServicesSection />
        <EsgSection />
      </main>
      <Footer />
    </div>
  );
}
