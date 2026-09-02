import type { MetadataRoute } from "next";
import { appConfig } from "@/packages/configs/app.config";
import { getAllContent } from "@/packages/utils/content-hub";

export default function sitemap(): MetadataRoute.Sitemap {
  // getAllContent() merges JSON blog posts AND markdown docs — every page
  // that actually renders at /blogs/[slug]. The old getAllBlogPosts() only
  // covered JSON posts, silently leaving every doc-sourced page (ads
  // policy, roleplay guides, character building, etc.) out of the sitemap.
  const content = getAllContent();

  return [
    {
      url: appConfig.site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${appConfig.site.url}/life-invader-ads`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${appConfig.site.url}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...content.map((item) => ({
      url: `${appConfig.site.url}/blogs/${item.slug}`,
      lastModified: new Date(item.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
