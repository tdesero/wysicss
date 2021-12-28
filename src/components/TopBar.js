import * as Icon from "react-feather";
import { useContext } from "react";
import { Context } from "../context";
import TooltipWrapper from "./common/TooltipWrapper";

import { BREAKPOINT_NAMES } from "../constants";

const { MOBILE, TABLET, DESKTOP } = BREAKPOINT_NAMES;

export default function TopBar({
  setResponsiveWidth,
  responsiveWidth,
  hidePanels,
  setHidePanels,
}) {
  const { historyMove, historyPos, history, setBreakpoint, breakpoints } =
    useContext(Context);

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
        <div className="w-8">
          {historyPos < 0 && (
            <button onClick={() => historyMove(+1)}>
              <Icon.CornerUpRight size={16} />
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center px-4">
        <TooltipWrapper tooltip="Desktop (Base Breakpoint)">
          <button
            className={
              "relative mx-1 " +
              (responsiveWidth === "100%" ? "text-white" : "")
            }
            onClick={() => {
              setResponsiveWidth("100%");
              setBreakpoint(DESKTOP);
            }}
          >
            <Icon.Monitor size={16} />
            <div className="absolute -top-px -right-px rounded-full bg-indigo-500 h-1.5 w-1.5"></div>
          </button>
        </TooltipWrapper>
        <Icon.ChevronRight size={12} />
        <TooltipWrapper tooltip="Tablet">
          <button
            className={
              "relative mx-1 " +
              (responsiveWidth === breakpoints[TABLET] ? "text-white" : "")
            }
            onClick={() => {
              setResponsiveWidth(700);
              setBreakpoint(TABLET);
            }}
          >
            <Icon.Tablet size={16} />
            <div className="absolute -top-px -right-px rounded-full bg-green-500 h-1.5 w-1.5"></div>
          </button>
        </TooltipWrapper>
        <Icon.ChevronRight size={12} />
        <TooltipWrapper tooltip="Mobile">
          <button
            className={
              "mx-1 " +
              (responsiveWidth === breakpoints[MOBILE] ? "text-white" : "")
            }
            onClick={() => {
              setResponsiveWidth(400);
              setBreakpoint(MOBILE);
            }}
          >
            <Icon.Smartphone size={16} />
          </button>
        </TooltipWrapper>
      </div>
      <div className="flex items-center justify-end px-4">
        <TooltipWrapper tooltip="Preview Mode: Hide Panels">
          <button
            className={hidePanels ? "text-white" : undefined}
            onClick={() => setHidePanels(!hidePanels)}
          >
            <Icon.Eye size={16} />
          </button>
        </TooltipWrapper>
      </div>
    </div>
  );
}
