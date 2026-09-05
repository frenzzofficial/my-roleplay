import Image from "next/image";
import { DownloadAssets } from "@/components/features/download/DownloadAssets";
import type { assetConfig } from "@/packages/configs/assets.config";

interface AssetCardProps {
  asset: (typeof assetConfig)[number];
}

const AssetCard = ({ asset }: AssetCardProps) => {
  return (
    <div className="li-asset-card gsap-animate-card">
      <div className="li-asset-card__image-wrapper">
        <Image
          src={asset.media.preview}
          alt={asset.name}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="li-asset-card__image"
        />
      </div>

      <div className="li-asset-card__body">
        <span className="li-asset-card__type">{asset.type}</span>
        <h2 className="li-asset-card__title">{asset.name}</h2>
        <p className="li-asset-card__description">{asset.description}</p>

        <div className="li-asset-card__meta">
          <span>v{asset.version}</span>
          <span aria-hidden="true">·</span>
          <span>{asset.author}</span>
          <span aria-hidden="true">·</span>
          <span>{asset.license}</span>
        </div>

        <DownloadAssets asset={asset} />
      </div>
    </div>
  );
};

export default AssetCard;
