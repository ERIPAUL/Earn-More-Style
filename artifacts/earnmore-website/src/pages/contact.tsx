import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact";
import Seo from "@/components/seo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Seo
        title="Contact EarnMore Consultants, ESG & Sustainability Advisory Nigeria"
        description="Get in touch with EarnMore Consultants, Nigeria's leading ESG and sustainability advisory firm. Contact us to discuss your sustainability strategy, ESG framework, or climate finance needs."
        keywords="contact EarnMore Consultants, ESG consultants Nigeria contact, sustainability advisory Nigeria, book ESG consultation Nigeria"
        canonical="/contact"
        ogImage="https://earnmoregroup.com/og/contact.jpg"
      />
      <Navbar />
      <main className="flex-grow pt-20">

        {/* ── Hero Banner ── */}
        <div className="relative h-72 md:h-96 flex items-center justify-center text-center overflow-hidden">
          <img
            src="/images/ocean-environment.jpg"
            alt="Calm ocean, environmental stewardship"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(10,46,40,0.82) 0%, rgba(13,61,46,0.75) 100%)" }}
          />
          <motion.div
            className="relative z-10 max-w-2xl mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              Get in Touch
              <span className="w-6 h-px bg-emerald-400" />
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact{" "}
              <span className="italic font-serif font-normal text-emerald-300">Us</span>
            </h1>
            <p className="text-green-200/60 text-lg">
              Let's start a conversation about your sustainability goals
            </p>
          </motion.div>
        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
