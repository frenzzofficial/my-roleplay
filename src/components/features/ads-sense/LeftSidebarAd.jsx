"use client";

import { AD_UNITS } from "../../../packages/configs/ads.config";
import SidebarAd from "./SidebarAd";

const LeftSidebarAd = ({ className = "" }) => {
  const unit = AD_UNITS.left;
  return (
    <SidebarAd
      crid={unit.crid}
      width={unit.width}
      height={unit.height}
      className={`li-partner-slot--start ${className}`.trim()}
    />
  );
};

export default LeftSidebarAd;
