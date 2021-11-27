import * as Icon from "react-feather";
import { useContext } from "react";
import { Context } from "../context";

export default function TopBar({
  setResponsiveWidth,
  responsiveWidth,
  hidePanels,
  setHidePanels,
}) {
  const { historyMove, historyPos, history } = useContext(Context);

  return (
    <div className="text-xs h-12 border-b bg-gray-900 text-gray-500 space-x-4 grid grid-cols-3">
      <div className="flex items-center px-4">
        <div className="w-8">
          {history.length - 1 + historyPos > 0 && (
            <button className="mr-2" onClick={() => historyMove(-1)}>
              <Icon.CornerUpLeft size={16} />
            </button>
          )}
        </div>
        <div class="w-8">
          {historyPos < 0 && (
            <button onClick={() => historyMove(+1)}>
              <Icon.CornerUpRight size={16} />
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center px-4">
        <button
          className={"mx-1 " + (responsiveWidth === 400 ? "text-white" : "")}
          onClick={() => setResponsiveWidth(400)}
        >
          <Icon.Smartphone size={16} />
        </button>
        <button
          className={"mx-1 " + (responsiveWidth === 700 ? "text-white" : "")}
          onClick={() => setResponsiveWidth(700)}
        >
          <Icon.Tablet size={16} />
        </button>
        <button
          className={"mx-1 " + (responsiveWidth === "100%" ? "text-white" : "")}
          onClick={() => setResponsiveWidth("100%")}
        >
          <Icon.Monitor size={16} />
        </button>
      </div>
      <div className="flex items-center justify-end px-4">
        <button
          className={hidePanels && "text-white"}
          onClick={() => setHidePanels(!hidePanels)}
        >
          <Icon.Eye size={16} />
        </button>
      </div>
    </div>
  );
}
