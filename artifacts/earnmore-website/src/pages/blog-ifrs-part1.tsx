import BlogPostLayout from "@/components/layout/blog-post-layout";

export default function BlogIfrsPart1() {
  return (
    <BlogPostLayout
      title="Understanding the International Sustainability Standards Board's Sustainability Disclosure Standards: IFRS S1 and IFRS S2"
      date="Monday, December 4, 2023"
      category="(ESG) Structures"
      categoryColor="bg-teal-100 text-teal-700"
      heroImage="https://d1yei2z3i6k35z.cloudfront.net/5190898/656da9f4b3ab7_sunny-landscape-with-windmills.jpg"
      sections={[
        {
          heading: "Background",
          body: "The International Sustainability Standards Board (ISSB) was established by the IFRS Foundation at COP26 in November 2021. Its mandate is to develop a comprehensive global baseline of sustainability-related disclosure standards to meet the information needs of investors and other capital market participants. The ISSB published its first two standards — IFRS S1 and IFRS S2 — in June 2023.",
        },
        {
          heading: "IFRS S1: General Requirements for Disclosure of Sustainability-Related Financial Information",
          body: "IFRS S1 sets out the general requirements for an entity to disclose information about its sustainability-related risks and opportunities. The standard requires entities to provide information that enables users of general-purpose financial reports to assess the effects of sustainability-related risks and opportunities on the entity's cash flows, access to finance, and cost of capital over the short, medium, and long term.",
        },
        {
          body: "IFRS S1 requires disclosures across four core content areas: Governance, Strategy, Risk Management, and Metrics and Targets — mirroring the structure of the Task Force on Climate-related Financial Disclosures (TCFD) framework. Governance disclosures relate to the governance body's oversight of sustainability-related risks and opportunities, and management's role in assessing and managing them. Strategy disclosures cover the entity's approach to responding to sustainability-related risks and opportunities, including how those risks may affect business model, strategy, and financial planning.",
        },
        {
          heading: "IFRS S2: Climate-related Disclosures",
          body: "IFRS S2 specifically addresses climate-related risks and opportunities and is designed to be used alongside IFRS S1. It builds on and consolidates earlier recommendations, in particular those of the TCFD. IFRS S2 applies to all climate-related risks and opportunities that could reasonably be expected to affect an entity's prospects, including both physical risks (such as extreme weather events) and transition risks (such as changes in climate policy, technology, and market preferences).",
        },
        {
          body: "Under IFRS S2, entities must disclose climate-related information across the same four pillars as IFRS S1: Governance, Strategy, Risk Management, and Metrics and Targets. In terms of strategy, entities must explain the effects of climate-related risks and opportunities on their business model, value chain, strategy, and financial planning, including scenario analysis using climate-related scenarios.",
        },
        {
          heading: "Governance and Strategy: The First Part of This Series",
          body: "This first article in the series focuses on the Governance and Strategy elements of IFRS S1 and IFRS S2. The governance disclosures require an entity to disclose the identity and competencies of those responsible for oversight of sustainability matters, how governance bodies are informed, and the integration of sustainability considerations into strategic and operational planning. Strategy disclosures require information on identified sustainability-related risks and opportunities over short, medium, and long time horizons, their effects on the entity's business model and value chain, and how the entity plans to respond. For the second part of this series — covering Risk Management, Metrics and Targets — please see Part 2.",
        },
      ]}
    />
  );
}
