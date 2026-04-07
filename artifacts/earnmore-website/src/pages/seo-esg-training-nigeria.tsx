import { Link } from "wouter";
import Seo from "@/components/seo";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function EsgTrainingNigeria() {
  return (
    <>
      <Seo
        title="ESG Training Nigeria, EarnMore Consultants"
        description="Professional ESG training and capacity building in Nigeria. EarnMore Consultants delivers board-level and staff ESG training programmes to help Nigerian organisations build the internal capacity to lead on sustainability."
        keywords="ESG training Nigeria, ESG capacity building Nigeria, sustainability training Nigeria, ESG workshop Nigeria, ESG certification Nigeria, corporate sustainability training Nigeria"
        canonical="/services/esg-training-nigeria"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ESG Training Nigeria",
            "provider": {
              "@type": "Organization",
              "name": "EarnMore Consultants",
              "url": "https://earnmoregroup.com",
              "address": { "@type": "PostalAddress", "addressCountry": "NG", "addressRegion": "Lagos" }
            },
            "description": "ESG training and capacity building programmes for Nigerian organisations.",
            "areaServed": "Nigeria",
            "serviceType": "ESG Training"
          })
        }}
      />
      <Navbar />

      <section className="bg-[#0a2e28] pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">ESG Training & Capacity Building · Nigeria</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            ESG Training in Nigeria, Building Sustainability Leaders from Within
          </h1>
          <p className="text-green-200/70 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            EarnMore Consultants delivers practical, expert-led ESG training programmes across Nigeria, from board-level awareness sessions to intensive capacity-building workshops for sustainability, finance, and risk teams. We equip your people with the knowledge and skills to drive genuine ESG performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Request a Training Programme <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://calendly.com/esg-earnmoreapp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
            >
              Book a Free Session
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#0a2e28] mb-6">Why ESG Training Is Essential for Nigerian Organisations</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The most sophisticated ESG strategy is only as effective as the people responsible for implementing it. Yet across Nigerian organisations, in financial services, manufacturing, energy, real estate, and the public sector, there is a significant gap between ESG ambition and ESG capability. Boards lack the confidence to oversee ESG risks and opportunities effectively. Finance teams struggle to understand sustainability reporting requirements. Operations managers are uncertain how to integrate environmental and social standards into their day-to-day work.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants bridges this gap through targeted, practical ESG training that builds genuine competence, not just awareness. Our training programmes are designed for the Nigerian context, incorporating local regulatory requirements, sectoral examples from Nigerian industries, and the specific ESG challenges and opportunities that Nigerian organisations face.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We deliver training in Lagos, Abuja, Port Harcourt, and other major Nigerian cities, as well as virtually for national and multinational organisations with teams across multiple locations.
          </p>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Our ESG Training Programmes in Nigeria</h2>
          {[
            {
              title: "Board-Level ESG Governance Training",
              body: "Designed for directors and non-executive directors, this programme builds board-level understanding of ESG risks and opportunities, fiduciary duties related to ESG, global best practice in ESG governance, and the specific ESG expectations of international investors and regulators. Delivered as a half-day or full-day workshop, with customised case studies from Nigerian industries."
            },
            {
              title: "ESG Fundamentals for Management Teams",
              body: "A comprehensive introduction to ESG for senior managers and sustainability champions. This programme covers ESG frameworks and standards (GRI, TCFD, IFRS S1/S2, SDGs), the business case for ESG in Nigeria, materiality assessment methodology, and how to develop and implement an ESG strategy. Available as a two-day workshop or a series of half-day sessions."
            },
            {
              title: "IFRS S1 & S2 Training for Finance and Reporting Teams",
              body: "A specialist training programme designed for CFOs, financial controllers, and reporting teams who need to understand and implement the new IFRS sustainability disclosure standards. Covers the requirements of IFRS S1 and S2, the links to TCFD and GRI, climate scenario analysis methodology, Scope 1, 2, and 3 greenhouse gas emissions measurement, and practical guidance on preparing IFRS-aligned sustainability disclosures."
            },
            {
              title: "ESG Risk Management Training",
              body: "For risk managers, internal auditors, and compliance teams, this programme covers the integration of ESG risks into enterprise risk frameworks, climate risk assessment methodology, ESG due diligence for investments and supply chains, and the emerging regulatory landscape for ESG risk management in Nigeria and globally."
            },
            {
              title: "Sustainability Reporting Masterclass",
              body: "An intensive, hands-on training programme for sustainability reporting practitioners, covering GRI Standards, IFRS S1/S2, stakeholder engagement best practice, materiality assessment, and the production of credible, investor-grade sustainability reports. Participants work through real-world Nigerian case studies and leave with practical templates and tools they can apply immediately."
            },
            {
              title: "ESG for Financial Institutions",
              body: "A specialist programme for banks, insurance companies, pension funds, and asset managers, covering the integration of ESG into lending decisions and investment processes, the Central Bank of Nigeria's Sustainable Banking Principles, ESG due diligence for project finance, green bond assessment, and responsible investment frameworks, including the UN Principles for Responsible Investment (PRI)."
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

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">How We Deliver ESG Training in Nigeria</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            EarnMore Consultants takes a highly practical, engaging approach to ESG training. We avoid death by PowerPoint, our programmes are interactive, case study-rich, and grounded in the realities of doing business in Nigeria. Key features of our training delivery include:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "In-person workshops in Lagos, Abuja, Port Harcourt, and other Nigerian cities, as well as live virtual sessions for distributed teams",
              "Customised content reflecting your industry, your organisation's ESG maturity, and your specific learning objectives",
              "Facilitated group exercises and working sessions that produce practical outputs, not just theoretical knowledge",
              "Post-training support including access to our ESG resource library, Q&A sessions, and implementation guidance",
              "Certificates of participation for all attendees, and the option of continuing professional development (CPD) accreditation for qualifying programmes"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-[#0a2e28] mt-12 mb-6">Organisations We Train in Nigeria</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our ESG training clients in Nigeria include commercial banks and development finance institutions, manufacturing and consumer goods companies, oil and gas companies and their service providers, real estate developers, government ministries and regulatory agencies, international NGOs and development organisations, and Nigerian subsidiaries of multinational corporations with global ESG reporting requirements.
          </p>

          <div className="bg-[#f0fdf8] border border-emerald-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#0a2e28] mb-3">Commission an ESG Training Programme for Your Organisation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tell us about your team's ESG training needs and we'll design a programme that builds the capability you need, tailored to your industry, your people, and your ESG ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/esg-consulting-nigeria" className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-700 font-semibold px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors">
                ESG Consulting Nigeria
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-[#0a2e28] mb-6">Related Services</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "ESG Consulting Nigeria", href: "/services/esg-consulting-nigeria" },
              { label: "Sustainability Consulting Lagos", href: "/services/sustainability-consulting-lagos" },
              { label: "Climate Finance Advisory Nigeria", href: "/services/climate-finance-advisory-nigeria" },
              { label: "IFRS Sustainability Reporting Nigeria", href: "/services/ifrs-sustainability-reporting-nigeria" },
              { label: "Green Bonds Advisory Nigeria", href: "/services/green-bonds-advisory-nigeria" },
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
