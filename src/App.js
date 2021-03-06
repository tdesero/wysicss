import "./styles.css";
import EditorCanvas from "./components/EditorCanvas";
import InspectorPanel from "./components/InspectorPanel";
import LeftPanel from "./components/LeftPanel";
import TopBar from "./components/TopBar";
import { useState } from "react";

export default function App() {
  const [responsiveWidth, setResponsiveWidth] = useState("100%");
  const [hidePanels, setHidePanels] = useState(false);

  return (
    <div className="App flex flex-col h-screen bg-gray-100">
      <TopBar
        setResponsiveWidth={setResponsiveWidth}
        responsiveWidth={responsiveWidth}
        setHidePanels={setHidePanels}
        hidePanels={hidePanels}
      />
      <div className="flex h-20 flex-grow flex-shrink">
        {!hidePanels && <LeftPanel />}
        <EditorCanvas
          responsiveWidth={responsiveWidth}
          hidePanels={hidePanels}
        />
        {!hidePanels && <InspectorPanel />}
      </div>
    </div>
  );
}
