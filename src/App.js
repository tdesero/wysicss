import "./styles.css";
import EditorCanvas from "./components/EditorCanvas";
import InspectorPanel from "./components/InspectorPanel";
import LeftPanel from "./components/LeftPanel";
import { useState } from "react";
import * as Icon from "react-feather";

export default function App() {
  const [responsiveWidth, setResponsiveWidth] = useState("100%");

  return (
    <div className="App flex flex-col h-screen bg-gray-100">
      <div className="text-xs h-12 border-b bg-gray-900 text-gray-500 flex space-x-4 items-center justify-center">
        <button
          className={responsiveWidth === 400 ? "text-white" : ""}
          onClick={() => setResponsiveWidth(400)}
        >
          <Icon.Smartphone size={16} />
        </button>
        <button
          className={responsiveWidth === 700 ? "text-white" : ""}
          onClick={() => setResponsiveWidth(700)}
        >
          <Icon.Tablet size={16} />
        </button>
        <button
          className={responsiveWidth === "100%" ? "text-white" : ""}
          onClick={() => setResponsiveWidth("100%")}
        >
          <Icon.Monitor size={16} />
        </button>
      </div>
      <div className="flex h-20 flex-grow flex-shrink">
        <LeftPanel />
        <EditorCanvas responsiveWidth={responsiveWidth} />
        <InspectorPanel />
      </div>
    </div>
  );
}
