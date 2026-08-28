import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://earnmoregroup.com/images/opengraph.jpg",
  noIndex = false,
}: SeoProps) {
  const fullTitle = title.includes("EarnMore") ? title : `${title} | EarnMore Consultants`;
  const baseUrl = "https://earnmoregroup.com";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="EarnMore Consultants" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo / Local */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="London, UK" />
    </Helmet>
  );
}
