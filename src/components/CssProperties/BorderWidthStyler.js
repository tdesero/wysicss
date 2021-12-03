import { useState } from "react";
import CssPropertyInputSmall from "./CssPropertyInputSmall";

const BORDER_WIDTH_PROPS = {
  TOP: "border-top-width",
  RIGHT: "border-right-width",
  BOTTOM: "border-bottom-width",
  LEFT: "border-left-width",
};

const BorderWidthStyler = ({ cssClass }) => {
  const [selectedSides, setSelectedSides] = useState([
    BORDER_WIDTH_PROPS.TOP,
    BORDER_WIDTH_PROPS.RIGHT,
    BORDER_WIDTH_PROPS.BOTTOM,
    BORDER_WIDTH_PROPS.LEFT,
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

  const isTop = selectedSides.includes(BORDER_WIDTH_PROPS.TOP);
  const isRight = selectedSides.includes(BORDER_WIDTH_PROPS.RIGHT);
  const isBottom = selectedSides.includes(BORDER_WIDTH_PROPS.BOTTOM);
  const isLeft = selectedSides.includes(BORDER_WIDTH_PROPS.LEFT);

  return (
    <div className="my-1 relative h-14 w-14 flex items-center justify-center flex-shrink-0">
      <div
        className={
          "block h-1 absolute inset-x-2 top-0 " +
          (isTop ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_WIDTH_PROPS.TOP);
        }}
      ></div>
      <div
        className={
          "block w-1 absolute inset-y-2 right-0 " +
          (isRight ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_WIDTH_PROPS.RIGHT);
        }}
      ></div>
      <div
        className={
          "block h-1 absolute inset-x-2 bottom-0 " +
          (isBottom ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_WIDTH_PROPS.BOTTOM);
        }}
      ></div>
      <div
        className={
          "block w-1 absolute inset-y-2 left-0 " +
          (isLeft ? "bg-indigo-500" : "bg-gray-200")
        }
        onClick={() => {
          toggleSide(BORDER_WIDTH_PROPS.LEFT);
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

export default BorderWidthStyler;
