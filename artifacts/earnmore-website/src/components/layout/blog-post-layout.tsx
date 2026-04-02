import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

interface Section {
  heading?: string;
  subheading?: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

interface BlogPostLayoutProps {
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  heroImage: string;
  sections: Section[];
  references?: string[];
  conclusion?: string;
}

export default function BlogPostLayout({
  title,
  date,
  category,
  categoryColor,
  heroImage,
  sections,
  references,
  conclusion,
}: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* Hero Banner */}
        <div
          className="relative py-20 md:py-28 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-200/60 text-sm">{date}</span>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColor}`}>
                {category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
          </motion.div>
        </div>

        {/* Article */}
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-14">

          {/* Hero Image */}
          <motion.div
            className="rounded-2xl overflow-hidden mb-12 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={heroImage}
              alt={title}
              className="w-full object-cover"
              style={{ maxHeight: "460px", objectPosition: "center" }}
            />
          </motion.div>

          {/* Body Sections */}
          <div className="prose prose-lg max-w-none">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                className="mb-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                    {section.heading}
                  </h2>
                )}
                {section.subheading && (
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {section.subheading}
                  </h3>
                )}
                <p className="text-foreground/70 leading-relaxed text-base">{section.body}</p>
                {section.image && (
                  <div className="my-6 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={section.image}
                      alt={section.imageAlt || ""}
                      className="w-full object-cover"
                      style={{ maxHeight: "380px", objectPosition: "center" }}
                    />
                  </div>
                )}
              </motion.div>
            ))}

            {conclusion && (
              <motion.div
                className="mt-10 p-6 rounded-2xl border-l-4 border-primary bg-primary/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold text-foreground mb-2">Conclusion</h2>
                <p className="text-foreground/70 leading-relaxed">{conclusion}</p>
              </motion.div>
            )}

            {references && references.length > 0 && (
              <motion.div
                className="mt-10 pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-3">References</h3>
                <ul className="space-y-1">
                  {references.map((ref, i) => (
                    <li key={i} className="text-sm text-foreground/50 leading-relaxed">{ref}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
