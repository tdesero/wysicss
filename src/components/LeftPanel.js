import { Accordion } from "./common/Accordion";
import ElementTreeContainer from "./ElementTreeContainer";

export default function LeftPanel() {
  return (
    <div className="w-80 flex-shrink-0 border-l shadow-xl overflow-auto bg-white">
      <Accordion title="Element Tree">
        <ElementTreeContainer />
      </Accordion>
    </div>
  );
}
