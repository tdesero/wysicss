import * as Icon from "react-feather";
import { useContext } from "react";
import { Context } from "../context";

export default function TopBar({ setResponsiveWidth, responsiveWidth }) {
  const { historyMove, historyPos, history } = useContext(Context);

  return (
    <div className="text-xs h-12 border-b bg-gray-900 text-gray-500 flex space-x-4 items-center justify-center">
      <div className="mr-5">
        {history.length - 1 + historyPos > 0 && (
          <button className="mr-2" onClick={() => historyMove(-1)}>
            <Icon.CornerUpLeft size={16} />
          </button>
        )}
        {historyPos < 0 && (
          <button onClick={() => historyMove(+1)}>
            <Icon.CornerUpRight size={16} />
          </button>
        )}
      </div>
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
  );
}
