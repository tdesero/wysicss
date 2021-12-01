import { useState } from "react";
import CssPropertyInputSmall from "./CssPropertyInputSmall";
import * as Icon from "react-feather";

const marginProps = [
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-bottom",
];
const paddingProps = [
  "padding-left",
  "padding-right",
  "padding-top",
  "padding-bottom",
];

const SpacingInput = ({
  propertyName,
  direction,
  cssClass,
  isLinked = false,
}) => {
  const linkedCSSProps = propertyName.startsWith("margin-")
    ? marginProps
    : paddingProps;
  return (
    <CssPropertyInputSmall
      direction={direction}
      propertyName={propertyName}
      cssClass={cssClass}
      className="text-right appearance-none mr-1"
      linkedCSSProps={linkedCSSProps}
      isLinked={isLinked}
    />
  );
};

export function SpacingStyler(cssClass) {
  const [isMarginLinked, setIsMarginLinked] = useState(false);
  const [isPaddingLinked, setIsPaddingLinked] = useState(false);
  return (
    <div className="relative text-xs">
      <div className="absolute top-0 left-0 text-gray-400 p-1 z-10">
        Margin{" "}
        <button
          onClick={() => {
            setIsMarginLinked(!isMarginLinked);
          }}
          className={isMarginLinked ? "text-gray-900" : "text-gray-400"}
        >
          <Icon.Link size={12} />
        </button>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center p-3">
        <div className="w-10">
          <SpacingInput
            direction={"w"}
            propertyName={"margin-left"}
            cssClass={cssClass}
            isLinked={isMarginLinked}
          />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center p-3">
        <div className="w-10">
          <SpacingInput
            direction={"e"}
            propertyName={"margin-right"}
            cssClass={cssClass}
            isLinked={isMarginLinked}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-center p-3">
        <div className="w-10">
          <SpacingInput
            direction={"n"}
            propertyName={"margin-top"}
            cssClass={cssClass}
            isLinked={isMarginLinked}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-3">
        <div className="w-10">
          <SpacingInput
            direction="s"
            propertyName={"margin-bottom"}
            cssClass={cssClass}
            isLinked={isMarginLinked}
          />
        </div>
      </div>
      <div className="absolute text-center rounded inset-0 h-26 my-12 mx-16">
        <div className="absolute top-0 left-0 text-gray-400 p-1 z-10">
          Padding{" "}
          <button
            onClick={() => {
              setIsPaddingLinked(!isPaddingLinked);
            }}
            className={isPaddingLinked ? "text-gray-900" : "text-gray-400"}
          >
            <Icon.Link size={12} />
          </button>
        </div>
        <div className="absolute rounded inset-y-0 left-0 flex items-center p-3">
          <div className="w-10">
            <SpacingInput
              direction={"e"}
              propertyName={"padding-left"}
              cssClass={cssClass}
              isLinked={isPaddingLinked}
            />
          </div>
        </div>
        <div className="absolute rounded inset-y-0 right-0 flex items-center p-3">
          <div className="w-10">
            <SpacingInput
              direction={"w"}
              propertyName={"padding-right"}
              cssClass={cssClass}
              isLinked={isPaddingLinked}
            />
          </div>
        </div>
        <div className="absolute rounded inset-x-0 top-0 flex justify-center p-3">
          <div className="w-10">
            <SpacingInput
              direction={"s"}
              propertyName={"padding-top"}
              cssClass={cssClass}
              isLinked={isPaddingLinked}
            />
          </div>
        </div>
        <div className="absolute rounded inset-x-0 bottom-0 flex justify-center p-3">
          <div className="w-10">
            <SpacingInput
              direction={"n"}
              propertyName={"padding-bottom"}
              cssClass={cssClass}
              isLinked={isPaddingLinked}
            />
          </div>
        </div>
      </div>

      {/* Box-Image */}
      <div
        className="w-full p-1 border-gray-100"
        style={{
          borderWidth: "47px 60px",
          borderStyle: "solid",
        }}
      >
        <div
          className="w-full p-5 border-gray-100"
          style={{
            borderWidth: "30px 60px",
            borderStyle: "solid",
          }}
        ></div>
      </div>
    </div>
  );
}
