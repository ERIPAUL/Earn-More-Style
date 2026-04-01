import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "contact@earnmoregroup.com",
    href: "mailto:contact@earnmoregroup.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+1 (800) EMG-EARN",
    href: "tel:+18003643276",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Headquarters",
    value: "New York, NY — United States",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(43_74%_66%_/_0.05),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Heading & contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary" />
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Ready to earn more?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-14 max-w-md">
              Whether you're exploring investment opportunities, partnership options, or have questions about our services — our team is ready to begin a meaningful conversation.
            </p>

            <div className="space-y-8">
              {contactDetails.map((detail, idx) => (
                <motion.a
                  key={idx}
                  href={detail.href}
                  className="flex items-center gap-5 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1">
                      {detail.label}
                    </p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {detail.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-2 border border-primary/15 z-0" />
            <form
              className="relative z-10 bg-card border border-border p-10 md:p-12 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">
                  Inquiry Type
                </label>
                <select className="w-full bg-background border border-border px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="">Select an option</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="wealth">Wealth Management</option>
                  <option value="partnership">Partnership / Advisory</option>
                  <option value="esg">ESG / EGG Initiative</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-none font-bold uppercase tracking-widest h-14 text-sm group"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respond to all serious inquiries within 1–2 business days.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
