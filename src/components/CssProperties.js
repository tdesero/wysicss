import CssPropertyInput from "./CssPropertyInput";
import CssPropertyColorInput from "./CssPropertyColorInput";
import CssPropertyButtonGroup from "./CssPropertyButtonGroup";
import CssPropertyTextInput from "./CssPropertyTextInput";
import { Accordion } from "./common/Accordion";

const dimensionProperties = [
  { name: "width", label: "Width", direction: "x" },
  { name: "height", label: "Height", direction: "y" },
];

const dimensionMinMaxProperties = [
  { name: "min-width", label: "Min W", direction: "x" },
  { name: "min-height", label: "Min H", direction: "y" },
  { name: "max-width", label: "Max W", direction: "x" },
  { name: "max-height", label: "Max H", direction: "y" },
];

const fontProperties = [
  { name: "font-size", label: "Font Size", direction: "y" },
  { name: "line-height", label: "Line", direction: "y" },
  { name: "letter-spacing", label: "Spacing", direction: "y" },
];

const textAlignProperty = {
  name: "text-align",
  options: ["left", "center", "right"],
};

const fontFamilyProperty = { name: "font-family", label: "Font Family" };

const fontColorProperty = { name: "color", label: "Text Color" };

const fontWeightProperty = {
  name: "font-weight",
  label: "Font Family",
  options: ["100", "200", "300", "400", "500", "600", "700"],
};

const PaddingProperties = [
  { name: "padding-top", label: "Top", direction: "y" },
  { name: "padding-right", label: "Right", direction: "x" },
  { name: "padding-bottom", label: "Bottom", direction: "y" },
  { name: "padding-left", label: "Left", direction: "x" },
];

const marginProperties = [
  { name: "margin-top", label: "Top", direction: "y" },
  { name: "margin-right", label: "Right", direction: "x" },
  { name: "margin-bottom", label: "Bottom", direction: "y" },
  { name: "margin-left", label: "Left", direction: "x" },
];

const borderWidthProperties = [
  { name: "border-top-width", label: "Top", direction: "y" },
  { name: "border-right-width", label: "Right", direction: "x" },
  { name: "border-bottom-width", label: "Bottom", direction: "y" },
  { name: "border-left-width", label: "Left", direction: "x" },
];

const borderRadiusProperties = [
  { name: "border-top-left-radius", label: "Top Left" },
  { name: "border-top-right-radius", label: "Top Right" },
  { name: "border-bottom-right-radius", label: "B. Right" },
  { name: "border-bottom-left-radius", label: "B. Left" },
];

const borderColorProperty = { name: "border-color", label: "Border Color" };

const colorProperties = [{ name: "background-color", label: "Background C." }];

const positionProperty = {
  name: "position",
  options: ["static", "relative", "absolute", "fixed", "sticky"],
};

const positionDirectionProperties = [
  { name: "top", label: "Top", direction: "y" },
  { name: "right", label: "Right", direction: "x" },
  { name: "bottom", label: "Bottom", direction: "y" },
  { name: "left", label: "Left", direction: "x" },
];

const displayProperty = {
  name: "display",
  options: ["flex", "inline-flex", "block", "inline-block", "inline"],
};

const justifyContentProperty = {
  name: "justify-content",
  options: [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
  ],
};

const alignItemsProperty = {
  name: "align-items",
  options: ["flex-start", "center", "flex-end", "stretch"],
};

const flexProperties = [
  {
    name: "flex-wrap",
    options: ["no-wrap", "wrap"],
  },
  {
    name: "flex-grow",
    options: ["0", "1"],
  },
  {
    name: "flex-shrink",
    options: ["0", "1"],
  },
];

export default function CssProperties({ cssClass }) {
  return (
    <div>
      <Accordion title="Basic" isOpen={true}>
        <div className="flex">
          {colorProperties.map((p) => (
            <CssPropertyColorInput
              key={p.name}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
          {dimensionProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
        <div className="flex mb-3">
          {dimensionMinMaxProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
      </Accordion>
      <Accordion title="Typography" isOpen={true}>
        <div className="mb-3">
          <div className="flex">
            <CssPropertyTextInput
              propertyName={fontFamilyProperty.name}
              label={fontFamilyProperty.label}
              cssClass={cssClass}
            />
            <CssPropertyColorInput
              propertyName={fontColorProperty.name}
              label={fontColorProperty.label}
              cssClass={cssClass}
            />
          </div>
          <div className="flex">
            {fontProperties.map((p) => (
              <CssPropertyInput
                key={p.name}
                direction={p.direction}
                propertyName={p.name}
                label={p.label}
                cssClass={cssClass}
              />
            ))}
          </div>
          <div>
            <p className="text-xs text-gray-400">Font Weight</p>
            <CssPropertyButtonGroup
              propertyName={fontWeightProperty.name}
              options={fontWeightProperty.options}
              cssClass={cssClass}
            />
          </div>
          <div className="mb-3">
            <p className="text-xs text-gray-400">Text Align</p>
            <CssPropertyButtonGroup
              propertyName={textAlignProperty.name}
              options={textAlignProperty.options}
              cssClass={cssClass}
            />
          </div>
        </div>
      </Accordion>
      <Accordion title="Position" isOpen={false}>
        <div className="flex">
          <CssPropertyButtonGroup
            propertyName={positionProperty.name}
            options={positionProperty.options}
            cssClass={cssClass}
          />
        </div>
        <div className="flex mb-3">
          {positionDirectionProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
      </Accordion>
      <Accordion title="Layout" isOpen={false}>
        <div className="mb-3">
          <CssPropertyButtonGroup
            propertyName={displayProperty.name}
            options={displayProperty.options}
            cssClass={cssClass}
          />
        </div>
        <p className="text-sm mb-2">
          Justify Content{" "}
          <span className="text-xs text-gray-400">(Flex only)</span>
        </p>
        <div className="mb-3">
          <CssPropertyButtonGroup
            propertyName={justifyContentProperty.name}
            options={justifyContentProperty.options}
            cssClass={cssClass}
          />
        </div>
        <p className="text-sm mb-2">
          Align Items <span className="text-xs text-gray-400">(Flex only)</span>
        </p>
        <div className="mb-3">
          <CssPropertyButtonGroup
            propertyName={alignItemsProperty.name}
            options={alignItemsProperty.options}
            cssClass={cssClass}
          />
        </div>
        <div className="flex mb-3">
          {flexProperties.map((p) => (
            <div className="w-1/3" key={p.name}>
              <CssPropertyButtonGroup
                propertyName={p.name}
                label={p.name}
                options={p.options}
                cssClass={cssClass}
              />
            </div>
          ))}
        </div>
      </Accordion>
      <Accordion title="Spacing" isOpen={false}>
        <p className="text-sm mb-2">Padding</p>
        <div className="flex mb-3">
          {PaddingProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
        <p className="text-sm mb-2">Margin</p>
        <div className="flex mb-3">
          {marginProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
      </Accordion>
      <Accordion title="Border" isOpen={false}>
        <CssPropertyColorInput
          propertyName={borderColorProperty.name}
          label={borderColorProperty.label}
          cssClass={cssClass}
        />
        <p className="text-sm mb-2">Border Radius</p>
        <div className="flex mb-3">
          {borderRadiusProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
        <p className="text-sm mb-2">Border Width</p>
        <div className="flex mb-3">
          {borderWidthProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
      </Accordion>
    </div>
  );
}
