import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, Clock, Layers, Award, Users, ChevronDown,
  CheckCircle2, BookOpen, ClipboardList, ArrowRight, Target,
} from "lucide-react";
import { Link } from "wouter";
import { useGetTrainingPaymentQuote } from "@workspace/api-client-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Seo from "@/components/seo";
import TrainingEnrollmentDialog from "@/components/training-enrollment-dialog";

/* ─── Data ─────────────────────────────────────────────────── */

const level1Modules = [
  {
    num: "01",
    title: "Introduction to ESG and Why It Matters",
    duration: "1 hour 20 minutes",
    day: "10 October 2026, Session 1",
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
    duration: "1 hour 20 minutes",
    day: "10 October 2026, Session 2",
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
    duration: "1 hour 20 minutes",
    day: "10 October 2026, Session 3",
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
    duration: "1 hour 20 minutes",
    day: "17 October 2026, Session 1",
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
    duration: "1 hour 20 minutes",
    day: "17 October 2026, Session 2",
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
    duration: "1 hour 20 minutes",
    day: "17 October 2026, Session 3",
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

const level2Highlights = [
  "Foundations of Corporate Sustainability",
  "The E Pillar: Climate Action and Environmental Management",
  "The S and G Pillars: Social Capital and Ethical Governance",
  "Global Regulatory and Disclosure Landscape",
  "ESG Data Architecture and Anti-Greenwashing",
  "Capstone: Building the Corporate ESG Roadmap",
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
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const trainingPrice = useGetTrainingPaymentQuote({
    query: {
      queryKey: ["training-page-price"],
      staleTime: 60_000,
      retry: 1,
    },
  });
  const usdPrice = trainingPrice.data
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(trainingPrice.data.usdTotalCents / 100)
    : null;

  return (
    <>
      <Seo
        title="Corporate ESG Training Programme | EarnMore Group"
        description="An 8-hour Corporate ESG Strategy and Compliance Level 1 training for junior and early-career staff, delivered on 10 and 17 October 2026. Contact EarnMore for Level 2 training."
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
                    Level 1 Training Programme
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                    Corporate ESG Strategy{" "}
                    <span className="italic font-serif font-normal text-primary">and Compliance</span>
                  </h1>
                  <p className="text-foreground/60 text-lg leading-relaxed mb-8 max-w-xl">
                    A practical foundation programme covering the ESG framework for junior and early-career staff. Learn through real reporting frameworks, global business cases, and practical exercises that connect ESG to everyday work.
                  </p>

                  {/* Stat badges */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {[
                      { icon: <Layers className="w-4 h-4" />, label: "6 Modules" },
                      { icon: <Clock className="w-4 h-4" />, label: "8 Total Hours" },
                      { icon: <Users className="w-4 h-4" />, label: "Level 1 Foundation" },
                      { icon: <Calendar className="w-4 h-4" />, label: "10 & 17 October 2026" },
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
                    <button
                      type="button"
                      onClick={() => setEnrollmentOpen(true)}
                      className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-md transition-all group"
                    >
                      Enroll Now
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
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
                      { icon: <Calendar className="w-4 h-4" />, label: "Dates", value: "10 & 17 October 2026" },
                      { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "8 hours total, 4 hours per day" },
                      { icon: <Layers className="w-4 h-4" />, label: "Format", value: "Online" },
                      { icon: <BookOpen className="w-4 h-4" />, label: "Modules", value: "6 Level 1 modules" },
                      { icon: <Award className="w-4 h-4" />, label: "Certificate", value: "EarnMore completion certificate" },
                      { icon: <Users className="w-4 h-4" />, label: "Who Should Attend", value: "Junior and early-career staff" },
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
                  <div className="px-7 py-4 bg-emerald-50 border-t border-emerald-100">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider">Course price</p>
                    {usdPrice ? (
                      <>
                        <p className="mt-1 text-lg font-bold text-foreground">{usdPrice} USD equivalent</p>
                        <p className="mt-1 text-xs text-foreground/60">
                          NGN 100,000 course fee plus USD 2 contingency. The exact NGN amount is shown in your fresh checkout quote.
                        </p>
                      </>
                    ) : (
                      <p className="mt-1 text-xs text-foreground/60">
                        NGN 100,000 course fee plus USD 2 contingency. A current USD equivalent is shown before checkout.
                      </p>
                    )}
                  </div>
                  <div className="px-7 py-5 bg-white border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => setEnrollmentOpen(true)}
                      className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3.5 rounded-md transition-all"
                    >
                      Enroll Now
                    </button>
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
                ESG Foundations,{" "}
                <span className="italic font-serif font-normal text-primary">Made Practical.</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                The scheduled programme is Level 1: Foundation. It introduces the environmental, social, and governance pillars using plain language, global business cases, and practical exercises for participants' day-to-day roles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6">
              <motion.div
                className="md:col-span-3 rounded-2xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="px-8 py-5" style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Scheduled Programme</span>
                  <h3 className="text-white text-2xl font-bold mt-1">Level 1: Foundation</h3>
                </div>
                <div className="bg-white px-8 py-6">
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-2">Target Audience</p>
                  <p className="text-foreground/65 text-sm mb-5 leading-relaxed">Junior and early-career staff (0-5 years). No prior ESG knowledge needed.</p>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-3">Programme Details</p>
                  <ul className="space-y-2 mb-5">
                    {["6 modules", "8 hours total", "4 hours on each training day", "Pass mark: 70%", "EarnMore completion certificate"].map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs text-primary font-semibold">10 & 17 October 2026</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="md:col-span-2 rounded-2xl border border-emerald-100 bg-white p-8 flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Need Level 2?</p>
                <h3 className="text-xl font-bold text-foreground mb-3">Talk to our team</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-5">Level 2 training is available on request. Contact EarnMore to discuss the right option for your team.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
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

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-7 py-5 mb-8 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-grow">
                <p className="text-primary font-bold mb-1">Level 1: Foundation</p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Designed for junior and early-career staff with no prior ESG knowledge. Six modules introduce ESG from the ground up using plain language, global examples, and practical exercises tied to participants' actual job roles. The programme ends with each participant building a personal ESG action plan.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-wrap gap-2 md:flex-col">
                <span className="text-xs bg-white border border-emerald-200 text-primary font-semibold px-3 py-1.5 rounded-lg">10 & 17 October 2026</span>
                <span className="text-xs bg-white border border-emerald-200 text-primary font-semibold px-3 py-1.5 rounded-lg">Pass mark: 70%</span>
              </div>
            </div>

            <div className="space-y-3">
              {level1Modules.map((mod, i) => (
                <ModuleCard key={mod.num} mod={mod} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Level 2 Interest Section ── */}
        <section className="py-14 md:py-20" style={{ background: "linear-gradient(135deg, #061a16 0%, #0a2e28 55%, #0d3d2e 100%)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:col-span-2">
                <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-emerald-400" />
                  Available on Request
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                  Take the Next Step with{" "}
                  <span className="italic font-serif font-normal text-emerald-300">Level 2.</span>
                </h2>
                <p className="text-green-100/70 leading-relaxed mb-7">
                  Level 2 is designed for mid-to-senior executives, sustainability leads, finance, and operations professionals who want deeper technical and strategic ESG capability.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "6 advanced modules",
                    "24 contact hours",
                    "80% assessment pass mark",
                    "ESG Institute-accredited certificate",
                  ].map((detail) => (
                    <p key={detail} className="flex items-center gap-3 text-sm text-green-100/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {detail}
                    </p>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-md transition-all group"
                >
                  Enquire About Level 2
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>

              <div className="lg:col-span-3">
                <p className="text-emerald-300 font-semibold mb-5">Advanced curriculum highlights</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {level2Highlights.map((module, index) => (
                    <div key={module} className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <span className="text-emerald-400 text-xs font-bold tracking-wider">MODULE {String(index + 7).padStart(2, "0")}</span>
                      <p className="text-white font-semibold text-sm leading-snug mt-2">{module}</p>
                    </div>
                  ))}
                </div>
                <p className="text-green-100/60 text-sm leading-relaxed mt-6">
                  Explore materiality, climate action, responsible governance, global reporting frameworks, audit-ready ESG data, and an investor-ready corporate ESG roadmap. Contact EarnMore to discuss Level 2 delivery for your team.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Level 1 Summary ── */}
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
                Level 1 Overview
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
                    <th className="px-6 py-4 text-left text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
                      Level 1: Foundation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { label: "Target Audience", value: "Junior and early-career staff (0-5 years). No prior ESG knowledge needed." },
                    { label: "Scheduled Sessions", value: "10 and 17 October 2026" },
                    { label: "Duration", value: "8 hours total, 4 hours per training day" },
                    { label: "Modules", value: "6 modules covering all three ESG pillars" },
                    { label: "Pass Mark", value: "70% on a 20-question written assessment" },
                    { label: "Certificate", value: "EarnMore completion certificate" },
                    { label: "Capstone", value: "Personal ESG action plan (5-minute presentation)" },
                    { label: "Frameworks Covered", value: "GRI, SASB, ISSB at introductory level" },
                    { label: "African Context", value: "Yes, throughout all modules" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                      <td className="px-6 py-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">{row.label}</td>
                      <td className="px-6 py-4 text-foreground/65">{row.value}</td>
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
                Level 1 sessions take place on 10 and 17 October 2026. Places are limited. Contact us to enrol your team or to discuss Level 2 training.
              </p>
              <button
                type="button"
                onClick={() => setEnrollmentOpen(true)}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-9 py-4 rounded-md transition-all group text-base"
              >
                Enroll Now
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>
      <TrainingEnrollmentDialog open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
      <Footer />
    </>
  );
}
