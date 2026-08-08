import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Building2, Lightbulb, Handshake,
  Shield, Zap, Users, Globe, TrendingUp, Wifi, Home as HomeIcon,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Seo from "@/components/seo";

const services = [
  {
    num: "01",
    title: "Infrastructure Development & Delivery",
    description:
      "End-to-end support for planning, developing, and executing infrastructure projects across energy, transport, water, and urban systems. We enable efficient project development and strengthen stakeholder confidence throughout the project lifecycle.",
    icon: <Building2 className="w-6 h-6" />,
    image: "/images/green-building.jpg",
  },
  {
    num: "02",
    title: "Project Advisory",
    description:
      "Strategic advisory on project design, structuring, and implementation. We build robust business cases, resilient project strategies, and clear reporting systems that improve access to funding and data tracking.",
    icon: <Lightbulb className="w-6 h-6" />,
    image: "/images/data-analytics.jpg",
  },
  {
    num: "03",
    title: "Financing Solutions",
    description:
      "Support in securing and structuring funding, including partnerships with public and private sector stakeholders. We apply project finance frameworks that make projects investment-ready and fundable.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/images/solar-panels.jpg",
  },
];

const values = [
  { label: "Excellence", description: "We deliver high-quality infrastructure solutions with precision, discipline, and attention to detail.", icon: <Zap className="w-5 h-5" /> },
  { label: "Integrity", description: "We operate with transparency, accountability, and strong ethical standards in every project.", icon: <Shield className="w-5 h-5" /> },
  { label: "Impact", description: "We focus on projects that drive economic growth and improve everyday lives.", icon: <Globe className="w-5 h-5" /> },
  { label: "Collaboration", description: "We work closely with governments, partners, and stakeholders to achieve shared goals.", icon: <Handshake className="w-5 h-5" /> },
  { label: "Innovation", description: "We apply practical, forward-thinking approaches to solve complex infrastructure challenges.", icon: <Lightbulb className="w-5 h-5" /> },
  { label: "Resilience", description: "We design and support infrastructure that is durable, adaptable, and built for the future.", icon: <Building2 className="w-5 h-5" /> },
];

const projects = [
  {
    num: "01",
    title: "North West InfraCo Broadband Project",
    cost: "$237 million",
    description:
      "Development of the fibre infrastructure for Nigeria's National Broadband Network (NBN) in the North West Region, covering seven states.",
    icon: <Wifi className="w-5 h-5" />,
  },
  {
    num: "02",
    title: "Google Station Infrastructure Expansion",
    cost: "$5 million",
    description:
      "Deepening broadband penetration by providing free high-speed WiFi access in high-footfall public areas such as markets, malls, airports, and universities.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    num: "03",
    title: "Rural Broadband Initiative (RUBI)",
    cost: "$190,000",
    description:
      "Extended broadband reach to unserved and underserved rural communities, improving digital access across the country.",
    icon: <Wifi className="w-5 h-5" />,
  },
  {
    num: "04",
    title: "MTN North West & North East IRU OFC Build",
    cost: "$12.55 million",
    description:
      "Provision of reliable fibre primary and alternate routes to connect existing MTN sites, improving network availability across two regions.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    num: "05",
    title: "NITEL Privatization and Acquisition",
    cost: "$1 billion",
    description:
      "Bid preparation for a 75% equity stake in the national carrier, including a comprehensive post-acquisition plan for operational transformation.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    num: "06",
    title: "FESTAC II Real Estate Development",
    cost: "$1 billion",
    description:
      "Prepared the winning technical and financial bid for a large-scale housing development project, delivering impactful urban infrastructure.",
    icon: <HomeIcon className="w-5 h-5" />,
  },
];

const whyChooseUs = [
  {
    title: "End-to-End Delivery",
    description: "We support infrastructure projects from concept through financing to execution, ensuring continuity and accountability at every stage.",
  },
  {
    title: "Functional and Profitable",
    description: "We design projects to be practical, viable, and investment-ready, balancing social impact with commercial sustainability.",
  },
  {
    title: "Trusted Partnerships",
    description: "We work closely with public and private sector stakeholders to achieve shared, long-term outcomes that endure beyond project close.",
  },
  {
    title: "Governance and Discipline",
    description: "We apply clear frameworks that improve transparency, reduce risk, and build stakeholder confidence throughout the lifecycle.",
  },
];

const team = [
  {
    name: "Otito Nwaigwe-Chukwu",
    title: "Principal & Managing Partner, MPhil",
    image: "/ceo.png",
    bio: "A consultant with over 20 years of experience in financial services. She began her career in investment banking at the London offices of Morgan Stanley and Deutsche Bank, gaining deep expertise in project finance, structuring, and capital markets. She now focuses on infrastructure advisory and ESG services, supporting large-scale projects across telecoms, energy, and urban development. She holds an MPhil in Development Finance from Stellenbosch Business School and a management course from Harvard University, and is a CFA Level III candidate completing her PhD at Cranfield University.",
  },
  {
    name: "Tunde Onitiri",
    title: "Infrastructure Adviser, ex IFC",
    image: null,
    initials: "TO",
    bio: "A globally experienced investment executive with over two decades of leadership across infrastructure, climate finance, private equity, and venture investing in emerging markets. Previously Special Advisor on Climate Investments to the CEO of the Nigerian Sovereign Investment Authority, and former Senior Manager at the International Finance Corporation (IFC), where he oversaw and executed more than $500 million in investments. He advises project developers, private equity managers, and governments on climate-aligned infrastructure and energy investments across Africa, Asia, Latin America, and the Middle East. He holds an MBA from Wharton and degrees from Oxford, Columbia, and Penn.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <Seo
        title="EarnMore Infrastructure Ltd | Project Finance & Advisory"
        description="EarnMore Infrastructure is an advisory and delivery-focused firm supporting infrastructure projects with project financing frameworks, resilient strategies, and clear reporting systems."
        keywords="infrastructure advisory Nigeria, project finance Africa, infrastructure development, broadband infrastructure, public private partnerships"
        canonical="/infrastructure"
        ogImage="https://earnmoregroup.com/og/infrastructure.jpg"
      />
      <Navbar />
      <main className="min-h-screen bg-background text-foreground font-sans">

        {/* ── Hero ── */}
        <section
          className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #061a16 0%, #0a2e28 60%, #0d3d2e 100%)" }}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #34d399 1px, transparent 0)", backgroundSize: "40px 40px" }}
          />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <img src="/images/green-building.jpg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061a16] to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="w-6 h-px bg-emerald-400" />
                EarnMore Infrastructure Ltd
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Building the{" "}
                <span className="italic font-serif font-normal text-emerald-300">
                  Infrastructure
                </span>{" "}
                of Tomorrow
              </h1>
              <p className="text-green-200/65 text-lg leading-relaxed mb-10">
                Earnmore Infrastructure is an advisory and delivery-focused firm supporting
                infrastructure projects with project financing frameworks, resilient project
                strategies, and clear reporting systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-md transition-all group"
                >
                  Start a Conversation
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 border border-emerald-600/40 text-emerald-300 hover:border-emerald-400 hover:text-emerald-200 font-semibold px-7 py-3.5 rounded-md transition-all text-sm"
                >
                  View Projects
                </a>
              </div>
            </motion.div>

            {/* Stat row */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-emerald-800/40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { value: "6+", label: "Projects Delivered" },
                { value: "$1B+", label: "Project Value Advised" },
                { value: "20+", label: "Years of Experience" },
                { value: "3", label: "Core Service Lines" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-emerald-300">{stat.value}</p>
                  <p className="text-green-200/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary" />
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                  Driving Sustainability,{" "}
                  <span className="italic font-serif font-normal text-primary">
                    One Institution at a Time
                  </span>
                </h2>
                <div className="space-y-4 text-foreground/65 leading-relaxed">
                  <p>
                    Earnmore Infrastructure is an advisory and delivery-focused firm supporting
                    infrastructure projects with project financing frameworks, resilient project
                    strategies, and clear reporting systems.
                  </p>
                  <p>
                    We enable efficient project development, strengthen stakeholder confidence,
                    and improve access to funding, data tracking, and reporting readiness. Our
                    work spans energy, telecommunications, transport, water, and urban development.
                  </p>
                </div>
                <ul className="mt-8 space-y-3">
                  {[
                    "Project structuring and implementation support",
                    "Stakeholder and partnership coordination",
                    "Project Finance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/75 text-sm font-medium">
                      <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ minHeight: "400px" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <img
                  src="/images/city-sustainability.jpg"
                  alt="Sustainable city infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-primary/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                    Infrastructure Advisory
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Vision & Mission ── */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#f0fdf8" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Vision & Mission
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                What Guides{" "}
                <span className="italic font-serif font-normal text-primary">Everything We Do</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  label: "Our Vision",
                  text: "To be a leading force in developing resilient, well-structured infrastructure that drives sustainable economic growth and improves quality of life.",
                },
                {
                  label: "Our Mission",
                  text: "To design, finance, and deliver impactful infrastructure projects through strong business cases, strategic advisory, and innovative funding solutions, enabling efficient execution, long-term value, and stakeholder confidence.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl p-10"
                  style={{ background: i === 0 ? "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" : "white", border: i === 1 ? "1px solid #d1fae5" : "none" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <p className={`text-xs font-bold tracking-widest uppercase mb-5 ${i === 0 ? "text-emerald-400" : "text-primary"}`}>
                    {item.label}
                  </p>
                  <p className={`text-lg leading-relaxed font-light ${i === 0 ? "text-white/85" : "text-foreground/75"}`}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Our Services
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Three Core{" "}
                <span className="italic font-serif font-normal text-primary">Service Lines</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-7">
              {services.map((svc, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-transparent hover:border-primary/20 flex flex-col bg-white"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="relative overflow-hidden" style={{ height: "160px" }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 text-white/50 font-bold text-5xl leading-none select-none">{svc.num}</span>
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 -mt-10 relative z-10 border-4 border-white shadow-sm">
                      {svc.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-lg">
                      {svc.title}
                    </h3>
                    <p className="text-foreground/55 text-sm leading-relaxed flex-grow">
                      {svc.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#f0fdf8" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Why Choose Us
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                The EarnMore{" "}
                <span className="italic font-serif font-normal text-primary">Advantage</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/55 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected Projects ── */}
        <section id="projects" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Track Record
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Selected Infrastructure{" "}
                <span className="italic font-serif font-normal text-primary">Projects Delivered</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-2xl border border-gray-100 p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300 group flex flex-col gap-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {project.icon}
                    </div>
                    <span className="text-5xl font-bold text-gray-100 leading-none select-none">{project.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-primary text-xs font-bold mb-3">Total project cost: {project.cost}</p>
                    <p className="text-foreground/55 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section
          className="py-16 md:py-24"
          style={{ background: "linear-gradient(135deg, #061a16 0%, #0a2e28 60%, #0d3d2e 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-emerald-400" />
                Our Core Values
                <span className="w-6 h-px bg-emerald-400" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                The Principles That{" "}
                <span className="italic font-serif font-normal text-emerald-300">Drive Us</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl p-7 border border-emerald-800/40 hover:border-emerald-600/60 transition-all duration-300 group"
                  style={{ background: "rgba(13,61,46,0.4)", backdropFilter: "blur(8px)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-800/50 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-white mb-3">{val.label}</h3>
                  <p className="text-green-200/55 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Team ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Our Team
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Led by{" "}
                <span className="italic font-serif font-normal text-primary">World-Class Expertise</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row group hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Avatar */}
                  <div
                    className="flex-shrink-0 relative overflow-hidden"
                    style={{ width: "160px", minHeight: "220px", background: "linear-gradient(160deg, #0d3d2e 0%, #0a2e28 100%)" }}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[105%] object-contain object-bottom"
                        style={{ maxWidth: "none" }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-emerald-300/60">{member.initials}</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a2e28] to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-center p-7 gap-2">
                    <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{member.title}</p>
                    <p className="text-foreground/55 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <img
            src="/images/wind-farm.jpg"
            alt="Wind farm infrastructure"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(10,46,40,0.90) 0%, rgba(13,61,46,0.82) 100%)" }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-emerald-400" />
                Let's Build Together
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Have an Infrastructure{" "}
                <span className="italic font-serif font-normal text-emerald-300">Project in Mind?</span>
              </h2>
              <p className="text-green-200/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                From project structuring and financing to full delivery support, we bring the
                expertise and partnerships to make your infrastructure vision a reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-9 py-4 rounded-md transition-all group text-base"
              >
                Get in Touch
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
