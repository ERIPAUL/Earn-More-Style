import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Building2, Cloud, BarChart3, FileCheck, GraduationCap } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";

const previewServices = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Sustainable Infrastructure Finance",
    description: "Securing financing for infrastructure projects that prioritize sustainability — identifying funding sources and facilitating impactful investment.",
    image: "/images/solar-panels.jpg",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Climate Finance Solutions",
    description: "Mobilising public and private capital to close investment gaps for renewables, clean energy, water infrastructure, and agriculture.",
    image: "/images/ocean-environment.jpg",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "ESG Structures",
    description: "Helping organisations set up and oversee ESG frameworks — from materiality assessments to governance strategies.",
    image: "/images/data-analytics.jpg",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Sustainability Policy Reviews",
    description: "Evaluating existing sustainability policies and recommending changes to enhance institutional sustainability efforts.",
    image: "/images/blog-climate-policy.jpg",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Training & Capacity Building",
    description: "Workshops, seminars, and training sessions to build capacity for effective sustainability contributions.",
    image: "/images/blog-training.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        {/* ── About Teaser ── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ minHeight: "360px" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/images/business-partnership.jpg"
                  alt="Business handshake — strategic sustainability partnership"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-primary/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                    Strategic Partnership
                  </span>
                </div>
              </motion.div>

              {/* Right content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary" />
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5 text-foreground">
                  Driving Change,{" "}
                  <span className="italic font-serif font-normal text-primary">One Institution at a Time</span>
                </h2>
                <p className="text-foreground/65 leading-relaxed mb-6">
                  At EarnMore Consultants, our journey commenced with a clear and inspiring mission: to empower both individuals and businesses to realise their sustainability aspirations through expert guidance and innovative solutions.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Strategic Sustainability Planning",
                    "Government & Private Sector Focus",
                    "Bespoke Cross-Industry Solutions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/75 text-sm font-medium">
                      <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-all group"
                >
                  Learn More
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Services Teaser ── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#f0fdf8" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                What We Do
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Specialized Sustainability &{" "}
                <span className="italic font-serif font-normal text-primary">Advisory Services</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {previewServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-transparent hover:border-primary/20 flex flex-col"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  {/* Card thumbnail */}
                  <div className="relative overflow-hidden" style={{ height: "140px" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 -mt-10 relative z-10 border-4 border-white shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/55 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-md transition-all group"
              >
                View All Services
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Contact CTA Strip ── */}
        <section className="relative py-24 overflow-hidden">
          <img
            src="/images/green-terraces.jpg"
            alt="Green terraced fields"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(10,46,40,0.88) 0%, rgba(13,61,46,0.80) 100%)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="max-w-xl">
                <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-emerald-400" />
                  Get In Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  Ready to Build a More{" "}
                  <span className="italic font-serif font-normal text-emerald-300">Sustainable Future?</span>
                </h2>
                <p className="text-green-200/60 leading-relaxed">
                  Contact us today for full-cycle support — from feasibility analysis to impact reporting and capacity building.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-md transition-all group text-base"
                >
                  Contact Us
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
