import CssPropertyInput from "./CssPropertyInput";
import CssPropertyColorInput from "./CssPropertyColorInput";
import CssPropertyButtonGroup from "./CssPropertyButtonGroup";
import CssPropertyIconButtonGroup from "./CssPropertyIconButtonGroup";
import CssPropertyTextInput from "./CssPropertyTextInput";
import { Accordion } from "./common/Accordion";

//Icons
import * as Icon from "react-feather";
import "bootstrap-icons/font/bootstrap-icons.css";

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
  options: [
    { value: "left", icon: <Icon.AlignLeft size={20} /> },
    { value: "center", icon: <Icon.AlignCenter size={20} /> },
    { value: "right", icon: <Icon.AlignRight size={20} /> },
  ],
};

const fontStyleProperty = {
  name: "font-style",
  options: [
    { value: "normal", icon: <Icon.X size={20} /> },
    { value: "italic", icon: <Icon.Italic size={20} /> },
  ],
};

const textDecorationProperty = {
  name: "text-decoration",
  options: [
    { value: "none", icon: <Icon.X size={20} /> },
    { value: "underline", icon: <Icon.Underline size={20} /> },
    { value: "line-through", icon: <Icon.Minus size={20} /> },
  ],
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
    { value: "flex-start", icon: <i className="bi-align-start mx-1" /> },
    { value: "center", icon: <i className="bi-align-center mx-1" /> },
    { value: "flex-end", icon: <i className="bi-align-end mx-1" /> },
    {
      value: "space-between",
      icon: <i className="bi-layout-three-columns mx-2" />,
    },
    {
      value: "space-around",
      icon: <i className="bi-distribute-horizontal mx-1" />,
    },
  ],
};

const alignItemsProperty = {
  name: "align-items",
  options: [
    {
      value: "flex-start",
      icon: <i className="bi-align-top mx-1" />,
    },
    { value: "center", icon: <i className="bi-align-middle mx-1" /> },
    {
      value: "flex-end",
      icon: <i className="bi-align-bottom mx-1" />,
    },
    { value: "stretch", icon: <i className="bi-view-stacked mx-1" /> },
  ],
};

const flexProperties = [
  {
    name: "flex-wrap",
    options: [
      { value: "no-wrap", icon: <Icon.X size={20} /> },
      { value: "wrap", icon: <Icon.Check size={20} /> },
    ],
  },
  {
    name: "flex-grow",
    options: [
      { value: "0", icon: <Icon.X size={20} /> },
      { value: "1", icon: <Icon.Check size={20} /> },
    ],
  },
  {
    name: "flex-shrink",
    options: [
      { value: "0", icon: <Icon.X size={20} /> },
      { value: "1", icon: <Icon.Check size={20} /> },
    ],
  },
];

const imageProperties = [
  {
    name: "object-fit",
    options: [
      { value: "none", icon: <Icon.X size="20" /> },
      {
        value: "fill",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              d=" M 3 4 L 3 4 L 3 4 L 3 4 L 3 4"
              stroke-width="2"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="none"
            ></path>
            <path
              d=" M 2 5 L 2 19 L 22 19 L 22 5 L 2 5 Z"
              stroke-width="2"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="none"
            ></path>
            <path
              d=" M 5 8 L 5 16 L 19 16 L 19 8 L 5 8 Z"
              stroke-width="2"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="currentColor"
            ></path>
          </svg>
        ),
      },
      {
        value: "cover",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              d=" M 2 6 L 2 18 L 22 18 L 22 6 L 2 6 Z"
              stroke-width="2"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="none"
            ></path>
            <path
              d=" M 18 2 L 6 2 L 6 22 L 18 22 L 18 2 Z"
              stroke-width="2"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="none"
            ></path>
            <path
              d=" M 6 6 L 6 18 L 18 18 L 18 6 L 6 6 Z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="currentColor"
            ></path>
          </svg>
        ),
      },
      {
        value: "contain",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              d=" M 3 3 L 3 21 L 21 21 L 21 3 L 3 3 Z"
              stroke-width="2"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="none"
            ></path>
            <path
              d=" M 2 7 L 2 17 L 22 17 L 22 7 L 2 7 Z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              fill="currentColor"
            ></path>
          </svg>
        ),
      },
    ],
  },
];

export default function CssProperties({ cssClass, elementSelected }) {
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
      {elementSelected.tag === "img" && (
        <Accordion title="Image Settings" isOpen={true}>
          {imageProperties.map((p) => (
            <div key={p.name}>
              <CssPropertyIconButtonGroup
                propertyName={p.name}
                label={p.name}
                options={p.options}
                cssClass={cssClass}
              />
            </div>
          ))}
        </Accordion>
      )}
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
          <div className="flex mb-3">
            <CssPropertyIconButtonGroup
              label="Text Align"
              propertyName={textAlignProperty.name}
              options={textAlignProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              label="Font Style"
              propertyName={fontStyleProperty.name}
              options={fontStyleProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              label="Text Decoration"
              propertyName={textDecorationProperty.name}
              options={textDecorationProperty.options}
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
          <CssPropertyIconButtonGroup
            propertyName={justifyContentProperty.name}
            options={justifyContentProperty.options}
            cssClass={cssClass}
          />
        </div>
        <p className="text-sm mb-2">
          Align Items <span className="text-xs text-gray-400">(Flex only)</span>
        </p>
        <div className="mb-3">
          <CssPropertyIconButtonGroup
            propertyName={alignItemsProperty.name}
            options={alignItemsProperty.options}
            cssClass={cssClass}
          />
        </div>
        <div className="flex mb-3">
          {flexProperties.map((p) => (
            <div className="w-1/3" key={p.name}>
              <CssPropertyIconButtonGroup
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
