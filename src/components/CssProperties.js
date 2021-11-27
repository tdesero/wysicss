import CssPropertyInput from "./CssPropertyInput";
import CssPropertyColorInput from "./CssPropertyColorInput";
import CssPropertyButtonGroup from "./CssPropertyButtonGroup";
import CssPropertyIconButtonGroup from "./CssPropertyIconButtonGroup";
import CssPropertyTextInput from "./CssPropertyTextInput";
import { Accordion } from "./common/Accordion";

//Icons
import * as Icon from "react-feather";
import {
  Icon as WPIcon,
  formatStrikethrough,
  formatItalic,
  formatUnderline,
  formatUppercase,
  formatLowercase,
  formatCapitalize,
  justifyCenter,
  justifySpaceBetween,
  justifyLeft,
  justifyRight,
  alignLeft,
  alignCenter,
  alignRight,
  columns,
} from "@wordpress/icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import CssPropertySelect from "./CssPropertySelect";

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
    {
      value: "left",
      icon: <WPIcon fill="currentColor" icon={alignLeft} size={20} />,
    },
    {
      value: "center",
      icon: <WPIcon fill="currentColor" icon={alignCenter} size={20} />,
    },
    {
      value: "right",
      icon: <WPIcon fill="currentColor" icon={alignRight} size={20} />,
    },
  ],
};

const fontStyleProperty = {
  name: "font-style",
  options: [
    /** TODO: Do i need this?
    { value: "normal", icon: <Icon.X size={20} /> }, */
    {
      value: "italic",
      icon: <WPIcon fill="currentColor" icon={formatItalic} size={20} />,
    },
  ],
};

const textDecorationProperty = {
  name: "text-decoration",
  options: [
    /** TODO: Do I need this? 
    { value: "none", icon: <Icon.X size={20} /> },*/
    {
      value: "underline",
      icon: <WPIcon fill="currentColor" icon={formatUnderline} size={20} />,
    },
    {
      value: "line-through",
      icon: <WPIcon fill="currentColor" icon={formatStrikethrough} size={20} />,
    },
  ],
};

const textTransformProperty = {
  name: "text-transform",
  options: [
    /** TODO: Do I need this? 
    { value: "none", icon: <Icon.X size={20} /> },*/
    {
      value: "uppercase",
      icon: <WPIcon fill="currentColor" icon={formatUppercase} size={20} />,
    },
    {
      value: "lowercase",
      icon: <WPIcon fill="currentColor" icon={formatLowercase} size={20} />,
    },
    {
      value: "capitalize",
      icon: <WPIcon fill="currentColor" icon={formatCapitalize} size={20} />,
    },
  ],
};

const fontFamilyProperty = { name: "font-family", label: "Font Family" };

const fontColorProperty = { name: "color", label: "Text Color" };

const fontWeightProperty = {
  name: "font-weight",
  label: "Font Weight",
  options: [
    { value: "100", label: "Thin" },
    { value: "200", label: "Extra Light" },
    { value: "300", label: "Light" },
    { value: "400", label: "Regular" },
    { value: "500", label: "Medium" },
    { value: "600", label: "Semi Bold" },
    { value: "700", label: "Bold" },
    { value: "800", label: "Extra Bold" },
    { value: "900", label: "Black" },
  ],
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
    {
      value: "flex-start",
      icon: <WPIcon fill="currentColor" icon={justifyLeft} size={20} />,
    },
    {
      value: "center",
      icon: <WPIcon fill="currentColor" icon={justifyCenter} size={20} />,
    },
    {
      value: "flex-end",
      icon: <WPIcon fill="currentColor" icon={justifyRight} size={20} />,
    },
    {
      value: "space-between",
      icon: <WPIcon fill="currentColor" icon={justifySpaceBetween} size={20} />,
    },
    /* I don't have a icon for this and you probably wont need it anyway...
    {
      value: "space-around",
      icon: <WPIcon icon={justifySpaceBetween} size={20} />,
    },*/
  ],
};

const alignItemsProperty = {
  name: "align-items",
  options: [
    {
      value: "flex-start",
      icon: (
        <WPIcon
          fill="currentColor"
          className="transform rotate-90"
          icon={justifyLeft}
          size={20}
        />
      ),
    },
    {
      value: "center",
      icon: (
        <WPIcon
          fill="currentColor"
          className="transform rotate-90"
          icon={justifyCenter}
          size={20}
        />
      ),
    },
    {
      value: "flex-end",
      icon: (
        <WPIcon
          fill="currentColor"
          className="transform rotate-90"
          icon={justifyRight}
          size={20}
        />
      ),
    },
    {
      value: "stretch",
      icon: <WPIcon fill="currentColor" icon={columns} size={20} />,
    },
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

const visbilityProperties = [
  {
    name: "visibility",
    label: "Visibility",
    options: [{ value: "hidden", icon: <Icon.EyeOff size={20} /> }],
  },
  {
    name: "overflow-y",
    label: "Overflow Y",
    options: [
      { value: "hidden", icon: <Icon.EyeOff size={20} /> },
      { value: "scroll", icon: <Icon.ArrowDown size={20} /> },
    ],
  },
  {
    name: "overflow-x",
    label: "Overflow X",
    options: [
      { value: "hidden", icon: <Icon.EyeOff size={20} /> },
      { value: "scroll", icon: <Icon.ArrowRight size={20} /> },
    ],
  },
];

const opacityProperty = {
  name: "opacity",
  label: "Opacity",
};

export default function CssProperties({ cssClass, elementSelected }) {
  return (
    <div>
      <Accordion title="Basic" isOpen={true}>
        <div className="flex gap-2">
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
        <div className="flex gap-2 mb-3">
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
          <div className="flex gap-2">
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
          <div className="flex gap-2">
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
          <div className="flex gap-2">
            <CssPropertySelect
              propertyName={fontWeightProperty.name}
              label={fontWeightProperty.label}
              options={fontWeightProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              propertyName={textAlignProperty.name}
              options={textAlignProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              propertyName={fontStyleProperty.name}
              options={fontStyleProperty.options}
              cssClass={cssClass}
            />
          </div>
          <div class="flex gap-2">
            <CssPropertyIconButtonGroup
              propertyName={textTransformProperty.name}
              options={textTransformProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              propertyName={textDecorationProperty.name}
              options={textDecorationProperty.options}
              cssClass={cssClass}
            />
          </div>
        </div>
      </Accordion>
      <Accordion title="Position" isOpen={false}>
        <div className="flex gap-2">
          <CssPropertyButtonGroup
            propertyName={positionProperty.name}
            options={positionProperty.options}
            cssClass={cssClass}
          />
        </div>
        <div className="flex gap-2 mb-3">
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
        <div className="flex gap-2">
          <div className="mb-3">
            <p className="text-sm mb-2">
              Justify <span className="text-xs text-gray-400">(Flex only)</span>
            </p>

            <CssPropertyIconButtonGroup
              propertyName={justifyContentProperty.name}
              options={justifyContentProperty.options}
              cssClass={cssClass}
            />
          </div>
          <div className="mb-3">
            <p className="text-sm mb-2">
              Align <span className="text-xs text-gray-400">(Flex only)</span>
            </p>
            <CssPropertyIconButtonGroup
              propertyName={alignItemsProperty.name}
              options={alignItemsProperty.options}
              cssClass={cssClass}
            />
          </div>
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
        <div className="flex gap-2 mb-3">
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
        <div className="flex gap-2 mb-3">
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
        <div className="flex gap-2 mb-3">
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
        <div className="flex gap-2 mb-3">
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
      <Accordion title="Visibility">
        <div class="flex gap-2">
          {visbilityProperties.map((p) => (
            <div>
              <CssPropertyIconButtonGroup
                label={p.name}
                propertyName={p.name}
                options={p.options}
                cssClass={cssClass}
              />
            </div>
          ))}
        </div>
        <CssPropertyInput
          propertyName={opacityProperty.name}
          label={opacityProperty.label}
          cssClass={cssClass}
          hasUnit={false}
          step="0.1"
          min="0"
          max="1"
        />
      </Accordion>
    </div>
  );
}
