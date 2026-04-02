import { Link } from "wouter";
import Seo from "@/components/seo";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function EsgConsultingNigeria() {
  return (
    <>
      <Seo
        title="ESG Consulting Nigeria — EarnMore Consultants"
        description="Leading ESG consulting firm in Nigeria. EarnMore Consultants helps Nigerian businesses build robust ESG frameworks, meet regulatory standards, and attract sustainable investment."
        keywords="ESG consulting Nigeria, ESG advisory Nigeria, environmental social governance Nigeria, ESG framework Nigeria, ESG strategy Nigeria, ESG compliance Nigeria"
        canonical="/services/esg-consulting-nigeria"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ESG Consulting Nigeria",
            "provider": {
              "@type": "Organization",
              "name": "EarnMore Consultants",
              "url": "https://earnmoregroup.com",
              "address": { "@type": "PostalAddress", "addressCountry": "NG", "addressRegion": "Lagos" }
            },
            "description": "ESG consulting services for Nigerian businesses and institutions.",
            "areaServed": "Nigeria",
            "serviceType": "ESG Consulting"
          })
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0a2e28] pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">ESG Consulting · Nigeria</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            ESG Consulting in Nigeria — Building Sustainable, Investable Businesses
          </h1>
          <p className="text-green-200/70 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            EarnMore Consultants is Nigeria's trusted ESG advisory firm. We help corporates, financial institutions, and government bodies design, implement, and report ESG frameworks that satisfy international investors, regulators, and stakeholders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">

          <h2 className="text-3xl font-bold text-[#0a2e28] mb-6">What Is ESG and Why Does It Matter for Nigerian Businesses?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ESG — Environmental, Social, and Governance — is a framework used by investors, regulators, and global supply chains to evaluate a company's long-term sustainability and ethical impact. In Nigeria, ESG compliance is no longer optional. The Securities and Exchange Commission (SEC Nigeria), the Nigerian Exchange Group (NGX), and international development finance institutions (DFIs) are all integrating ESG criteria into their investment and listing requirements.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            For Nigerian businesses looking to access international capital markets, attract foreign direct investment, or partner with global corporations, having a credible ESG framework is increasingly a prerequisite. EarnMore Consultants has guided organisations across banking, manufacturing, energy, real estate, and the public sector through this journey — delivering ESG structures that are both locally relevant and globally recognised.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Our ESG Consulting Services in Nigeria</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our ESG consulting practice in Nigeria covers the full lifecycle — from initial materiality assessments to ongoing ESG reporting and stakeholder engagement. Here is what we offer:
          </p>

          {[
            {
              title: "ESG Materiality Assessments",
              body: "We help your organisation identify which ESG issues are most material to your business and your stakeholders. This forms the foundation of your entire ESG strategy and ensures resources are focused where they create the most impact — and manage the highest risks."
            },
            {
              title: "ESG Framework Design & Policy Development",
              body: "We design customised ESG frameworks aligned with globally recognised standards including GRI, SASB, TCFD, and the emerging IFRS Sustainability Disclosure Standards (S1 and S2). Our policy templates are tailored for Nigerian regulatory requirements and international best practice."
            },
            {
              title: "ESG Governance Structures",
              body: "Strong ESG performance starts at the board level. We help Nigerian companies establish ESG governance committees, define board-level ESG responsibilities, and integrate ESG KPIs into executive remuneration structures — meeting the expectations of international institutional investors."
            },
            {
              title: "ESG Due Diligence for Investors",
              body: "We conduct ESG due diligence reviews for private equity funds, development finance institutions, and strategic investors assessing Nigerian businesses and infrastructure projects — providing a clear, evidence-based picture of ESG risks and opportunities."
            },
            {
              title: "ESG Reporting & Disclosure",
              body: "We prepare your first ESG report or help you upgrade existing disclosures to align with IFRS S1, IFRS S2, GRI Standards, or the UN Sustainable Development Goals (SDGs). Our reports are designed to communicate credibly with global investors and domestic regulators alike."
            },
            {
              title: "Stakeholder Engagement & ESG Communication",
              body: "We develop stakeholder engagement strategies and communication materials that build trust with communities, regulators, investors, and employees — a critical component of a resilient ESG programme in Nigeria's diverse operating environment."
            }
          ].map((item, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl font-bold text-[#0a2e28] mb-3 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-8">{item.body}</p>
            </div>
          ))}

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">The ESG Regulatory Landscape in Nigeria</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nigerian regulators are accelerating the shift towards mandatory ESG disclosure. Key developments that organisations must be prepared for include:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "The SEC Nigeria's Sustainability Disclosure Framework, which encourages listed companies to adopt ESG reporting standards aligned with the SDGs.",
              "The NGX Sustainability Disclosure Guidelines, which require companies listed on the Nigerian Exchange to report on ESG matters.",
              "The Central Bank of Nigeria's (CBN) Nigerian Sustainable Banking Principles, which mandate ESG integration across Nigeria's financial sector.",
              "Growing DFI requirements — including from the International Finance Corporation (IFC), African Development Bank (AfDB), and the British International Investment (BII) — tying concessional finance to ESG performance.",
              "The global adoption of IFRS S1 and IFRS S2 sustainability disclosure standards, which are expected to influence Nigerian regulatory requirements in the near term."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants tracks all of these regulatory developments closely, ensuring that our clients' ESG frameworks remain ahead of requirements — not playing catch-up.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Why Choose EarnMore Consultants for ESG Advisory in Nigeria?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants combines deep local market knowledge with international ESG expertise. We understand the realities of operating in Nigeria — the infrastructure challenges, the governance environments, the community dynamics — and we bring this understanding to every ESG engagement. Our consultants have worked across sectors including financial services, oil and gas, renewable energy, agriculture, and real estate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are not a one-size-fits-all consultancy. Every ESG programme we design is bespoke — built around your industry, your stakeholders, and your strategic objectives. We combine technical rigour with practical implementation support, ensuring that ESG is embedded in your operations, not just documented in a report.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our work spans Lagos, Abuja, Port Harcourt, and other major commercial centres, and we also support Nigerian businesses operating across West Africa and the broader African continent.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">ESG as a Competitive Advantage in Nigeria</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Beyond compliance, ESG creates tangible business value. Nigerian companies with strong ESG credentials are accessing lower-cost capital through green bonds and sustainability-linked loans. They are winning contracts from multinational buyers who require ESG due diligence of their supply chains. They are attracting and retaining talent by demonstrating a genuine commitment to environmental and social responsibility.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants helps you move from ESG as a cost centre to ESG as a value driver. We quantify the business case for ESG investment, help you identify ESG-linked revenue opportunities, and build the internal capacity to sustain your ESG programme long after our engagement ends.
          </p>

          <div className="bg-[#f0fdf8] border border-emerald-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#0a2e28] mb-3">Ready to Build Your ESG Framework in Nigeria?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Speak with one of our ESG advisors and find out how EarnMore Consultants can help your organisation lead on sustainability in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/esg-training-nigeria" className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-700 font-semibold px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors">
                ESG Training in Nigeria
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-[#0a2e28] mb-6">Related Services</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Sustainability Consulting Lagos", href: "/services/sustainability-consulting-lagos" },
              { label: "Climate Finance Advisory Nigeria", href: "/services/climate-finance-advisory-nigeria" },
              { label: "IFRS Sustainability Reporting Nigeria", href: "/services/ifrs-sustainability-reporting-nigeria" },
              { label: "Green Bonds Advisory Nigeria", href: "/services/green-bonds-advisory-nigeria" },
              { label: "ESG Training Nigeria", href: "/services/esg-training-nigeria" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-emerald-700 hover:text-emerald-600 font-medium text-sm">
                <ArrowRight className="w-3.5 h-3.5" /> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
