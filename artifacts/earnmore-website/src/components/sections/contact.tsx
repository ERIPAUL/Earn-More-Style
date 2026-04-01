import { motion } from "framer-motion";
import { Mail, Globe, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let's Talk About{" "}
              <span className="text-primary font-serif italic font-normal">Your Future</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10">
              Whether you're exploring sustainability strategies, seeking ESG guidance, or looking for a strategic partner — we're ready to start a meaningful conversation.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "info@earnmoregroup.com",
                  href: "mailto:info@earnmoregroup.com",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  label: "Website",
                  value: "www.earnmoregroup.com",
                  href: "https://www.earnmoregroup.com",
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
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Book session CTA */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #0f2b2b 0%, #1a4d35 100%)" }}
            >
              <p className="text-emerald-300 text-sm font-semibold mb-2">Ready to get started?</p>
              <h3 className="text-2xl font-bold text-white mb-4">Book a Free Clarity Session</h3>
              <p className="text-green-200/60 text-sm mb-6">
                Get a free 30-minute consultation to explore how we can help your organization achieve its sustainability goals.
              </p>
              <a
                href="mailto:info@earnmoregroup.com?subject=Book a Free Clarity Session"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-full transition-all group"
              >
                Click here to book <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-border shadow-lg shadow-green-900/5 p-10">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-foreground/50 text-sm mb-8">
                Just enter the details below, and watch how your business grows.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Your company or institution"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 block">
                    Service of Interest
                  </label>
                  <select className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition appearance-none bg-white">
                    <option value="">Select a service</option>
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
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-full transition-colors flex items-center justify-center gap-2 group"
                >
                  Submit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-foreground/40 text-center">
                  By submitting, you agree to our Terms & Conditions. We won't sell your info. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
