import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AboutSection from "@/components/sections/about";
import WhoWeAreSection from "@/components/sections/who-we-are";
import FaqSection from "@/components/sections/faq";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <AboutSection />
        <WhoWeAreSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
