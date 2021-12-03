import { useState } from "react";
import CssPropertyInputSmall from "./CssPropertyInputSmall";

const BORDER_RADIUS_PROPS = {
  TOP_LEFT: "border-top-left-radius",
  TOP_RIGHT: "border-top-right-radius",
  BOTTOM_RIGHT: "border-bottom-right-radius",
  BOTTOM_LEFT: "border-bottom-left-radius",
};

const BorderRadiusStyler = ({ cssClass }) => {
  const [selectedSides, setSelectedSides] = useState([
    BORDER_RADIUS_PROPS.TOP_LEFT,
    BORDER_RADIUS_PROPS.TOP_RIGHT,
    BORDER_RADIUS_PROPS.BOTTOM_RIGHT,
    BORDER_RADIUS_PROPS.BOTTOM_LEFT,
  ]);

  const toggleSide = (side) => {
    const newSelection = [...selectedSides];
    const indexOf = newSelection.indexOf(side);
    if (indexOf > -1) {
      newSelection.splice(indexOf, 1);
    } else {
      newSelection.push(side);
    }
    setSelectedSides(newSelection);
  };

  const isTopLeft = selectedSides.includes(BORDER_RADIUS_PROPS.TOP_LEFT);
  const isTopRight = selectedSides.includes(BORDER_RADIUS_PROPS.TOP_RIGHT);
  const isBottomRight = selectedSides.includes(
    BORDER_RADIUS_PROPS.BOTTOM_RIGHT
  );
  const isBottomLeft = selectedSides.includes(BORDER_RADIUS_PROPS.BOTTOM_LEFT);

  return (
    <div className="my-1 relative h-14 w-14 flex items-center justify-center flex-shrink-0">
      <div
        className={
          "block h-4 w-4 rounded-tl-xl absolute top-0 left-0 " +
          (isTopLeft ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_RADIUS_PROPS.TOP_LEFT);
        }}
      ></div>
      <div
        className={
          "block h-4 w-4 rounded-tr-xl absolute top-0 right-0 " +
          (isTopRight ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_RADIUS_PROPS.TOP_RIGHT);
        }}
      ></div>
      <div
        className={
          "block h-4 w-4 rounded-br-xl absolute right-0 bottom-0 " +
          (isBottomRight ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_RADIUS_PROPS.BOTTOM_RIGHT);
        }}
      ></div>
      <div
        className={
          "block h-4 w-4 rounded-bl-xl absolute bottom-0 left-0 " +
          (isBottomLeft ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_RADIUS_PROPS.BOTTOM_LEFT);
        }}
      ></div>
      <div className="w-12">
        <CssPropertyInputSmall
          propertyName={selectedSides[0]}
          cssClass={cssClass}
          className="text-right appearance-none mr-1"
          linkedCSSProps={selectedSides}
          isLinked={true}
        />
      </div>
    </div>
  );
};

export default BorderRadiusStyler;
