import { Download, FileDown } from "lucide-react";
import type { assetConfig } from "@/packages/configs/assets.config";

type DownloadAssetsProps = {
  asset: (typeof assetConfig)[number];
};

export function DownloadAssets({ asset }: DownloadAssetsProps) {
  return (
    <div className="li-asset-downloads">
      {asset.downloads.map((download) => (
        <div key={download.path} className="li-asset-download-row">
          <div className="li-asset-download-row__info">
            <div className="li-asset-download-row__icon">
              <FileDown className="size-5" aria-hidden="true" />
            </div>

            <div className="li-asset-download-row__text">
              <p className="li-asset-download-row__name">{download.name}</p>

              <div className="li-asset-download-row__meta">
                <span>v{download.version}</span>
                <span aria-hidden="true">•</span>
                <span>{download.fileName}</span>
              </div>
            </div>
          </div>

          {/* A plain, button-styled <a> rather than nesting an anchor
           * inside a <button> — the shared <Button> component only
           * supports onClick, and nested interactive elements
           * (<a> inside <button>) are invalid HTML that browsers handle
           * inconsistently. This reuses the exact same button visuals
           * (see li-button.css) so it's indistinguishable on screen. */}
          <a
            href={download.path}
            download={download.fileName}
            aria-label={`Download ${download.name}`}
            className="lifeinvader-ad-button li-asset-download-row__button"
          >
            <span className="lifeinvader-ad-button__shine" />
            <span className="lifeinvader-ad-button__content">
              <Download className="size-4" aria-hidden="true" />
              Download
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
