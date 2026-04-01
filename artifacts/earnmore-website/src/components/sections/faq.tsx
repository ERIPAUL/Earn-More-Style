import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What service does EarnMore offer to businesses?",
    answer:
      "EarnMore provides a comprehensive range of sustainability services including strategy development, sustainability planning, implementation of sustainable practices, and compliance with environmental regulations and standards. Our team of experts collaborates with your business to create tailor-made solutions that align with your sustainability goals and objectives.",
  },
  {
    question: "How does EarnMore ensure that the sustainability strategies are practical and impactful?",
    answer:
      "At EarnMore we know that every business is unique even in highly competitive industries; so we listen intently, observe, and analyse your business's unique context, objectives, and operational constraints to develop strategies that are not only feasible but also bring about significant positive environmental and social impacts. By combining industry best practices with innovative approaches, we ensure the strategies are practical, cost-effective, and contribute positively to your bottom line.",
  },
  {
    question: "Can EarnMore provide references or case studies demonstrating success?",
    answer:
      "Absolutely! EarnMore is proud to have partnered with numerous businesses and government entities to help them achieve their sustainability targets. We can share case studies and references that illustrate our approach, the challenges overcome, and the results achieved for various types of clients. Please reach out to us directly, and we'd be happy to provide specific examples most relevant to your industry and sustainability objectives.",
  },
  {
    question: "What kind of experience does the EarnMore consulting team possess?",
    answer:
      "EarnMore boasts a multi-disciplinary team of consultants who bring cross-industry experience and in-depth knowledge to the table. Our teams have successfully guided various institutions — ranging from small enterprises to government agencies — in achieving their sustainability goals. With a robust understanding of both market dynamics and sustainability challenges, our team is well-equipped to provide bespoke solutions for your business.",
  },
  {
    question: "How does EarnMore assist in the implementation and compliance of sustainability initiatives?",
    answer:
      "Implementation and compliance are crucial aspects of any sustainability initiative. EarnMore supports your business through the entire process by assisting in the rollout of sustainability strategies, monitoring progress, ensuring adherence to relevant legal and regulatory frameworks, and adjusting plans as necessary to achieve desired outcomes. We also offer training and support to your staff to foster a culture of sustainability within your organization.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Frequently Asked{" "}
            <span className="text-primary font-serif italic font-normal">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-border rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {openIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-foreground/70 leading-relaxed border-t border-border pt-5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
