import "./styles.css";
import EditorCanvas from "./components/EditorCanvas";
import InspectorPanel from "./components/InspectorPanel";
import LeftPanel from "./components/LeftPanel";
import TopBar from "./components/TopBar";
import { useState } from "react";

export default function App() {
  const [responsiveWidth, setResponsiveWidth] = useState("100%");

  return (
    <div className="App flex flex-col h-screen bg-gray-100">
      <TopBar
        setResponsiveWidth={setResponsiveWidth}
        responsiveWidth={responsiveWidth}
      />
      <div className="flex h-20 flex-grow flex-shrink">
        <LeftPanel />
        <EditorCanvas responsiveWidth={responsiveWidth} />
        <InspectorPanel />
      </div>
    </div>
  );
}
