"use client";

import { AD_UNITS } from "../../../packages/configs/ads.config";
import SidebarAd from "./SidebarAd";

const RightSidebarAd = ({ className = "" }) => {
  const unit = AD_UNITS.right;
  return (
    <SidebarAd
      crid={unit.crid}
      width={unit.width}
      height={unit.height}
      className={`li-partner-slot--end ${className}`.trim()}
    />
  );
};

export default RightSidebarAd;
