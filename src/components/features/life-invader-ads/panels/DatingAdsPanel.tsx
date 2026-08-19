import { User } from "lucide-react";
import FieldGroup from "../shared/FieldGroup";
import OutputBox from "../shared/OutputBox";

const DatingAdsPanel = () => {
  return (
    <section className="li-panel-card">
      <header className="li-panel-card__header">
        <User size={20} />
        <h2>Dating Ads Creator</h2>
      </header>

      <FieldGroup label="Output">
        <OutputBox text={"Dating ads goes here"} />
      </FieldGroup>
    </section>
  );
};

export default DatingAdsPanel;
