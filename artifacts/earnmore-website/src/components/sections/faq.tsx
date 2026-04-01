import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What service does EarnMore offer to businesses?",
    answer:
      "EarnMore provides a comprehensive range of sustainability services including strategy development, sustainability planning, implementation of sustainable practices, and compliance with environmental regulations and standards. Our team collaborates with your business to create tailor-made solutions that align with your sustainability goals.",
  },
  {
    question: "How does EarnMore ensure sustainability strategies are practical and impactful?",
    answer:
      "We listen intently, observe, and analyse your business's unique context, objectives, and operational constraints to develop strategies that are not only feasible but also bring about significant positive environmental and social impacts. By combining industry best practices with innovative approaches, we ensure the strategies are practical, cost-effective, and contribute positively to your bottom line.",
  },
  {
    question: "Can EarnMore provide references or case studies demonstrating success?",
    answer:
      "Absolutely! EarnMore is proud to have partnered with numerous businesses and government entities to help them achieve their sustainability targets. We can share case studies and references that illustrate our approach, the challenges overcome, and the results achieved for various types of clients.",
  },
  {
    question: "What kind of experience does the EarnMore consulting team possess?",
    answer:
      "EarnMore boasts a multi-disciplinary team of consultants who bring cross-industry experience and in-depth knowledge to the table. Our teams have successfully guided various institutions — ranging from small enterprises to government agencies — in achieving their sustainability goals.",
  },
  {
    question: "How does EarnMore assist in implementation and compliance of sustainability initiatives?",
    answer:
      "EarnMore supports your business through the entire process by assisting in the rollout of sustainability strategies, monitoring progress, ensuring adherence to relevant legal and regulatory frameworks, and adjusting plans as necessary. We also offer training and support to your staff to foster a culture of sustainability within your organization.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#f0fdf8" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Frequently Asked{" "}
              <span className="italic font-serif font-normal text-primary">Questions</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-10">
              Everything you need to know about working with EarnMore Group. Can't find an answer? Reach out to our team directly.
            </p>

            {/* Visual stats block */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
            >
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Quick Overview</p>
              <p className="text-white font-bold text-2xl mb-6">Our Impact By Numbers</p>

              {[
                { label: "Client Satisfaction", pct: 98 },
                { label: "Project Success Rate", pct: 95 },
                { label: "On-Time Delivery", pct: 90 },
              ].map((item, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-green-200/70 text-xs font-medium">{item.label}</span>
                    <span className="text-emerald-400 text-xs font-bold">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                    />
                  </div>
                </div>
              ))}

              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-all group"
              >
                Contact Us
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl overflow-hidden border transition-all duration-200 ${
                  openIdx === idx ? "border-primary/30 shadow-md" : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className={`font-semibold text-sm leading-snug ${openIdx === idx ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      openIdx === idx ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {openIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-5 text-foreground/60 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
