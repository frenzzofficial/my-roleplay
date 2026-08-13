import { envAdsConfig } from "../env/ads.env";

export const AD_UNITS = {
  left: {
    crid: envAdsConfig.MEDIANET_LEFT_CRID,
    width: 160,
    height: 600,
  },
  right: {
    crid: envAdsConfig.MEDIANET_RIGHT_CRID,
    width: 160,
    height: 600,
  },
};

export const MEDIANET_CID = envAdsConfig.MEDIANET_CID;
