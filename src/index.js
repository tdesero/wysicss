import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./context";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </DndProvider>
  </StrictMode>,
  rootElement
);
