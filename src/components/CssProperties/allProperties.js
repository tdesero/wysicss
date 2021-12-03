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
  moveTo,
} from "@wordpress/icons";
import ImageIcons from "./ImageIcons";

export const dimensionProperties = [
  { name: "width", label: "Width", direction: "x" },
  { name: "height", label: "Height", direction: "y" },
];
export const dimensionMinMaxProperties = [
  { name: "min-width", label: "Min W", direction: "x" },
  { name: "min-height", label: "Min H", direction: "y" },
  { name: "max-width", label: "Max W", direction: "x" },
  { name: "max-height", label: "Max H", direction: "y" },
];
export const fontProperties = [
  { name: "font-size", label: "Font Size", direction: "y" },
  { name: "line-height", label: "Line", direction: "y" },
  { name: "letter-spacing", label: "Spacing", direction: "y" },
];
export const textAlignProperty = {
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
export const fontStyleProperty = {
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
export const textDecorationProperty = {
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
export const textTransformProperty = {
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
export const fontFamilyProperty = { name: "font-family", label: "Font Family" };
export const fontColorProperty = { name: "color", label: "Text Color" };
export const fontWeightProperty = {
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
/* Spacings need a more individual solution...
export const PaddingProperties = [
  { name: "padding-top", label: "Top", direction: "y" },
  { name: "padding-right", label: "Right", direction: "x" },
  { name: "padding-bottom", label: "Bottom", direction: "y" },
  { name: "padding-left", label: "Left", direction: "x" },
];
export const marginProperties = [
  { name: "margin-top", label: "Top", direction: "y" },
  { name: "margin-right", label: "Right", direction: "x" },
  { name: "margin-bottom", label: "Bottom", direction: "y" },
  { name: "margin-left", label: "Left", direction: "x" },
]; */
/*
export const borderWidthProperties = [
  { name: "border-top-width", label: "Top", direction: "y" },
  { name: "border-right-width", label: "Right", direction: "x" },
  { name: "border-bottom-width", label: "Bottom", direction: "y" },
  { name: "border-left-width", label: "Left", direction: "x" },
];*/
/*
export const borderRadiusProperties = [
  { name: "border-top-left-radius", label: "Top Left" },
  { name: "border-top-right-radius", label: "Top Right" },
  { name: "border-bottom-right-radius", label: "B. Right" },
  { name: "border-bottom-left-radius", label: "B. Left" },
];*/
export const borderColorProperty = {
  name: "border-color",
  label: "Border Color",
};
export const colorProperties = [
  { name: "background-color", label: "Background C." },
];
export const positionProperty = {
  name: "position",
  options: ["static", "relative", "absolute", "fixed", "sticky"],
};
export const positionDirectionProperties = [
  { name: "top", label: "Top", direction: "y" },
  { name: "right", label: "Right", direction: "x" },
  { name: "bottom", label: "Bottom", direction: "y" },
  { name: "left", label: "Left", direction: "x" },
];
export const displayProperty = {
  name: "display",
  options: ["flex", "inline-flex", "block", "inline-block", "inline"],
};
export const justifyContentProperty = {
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
export const alignItemsProperty = {
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
export const flexProperties = [
  {
    name: "flex-wrap",
    options: [
      { value: "no-wrap", icon: <Icon.X size={20} /> },
      {
        value: "wrap",
        icon: <WPIcon icon={moveTo} fill="currentColor" size={20} />,
      },
    ],
  },
];

export const flexChildProperties = [
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
export const imageProperties = [
  {
    name: "object-fit",
    options: [
      { value: "none", icon: <Icon.X size="20" /> },
      {
        value: "fill",
        icon: <ImageIcons.Fill />,
      },
      {
        value: "cover",
        icon: <ImageIcons.Cover />,
      },
      {
        value: "contain",
        icon: <ImageIcons.Contain />,
      },
    ],
  },
];
export const visbilityProperties = [
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
export const opacityProperty = {
  name: "opacity",
  label: "Opacity",
};
