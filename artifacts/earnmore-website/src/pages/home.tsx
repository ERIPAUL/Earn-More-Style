import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Building2, Cloud, BarChart3,
  FileCheck, GraduationCap, Quote, MapPin, Mail, Phone, ChevronLeft, ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import Seo from "@/components/seo";

const previewServices = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Sustainable Infrastructure Finance",
    description: "Securing financing for infrastructure projects that prioritize sustainability, identifying funding sources and facilitating impactful investment.",
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
    description: "Helping organisations set up and oversee ESG frameworks, from materiality assessments to governance strategies.",
    image: "/images/esg-building.jpg",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Sustainability Policy Reviews",
    description: "Evaluating existing sustainability policies and recommending changes to enhance institutional sustainability efforts.",
    image: "/images/policy-globe.jpg",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Training & Capacity Building",
    description: "Workshops, seminars, and training sessions to build capacity for effective sustainability contributions.",
    image: "/images/blog-training.jpg",
  },
];

const insights = [
  {
    category: "(ESG) Structures",
    title: "Understanding the ISSB's Sustainability Disclosure Standards: IFRS S1 and IFRS S2, Part 2",
    excerpt: "In the first part of this series, we looked at the governance and strategy elements of IFRS S1 and S2. In this second part we consider risk management plus metrics and targets, and what each reporting requirement means in practice.",
    date: "December 11, 2023",
    image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6576cd5073e40_valley-with-huge-wind-mills-solar-batteries-factories-renewable-sources-energy-care-environment-green-generate-electricity-eco-power-plant-ecology-concept-3d-rendering-illustration_76964-833.jpg",
    href: "/blog/ifrs-s1-s2-part-2",
  },
  {
    category: "(ESG) Structures",
    title: "Understanding the ISSB's Sustainability Disclosure Standards: IFRS S1 and IFRS S2",
    excerpt: "The ISSB was established to develop a comprehensive global baseline of sustainability-related disclosure standards. This article explores the governance and strategy pillars of IFRS S1 and IFRS S2 and what they mean for reporting organisations.",
    date: "December 4, 2023",
    image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/656da9f4b3ab7_sunny-landscape-with-windmills.jpg",
    href: "/blog/ifrs-s1-s2-part-1",
  },
  {
    category: "Sustainable Infrastructure Finance",
    title: "Climate Summit: Towards Promoting Climate Finance and Green Growth",
    excerpt: "Leaders gathered in Nairobi for the inaugural Climate Summit hosted by the Government of Kenya, under the theme 'Driving Green Growth and Climate Finance Solutions for the World'.",
    date: "December 1, 2023",
    image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/656a6142aa695_drought.jpg",
    href: "/blog/africa-climate-summit",
  },
  {
    category: "Sustainable Infrastructure Finance",
    title: "Amazon Summit: Inspiration for Protecting Tropical Rainforests",
    excerpt: "Eight Amazon countries recently concluded the Amazon Summit in Belém, Brazil, focused on environmental and climate challenges facing the Amazon. A key lesson emerges: the need for a similar concord to protect Equatorial Rainforests.",
    date: "December 1, 2023",
    image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6569e10ef1132_tranquil-scene-mountain-range-reflected-pond-generated-by-ai.jpg",
    href: "/blog/amazon-summit",
  },
];

export default function Home() {
  const [insightIdx, setInsightIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setInsightIdx((i) => (i + 1) % insights.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Seo
        title="EarnMore Consultants, Sustainability & ESG Advisory Nigeria"
        description="EarnMore Consultants is Nigeria's leading sustainability and ESG consulting firm. We deliver ESG frameworks, climate finance advisory, sustainability reporting, and green bonds solutions across Nigeria and Africa."
        keywords="sustainability consulting Nigeria, ESG consulting Nigeria, climate finance Nigeria, green bonds Nigeria, ESG advisory Nigeria, sustainability advisory Africa"
        canonical="/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://earnmoregroup.com/#organization",
                "name": "EarnMore Consultants",
                "url": "https://earnmoregroup.com",
                "logo": "https://earnmoregroup.com/favicon.png",
                "sameAs": ["https://earnmoreapp.co"],
                "description": "A leading global sustainability and ESG consulting firm, providing ESG frameworks, climate finance advisory, green bonds, and sustainability reporting services.",
                "foundingLocation": { "@type": "Place", "name": "London, UK" },
                "areaServed": ["United Kingdom", "Europe", "Africa", "Global"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "info@earnmoregroup.com",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://earnmoregroup.com/#localbusiness",
                "name": "EarnMore Consultants",
                "url": "https://earnmoregroup.com",
                "image": "https://earnmoregroup.com/favicon.png",
                "description": "ESG and sustainability consulting firm based in London, UK.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "London",
                  "addressCountry": "GB"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
                "areaServed": ["London", "United Kingdom", "Europe", "Global"],
                "priceRange": "$$",
                "email": "info@earnmoregroup.com",
                "serviceType": [
                  "ESG Consulting",
                  "Sustainability Advisory",
                  "Climate Finance",
                  "Green Bonds Advisory",
                  "Sustainability Reporting",
                  "ESG Training"
                ]
              }
            ]
          })
        }}
      />
      <Navbar />
      <main className="flex-grow">
        {/* ── Hero Carousel ── */}
        <HeroSection />

        {/* ── CEO Welcome Note ── */}
        <section className="py-12 md:py-28" style={{ backgroundColor: "#0a2e28" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* CEO Image */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  {/* Decorative ring */}
                  <div
                    className="absolute -inset-4 rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #34d399 0%, transparent 70%)" }}
                  />
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    style={{ width: "340px", height: "420px", background: "linear-gradient(160deg, #0d3d2e 0%, #0a2e28 100%)" }}
                  >
                    <img
                      src="/ceo.png"
                      alt="Otito Nwaigwe-Chukwu, Managing Director, EarnMore Consultants"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[110%] object-contain object-bottom drop-shadow-2xl"
                      style={{ maxWidth: "none" }}
                    />
                    {/* Subtle gradient at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a2e28] to-transparent" />
                    {/* Name badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className="rounded-lg px-4 py-2.5 flex items-center gap-3"
                        style={{ background: "rgba(13,61,46,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(52,211,153,0.2)" }}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">ON</span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold leading-none mb-0.5">Otito Nwaigwe-Chukwu</p>
                          <p className="text-emerald-400 text-xs">Managing Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Welcome text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-col gap-6"
              >
                <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-6 h-px bg-emerald-400" />
                  A Message from Our Managing Director
                </p>

                <Quote className="w-10 h-10 text-emerald-500/40" />

                <blockquote className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed italic">
                  "Sustainability is no longer optional, it is the foundation of every resilient, prosperous organisation in the 21st century."
                </blockquote>

                <div className="space-y-4 text-white/65 leading-relaxed text-base">
                  <p>
                    Welcome to EarnMore Consultants. We exist to make sustainability actionable, translating complex global frameworks into practical strategies that create real, measurable value for businesses, governments, and institutions.
                  </p>
                  <p>
                    Since our founding, we have partnered with organisations around the world to navigate ESG disclosures, mobilise climate finance, and build the internal capacity needed to thrive in a world demanding greater accountability and impact.
                  </p>
                  <p>
                    Whatever your sustainability challenge, our team of dedicated experts is here to guide every step of your journey, with the rigour, empathy, and local insight that sets us apart.
                  </p>
                </div>

                <div className="pt-2 border-t border-emerald-800/50">
                  <motion.p
                    className="text-white font-bold text-lg"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    style={{ textShadow: "0 0 20px rgba(52,211,153,0.35)" }}
                  >
                    Otito Nwaigwe-Chukwu
                  </motion.p>
                  <p className="text-emerald-400 text-sm">Managing Director, EarnMore Consultants</p>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-all group w-fit"
                >
                  Our Story
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── About Teaser ── */}
        <section className="py-12 md:py-28 bg-white">
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
                  alt="Business handshake, strategic sustainability partnership"
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
                  href="/services"
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
        <section className="py-12 md:py-28" style={{ backgroundColor: "#f0fdf8" }}>
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
                  <div className="relative overflow-hidden" style={{ height: "140px" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
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

        {/* ── Infrastructure Teaser ── */}
        <section
          className="py-12 md:py-28"
          style={{ background: "linear-gradient(135deg, #061a16 0%, #0a2e28 60%, #0d3d2e 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-emerald-400" />
                  EarnMore Infrastructure Ltd
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                  We Are Also Into{" "}
                  <span className="italic font-serif font-normal text-emerald-300">Infrastructure</span>
                </h2>
                <p className="text-green-200/65 leading-relaxed mb-6">
                  Beyond ESG advisory, Earnmore Infrastructure is our advisory and delivery-focused arm supporting
                  large-scale infrastructure projects, from concept through financing to execution. We enable
                  efficient project development, strengthen stakeholder confidence, and improve access to funding.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Infrastructure Development & Delivery",
                    "Project Finance & Advisory",
                    "Financing Solutions with Public & Private Partners",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-green-200/70 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-all group"
                >
                  Explore Infrastructure
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>

              {/* Right: stat cards */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {[
                  { value: "$237M", label: "Broadband Infrastructure", sub: "North West InfraCo Project" },
                  { value: "$1B+", label: "NITEL Privatisation", sub: "National carrier bid preparation" },
                  { value: "$1B", label: "FESTAC II Real Estate", sub: "Winning technical & financial bid" },
                  { value: "20+", label: "Years of Experience", sub: "Project finance & structuring" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl p-6 border border-emerald-800/40 hover:border-emerald-600/60 transition-all duration-300"
                    style={{ background: "rgba(13,61,46,0.45)", backdropFilter: "blur(8px)" }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  >
                    <p className="text-3xl font-bold text-emerald-300 mb-1">{stat.value}</p>
                    <p className="text-white text-sm font-semibold mb-1">{stat.label}</p>
                    <p className="text-green-200/45 text-xs">{stat.sub}</p>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Topics & Insights ── */}
        <section className="py-12 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary" />
                  Topics &amp; Insights
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Thinking at the{" "}
                  <span className="italic font-serif font-normal text-primary">Frontier of Sustainability</span>
                </h2>
              </motion.div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline flex-shrink-0"
              >
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Featured insight + side list */}
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Featured (left, spans 3 cols) */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href={insights[insightIdx].href} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all h-full">
                  <div className="relative overflow-hidden" style={{ height: "280px" }}>
                    <img
                      src={insights[insightIdx].image}
                      alt={insights[insightIdx].title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                      {insights[insightIdx].category}
                    </span>
                  </div>
                  <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                    <p className="text-xs text-foreground/40 mb-2">{insights[insightIdx].date}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                      {insights[insightIdx].title}
                    </h3>
                    <p className="text-foreground/55 text-sm leading-relaxed">
                      {insights[insightIdx].excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Side list (right, spans 2 cols) */}
              <motion.div
                className="lg:col-span-2 flex flex-col gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {insights.map((post, i) => (
                  <Link
                    key={i}
                    href={post.href}
                    className={`group flex gap-4 p-4 rounded-xl border transition-all cursor-pointer ${i === insightIdx ? "border-primary/30 bg-primary/5 shadow-sm" : "border-gray-100 hover:border-primary/20 hover:bg-gray-50"}`}
                    onClick={() => setInsightIdx(i)}
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">{post.category}</span>
                      <h4 className={`text-sm font-semibold leading-snug line-clamp-2 transition-colors ${i === insightIdx ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                        {post.title}
                      </h4>
                      <p className="text-xs text-foreground/40">{post.date}</p>
                    </div>
                  </Link>
                ))}

                {/* Navigation dots */}
                <div className="flex items-center gap-2 pt-2">
                  {insights.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setInsightIdx(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === insightIdx ? "24px" : "8px",
                        height: "8px",
                        background: i === insightIdx ? "#059669" : "#d1fae5",
                      }}
                    />
                  ))}
                  <div className="flex-1" />
                  <button onClick={() => setInsightIdx((i) => (i - 1 + insights.length) % insights.length)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-all">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={() => setInsightIdx((i) => (i + 1) % insights.length)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Contact CTA Strip + Office Address ── */}
        <section className="relative overflow-hidden">
          {/* CTA half */}
          <div className="relative py-14 md:py-24">
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
                    Contact us today for full-cycle support, from feasibility analysis to impact reporting and capacity building.
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
          </div>

          {/* Office address bar */}
          <div style={{ background: "#061a16" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
              <motion.div
                className="grid sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-900/60"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 pt-6 sm:pt-0 sm:pr-8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Our Office</p>
                    <p className="text-white/80 text-sm leading-relaxed">London</p>
                    <p className="text-white/40 text-xs mt-0.5">Serving clients globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6 sm:pt-0 sm:px-8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:info@earnmoregroup.com" className="text-white/80 text-sm hover:text-emerald-400 transition-colors">
                      info@earnmoregroup.com
                    </a>
                    <p className="text-white/40 text-xs mt-0.5">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6 sm:pt-0 sm:pl-8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Book a Session</p>
                    <a
                      href="https://calendly.com/esg-earnmoreapp/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 text-sm hover:text-emerald-400 transition-colors"
                    >
                      Schedule via Calendly
                    </a>
                    <p className="text-white/40 text-xs mt-0.5">Free 30-minute consultation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
