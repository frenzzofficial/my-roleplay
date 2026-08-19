import { LucideWorkflow } from "lucide-react";
import FieldGroup from "../shared/FieldGroup";
import OutputBox from "../shared/OutputBox";

const WorkAdsPanel = () => {
  return (
    <section className="li-panel-card">
      <header className="li-panel-card__header">
        <LucideWorkflow size={20} />
        <h2>Work Ads Creator</h2>
      </header>

      <FieldGroup label="Output">
        <OutputBox text={"Work ads goes here"} />
      </FieldGroup>
    </section>
  );
};

export default WorkAdsPanel;
