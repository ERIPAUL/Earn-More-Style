import BlogPostLayout from "@/components/layout/blog-post-layout";

export default function BlogIfrsPart2() {
  return (
    <BlogPostLayout
      title="Understanding the International Sustainability Standards Board's Sustainability Disclosure Standards: IFRS S1 and IFRS S2, Part 2"
      date="Monday, December 11, 2023"
      category="(ESG) Structures"
      categoryColor="bg-teal-100 text-teal-700"
      heroImage="https://d1yei2z3i6k35z.cloudfront.net/5190898/6576cd5073e40_valley-with-huge-wind-mills-solar-batteries-factories-renewable-sources-energy-care-environment-green-generate-electricity-eco-power-plant-ecology-concept-3d-rendering-illustration_76964-833.jpg"
      sections={[
        {
          heading: "Introduction",
          body: "In the first part of this series, we looked at the governance and strategy elements of the International Sustainability Standards Board (ISSB) IFRS S1 and S2 standards. In this second part we will consider risk management plus metrics and targets. As with the first part, the discussion of each reporting topic under both IFRS S1 and IFRS S2 are contained under the same heading. To refresh our memories, IFRS S1 is the General Requirements for Disclosure of Sustainability-Related Information, while IFRS S2 deals with Climate-related Disclosures.",
        },
        {
          heading: "2. Risk Management",
          subheading: "2.1 IFRS S1",
          body: "The goal of sustainability-related financial disclosures in relation to risk management is that users of general-purpose financial reports should be able to understand an entity's processes for identifying, assessing, prioritising and monitoring sustainability-related risks and opportunities, including whether and how those processes are integrated into and inform the entity's overall risk management process. The goal also includes assessing an entity's overall risk profile and its overall risk management process. One would recall that the strategy element also deals with management of sustainability related risks and opportunities. The difference here, however, is that the emphasis is on processes.",
          image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6576d7b241f89_3d-business-arrow-falling-decrease-concept_58466-241.jpg",
          imageAlt: "Risk management concept",
        },
        {
          body: "Specifically, disclosures shall be made about input and parameters, use of scenario analysis, methodology for assessing nature, probability and impact of risks, relative prioritisation of sustainability-related risks, monitoring of sustainability-related risks, changes in reporting methods, integration of sustainability risk and opportunities-related processes into an entity's overall risk management process.",
          image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6576d9f65684f_Untitled-4-04.jpg",
          imageAlt: "IFRS S1 disclosure requirements",
        },
        {
          subheading: "2.2 IFRS S2",
          body: "The information points mentioned above concerning sustainability-related risks and opportunities apply when considering risk management under IFRS S2 (climate disclosures).",
          image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6576db0def973_Untitled-4-02.jpg",
          imageAlt: "IFRS S2 climate disclosures",
        },
        {
          heading: "3. Metrics and Targets",
          subheading: "3.1 IFRS S1",
          body: "The objective here is to enable users of general-purpose financial reports to understand an entity's performance in relation to its sustainability-related risks and opportunities, including progress towards any targets the entity has set, and any targets it is required to meet by law or regulation. Required disclosures include IFRS-required metrics, metrics used for measuring and monitoring specific sustainability-related risks or opportunity, metrics used to measure and monitor performance against risks or opportunities including progress towards targets. Other mandated disclosures are industry-specific metrics, non-IFRS metrics, and firm-developed metrics. Disclosures about firm-developed metrics shall include information regarding source, absolute, relative, or qualitative nature of the metric, third-party validation, methodology, input, limitations, and significant assumptions.",
          image: "https://d1yei2z3i6k35z.cloudfront.net/5190898/6576e18dc3660_Untitled-4-07.jpg",
          imageAlt: "Metrics and targets",
        },
        {
          body: "Targets shall be disclosed alongside metrics for monitoring and measuring related performance, the period for achieving targets, base period for measuring progress, milestones/interim targets, analysis of trends and changes in performance, and revisions to targets with explanations. Definition and calculation of metrics are required to be consistent over time. Redefinition or replacement of a metric must be followed by disclosure of a comparative amount unless impractical, and explanation of the changes with justifications.",
        },
        {
          subheading: "3.2 IFRS S2",
          body: "As regards metrics and targets in climate-related disclosures (IFRS S2), entities are required to disclose cross-industry metrics, industry-specific metrics, as well as targets and metrics for measuring related progress. Cross-industry metric categories include Scope 1–3 greenhouse gases (GHGs). Other disclosures include the measurement approach with inputs, assumptions, and justifications for the approach. Any changes to the measurement approach in the reporting period must also be disclosed with justifications. For Scope 1 and 2 emissions, disclosures for consolidated accounting groups must be disaggregated from those of unconsolidated investees. Location-based Scope 2 emissions as well as any contractual relationship/instrument that would shed light on them are also subject to disclosure.",
        },
        {
          body: "For Scope 3 disclosures, the categories covered must be indicated according to the Scope 3 categories (15 categories in all) described in the Greenhouse Gas Protocol Corporate Value Chain (Scope 3) Accounting and Reporting Standard (2011). There shall be additional information on the entity's greenhouse gas emissions or those associated with its investments, if the entity is engaged in asset management, commercial banking, or insurance.",
        },
        {
          body: "Further disclosures include climate-related transition risks, physical risks, and opportunities, all stated in amounts and percentage of assets/business activities exposed or aligned, as the case may be. Capital deployment towards climate-related risks and opportunities, internal carbon pricing, impact of climate-related considerations on remuneration policy, and industry-specific metrics are also disclosure items.",
        },
        {
          body: "Disclosure requirements regarding targets are generally like those under IFRS S1 with a few additions. Entities are required to show how the latest international agreements on climate change, including jurisdictional commitments that arise from those agreements, have informed the target. They are also required to show whether GHG emission targets are gross or net targets, and where targets are net, to disclose the related gross emission target. Disclosures must also reveal whether targets were derived using sectoral decarbonisation approaches. Furthermore, reliance on carbon offsets for attaining GHG reduction targets, as well as third-party verification of carbon credits, and whether carbon credits are based on carbon reduction or removal, must be reported. Other information that would be helpful in assessing the credibility/integrity of carbon credits is also subject to the reporting mandate.",
        },
      ]}
      conclusion="Adoption of the ISSB Standards could be either on a voluntary or mandatory basis. Usually, such standards are introduced as voluntary, with a timeline towards mandatory application. For example, Brazil is set to start with voluntary application in 2024 which will lead up to mandatory application by January 1, 2026."
      references={[
        "IFRS, 'IFRS S1 General Requirements for Disclosure of Sustainability-related Financial Information' accessed 21 October 2023.",
        "IFRS, 'IFRS S2 Climate-related Disclosures' accessed 24 October 2023.",
        "IFRS, 'Brazil adopts ISSB global baseline, as IFRS Foundation Trustees meet in Latin America' accessed 24 October 2023.",
      ]}
    />
  );
}
