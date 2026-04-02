import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
