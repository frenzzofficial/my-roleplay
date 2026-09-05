import { appConfig } from "./app.config";

export type AssetDownload = {
  kind: "file";
  name: string;
  version: string;
  fileName: string;
  /** Path under /public — e.g. a file at public/assets/reshade/xhair.fx
   * is referenced here as "/assets/reshade/xhair.fx". */
  path: string;
};

export type AssetItem = {
  name: string;
  description: string;
  version: string;
  author: string;
  license: string;
  type: string;

  links: {
    website: string;
    repository: string;
    issues: string;
    donate?: string;
  };

  media: {
    icon: string;
    preview: string;
  };

  downloads: AssetDownload[];
};

/**
 * Every downloadable asset shown on /downloads. Add a new entry here and
 * drop the matching file(s) under public/assets/<category>/... — nothing
 * else needs to change, DownloadsIndexView and AssetCard render straight
 * from this list.
 */
export const assetConfig = [
  {
    name: "xHair",
    description: "ReShade Crosshair Shader Overlay",
    version: "7.8",
    author: "MyRoleplay",
    license: "MIT",
    type: "reshade-shader",

    links: {
      website: appConfig.site.url,
      repository: appConfig.site.url,
      issues: `${appConfig.site.url}/issues`,
      // donate: "https://www.patreon.com/myroleplay",
    },

    media: {
      icon: "/assets/reshade/xhair/preview.jpg",
      preview: "/assets/reshade/xhair/preview.jpg",
    },

    downloads: [
      {
        kind: "file",
        name: "xHair Shader",
        version: "7.8",
        fileName: "xhair.fx",
        path: "/assets/reshade/xhair.fx",
      },
    ],
  },
] as const satisfies AssetItem[];
