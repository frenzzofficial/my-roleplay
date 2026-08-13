import type React from "react";
import MediaNetScript from "@/components/features/ads-sense/MediaNetScript";

interface LifeInvaderAdsLayoutProps {
  children: React.ReactNode;
}

const LifeInvaderAdsLayout = ({ children }: LifeInvaderAdsLayoutProps) => {
  return (
    <>
      <MediaNetScript />
      {children}
    </>
  );
};

export default LifeInvaderAdsLayout;
