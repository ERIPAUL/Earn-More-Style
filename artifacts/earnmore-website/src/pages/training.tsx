import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, Clock, Layers, Award, Users, ChevronDown,
  CheckCircle2, BookOpen, ClipboardList, ArrowRight, Target,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Seo from "@/components/seo";

/* ─── Data ─────────────────────────────────────────────────── */

const level1Modules = [
  {
    num: "01",
    title: "Introduction to ESG and Why It Matters",
    duration: "4 hours",
    day: "Day 1, Session 1",
    topics: [
      "What is ESG? Definitions and real-world relevance",
      "How ESG affects everyday business decisions",
      "UN SDGs explained simply",
      "Who are stakeholders and why do they matter?",
      "ESG in global and emerging market contexts",
      "Your role in corporate sustainability",
    ],
    outcome:
      "Participants explain ESG in plain language and identify at least three ESG risks or opportunities relevant to their employer.",
    exercise:
      "One-page ESG snapshot of a familiar company, shared and discussed with peers.",
    assessment: "Formative only. No graded submission for this module.",
  },
  {
    num: "02",
    title: "Environment Basics: Climate, Carbon and Your Company",
    duration: "4 hours",
    day: "Day 1, Session 2",
    topics: [
      "Climate change explained plainly",
      "What is a carbon footprint?",
      "Scope 1, 2 and 3 emissions",
      "How companies track and reduce emissions",
      "Circular economy and waste reduction basics",
      "Entry-level sustainability actions you can take",
    ],
    outcome:
      "Learners identify the main sources of emissions in a given business and explain what Scope 1, 2, and 3 mean without jargon.",
    exercise:
      "Emissions source identification worksheet for a provided company scenario.",
    assessment: "Formative only.",
  },
  {
    num: "03",
    title: "Social Responsibility: People, Fair Work and Community",
    duration: "4 hours",
    day: "Day 2, Session 1",
    topics: [
      "What social responsibility means at work",
      "Fair wages, labour rights and safe conditions",
      "Diversity, equity and inclusion basics",
      "Supply chain awareness for non-specialists",
      "Community impact and social licence to operate",
      "Recognising and reporting ethical concerns",
    ],
    outcome:
      "Participants identify social risks in a business scenario and describe the reporting or escalation process available to junior staff.",
    exercise:
      "Group case study: spot three social issues in a fictional company's operations and propose two improvements.",
    assessment: "Formative only.",
  },
  {
    num: "04",
    title: "Governance Foundations: Rules, Ethics and Accountability",
    duration: "4 hours",
    day: "Day 2, Session 2",
    topics: [
      "What is corporate governance?",
      "Boards, management and accountability structures",
      "Anti-corruption basics: FCPA and UK Bribery Act overview",
      "Data privacy as a governance responsibility",
      "Whistleblower protections and speaking up safely",
      "Your personal role in governance culture",
    ],
    outcome:
      "Participants explain the purpose of governance structures and describe at least two ways junior staff contribute to ethical corporate culture.",
    exercise:
      "Scenario analysis: identify governance red flags in four short vignettes and recommend appropriate responses.",
    assessment: "Formative only.",
  },
  {
    num: "05",
    title: "ESG Reporting and Measurement: Reading the Numbers",
    duration: "4 hours",
    day: "Day 3, Session 1",
    topics: [
      "Why companies report ESG data",
      "Key frameworks: GRI, SASB and ISSB simplified",
      "How to read a sustainability report",
      "Understanding materiality",
      "Spotting greenwashing",
      "How junior staff contribute to data collection",
    ],
    outcome:
      "Learners read a provided sustainability report excerpt and identify key metrics, gaps, and one potential greenwashing risk.",
    exercise:
      "Sustainability report review exercise: annotate a provided extract using a guided question sheet.",
    assessment: "Formative only.",
  },
  {
    num: "06",
    title: "Capstone: Your Personal ESG Action Plan",
    duration: "4 hours",
    day: "Day 4 (Full Day)",
    topics: [
      "Linking ESG to your day-to-day role",
      "Building a personal ESG commitment",
      "Team-level sustainability quick wins",
      "Presenting ESG ideas to line managers",
      "Group presentations and peer review",
      "Planning for continued learning",
    ],
    outcome:
      "Participants present a practical, role-specific ESG action plan covering at least one environmental, one social, and one governance commitment.",
    exercise:
      "5-minute individual or pair presentation of a personal ESG action plan with peer and facilitator feedback.",
    assessment:
      "20-question written assessment. Pass mark: 70%. Participants who pass receive a completion certificate.",
  },
];

const level2Modules = [
  {
    num: "07",
    title: "Foundations of Corporate Sustainability",
    duration: "4 hours",
    day: "Day 1, Session 1",
    topics: [
      "Evolution from CSR to ESG",
      "The business case for sustainability",
      "UN SDGs overview",
      "Double materiality concept",
      "ESG in emerging markets",
      "Stakeholder versus shareholder theory",
    ],
    outcome:
      "Participants articulate the strategic case for ESG, explain double materiality, and identify sector-specific ESG priorities for their organisation.",
    exercise:
      "Baseline materiality matrix for a selected industry sector, peer-reviewed in class.",
    assessment: "Peer-reviewed in session. Informs the capstone ESG roadmap.",
  },
  {
    num: "08",
    title: "The E Pillar: Climate Action and Environmental Management",
    duration: "4 hours",
    day: "Day 1, Session 2",
    topics: [
      "GHG Protocol basics",
      "Scope 1, 2 and 3 emissions",
      "Circular economy principles",
      "Biodiversity risk assessment",
      "Transition risk using the ClearSight method",
      "Net zero pathways and science-based targets",
    ],
    outcome:
      "Participants quantify emissions across all three scopes for a provided company profile and outline a credible net-zero pathway.",
    exercise:
      "Emissions calculation exercise across Scope 1, 2 and 3 for a provided scenario.",
    assessment: "Formative. Output feeds into the capstone roadmap.",
  },
  {
    num: "09",
    title: "The S and G Pillars: Social Capital and Ethical Governance",
    duration: "4 hours",
    day: "Day 2, Session 1",
    topics: [
      "Supply chain human rights due diligence",
      "Labour standards and fair wages",
      "DEI metrics and measurement",
      "Board diversity and executive compensation",
      "Anti-corruption and data privacy (FCPA, UK Bribery Act)",
      "Whistleblower protections and ethics hotlines",
    ],
    outcome:
      "Participants complete a supplier code of conduct using a provided template and identify governance gaps in a provided company profile.",
    exercise:
      "Supplier code of conduct draft using the provided template. 15-minute group debrief.",
    assessment: "Graded submission. Reviewed by facilitator.",
  },
  {
    num: "10",
    title: "Global Regulatory and Disclosure Landscape",
    duration: "4 hours",
    day: "Day 2, Session 2",
    topics: [
      "GRI standards in depth",
      "SASB and ISSB frameworks",
      "EU CSRD mandatory requirements",
      "TCFD climate risk reporting",
      "Africa and emerging market disclosure trends",
      "Geographic footprint obligation mapping",
    ],
    outcome:
      "Participants map the regulatory obligations that apply to a provided company profile, by framework and jurisdiction.",
    exercise:
      "Regulatory obligation matrix completed for a provided company profile.",
    assessment: "Graded submission. Reviewed by facilitator.",
  },
  {
    num: "11",
    title: "ESG Data Architecture and Anti-Greenwashing",
    duration: "4 hours",
    day: "Day 3, Session 1",
    topics: [
      "Internal data collection pipelines",
      "Auditable metric design",
      "Identifying greenwashing risk",
      "Materiality-led disclosure principles",
      "Limited versus reasonable assurance",
      "Third-party verification preparation",
    ],
    outcome:
      "Participants design a data collection pipeline and audit checklist for a provided organisation, and identify two greenwashing risks in a provided report extract.",
    exercise:
      "Data audit checklist development for a provided company scenario.",
    assessment: "Graded submission. Reviewed by facilitator.",
  },
  {
    num: "12",
    title: "Capstone: Building the Corporate ESG Roadmap",
    duration: "4 hours",
    day: "Day 4 (Full Day)",
    topics: [
      "Group presentations and peer review",
      "Integrating ESG into corporate budgets",
      "Building an investor-ready ESG deck",
      "Executive board sign-off mechanics",
      "Communicating ESG to stakeholders",
      "Continuous improvement frameworks",
    ],
    outcome:
      "Participants present a complete, investor-ready corporate ESG roadmap covering all three pillars with a phased implementation timeline.",
    exercise:
      "Full ESG roadmap presentation (10 minutes plus Q and A). Peer and facilitator assessed using a structured rubric.",
    assessment:
      "30-question digital assessment. Pass mark: 80%. Participants who pass receive the ESG Institute-accredited certificate.",
  },
];

/* ─── Module Accordion ─────────────────────────────────────── */

function ModuleCard({ mod, index }: { mod: (typeof level1Modules)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-100 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <button
        className="w-full text-left p-6 flex items-start gap-5 hover:bg-gray-50 transition-colors group"
        onClick={() => setOpen(!open)}
      >
        {/* Number badge */}
        <span
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ background: open ? "#059669" : "#f0fdf8", color: open ? "#fff" : "#059669" }}
        >
          {mod.num}
        </span>
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
              {mod.title}
            </h3>
          </div>
          <div className="flex items-center gap-4 text-xs text-foreground/45">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {mod.duration}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {mod.day}</span>
          </div>
        </div>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-foreground/40 mt-0.5 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-7 grid md:grid-cols-2 gap-6 border-t border-gray-100 pt-5">
              {/* Topics */}
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Topics Covered
                </p>
                <ul className="space-y-2">
                  {mod.topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/65">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column */}
              <div className="space-y-5">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" /> Learning Outcome
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{mod.outcome}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ClipboardList className="w-3.5 h-3.5" /> Module Exercise
                  </p>
                  <p className="text-sm text-foreground/65 leading-relaxed">{mod.exercise}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> Assessment
                  </p>
                  <p className="text-sm text-foreground/65 leading-relaxed">{mod.assessment}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function TrainingPage() {
  const [activeLevel, setActiveLevel] = useState<"l1" | "l2">("l1");

  return (
    <>
      <Seo
        title="Corporate ESG Training Programme | EarnMore Group"
        description="A full ESG training programme from entry level to senior executive. 48 hours across 8 days. Hybrid delivery. ESG Institute-accredited certificate on completion."
        keywords="ESG training Nigeria, ESG course Africa, sustainability training, corporate ESG programme, ESG Institute certificate"
        canonical="/training"
        ogImage="https://earnmoregroup.com/og/training.jpg"
      />
      <Navbar />
      <main className="min-h-screen bg-background text-foreground font-sans">

        {/* ── Hero ── */}
        <section className="pt-28 pb-0 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

              {/* Left */}
              <div className="lg:col-span-3 pb-14">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
                    <span className="w-6 h-px bg-primary" />
                    Full Training Programme
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                    Corporate ESG Strategy{" "}
                    <span className="italic font-serif font-normal text-primary">and Compliance</span>
                  </h1>
                  <p className="text-foreground/60 text-lg leading-relaxed mb-8 max-w-xl">
                    A complete two-level programme covering the full ESG framework, from foundations for junior staff to advanced strategic and regulatory content for senior executives. Grounded in real reporting frameworks, global business cases, and practical exercises.
                  </p>

                  {/* Stat badges */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {[
                      { icon: <Layers className="w-4 h-4" />, label: "12 Modules" },
                      { icon: <Clock className="w-4 h-4" />, label: "48 Contact Hours" },
                      { icon: <Users className="w-4 h-4" />, label: "All Levels Welcome" },
                      { icon: <Calendar className="w-4 h-4" />, label: "Starts 28 Aug 2026" },
                    ].map((b, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-foreground/65 font-medium"
                      >
                        <span className="text-primary">{b.icon}</span>
                        {b.label}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-md transition-all group"
                    >
                      Enquire Now
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right: Course Details Card */}
              <motion.div
                className="lg:col-span-2 lg:sticky lg:top-24 pb-14"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  {/* Card header */}
                  <div className="px-7 py-5" style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Course Details</p>
                    <p className="text-white font-bold text-lg leading-snug">
                      Corporate ESG Strategy and Compliance
                    </p>
                  </div>
                  {/* Detail rows */}
                  <div className="bg-white divide-y divide-gray-100">
                    {[
                      { icon: <Calendar className="w-4 h-4" />, label: "Dates", value: "28 Aug – 4 Sep 2026" },
                      { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "8 days · 48 contact hours" },
                      { icon: <Layers className="w-4 h-4" />, label: "Format", value: "Hybrid (in-person and online)" },
                      { icon: <BookOpen className="w-4 h-4" />, label: "Modules", value: "12 (6 per level)" },
                      { icon: <Award className="w-4 h-4" />, label: "Certificate", value: "ESG Institute-accredited (Level 2)" },
                      { icon: <Users className="w-4 h-4" />, label: "Who Should Attend", value: "All staff, entry level to senior executive" },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start gap-4 px-7 py-4">
                        <span className="text-primary mt-0.5 flex-shrink-0">{row.icon}</span>
                        <div className="flex-grow min-w-0">
                          <p className="text-xs text-foreground/40 mb-0.5">{row.label}</p>
                          <p className="text-sm font-semibold text-foreground">{row.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-7 py-5 bg-white border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3.5 rounded-md transition-all"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Programme Overview ── */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#f0fdf8" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Programme Overview
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                Two Levels.{" "}
                <span className="italic font-serif font-normal text-primary">One Complete Programme.</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                This programme covers the full ESG framework across two levels. Both levels use global business case studies, practical exercises, and real reporting frameworks to make the content directly applicable to participants' day-to-day work. The two levels can be delivered sequentially as part of an organisation-wide ESG capability programme, or independently based on audience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  tag: "Level 1",
                  title: "Foundation",
                  audience: "Junior and early-career staff (0-5 years). No prior ESG knowledge needed.",
                  details: ["6 modules", "24 contact hours", "4 days", "Pass mark: 70%", "Completion certificate"],
                  days: "Days 1-4 (28-31 Aug 2026)",
                  color: "#0a2e28",
                },
                {
                  tag: "Level 2",
                  title: "Advanced",
                  audience: "Mid-to-senior executives, sustainability leads, finance and operations professionals.",
                  details: ["6 modules", "24 contact hours", "4 days", "Pass mark: 80%", "ESG Institute-accredited certificate"],
                  days: "Days 5-8 (1-4 Sep 2026)",
                  color: "#059669",
                },
              ].map((level, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-sm border border-transparent hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="px-8 py-5" style={{ background: `linear-gradient(135deg, ${level.color} 0%, #0d3d2e 100%)` }}>
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{level.tag}</span>
                    <h3 className="text-white text-2xl font-bold mt-1">{level.title}</h3>
                  </div>
                  <div className="bg-white px-8 py-6">
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-2">Target Audience</p>
                    <p className="text-foreground/65 text-sm mb-5 leading-relaxed">{level.audience}</p>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-3">Programme Details</p>
                    <ul className="space-y-2 mb-5">
                      {level.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs text-primary font-semibold">{level.days}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Curriculum ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Curriculum
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Module{" "}
                <span className="italic font-serif font-normal text-primary">Breakdown</span>
              </h2>
            </motion.div>

            {/* Level tabs */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex rounded-xl border border-gray-200 p-1 bg-gray-50">
                {[
                  { id: "l1" as const, label: "Level 1: Foundation", sub: "Modules 1-6 · Days 1-4" },
                  { id: "l2" as const, label: "Level 2: Advanced", sub: "Modules 7-12 · Days 5-8" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLevel(tab.id)}
                    className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 text-left ${
                      activeLevel === tab.id
                        ? "bg-primary text-white shadow-sm"
                        : "text-foreground/55 hover:text-foreground"
                    }`}
                  >
                    <span className="block">{tab.label}</span>
                    <span className={`block text-xs font-normal mt-0.5 ${activeLevel === tab.id ? "text-white/70" : "text-foreground/35"}`}>
                      {tab.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level context banner */}
            <AnimatePresence mode="wait">
              {activeLevel === "l1" ? (
                <motion.div
                  key="l1-banner"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50 px-7 py-5 mb-8 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex-grow">
                    <p className="text-primary font-bold mb-1">Level 1: Foundation</p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Designed for junior and early-career staff with no prior ESG knowledge. Six modules introduce ESG from the ground up using plain language, global examples, and practical exercises tied to participants' actual job roles. The programme ends with each participant building a personal ESG action plan.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-wrap gap-2 md:flex-col">
                    <span className="text-xs bg-white border border-emerald-200 text-primary font-semibold px-3 py-1.5 rounded-lg">28-31 Aug 2026</span>
                    <span className="text-xs bg-white border border-emerald-200 text-primary font-semibold px-3 py-1.5 rounded-lg">Pass mark: 70%</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="l2-banner"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50 px-7 py-5 mb-8 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex-grow">
                    <p className="text-primary font-bold mb-1">Level 2: Advanced</p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Designed for mid-to-senior executives, sustainability leads, finance and operations professionals. Six modules provide rigorous technical and strategic grounding in ESG, working with real reporting frameworks, regulatory requirements, and data architecture. The programme concludes with each participant developing an investor-ready corporate ESG roadmap.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-wrap gap-2 md:flex-col">
                    <span className="text-xs bg-white border border-emerald-200 text-primary font-semibold px-3 py-1.5 rounded-lg">1-4 Sep 2026</span>
                    <span className="text-xs bg-white border border-emerald-200 text-primary font-semibold px-3 py-1.5 rounded-lg">Pass mark: 80%</span>
                    <span className="text-xs bg-white border border-emerald-200 text-primary font-semibold px-3 py-1.5 rounded-lg">ESG Institute accredited</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Module cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLevel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {(activeLevel === "l1" ? level1Modules : level2Modules).map((mod, i) => (
                  <ModuleCard key={mod.num} mod={mod} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#f0fdf8" }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-primary" />
                Programme Comparison
                <span className="w-6 h-px bg-primary" />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                At a{" "}
                <span className="italic font-serif font-normal text-primary">Glance</span>
              </h2>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="bg-white px-6 py-4 text-left text-xs font-bold text-foreground/40 uppercase tracking-wider w-1/3"></th>
                    <th className="px-6 py-4 text-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
                      Level 1: Foundation
                    </th>
                    <th className="px-6 py-4 text-center text-white text-sm font-bold bg-primary">
                      Level 2: Advanced
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { label: "Target Audience", l1: "Junior and early-career staff (0-5 years). No prior ESG knowledge needed.", l2: "Mid-to-senior executives, sustainability leads, finance and operations professionals." },
                    { label: "Dates", l1: "28-31 August 2026", l2: "1-4 September 2026" },
                    { label: "Duration", l1: "24 contact hours · 4 days", l2: "24 contact hours · 4 days" },
                    { label: "Modules", l1: "6 modules covering all three ESG pillars", l2: "6 modules with deeper technical and strategic content" },
                    { label: "Pass Mark", l1: "70% on 20-question written assessment", l2: "80% on 30-question digital assessment" },
                    { label: "Certificate", l1: "EarnMore Group completion certificate", l2: "ESG Institute-accredited certificate" },
                    { label: "Capstone", l1: "Personal ESG action plan (5-minute presentation)", l2: "Corporate ESG roadmap (10-minute presentation plus Q and A)" },
                    { label: "Frameworks Covered", l1: "GRI, SASB, ISSB at introductory level", l2: "GRI, SASB, ISSB, CSRD, TCFD in depth" },
                    { label: "African Context", l1: "Yes, throughout all modules", l2: "Yes, including JSE and Nigerian SEC guidelines" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                      <td className="px-6 py-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">{row.label}</td>
                      <td className="px-6 py-4 text-foreground/65 text-center">{row.l1}</td>
                      <td className="px-6 py-4 text-foreground/65 text-center">{row.l2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <img
            src="/images/professional-training.jpg"
            alt="Professional training session"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(10,46,40,0.92) 0%, rgba(13,61,46,0.85) 100%)" }}
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
                Enrol Your Team
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ready to Build Your{" "}
                <span className="italic font-serif font-normal text-emerald-300">ESG Capability?</span>
              </h2>
              <p className="text-green-200/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                The programme runs from 28 August to 4 September 2026. Places are limited. Contact us to discuss enrolment for your team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-9 py-4 rounded-md transition-all group text-base"
              >
                Enquire Now
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
