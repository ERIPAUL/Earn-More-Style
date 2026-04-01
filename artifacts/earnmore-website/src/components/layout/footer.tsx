import { Mail, Globe, Leaf, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
      {/* Newsletter bar */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Stay Informed</p>
            <h3 className="text-2xl font-bold text-white">Join Our Weekly Newsletter</h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-72 px-5 py-3 rounded-md bg-white/10 border border-white/15 text-white placeholder-green-200/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-colors group"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src="/logo.png" alt="Earnmore Consultants" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-green-200/50 text-sm leading-relaxed mb-6">
              A sustainability consultancy providing practical strategies and impactful solutions for a greener, more prosperous future.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <Leaf className="w-4 h-4" />
              Sustainability First
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Who We Are", href: "#who-we-are" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-green-200/55 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Sustainable Infrastructure Finance",
                "Climate Finance Solutions",
                "ESG Structures",
                "Sustainability Policy Reviews",
                "Training & Capacity Building",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-green-200/55 hover:text-emerald-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & ESG App */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-green-200/55 mb-8">
              <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@earnmoregroup.com">info@earnmoregroup.com</a>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <a href="https://www.earnmoregroup.com" target="_blank" rel="noopener noreferrer">
                  www.earnmoregroup.com
                </a>
              </li>
            </ul>

            {/* ESG App CTA */}
            <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-5">
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">ESG Platform</p>
              <p className="text-green-200/60 text-sm mb-4 leading-relaxed">
                Explore our ESG impact platform — EarnMore App.
              </p>
              <a
                href="https://earnmoreapp.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
              >
                earnmoreapp.co →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-green-200/35">
            &copy; {new Date().getFullYear()} EarnMore Consultants. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            {["About Us", "Terms and Conditions", "Privacy Policy", "Contact Us"].map((l) => (
              <a key={l} href="#" className="text-xs text-green-200/35 hover:text-emerald-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
