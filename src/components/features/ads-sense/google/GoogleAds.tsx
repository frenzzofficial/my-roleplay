"use client";

import Script from "next/script";
import { envAdsConfig } from "@/packages/env/ads.env";

const GoogleAds = () => {
  const client = envAdsConfig.GOOGLE_ADS_CLIENT;

  if (!client) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
};

export default GoogleAds;
