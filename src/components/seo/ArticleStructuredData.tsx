import { appConfig } from "@/packages/configs/app.config";
import type { NormalizedContentItem } from "@/packages/utils/content-normalize";

interface ArticleStructuredDataProps {
  item: NormalizedContentItem;
}

/**
 * Per-article JSON-LD (BlogPosting), rendered on each /blogs/[slug] page.
 * Separate from the site-wide SoftwareApplication schema in
 * StructuredData.tsx — that one describes the LifeInvader ad-generator
 * tool itself, this one describes the article, which is what lets Google
 * show article rich results (author, publish date, headline image)
 * instead of falling back to a generic page listing.
 */
const ArticleStructuredData = ({ item }: ArticleStructuredDataProps) => {
  const { site } = appConfig;
  const url = `${site.url}/blogs/${item.slug}`;
  const imageUrl =
    typeof item.coverImage === "string"
      ? item.coverImage
      : new URL(item.coverImage.src, site.url).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: item.title,
    description: item.excerpt,
    image: [imageUrl],
    datePublished: item.publishedAt,
    dateModified: item.publishedAt,
    author: {
      "@type": "Organization",
      name: item.author,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.author.name,
      url: site.author.url,
      logo: {
        "@type": "ImageObject",
        url: new URL(site.logoUrl, site.url).toString(),
      },
    },
    keywords: item.tags.join(", "),
    articleSection: item.category,
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static, server-generated JSON-LD with no user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ArticleStructuredData;
