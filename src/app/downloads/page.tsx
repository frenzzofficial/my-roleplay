import type { Metadata } from "next";
import "@/styles/features/download/download.css";
import DownloadsIndexView from "@/components/features/download/DownloadsIndexView";
import { assetConfig } from "@/packages/configs/assets.config";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Free ReShade shaders, presets, and tools built for the GTA roleplay community — download and drop straight into your game.",
  alternates: {
    canonical: "/downloads",
  },
};

const DownloadsPage = () => {
  return <DownloadsIndexView assets={assetConfig} />;
};

export default DownloadsPage;
