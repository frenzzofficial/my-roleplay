import "@/styles/features/home/homepage.css";
import { CommunityTrust } from "./CommunityTrust";
import { FaqSection } from "./FaqSection";
import { FinalCta } from "./FinalCta";
import Hero from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { PlatformCoverage } from "./PlatformCoverage";
import { ProblemSection } from "./ProblemSection";
import { RulesPreview } from "./RulesPreview";
import { WhatWeCover } from "./WhatWeCover";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <WhatWeCover />
      <RulesPreview />
      <HowItWorks />
      <PlatformCoverage />
      <CommunityTrust />
      <FaqSection />
      <FinalCta />
    </main>
  );
};
