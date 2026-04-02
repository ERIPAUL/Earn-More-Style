import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* ── Hero Banner ── */}
        <div className="relative h-72 md:h-96 flex items-center justify-center text-center overflow-hidden">
          <img
            src="/images/blog-training.jpg"
            alt="Team meeting"
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
