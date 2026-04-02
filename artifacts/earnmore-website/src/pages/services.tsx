import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ServicesSection from "@/components/sections/services";
import EsgSection from "@/components/sections/esg";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Page image banner */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img
            src="/images/wind-turbines.jpg"
            alt="Wind turbines — climate finance solutions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">What We Do</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Sustainability &{" "}
                <span className="italic font-serif font-normal text-emerald-300">Advisory Services</span>
              </h1>
            </div>
          </div>
        </div>
        <ServicesSection />
        <EsgSection />
      </main>
      <Footer />
    </div>
  );
}
