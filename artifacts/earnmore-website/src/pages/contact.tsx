import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
