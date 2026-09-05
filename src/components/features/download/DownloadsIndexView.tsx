"use client";

import Image from "next/image";
import AssetCard from "@/components/features/download/AssetCard";
import type { assetConfig } from "@/packages/configs/assets.config";
import { PAGE_BANNER_IMAGES } from "@/packages/configs/images.config";
import { useGsapBlogAnimation } from "@/packages/hooks/gsap/useGsapBlogAnimation";

interface DownloadsIndexViewProps {
  assets: readonly (typeof assetConfig)[number][];
}

// useGsapBlogAnimation is generic (keys off .gsap-animate-hero /
// .gsap-animate-card class names, not anything blog-specific) so it's
// reused here as-is rather than duplicating it for this feature.
const DownloadsIndexView = ({ assets }: DownloadsIndexViewProps) => {
  const { containerRef } = useGsapBlogAnimation();

  return (
    <section ref={containerRef}>
      <div className="li-download-masthead">
        <div className="li-download-masthead__image-wrapper">
          <Image
            src={PAGE_BANNER_IMAGES.blogsIndexMasthead}
            alt="My Roleplay downloads"
            fill
            sizes="100vw"
            priority
            className="li-download-masthead__image"
          />
        </div>
        <div className="li-download-masthead__overlay" />

        <div className="li-download-masthead__content">
          <p className="li-download-masthead__eyebrow gsap-animate-hero">
            My Roleplay · Downloads
          </p>
          <h1 className="li-download-masthead__title gsap-animate-hero">
            Assets &amp; Tools
          </h1>
          <p className="li-download-masthead__subtitle gsap-animate-hero">
            ReShade shaders, presets, and other tools built for the roleplay
            community — free to download and use.
          </p>
        </div>
      </div>

      <div className="li-download-index">
        <div className="li-download-index__grid">
          {assets.map((asset) => (
            <AssetCard key={asset.name} asset={asset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsIndexView;
