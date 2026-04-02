import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Insights & Updates
                <span className="w-6 h-px bg-primary" />
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
                Our{" "}
                <span className="italic font-serif font-normal text-primary">
                  Blog
                </span>
              </h1>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-xl mx-auto mb-12">
                Thought leadership, industry insights, and sustainability news from the EarnMore Consultants team. Coming soon.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-md transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
