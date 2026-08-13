import LeftSidebarAd from "@/components/features/ads-sense/LeftSidebarAd";
import RightSidebarAd from "@/components/features/ads-sense/RightSidebarAd";
import AdsStudio from "@/components/features/life-invader-ads/AdsStudio";
import "@/styles/features/ads-sense/sidebar-ad.css";

const LifeInvaderAdsPage = () => {
  return (
    <div className="li-page-with-ads">
      <div className="li-page-with-ads__rail li-page-with-ads__rail--left">
        <LeftSidebarAd />
      </div>

      <div className="li-page-with-ads__content">
        <AdsStudio />
      </div>

      <div className="li-page-with-ads__rail li-page-with-ads__rail--right">
        <RightSidebarAd />
      </div>
    </div>
  );
};

export default LifeInvaderAdsPage;
