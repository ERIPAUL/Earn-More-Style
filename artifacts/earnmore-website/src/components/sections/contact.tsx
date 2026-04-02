import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" />
            Contact Us
            <span className="w-6 h-px bg-primary" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Let's Talk About{" "}
            <span className="italic font-serif font-normal text-primary">Your Future</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/60 leading-relaxed">
              Whether you're exploring sustainability strategies, seeking ESG guidance, or looking for a strategic partner — we're ready to start a meaningful conversation.
            </p>

            {[
              {
                icon: <Mail className="w-5 h-5" />,
                label: "Email Us",
                value: "info@earnmoregroup.com",
                href: "mailto:info@earnmoregroup.com",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-0.5">{item.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Book session CTA */}
            <div
              className="rounded-2xl p-8 mt-4"
              style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}
            >
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Get Started Free</p>
              <h3 className="text-xl font-bold text-white mb-3">Book a Free Clarity Session</h3>
              <p className="text-green-200/55 text-sm mb-6 leading-relaxed">
                30 minutes to explore how we can help your organization achieve its sustainability goals.
              </p>
              <a
                href="https://calendly.com/esg-earnmoreapp/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-all group"
              >
                Book Now
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-border shadow-md p-10">
              <h3 className="text-2xl font-bold mb-1 text-foreground">Send us a message</h3>
              <p className="text-foreground/45 text-sm mb-8">
                Just enter the details below, and watch how your business grows.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label}>
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={label === "First Name" ? "Jane" : "Doe"}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Your company or institution"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                    Service of Interest
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition bg-white appearance-none">
                    <option value="">Select a service...</option>
                    <option>Sustainable Infrastructure Finance</option>
                    <option>Climate Finance Solutions</option>
                    <option>ESG Structures</option>
                    <option>Sustainability Policy Reviews</option>
                    <option>Training and Capacity Building</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your sustainability goals..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-md transition-colors flex items-center justify-center gap-3 group"
                >
                  Submit Message
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                <p className="text-xs text-foreground/35 text-center">
                  By submitting, you agree to our Terms & Conditions. We won't sell your info.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
