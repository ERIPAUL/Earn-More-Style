import { Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #0a2e28 0%, #0d3d2e 100%)" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <img src="/logo.png" alt="Earnmore Consultants" className="h-9 w-auto object-contain" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-green-200/55 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Sustainable Infrastructure Finance",
                "Climate Finance Solutions",
                "ESG Structures",
                "Sustainability Policy Reviews",
                "Training & Capacity Building",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-green-200/55 hover:text-emerald-400 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & ESG App */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-green-200/55 mb-5">
              <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@earnmoregroup.com">info@earnmoregroup.com</a>
              </li>
            </ul>

            {/* ESG App CTA */}
            <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-4">
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">ESG Platform</p>
              <p className="text-green-200/60 text-xs mb-3 leading-relaxed">
                Explore our ESG impact platform, EarnMore App.
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
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-green-200/35">
            &copy; {new Date().getFullYear()} EarnMore Consultants. All rights reserved.
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            {[
              { label: "About Us", href: "/about" },
              { label: "Terms and Conditions", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Contact Us", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-green-200/35 hover:text-emerald-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
